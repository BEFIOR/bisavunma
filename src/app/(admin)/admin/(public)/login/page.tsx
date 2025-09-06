import { redirect } from "next/navigation";
import { LoginSchema } from "@/server/schemas/auth";
import { findUserByEmail } from "@/server/repositories/users";
import { verifyPassword } from "@/server/auth/password";
import { startSession, getCurrentUser } from "@/server/auth/session";
import { ensureAdminSeed } from "@/server/auth/bootstrap";
import { headers } from "next/headers";
import {
  isRateLimited,
  recordFailedAttempt,
  resetAttempts,
  RATE_LIMIT_WINDOW_MINUTES,
  RATE_LIMIT_MAX_ATTEMPTS,
} from "@/server/rate-limit";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const hasError = Boolean(sp?.error);
  await ensureAdminSeed();
  // Oturum açık ise admin ana sayfaya gönder
  const me = await getCurrentUser();
  if (me) redirect("/admin");

  async function loginAction(formData: FormData) {
    "use server";
    const hdrs = await headers();
    const ip = (hdrs.get("x-forwarded-for") || hdrs.get("x-real-ip") || "unknown").split(",")[0].trim();
    const ipKey = `ip:${ip}`;

    // Quick IP-based gate before any heavy work
    if (isRateLimited(ipKey)) {
      redirect("/admin/login?error=rate_limited");
    }
    const parsed = LoginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    if (!parsed.success) {
      // count invalid payload as a failed attempt
      recordFailedAttempt(ipKey);
      redirect("/admin/login?error=invalid");
    }
    const { email, password } = parsed.data;
    const emailKey = `email:${email.toLowerCase()}`;

    // Gate by email and IP together
    if (isRateLimited(ipKey) || isRateLimited(emailKey)) {
      redirect("/admin/login?error=rate_limited");
    }
    const user = await findUserByEmail(email);
    if (!user) {
      recordFailedAttempt(ipKey);
      recordFailedAttempt(emailKey);
      redirect("/admin/login?error=invalid");
    }
    const ok = verifyPassword(password, user.passwordSalt, user.passwordHash);
    if (!ok) {
      recordFailedAttempt(ipKey);
      recordFailedAttempt(emailKey);
      redirect("/admin/login?error=invalid");
    }
    // Success: reset counters
    resetAttempts(ipKey);
    resetAttempts(emailKey);
    await startSession(user.id);
    redirect("/admin");
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <form
        action={loginAction}
        className="w-full max-w-sm space-y-4 border p-6 rounded-md"
      >
        <h1 className="text-xl font-semibold">Admin Giriş</h1>
        {hasError && (
          <div className="text-red-600 text-sm">E‑posta veya şifre hatalı</div>
        )}
        {sp?.error === "rate_limited" && (
          <div className="text-red-600 text-sm">
            Çok fazla deneme yapıldı. Lütfen {RATE_LIMIT_WINDOW_MINUTES} dakika içinde en fazla {RATE_LIMIT_MAX_ATTEMPTS} kez deneyin.
          </div>
        )}
        <div className="space-y-1">
          <label className="text-sm" htmlFor="email">
            E‑posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm" htmlFor="password">
            Şifre
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

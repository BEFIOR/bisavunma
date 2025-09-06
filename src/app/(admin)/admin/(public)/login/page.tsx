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
    const ip = (
      hdrs.get("x-forwarded-for") ||
      hdrs.get("x-real-ip") ||
      "unknown"
    )
      .split(",")[0]
      .trim();
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
    <div className="h-screen flex items-center justify-center p-4 bg-gray-950 text-gray-100">
      <form
        action={loginAction}
        className="w-full max-w-sm space-y-4 rounded-xl border border-gray-800 bg-gray-950/60 p-6"
      >
        <h1 className="text-xl font-semibold">Admin Giriş</h1>
        {hasError && (
          <div className="text-red-400 text-sm">E‑posta veya şifre hatalı</div>
        )}
        {sp?.error === "rate_limited" && (
          <div className="text-red-400 text-sm">
            Çok fazla deneme yapıldı. Lütfen {RATE_LIMIT_WINDOW_MINUTES} dakika
            içinde en fazla {RATE_LIMIT_MAX_ATTEMPTS} kez deneyin.
          </div>
        )}
        <div className="space-y-1">
          <label className="text-sm text-gray-300" htmlFor="email">
            E‑posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-300" htmlFor="password">
            Şifre
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            required
          />
        </div>
        <button className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white py-2">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

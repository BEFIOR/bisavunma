import { redirect } from "next/navigation";
import { getCurrentUser, endSession } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";
import Link from "next/link";

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");

  async function logoutAction() {
    "use server";
    await requireAdmin();
    await endSession();
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-40 bg-black text-white px-4 py-3 flex items-center justify-between">
        <div className="font-semibold">
          <Link href="/admin">Admin</Link>
        </div>
        <form action={logoutAction}>
          <button className="text-sm underline">Çıkış</button>
        </form>
      </nav>
      <div className="p-4 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}

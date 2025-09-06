import { redirect } from "next/navigation";
import { getCurrentUser, endSession } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";
import Link from "next/link";
import Sidebar from "./_components/Sidebar";

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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <nav className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">
            <Link href="/admin" className="hover:opacity-90">BİSAVUNMA · Admin</Link>
          </div>
          <form action={logoutAction}>
            <button className="text-sm text-gray-300 hover:text-white">Çıkış</button>
          </form>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          <div className="hidden md:block"><Sidebar /></div>
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}

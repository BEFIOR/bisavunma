import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/auth/session";

export default async function AdminSettings() {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Ayarlar</h1>
      <p className="text-gray-600">Sistem ayarları için yer tutucu sayfa.</p>
      <p className="text-sm text-gray-500">Marka içerikleri, entegrasyon anahtarları vb. burada yönetilebilir.</p>
    </div>
  );
}


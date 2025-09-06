import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/auth/session";

export default async function AdminCategories() {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Kategoriler</h1>
      <p className="text-gray-600">Kategori yönetimi için yer tutucu sayfa.</p>
      <p className="text-sm text-gray-500">Gerektiğinde ağaç yapısı, sıralama ve düzenleme burada uygulanabilir.</p>
    </div>
  );
}


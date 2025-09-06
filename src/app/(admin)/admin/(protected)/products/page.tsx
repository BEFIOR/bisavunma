import Link from "next/link";
import { listProducts, deleteProduct } from "@/server/repositories/products";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";

export default async function AdminProducts({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const me = await getCurrentUser();
  if (!me) return null;

  const { q } = (await searchParams) ?? {};
  const products = await listProducts({ q });

  async function removeAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const slug = String(formData.get("slug"));
    await deleteProduct(slug);
    revalidatePath("/urunler");
    revalidatePath("/urun");
    revalidatePath("/admin/products");
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Ürünler</h1>
        <Link href="/admin/products/new" className="bg-black text-white px-3 py-2 rounded">Yeni Ürün</Link>
      </div>

      <form className="flex gap-2" method="GET">
        <input type="text" name="q" defaultValue={q ?? ""} placeholder="Ara" className="border rounded px-3 py-2 w-full max-w-md" />
        <button className="border px-3 py-2 rounded">Ara</button>
      </form>

      <div className="rounded border divide-y">
        {products.map((p) => (
          <div key={p.slug} className="flex items-center justify-between gap-3 p-3">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-gray-500">/{p.slug}</div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/admin/products/${p.slug}/edit`} className="text-blue-600">Düzenle</Link>
              <form action={removeAction}>
                <input type="hidden" name="slug" value={p.slug} />
                <button className="text-red-600" aria-label={`Sil ${p.title}`}>Sil</button>
              </form>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="p-6 text-gray-600">Kayıt bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

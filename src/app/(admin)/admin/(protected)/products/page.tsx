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
        <Link href="/admin/products/new" className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2">Yeni Ürün</Link>
      </div>

      <form className="flex gap-2" method="GET">
        <input
          type="text"
          name="q"
          defaultValue={q ?? ""}
          placeholder="Ara"
          className="w-full max-w-md rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
        />
        <button className="rounded-lg border border-gray-800 px-3 py-2 text-gray-200 hover:bg-gray-900">
          Ara
        </button>
      </form>

      <div className="rounded-xl border border-gray-800 divide-y divide-gray-800 bg-gray-950/60">
        {products.map((p) => (
          <div key={p.slug} className="flex items-center justify-between gap-3 p-3">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-gray-500">/{p.slug}</div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/products/${p.slug}/edit`} className="text-emerald-400 hover:text-emerald-300">Düzenle</Link>
              <form action={removeAction}>
                <input type="hidden" name="slug" value={p.slug} />
                <button className="text-red-400 hover:text-red-300" aria-label={`Sil ${p.title}`}>
                  Sil
                </button>
              </form>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="p-6 text-gray-400">Kayıt bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

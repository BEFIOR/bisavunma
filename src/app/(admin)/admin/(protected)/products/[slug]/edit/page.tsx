import { notFound, redirect } from "next/navigation";
import { getProduct, updateProduct, deleteProduct } from "@/server/repositories/products";
import { listCategories, getProductCategoryIds } from "@/server/repositories/categories";
import { ProductUpdateSchema } from "@/server/schemas/products";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";

type Params = { slug: string };

export default async function EditProductPage({ params }: { params: Promise<Params> }) {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const categories = await listCategories();
  const selectedIds = await getProductCategoryIds(slug);
  const selected = selectedIds[0];

  async function saveAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const categoryRaw = formData.get("categoryId");
    const categoryId = typeof categoryRaw === "string" && categoryRaw.trim() !== "" ? categoryRaw : undefined;
    const parsed = ProductUpdateSchema.safeParse({
      slug,
      title: formData.get("title"),
      description: formData.get("description") ?? undefined,
      image: formData.get("image") ?? undefined,
      categoryId,
      altCategory: formData.get("altCategory") ?? undefined,
    });
    if (!parsed.success) {
      redirect(`/admin/products/${slug}/edit?error=validation`);
    }
    await updateProduct(slug, parsed.data);
    revalidatePath("/urunler");
    revalidatePath(`/urun/${slug}`);
    revalidatePath("/admin/products");
  }

  async function removeAction() {
    "use server";
    await requireAdmin();
    await deleteProduct(slug);
    revalidatePath("/urunler");
    revalidatePath(`/urun/${slug}`);
    revalidatePath("/admin/products");
    redirect("/admin/products");
  }

  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Ürün Düzenle</h1>
        <form action={removeAction}>
          <button className="text-red-400 hover:text-red-300" aria-label="Sil">Sil</button>
        </form>
      </div>
      <form action={saveAction} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-300">Başlık</label>
          <input name="title" defaultValue={product.title} className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500" required />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Açıklama</label>
          <textarea name="description" defaultValue={product.description ?? ""} className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500" rows={4} />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Görsel URL</label>
          <input name="image" defaultValue={product.image ?? ""} className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500" />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-300">Alt Kategori (opsiyonel)</label>
          <select name="altCategory" defaultValue={product.altCategory ?? ""} className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100">
            <option value="">Seçiniz</option>
            <option>RF Sensörleri</option>
            <option>Yön Bulma</option>
            <option>Platform Entegrasyonları</option>
            <option>TSCM (Dinlemeye Karşı Önlemler)</option>
            <option>RF Kayıt (I/Q)</option>
            <option>RFeye Suite (Yazılım)</option>
          </select>
          <p className="mt-1 text-xs text-gray-500">Boş bırakırsanız veritabanında null olarak saklanır.</p>
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-300">Kategori</label>
          <select name="categoryId" defaultValue={selected ?? ""} className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100">
            <option value="">Seçiniz</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

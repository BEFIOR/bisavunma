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
          <button className="text-red-600" aria-label="Sil">Sil</button>
        </form>
      </div>
      <form action={saveAction} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Başlık</label>
          <input name="title" defaultValue={product.title} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Açıklama</label>
          <textarea name="description" defaultValue={product.description ?? ""} className="w-full border rounded px-3 py-2" rows={4} />
        </div>
        <div>
          <label className="block text-sm mb-1">Görsel URL</label>
          <input name="image" defaultValue={product.image ?? ""} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-2">Kategori</label>
          <select name="categoryId" defaultValue={selected ?? ""} className="w-full border rounded px-3 py-2">
            <option value="">Seçiniz</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 rounded">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

import { redirect } from "next/navigation";
import { ProductCreateSchema } from "@/server/schemas/products";
import { createProduct } from "@/server/repositories/products";
import { listCategories } from "@/server/repositories/categories";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";

export default async function NewProductPage() {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");
  const categories = await listCategories();

  async function createAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const categoryRaw = formData.get("categoryId");
    const categoryId =
      typeof categoryRaw === "string" && categoryRaw.trim() !== ""
        ? categoryRaw
        : undefined;
    const parsed = ProductCreateSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description") ?? undefined,
      image: formData.get("image") ?? undefined,
      slug: formData.get("slug") ?? undefined,
      categoryId,
    });
    if (!parsed.success) {
      redirect("/admin/products/new?error=validation");
    }
    const { slug } = await createProduct(parsed.data);
    revalidatePath("/urunler");
    revalidatePath(`/urun/${slug}`);
    revalidatePath("/admin/products");
    redirect(`/admin/products/${slug}/edit`);
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">Yeni Ürün</h1>
      <form action={createAction} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-300">Başlık</label>
          <input
            name="title"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Slug (opsiyonel)</label>
          <input
            name="slug"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            placeholder="bos bırakırsan otomatik"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Açıklama</label>
          <textarea
            name="description"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Görsel URL</label>
          <input
            name="image"
            className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-300">Kategori</label>
          <select name="categoryId" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100">
            <option value="">Seçiniz</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
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

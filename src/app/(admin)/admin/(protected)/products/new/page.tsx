import { redirect } from "next/navigation";
import { ProductCreateSchema } from "@/server/schemas/products";
import { createProduct } from "@/server/repositories/products";
import { listCategories } from "@/server/repositories/categories";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

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
    // If a URL is provided, prefer it. Otherwise, save uploaded file and use its path.
    const imageUrlRaw = formData.get("image");
    const imageFromUrl =
      typeof imageUrlRaw === "string" && imageUrlRaw.trim() !== ""
        ? imageUrlRaw.trim()
        : undefined;

    let uploadedImagePath: string | undefined = undefined;
    const file = formData.get("imageFile");
    if (!imageFromUrl && file && typeof file !== "string") {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });
      const orig = file.name || "image";
      const ext = path.extname(orig) || ".bin";
      const base = path
        .basename(orig, ext)
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") || "image";
      const unique = `${base}-${Date.now()}${ext}`;
      const filePath = path.join(uploadDir, unique);
      await writeFile(filePath, buffer);
      uploadedImagePath = `/uploads/${unique}`;
    }

    const parsed = ProductCreateSchema.safeParse({
      title: formData.get("title"),
      description: formData.get("description") ?? undefined,
      image: imageFromUrl ?? uploadedImagePath ?? undefined,
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
          <p className="mt-1 text-xs text-gray-500">İstersen URL gir veya aşağıdan dosya yükle.</p>
        </div>
        <div>
          <label className="block text-sm mb-1 text-gray-300">Görsel Yükle</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            className="block w-full text-sm text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-gray-800 file:px-3 file:py-2 file:text-gray-200 hover:file:bg-gray-700"
          />
          <p className="mt-1 text-xs text-gray-500">Dosya yüklerseniz sunucuda /uploads altında saklanır.</p>
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

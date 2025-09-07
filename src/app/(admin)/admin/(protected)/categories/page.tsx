import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/server/auth/session";
import { requireAdmin } from "@/server/auth/guard";
import { listCategories, createCategory, updateCategory, deleteCategory } from "@/server/repositories/categories";

export default async function AdminCategories() {
  const me = await getCurrentUser();
  if (!me) redirect("/admin/login");

  const categories = await listCategories();

  async function createAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const titleRaw = formData.get("title");
    const parentRaw = formData.get("parentId");
    const title = typeof titleRaw === "string" ? titleRaw.trim() : "";
    const parentId = typeof parentRaw === "string" && parentRaw.trim() !== "" ? Number(parentRaw) : null;
    if (!title) return;
    await createCategory({ title, parentId });
    revalidatePath("/admin/categories");
  }

  async function updateAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const idRaw = formData.get("id");
    const titleRaw = formData.get("title");
    const parentRaw = formData.get("parentId");
    const id = Number(idRaw);
    const title = typeof titleRaw === "string" ? titleRaw.trim() : undefined;
    const parentId = typeof parentRaw === "string" ? (parentRaw.trim() === "" ? null : Number(parentRaw)) : undefined;
    if (!Number.isFinite(id)) return;
    await updateCategory(id, { title, parentId });
    revalidatePath("/admin/categories");
  }

  async function removeAction(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = Number(formData.get("id"));
    if (!Number.isFinite(id)) return;
    await deleteCategory(id);
    revalidatePath("/admin/categories");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Kategoriler</h1>

      <form action={createAction} className="flex flex-wrap items-end gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Başlık</label>
          <input
            type="text"
            name="title"
            placeholder="Kategori adı"
            className="w-72 rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100 placeholder-gray-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Üst Kategori</label>
          <select name="parentId" className="w-64 rounded-lg bg-gray-900 border border-gray-800 px-3 py-2 text-gray-100">
            <option value="">— Yok —</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <button className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2">Ekle</button>
      </form>

      <div className="rounded-xl border border-gray-800 divide-y divide-gray-800 bg-gray-950/60">
        {categories.map((c) => (
          <div key={c.id} className="flex items-center justify-between gap-3 p-3">
            <div>
              <div className="font-medium">{c.title}</div>
              <div className="text-xs text-gray-500">/{c.slug}</div>
              {c.parentId && (
                <div className="text-xs text-gray-500">Üst: {categories.find((x) => x.id === c.parentId)?.title}</div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <form action={updateAction} className="flex items-center gap-2">
                <input type="hidden" name="id" value={c.id} />
                <input
                  type="text"
                  name="title"
                  defaultValue={c.title}
                  className="w-56 rounded-lg bg-gray-900 border border-gray-800 px-2 py-1 text-gray-100"
                />
                <select name="parentId" defaultValue={c.parentId ?? ""} className="w-48 rounded-lg bg-gray-900 border border-gray-800 px-2 py-1 text-gray-100">
                  <option value="">— Üst Yok —</option>
                  {categories.filter((x) => x.id !== c.id).map((x) => (
                    <option key={x.id} value={x.id}>{x.title}</option>
                  ))}
                </select>
                <button className="text-emerald-400 hover:text-emerald-300">Güncelle</button>
              </form>
              <form action={removeAction}>
                <input type="hidden" name="id" value={c.id} />
                <button className="text-red-400 hover:text-red-300" aria-label={`Sil ${c.title}`}>
                  Sil
                </button>
              </form>
            </div>
          </div>
        ))}
        {categories.length === 0 && (
          <div className="p-6 text-gray-400">Henüz kategori yok.</div>
        )}
      </div>
    </div>
  );
}

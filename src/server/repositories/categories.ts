import prisma from "@/server/db/client";

function slugify(input: string) {
  const trMap: Record<string, string> = {
    İ: "i", I: "i", ı: "i", i: "i",
    Ş: "s", ş: "s",
    Ğ: "g", ğ: "g",
    Ç: "c", ç: "c",
    Ö: "o", ö: "o",
    Ü: "u", ü: "u",
  };
  const replaced = input.replace(/[İIıişğçöüŞĞÇÖÜ]/g, (ch) => trMap[ch] ?? ch);
  let s = replaced
    .toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
  if (s === "") s = "kategori";
  return s;
}

export async function listCategories() {
  return prisma.category.findMany({
    orderBy: [{ position: "asc" }, { title: "asc" }],
    select: { id: true, slug: true, title: true, parentId: true },
  });
}

export async function getProductCategoryIds(productSlug: string): Promise<number[]> {
  const rows = await prisma.productCategory.findMany({
    where: { productSlug },
    select: { categoryId: true },
    orderBy: { position: "asc" },
  });
  return rows.map((r) => r.categoryId);
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    select: { id: true, slug: true, title: true, description: true, parentId: true },
  });
}

export async function createCategory(input: { slug?: string; title: string; description?: string; parentId?: number | null; position?: number }) {
  const desired = input.slug && input.slug.trim() !== "" ? input.slug : slugify(input.title);

  return prisma.$transaction(async (tx) => {
    async function generateUniqueSlug(base: string): Promise<string> {
      const existing = await tx.category.findMany({
        where: { slug: { startsWith: base } },
        select: { slug: true },
      });

      if (existing.length === 0) return base;

      let maxSuffix = 0;
      let hasBase = false;
      for (const { slug } of existing) {
        if (slug === base) {
          hasBase = true;
          continue;
        }
        const m = slug.match(new RegExp(`^${base.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}-(\\d+)$`));
        if (m) {
          const n = Number(m[1]);
          if (!Number.isNaN(n) && n > maxSuffix) maxSuffix = n;
        }
      }
      if (!hasBase) return base;
      if (maxSuffix === 0) return `${base}-2`;
      return `${base}-${maxSuffix + 1}`;
    }

    const uniqueSlug = await generateUniqueSlug(desired);

    return tx.category.create({
      data: {
        slug: uniqueSlug,
        title: input.title,
        description: input.description,
        parentId: input.parentId ?? undefined,
        position: input.position ?? 0,
      },
      select: { id: true, slug: true },
    });
  });
}

export async function updateCategory(id: number, input: { title?: string; description?: string; parentId?: number | null; position?: number }) {
  const data: Record<string, unknown> = {};
  if (input.title !== undefined) data.title = input.title;
  if (input.description !== undefined) data.description = input.description;
  if (input.parentId !== undefined) data.parentId = input.parentId;
  if (input.position !== undefined) data.position = input.position;

  return prisma.category.update({
    where: { id },
    data,
    select: { id: true, slug: true },
  });
}

export async function deleteCategory(id: number) {
  return prisma.category.delete({ where: { id } });
}

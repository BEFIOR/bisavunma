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
  if (s === "") s = "urun";
  return s;
}

export async function listProducts(params: { q?: string; skip?: number; take?: number } = {}) {
  const { q, skip = 0, take = 20 } = params;
  return prisma.product.findMany({
    where: q
      ? {
          OR: [
            { title: { contains: q } },
            { description: { contains: q } },
          ],
        }
      : undefined,
    orderBy: { title: "asc" },
    skip,
    take,
    select: { slug: true, title: true, description: true, image: true },
  });
}

export async function getProduct(slug: string) {
  return prisma.product.findUnique({ where: { slug }, include: { features: { orderBy: { position: "asc" } } } });
}

export async function createProduct(input: { slug?: string; title: string; description?: string; image?: string; categoryId?: number }) {
  const desired = input.slug && input.slug.trim() !== "" ? input.slug : slugify(input.title);

  return prisma.$transaction(async (tx) => {
    async function generateUniqueSlug(base: string): Promise<string> {
      const existing = await tx.product.findMany({
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
      // If only base exists (no numeric suffixes), start with -2
      if (maxSuffix === 0) return `${base}-2`;
      return `${base}-${maxSuffix + 1}`;
    }

    const uniqueSlug = await generateUniqueSlug(desired);

    const p = await tx.product.create({
      data: { slug: uniqueSlug, title: input.title, description: input.description, image: input.image },
      select: { slug: true },
    });
    if (input.categoryId) {
      await tx.productCategory.create({
        data: { productSlug: p.slug, categoryId: input.categoryId, position: 0 },
      });
    }
    return p;
  });
}

export async function updateProduct(slug: string, input: { title: string; description?: string; image?: string; categoryId?: number }) {
  return prisma.$transaction(async (tx) => {
    const p = await tx.product.update({
      where: { slug },
      data: { title: input.title, description: input.description, image: input.image },
      select: { slug: true },
    });
    if (input.categoryId !== undefined) {
      await tx.productCategory.deleteMany({ where: { productSlug: slug } });
      if (input.categoryId) {
        await tx.productCategory.create({
          data: { productSlug: slug, categoryId: input.categoryId, position: 0 },
        });
      }
    }
    return p;
  });
}

export async function deleteProduct(slug: string) {
  return prisma.product.delete({ where: { slug } });
}

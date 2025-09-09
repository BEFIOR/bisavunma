import prisma from "@/server/db/client";
import type { Prisma } from "@prisma/client";

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

type ProductWithFeatures = Prisma.ProductGetPayload<{ include: { features: true } }>;
export type ProductWithAlt = ProductWithFeatures & { altCategory: string | null };

export async function getProduct(slug: string): Promise<ProductWithAlt | null> {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { features: { orderBy: { position: "asc" } } },
  });
  if (!product) return null;
  // Try to read alt_kategori via raw SQL (column may not exist in Prisma schema)
  let altCategory: string | null = null;
  try {
    const rows: Array<{ altCategory: string | null }> = await prisma.$queryRawUnsafe(
      "SELECT alt_kategori AS altCategory FROM products WHERE slug = ? LIMIT 1",
      slug
    );
    if (rows && rows[0]) altCategory = rows[0].altCategory;
  } catch {
    // ignore if column missing
  }
  return { ...product, altCategory };
}

export async function createProduct(input: { slug?: string; title: string; description?: string; image?: string; categoryId?: number; altCategory?: string | null }) {
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
    // Persist optional alt_kategori via raw SQL (nullable)
    try {
      await tx.$executeRawUnsafe(
        "UPDATE products SET alt_kategori = ? WHERE slug = ?",
        input.altCategory ?? null,
        p.slug
      );
    } catch {
      // ignore if column doesn't exist
    }
    if (input.categoryId) {
      await tx.productCategory.create({
        data: { productSlug: p.slug, categoryId: input.categoryId, position: 0 },
      });
    }
    return p;
  });
}

export async function updateProduct(slug: string, input: { title: string; description?: string; image?: string; categoryId?: number; altCategory?: string | null }) {
  return prisma.$transaction(async (tx) => {
    const p = await tx.product.update({
      where: { slug },
      data: { title: input.title, description: input.description, image: input.image },
      select: { slug: true },
    });
    // Update alt_kategori via raw SQL
    try {
      await tx.$executeRawUnsafe(
        "UPDATE products SET alt_kategori = ? WHERE slug = ?",
        input.altCategory ?? null,
        slug
      );
    } catch {
      // ignore
    }
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

import prisma from "@/lib/prisma";

export type DbProduct = {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  altCategory?: string | null;
  features?: string[];
};

export async function getProductBySlug(slug: string): Promise<DbProduct | null> {
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      features: { orderBy: { position: "asc" } },
    },
  });

  if (!product) return null;

  let altCategory: string | null = null;
  try {
    const rows: Array<{ altCategory: string | null }> = await (prisma as any).$queryRawUnsafe(
      "SELECT alt_kategori AS altCategory FROM products WHERE slug = ? LIMIT 1",
      slug
    );
    if (rows && rows[0]) altCategory = rows[0].altCategory;
  } catch {
    // Column might not exist yet; ignore
  }

  return {
    slug: product.slug,
    title: product.title,
    description: product.description,
    image: product.image,
    altCategory,
    features: product.features?.map((f) => f.feature) ?? [],
  };
}

export async function getProductsByCategorySlug(categorySlug: string): Promise<DbProduct[]> {
  const rows = await prisma.productCategory.findMany({
    where: { category: { slug: categorySlug } },
    include: {
      product: {
        select: { slug: true, title: true, description: true, image: true },
      },
    },
    orderBy: [{ position: "asc" }, { product: { title: "asc" } }],
  });

  // Try to enrich with alt_kategori via raw SQL if column exists
  const slugs = rows.map((r) => r.product.slug);
  const altMap = new Map<string, string | null>();
  if (slugs.length > 0) {
    try {
      const placeholders = slugs.map(() => "?").join(",");
      const sql = `SELECT slug, alt_kategori AS altCategory FROM products WHERE slug IN (${placeholders})`;
      const list: Array<{ slug: string; altCategory: string | null }> = await (prisma as any).$queryRawUnsafe(
        sql,
        ...slugs
      );
      for (const r of list) altMap.set(r.slug, r.altCategory);
    } catch {
      // Column might not exist yet; ignore
    }
  }

  return rows.map(({ product }) => ({
    slug: product.slug,
    title: product.title,
    description: product.description,
    image: product.image,
    altCategory: altMap.get(product.slug) ?? null,
  }));
}

export async function getAllProductSlugs(): Promise<string[]> {
  const rows = await prisma.product.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}

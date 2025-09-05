import prisma from "@/lib/prisma";

export type DbProduct = {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
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

  return {
    slug: product.slug,
    title: product.title,
    description: product.description,
    image: product.image,
    features: product.features?.map((f) => f.feature) ?? [],
  };
}

export async function getProductsByCategorySlug(
  categorySlug: string
): Promise<DbProduct[]> {
  const rows = await prisma.productCategory.findMany({
    where: { category: { slug: categorySlug } },
    include: { product: true },
    orderBy: [{ position: "asc" }, { product: { title: "asc" } }],
  });

  return rows.map(({ product }) => ({
    slug: product.slug,
    title: product.title,
    description: product.description,
    image: product.image,
  }));
}

export async function getAllProductSlugs(): Promise<string[]> {
  const rows = await prisma.product.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}

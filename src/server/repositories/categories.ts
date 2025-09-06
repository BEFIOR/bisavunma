import prisma from "@/server/db/client";

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


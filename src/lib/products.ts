import { getDb } from "@/lib/db";

export type DbProduct = {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  features?: string[];
};

export async function getProductBySlug(slug: string): Promise<DbProduct | null> {
  const db = getDb();

  const [rows] = await db.execute(
    `SELECT slug, title, description, image
     FROM products
     WHERE slug = ?
     LIMIT 1`,
    [slug]
  );

  const productRows = rows as Array<{
    slug: string;
    title: string;
    description: string | null;
    image: string | null;
  }>;

  if (productRows.length === 0) return null;

  const product = productRows[0];

  const [featureRows] = await db.execute(
    `SELECT feature
     FROM product_features
     WHERE product_slug = ?
     ORDER BY position ASC`,
    [slug]
  );

  const features = (featureRows as Array<{ feature: string }>).map((r) => r.feature);

  return {
    ...product,
    features,
  };
}

export async function getProductsByCategorySlug(
  categorySlug: string
): Promise<DbProduct[]> {
  const db = getDb();

  const [rows] = await db.execute(
    `SELECT p.slug, p.title, p.description, p.image
     FROM products p
     JOIN product_categories pc ON pc.product_slug = p.slug
     JOIN categories c ON c.id = pc.category_id
     WHERE c.slug = ?
     ORDER BY pc.position ASC, p.title ASC`,
    [categorySlug]
  );

  const products = rows as Array<{
    slug: string;
    title: string;
    description: string | null;
    image: string | null;
  }>;

  return products.map((p) => ({ ...p }));
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug, listCategories } from "@/server/repositories/categories";

export const revalidate = 60;

type Params = { category: string };

export const dynamicParams = true;
export async function generateStaticParams() {
  const cats = await listCategories();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug } = await params;
  const category = await getCategoryBySlug(categorySlug);
  const title = category ? `${category.title} | Ürünler` : "Kategori";
  const description = category?.description ?? `${categorySlug} kategorisi ürünleri`;
  return { title, description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = await getCategoryBySlug(category);
  if (!cat) notFound();

  const products = await getProductsByCategorySlug(category);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-8 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">{cat.title}</h1>
          <p className="mt-2 text-gray-600">/urunler/{category}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/urun/${p.slug}`}
              className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                {p.description}
              </p>
            </Link>
          ))}
          {products.length === 0 && (
            <div className="text-gray-600">Bu kategoride ürün bulunamadı.</div>
          )}
        </div>
      </section>
    </div>
  );
}

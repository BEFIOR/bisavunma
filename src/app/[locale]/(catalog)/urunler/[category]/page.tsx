import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import {
  getCategoryBySlug,
  listCategories,
} from "@/server/repositories/categories";
// Removed WobbleCard for performance

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
  const description =
    category?.description ?? `${categorySlug} kategorisi ürünleri`;
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
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{cat.title}</h1>
          <p className="mt-2 text-gray-400">/urunler/{category}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/urunler/${category}/${p.slug}`}
              className="group block"
            >
              <div className="h-full bg-neutral-900 border border-neutral-800 p-4  flex flex-col rounded-xl hover:bg-neutral-800 transition-colors">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 mt-1 flex-1">
                  {p.description}
                </p>
                <div className="mt-3 text-sky-400 group-hover:text-sky-300 font-medium">
                  İncele →
                </div>
              </div>
            </Link>
          ))}
          {products.length === 0 && (
            <div className="text-gray-400">Bu kategoride ürün bulunamadı.</div>
          )}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";

export const metadata = {
  title: "Jammer & RF Efektörler | Ürünler",
  description: "Jammer ve RF etkisizleştirme çözümleri için ürün kataloğu.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "jammer-rf-efektorler";
  const alt = "jammer-ve-rf-efektorler";
  const cat = (await getCategoryBySlug(slug)) ?? (await getCategoryBySlug(alt));
  const effectiveSlug = cat?.slug ?? slug;
  const products = await getProductsByCategorySlug(effectiveSlug);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Jammer & RF Efektörler</h1>
          <p className="mt-2 text-gray-400">/urunler/{slug}</p>
          {cat?.description && (
            <p className="mt-3 text-gray-300 max-w-3xl">{cat.description}</p>
          )}
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/urunler/jammer-rf-efektorler/${p.slug}`}
              className="rounded-lg border border-neutral-800 p-4 hover:bg-neutral-900 transition"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2 mt-1">{p.description}</p>
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

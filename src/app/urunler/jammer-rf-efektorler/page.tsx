import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";

export default async function JammerRFEfektorler() {
  const products = await getProductsByCategorySlug("jammer-ve-rf-efektorler");
  return  <div className="min-h-screen bg-white">
  <section className="pt-28 pb-8 px-4 bg-gray-50 border-b border-gray-100">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">
        Jammer & RF Efektörler
      </h1>
      <p className="mt-2 text-gray-600">Kategorideki ürünler</p>
    </div>
  </section>

  <section className="py-10 px-4">
    <div className="max-w-6xl mx-auto">
      {products.length === 0 ? (
        <p className="text-gray-600">Bu kategoride henüz ürün bulunmuyor.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/urunler/${p.slug}`}
              className="group rounded-lg border border-gray-200 hover:border-gray-300 p-4 transition-colors"
            >
              <div className="aspect-video w-full rounded-md bg-gray-200 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                {p.title}
              </h3>
              {p.description && (
                <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                  {p.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  </section>
</div>
}
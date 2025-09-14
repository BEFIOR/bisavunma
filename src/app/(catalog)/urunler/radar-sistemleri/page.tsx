import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import ChromaGrid from "@/components/ChromaGrid";
import { radarSystems } from "@/data/radar-systems";

export const metadata = {
  title: "Radar Sistemleri | Ürünler",
  description: "Radar sistemleri ve radar tabanlı çözümler için ürün kataloğu.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "radar-sistemleri";
  const cat = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(cat?.slug ?? slug);

  // Transform radar systems data to match ChromaGrid interface
  const radarChromaItems = radarSystems.map((radar) => ({
    image: radar.image,
    title: radar.title,
    subtitle: radar.description,
    borderColor: radar.borderColor,
    gradient: radar.gradient,
    url: radar.url,
  }));

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Radar Sistemleri</h1>
          <p className="mt-2 text-gray-400">/urunler/{slug}</p>
          {cat?.description && (
            <p className="mt-3 text-gray-300 max-w-3xl">{cat.description}</p>
          )}
          <div className="mt-8">
            <ChromaGrid items={radarChromaItems} />
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/urunler/radar-sistemleri/${p.slug}`}
                  className="rounded-lg border border-neutral-800 p-4 hover:bg-neutral-900 transition"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 mb-12">
              Bu kategoride ürün bulunamadı.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

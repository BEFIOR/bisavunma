import { notFound } from "next/navigation";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import Image from "next/image";

function formatSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export const revalidate = 60;

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: product.title,
    description: product.description ?? undefined,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const title = product.title ?? formatSlug(slug);
  const description =
    product.description ?? "Bu ürün için detaylı açıklama henüz eklenmedi.";
  const features =
    product.features && product.features.length > 0
      ? product.features
      : ["Örnek özellik A", "Örnek özellik B", "Örnek özellik C"];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-8 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-gray-600">/urunler/{slug}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
              <Image
                src={product.image || "/logo.webp"}
                width={1000}
                height={1000}
                alt={product.title || "Urun"}
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Ürün Açıklaması
              </h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Öne Çıkan Özellikler
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-gray-900 hover:bg-black text-white font-medium py-2.5 rounded-md">
                Teklif Al
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

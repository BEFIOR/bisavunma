import { notFound } from "next/navigation";
<<<<<<< Updated upstream:src/app/(catalog)/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/[slug]/page.tsx
import { getProductBySlug } from "@/lib/products";
import Image from "next/image";
=======
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import Image from "next/image";

function formatSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}
>>>>>>> Stashed changes:src/app/(catalog)/urun/[slug]/page.tsx

export const revalidate = 60;

type Params = { slug: string };

<<<<<<< Updated upstream:src/app/(catalog)/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/[slug]/page.tsx
=======
export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

>>>>>>> Stashed changes:src/app/(catalog)/urun/[slug]/page.tsx
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

<<<<<<< Updated upstream:src/app/(catalog)/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/[slug]/page.tsx
export default async function ProductInRf({
=======
export default async function ProductDetail({
>>>>>>> Stashed changes:src/app/(catalog)/urun/[slug]/page.tsx
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const title = product.title ?? slug;
  const description =
    product.description ?? "Bu ürün için detaylı açıklama henüz eklenmedi.";
  const features =
    product.features && product.features.length > 0
      ? product.features
      : ["Örnek özellik A", "Örnek özellik B", "Örnek özellik C"];

  const category = "rf-sistemleri-ve-sinyal-istihbarat-sigint";

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">
            /urunler/{category}/{slug}
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
<<<<<<< Updated upstream:src/app/(catalog)/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/[slug]/page.tsx
            <div className="aspect-video w-full rounded-lg bg-neutral-800 flex items-center justify-center text-gray-400">
=======
            <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
>>>>>>> Stashed changes:src/app/(catalog)/urun/[slug]/page.tsx
              <Image
                src={product.image || "/logo.webp"}
                width={1000}
                height={1000}
                alt={product.title || "Urun"}
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Ürün Açıklaması
              </h2>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              <h3 className="text-lg font-semibold text-white mb-3">
                Öne Çıkan Özellikler
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 rounded-md">
                Teklif Al
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

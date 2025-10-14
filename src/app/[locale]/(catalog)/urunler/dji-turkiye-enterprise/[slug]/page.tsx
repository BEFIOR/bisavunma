import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCachedProduct } from "@/lib/loaders";
import type { DbProduct } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import ProductTracking from "@/components/ProductTracking";

export const revalidate = 300; // Cache for 5 minutes

type Params = { slug: string };

export async function generateStaticParams() {
  const products = await getProductsByCategorySlug("dji-turkiye-enterprise");
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getCachedProduct(slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: `${product.title} | DJI Enterprise`,
    description: product.description ?? undefined,
  };
}

export default async function DjiProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getCachedProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <ProductTracking
        productName={product.title}
        category="dji-turkiye-enterprise"
      />
      <Hero title={product.title} image={product.image} />
      <MainContent
        product={product}
        basePath="/urunler/dji-turkiye-enterprise"
      />
    </div>
  );
}

function Hero({ title, image }: { title: string; image: string | null }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority
        />
      ) : (
        <Image
          src={`/logo.webp`}
          alt={title}
          width={1000}
          height={1000}
          className="object-cover object-center opacity-40"
          priority
        />
      )}
      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-10">
        <div className="flex items-center gap-3">
          \{" "}
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <span className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-600/10 px-2.5 py-0.5 text-xs text-emerald-300">
            DJI Enterprise
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          /urunler/dji-turkiye-enterprise/{"{"}
          {title}
          {"}"}
        </p>
      </div>
    </section>
  );
}

function MainContent({
  product,
  basePath,
}: {
  product: DbProduct;
  basePath: string;
}) {
  const features =
    product.features && product.features.length > 0
      ? product.features
      : undefined;
  const description = product.description ?? undefined;

  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {description && (
            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold text-white mb-2">Özet</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                {description}
              </p>
            </div>
          )}

          <div className="rounded-xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-950">
            <div className="relative aspect-[4/3] w-full bg-neutral-950">
              <Image
                src={product.image || "/logo.webp"}
                alt={product.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority={false}
              />
            </div>
          </div>

          {features && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Öne Çıkan Özellikler
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((raw) => {
                  const [head, ...rest] = raw.split(":");
                  const title = rest.length > 0 ? head : undefined;
                  const body = rest.length > 0 ? rest.join(":").trim() : raw;
                  return (
                    <li
                      key={raw}
                      className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-3"
                    >
                      {title && (
                        <div className="text-white font-medium mb-0.5">
                          {title}
                        </div>
                      )}
                      <div className="text-sm text-gray-300 leading-relaxed">
                        {body}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h3 className="text-lg font-semibold text-white">
              Satın Alma ve Destek
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              DJI Türkiye Enterprise çözümleri için teklif alın ve uzman
              ekibimizden destek isteyin.
            </p>
            <Link
              href="/iletisim"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-white font-medium hover:bg-sky-500"
            >
              Teklif Al
            </Link>
            <div className="mt-4 text-xs text-gray-500">
              Kategori:{" "}
              <Link className="text-sky-400 hover:text-sky-300" href={basePath}>
                DJI Türkiye Enterprise
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

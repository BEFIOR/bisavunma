import { listCategories } from "@/server/repositories/categories";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
// Removed FlowingMenu for performance

type Category = {
  id: number;
  slug: string;
  title: string;
  parentId: number | null;
};

const categoryImages: Record<string, string> = {
  "rf-sistemleri-ve-sinyal-istihbarat-sigint":
    "/products/rf-sistemleri/rfeye-guard.webp",
  "radar-sistemleri": "/products/radar-sistemleri/radar.webp",
  "elektro-optik-ve-termal-sistemler": "/products/elektro-optik/atlas.png",
  "jammer-rf-efektorler": "/products/jammer-rf-efektorler/bieye-defense.webp",
  "dji-turkiye-enterprise":
    "/products/dji-enterprise/dji-istanbul-yetkili-saticisi.webp",
  "integrated-counter-uas-c2":
    "/products/counter-uas/dronehunter-f700.webp",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title:
      locale === "en" ? "Our Products | BISAVUNMA" : "Ürünlerimiz | BISAVUNMA",
    description:
      locale === "en"
        ? "Explore our defense and security products including RF systems, radar systems, jammers and electro-optical systems."
        : "RF sistemleri, radar sistemleri, jammer ve elektro-optik sistemler dahil savunma ve güvenlik ürünlerimizi keşfedin.",
  };
}

export default async function Urunler() {
  const categories = await listCategories();

  const items = categories
    .filter((c: Category) => !c.parentId)
    .map((c: Category) => ({
      link: `/urunler/${c.slug}`,
      text: c.title,
      image: categoryImages[c.slug] ?? "/main/logo.webp",
    }));

  const t = await getTranslations("products");

  type Item = {
    link: string;
    text: string;
    image: string;
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-5xl my-5 font-bold text-white text-center">
            {t("title")}
          </h1>
        </div>
      </section>
      <section className="min-h-[70vh]">
        {/* Optimized Category Grid - Simple grid instead of heavy GSAP animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {items.map((item: Item) => (
            <Link
              key={item.link}
              href={item.link}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.text}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

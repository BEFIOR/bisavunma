import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import type { DbProduct } from "@/lib/products";
import EnterpriseClient from "./_components/EnterpriseClient";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  HeroAnimation,
  HeroScaleAnimation,
  HeroStaggerContainer,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollAnimations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("djiEnterprise");

  return {
    title: `${t("title")} | ${locale === "en" ? "Products" : "Ürünler"}`,
    description:
      locale === "en"
        ? "DJI Enterprise solutions and corporate products catalog."
        : "DJI Enterprise çözümleri ve kurumsal ürünler için kataloğumuz.",
  };
}

export const revalidate = 60;

export default async function Page() {
  const slug = "dji-turkiye-enterprise";
  const cat = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(cat?.slug ?? slug);
  const t = await getTranslations("djiEnterprise");

  const supplementalProducts: DbProduct[] = [
    {
      slug: "dji-matrice-400",
      title: "DJI Matrice 400",
      description: "Yeni nesil kurumsal drone platformu",
      image:
        "https://www-cdn.djiits.com/cms/uploads/3c9712c308bac3e36007c3a9ded88d9d@374*374.png",
      altCategory: "DJİ PROFESYONEL İHA",
    },
    {
      slug: "dji-flycart-100",
      title: "DJI FlyCart 100",
      description: "Ağır yük hava lojistiği için yeni teslimat platformu",
      image:
        "https://www-cdn.djiits.com/cms/uploads/9358904a6d5a4182e2bcd9a0db8be35a@374*374.png",
      altCategory: "DJİ PROFESYONEL İHA",
    },
    {
      slug: "dji-dock-3",
      title: "DJI Dock 3",
      description: "7/24 uzaktan operasyon için otonom dock çözümü",
      image:
        "https://www-cdn.djiits.com/cms/uploads/596a276ec8d8577111cfa9bc19f147dd@374*374.png",
      altCategory: "DJİ PROFESYONEL İHA",
    },
    {
      slug: "dji-flycart-30",
      title: "DJI FlyCart 30",
      description: "Endüstriyel hava taşımacılığı için güvenli teslimat sistemi",
      image:
        "https://www-cdn.djiits.com/cms/uploads/6309da752b25bee607f0c785de57085e@374*374.png",
      altCategory: "DJİ PROFESYONEL İHA",
    },
  ];

  const mergedProducts = Array.from(
    new Map([...products, ...supplementalProducts].map((product) => [product.slug, product])).values()
  );

  const usageHighlights = [
    {
      src: "/products/dji-enterprise/askeri-kullanim.webp",
      alt: "askeri",
      label: t("usageHighlights.military"),
    },
    {
      src: "/products/dji-enterprise/sivil-kullanim.webp",
      alt: "sivil",
      label: t("usageHighlights.civilian"),
    },
    {
      src: "/products/dji-enterprise/denetim-amacli.webp",
      alt: "denetim",
      label: t("usageHighlights.inspection"),
    },
  ] as const;

  // Group products by altCategory (fallback to "Diğer")
  const groups = new Map<string, DbProduct[]>();
  for (const p of mergedProducts) {
    const key = (p.altCategory ?? "Diğer").trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }

  // Desired section order; remaining groups follow alphabetically
  const desiredOrder = [
    "DJİ PROFESYONEL İHA",
    "DJİ İHA SENSÖRLERİ",
    "Diğer",
  ] as const;
  // Widen type for index lookup without using `any`
  const order = [...desiredOrder] as readonly string[];
  const orderedKeys = Array.from(groups.keys()).sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, "tr");
  });

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <HeroStaggerContainer className="space-y-8">
            <HeroScaleAnimation>
              <div className="w-full max-w-screen rounded-xl ring-1 ring-white/10 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/1z6X9NpmjHk?si=94HakE3l1uB2y7he"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </HeroScaleAnimation>
            <HeroAnimation direction="up" delay={0}>
              <div className="flex flex-col items-center gap-3 text-center">
                <h1 className="text-3xl font-bold text-white">{t("title")}</h1>
                <span className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-600/10 px-2.5 py-0.5 text-xs text-emerald-300">
                  {t("badge")}
                </span>
                <Link
                  href="/iletisim"
                  className="inline-flex rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  {t("cta")}
                </Link>
              </div>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <p className="text-gray-300 max-w-3xl mx-auto">
                {t("description")}
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.15}>
              <ul className="space-y-2 list-disc pl-6 marker:text-blue-400 text-left text-sm sm:text-base">
                <li>
                  <span className="font-medium text-white">
                    {t("features.portfolio.title")}
                  </span>{" "}
                  {t("features.portfolio.description")}
                </li>
                <li>
                  <span className="font-medium text-white">
                    {t("features.training.title")}
                  </span>{" "}
                  {t("features.training.description")}
                </li>
                <li>
                  <span className="font-medium text-white">
                    {t("features.support.title")}
                  </span>{" "}
                  {t("features.support.description")}
                </li>
              </ul>
            </HeroAnimation>
          </HeroStaggerContainer>
        </div>
        <ScrollAnimation direction="up" delay={0}>
          <div className="-mx-2 overflow-x-auto pb-2 mt-12">
            <StaggerContainer
              className="flex flex-col lg:flex-row gap-4 px-2 justify-center items-center"
              staggerDelay={0.1}
            >
              {usageHighlights.map(({ src, alt, label }) => (
                <StaggerItem key={label} direction="up">
                  <div className="relative w-[260px] h-[180px] md:w-[320px] md:h-[200px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/60">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3">
                      <span className="inline-flex items-center rounded-md bg-black/60 backdrop-blur px-2.5 py-1 text-xs md:text-sm font-medium text-white ring-1 ring-white/10">
                        {label}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollAnimation>
      </section>

      <section className="py-10 px-4">
        <EnterpriseClient
          groups={orderedKeys.map((k) => ({ key: k, items: groups.get(k)! }))}
          basePath={`/urunler/${slug}`}
        />
        {mergedProducts.length === 0 && (
          <div className="max-w-6xl mx-auto text-gray-400 mt-6">
            {t("noProducts")}
          </div>
        )}
      </section>
    </div>
  );
}

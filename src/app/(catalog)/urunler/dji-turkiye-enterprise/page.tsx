import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import type { DbProduct } from "@/lib/products";
import EnterpriseClient from "./_components/EnterpriseClient";
import Image from "next/image";
import {
  HeroAnimation,
  HeroScaleAnimation,
  HeroStaggerContainer,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollAnimations";
export const metadata = {
  title: "DJI Türkiye Enterprise | Ürünler",
  description: "DJI Enterprise çözümleri ve kurumsal ürünler için kataloğumuz.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "dji-turkiye-enterprise";
  const cat = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(cat?.slug ?? slug);
  const usageHighlights = [
    {
      src: "/products/dji-enterprise/askeri-kullanim.webp",
      alt: "askeri",
      label: "Askeri Uygulama",
    },
    {
      src: "/products/dji-enterprise/sivil-kullanim.webp",
      alt: "sivil",
      label: "Kamu Güvenliği",
    },
    {
      src: "/products/dji-enterprise/denetim-amacli.webp",
      alt: "denetim",
      label: "Denetim Amaçlı",
    },
  ] as const;

  // Group products by altCategory (fallback to "Diğer")
  const groups = new Map<string, DbProduct[]>();
  for (const p of products) {
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
            <HeroAnimation direction="up" delay={0.1}>
              <div className="flex flex-col items-center gap-3 text-center">
                <h1 className="text-3xl font-bold text-white">
                  DJI Türkiye Enterprise
                </h1>
                <span className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-600/10 px-2.5 py-0.5 text-xs text-emerald-300">
                  Resmi Bayi
                </span>
                <Link
                  href="/iletisim"
                  className="inline-flex rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Fiyat Al
                </Link>
              </div>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.2}>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Bisavunma olarak, DJI Enterprise resmi bayisi olmanın
                güvencesiyle; kapsamlı ürün portföyümüz, eğitim ve yazılım
                desteğimiz ve sürekli teknik servis çözümlerimiz ile her
                sektörden firmaya özel sistemler sunuyoruz.
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.3}>
              <ul className="space-y-2 list-disc pl-6 marker:text-blue-400 text-left text-sm sm:text-base">
                <li>
                  <span className="font-medium text-white">
                    Kapsamlı Ürün Portföyü:
                  </span>{" "}
                  Gereksinimlerinize en uygun DJI Enterprise drone'unu bulmak
                  için Bisavunma'nın kapsamlı ürün portföyüne göz atın.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Eğitim ve Yazılım Desteği:
                  </span>{" "}
                  DJI Enterprise drone'larınızı en etkili şekilde kullanmayı
                  öğrenin. Bisavunma'nın uzman ekibi tarafından sunulan eğitim
                  ve yazılım desteği ile drone'larınızdan en iyi performansı
                  elde edin.
                </li>
                <li>
                  <span className="font-medium text-white">
                    Sürekli Teknik Servis Çözümleri:
                  </span>{" "}
                  Bisavunma'nın deneyimli teknik servis ekibi, drone'larınızın
                  her zaman en iyi durumda kalması için sürekli destek sunar.
                </li>
              </ul>
            </HeroAnimation>
          </HeroStaggerContainer>
        </div>
        <ScrollAnimation direction="up" delay={0.2}>
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
        {products.length === 0 && (
          <div className="max-w-6xl mx-auto text-gray-400 mt-6">
            Bu kategoride ürün mevcut değil.
          </div>
        )}
      </section>
    </div>
  );
}

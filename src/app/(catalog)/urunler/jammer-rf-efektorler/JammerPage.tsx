"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Filter,
  Shield,
  WifiOff,
  Radio,
  Waves,
  Satellite,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  HeroAnimation,
  HeroStaggerContainer,
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollAnimations";

interface Product {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  altCategory?: string | null;
}

interface PageProps {
  products: Product[];
  effectiveSlug: string;
  categoryDescription?: string;
}

const capabilityHighlights = [
  {
    title: "Frekans Spektrum Kontrolü",
    description:
      "Çok bantlı engelleme, seçici süzme ve uyarlanabilir güç yönetimi ile karmaşık tehditlere anlık tepki.",
    Icon: Waves,
  },
  {
    title: "Platform Bütünleştirme",
    description:
      "Sabit tesislerden hareketli araçlara kadar farklı platformlarda hızlı yerleştirme ve enerji verimliliği.",
    Icon: Shield,
  },
  {
    title: "Operasyonel Devamlılık",
    description:
      "Uzaktan kontrol, durum izleme ve yedekli parçalarla 7/24 hazır güç koruması.",
    Icon: ShieldCheck,
  },
];

const deploymentScenarios = [
  {
    title: "Kritik Altyapı",
    description:
      "Havalimanı, enerji santrali ve kamu tesislerinde yetkisiz drone etkinliklerine karşı etkili engel.",
    Icon: WifiOff,
  },
  {
    title: "Hareketli Operasyon",
    description:
      "Konvoy, VIP koruma ve taktik birlikler için araç üstü veya sırt çantalı karıştırıcı sistemleri.",
    Icon: Radio,
  },
  {
    title: "Sınır Güvenliği",
    description:
      "Uyarlanabilir anten sistemleriyle uzun menzilde düşman haberleşme ağlarını bozan alan düzenlemeleri.",
    Icon: Satellite,
  },
];

export default function JammerPage({
  products,
  effectiveSlug,
  categoryDescription,
}: PageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const subcategories = useMemo(() => {
    const unique = Array.from(
      new Set(products.map((p) => p.altCategory).filter(Boolean))
    );
    return [
      { slug: "all", title: "Bütün Ürünler", count: products.length },
      ...unique.map((sub) => ({
        slug: sub!,
        title: sub!,
        count: products.filter((p) => p.altCategory === sub).length,
      })),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") return products;
    return products.filter((p) => p.altCategory === selectedSubcategory);
  }, [products, selectedSubcategory]);

  return (
    <div className="min-h-screen bg-black text-gray-200 ">
      <section className="relative pt-28 pb-16 px-4 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-amber-600/30 via-rose-600/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tl from-rose-500/10 via-amber-500/10 to-transparent blur-3xl" />
        <div className="max-w-7xl mx-auto relative mt-12">
          <HeroStaggerContainer staggerDelay={0.2}>
            <HeroAnimation direction="fade" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-500/10 px-4 py-1 text-xs uppercase tracking-widest text-amber-300">
                RF Karşı Önlem
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
                Karıştırıcı ve RF Etkileyici Sistemleri
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.2}>
              <p className="mt-3 text-gray-400">/urunler/{effectiveSlug}</p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.3}>
              <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
                Baştan sona elektronik savaş yetenekleri; taktik alanda, kritik
                altyapıda ve yüksek risk ortamlarında haberleşme ve drone
                tehditlerini engellemek için geliştirildi.
              </p>
            </HeroAnimation>
            {categoryDescription && (
              <HeroAnimation direction="up" delay={0.4}>
                <p className="text-gray-400 max-w-3xl leading-relaxed">
                  {categoryDescription}
                </p>
              </HeroAnimation>
            )}
          </HeroStaggerContainer>

          <ScrollAnimation direction="up" delay={0.5}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {capabilityHighlights.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10">
          <aside className="space-y-6">
            <ScrollAnimation direction="left" delay={0.1}>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-amber-300" />
                    <h2 className="text-lg font-semibold text-white">
                      Alt Sınıflandırmalar
                    </h2>
                  </div>
                  {selectedSubcategory !== "all" && (
                    <button
                      onClick={() => setSelectedSubcategory("all")}
                      className="text-xs text-gray-400 hover:text-amber-200 underline-offset-2 hover:underline"
                    >
                      Temizle
                    </button>
                  )}
                </div>

                <StaggerContainer staggerDelay={0.08}>
                  <div className="flex flex-wrap gap-2">
                    {subcategories.map((subcategory) => {
                      const selected = selectedSubcategory === subcategory.slug;
                      return (
                        <StaggerItem key={subcategory.slug} direction="fade">
                          <button
                            onClick={() =>
                              setSelectedSubcategory(subcategory.slug)
                            }
                            className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                              selected
                                ? "bg-amber-500/20 text-amber-100 border-amber-400/60"
                                : "bg-neutral-900/60 text-gray-300 border-neutral-700 hover:border-amber-500/40 hover:text-white"
                            }`}
                            aria-pressed={selected}
                          >
                            <span>{subcategory.title}</span>
                            <span
                              className={`ml-2 inline-flex items-center justify-center rounded-full px-1.5 text-[11px] leading-5 ${
                                selected
                                  ? "bg-amber-500/20 text-amber-100"
                                  : "bg-neutral-800 text-gray-400"
                              }`}
                            >
                              {subcategory.count}
                            </span>
                          </button>
                        </StaggerItem>
                      );
                    })}
                  </div>
                </StaggerContainer>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.2}>
              <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-200">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  Operasyon Hazırlığı
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Sahadaki karıştırıcı düzenlemeleri için keşif, RF spektrum
                  analizi ve test yayınlarıyla teslimat öncesi doğrulama
                  sağlıyoruz.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>• Uyarlanabilir anten ve güç modülleri</li>
                  <li>• Uzaktan izleme & alarm yönetimi</li>
                  <li>• Eğitim, sertifikasyon ve saha desteği</li>
                </ul>
              </div>
            </ScrollAnimation>
          </aside>

          <main className="space-y-10">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {deploymentScenarios.map(({ title, description, Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {selectedSubcategory === "all"
                      ? "Bütün Ürünler"
                      : subcategories.find(
                          (s) => s.slug === selectedSubcategory
                        )?.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {filteredProducts.length} ürün listeleniyor
                  </p>
                </div>
                <p className="text-sm text-gray-500 max-w-2xl">
                  Elektronik savaş gereksinimlerinize göre bant, güç ve platform
                  seçimi yapabileceğiniz karıştırıcı portföyümüz.
                </p>
              </div>
            </ScrollAnimation>

            {filteredProducts.length > 0 ? (
              <StaggerContainer staggerDelay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => {
                    const href = `/urunler/${effectiveSlug}/${product.slug}`;
                    return (
                      <StaggerItem
                        key={product.slug}
                        direction="up"
                        className="h-full"
                      >
                        <Link href={href} className="group block h-full">
                          <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-neutral-900 hover:shadow-md hover:-translate-y-1 will-change-transform">
                            <div className="p-4 h-full flex flex-col">
                              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-800 flex items-center justify-center">
                                <Image
                                  src={product.image || "/logo.webp"}
                                  alt={product.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover transition-transform w-full h-full duration-300 group-hover:scale-[1.03]"
                                />
                              </div>
                              <div className="mt-4 flex-1">
                                <h3 className="text-lg font-semibold text-white tracking-tight">
                                  {product.title}
                                </h3>
                                {product.description && (
                                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                                    {product.description}
                                  </p>
                                )}
                              </div>
                              <div className="mt-4 flex items-center justify-between text-sm">
                                <span className="inline-flex items-center text-amber-300 group-hover:text-amber-200 transition-transform duration-200 group-hover:translate-x-0.5">
                                  Detay →
                                </span>
                                {product.altCategory && (
                                  <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-[11px] text-gray-400">
                                    {product.altCategory}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div
                              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                boxShadow:
                                  "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                              }}
                            />
                            <div
                              aria-hidden
                              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"
                            />
                            <div
                              aria-hidden
                              className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                              style={{
                                background:
                                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                                transform: "translateX(-20%)",
                              }}
                            />
                          </div>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            ) : (
              <ScrollAnimation direction="fade" delay={0.4}>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 py-12 text-center">
                  <Filter className="w-12 h-12 mx-auto text-amber-200/60 mb-4" />
                  <p className="text-lg text-gray-300">
                    Bu alt sınıflandırmada ürün mevcut değil.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Başka bir alt sınıflandırma seçmeyi veya filtreyi
                    temizlemeyi deneyin.
                  </p>
                </div>
              </ScrollAnimation>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

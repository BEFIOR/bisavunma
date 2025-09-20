"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ChevronRight, Filter, Camera, Crosshair, Sun } from "lucide-react";
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

export default function ElektroOptikPage({
  products,
  effectiveSlug,
  categoryDescription,
}: PageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const heroHighlights = [
    {
      title: "Çok Spektral İzleme",
      description: "UV'den uzun dalga IR'a kadar geniş bantta keşif.",
      Icon: Sun,
    },
    {
      title: "Uzun Menzil Algılama",
      description: "Stabilize optikler ve akıllı izleme algoritmaları.",
      Icon: Crosshair,
    },
    {
      title: "Operasyonel Uyumluluk",
      description: "Araç, kule ve sabit tesisler için modüler entegrasyon.",
      Icon: Camera,
    },
  ] as const;

  const heroStats = [
    { label: "Spektral Alan", value: "400 nm – 14 µm" },
    { label: "Büyütme Oranı", value: "120x hibrit" },
    { label: "Platform", value: "Sabit & hareketli" },
  ] as const;

  // Get unique subcategories from products
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

  // Filter products based on selected subcategory
  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") return products;
    return products.filter((p) => p.altCategory === selectedSubcategory);
  }, [products, selectedSubcategory]);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Header Section */}
      <section className="relative pt-28 pb-10 px-4 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-sky-700/30 via-fuchsia-600/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] via-fuchsia-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative mt-12">
          <HeroStaggerContainer className="space-y-6">
            <HeroAnimation direction="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-wider text-sky-200">
                Elektro-Optik Sistem Paketi
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up">
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Çok Bantlı Algılayıcılarla Anlık Durum Bilinci
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                {categoryDescription ??
                  "Elektro-optik ve termal algılama sistemleriyle düşük görünürlüklü tehditleri algıla, izle ve tanımla."}
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.2}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
                    >
                      <p className="text-lg font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </HeroAnimation>
          </HeroStaggerContainer>

          <HeroAnimation direction="up" delay={0.3}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroHighlights.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </HeroAnimation>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ScrollAnimation direction="up">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32">
                <ScrollAnimation direction="left" delay={0.1}>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="w-5 h-5 text-sky-400" />
                      <h2 className="text-lg font-semibold text-white">
                        Alt Sınıflandırmalar
                      </h2>
                    </div>

                    <StaggerContainer className="space-y-2" staggerDelay={0.08}>
                      {subcategories.map((subcategory) => (
                        <StaggerItem key={subcategory.slug} direction="up">
                          <button
                            onClick={() =>
                              setSelectedSubcategory(subcategory.slug)
                            }
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left group ${
                              selectedSubcategory === subcategory.slug
                                ? "bg-sky-600/20 border border-sky-500/30 text-sky-300"
                                : "hover:bg-neutral-800/50 border border-transparent text-gray-300 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-medium">
                                {subcategory.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-neutral-700 text-gray-400">
                                {subcategory.count}
                              </span>
                              <ChevronRight
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  selectedSubcategory === subcategory.slug
                                    ? "rotate-90"
                                    : "group-hover:translate-x-0.5"
                                }`}
                              />
                            </div>
                          </button>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </ScrollAnimation>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {selectedSubcategory === "all"
                      ? "Bütün Ürünler"
                      : subcategories.find(
                          (s) => s.slug === selectedSubcategory
                        )?.title}
                  </h2>
                  <p className="text-gray-400">
                    {filteredProducts.length} ürün listeleniyor
                  </p>
                </div>
              </ScrollAnimation>

              {filteredProducts.length > 0 ? (
                <StaggerContainer
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  staggerDelay={0.1}
                >
                  {filteredProducts.map((product) => {
                    const href = `/urunler/${effectiveSlug}/${product.slug}`;
                    return (
                      <StaggerItem key={product.slug} direction="up">
                        <Link href={href} className="group block h-full">
                          <WobbleCard
                            containerClassName="h-full bg-neutral-900 border border-neutral-600"
                            className="p-4 h-full flex flex-col"
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-800 flex items-center justify-center">
                              <Image
                                src={product.image || "/logo.webp"}
                                alt={product.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain transition-transform duration-300 group-hover:scale-[1.03] p-2"
                              />
                            </div>
                            <div className="mt-4 flex-1">
                              <h3 className="text-lg font-semibold text-white tracking-tight">
                                {product.title}
                              </h3>
                              {product.description && (
                                <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                                  {product.description}
                                </p>
                              )}
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <span className="inline-flex items-center text-sm text-sky-400 group-hover:text-sky-300">
                                Detay
                                <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
                                  →
                                </span>
                              </span>
                              {product.altCategory && (
                                <span className="text-[11px] px-2 py-0.5 rounded-full border border-neutral-700 text-gray-400">
                                  {product.altCategory}
                                </span>
                              )}
                            </div>
                          </WobbleCard>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              ) : (
                <ScrollAnimation direction="fade" delay={0.2}>
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">
                        Bu alt sınıflandırmada ürün mevcut değil.
                      </p>
                      <p className="text-sm mt-2">
                        Başka bir alt sınıflandırma seçmeyi deneyin.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </main>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

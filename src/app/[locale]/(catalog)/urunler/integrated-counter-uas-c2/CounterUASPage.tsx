"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Filter, Shield, Crosshair, Cpu, Radio } from "lucide-react";
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

export default function CounterUASPage({
  products,
  effectiveSlug,
  categoryDescription,
}: PageProps) {
  const t = useTranslations("counterUAS");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const heroHighlights = [
    {
      title: t("highlights.autonomousIntercept.title"),
      description: t("highlights.autonomousIntercept.description"),
      Icon: Crosshair,
    },
    {
      title: t("highlights.aiPowered.title"),
      description: t("highlights.aiPowered.description"),
      Icon: Cpu,
    },
    {
      title: t("highlights.integratedC2.title"),
      description: t("highlights.integratedC2.description"),
      Icon: Radio,
    },
  ] as const;

  const heroStats = [
    { label: t("stats.droneCaptures"), value: "4,500+" },
    { label: t("stats.responseTime"), value: "< 3 sn" },
    { label: t("stats.coverage"), value: "360°" },
  ] as const;

  const subcategories = useMemo(() => {
    const unique = Array.from(
      new Set(products.map((p) => p.altCategory).filter(Boolean))
    );
    return [
      { slug: "all", title: t("sidebar.allProducts"), count: products.length },
      ...unique.map((sub) => ({
        slug: sub!,
        title: sub!,
        count: products.filter((p) => p.altCategory === sub).length,
      })),
    ];
  }, [products, t]);

  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") return products;
    return products.filter((p) => p.altCategory === selectedSubcategory);
  }, [products, selectedSubcategory]);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Header Section */}
      <section className="relative pt-28 pb-12 px-4 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-red-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative mt-12">
          <HeroStaggerContainer staggerDelay={0.15} className="space-y-6">
            <HeroAnimation direction="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-wider text-red-200">
                {t("badge")}
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up">
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                {t("heroTitle")}
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0}>
              <p className="text-gray-300 max-w-3xl leading-relaxed">
                {categoryDescription ?? t("heroDescription")}
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
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

          <HeroAnimation direction="up" delay={0.15}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {heroHighlights.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 p-6 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-200">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-32">
              <ScrollAnimation direction="left" delay={0}>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Filter className="w-5 h-5 text-red-400" />
                      <h2 className="text-lg font-semibold text-white">
                        {t("sidebar.title")}
                      </h2>
                    </div>
                    {selectedSubcategory !== "all" && (
                      <button
                        onClick={() => setSelectedSubcategory("all")}
                        className="text-xs text-gray-400 hover:text-red-300 underline-offset-2 hover:underline"
                      >
                        {t("sidebar.clear")}
                      </button>
                    )}
                  </div>

                  <StaggerContainer staggerDelay={0.1}>
                    <div className="flex flex-wrap gap-2">
                      {subcategories.map((subcategory) => {
                        const selected =
                          selectedSubcategory === subcategory.slug;
                        return (
                          <StaggerItem key={subcategory.slug} direction="fade">
                            <button
                              onClick={() =>
                                setSelectedSubcategory(subcategory.slug)
                              }
                              className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                                selected
                                  ? "bg-red-600 text-white border-red-500"
                                  : "bg-neutral-900/40 text-gray-300 border-neutral-700 hover:border-red-600/50 hover:text-white"
                              }`}
                              aria-pressed={selected}
                            >
                              <span>{subcategory.title}</span>
                              <span
                                className={`ml-2 inline-flex items-center justify-center rounded-full px-1.5 text-[11px] leading-5 ${
                                  selected
                                    ? "bg-white/20 text-white"
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
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <ScrollAnimation direction="up" delay={0}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {selectedSubcategory === "all"
                    ? t("sidebar.allProducts")
                    : subcategories.find((s) => s.slug === selectedSubcategory)
                        ?.title}
                </h2>
                <p className="text-gray-400">
                  {filteredProducts.length} {t("products.listing")}
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
                        <Link href={href} className="block group h-full">
                          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 will-change-transform overflow-hidden hover:bg-neutral-900">
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
                                  <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                                    {product.description}
                                  </p>
                                )}
                              </div>
                              <div className="mt-4 flex items-center justify-between">
                                <span className="inline-flex items-center text-sm text-red-400 group-hover:text-red-300">
                                  {t("products.detail")}
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
                              className="absolute -inset-px rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"
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
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">{t("products.noProducts")}</p>
                    <p className="text-sm mt-2">{t("products.tryOther")}</p>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

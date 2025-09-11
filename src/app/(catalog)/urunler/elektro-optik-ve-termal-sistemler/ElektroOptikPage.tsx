"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";
import { ChevronRight, Filter } from "lucide-react";

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

  // Get unique subcategories from products
  const subcategories = useMemo(() => {
    const unique = Array.from(
      new Set(products.map((p) => p.altCategory).filter(Boolean))
    );
    return [
      { slug: "all", title: "Tüm Ürünler", count: products.length },
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
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Elektro-Optik & Termal Sistemler
          </h1>
          <p className="mt-2 text-gray-400">/urunler/{effectiveSlug}</p>
          {categoryDescription && (
            <p className="mt-3 text-gray-300 max-w-3xl leading-relaxed">
              {categoryDescription}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-sky-400" />
                  <h2 className="text-lg font-semibold text-white">
                    Alt Kategoriler
                  </h2>
                </div>

                <nav className="space-y-2">
                  {subcategories.map((subcategory) => (
                    <button
                      key={subcategory.slug}
                      onClick={() => setSelectedSubcategory(subcategory.slug)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left group ${
                        selectedSubcategory === subcategory.slug
                          ? "bg-sky-600/20 border border-sky-500/30 text-sky-300"
                          : "hover:bg-neutral-800/50 border border-transparent text-gray-300 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{subcategory.title}</span>
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
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {selectedSubcategory === "all"
                  ? "Tüm Ürünler"
                  : subcategories.find((s) => s.slug === selectedSubcategory)
                      ?.title}
              </h2>
              <p className="text-gray-400">
                {filteredProducts.length} ürün gösteriliyor
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const href = `/urunler/${effectiveSlug}/${product.slug}`;
                  return (
                    <Link
                      key={product.slug}
                      href={href}
                      className="group block"
                    >
                      <SpotlightCard className="h-full p-4 transition-transform duration-200 group-hover:-translate-y-0.5">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-800 flex items-center justify-center">
                          <Image
                            src={product.image || "/logo.webp"}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain transition-transform duration-300 group-hover:scale-[1.03] p-2"
                          />
                        </div>
                        <div className="mt-4">
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
                            İncele
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
                      </SpotlightCard>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Bu alt kategoride ürün bulunamadı.</p>
                  <p className="text-sm mt-2">
                    Farklı bir alt kategori seçmeyi deneyin.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

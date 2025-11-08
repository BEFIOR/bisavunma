import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { Radio, Eye, Settings, ChevronDown } from "lucide-react";
import { rfSystems } from "@/data/rf-systems";
import { LazyVideo } from "@/components/animations/LazyVideo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("rfSystems");

  return {
    title: `${t("title")} | ${locale === "en" ? "Products" : "Ürünler"}`,
    description: t("description"),
  };
}

export const revalidate = 0;

export default function RfSystemsPage() {
  const t = useTranslations("rfSystems");
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <HeroAnimation direction="fade" delay={0}>
              <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Radio className="w-4 h-4" />
                <span>{t("badge")}</span>
              </div>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {t("heroTitle")}
              </h1>
            </HeroAnimation>

            <HeroAnimation direction="up" delay={0.15}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t("heroDescription")}
              </p>
            </HeroAnimation>
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("productSeries.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("productSeries.description")}
            </p>
          </ScrollAnimation>

          <StaggerContainer>
            <div className="relative rounded-xl overflow-hidden bg-neutral-800 my-12 p-12">
              <div className="aspect-video w-full">
                <LazyVideo
                  src="/products/rf-sistemleri/rf.mp4"
                  autoPlay
                  controls
                  loop
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </StaggerContainer>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rfSystems.map((product) => (
              <StaggerItem key={product.slug}>
                <Link
                  href={`/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/${product.slug}`}
                >
                  <div className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video w-full rounded-lg bg-neutral-800 mb-4 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-500"
                        >
                          <div className="w-1 h-1 rounded-full bg-sky-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                      {t("products.viewDetails")}
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("capabilities.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("capabilities.description")}
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("features.comprehensiveBand.title")}
                </h3>
                <p className="text-gray-400">
                  {t("features.comprehensiveBand.description")}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("features.realTimeSpectrum.title")}
                </h3>
                <p className="text-gray-400">
                  {t("features.realTimeSpectrum.description")}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("features.advancedProcessing.title")}
                </h3>
                <p className="text-gray-400">
                  {t("features.advancedProcessing.description")}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

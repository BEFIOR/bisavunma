"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import dynamic from "next/dynamic";
import {
  Radio,
  Shield,
  Brain,
  Cog,
  Zap,
  Satellite,
  Target,
  ArrowRight,
} from "@/lib/icons";
import {
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
  HeroAnimation,
  HeroStaggerContainer,
  ScrollAnimation,
} from "@/components/animations/ScrollAnimations";

// Lazy load heavy components to reduce initial bundle
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const ServicesAccordion = dynamic(
  () => import("@/components/ServicesAccordion"),
  {
    ssr: true,
  }
);

// Lazy load GallerySlider - 48 görsel içerdiği için LCP'yi etkiliyor
const GallerySlider = dynamic(() => import("@/components/GallerySlider"), {
  loading: () => (
    <div className="relative">
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl border border-gray-700/50 shadow-2xl animate-pulse flex items-center justify-center">
        <div className="text-gray-400 text-sm">Galeri yükleniyor...</div>
      </div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <HeroStaggerContainer
            className="space-y-10 md:space-y-12"
            staggerDelay={0.05}
          >
            {/* Main Headlines */}
            <div className="space-y-8 pt-6 md:pt-16">
              <HeroAnimation direction="fade" delay={0}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-poppins-bold text-white notranslate tracking-tight">
                  BİSAVUNMA
                </h1>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.1}>
                <h2 className="text-base md:text-2xl text-gray-300 font-poppins-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-12">
                  {t("hero.subtitle")}
                  <br />
                  <span className="text-sky-400 font-poppins-medium">
                    {t("hero.features.experience")}
                  </span>{" "}
                  •
                  <span className="text-sky-400 font-poppins-medium">
                    {" "}
                    {t("hero.features.service")}
                  </span>{" "}
                  •
                  <span className="text-sky-400 font-poppins-medium">
                    {" "}
                    {t("hero.features.export")}
                  </span>
                </h2>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.15}>
                <p className="text-sm md:text-lg text-gray-400 max-w-3xl md:max-w-5xl mx-auto leading-relaxed font-inter-regular px-12">
                  {t.rich("hero.description", {
                    optimumSolutions: (chunks) => (
                      <span className="text-sky-400 font-inter-medium">
                        {" "}
                        {chunks}
                      </span>
                    ),
                    technicalSupport: (chunks) => (
                      <span className="text-sky-400 font-inter-medium">
                        {" "}
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
              </HeroAnimation>
            </div>

            {/* Key Features */}
            <HeroAnimation direction="up" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 font-inter-medium text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-400" />
                  <span>{t("hero.features.experience")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-sky-400" />
                  <span>{t("hero.features.service")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Satellite className="w-5 h-5 text-sky-400" />
                  <span>{t("hero.features.export")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-5 h-5 text-sky-400" />
                  <span>{t("hero.features.support")}</span>
                </div>
              </div>
            </HeroAnimation>

            {/* Call to Action */}
            <HeroAnimation direction="up" delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-12">
                <Link
                  href="/urunler"
                  className="bg-sky-600 hover:bg-sky-700 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg font-poppins-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </HeroAnimation>
          </HeroStaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        {/* Parallax layer */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-20"
        />
        {/* Soft shimmer line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-16 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  {t("features.badge")}
                </span>
                <div className="overflow-hidden">
                  <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
                    {t("features.title")}
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-inter-regular">
                    {t("features.subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                title: t("features.items.0.title"),
                description: t("features.items.0.description"),
                Icon: Radio,
              },
              {
                title: t("features.items.1.title"),
                description: t("features.items.1.description"),
                Icon: Shield,
              },
              {
                title: t("features.items.2.title"),
                description: t("features.items.2.description"),
                Icon: Brain,
              },
              {
                title: t("features.items.3.title"),
                description: t("features.items.3.description"),
                Icon: Cog,
              },
              {
                title: t("features.items.4.title"),
                description: t("features.items.4.description"),
                Icon: Zap,
              },
              {
                title: t("features.items.5.title"),
                description: t("features.items.5.description"),
                Icon: Satellite,
              },
            ].map((f) => (
              <StaggerItem key={f.title} direction="up">
                <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 will-change-transform overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-gray-200">
                    <f.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-poppins-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 font-inter-regular">
                    {f.description}
                  </p>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            staggerDelay={0.1}
          >
            {[
              t("features.tags.0"),
              t("features.tags.1"),
              t("features.tags.2"),
            ].map((tag) => (
              <StaggerItem key={tag} direction="up">
                <div className="rounded-xl bg-gray-900 text-white px-4 py-3 text-sm text-center hover:scale-105 transition-transform duration-300">
                  {tag}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins-bold text-white mb-4">
                {t("services.title")}
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-inter-regular">
                {t("services.subtitle")}
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="" staggerDelay={0.1}>
            <ServicesAccordion
              services={[
                {
                  title: t("services.items.0.title"),
                  summary: t("services.items.0.summary"),
                  description: t("services.items.0.description"),
                  iconName: "Radio",
                },
                {
                  title: t("services.items.1.title"),
                  summary: t("services.items.1.summary"),
                  description: t("services.items.1.description"),
                  iconName: "Target",
                },
                {
                  title: t("services.items.2.title"),
                  summary: t("services.items.2.summary"),
                  description: t("services.items.2.description"),
                  iconName: "Search",
                },
                {
                  title: t("services.items.3.title"),
                  summary: t("services.items.3.summary"),
                  description: t("services.items.3.description"),
                  iconName: "Eye",
                },
                {
                  title: t("services.items.4.title"),
                  summary: t("services.items.4.summary"),
                  description: t("services.items.4.description"),
                  iconName: "Shield",
                },
                {
                  title: t("services.items.5.title"),
                  summary: t("services.items.5.summary"),
                  description: t("services.items.5.description"),
                  iconName: "Satellite",
                },
                {
                  title: t("services.items.6.title"),
                  summary: t("services.items.6.summary"),
                  description: t("services.items.6.description"),
                  iconName: "Cog",
                },
                {
                  title: t("services.items.7.title"),
                  summary: t("services.items.7.summary"),
                  description: t("services.items.7.description"),
                  iconName: "Headset",
                },
              ]}
            />
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <ScrollAnimation direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
                {t("about.badge")}
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
                {t("about.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl font-inter-regular">
                {t("about.description")}
              </p>
            </ScrollAnimation>

            <StaggerContainer
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              staggerDelay={0.1}
            >
              {[
                {
                  title: t("about.values.0.title"),
                  desc: t("about.values.0.description"),
                  Icon: Shield,
                },
                {
                  title: t("about.values.1.title"),
                  desc: t("about.values.1.description"),
                  Icon: Zap,
                },
                {
                  title: t("about.values.2.title"),
                  desc: t("about.values.2.description"),
                  Icon: Cog,
                },
              ].map((i) => (
                <StaggerItem key={i.title} direction="up">
                  <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-sm hover:shadow-md transition">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-200">
                      <i.Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-poppins-semibold text-white">
                      {i.title}
                    </div>
                    <div className="text-sm text-gray-300 font-inter-regular">
                      {i.desc}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-poppins-semibold hover:bg-black transition-colors"
                >
                  {t("about.cta.moreInfo")}
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-sm font-poppins-semibold text-white hover:bg-gray-800 transition"
                >
                  {t("about.cta.contact")}
                </Link>
              </div>
            </ScrollAnimation>
          </div>
          <div>
            <ScaleAnimation delay={0.8}>
              <div className="relative">
                {/* Section Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("about.gallery.title")}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Lazy-loaded Gallery */}
                <GallerySlider
                  images={[
                    "/main/ana-sayfa-hakkimizda.jpeg",
                    "/main/anasayfa-alt-1.png",
                    "/main/anasayfa-alt-2.jpeg",
                    "/main/anasayfa-alt-3.jpeg",
                    ...Array.from(
                      { length: 44 },
                      (_, i) => `/main/alt-slider/alt-${i + 1}.webp`
                    ),
                  ]}
                />
              </div>
            </ScaleAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section - Optimized with CSS animations */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
              {t("cta.badge")}
            </span>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
              {t("cta.title")}
            </h2>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-inter-regular">
              {t("cta.description")}
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-poppins-semibold hover:bg-gray-100 transition-colors"
              >
                {t("cta.buttons.start")}
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-poppins-semibold hover:bg-white/10 transition-colors"
              >
                {t("cta.buttons.demo")}
              </Link>
            </div>
          </div>
          <div className="animate-in fade-in duration-500 delay-700">
            <div
              aria-hidden
              className="mx-auto mt-10 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

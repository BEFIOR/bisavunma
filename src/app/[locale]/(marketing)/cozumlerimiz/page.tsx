"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import {
  Radio,
  Target,
  Eye,
  Shield,
  Satellite,
  Zap,
  ChevronDown,
  Layers,
  Network,
  Cpu,
  Activity,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo } from "@/components/animations/LazyVideo";
import { Link } from "@/i18n";

// Lazy load Footer
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Cozumlerimiz() {
  const t = useTranslations("cozumlerimiz");
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen">
        {/* Optimized Background - Simple gradient instead of heavy GSAP animation */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, #3d3d3d 1px, transparent 1px)`,
              backgroundSize: "25px 25px",
            }}
          />
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <HeroAnimation direction="fade" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                {t("hero.badge")}
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
                {t("hero.title")}
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.15}>
              <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("hero.description")}
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#sistem-konfigurasyonu"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                >
                  {t("hero.navigation.systemConfig")}
                </a>
                <a
                  href="#savunma-cozumleri"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t("hero.navigation.defenseSolutions")}
                </a>
                <a
                  href="#entegre-guvenlik"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  {t("hero.navigation.integratedSecurity")}
                </a>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Sistem Konfigürasyonu */}
      <section
        id="sistem-konfigurasyonu"
        className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        {/* Parallax layer */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-20"
        />
        {/* Soft shimmer line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-16 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                {t("systemConfiguration.badge")}
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                {t("systemConfiguration.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("systemConfiguration.description")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t("systemConfiguration.content.paragraph1")}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("systemConfiguration.content.paragraph2")}
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("systemConfiguration.features.0.title"),
                  desc: t("systemConfiguration.features.0.description"),
                  Icon: Radio,
                },
                {
                  title: t("systemConfiguration.features.1.title"),
                  desc: t("systemConfiguration.features.1.description"),
                  Icon: Target,
                },
                {
                  title: t("systemConfiguration.features.2.title"),
                  desc: t("systemConfiguration.features.2.description"),
                  Icon: Eye,
                },
                {
                  title: t("systemConfiguration.features.3.title"),
                  desc: t("systemConfiguration.features.3.description"),
                  Icon: Zap,
                },
                {
                  title: t("systemConfiguration.features.4.title"),
                  desc: t("systemConfiguration.features.4.description"),
                  Icon: Layers,
                },
                {
                  title: t("systemConfiguration.features.5.title"),
                  desc: t("systemConfiguration.features.5.description"),
                  Icon: Network,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/20 text-blue-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-neutral-800 my-12 p-12 max-w-5xl mx-auto">
          <div className="aspect-video w-full">
            <LazyVideo
              src="/cozumler/cozumlerimiz.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* İhtiyaca Yönelik Savunma Çözümleri */}
      <section
        id="savunma-cozumleri"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/20 px-4 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                {t("defenseSolutions.badge")}
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                {t("defenseSolutions.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("defenseSolutions.description")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t("defenseSolutions.content.paragraph1")}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("defenseSolutions.content.paragraph2")}
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("defenseSolutions.features.0.title"),
                  desc: t("defenseSolutions.features.0.description"),
                  Icon: Shield,
                },
                {
                  title: t("defenseSolutions.features.1.title"),
                  desc: t("defenseSolutions.features.1.description"),
                  Icon: Satellite,
                },
                {
                  title: t("defenseSolutions.features.2.title"),
                  desc: t("defenseSolutions.features.2.description"),
                  Icon: Zap,
                },
                {
                  title: t("defenseSolutions.features.3.title"),
                  desc: t("defenseSolutions.features.3.description"),
                  Icon: Radio,
                },
                {
                  title: t("defenseSolutions.features.4.title"),
                  desc: t("defenseSolutions.features.4.description"),
                  Icon: Target,
                },
                {
                  title: t("defenseSolutions.features.5.title"),
                  desc: t("defenseSolutions.features.5.description"),
                  Icon: Eye,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/20 text-emerald-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
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
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-neutral-800 my-12 p-12 max-w-5xl mx-auto">
          <div className="aspect-video w-full">
            <LazyVideo
              src="/cozumler/cozumler-ihtiyac.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Entegre Güvenlik Yaklaşımları */}
      <section
        id="entegre-guvenlik"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                {t("integratedSecurity.badge")}
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                {t("integratedSecurity.title")}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("integratedSecurity.description")}
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {t("integratedSecurity.content.paragraph1")}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t("integratedSecurity.content.paragraph2")}
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t("integratedSecurity.features.0.title"),
                  desc: t("integratedSecurity.features.0.description"),
                  Icon: Target,
                },
                {
                  title: t("integratedSecurity.features.1.title"),
                  desc: t("integratedSecurity.features.1.description"),
                  Icon: Radio,
                },
                {
                  title: t("integratedSecurity.features.2.title"),
                  desc: t("integratedSecurity.features.2.description"),
                  Icon: Eye,
                },
                {
                  title: t("integratedSecurity.features.3.title"),
                  desc: t("integratedSecurity.features.3.description"),
                  Icon: Zap,
                },
                {
                  title: t("integratedSecurity.features.4.title"),
                  desc: t("integratedSecurity.features.4.description"),
                  Icon: Activity,
                },
                {
                  title: t("integratedSecurity.features.5.title"),
                  desc: t("integratedSecurity.features.5.description"),
                  Icon: Cpu,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-900/20 text-purple-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Inline */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
              {t("cta.badge")}
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white">
              {t("cta.title")}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="mt-3 text-gray-300">{t("cta.description")}</p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("cta.buttons.contact")}
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {t("cta.buttons.quote")}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg pointer-events-none"
          style={{ animation: "bounce 2s infinite" }}
          title={t("navigation.scrollDown")}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

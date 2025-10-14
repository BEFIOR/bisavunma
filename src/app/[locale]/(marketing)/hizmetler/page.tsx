"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import {
  MapPin,
  Cog,
  GraduationCap,
  Code,
  Target,
  Shield,
  Eye,
  Radio,
  Wrench,
  ChevronDown,
} from "lucide-react";
// Removed DotGrid for performance
import {
  ScrollAnimation,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import Footer from "@/components/Footer";

export default function Hizmetler() {
  const t = useTranslations("hizmetler");
  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section id="hero" className="relative pt-24 overflow-hidden h-screen">
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

          {/* Background Overlay - only for hero section */}
          <div className="absolute inset-0 -z-10 bg-gray-950/80" />
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
                  {t("hero.title")}{" "}
                  <span className="text-gray-300">
                    {t("hero.titleHighlight")}
                  </span>
                </h1>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.15}>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                  {t("hero.description")}
                </p>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#saha-kesfi"
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                  >
                    {t("hero.buttons.fieldSurvey")}
                  </a>
                  <a
                    href="#kurulum-entegrasyon"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                  >
                    {t("hero.buttons.installation")}
                  </a>
                  <a
                    href="#egitim-destek"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                  >
                    {t("hero.buttons.training")}
                  </a>
                </div>
              </HeroAnimation>
            </div>
          </div>
        </section>

        {/* Saha Keşfi & Konumlandırma */}
        <section
          id="saha-kesfi"
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0}>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                  {t("fieldSurvey.badge")}
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {t("fieldSurvey.title")}{" "}
                  <span className="text-blue-300">
                    {t("fieldSurvey.titleHighlight")}
                  </span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.15}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  {t("fieldSurvey.description")}
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <ScrollAnimation direction="left" delay={1.0}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-xl hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-300 animate-pulse" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            {t("fieldSurvey.badge")}
                          </h3>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation direction="up" delay={1.2}>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>{t("fieldSurvey.content.paragraph1")}</p>
                          <p>{t("fieldSurvey.content.paragraph2")}</p>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-600" />
                            {t("fieldSurvey.services.radar.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t("fieldSurvey.services.radar.description")}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Radio className="h-5 w-5 text-blue-600" />
                            {t("fieldSurvey.services.rf.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t("fieldSurvey.services.rf.description")}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-600" />
                            {t("fieldSurvey.services.drone.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t("fieldSurvey.services.drone.description")}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-blue-600" />
                            {t("fieldSurvey.services.electroOptical.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t(
                              "fieldSurvey.services.electroOptical.description"
                            )}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            {t("fieldSurvey.services.infrastructure.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t(
                              "fieldSurvey.services.infrastructure.description"
                            )}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Kurulum & Entegrasyon */}
        <section
          id="kurulum-entegrasyon"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/20 px-4 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  {t("installation.badge")}
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {t("installation.title")}{" "}
                  <span className="text-emerald-300">
                    {t("installation.titleHighlight")}
                  </span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  {t("installation.description")}
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-emerald-900/20 rounded-xl hover:scale-110 transition-transform duration-300">
                            <Cog className="h-8 w-8 text-emerald-300 animate-spin" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            {t("installation.badge")}
                          </h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>{t("installation.content.systemsTitle")}</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>{t("installation.content.systems.radar")}</li>
                            <li>{t("installation.content.systems.drone")}</li>
                            <li>
                              {t("installation.content.systems.electroOptical")}
                            </li>
                            <li>
                              {t("installation.content.systems.hardKill")}
                            </li>
                          </ul>
                          <p>{t("installation.content.proactive")}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-emerald-600" />
                            {t("installation.benefits.title")}
                          </h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• {t("installation.benefits.dataSharing")}</li>
                            <li>• {t("installation.benefits.singleScreen")}</li>
                            <li>• {t("installation.benefits.coordination")}</li>
                            <li>
                              • {t("installation.benefits.cyberSecurity")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Eğitim & Teknik Destek */}
        <section
          id="egitim-destek"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                  {t("training.badge")}
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {t("training.title")}{" "}
                  <span className="text-purple-300">
                    {t("training.titleHighlight")}
                  </span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  {t("training.description")}
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <ScrollAnimation direction="left" delay={1.0}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-purple-900/20 rounded-xl hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="h-8 w-8 text-purple-300 animate-bounce" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            {t("training.badge")}
                          </h3>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation direction="up" delay={1.2}>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>{t("training.content.trainingTitle")}</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>{t("training.content.trainings.rf")}</li>
                            <li>{t("training.content.trainings.drone")}</li>
                            <li>{t("training.content.trainings.jammer")}</li>
                            <li>
                              {t("training.content.trainings.electroOptical")}
                            </li>
                            <li>{t("training.content.trainings.hardKill")}</li>
                            <li>
                              {t("training.content.trainings.simulation")}
                            </li>
                          </ul>
                          <p>{t("training.content.supportTitle")}</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>{t("training.content.supports.updates")}</li>
                            <li>
                              {t("training.content.supports.troubleshooting")}
                            </li>
                            <li>
                              {t("training.content.supports.maintenance")}
                            </li>
                            <li>{t("training.content.supports.consulting")}</li>
                          </ul>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-purple-600" />
                            {t("training.services.expertiseTransfer.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t(
                              "training.services.expertiseTransfer.description"
                            )}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-purple-600" />
                            {t("training.services.technicalSupport.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t(
                              "training.services.technicalSupport.description"
                            )}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Yazılım Çözümleri */}
        <section
          id="yazilim-cozumleri"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                  {t("software.badge")}
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {t("software.title")}{" "}
                  <span className="text-orange-300">
                    {t("software.titleHighlight")}
                  </span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  {t("software.description")}
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-xl hover:scale-110 transition-transform duration-300">
                            <Code className="h-8 w-8 text-orange-600 dark:text-orange-300 animate-pulse" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            {t("software.badge")}
                          </h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>
                              {t("software.content.features.integration")}
                            </li>
                            <li>{t("software.content.features.rfAnalysis")}</li>
                            <li>{t("software.content.features.ai")}</li>
                            <li>{t("software.content.features.proactive")}</li>
                            <li>
                              {t("software.content.features.cyberSecurity")}
                            </li>
                            <li>{t("software.content.features.reporting")}</li>
                          </ul>
                        </div>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Code className="h-5 w-5 text-orange-600" />
                            {t("software.services.c2Platform.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t("software.services.c2Platform.description")}
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-orange-600" />
                            {t("software.services.modernArchitecture.title")}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {t(
                              "software.services.modernArchitecture.description"
                            )}
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section
        id="cta"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200 hover:bg-emerald-400/20 transition-colors duration-300">
              {t("cta.badge")}
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-emerald-200 transition-colors duration-300">
              {t("cta.title")}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="mt-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
              {t("cta.description")}
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("cta.buttons.contact")}
              </Link>
              <Link
                href="/cozumlerimiz"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:border-white/40"
              >
                {t("cta.buttons.explore")}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group"
          style={{ animation: "bounce 2s infinite" }}
          title={t("navigation.scrollDown")}
        >
          <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
        </div>
      </div>
    </div>
  );
}

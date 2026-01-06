"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";


interface SystemItem {
  title: string;
  description: string;
}

export default function Sektorler() {
  const t = useTranslations("sektorler");
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen bg-gray-950/60">
        {/* DotGrid Background */}
        <div className="absolute inset-0 -z-10">
          <DotGrid
            dotSize={8}
            gap={54}
            baseColor="#1e3a5f55"
            activeColor="#38bdf8"
            proximity={180}
            className="opacity-60"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
              {t("hero.badge")}
            </span>
            <div className="overflow-hidden">
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
                {t("hero.title")}
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                {t("hero.description")}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#askeri-tesisler"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
              >
                {t("hero.navigation.askeriTesisler")}
              </a>
              <a
                href="#enerji-altyapi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                {t("hero.navigation.enerjiAltyapi")}
              </a>
              <a
                href="#liman-tersaneler"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                {t("hero.navigation.limanTersaneler")}
              </a>
              <a
                href="#sinir-guvenligi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                {t("hero.navigation.sinirGuvenligi")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler */}
      <section
        id="askeri-tesisler"
        className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500 " />{" "}
              {t("askeriTesisler.badge")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              {t("askeriTesisler.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {t("askeriTesisler.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 " />{" "}
                  {t("askeriTesisler.badge")}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  {t("askeriTesisler.detail.title")}
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  {t("askeriTesisler.detail.paragraph1")}
                </p>

                <p className="text-lg text-gray-300">
                  {t("askeriTesisler.detail.paragraph2")}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-4 text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/25"
                >
                  {t("askeriTesisler.detail.cta")}
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-3 gap-6">
                {t
                  .raw("askeriTesisler.systems")
                  .map((system: SystemItem, index: number) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-blue-200 "></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-2">
                            {system.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  {t("askeriTesisler.integration")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enerji & Kritik Altyapılar */}
      <section
        id="enerji-altyapi"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-4 py-1.5 text-xs font-medium text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-500 " />{" "}
              {t("enerjiAltyapi.badge")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              {t("enerjiAltyapi.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {t("enerjiAltyapi.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Enerji & Kritik Altyapılar Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-4 py-1.5 text-xs font-medium text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 " />{" "}
                  {t("enerjiAltyapi.badge")}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  {t("enerjiAltyapi.detail.title")}
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  {t("enerjiAltyapi.detail.paragraph1")}
                </p>

                <p className="text-lg text-gray-300">
                  {t("enerjiAltyapi.detail.paragraph2")}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-8 py-4 text-base font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-600/25"
                >
                  {t("enerjiAltyapi.detail.cta")}
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-3 gap-6">
                {t
                  .raw("enerjiAltyapi.systems")
                  .map((system: SystemItem, index: number) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-green-200 "></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-2">
                            {system.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-900/10 to-green-800/5 border border-green-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  {t("enerjiAltyapi.integration")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler */}
      <section
        id="liman-tersaneler"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-500 " />{" "}
              {t("limanTersaneler.badge")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              {t("limanTersaneler.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {t("limanTersaneler.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 " />{" "}
                  {t("limanTersaneler.badge")}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  {t("limanTersaneler.detail.title")}
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  {t("limanTersaneler.detail.paragraph1")}
                </p>

                <p className="text-lg text-gray-300">
                  {t("limanTersaneler.detail.paragraph2")}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-purple-600 text-white px-8 py-4 text-base font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-600/25"
                >
                  {t("limanTersaneler.detail.cta")}
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-3 gap-6">
                {t
                  .raw("limanTersaneler.systems")
                  .map((system: SystemItem, index: number) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-purple-200 "></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-2">
                            {system.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 to-purple-800/5 border border-purple-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  {t("limanTersaneler.integration")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği */}
      <section
        id="sinir-guvenligi"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500 " />{" "}
              {t("sinirGuvenligi.badge")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              {t("sinirGuvenligi.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              {t("sinirGuvenligi.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 " />{" "}
                  {t("sinirGuvenligi.badge")}
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  {t("sinirGuvenligi.detail.title")}
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  {t("sinirGuvenligi.detail.paragraph1")}
                </p>

                <p className="text-lg text-gray-300">
                  {t("sinirGuvenligi.detail.paragraph2")}
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-white px-8 py-4 text-base font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-600/25"
                >
                  {t("sinirGuvenligi.detail.cta")}
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-3 gap-6">
                {t
                  .raw("sinirGuvenligi.systems")
                  .map((system: SystemItem, index: number) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-orange-200 "></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-lg mb-2">
                            {system.title}
                          </h3>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-900/10 to-orange-800/5 border border-orange-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  {t("sinirGuvenligi.integration")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">{t("cta.description")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              {t("cta.buttons.contact")}
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              {t("cta.buttons.quote")}
            </Link>
          </div>
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

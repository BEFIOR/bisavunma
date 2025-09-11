import {
  Cog,
  Wrench,
  Settings,
  Headphones,
  GraduationCap,
  RefreshCw,
  FolderOpen,
  ChevronDown,
} from "lucide-react";
import { Component } from "@/components/ui/etheral-shadow";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";

export default function Hizmetler() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen">
        {/* Background DotGrid - only for hero section */}
        <div className="absolute inset-0 -z-20">
          <Component
            color="rgba(128, 128, 128, 1)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
          />
        </div>

        {/* Background Overlay - only for hero section */}
        <div className="absolute inset-0 -z-10 bg-white/90 dark:bg-gray-950/50" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <HeroAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Hizmetlerimiz
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Güvenlikte{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  Tam Kapsamlı Çözümler
                </span>
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sınır güvenliği alanında 25 yıllık tecrübeye sahip olan
                Bisavunma, müşterilerine en üst düzeyde güvenlik sağlamak
                amacıyla geniş bir hizmet yelpazesi sunmaktadır.
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#sistem-entegrasyonu"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                >
                  Sistem Entegrasyonu
                </a>
                <a
                  href="#ozellestirilmis-cozumler"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Özelleştirilmiş Çözümler
                </a>
                <a
                  href="#montaj-kurulum"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Montaj & Kurulum
                </a>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Sistem Entegrasyonu */}
      <section
        id="sistem-entegrasyonu"
        className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                Sistem Entegrasyonu
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tam Entegrasyon{" "}
                <span className="text-blue-700 dark:text-blue-300">
                  Hizmeti
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sınır güvenliği operasyonlarında başarının anahtarı, farklı
                güvenlik sistemlerinin birbiriyle uyum içinde çalışmasıdır.
                Mevcut güvenlik sistemlerini yeni teknolojilerle uyumlu hale
                getiririz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "RF Sistemleri",
                desc: "Radyo frekans algılama ve haberleşme sistemleri",
                Icon: Cog,
              },
              {
                title: "Kamera Sistemleri",
                desc: "Görüntüleme ve izleme teknolojileri",
                Icon: Settings,
              },
              {
                title: "Sensör Ağları",
                desc: "Çoklu sensör entegrasyonu ve yönetimi",
                Icon: Wrench,
              },
              {
                title: "Merkezi Yönetim",
                desc: "Tek platform üzerinden sistem kontrolü",
                Icon: FolderOpen,
              },
              {
                title: "Veri Analizi",
                desc: "Entegre veri toplama ve analiz",
                Icon: Settings,
              },
              {
                title: "Uyumluluk",
                desc: "Mevcut sistemlerle tam uyumluluk",
                Icon: Cog,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Özelleştirilmiş Çözüm Geliştirme */}
      <section
        id="ozellestirilmis-cozumler"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Özelleştirilmiş Çözüm Geliştirme
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Müşteri Odaklı{" "}
                <span className="text-emerald-700 dark:text-emerald-300">
                  Yaklaşım
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Her sınır bölgesinin kendine özgü güvenlik ihtiyaçları ve
                zorlukları vardır. Müşteri odaklı yaklaşımımızla, bu ihtiyaçlara
                uygun özelleştirilmiş çözümler geliştiriyoruz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "İhtiyaç Analizi",
                desc: "Detaylı güvenlik ihtiyaçları değerlendirmesi",
                Icon: Settings,
              },
              {
                title: "Özel Tasarım",
                desc: "Bölgeye özel sistem tasarımı",
                Icon: Wrench,
              },
              {
                title: "Prototip Geliştirme",
                desc: "Test ve doğrulama için prototip",
                Icon: Cog,
              },
              {
                title: "Saha Testleri",
                desc: "Gerçek koşullarda sistem testleri",
                Icon: Settings,
              },
              {
                title: "Optimizasyon",
                desc: "Performans ve verimlilik optimizasyonu",
                Icon: Wrench,
              },
              {
                title: "Sürekli İyileştirme",
                desc: "Sistem geliştirme ve güncelleme",
                Icon: RefreshCw,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Montaj ve Kurulum Hizmetleri */}
      <section
        id="montaj-kurulum"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600 dark:bg-purple-800 dark:text-purple-300">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                Montaj ve Kurulum Hizmetleri
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Profesyonel{" "}
                <span className="text-purple-700 dark:text-purple-300">
                  Kurulum
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Güvenlik sistemlerinin etkin bir şekilde çalışabilmesi için
                doğru montaj ve kurulum büyük önem taşır. Deneyimli teknik
                ekibimiz, sistemlerinizi en uygun şekilde kurarak, maksimum
                performans sağlamaktadır.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Saha Analizi",
                desc: "Kurulum öncesi detaylı saha değerlendirmesi",
                Icon: Settings,
              },
              {
                title: "Profesyonel Montaj",
                desc: "Uzman ekip tarafından sistem montajı",
                Icon: Wrench,
              },
              {
                title: "Kalite Kontrol",
                desc: "Kurulum sonrası kalite ve güvenlik kontrolü",
                Icon: Cog,
              },
              {
                title: "Test ve Doğrulama",
                desc: "Sistem testleri ve performans doğrulaması",
                Icon: Settings,
              },
              {
                title: "Dokümantasyon",
                desc: "Kurulum dokümantasyonu ve kullanım kılavuzu",
                Icon: FolderOpen,
              },
              {
                title: "Eğitim",
                desc: "Sistem kullanımı için operatör eğitimi",
                Icon: GraduationCap,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bakım ve Teknik Destek */}
      <section
        id="bakim-destek"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-medium text-orange-600 dark:bg-orange-800 dark:text-orange-300">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                Bakım ve Teknik Destek
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                7/24{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  Teknik Destek
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Kurulum sonrası hizmetler, güvenlik sistemlerinin uzun vadede
                etkinliğini koruması için kritik öneme sahiptir. Düzenli bakım
                hizmetleri ve 7/24 teknik destek sunuyoruz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Önleyici Bakım",
                desc: "Düzenli sistem bakımı ve kontrolleri",
                Icon: Wrench,
              },
              {
                title: "7/24 Destek",
                desc: "Kesintisiz teknik destek hizmeti",
                Icon: Headphones,
              },
              {
                title: "Hızlı Müdahale",
                desc: "Acil durumlarda hızlı müdahale",
                Icon: Settings,
              },
              {
                title: "Uzaktan Destek",
                desc: "Uzaktan sistem kontrolü ve destek",
                Icon: Cog,
              },
              {
                title: "Yedek Parça",
                desc: "Hızlı yedek parça temini",
                Icon: Wrench,
              },
              {
                title: "Performans İzleme",
                desc: "Sürekli sistem performans izleme",
                Icon: Settings,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Eğitim ve Danışmanlık */}
      <section
        id="egitim-danismanlik"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-600 dark:bg-green-800 dark:text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
                Eğitim ve Danışmanlık
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kapsamlı{" "}
                <span className="text-green-700 dark:text-green-300">
                  Eğitim Programları
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Güvenlik sistemlerinin doğru kullanımı, personelin bu sistemler
                hakkında yeterli bilgiye sahip olmasını gerektirir. Kapsamlı
                eğitim hizmetleri ve danışmanlık sunuyoruz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Operatör Eğitimi",
                desc: "Sistem operatörleri için kapsamlı eğitim",
                Icon: GraduationCap,
              },
              {
                title: "Teknik Eğitim",
                desc: "Teknik personel için uzman eğitimi",
                Icon: Settings,
              },
              {
                title: "Güvenlik Danışmanlığı",
                desc: "Güvenlik stratejileri danışmanlığı",
                Icon: FolderOpen,
              },
              {
                title: "Saha Eğitimi",
                desc: "Gerçek saha koşullarında eğitim",
                Icon: Wrench,
              },
              {
                title: "Sertifikasyon",
                desc: "Eğitim sonrası sertifikasyon",
                Icon: GraduationCap,
              },
              {
                title: "Sürekli Eğitim",
                desc: "Güncel teknolojiler için sürekli eğitim",
                Icon: RefreshCw,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Güncelleme ve Yenileme Hizmetleri */}
      <section
        id="guncelleme-yenileme"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-medium text-cyan-600 dark:bg-cyan-800 dark:text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />{" "}
                Güncelleme ve Yenileme Hizmetleri
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Teknoloji{" "}
                <span className="text-cyan-700 dark:text-cyan-300">
                  Güncellemeleri
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Teknoloji hızla gelişiyor ve güvenlik tehditleri sürekli
                evriliyor. Mevcut güvenlik sistemlerini en yeni teknolojilerle
                uyumlu hale getiriyoruz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Yazılım Güncellemeleri",
                desc: "Sistem yazılımlarının güncel tutulması",
                Icon: RefreshCw,
              },
              {
                title: "Donanım Yenileme",
                desc: "Eski donanımların modern teknolojilerle değiştirilmesi",
                Icon: Cog,
              },
              {
                title: "Uyumluluk Testleri",
                desc: "Yeni teknolojilerle uyumluluk testleri",
                Icon: Settings,
              },
              {
                title: "Performans Optimizasyonu",
                desc: "Güncelleme sonrası performans iyileştirme",
                Icon: Wrench,
              },
              {
                title: "Güvenlik Yaması",
                desc: "Güvenlik açıklarının kapatılması",
                Icon: Settings,
              },
              {
                title: "Geçiş Planlaması",
                desc: "Sistem geçişleri için detaylı planlama",
                Icon: FolderOpen,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Proje Yönetimi */}
      <section
        id="proje-yonetimi"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-medium text-indigo-600 dark:bg-indigo-800 dark:text-indigo-300">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />{" "}
                Proje Yönetimi
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Etkin{" "}
                <span className="text-indigo-700 dark:text-indigo-300">
                  Proje Yönetimi
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Büyük ölçekli sınır güvenliği projelerinde etkin proje yönetimi,
                operasyonların başarısı için hayati öneme sahiptir. Her projeyi
                titizlikle planlayıp yönetiyoruz.
              </p>
            </ScrollAnimation>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Proje Planlama",
                desc: "Detaylı proje planlaması ve zaman çizelgesi",
                Icon: FolderOpen,
              },
              {
                title: "Kaynak Yönetimi",
                desc: "İnsan kaynakları ve ekipman yönetimi",
                Icon: Settings,
              },
              {
                title: "Risk Yönetimi",
                desc: "Proje risklerinin belirlenmesi ve yönetimi",
                Icon: Wrench,
              },
              {
                title: "Kalite Kontrol",
                desc: "Proje kalitesinin sürekli kontrolü",
                Icon: Cog,
              },
              {
                title: "İletişim Yönetimi",
                desc: "Müşteri ile düzenli bilgilendirme",
                Icon: Headphones,
              },
              {
                title: "Teslimat Yönetimi",
                desc: "Zamanında ve bütçe dahilinde teslimat",
                Icon: RefreshCw,
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {s.desc}
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
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
              Hizmetlerimiz hakkında
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white">
              Güvenlik ihtiyaçlarınız için kapsamlı çözümler
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="mt-3 text-gray-300">
              25 yıllık tecrübemizle, sınır güvenliği operasyonlarının her
              aşamasında etkin ve verimli çözümler sunuyoruz.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                İletişime Geç
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Teklif Al
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg pointer-events-none"
          style={{ animation: "bounce 2s infinite" }}
          title="Aşağı Kaydır"
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">BİSAVUNMA</h3>
              <p className="text-gray-400">
                Sınır güvenliği alanında 25 yıllık tecrübeye sahip, kapsamlı
                güvenlik çözümleri sunan lider firma.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Hizmetler
              </h4>
              <ul className="space-y-2">
                {[
                  "Sistem Entegrasyonu",
                  "Özelleştirilmiş Çözümler",
                  "Montaj & Kurulum",
                  "Bakım & Destek",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Ek Hizmetler
              </h4>
              <ul className="space-y-2">
                {[
                  "Eğitim & Danışmanlık",
                  "Güncelleme & Yenileme",
                  "Proje Yönetimi",
                  "Teknik Destek",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                İletişim
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:info@bisavunma.com"
                    className="hover:text-white transition-colors"
                  >
                    info@bisavunma.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+90212XXXXXXX"
                    className="hover:text-white transition-colors"
                  >
                    +90 212 XXX XX XX
                  </a>
                </li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400">
            <p>© 2024 BİSAVUNMA. Tüm hakları saklıdır.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                KVKK
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Çerezler
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Şartlar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

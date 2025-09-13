import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShinyText } from "@/components/ShinyText";
import {
  Radio,
  Shield,
  Brain,
  Cog,
  Zap,
  Satellite,
  Target,
  Search,
  Eye,
  Headset,
  Play,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { LazyVideo } from "@/components/animations/LazyVideo";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
  HeroAnimation,
  HeroStaggerContainer,
} from "@/components/animations/ScrollAnimations";
export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-36 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <HeroStaggerContainer className="space-y-12" staggerDelay={0.2}>
            {/* Main Headlines */}
            <div className="space-y-8 pt-16">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="hidden md:block">
                  <TextHoverEffect text="BİSAVUNMA" />
                </div>
                <div className="block md:hidden">
                  <ShinyText
                    text="BİSAVUNMA"
                    className="text-6xl font-poppins-bold"
                  />
                </div>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.4}>
                <h2 className="text-md md:text-2xl text-gray-300 font-poppins-light max-w-4xl mx-auto">
                  DÜNYA ÇAPINDA YENİLİKÇİ MODÜLER SAVUNMA SİSTEMLERİ
                  <br />
                  <span className="text-sky-400 font-poppins-medium">
                    25+ Yıl Deneyim
                  </span>{" "}
                  •
                  <span className="text-sky-400 font-poppins-medium">
                    {" "}
                    Türkiye Geneli Hizmet
                  </span>{" "}
                  •
                  <span className="text-sky-400 font-poppins-medium">
                    {" "}
                    Dünya Çapında İhracat
                  </span>
                </h2>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-sm md:text-lg  text-gray-400 max-w-5xl mx-auto leading-relaxed font-inter-regular">
                  1996&apos;dan beri kamera sistemleri sektöründe faaliyet
                  gösteren, 2018&apos;de yeniden yapılanan Bisavunma,
                  <span className="text-sky-400 font-inter-medium">
                    {" "}
                    optimum çözümler
                  </span>{" "}
                  ve
                  <span className="text-sky-400 font-inter-medium">
                    {" "}
                    nitelikli teknik destek
                  </span>{" "}
                  ile müşteri portföyünü genişletmiş ve başarılı projelere imza
                  atmaktadır.
                </p>
              </HeroAnimation>
            </div>

            {/* Key Features */}
            <HeroAnimation direction="up" delay={0.8}>
              <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-inter-medium">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-400" />
                  <span>25+ Yıl Deneyim</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-sky-400" />
                  <span>Türkiye Geneli Hizmet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Satellite className="w-5 h-5 text-sky-400" />
                  <span>Dünya Çapında İhracat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-5 h-5 text-sky-400" />
                  <span>Nitelikli Teknik Destek</span>
                </div>
              </div>
            </HeroAnimation>

            {/* Call to Action */}
            <HeroAnimation direction="up" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link
                  href="/urunler"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-poppins-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Ürünleri İncele
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-poppins-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Tanıtım Videosu
                </button>
              </div>
            </HeroAnimation>
          </HeroStaggerContainer>
          <HeroAnimation direction="fade" delay={1.2}>
            <div className="bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-xl overflow-hidden p-12 my-12">
              <div className="relative aspect-video w-full h-[400px] md:h-[500px]">
                <LazyVideo
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </HeroAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
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
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  Özellikler
                </span>
                <div className="overflow-hidden">
                  <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-gray-900 dark:text-white">
                    Neden{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      BİSAVUNMA
                    </span>
                    ?
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter-regular">
                    Operasyonel üstünlük için tasarlanmış, yüksek etkili ve
                    güvenilir yetenek seti.
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
                title: "Gerçek Zamanlı İzleme",
                description:
                  "Anlık veri akışı ve uyarılar ile sahaya tam hakimiyet.",
                Icon: Radio,
              },
              {
                title: "Dayanıklı Mimari",
                description:
                  "Zorlu koşullar için test edilmiş güvenilir sistemler.",
                Icon: Shield,
              },
              {
                title: "Yapay Zeka Desteği",
                description:
                  "Sinyal ve görüntü analizi için ileri AI modelleri.",
                Icon: Brain,
              },
              {
                title: "Ölçeklenebilirlik",
                description: "İhtiyaca göre büyüyen modüler altyapı.",
                Icon: Cog,
              },
              {
                title: "Düşük Gecikme",
                description:
                  "Karar anlarında kritik gecikmeleri minimize eder.",
                Icon: Zap,
              },
              {
                title: "24/7 Destek",
                description: "Operasyonel süreklilik için kesintisiz destek.",
                Icon: Satellite,
              },
            ].map((f) => (
              <StaggerItem key={f.title} direction="up">
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 will-change-transform overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    <f.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-poppins-semibold text-gray-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-inter-regular">
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
            {["Hızlı Entegrasyon", "Saha Kanıtı", "Gizlilik Standartları"].map(
              (tag) => (
                <StaggerItem key={tag} direction="up">
                  <div className="rounded-xl bg-gray-900 text-white px-4 py-3 text-sm text-center hover:scale-105 transition-transform duration-300">
                    {tag}
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins-bold text-gray-900 dark:text-white mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter-regular">
                Savunma sektöründe kapsamlı çözümler sunuyoruz
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {[
              { title: "RF Sistemleri", Icon: Radio },
              { title: "Radar Sistemleri", Icon: Target },
              { title: "Sinyal İstihbarat", Icon: Search },
              { title: "Elektro-Optik", Icon: Eye },
              { title: "Jammer Sistemleri", Icon: Shield },
              { title: "DJI Enterprise", Icon: Satellite },
              { title: "Sistem Entegrasyonu", Icon: Cog },
              { title: "Teknik Destek", Icon: Headset },
            ].map((svc) => (
              <StaggerItem key={svc.title} direction="up">
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    <svc.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-poppins-semibold text-gray-900 dark:text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-inter-regular">
                    Profesyonel çözümler ve uzman destek
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
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollAnimation direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                Hakkımızda
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-gray-900 dark:text-white">
                Sahada Kanıtlanmış Güvenilir Çözümler
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-inter-regular">
                BİSAVUNMA, savunma teknolojilerinde uzman kadrosu ve mühendislik
                yetkinlikleriyle kurumların operasyonel üstünlük elde etmesini
                sağlar.
              </p>
            </ScrollAnimation>

            <StaggerContainer
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              staggerDelay={0.1}
            >
              {[
                {
                  title: "Güvenlik",
                  desc: "Askeri standartlarda güvenilirlik",
                  Icon: Shield,
                },
                {
                  title: "Hız",
                  desc: "Düşük gecikme, hızlı reaksiyon",
                  Icon: Zap,
                },
                {
                  title: "Entegrasyon",
                  desc: "Modüler ve ölçeklenebilir",
                  Icon: Cog,
                },
              ].map((i) => (
                <StaggerItem key={i.title} direction="up">
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md transition">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <i.Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-poppins-semibold text-gray-900 dark:text-white">
                      {i.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-inter-regular">
                      {i.desc}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-poppins-semibold hover:bg-black transition-colors"
                >
                  Daha Fazla Bilgi
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-poppins-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  İletişime Geç
                </a>
              </div>
            </ScrollAnimation>
          </div>
          <div>
            <ScaleAnimation delay={0.8}>
              <div className="relative">
                <div className="absolute left-1/2 top-6 h-px w-2/3 -translate-x-1/2" />
                <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 dark:border-gray-800 bg-black shadow-sm overflow-hidden">
                  <Image
                    src="/main/ana-sayfa-hakkimizda.jpeg"
                    alt="BİSAVUNMA Hakkımızda"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </ScaleAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins-bold text-gray-900 dark:text-white mb-4">
                Referanslar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter-regular">
                Müşterilerimizin bizimle çalışma deneyimleri
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.2}
          >
            {[
              {
                quote:
                  "Operasyonel verimliliğimizi ciddi şekilde artırdılar. Destek çok hızlı.",
                author: "Savunma Sanayi Müşterisi",
                role: "Operasyon Yöneticisi",
              },
              {
                quote:
                  "Güvenilir ve ölçeklenebilir çözümlerle ihtiyaçlarımıza nokta atışı yaklaştılar.",
                author: "Kurumsal İş Ortağı",
                role: "Teknoloji Direktörü",
              },
              {
                quote:
                  "Saha koşullarında test edilen ürünler ile fark yarattılar.",
                author: "Kamu Kurumu",
                role: "Proje Sorumlusu",
              },
            ].map((t) => (
              <StaggerItem key={t.author} direction="up">
                <div className="relative h-full p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4 font-inter-regular">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-inter-regular">
                    <span className="font-poppins-semibold text-gray-900 dark:text-white">
                      {t.author}
                    </span>{" "}
                    · {t.role}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partners / Brands Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-poppins-bold text-gray-900 dark:text-white mb-3">
                İş Ortaklarımız
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-inter-regular">
                Birlikte değer ürettiğimiz markalar
              </p>
              <div
                aria-hidden
                className="mx-auto mt-6 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
              />
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center"
            staggerDelay={0.1}
          >
            {["ASELSAN", "HAVELSAN", "TAI", "ROKETSAN", "DJI", "X"].map(
              (brand) => (
                <StaggerItem key={brand} direction="up">
                  <div
                    className="group relative h-16 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden transition hover:shadow-md"
                    style={{ willChange: "transform" }}
                    aria-label={brand}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-emerald-500 to-cyan-500" />
                    <span className="text-sm font-poppins-medium text-gray-500 dark:text-gray-300 tracking-wide group-hover:text-gray-800 dark:group-hover:text-white transition">
                      {brand}
                    </span>
                  </div>
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
              Hazır mısınız?
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
              Savunma Çözümlerinizi Güçlendirin
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-inter-regular">
              Uzman ekibimizle iletişime geçin ve ihtiyaçlarınıza özel çözümler
              alın.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-poppins-semibold hover:bg-gray-100 transition-colors"
              >
                Hemen Başlayın
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-poppins-semibold hover:bg-white/10 transition-colors"
              >
                Demo Talep Et
              </a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="fade" delay={0.8}>
            <div
              aria-hidden
              className="mx-auto mt-10 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-poppins-bold text-white mb-4">
                BİSAVUNMA
              </h3>
              <p className="text-gray-400 font-inter-regular">
                Savunma teknolojilerinde yenilikçi çözümler ve güvenilir
                sistemler.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-poppins-semibold text-white mb-4">
                Ürünler
              </h4>
              <ul className="space-y-2">
                {[
                  "RF Sistemleri",
                  "Radar Sistemleri",
                  "Sinyal İstihbarat",
                  "Elektro-Optik",
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
              <h4 className="text-sm font-poppins-semibold text-white mb-4">
                Hizmetler
              </h4>
              <ul className="space-y-2">
                {[
                  "Sistem Entegrasyonu",
                  "Teknik Destek",
                  "Eğitim",
                  "Danışmanlık",
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
              <h4 className="text-sm font-poppins-semibold text-white mb-4">
                İletişim
              </h4>
              <ul className="space-y-2 text-gray-400 font-inter-regular">
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
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 font-inter-regular">
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

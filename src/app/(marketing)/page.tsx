"use client";

import Image from "next/image";
import { useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShinyText } from "@/components/ShinyText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
  HeroAnimation,
  HeroStaggerContainer,
} from "@/components/animations/ScrollAnimations";
import Footer from "@/components/Footer";
export default function Home() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    console.log(
      "Toggling service:",
      index,
      "Current expanded:",
      expandedService
    );
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-36 md:pb-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <HeroStaggerContainer
            className="space-y-10 md:space-y-12"
            staggerDelay={0.2}
          >
            {/* Main Headlines */}
            <div className="space-y-8 pt-6 md:pt-16">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="hidden md:block notranslate">
                  <TextHoverEffect text="BİSAVUNMA" />
                </div>
                <div className="block md:hidden notranslate">
                  <ShinyText
                    text="BİSAVUNMA"
                    className="text-[clamp(2.5rem,_12vw,_4rem)] font-poppins-bold"
                  />
                </div>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.4}>
                <h2 className="text-base md:text-2xl text-gray-300 font-poppins-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-12">
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
                <p className="text-sm md:text-lg text-gray-400 max-w-3xl md:max-w-5xl mx-auto leading-relaxed font-inter-regular px-12">
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
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 font-inter-medium text-sm sm:text-base">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-12">
                <Link
                  href="/urunler"
                  className="bg-sky-600 hover:bg-sky-700 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg font-poppins-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Ürünleri İncele
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
                  Özellikler
                </span>
                <div className="overflow-hidden">
                  <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
                    Neden <span className="text-gray-300">BİSAVUNMA</span>?
                  </h2>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-inter-regular">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins-bold text-white mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-inter-regular">
                Savunma sektöründe kapsamlı çözümler sunuyoruz
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                title: "RF Sistemleri",
                summary:
                  "Geniş bant RF çözümleri ile sahada elektromanyetik üstünlük.",
                description:
                  "BİSAVUNMA'nın RF çözümleri, 9 kHz – 8 / 18 / 40 GHz aralığında çalışarak sinyal toplama, analiz etme ve yön bulma (DF) kabiliyeti sunar. Bu sayede drone kontrol frekanslarından düşman haberleşme sinyallerine kadar tüm elektromanyetik aktiviteler tespit edilir. Gelişmiş spektrum analizi, waterfall ve wrapped spectrum görselleştirmeleri ile tehditler hızlıca teşhis edilir. RF sistemlerimiz sınır güvenliği, üs bölgeleri, enerji altyapısı ve VIP korumada kritik avantaj sağlar.",
                Icon: Radio,
              },
              {
                title: "Radar Sistemleri",
                summary: "360° kapsama, düşük görünürlüklü hedef tespiti.",
                description:
                  "Radar sistemlerimiz, modern tehditlere karşı tam alan gözetleme sağlar. AESA radarlar ve döner antenli çözümler küçük dronelardan hava araçlarına kadar geniş bir hedef yelpazesini tespit edebilir. Çoklu hedef takibi, dost-düşman tanıma (IFF) ve yüksek çözünürlüklü haritalama kabiliyetiyle üs bölgeleri, havaalanları ve kritik tesislerin güvenliği sağlanır.",
                Icon: Target,
              },
              {
                title: "Sinyal İstihbarat (SIGINT)",
                summary:
                  "Geniş bant sinyal istihbaratı ile düşman haberleşme ağı takibi.",
                description:
                  "SIGINT çözümlerimiz 9 kHz – 8 / 18 / 40 GHz aralığında çalışarak geniş bant toplama ve çözümleme kapasitesi sunar. Bu sistemler düşman komuta-kontrol sinyallerini analiz eder, yön bulma (DF) ile kaynaklarını konumlandırır ve yapay zekâ destekli tehdit sınıflandırması yapar. Hibrit tehditlere karşı güvenlik güçlerine proaktif üstünlük sağlar.",
                Icon: Search,
              },
              {
                title: "Elektro-Optik & Termal",
                summary: "Gece-gündüz, her hava koşulunda hedef teşhisi.",
                description:
                  "EO/IR sistemlerimiz yüksek çözünürlüklü kameralar, termal sensörler ve lazer mesafe ölçerlerle gündüz-gece kesintisiz gözetleme sağlar. Radar ve RF sistemleriyle entegre edilerek hedefin görsel teşhisi yapılır, yanlış alarm riski en aza indirilir. Özellikle sınır güvenliği ve kritik tesislerde etkin kullanılır.",
                Icon: Eye,
              },
              {
                title: "Jammer Sistemleri",
                summary: "Soft-kill elektronik harp çözümleri.",
                description:
                  "BİSAVUNMA'nın jammer sistemleri 9 kHz – 8 / 18 / 40 GHz frekans aralığında çalışır. Drone kontrol sinyallerini, GNSS/GPS bağlantılarını ve düşman haberleşme ağlarını etkisiz hale getirir. Sabit, mobil ve taşınabilir modelleri mevcuttur. Tehdit odaklı aktif çalışma prensibi ile enerji verimliliği sağlanır. Radar, RF ve EO/IR entegrasyonu ile çok katmanlı Anti-Drone mimarisi oluşturur.",
                Icon: Shield,
              },
              {
                title: "DJI Enterprise",
                summary: "Endüstriyel dronelar ile çok boyutlu gözetleme.",
                description:
                  "DJI Enterprise çözümleri keşif, arama-kurtarma, sınır güvenliği ve kritik altyapı denetimleri için geliştirilmiştir. Termal kameralar, RTK uydu desteği, uzun uçuş süreleri ve yüksek taşıma kapasitesi ile güvenlik güçlerine avantaj sağlar. BİSAVUNMA entegrasyonu ile radar ve RF sistemleriyle tek ekranda yönetilebilir.",
                Icon: Satellite,
              },
              {
                title: "Sistem Entegrasyonu",
                summary: "Tüm sistemler tek bir C2 yazılımında birleşir.",
                description:
                  "Radar, RF, SIGINT, EO/IR, jammer ve hard-kill sistemleri özel geliştirilmiş C2 komuta kontrol yazılımı üzerinde entegre edilir. Böylece radar tespit eder, RF doğrular, EO/IR teşhis yapar, jammer engeller, hard-kill imha eder. Tüm süreç tek ekrandan yönetilerek karar verme süresi minimuma indirilir.",
                Icon: Cog,
              },
              {
                title: "Teknik Destek",
                summary: "7/24 destek ve uzun vadeli güven ortaklığı.",
                description:
                  "BİSAVUNMA, sistemlerin her zaman en yüksek performansla çalışması için 7/24 teknik destek sağlar. Yazılım güncellemeleri, bakım planlamaları, arıza tespiti, hızlı müdahale ve operatör eğitimleri ile müşterilerimiz daima desteklenir.",
                Icon: Headset,
              },
            ].map((svc, index) => (
              <StaggerItem key={svc.title} direction="up">
                <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Header - Clickable */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleService(index);
                    }}
                    className="w-full p-4 sm:p-6 text-left hover:bg-gray-800 transition-colors duration-200 focus:outline-none relative z-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gray-800 text-gray-200 flex-shrink-0">
                          <svc.Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg font-poppins-semibold text-white truncate">
                            {svc.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-gray-300 font-inter-regular line-clamp-2">
                            {svc.summary}
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        {expandedService === index ? (
                          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-200" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedService === index
                        ? "max-h-96 sm:max-h-80 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="border-t border-gray-700 pt-3 sm:pt-4">
                        <p className="text-xs sm:text-sm text-gray-300 font-inter-regular leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity z-0"
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <ScrollAnimation direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
                Hakkımızda
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
                Sahada Kanıtlanmış Güvenilir Çözümler
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl font-inter-regular">
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
                  Daha Fazla Bilgi
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-sm font-poppins-semibold text-white hover:bg-gray-800 transition"
                >
                  İletişime Geç
                </Link>
              </div>
            </ScrollAnimation>
          </div>
          <div>
            <ScaleAnimation delay={0.8}>
              <div className="relative">
                {/* Section Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Galeri</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Modern Gallery Container */}
                <div className="relative group">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent rounded-3xl pointer-events-none z-10"></div>

                  {/* Main Gallery */}
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        1280: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                      }}
                      pagination={{
                        clickable: true,
                        el: ".swiper-pagination-custom",
                        bulletClass: "swiper-pagination-bullet-custom",
                        bulletActiveClass:
                          "swiper-pagination-bullet-active-custom",
                      }}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      loop={true}
                      className="w-full h-full"
                    >
                      {[
                        "/main/ana-sayfa-hakkimizda.jpeg",
                        "/main/anasayfa-alt-1.png",
                        "/main/anasayfa-alt-2.jpeg",
                        "/main/anasayfa-alt-3.jpeg",
                        ...Array.from(
                          { length: 44 },
                          (_, i) => `/main/alt-slider/alt-${i + 1}.webp`
                        ),
                      ].map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative group/slide">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg transition-all duration-500 group-hover/slide:shadow-2xl group-hover/slide:scale-105 group-hover/slide:border-blue-500/50">
                              <Image
                                src={image}
                                alt={`Galeri Görseli ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                className="object-cover transition-transform duration-700 group-hover/slide:scale-110"
                                priority={index < 4}
                                loading={index < 4 ? "eager" : "lazy"}
                              />

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110 hover:border-blue-500/50 group">
                      <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
                    </button>

                    <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110 hover:border-blue-500/50 group">
                      <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Custom Pagination - Outside the slider */}
                <div className="swiper-pagination-custom mt-6 flex justify-center items-center space-x-3"></div>

                {/* Custom CSS for pagination bullets */}
                <style jsx global>{`
                  .swiper-pagination-custom {
                    position: static !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 12px !important;
                    margin-top: 0 !important;
                    width: 100% !important;
                  }

                  .swiper-pagination-bullet-custom {
                    width: 10px !important;
                    height: 10px !important;
                    background: rgba(255, 255, 255, 0.4) !important;
                    border-radius: 50% !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    cursor: pointer !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    opacity: 0.7 !important;
                    margin: 0 !important;
                    display: inline-block !important;
                  }

                  .swiper-pagination-bullet-active-custom {
                    background: linear-gradient(
                      135deg,
                      #3b82f6,
                      #8b5cf6
                    ) !important;
                    transform: scale(1.3) !important;
                    box-shadow: 0 0 15px rgba(59, 130, 246, 0.6) !important;
                    opacity: 1 !important;
                    border-color: rgba(59, 130, 246, 0.5) !important;
                  }

                  .swiper-pagination-bullet-custom:hover {
                    background: rgba(255, 255, 255, 0.8) !important;
                    transform: scale(1.15) !important;
                    opacity: 1 !important;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3) !important;
                  }

                  /* Mobile responsive */
                  @media (max-width: 640px) {
                    .swiper-pagination-bullet-custom {
                      width: 8px !important;
                      height: 8px !important;
                    }

                    .swiper-pagination-bullet-active-custom {
                      transform: scale(1.4) !important;
                    }
                  }
                `}</style>
              </div>
            </ScaleAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
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
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-poppins-semibold hover:bg-gray-100 transition-colors"
              >
                Hemen Başlayın
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-poppins-semibold hover:bg-white/10 transition-colors"
              >
                Demo Talep Et
              </Link>
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

      <Footer />
    </div>
  );
}

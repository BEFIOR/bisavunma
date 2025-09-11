import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Zap,
  Eye,
  Map,
  Radar,
  Shield,
  Settings,
  CheckCircle,
  Search,
  Bot,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo, VideoContainer } from "@/components/animations/LazyVideo";

export const metadata = {
  title: "DJI Matrice 4T | Akıllı Sensörler, Üstün Performans | Bisavunma",
  description:
    "Bisavunma Güvencesiyle Matrice 4T: Kompakt ve akıllı çok sensörlü amiral gemisi drone. Lazer mesafe ölçer, gelişmiş algılama yetenekleri ile kurumsal endüstriler için tasarlandı.",
};

export default function DJIMatrice4TPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-neutral-950 to-black pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <Link
                    href="/urunler/dji-turkiye-enterprise"
                    className="hover:text-white transition-colors"
                  >
                    DJI Enterprise
                  </Link>
                  <span>/</span>
                  <span className="text-white">DJI Matrice 4T</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-cyan-400">Matrice 4T</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  Akıllı Sensörler, Üstün Performans
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Kompakt ve akıllı çok sensörlü amiral gemisi drone, kurumsal
                  endüstriler için tasarlandı. Seri, akıllı tespit ve ölçüm
                  özelliklerine sahip lazer mesafe ölçer ile donatılmış Matrice
                  4T şimdi Bisavunma güvencesiyle sizlerle buluşuyor.
                </p>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={1.0}>
                <p className="text-gray-300">
                  Matrice 4T, elektrik, acil durum müdahale, kamu güvenliği ve
                  orman koruma gibi çok çeşitli endüstriler için uygundur. Uçuş
                  operasyonları, önemli ölçüde geliştirilmiş algılama
                  yetenekleri ile artık daha güvenli ve daha güvenilir hale
                  geldi.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400">25km</div>
                    <div className="text-sm text-gray-400">İletim Menzili</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      20MB/s
                    </div>
                    <div className="text-sm text-gray-400">İndirme Hızı</div>
                  </div>
                </StaggerItem>
              </HeroStaggerContainer>

              <HeroAnimation direction="up" delay={1.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Teklif Al
                  </Link>
                </div>
              </HeroAnimation>
            </div>

            <HeroScaleAnimation
              delay={0.8}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-4t/hero.jpg"
                alt="DJI Matrice 4T"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
                priority
              />
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Kristal Netliğinde Görüş Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Kristal Netliğinde Görüş: Ayrıntıları Ortaya Çıkar
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h3 className="text-3xl font-bold text-white">
                  Gelişmiş Orta Telefoto
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Matrice 4 serisi, orta tele kamera ile donatılmıştır, bu da
                  orta menzilli denetim görevleri için yeteneklerini genişletir.
                  Elektrik hattı veya köprü denetimlerinde, 10 metreden vidaları
                  ve çatlakları tespit edebilir ve trafo merkezlerinde cihaz
                  verilerini net bir şekilde okuyabilir.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.4}>
                <VideoContainer className="max-w-4xl mx-auto">
                  <LazyVideo
                    src="/products/dji-enterprise/dji-matrice-4t/gelismis-ortatelefoto.mp4"
                    className="rounded-xl"
                  />
                </VideoContainer>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <Target className="w-8 h-8 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">Tespit Mesafesi</div>
                    <div className="text-xl font-bold text-white">10m</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <Eye className="w-8 h-8 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">Orta Telefoto</div>
                    <div className="text-xl font-bold text-white">Gelişmiş</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h3 className="text-3xl font-bold text-white">
                  Süper Çözünürlüklü Telefoto
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Matrice 4 serisinin tele kamerası, 48 MP çözünürlükle önemli
                  ölçüde geliştirilmiş netlik sunar ve 250 metreye kadar olan
                  tabelalardan inanılmaz derecede ayrıntılar yakalayabilir.
                  Ayrıca, Matrice 4T, 24/7 operasyonları güvence altına alan bir
                  IR-Cut Filtre ile donatılmıştır.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.4}>
                <VideoContainer>
                  <LazyVideo
                    src="/products/dji-enterprise/dji-matrice-4t/super-cozunurluk.mp4"
                    className="rounded-xl"
                  />
                </VideoContainer>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenli Uçuş Section */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Güvenli Uçuş, Endişesiz Operasyon
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h3 className="text-3xl font-bold text-white">
                  Fusion Konumlandırma, Güvenli Eve Dönüş
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Matrice 4 serisi, genişletilmiş L5 frekans bandını destekleyen
                  ve GNSS+Vision Fusion Konumlandırma ve Navigasyon Sistemi ile
                  entegre DJI RTK modülü ile gelir. Görsel konumlandırma
                  sayesinde, eve dönüş noktası güncellenebilir ve 15 saniye
                  içinde hızlı bir kalkış yapılabilir.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.4}>
                <p className="text-gray-300">
                  GNSS sinyalleri olmasa bile, eve dönüş sürecini
                  tamamlayabilir, böylece şehir ortamlarında yaygın olan sinyal
                  engelleri ve parazitleri etkili bir şekilde aşabilir.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.6}>
                <VideoContainer className="max-w-4xl mx-auto">
                  <LazyVideo
                    src="/products/dji-enterprise/dji-matrice-4t/guvenli-ucus.mp4"
                    className="rounded-xl"
                  />
                </VideoContainer>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <Map className="w-8 h-8 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">Kalkış Süresi</div>
                    <div className="text-xl font-bold text-white">
                      15 saniye
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <Target className="w-8 h-8 text-cyan-400 mb-2" />
                    <div className="text-sm text-gray-400">RTK Modülü</div>
                    <div className="text-xl font-bold text-white">L5 Band</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h3 className="text-3xl font-bold text-white">
                  Akıllı Rehberlik, Engel Tanımayan Uçuş
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI RC Plus 2 Enterprise uzaktan kumandası internete
                  bağlandığında, arazi yükseltilerini ve detaylı haritaları
                  yükleyebilir. Bu, engel kaçınma için otomatik rota
                  planlamasını mümkün kılar, gece uçuşu veya dağlık bölgeler
                  gibi senaryoları etkili bir şekilde yönetir.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.4}>
                <p className="text-gray-300">
                  Drone, aşağıya yönelik görüşle birlikte 5 yönlü görsel yardım
                  sistemi ile donatılmıştır, bu da gelişmiş koruma için kapsamlı
                  bir görüş sağlar.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.6}>
                <VideoContainer>
                  <LazyVideo
                    src="/products/dji-enterprise/dji-matrice-4t/akilli-rehberlik.mp4"
                    className="rounded-xl"
                  />
                </VideoContainer>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Video İletiminde Yeni Zirveler */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Video İletiminde Yeni Zirveler
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              O4 Enterprise video iletim sistemi, zorlu ortamlar için yeni bir
              endüstri standardı belirliyor. Matrice 4 Serisi&apos;ndeki 8 anten
              sistemi ve uzaktan kumandadaki yüksek kazançlı anten sayesinde,
              iletim menzili 25 kilometreye kadar ulaşabilir.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation direction="left">
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Gelişmiş İletim Sistemi
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  <StaggerItem>
                    <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Zap className="w-6 h-6 text-cyan-400" />
                        <span className="text-gray-300">İletim Menzili</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">
                        25 km
                      </span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-cyan-400" />
                        <span className="text-gray-300">İndirme Hızı</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">
                        20 MB/s
                      </span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Radar className="w-6 h-6 text-cyan-400" />
                        <span className="text-gray-300">Anten Sistemi</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">
                        8 Anten
                      </span>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sistem, 20MB/s indirme bant genişliği ile görüntü iletimini
                  iyileştirir; bu, Mavic 3 Enterprise Serisi&apos;nin bit
                  hızının iki katından fazla olup, rota yüklemeleri ve materyal
                  indirmeleri için daha hassas ve stabil görüntüler sağlar.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Mavic 3 Enterprise ile Karşılaştırma
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Matrice 4T</span>
                      <div className="flex-1 mx-4 bg-neutral-800 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full w-full"></div>
                      </div>
                      <span className="text-cyan-400 font-bold">20 MB/s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Mavic 3 Enterprise</span>
                      <div className="flex-1 mx-4 bg-neutral-800 rounded-full h-2">
                        <div className="bg-gray-500 h-2 rounded-full w-1/2"></div>
                      </div>
                      <span className="text-gray-400 font-bold">~10 MB/s</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation direction="up" delay={0.4} className="mt-12">
            <VideoContainer>
              <LazyVideo
                src="/products/dji-enterprise/dji-matrice-4t/video-iletimi.mp4"
                className="rounded-xl"
              />
            </VideoContainer>
          </ScrollAnimation>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Kullanım Alanları</h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 h-48 hover:border-orange-600/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    Elektrik Endüstrisi
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Elektrik hattı denetimi ve trafo kontrolü
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30 h-48 hover:border-red-600/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    Acil Durum Müdahale
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Arama kurtarma ve acil müdahale operasyonları
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 h-48 hover:border-blue-600/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    Kamu Güvenliği
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Güvenlik denetimi ve gözlem operasyonları
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 h-48 hover:border-green-600/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Search className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">
                    Orman Koruma
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Orman yangını tespiti ve doğa koruma
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-16 text-center">
            <ScrollAnimation direction="up">
              <p className="text-xl text-gray-300 mb-8">
                Matrice 4 serisi için aksesuarlar da önemli ölçüde güncellenmiş
                durumda.
              </p>
            </ScrollAnimation>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              staggerDelay={0.2}
            >
              <StaggerItem>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                  <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Güncellenmiş Aksesuarlar
                  </h4>
                  <p className="text-gray-400">
                    Matrice 4 serisi ile uyumlu yeni aksesuarlar
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                  <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Gelişmiş Algılama
                  </h4>
                  <p className="text-gray-400">
                    Önemli ölçüde geliştirilmiş algılama yetenekleri
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                  <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Lazer Mesafe Ölçer
                  </h4>
                  <p className="text-gray-400">
                    Akıllı tespit ve ölçüm özellikleri
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bisavunma Güvencesiyle DJI Matrice 4T
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-xl text-gray-300 mb-8">
              Kompakt ve akıllı çok sensörlü amiral gemisi drone ile kurumsal
              endüstrilerde yeni bir dönem başlıyor. Gelişmiş algılama
              yetenekleri ile güvenli ve güvenilir operasyonlar.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="flex flex-wrap gap-4 justify-center"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors text-lg"
              >
                Hemen Teklif Alın
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/urunler/dji-turkiye-enterprise"
                className="inline-flex items-center px-8 py-4 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg transition-colors text-lg"
              >
                Tüm DJI Enterprise Ürünleri
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="mt-8 p-6 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-semibold">
                  Bisavunma güvencesi
                </span>{" "}
                ile profesyonel destek, teknik servis ve eğitim hizmetlerinden
                faydalanın.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

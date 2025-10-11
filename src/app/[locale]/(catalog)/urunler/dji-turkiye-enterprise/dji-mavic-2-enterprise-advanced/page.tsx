import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Thermometer,
  Eye,
  MapPin,
  Radio,
  Shield,
  Zap,
  Settings,
  Lock,
  Gauge,
  Radar,
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
  title: "DJI Mavic 2 Enterprise Advanced | Dual Imaging Drone | Bisavunma",
  description:
    "DJI Mavic 2 Enterprise Advanced. 640×512 termal kamera, 48MP görsel kamera, 32× dijital zoom, RTK modülü ile santimetre hassasiyet. Kompakt ve güçlü çift görüntüleme sistemi.",
};

export default function DJIMavic2EnterpriseAdvancedPage() {
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
                  <span className="text-white">
                    Mavic 2 Enterprise Advanced
                  </span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-orange-400">
                    Mavic 2 Enterprise Advanced
                  </span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-orange-400 mb-4">
                  ÇİFT GÖRÜNTÜLEME, YENİDEN TASARLANDI
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Mavic 2 Enterprise Advanced ile her görevde doğru detayları
                  yakalayın – çok sayıda performans yükseltmesi içeren, son
                  derece çok yönlü ama kompakt bir araç. Yüksek çözünürlüklü
                  termal ve görsel kameralarla, M2EA 32× dijital zoom&apos;u
                  destekler ve RTK modülü ile santimetre düzeyinde konumlandırma
                  doğruluğuna sahiptir.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      640×512
                    </div>
                    <div className="text-sm text-gray-400">
                      Termal Çözünürlük
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      48MP
                    </div>
                    <div className="text-sm text-gray-400">Görsel Kamera</div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-mavic-2-enterprise-advanced/hero.png"
                alt="DJI Mavic 2 Enterprise Advanced"
                fill
                className="object-contain relative z-10 rounded-2xl"
                priority
              />
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Özellikler */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Öne Çıkan Özellikler
            </h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">
                    640 × 512 px Termal Kamera
                  </h3>
                </div>
                <p className="text-gray-400">
                  Yüksek çözünürlüklü termal görüntüleme sistemi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    48MP Görsel Kamera
                  </h3>
                </div>
                <p className="text-gray-400">
                  Yüksek çözünürlüklü görsel görüntüleme sistemi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    32× Dijital Zoom
                  </h3>
                </div>
                <p className="text-gray-400">
                  Güvenli mesafeden detaylı inceleme imkanı
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    RTK ile Santimetre Hassasiyet
                  </h3>
                </div>
                <p className="text-gray-400">
                  RTK modülü ile santimetre düzeyinde konumlandırma
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Radio className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">
                    10 km HD İletim
                  </h3>
                </div>
                <p className="text-gray-400">
                  Yüksek kaliteli uzun mesafe veri iletimi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Çok Yönlü Engel Algılama
                  </h3>
                </div>
                <p className="text-gray-400">
                  Her yönden engel algılama ve güvenli uçuş
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Gelişmiş Çift Kamera ile Görüşünüzü Genişletin */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Gelişmiş Çift Kameralarla Görüşünüzü Genişletin
            </h2>
          </ScrollAnimation>

          {/* Yüksek Çözünürlüklü Radyometrik Termal */}
          <div className="grid grid-cols-1 gap-12 items-center mb-16">
            <div className="space-y-6">
              <ScrollAnimation direction="up">
                <h3 className="text-2xl font-bold text-white">
                  Yüksek Çözünürlüklü Radyometrik Termal
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <p className="text-gray-300">
                  M2EA&apos;nın entegre yüksek çözünürlüklü termal sensörünü
                  kullanarak sahada nesneleri hızlı bir şekilde tanımlayarak
                  bilinçli kararlar verin. Nokta Ölçer ve Alan Ölçümü
                  özelliklerini destekler.
                </p>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">
                      640×512
                    </div>
                    <div className="text-sm text-gray-400">
                      Termal Çözünürlük
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">30 Hz</div>
                    <div className="text-sm text-gray-400">Kare Hızı</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">16×</div>
                    <div className="text-sm text-gray-400">Zoom</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">±2°C</div>
                    <div className="text-sm text-gray-400">
                      Sıcaklık Doğruluğu
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>

          {/* Güvenli Kalmak İçin Yakınlaştırın */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <VideoContainer className="relative h-[300px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-mavic-2-enterprise-advanced/zoom.mp4"
                  className="object-cover rounded-xl"
                />
              </VideoContainer>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h3 className="text-2xl font-bold text-white">
                  Güvenli Kalmak İçin Yakınlaştırın
                </h3>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-gray-300">
                  Güvenli bir mesafeden net görüntüler ve videolar yakalayın.
                  M2EA&apos;nın yüksek çözünürlüklü görsel kamerası ultra
                  zoom&apos;u destekler, böylece hiçbir detay kaçmaz.
                </p>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      48 MP
                    </div>
                    <div className="text-sm text-gray-400">Görsel Kamera</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      1/2&quot;
                    </div>
                    <div className="text-sm text-gray-400">CMOS Sensör</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">4×</div>
                    <div className="text-sm text-gray-400">Kayıpsız Zoom</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">32×</div>
                    <div className="text-sm text-gray-400">Dijital Zoom</div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-vision at Your Service */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Hizmetinizdeki Çift Görüş
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  Farklı proje ihtiyaçlarınız için görsel, termal veya bölünmüş
                  görünüm beslemeleri arasında geçiş yapmak için dokunun. Tek
                  dokunuşla farklı görüntüleme modları arasında anlık geçiş
                  yapabilirsiniz.
                </p>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Görsel Mod
                      </h4>
                      <p className="text-sm text-gray-400">
                        48MP yüksek çözünürlüklü görsel görüntüleme
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Termal Mod
                      </h4>
                      <p className="text-sm text-gray-400">
                        640×512 termal görüntüleme ve sıcaklık ölçümü
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Bölünmüş Görünüm
                      </h4>
                      <p className="text-sm text-gray-400">
                        Aynı anda termal ve görsel görüntüleme
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollAnimation direction="right">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
                <Image
                  src="/products/dji-enterprise/dji-mavic-2-enterprise-advanced/dual-vision.jpg"
                  alt="DJI Mavic 2 EA Dual Vision"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Kompakt ama Güçlü */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Kompakt ama Güçlü</h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.2}
          >
            {/* Hassas Konumlandırma */}
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Hassas Konumlandırma
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  M2EA&apos;yı RTK Modülü ile kullanarak santimetre düzeyinde
                  doğruluk elde edin. Karmaşık ortamlarda otomatik, detaylı
                  inceleme görevleri yapmak için 240&apos;a kadar waypoint
                  oluşturun.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-700 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-400">
                      Santimetre
                    </div>
                    <div className="text-sm text-gray-400">Hassasiyet</div>
                  </div>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-700 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-400">240</div>
                    <div className="text-sm text-gray-400">Waypoint</div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Maksimum Esneklik */}
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Maksimum Esneklik
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Hafif ve taşınabilir M2EA bir dakikadan kısa sürede kalkış
                  yapabilir. Daha hızlı yükselme ve iniş hızı sayesinde karmaşık
                  çalışma ortamlarında hızla hareket edin.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-700 rounded-lg p-3">
                    <div className="text-lg font-bold text-yellow-400">
                      &lt;1 dk
                    </div>
                    <div className="text-sm text-gray-400">Kalkış Süresi</div>
                  </div>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-700 rounded-lg p-3">
                    <div className="text-lg font-bold text-yellow-400">
                      Hızlı
                    </div>
                    <div className="text-sm text-gray-400">Yükselme/İniş</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Ek Özellikler */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Ek Özellikler</h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Settings className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">MSDK</h3>
                <p className="text-sm text-gray-400">
                  Mobile SDK ile özel uygulama geliştirme desteği
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Radar className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  AirSense
                </h3>
                <p className="text-sm text-gray-400">
                  Yakındaki uçakları algılama ve uyarı sistemi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Şifre Koruması
                </h3>
                <p className="text-sm text-gray-400">
                  Şifre koruması ile güvenli erişim kontrolü
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Gizli Mod
                </h3>
                <p className="text-sm text-gray-400">
                  Gizli operasyonlar için sessiz çalışma modu
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Gauge className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Kendi Kendine Isınan Bataryalar
                </h3>
                <p className="text-sm text-gray-400">
                  Kendi kendine ısınan bataryalar ile soğuk hava performansı
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Thermometer className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Çalışma Sıcaklığı
                </h3>
                <p className="text-sm text-gray-400">-10° C to 40° C</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Teknik Veri Tablosu */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer select-none rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white/90 hover:bg-neutral-900">
              <span className="text-2xl font-semibold">
                Teknik Veri Tablosu
              </span>
              <span className="ml-3 text-gray-400 transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="mt-6">
              {/* Genel Özellikler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Genel Özellikler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      -10° C to 40° C
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">10 km HD</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Waypoint Kapasitesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">240 waypoint</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kalkış Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1 dakikadan az
                    </div>
                  </div>
                </div>
              </div>

              {/* Termal Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Termal Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çözünürlük
                    </div>
                    <div className="px-4 py-3 text-gray-300">640 × 512 px</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kare Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">30 Hz</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Zoom
                    </div>
                    <div className="px-4 py-3 text-gray-300">16×</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sıcaklık Doğruluğu
                    </div>
                    <div className="px-4 py-3 text-gray-300">±2°C</div>
                  </div>
                </div>
              </div>

              {/* Görsel Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Görsel Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çözünürlük
                    </div>
                    <div className="px-4 py-3 text-gray-300">48 MP</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2&quot; CMOS
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kayıpsız Zoom
                    </div>
                    <div className="px-4 py-3 text-gray-300">4×</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Dijital Zoom
                    </div>
                    <div className="px-4 py-3 text-gray-300">32×</div>
                  </div>
                </div>
              </div>

              {/* Ek Özellikler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ek Özellikler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Engel Algılama
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Çok yönlü engel algılama
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      İletim Kalitesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">10 km HD</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Güvenlik Özellikleri
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      AirSense, Password Protection
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Özel Modlar
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Discreet Mode, Self-heating Batteries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bisavunma Güvencesiyle Mavic 2 Enterprise Advanced
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              Termal ve görsel çift kamera sistemi, RTK hassasiyeti ve kompakt
              tasarım ile inceleme, güvenlik ve endüstriyel operasyonlarınızı
              optimize edin. Uzman ekibimiz size en uygun çözümü sunmak için
              hazır.
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
                <span className="text-orange-400 font-semibold">
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

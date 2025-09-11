import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Zap,
  Shield,
  Radio,
  Camera,
  Sun,
  MapPin,
  Monitor,
  CheckCircle,
  Settings,
  Radar,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo, VideoContainer } from "@/components/animations/LazyVideo";

export const metadata = {
  title: "DJI Mavic 3 Multispektral | Tarımsal Analiz Dronu | Bisavunma",
  description:
    "DJI Mavic 3 Multispektral drone. RGB + 4 multispektral kamera, RTK modülü, 43 dakika uçuş süresi. Tarımsal üretim yönetimi, bitki analizi ve havadan ölçüm için ideal.",
};

export default function DJIMavic3MultispektralPage() {
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
                  <span className="text-white">DJI Mavic 3 Multispektral</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-green-400">
                    DJI Mavic 3 Multispektral
                  </span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  DAHA FAZLASINI GÖRÜP, DAHA AKILLICA ÇALIŞIR
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  En iyi havadan ölçümlerin görünmeyeni görmesi gerekmektedir.
                  Bu sebeple DJI Mavic 3 Multispektral iki adet görüş biçimine
                  sahiptir. Ürün büyümesini tam bir netlikle taramak ve analiz
                  etmek için bir RGB kamerayı multispektral bir kamerayla
                  birleştirir.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      43 dk
                    </div>
                    <div className="text-sm text-gray-400">Uçuş Süresi</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      200 ha
                    </div>
                    <div className="text-sm text-gray-400">
                      Uçuş Başına Kapsama
                    </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3-multispektral/hero.webp"
                alt="DJI Mavic 3 Multispektral"
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
                  <Settings className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Kompakt ve Taşınabilir
                  </h3>
                </div>
                <p className="text-gray-400">
                  Kolay saklama için katlanabilir tasarım ile her yere
                  taşınabilirlik
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Güvenli ve Kararlı
                  </h3>
                </div>
                <p className="text-gray-400">
                  Çok yönlü engellerden kaçınma ile güvenli operasyonlar
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Radio className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">
                    15km İletim Mesafesi
                  </h3>
                </div>
                <p className="text-gray-400">
                  O3 iletimi ile ultra uzun mesafe kapasitesi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Multispektral Kamera
                  </h3>
                </div>
                <p className="text-gray-400">
                  4 × 5MP G/R/RE/NIR spektral görüntüleme
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Hassas Konumlandırma
                  </h3>
                </div>
                <p className="text-gray-400">
                  Santimetre düzeyinde RTK konumlandırma ve mikrosaniye
                  senkronizasyon
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Verimli Havadan Ölçüm
                  </h3>
                </div>
                <p className="text-gray-400">
                  Uçuş başına 200 hektara kadar kapsama alanı
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Multispektral + RGB Görüntüleme Sistemi */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Multispektral + RGB Görüntüleme Sistemi
              </h2>
              <div className="text-xl font-semibold text-green-400">
                Son Derece Entegre Görüntüleme Sistemi
              </div>
              <p className="text-gray-300">
                Bir 20MP RGB kamera ve dört 5MP multispektral kamera (kırmızı,
                yeşil, kırmızı kenar ve yakın kızılötesi) ile yeni ve
                yükseltilmiş görüntüleme sistemi. Yüksek hassasiyetli havadan
                ölçüm, doğal kaynak araştırmaları ve ekin büyümesini izleme gibi
                uygulamaları etkinleştirir.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">20 MP</div>
                  <div className="text-sm text-gray-400">RGB Kamera</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">
                    4 × 5MP
                  </div>
                  <div className="text-sm text-gray-400">Multispektral</div>
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Multispektral Bandlar:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                  <div>• Yeşil (G): 560 ± 16 nm</div>
                  <div>• Kırmızı (R): 650 ± 16 nm</div>
                  <div>• Kırmızı Kenar (RE): 730 ± 16 nm</div>
                  <div>• Yakın Kızılötesi (NIR): 860 ± 26 nm</div>
                </div>
              </div>
            </div>

            <ScrollAnimation direction="right">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-mavic-3-multispektral/cok-yonlu.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Güneş Işığı Sensörü */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3-multispektral/gunes-isigi.webp"
                alt="DJI Mavic 3 Multispektral Güneş Sensörü"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Güneş Işığı Sensörü
              </h2>
              <p className="text-gray-300">
                Yerleşik güneş ışığı sensörü, güneş ışınımını yakalar ve bir
                görüntü dosyasına kaydederek 2D yeniden yapılandırma sırasında
                görüntü verilerinin ışıkla dengelenmesi sağlar. Bu, daha doğru
                NDVI sonuçlarının yanında zaman içinde elde edilen verilerin
                doğruluğunu ve tutarlılığını da artırır.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Sun className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Işık Dengeleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      Görüntü verilerinin otomatik ışık dengelenmesi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Doğru NDVI Sonuçları
                    </h4>
                    <p className="text-sm text-gray-400">
                      Gelişmiş doğruluk ile bitki sağlığı analizi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Zaman İçi Tutarlılık
                    </h4>
                    <p className="text-sm text-gray-400">
                      Farklı zaman dilimlerinde tutarlı veri kalitesi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTK Modülü */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">RTK Modülü</h2>
              <div className="text-xl font-semibold text-purple-400">
                Her Pikseli Yakalayan Doğru Görüntüler
              </div>
              <p className="text-gray-300">
                Santimetre düzeyinde konumlandırma için RTK modüllü Mavic 3
                Multispektral. Uçuş kontrolü, kamera ve RTK modülü, her bir
                kameranın görüntüleme merkezinin konumunu doğru bir şekilde
                yakalamak için mikrosaniyeler içinde senkronize olacaktır.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Santimetre Düzeyinde Hassasiyet
                    </h4>
                    <p className="text-sm text-gray-400">
                      1 cm + 1 ppm yatay, 1,5 cm + 1 ppm dikey doğruluk
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Mikrosaniye Senkronizasyon
                    </h4>
                    <p className="text-sm text-gray-400">
                      Uçuş kontrolü, kamera ve RTK modülü tam senkronizasyon
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Yer Kontrol Noktası Gereksiz
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yüksek hassasiyette havadan ölçüm için ek nokta gereksiz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3-multispektral/rtk-modulu.jpg"
                alt="DJI Mavic 3 Multispektral RTK"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kararlı Sinyal, Pürüzsüz Görüntü Aktarımı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3-multispektral/kararli.jpg"
                alt="DJI Mavic 3 Multispektral O3 İletim"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Kararlı Sinyal, Pürüzsüz Görüntü Aktarımı
              </h2>
              <p className="text-gray-300">
                O3 iletimi, 15 km'lik ultra uzun iletim mesafelerini desteklemek
                için iki verici sinyali ve dört alıcı sinyali entegre eder.
                Güçlü sinyal kalitesi ile kesintisiz veri aktarımı sağlar.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-blue-400">2T4R</div>
                  <div className="text-sm text-gray-400">
                    2 Verici, 4 Alıcı Anten
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-blue-400">15 MB/s</div>
                  <div className="text-sm text-gray-400">
                    Maksimum İndirme Hızı
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-blue-400">1080p</div>
                  <div className="text-sm text-gray-400">
                    Canlı Görüntü Kalitesi
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-blue-400">200ms</div>
                  <div className="text-sm text-gray-400">Düşük Gecikme</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çok Yönlü Engel Algılama */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Çok Yönlü Engel Algılama, Araziyi Takip Eden Havadan Ölçüm
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-12">
              Uçak, çok yönlü engellerden kaçınmak için her yöndeki engelleri
              doğru bir şekilde algılayan birden fazla geniş FOV görüş sensörüne
              sahiptir. Arazi takipli havadan ölçüm, dik eğimli arazilerde
              kolaylıkla gerçekleştirilebilir.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-semibold text-white">
                  Geniş FOV Görüş Sensörleri
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Her yöndeki engelleri doğru algılama kapasitesi
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Radar className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Arazi Takipli Ölçüm
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Dik eğimli arazilerde güvenli havadan ölçüm
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">
                  Çok Yönlü Kaçınma
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                360 derece engel algılama ve kaçınma sistemi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DJI Terra */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">DJI TERRA</h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              DJI Terra is a 3D modeling software based on photogrammetry
              technology. It supports the accurate and efficient reconstruction
              of various data and visible light using DJI LiDAR. DJI Terra is an
              ideal option for DJI Enterprise drones and accessories.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                3D Modelleme
              </h3>
              <p className="text-sm text-gray-400">
                Realistic 3D models can be created in three different
                resolutions (high, medium, and low) with DJI Terra. Water
                surfaces are automatically optimized using artificial
                intelligence technology.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">LiDAR</h3>
              <p className="text-sm text-gray-400">
                With just a single click, DJI Terra facilitates the
                high-accuracy processing of point cloud data captured by Zenmuse
                LiDAR.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Multispektral
              </h3>
              <p className="text-sm text-gray-400">
                Multispectral data obtained from DJI Mavic 3 Multispectral and
                P4 Multispectral can be utilized to provide insights into plant
                growth and health, generating plant index maps such as NDVI and
                NDRE.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Uygulama Alanları
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
              <div>• Soil analysis</div>
              <div>• Mapping</div>
              <div>• Energy transmission</div>
              <div>• Emergency services</div>
              <div>• Construction</div>
              <div>• Transportation</div>
              <div>• Agriculture</div>
              <div>• Natural resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kutu İçerikleri */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Kutu İçerikleri</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Ana Ürün
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI Mavic 3 Multispektral Drone</li>
                <li>• RGB + Multispektral kamera sistemi</li>
                <li>• RTK modülü (entegre)</li>
                <li>• Güneş ışığı sensörü</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Kumanda ve Aksesuar
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI RC Pro Industry Edition</li>
                <li>• Akıllı uçuş bataryası (5000 mAh)</li>
                <li>• Şarj cihazı ve kablolar</li>
                <li>• Yedek pervaneler</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Yazılım ve Dokümantasyon
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI Terra yazılım lisansı</li>
                <li>• Kullanım kılavuzu</li>
                <li>• Güvenlik rehberi</li>
                <li>• Multispektral analiz rehberi</li>
              </ul>
            </div>
          </div>
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
              {/* DRONE */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  DRONE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Net Ağırlık (RTK modülü ile)
                    </div>
                    <div className="px-4 py-3 text-gray-300">951 gram</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">1.050 gr</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      223×96,3×122,2 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmamış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      347,5×283×139,6 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">43 dakika</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      -10° ila 40° C (14° ila 104° F)
                    </div>
                  </div>
                </div>
              </div>

              {/* RGB Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  RGB Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Görüntü Sensörü
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4/3 CMOS, 20 MP
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Lens FOV
                    </div>
                    <div className="px-4 py-3 text-gray-300">84°</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Odak Uzaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">24 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Deklanşör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Elektronik + Mekanik
                    </div>
                  </div>
                </div>
              </div>

              {/* Multispektral Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Multispektral Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Görüntü Sensörü
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2,8 inç CMOS, 5 MP
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      FOV
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      73,91° (61,2° x 48,10°)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kazanç Aralığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">1x-32x</div>
                  </div>
                </div>
              </div>

              {/* Video İletimi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Video İletimi (DJI O3)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>FCC: 15 km</div>
                      <div>CE/SRRC/MIC: 8 km</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Bandı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>2,400-2,4835 GHz</div>
                      <div>5,725-5,850 GHz</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İndirme Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      15 MB/s (DJI RC Pro Industry Edition ile)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Antenler
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4 anten, 2 verici ve 4 alıcı
                    </div>
                  </div>
                </div>
              </div>

              {/* Pil */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Pil</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">5000 mAh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Standart Voltaj
                    </div>
                    <div className="px-4 py-3 text-gray-300">15,4 volt</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Enerji
                    </div>
                    <div className="px-4 py-3 text-gray-300">77 watt-saat</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">335,5 gr</div>
                  </div>
                </div>
              </div>

              {/* RTK Modülü */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  RTK Modülü
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      50,2×40,2×66,2 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">24±2 gr</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Güç
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 1,2 watt
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      RTK Doğruluk
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Yatay: 1 cm + 1 ppm</div>
                      <div>Dikey: 1,5 cm + 1 ppm</div>
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
              Bisavunma Güvencesiyle DJI Mavic 3 Multispektral
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              RGB ve multispektral görüntüleme, RTK hassasiyeti ve gelişmiş veri
              analizi ile tarımsal üretim yönetiminizi optimize edin. Uzman
              ekibimiz size en uygun çözümü sunmak için hazır.
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
                <span className="text-green-400 font-semibold">
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

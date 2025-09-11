import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Shield,
  Zap,
  Target,
  Camera,
  Wifi,
  Battery,
  Settings,
  Anchor,
  Compass,
  Search,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";

export const metadata = {
  title:
    "ARC Ultra Uzun Menzilli Çoklu Sensörlü PTZ Kamera Sistemi | Bisavunma",
  description:
    "ARC ultra uzun menzilli çoklu sensörlü EO-IR PTZ kamera sistemi. En uzun menzilli görünür kamera, gelişmiş soğutmalı/soğutmasız termal kameralar, ZLID aydınlatma, LRF lazer mesafe ölçer ve jiroskop stabilizasyon.",
};

export default function ArcPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HeroStaggerContainer className="space-y-8">
              <HeroAnimation direction="up" delay={0.2}>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <span>Elektro-Optik & Termal Sistemler</span>
                  <span>/</span>
                  <span className="text-white">ARC</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Ultra Uzun Menzilli
                  <br />
                  <span className="text-sky-400">Çoklu Sensörlü PTZ</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ARC tamamen özelleştirilebilir çoklu sensörlü EO-IR PTZ kamera
                  sistemi. En uzun menzilli görünür gündüz/gece zoom kamerası ve
                  en gelişmiş soğutmalı veya soğutmasız termal kızılötesi
                  kameraları ile donatılmış. Opsiyonel ZLID™ uzun menzilli NIR
                  aydınlatma, LRF yüksek hassasiyetli mesafe ölçer, jiroskop
                  stabilizasyon ve daha fazlası ile yapılandırılabilir.
                </p>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Teklif Al
                  </Link>
                  <Link
                    href="#ozellikler"
                    className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Özellikleri İncele
                  </Link>
                </div>
              </HeroAnimation>
            </HeroStaggerContainer>

            <HeroAnimation direction="right" delay={1.0}>
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <Image
                    src="/products/elektro-optik/arc.png"
                    alt="ARC Ultra Uzun Menzilli PTZ Kamera Sistemi"
                    width={600}
                    height={400}
                    className="object-contain max-w-full max-h-full rounded-2xl brightness-150"
                  />
                </div>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="ozellikler"
        className="py-20 px-4 border-t border-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Öne Çıkan Özellikler
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ARC ile ultra uzun menzilli çoklu sensörlü PTZ teknolojisi
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    En Uzun Menzilli Zoom
                  </h3>
                </div>
                <p className="text-gray-400">
                  En uzun menzilli görünür gündüz/gece zoom kamerası
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Gelişmiş Termal Kameralar
                  </h3>
                </div>
                <p className="text-gray-400">
                  En gelişmiş soğutmalı veya soğutmasız termal kızılötesi
                  kameralar
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    5km ZLID Aydınlatma
                  </h3>
                </div>
                <p className="text-gray-400">
                  Opsiyonel ZLID™ uzun menzilli NIR aydınlatma
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    30km LRF Mesafe Ölçer
                  </h3>
                </div>
                <p className="text-gray-400">
                  LRF yüksek hassasiyetli lazer mesafe ölçer
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Compass className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Jiroskop Stabilizasyon
                  </h3>
                </div>
                <p className="text-gray-400">
                  Jiroskop stabilizasyon ile kararlı görüntü
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Askeri Sınıf Dayanıklılık
                  </h3>
                </div>
                <p className="text-gray-400">
                  MIL-STD-810F/G test edilmiş askeri sınıf dayanıklılık
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Kamera Seçenekleri */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kamera Seçenekleri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ARC için mevcut kamera konfigürasyonları
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Görünür/NIR Kamera Seçenekleri */}
            <ScrollAnimation direction="up">
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Görünür/NIR Kamera Seçenekleri
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">2050TO</h4>
                    <p className="text-sm text-gray-400">
                      2050mm Ultra Long-Range Visible/NIR HD Camera
                    </p>
                    <p className="text-xs text-gray-500">
                      4K/8MP sensor, 1025 PPM @ 1km, extreme long-range
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">8M-61X</h4>
                    <p className="text-sm text-gray-400">
                      20–1225mm 61X Long-Range Visible/NIR 8MP Camera
                    </p>
                    <p className="text-xs text-gray-500">
                      8MP 1/1.8" sensor, 4K resolution, 21.7° to 0.36° FOV
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">8M-95X</h4>
                    <p className="text-sm text-gray-400">
                      10.6–1015mm 95X Long-Range Visible/NIR 8MP Camera
                    </p>
                    <p className="text-xs text-gray-500">
                      8MP sensor, UltraHD 4K resolution
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">8M-53X</h4>
                    <p className="text-sm text-gray-400">
                      15–800mm 53X Long-Range Visible/NIR 8MP Camera
                    </p>
                    <p className="text-xs text-gray-500">
                      8MP sensor, high resolution
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">2M-79X</h4>
                    <p className="text-sm text-gray-400">
                      15.5–1235mm 79X Long-Range Visible/NIR 2MP Camera
                    </p>
                    <p className="text-xs text-gray-500">
                      2MP sensor, HD resolution
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Termal Kamera Seçenekleri */}
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Termal Kamera Seçenekleri
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">1215CTZ-HD</h4>
                    <p className="text-sm text-gray-400">
                      100–1215mm HD Cooled Thermal
                    </p>
                    <p className="text-xs text-gray-500">
                      MWIR cooled thermal, 12X zoom, 55+km detection
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">1400CTZ</h4>
                    <p className="text-sm text-gray-400">
                      85mm–1400mm MWIR Cooled Thermal
                    </p>
                    <p className="text-xs text-gray-500">
                      MWIR cooled thermal, extreme long range
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">915CTZ-HD</h4>
                    <p className="text-sm text-gray-400">
                      73–915mm MWIR HD Cooled Thermal
                    </p>
                    <p className="text-xs text-gray-500">
                      MWIR HD cooled thermal
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">1100CTZ</h4>
                    <p className="text-sm text-gray-400">
                      46–1100mm MWIR Cooled Thermal
                    </p>
                    <p className="text-xs text-gray-500">MWIR cooled thermal</p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">365LWIR-HD</h4>
                    <p className="text-sm text-gray-400">
                      40–365mm LWIR HD Uncooled Thermal
                    </p>
                    <p className="text-xs text-gray-500">
                      LWIR HD uncooled thermal
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* IR Aydınlatma Seçenekleri */}
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">
                    IR Aydınlatma Seçenekleri
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">5000M-ZLID</h4>
                    <p className="text-sm text-gray-400">
                      5km ZLID™ Night Vision Illuminator
                    </p>
                    <p className="text-xs text-gray-500">
                      5000m illumination, 808nm wavelength
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">4000M-ZLID</h4>
                    <p className="text-sm text-gray-400">
                      4km ZLID™ Night Vision Illuminator
                    </p>
                    <p className="text-xs text-gray-500">
                      4000m illumination, 808nm wavelength
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">3000M-ZLID</h4>
                    <p className="text-sm text-gray-400">
                      3km ZLID™ Night Vision Illuminator
                    </p>
                    <p className="text-xs text-gray-500">
                      3000m illumination, 808nm wavelength
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">2000M-ZLID</h4>
                    <p className="text-sm text-gray-400">
                      2km ZLID™ Night Vision Illuminator
                    </p>
                    <p className="text-xs text-gray-500">
                      2000m illumination, 808nm wavelength
                    </p>
                  </div>
                  <div className="border-l-2 border-sky-400 pl-3">
                    <h4 className="text-white font-medium">1500M-ZLID</h4>
                    <p className="text-sm text-gray-400">
                      1.5km ZLID™ Night Vision Illuminator
                    </p>
                    <p className="text-xs text-gray-500">
                      1500m illumination, 808nm wavelength
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-neutral-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-blue-600/10" />
                <Image
                  src="/products/elektro-optik/arc-1.png"
                  alt="ARC Teknik Özellikler"
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10 brightness-150"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Teknik Özellikler
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">
                      Ultra Uzun Menzil Kamera
                    </span>
                    <span className="text-white font-medium">2050mm 8MP</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Çözünürlük</span>
                    <span className="text-white font-medium">
                      4K/8MP UltraHD
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Koruma Sınıfı</span>
                    <span className="text-white font-medium">IP66/67</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Kasa Malzemesi</span>
                    <span className="text-white font-medium">
                      Güçlendirilmiş Alüminyum
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Termal Algılama</span>
                    <span className="text-white font-medium">
                      55+km (1215CTZ-HD)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">IR Aydınlatma</span>
                    <span className="text-white font-medium">5km ZLID™</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">LRF Mesafe Ölçer</span>
                    <span className="text-white font-medium">
                      30km Hassasiyet
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Stabilizasyon</span>
                    <span className="text-white font-medium">
                      Jiroskop Stabilizasyon
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Sıcaklık Aralığı</span>
                    <span className="text-white font-medium">
                      -50°C ile +65°C
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Bağlantı</span>
                    <span className="text-white font-medium">
                      Askeri Sınıf Konnektör
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kullanım Alanları
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ARC ultra uzun menzilli çoklu sensörlü PTZ sistemi ile 24/7
              durumsal farkındalık
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Shield className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Çevre Güvenliği
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Ultra uzun menzilli gözetleme ile kapsamlı çevre güvenliği
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    24/7 İzleme
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Uzun Menzil
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Anchor className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Vatan Savunması
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Askeri sınıf dayanıklılık ile vatan savunması operasyonları
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Askeri Sınıf
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    MIL-STD-810F/G
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Target className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Kıyı Koruması
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Kıyı şeridi ve deniz sınırlarının korunması
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Deniz Operasyonları
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    LRF Mesafe Ölçer
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Search className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Tehdit Tespit & Tanıma
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Çoklu sensör ile doğru tehdit tespiti ve tanıma
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Çoklu Sensör
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Termal Algılama
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Compass className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Zorlu İklim Koşulları
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Aşırı sıcaklık ve zorlu koşullarda güvenilir performans
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    -50°C ile +65°C
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Anti-Korozif
                  </span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Settings className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Özelleştirilebilir Tasarım
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Proje gereksinimlerine göre optimize edilmiş çözüm
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Modüler
                  </span>
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-300 text-xs rounded">
                    Esnek Konfigürasyon
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              ARC Ultra Uzun Menzilli PTZ Sistemi
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ultra uzun menzilli çoklu sensörlü PTZ kamera sistemi ile 24/7
              durumsal farkındalık. Teknik özellikler, fiyatlandırma ve kurulum
              hizmetleri için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/urunler/elektro-optik-ve-termal-sistemler"
                className="inline-flex items-center px-8 py-4 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
              >
                Diğer Elektro-Optik Ürünleri
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

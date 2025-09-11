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
  title: "SENTRY Sağlam Çoklu Sensörlü PTZ Kamera Sistemi | Bisavunma",
  description:
    "SENTRY modüler çoklu sensörlü PTZ kamera sistemi. 95X zoom, 4K/8MP çözünürlük, 700mm termal kamera, 4km ZLID aydınlatma ve aktif caydırıcı önlemler.",
};

export default function SentryPage() {
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
                  <span className="text-white">SENTRY</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Sağlam Çoklu Sensörlü
                  <br />
                  <span className="text-sky-400">PTZ Kamera Sistemi</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  SENTRY modüler çoklu sensörlü PTZ kamera sistemi. 95X zoom,
                  4K/8MP çözünürlük, 700mm termal kamera, 4km ZLID aydınlatma ve
                  aktif caydırıcı önlemler ile tehditleri tespit eder, tanır ve
                  etkisiz hale getirir.
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
                    src="/products/elektro-optik/sentry.png"
                    alt="SENTRY Elektro-Optik Sistem"
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

      {/* Key Features */}
      <section
        id="ozellikler"
        className="py-20 px-4 bg-neutral-950 border-t border-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              SENTRY ile Çoklu Sensörlü Üstün Performans
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              SENTRY ile çoklu sensörlü tasarımda üstün kalite
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    95X Optik Zoom
                  </h3>
                </div>
                <p className="text-gray-400">
                  10.6–1015mm lens ile 21.7° - 0.36° görüş açısı
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    55+km Termal Algılama
                  </h3>
                </div>
                <p className="text-gray-400">
                  700mm soğutmalı termal kamera ile 55+km algılama menzili
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    4km ZLID Aydınlatma
                  </h3>
                </div>
                <p className="text-gray-400">
                  4km ZLID aydınlatma ile gece görüş performansı
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Aktif Caydırıcı Önlemler
                  </h3>
                </div>
                <p className="text-gray-400">
                  LRAD, spot ışık ve lazer dazzler entegrasyonu
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Camera Options Section */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kamera Seçenekleri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Görünür ışık, termal ve IR aydınlatma seçenekleri
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Visible/NIR Camera Options */}
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Görünür/NIR Kamera Seçenekleri
                </h3>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">61X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      20–1225mm lens, 21.7° - 0.36° görüş açısı
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">95X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      10.6–1015mm lens, 95X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">53X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      15–800mm lens, 53X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        79X Long-Range
                      </h4>
                      <span className="text-sky-400 text-sm">2MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      15.5–1235mm lens, 79X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        53X High Resolution
                      </h4>
                      <span className="text-sky-400 text-sm">4MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      15–800mm lens, 53X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        59X Long-Range
                      </h4>
                      <span className="text-sky-400 text-sm">2MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      14.8–875mm lens, 59X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">49X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      5.6–272mm lens, 49X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">36X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      6–218mm lens, 36X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        49X High Resolution
                      </h4>
                      <span className="text-sky-400 text-sm">4MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      5.6–272mm lens, 49X zoom
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Thermal Camera Options */}
            <div className="space-y-6">
              <ScrollAnimation direction="up">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Termal Kamera Seçenekleri
                </h3>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        705mm Cooled Thermal
                      </h4>
                      <span className="text-sky-400 text-sm">705CTZ-HD</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      55+km algılama menzili, 12.1° - 1.04° görüş açısı
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        460mm MWIR HD
                      </h4>
                      <span className="text-sky-400 text-sm">460MWIR-HD</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      30–460mm lens, MWIR HD
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        230mm MWIR HD
                      </h4>
                      <span className="text-sky-400 text-sm">230MWIR-HD</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      18–230mm lens, MWIR HD
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">700mm MWIR</h4>
                      <span className="text-sky-400 text-sm">700MWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">36–700mm lens, MWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">430mm MWIR</h4>
                      <span className="text-sky-400 text-sm">430MWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">30–430mm lens, MWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">235mm MWIR</h4>
                      <span className="text-sky-400 text-sm">235MWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">15–235mm lens, MWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">310mm LWIR</h4>
                      <span className="text-sky-400 text-sm">310LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">31–310mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">230mm LWIR</h4>
                      <span className="text-sky-400 text-sm">230LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">26–230mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">185mm LWIR</h4>
                      <span className="text-sky-400 text-sm">185LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">34–185mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">155mm LWIR</h4>
                      <span className="text-sky-400 text-sm">155LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">32–155mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">130mm LWIR</h4>
                      <span className="text-sky-400 text-sm">130LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">25–130mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">120mm LWIR</h4>
                      <span className="text-sky-400 text-sm">120LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">120mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">105mm LWIR</h4>
                      <span className="text-sky-400 text-sm">105LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">20–105mm lens, LWIR</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">75mm LWIR</h4>
                      <span className="text-sky-400 text-sm">75LWIR</span>
                    </div>
                    <p className="text-gray-400 text-sm">26–75mm lens, LWIR</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* IR Illumination Options */}
            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h3 className="text-2xl font-bold text-white mb-6">
                  IR Aydınlatma Seçenekleri
                </h3>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">4km ZLID</h4>
                      <span className="text-sky-400 text-sm">4000M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      4000m aydınlatma menzili, 808nm dalga boyu
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">3km ZLID</h4>
                      <span className="text-sky-400 text-sm">3000M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      3000m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">2km ZLID</h4>
                      <span className="text-sky-400 text-sm">2000M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      2000m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">1.5km ZLID</h4>
                      <span className="text-sky-400 text-sm">1500M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      1500m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">1km ZLID</h4>
                      <span className="text-sky-400 text-sm">1000M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      1000m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">750m ZLID</h4>
                      <span className="text-sky-400 text-sm">750M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      750m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">500m IR LED</h4>
                      <span className="text-sky-400 text-sm">500M-IR</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      500m IR LED aydınlatma
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Teknik Özellikler
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Optik Zoom</span>
                    <span className="text-white font-medium">
                      95X (10.6-1015mm)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Çözünürlük</span>
                    <span className="text-white font-medium">
                      2MP - 8MP (4K)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Koruma Sınıfı</span>
                    <span className="text-white font-medium">IP66</span>
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
                      55+km (705mm)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">IR Aydınlatma</span>
                    <span className="text-white font-medium">4km ZLID</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Aktif Caydırıcı</span>
                    <span className="text-white font-medium">
                      LRAD, Spot, Laser
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Bağlantı</span>
                    <span className="text-white font-medium">Askeri Sınıf</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Kullanım Alanları
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Çevre Güvenliği
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Çevre güvenliği operasyonları için güvenilir çözüm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Mobil/Deniz Gemileri
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Mobil ve deniz gemilerinde güvenilir gözetleme
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Vatan Savunması
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Vatan savunması operasyonlarında kritik rol
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Kıyı Koruması
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Kıyı koruma operasyonlarında güvenilir gözetleme
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Tehdit Tespit & Etkisizleştirme
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Tehditleri tespit eder, tanır ve etkisiz hale getirir
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="right" className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-neutral-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
                <Image
                  src="/products/elektro-optik/sentry-1.png"
                  alt="SENTRY Kullanım Alanları"
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10 brightness-150"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              SENTRY ile Çoklu Sensörlü Güvenlik
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              SENTRY'nin çoklu sensörlü tasarımı ile tehditleri tespit edin,
              tanıyın ve etkisiz hale getirin. Detaylı bilgi için bizimle
              iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/urunler/elektro-optik-ve-termal-sistemler"
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Diğer Ürünleri İncele
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

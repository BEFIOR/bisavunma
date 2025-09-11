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
  title: "ATLAS Sağlam Her Hava Koşulunda PTZ Kamera Sistemi | Bisavunma",
  description:
    "ATLAS sağlam, her hava koşulunda taşınabilir PTZ kamera sistemi. 30X optik zoom, 6km termal algılama, IP67 koruması ve deniz ortamına hazır tasarım.",
};

export default function AtlasPage() {
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
                    href="/urunler/elektro-optik-ve-termal-sistemler"
                    className="hover:text-white transition-colors"
                  >
                    Elektro-Optik & Termal Sistemler
                  </Link>
                  <span>/</span>
                  <span className="text-white">ATLAS</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Sağlam & Her Hava Koşulunda
                  <br />
                  <span className="text-sky-400">Deniz Ortamına Hazır</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ATLAS, sağlam alüminyum hava veya deniz ortamına hazır kasa
                  ile taşınabilir her hava koşulunda PTZ kamera sistemi. 30X
                  optik zoom, 6km termal algılama, IP67 koruması ve güçlü PTZ
                  kabiliyetleri.
                </p>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Teklif Al
                  </Link>
                  <Link
                    href="#ozellikler"
                    className="inline-flex items-center px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Özellikleri Görüntüle
                  </Link>
                </div>
              </HeroAnimation>
            </div>

            <HeroAnimation direction="right" delay={1.0}>
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <Image
                    src="/products/elektro-optik/atlas.png"
                    alt="ATLAS Elektro-Optik Sistem"
                    width={600}
                    height={400}
                    className="object-contain max-w-full max-h-full rounded-2xl"
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
              ATLAS ile dengeli performansta üstün kalite
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    30X Optik Zoom
                  </h3>
                </div>
                <p className="text-gray-400">
                  2MP'den 8MP (4K)'ya kadar çözünürlük seçenekleri
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    6km Termal Algılama
                  </h3>
                </div>
                <p className="text-gray-400">
                  LWIR termal görüntüleme ile 6km algılama menzili
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    IP67 Koruması
                  </h3>
                </div>
                <p className="text-gray-400">
                  Deniz ortamına hazır sağlam alüminyum kasa tasarımı
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Anchor className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Deniz & Araç Entegrasyonu
                  </h3>
                </div>
                <p className="text-gray-400">
                  Polis, donanma ve askeri operasyonlar için ideal
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
                      <h4 className="text-white font-semibold">30X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      6–180mm lens, 30X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        30X Long-Range
                      </h4>
                      <span className="text-sky-400 text-sm">4MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      4.7–141mm lens, 30X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">20X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      6.6–132mm lens, 8MP çözünürlük
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        24X High Resolution
                      </h4>
                      <span className="text-sky-400 text-sm">4MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      5–120mm lens, yüksek çözünürlük
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">30X 2MP</h4>
                      <span className="text-sky-400 text-sm">2MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      4.8–144mm lens, 30X zoom
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">
                        3X Wide Angle
                      </h4>
                      <span className="text-sky-400 text-sm">12MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      3.9–14.5mm lens, 74.6° - 24° görüş açısı
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
                      <h4 className="text-white font-semibold">55mm Thermal</h4>
                      <span className="text-sky-400 text-sm">55TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      6km algılama menzili, 8.0° görüş açısı
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">35mm Thermal</h4>
                      <span className="text-sky-400 text-sm">35TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Orta-uzun menzil termal görüntüleme
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">25mm Thermal</h4>
                      <span className="text-sky-400 text-sm">25TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Orta menzil termal görüntüleme
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">19mm Thermal</h4>
                      <span className="text-sky-400 text-sm">19TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Uzun menzil termal görüntüleme
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">13mm Thermal</h4>
                      <span className="text-sky-400 text-sm">13TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Orta menzil termal görüntüleme
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">9mm Thermal</h4>
                      <span className="text-sky-400 text-sm">9TI</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Geniş açılı termal görüntüleme
                    </p>
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
                      <h4 className="text-white font-semibold">750m ZLID</h4>
                      <span className="text-sky-400 text-sm">750M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      750m aydınlatma menzili, 808nm dalga boyu
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">500m ZLID</h4>
                      <span className="text-sky-400 text-sm">500M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      500m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">300m ZLID</h4>
                      <span className="text-sky-400 text-sm">300M-ZLID</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      300m aydınlatma menzili
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">150m IR LED</h4>
                      <span className="text-sky-400 text-sm">150M-IR</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      150m IR LED aydınlatma
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-neutral-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-blue-600/10" />
                <Image
                  src="/products/elektro-optik/atlas-1.png"
                  alt="ATLAS Teknik Özellikler"
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10"
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
                    <span className="text-gray-300">Optik Zoom</span>
                    <span className="text-white font-medium">
                      30X (6-180mm)
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
                    <span className="text-white font-medium">IP67</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Kasa Malzemesi</span>
                    <span className="text-white font-medium">
                      Sağlam Alüminyum
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Termal Algılama</span>
                    <span className="text-white font-medium">6km (55mm)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">IR Aydınlatma</span>
                    <span className="text-white font-medium">750m ZLID</span>
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
                        Deniz Operasyonları
                      </h3>
                      <p className="text-gray-400 text-sm">
                        IP67 koruması ile deniz ortamında güvenilir operasyon
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Polis Operasyonları
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Polis kuvvetleri için ideal taşınabilir çözüm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Donanma Operasyonları
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Donanma gemilerinde güvenilir gözetleme sistemi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Askeri Operasyonlar
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Askeri kuvvetler için sağlam ve dayanıklı çözüm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Araç Entegrasyonu
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Araçlara entegre edilerek mobil gözetleme
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
                  src="/products/elektro-optik/atlas-2.png"
                  alt="ATLAS Kullanım Alanları"
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10"
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
              ATLAS Hakkında Daha Fazla Bilgi
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Teknik özellikler, fiyatlandırma ve kurulum hizmetleri için
              bizimle iletişime geçin.
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

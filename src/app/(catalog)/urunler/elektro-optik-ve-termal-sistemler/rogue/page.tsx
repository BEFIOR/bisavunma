import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Shield,
  Zap,
  Target,
  Camera,
  Settings,
  Anchor,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";

export const metadata = {
  title: "ROGUE Askeri Sınıf PTZ Kamera Sistemi | Bisavunma",
  description:
    "ROGUE askeri sınıf PTZ gözetleme kamera sistemi. 30X optik zoom, termal görüntüleme, 6km algılama menzili, IP66 koruması.",
};

export default function RoguePage() {
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
                  <span className="text-white">ROGUE</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Askeri Sınıf
                  <br />
                  <span className="text-sky-400">Mobil Gözetleme</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ROGUE, modüler mimari üzerine inşa edilmiş askeri sınıf PTZ
                  gözetleme kamera sistemi. 30X optik zoom, 6km termal algılama
                  menzili, IP66 koruması ve çoklu montaj seçenekleri.
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
                    src="/products/elektro-optik/rogue.png"
                    alt="ROGUE Elektro-Optik Sistem"
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
              ROGUE ile gizli operasyonlarda üstün performans
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
                  2MP&apos;den 8MP (4K)&apos;ya kadar çözünürlük seçenekleri
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
                    IP66 Koruması
                  </h3>
                </div>
                <p className="text-gray-400">
                  Deniz ortamına hazır sağlam ve su geçirmez tasarım
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Anchor className="w-6 h-6 text-sky-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Çoklu Montaj
                  </h3>
                </div>
                <p className="text-gray-400">
                  Manyetik, şok bobinli ve sabit montaj seçenekleri
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
                      <h4 className="text-white font-semibold">
                        30X Long-Range
                      </h4>
                      <span className="text-sky-400 text-sm">4MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      4.7–141mm lens, 67.9° - 2.14° görüş açısı
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
                      <h4 className="text-white font-semibold">8X Ultra HD</h4>
                      <span className="text-sky-400 text-sm">8MP</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      5–40mm lens, ultra yüksek çözünürlük
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
                      3.9–14.5mm lens, geniş açılı görüntüleme
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
          <div className="grid grid-cols-1  gap-12 items-center">
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
                      30X (4.7-141mm)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Görüş Açısı</span>
                    <span className="text-white font-medium">
                      67.9° - 2.14°
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Çözünürlük</span>
                    <span className="text-white font-medium">
                      2MP - 8MP (4K)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Ağırlık</span>
                    <span className="text-white font-medium">5kg altı</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Koruma Sınıfı</span>
                    <span className="text-white font-medium">IP66</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800">
                    <span className="text-gray-300">Termal Algılama</span>
                    <span className="text-white font-medium">6km (55mm)</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">IR Aydınlatma</span>
                    <span className="text-white font-medium">750m ZLID</span>
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
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kullanım Alanları
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ROGUE&apos;un çok yönlü tasarımı sayesinde geniş bir uygulama
              yelpazesinde kullanılabilir
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Anchor className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Araç Entegrasyonu
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  UGV, USV ve mobil araçlara kolay entegrasyon. Manyetik montaj
                  ve şok bobinli sistemler ile hızlı kurulum.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    UGV
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    USV
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Mobil
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Shield className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Askeri Operasyonlar
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Askeri sınıf dayanıklılık ve performans. IP66 koruması ile
                  zorlu çevre koşullarında güvenilir operasyon.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    IP66
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Dayanıklı
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Güvenilir
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Target className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Çevre Güvenliği
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Çevre güvenliği ve sınır gözetimi. 6km termal algılama menzili
                  ile geniş alanların etkili korunması.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    6km Menzil
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Termal
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Sınır
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Settings className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Endüstriyel Uygulamalar
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Endüstriyel tesislerin güvenliği. 30X optik zoom ile detaylı
                  gözetleme ve 24/7 operasyon kabiliyeti.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    30X Zoom
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    24/7
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Tesis
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Zap className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Hızlı Dağıtım
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  RDK ile hızlı kurulum ve dağıtım. Display, kayıt, tripod,
                  batarya ve hücresel bağlantı ile tam paket çözüm.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    RDK
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Hızlı
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Paket
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="group bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur border border-neutral-700 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Eye className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Gece Operasyonları
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Termal görüntüleme ve 750m ZLID aydınlatma ile tam gece
                  operasyon kabiliyeti. Karanlıkta bile net görüntü.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    750m ZLID
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Gece
                  </span>
                  <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">
                    Termal
                  </span>
                </div>
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
              ROGUE Hakkında Daha Fazla Bilgi
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

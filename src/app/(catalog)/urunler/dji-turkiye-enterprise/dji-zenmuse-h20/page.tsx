import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Camera, Zap, Shield } from "lucide-react";
import {
  ScrollAnimation,
  StaggerItem,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";

export const metadata = {
  title: "DJI Zenmuse H20 | Unleash the Power of One | Bisavunma",
  description:
    "DJI Zenmuse H20 triple-sensor çözümü. 20MP zoom kamera, 12MP geniş açılı kamera, 1200m lazer mesafe ölçer, IP44 koruma. Hibrit sensör payload.",
};

export default function DJIZenmuseH20Page() {
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
                  <span className="text-white">DJI Zenmuse H20</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-sky-400">DJI Zenmuse H20</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-sky-400 mb-4">
                  Unleash the Power of One
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI Zenmuse H20, DJI&apos;nin ilk hibrit sensör çözümüdür.
                  Triple-sensor payload ile 20MP zoom kamera, 12MP geniş açılı
                  kamera ve 1200m lazer mesafe ölçer bir arada. Görev
                  verimliliğine yeni anlam kazandırır.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-sky-400">20MP</div>
                    <div className="text-sm text-gray-400">Zoom Kamera</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-sky-400">12MP</div>
                    <div className="text-sm text-gray-400">Geniş Açılı</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-sky-400">23×</div>
                    <div className="text-sm text-gray-400">Hibrit Zoom</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-sky-400">1200m</div>
                    <div className="text-sm text-gray-400">Lazer Mesafe</div>
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

            <HeroScaleAnimation delay={1.0}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
                <div className="relative bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8">
                  <Image
                    src="/products/dji-enterprise/h20.png"
                    alt="DJI Zenmuse H20"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Teknik Özellikler
            </h2>
            <p className="text-gray-400 text-lg">
              Triple-sensor hibrit payload özellikleri
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Zoom Kamera
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    20MP 1/1.7&quot; CMOS sensör
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    23× hibrit optik zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    200× maksimum zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    4K/30fps video
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Geniş Açılı Kamera
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    12MP 1/2.3&quot; CMOS sensör
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24mm eşdeğer odak uzaklığı
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    82.9° DFOV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Geniş görüş alanı
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Lazer Mesafe Ölçer
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    3m - 1200m mesafe
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    ±(0.2m + D×0.15%) doğruluk
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Hassas mesafe verisi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Gerçek zamanlı ölçüm
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Akıllı Özellikler
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AI Spot-Check
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    PinPoint
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart Track
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    High-Res Grid Photo
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Görüntü Sabitleme
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Aktif görüntü sabitleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    EIS (Elektronik)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Gece sahne modu
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Seamless UI
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Dayanıklılık
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    IP44 koruma
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    -20°C ile 50°C
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Titreşim direnci
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Hibrit sensör tasarım
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Uygulama Senaryoları
            </h2>
            <p className="text-gray-400 text-lg">
              Triple-sensor hibrit payload ile çeşitli endüstrilerde kullanım
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚒</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Yangın Mücadele
                </h3>
                <p className="text-gray-400 text-sm">
                  Yangın tespiti ve mücadele operasyonları
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Arama Kurtarma
                </h3>
                <p className="text-gray-400 text-sm">
                  Kayıp kişi arama ve kurtarma operasyonları
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Kamu Güvenliği
                </h3>
                <p className="text-gray-400 text-sm">
                  Güvenlik operasyonları ve durum değerlendirmesi
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Elektrik Hatları
                </h3>
                <p className="text-gray-400 text-sm">
                  Elektrik hatları inceleme ve bakım
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛢️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Petrol ve Doğalgaz
                </h3>
                <p className="text-gray-400 text-sm">
                  Boru hatları ve tesis incelemeleri
                </p>
              </div>
            </ScrollAnimation>
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
                <li>• DJI Zenmuse H20 kamera sistemi</li>
                <li>• Görsel kamera</li>
                <li>• 3-axis gimbal</li>
                <li>• Bağlantı kabloları</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Aksesuarlar
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Güç kablosu</li>
                <li>• Veri kablosu</li>
                <li>• Montaj parçaları</li>
                <li>• Koruyucu kılıf</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Dokümantasyon
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Kullanım kılavuzu</li>
                <li>• Teknik spesifikasyonlar</li>
                <li>• Güvenlik rehberi</li>
                <li>• Garanti belgesi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              DJI Zenmuse H20 ile Unleash the Power of One
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Triple-sensor hibrit payload teknolojisi ile profesyonel çözümler
              için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/urunler/dji-turkiye-enterprise"
                className="inline-flex items-center px-8 py-4 border border-neutral-600 hover:border-neutral-500 text-white font-medium rounded-lg transition-colors"
              >
                Diğer DJI Ürünleri
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

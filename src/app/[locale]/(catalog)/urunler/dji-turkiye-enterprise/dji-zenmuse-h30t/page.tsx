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
  title:
    "DJI Zenmuse H30T | Flagship All-Weather Multi-Sensor Payload | Bisavunma",
  description:
    "DJI Zenmuse H30T flagship all-weather multi-sensor payload. 1280×1024 termal çözünürlük, 40MP zoom kamera, 34× optik zoom, 400× dijital zoom, 3000m lazer mesafe ölçer. Gün ve gece operasyonları için ideal.",
};

export default function DJIZenmuseH30TPage() {
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
                  <span className="text-white">DJI Zenmuse H30T</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-orange-400">DJI Zenmuse H30T</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-orange-400 mb-4">
                  Flagship All-Weather Multi-Sensor Payload
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI Zenmuse H30T, beş ana modülü tek bir gimbalda birleştirir:
                  geniş açılı kamera, zoom kamera, kızılötesi termal kamera,
                  lazer mesafe ölçer ve NIR yardımcı ışık. Gün ve gece görüş
                  sınırlarını aşarak operasyonel standartları yeniden tanımlar.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      1280×1024
                    </div>
                    <div className="text-sm text-gray-400">
                      Termal Çözünürlük
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      34×
                    </div>
                    <div className="text-sm text-gray-400">Optik Zoom</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      400×
                    </div>
                    <div className="text-sm text-gray-400">Dijital Zoom</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      3000m
                    </div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-sky-500/20 rounded-2xl blur-3xl" />
                <div className="relative bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8">
                  <Image
                    src="/products/dji-enterprise/h30t.jpg"
                    alt="DJI Zenmuse H30T"
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
              Flagship all-weather multi-sensor payload için geliştirilmiş
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Termal Kamera
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    1280×1024 çözünürlük
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    32× dijital zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    -20°C ile 1600°C arası
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    UHR modu
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Zoom Kamera
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    40MP çözünürlük
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    34× optik zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    400× dijital zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Görüntü stabilizasyonu
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
                    3m - 3000m mesafe
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    GPS koordinatları
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Yükseklik bilgisi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Doğrusal mesafe
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Gece Görüş
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Tam renkli gece görüş
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Siyah-beyaz gece görüş
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    NIR aydınlatma
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    850nm dalga boyu
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Akıllı Özellikler
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart Capture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Electronic Dehazing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Link Zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Pre-recording
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
                  <h3 className="text-xl font-semibold text-white">Güvenlik</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    AES-256 şifreleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    One-click log clearance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Cloud sync
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    IP54 koruma
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
              DJI Enterprise uçuş platformları ile çeşitli endüstrilerde
              kullanım
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Kamu Güvenliği
                </h3>
                <p className="text-gray-400 text-sm">
                  Arama kurtarma, gözetleme ve güvenlik operasyonları
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Elektrik
                </h3>
                <p className="text-gray-400 text-sm">
                  Elektrik hatları inceleme ve termal analiz
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛢️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Petrol ve Doğalgaz
                </h3>
                <p className="text-gray-400 text-sm">
                  Boru hatları ve tesis güvenliği incelemeleri
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Su Koruma
                </h3>
                <p className="text-gray-400 text-sm">
                  Su kaynakları ve baraj güvenliği incelemeleri
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌲</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Ormancılık
                </h3>
                <p className="text-gray-400 text-sm">
                  Orman yangınları ve ağaç sağlığı izleme
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
                <li>• DJI Zenmuse H30T kamera sistemi</li>
                <li>• Termal ve görsel kamera</li>
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
              DJI Zenmuse H30T ile Operasyonlarınızı Güçlendirin
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Termal ve görsel görüntüleme teknolojisi ile profesyonel çözümler
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

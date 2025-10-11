import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";

export const metadata = {
  title: "DJI Matrice 30T | Termal Kameralı Profesyonel Drone | Bisavunma",
  description:
    "DJI Matrice 30T profesyonel drone. Üçlü kamera sistemi, termal görüntüleme, 41 dakika uçuş süresi, IP55 koruma, OcuSync 3 Enterprise teknolojisi.",
};

export default function DJIMatrice30TPage() {
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
                  <span className="text-white">DJI Matrice 30T</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-orange-400">DJI Matrice 30T</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-orange-400 mb-4">
                  Termal Görüntüleme Uzmanı
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI Matrice 30T, üçlü kamera sistemi ile güçlü uçuş
                  performansı sunar. Güç ile taşınabilirlik arasındaki dengeyi
                  koruyarak operasyonel verimliliği artırır. Termal görüntüleme,
                  geniş kamera ve yakınlaştırma kamerası ile profesyonel
                  çözümler sağlar.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      41 dk
                    </div>
                    <div className="text-sm text-gray-400">
                      Maksimum Uçuş Süresi
                    </div>
                    https://www.istinye.edu.tr/tr/duyurular/mevcut-ogrencilerimiz-icin-2025-2026-kayit-yenileme
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">
                      7000 m
                    </div>
                    <div className="text-sm text-gray-400">Maksimum İrtifa</div>
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
                src="/products/dji-enterprise/dji-matrice-30t/dji-matrice-30t.jpg"
                alt="DJI Matrice 30T"
                fill
                className="w-full h-full object-contain relative z-10 rounded-2xl"
                priority
              />
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Güçlü Uçuş Performansı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Güçlü Uçuş Performansı
            </h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Uzun Uçuş Süresi
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>41 dakikaya kadar uçuş süresi</li>
                  <li>Maksimum 1 saat uçuş kapasitesi</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Yüksek Hız Performansı
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>12 m/s normal hareket hızı</li>
                  <li>Maksimum 23 m/s hıza erişim</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Yüksek İrtifa Kapasitesi
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>7000 metre irtifada uçabilir</li>
                  <li>Rüzgar direncine karşı dayanıklılık</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Çevresel Uyumluluk ve Güvenlik */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Uyumlu, Güvenli, Güvenilir
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  DJI Matrice 30T, çevresel uyumluluk açısından IP55 korumasıyla
                  donatılmıştır. Bu özellik, olumsuz hava koşullarına ve -20°C
                  ila 50°C arasındaki sıcaklıklara kolaylıkla dayanabileceği
                  anlamına gelir.
                </p>
              </ScrollAnimation>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      IP55 Koruma Standardı
                    </h4>
                    <p className="text-sm text-gray-400">
                      Olumsuz hava koşullarına ve geniş sıcaklık aralığına
                      dayanıklılık
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Çift Görüş ve ToF Sensörleri
                    </h4>
                    <p className="text-sm text-gray-400">
                      Uçağın altında bulunan sensörler, uçak ve görev
                      güvenliğini sağlar
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Entegre ADS-B Alıcısı
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yakınlardaki diğer mürettebatlı uçaklara karşı zamanında
                      uyarı sağlar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-30t/uyumlu-guvenilir.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gelişmiş İletim */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
              <Image
                src="/products/dji-enterprise/dji-matrice-30t/gelismis-iletim.jpg"
                alt="DJI Matrice 30T İletim"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Gelişmiş İletim</h2>
              <p className="text-gray-300">
                DJI Matrice 30T, dört yerleşik anten ile üç kanallı 1080p video
                aktarımını destekler. Karmaşık ortamlarda bile giriş beslemeleri
                arasında kesintisiz geçiş yapılmasına imkan tanır. Bu özellikler
                OcuSync 3 Enterprise teknolojisini destekler.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">4</div>
                  <div className="text-sm text-gray-400">Yerleşik Anten</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">
                    3 Kanal
                  </div>
                  <div className="text-sm text-gray-400">
                    1080p Video Aktarım
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kamera Sistemleri */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Üçlü Kamera Sistemi
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="text-center mb-12"
          >
            <p className="text-gray-300 max-w-4xl mx-auto">
              DJI Matrice 30T geniş, yakınlaştırma ve termal kameraları bir
              araya getirir ve ihtiyacınız olan hava verilerini istediğiniz anda
              yakalayabilen bir lazer telemetreyle entegre edilmiştir.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Geniş Kamera */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Geniş Kamera
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Eşdeğer Odak Uzaklığı: 24 mm</li>
                <li>DFOV: 84°</li>
                <li>12 MP 1/2&quot; CMOS Sensör</li>
                <li>Video Çözünürlüğü: 4K/30fps</li>
              </ul>
            </div>

            {/* Termal Görüntüleme Kamerası */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Termal Görüntüleme
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Eşdeğer Odak Uzaklığı: 40 mm</li>
                <li>Çözünürlük: 640×512</li>
                <li>Kare Hızı: 30 fps</li>
                <li>Ölçüm Doğruluğu: ±2°C veya ±%2</li>
              </ul>
            </div>

            {/* Yakınlaştırma Kamerası */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Yakınlaştırma Kamerası
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>48 MP 1/2&quot; CMOS Sensör</li>
                <li>5x-16x Optik Yakınlaştırma</li>
                <li>200x Maks. Hibrit Zoom</li>
                <li>Fotoğraf: 8K, Video: 4K/30fps</li>
              </ul>
            </div>

            {/* Lazer Menzil Bulucu */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Lazer Menzil Bulucu
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Menzil: 3 m – 1200 m</li>
                <li>Doğruluk: ±(0,2m+D×0,15%)</li>
                <li>Hassas mesafe ölçümü</li>
                <li>Entegre çalışma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DJI Terra */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">DJI TERRA</h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              DJI Terra, fotogrametri teknolojisine dayalı bir 3D model
              oluşturma yazılımıdır. DJI LiDAR kullanarak görünür ışığın ve
              verinin çeşitli doğru ve verimli 2D ve 3D yeniden yapılandırmasını
              destekler.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                3D Modelleme
              </h3>
              <p className="text-sm text-gray-400">
                Gerçekçi 3D modeller, üç farklı çözünürlükte (yüksek, orta ve
                düşük) oluşturulabilir. Su yüzeyleri, yapay zeka teknolojisi
                kullanılarak otomatik olarak optimize edilir.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">LiDAR</h3>
              <p className="text-sm text-gray-400">
                Tek bir tıklama ile DJI Terra, Zenmuse LiDAR tarafından
                yakalanan nokta bulutu verilerinin yüksek doğrulukta işlenmesini
                sağlar.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Multispektral
              </h3>
              <p className="text-sm text-gray-400">
                DJI Mavic 3 Multispectral ve P4 Multispectral&apos;den elde
                edilen çok spektral veriler, bitki büyümesi ve sağlığı hakkında
                bilgi sağlar.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Uygulama Alanları
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
              <div>• Toprak analizi</div>
              <div>• Haritalama</div>
              <div>• Enerji iletimi</div>
              <div>• Acil hizmetler</div>
              <div>• İnşaat</div>
              <div>• Ulaşım</div>
              <div>• Tarım</div>
              <div>• Kaza yerleri</div>
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
                      Uçuş Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>41 dakikaya kadar uçuş süresi</div>
                      <div>Maksimum 1 saat uçuş kapasitesi</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Hız Performansı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>12 m/s hareket hızı</div>
                      <div>Maksimum 23 m/s hıza erişim</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      İrtifa Kapasitesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">7000 metre</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çevresel Koruma
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>IP55 koruma standardı</div>
                      <div>Çalışma sıcaklığı: -20°C ila 50°C</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kamera Sistemleri */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Kamera Sistemleri
                </h3>

                {/* Geniş Kamera */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Geniş Kamera
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Odak Uzaklığı
                      </div>
                      <div className="px-4 py-3 text-gray-300">24 mm</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        DFOV
                      </div>
                      <div className="px-4 py-3 text-gray-300">84°</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Sensör
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        12 MP 1/2&quot; CMOS
                      </div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Video
                      </div>
                      <div className="px-4 py-3 text-gray-300">4K/30fps</div>
                    </div>
                  </div>
                </div>

                {/* Termal Kamera */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Termal Görüntüleme Kamerası
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Odak Uzaklığı
                      </div>
                      <div className="px-4 py-3 text-gray-300">40 mm</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Çözünürlük
                      </div>
                      <div className="px-4 py-3 text-gray-300">640×512</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Kare Hızı
                      </div>
                      <div className="px-4 py-3 text-gray-300">30 fps</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Doğruluk
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        ±2°C veya ±%2
                      </div>
                    </div>
                  </div>
                </div>

                {/* Yakınlaştırma Kamerası */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Yakınlaştırma Kamerası
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Sensör
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        48 MP 1/2&quot; CMOS
                      </div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Optik Zoom
                      </div>
                      <div className="px-4 py-3 text-gray-300">5x-16x</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Hibrit Zoom
                      </div>
                      <div className="px-4 py-3 text-gray-300">200x Maks.</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Çözünürlük
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        Fotoğraf: 8K, Video: 4K/30fps
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lazer Menzil Bulucu */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Lazer Menzil Bulucu
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Menzil
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        3 m – 1200 m
                      </div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                      <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                        Doğruluk
                      </div>
                      <div className="px-4 py-3 text-gray-300">
                        ±(0,2m+D×0,15%)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* İletim Sistemi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  İletim Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Anten Sayısı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4 yerleşik anten
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Video Aktarım
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      3 kanallı 1080p
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Teknoloji
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      OcuSync 3 Enterprise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
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
                <li>• DJI Matrice 30T Drone</li>
                <li>• Üçlü kamera sistemi (entegre)</li>
                <li>• Lazer menzil bulucu</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Kumanda ve Aksesuar
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI RC Plus uzaktan kumanda</li>
                <li>• Batarya ve şarj cihazı</li>
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
              Bisavunma Güvencesiyle DJI Matrice 30T
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              Termal görüntüleme ve gelişmiş kamera teknolojileri ile
              operasyonlarınızı bir üst seviyeye taşıyın. Uzman ekibimiz size en
              uygun çözümü sunmak için hazır.
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

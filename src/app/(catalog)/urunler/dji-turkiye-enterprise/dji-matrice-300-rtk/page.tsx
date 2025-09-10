import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Matrice 300 RTK | Endüstriyel Drone | Bisavunma",
  description:
    "DJI Matrice 300 RTK profesyonel endüstriyel drone. 55 dakika uçuş, IP45 koruma ve çoklu yük taşıma kapasitesi.",
};

export default function DJIMatrice300RTKPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-neutral-950 to-black pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                <Link
                  href="/urunler/dji-turkiye-enterprise"
                  className="hover:text-white transition-colors"
                >
                  DJI Enterprise
                </Link>
                <span>/</span>
                <span className="text-white">DJI Matrice 300 RTK</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 300 RTK
              </h1>

              <p className="text-xl text-gray-300">
                Kanıtlanmış güvenilirlik ve üstün performans ile endüstriyel
                drone standardı
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                >
                  Teklif Al
                </Link>
                <button className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg transition-colors">
                  Teknik Broşür İndir
                </button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300-rtk.webp"
                alt="DJI Matrice 300 RTK"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Öne Çıkan Özellikler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                55 Dakika Uçuş
              </h3>
              <p className="text-gray-400">
                Çift batarya sistemi ile uzun operasyon süresi
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                15km İletim
              </h3>
              <p className="text-gray-400">
                OcuSync Enterprise ile güvenli bağlantı
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                6 Yönlü Algılama
              </h3>
              <p className="text-gray-400">
                360° engel algılama ve kaçınma sistemi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Teknik Özellikler
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Uçuş Performansı
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Maksimum Uçuş Süresi</span>
                  <span className="text-white font-medium">55 dakika</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Maksimum Hız</span>
                  <span className="text-white font-medium">23 m/s</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Maksimum Yük</span>
                  <span className="text-white font-medium">2.7 kg</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Koruma Sınıfı</span>
                  <span className="text-white font-medium">IP45</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Gelişmiş Özellikler
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">RTK Hassasiyet</span>
                  <span className="text-white font-medium">1cm+1ppm</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çalışma Sıcaklığı</span>
                  <span className="text-white font-medium">-20°C ~ 50°C</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Gimbal Sayısı</span>
                  <span className="text-white font-medium">3 adet (maks)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">AI Özellikleri</span>
                  <span className="text-white font-medium">
                    Akıllı Takip, PinPoint
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            DJI Matrice 300 RTK ile Endüstriyel Standartları Belirleyin
          </h2>
          <p className="text-gray-300 mb-8">
            Kanıtlanmış performans ve güvenilirlik için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors text-lg"
            >
              Hemen Teklif Alın
            </Link>
            <Link
              href="/urunler/dji-turkiye-enterprise"
              className="inline-flex items-center px-8 py-4 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg transition-colors text-lg"
            >
              Tüm DJI Ürünleri
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

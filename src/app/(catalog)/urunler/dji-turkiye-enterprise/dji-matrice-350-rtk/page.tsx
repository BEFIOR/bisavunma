import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Matrice 350 RTK | Endüstriyel Drone Platform | Bisavunma",
  description:
    "DJI Matrice 350 RTK yeni nesil endüstriyel drone platformu. 55 dakika uçuş, IP55 koruma ve çoklu yük taşıma kapasitesi.",
};

export default function DJIMatrice350RTKPage() {
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
                <span className="text-white">DJI Matrice 350 RTK</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 350 RTK
              </h1>

              <p className="text-xl text-gray-300">
                Yeni nesil endüstriyel drone platformu. Maksimum güvenilirlik ve
                performans.
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
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-350-rtk.webp"
                alt="DJI Matrice 350 RTK"
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
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                55 Dakika Uçuş
              </h3>
              <p className="text-gray-400">
                Sınıfının en uzun uçuş süresi ile kesintisiz operasyon
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                2.7kg Yük Kapasitesi
              </h3>
              <p className="text-gray-400">
                Çoklu sensör ve ekipman taşıma imkanı
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                IP55 Koruma
              </h3>
              <p className="text-gray-400">
                Her türlü hava koşulunda güvenilir performans
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
                  <span className="text-gray-400">Rüzgar Dayanımı</span>
                  <span className="text-white font-medium">12 m/s</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">İletim Mesafesi</span>
                  <span className="text-white font-medium">20 km</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Sistem Özellikleri
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Yük Kapasitesi</span>
                  <span className="text-white font-medium">2.7 kg</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Koruma Sınıfı</span>
                  <span className="text-white font-medium">IP55</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çalışma Sıcaklığı</span>
                  <span className="text-white font-medium">-20°C ~ 50°C</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">RTK Hassasiyet</span>
                  <span className="text-white font-medium">
                    1cm+1ppm (yatay)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Payloads */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Uyumlu Yükler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  Zenmuse H30 Serisi
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Termal ve zoom kameralar
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">Zenmuse L2</h3>
                <p className="text-sm text-gray-300 mt-1">
                  LiDAR haritalama sistemi
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">Zenmuse P1</h3>
                <p className="text-sm text-gray-300 mt-1">
                  45MP fotogrametri kamera
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  Özel Yükler
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  3. parti sensör entegrasyonu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            DJI Matrice 350 RTK ile Endüstriyel Operasyonlarınızı Zirveye
            Taşıyın
          </h2>
          <p className="text-gray-300 mb-8">
            En gelişmiş endüstriyel drone platformu için uzman ekibimizden
            detaylı bilgi alın.
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

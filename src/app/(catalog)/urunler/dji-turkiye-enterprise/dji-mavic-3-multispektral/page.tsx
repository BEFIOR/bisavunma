import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Mavic 3 Multispektral | Tarımsal Analiz Dronu | Bisavunma",
  description:
    "DJI Mavic 3 Multispektral hassas tarım dronu. 4 multispektral kamera, RGB kamera ve NDVI analizi ile bitki sağlığı takibi.",
};

export default function DJIMavic3MultispektralPage() {
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
                <span className="text-white">DJI Mavic 3 Multispektral</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Mavic 3 Multispektral
              </h1>

              <p className="text-xl text-gray-300">
                Hassas tarım için gelişmiş multispektral görüntüleme teknolojisi
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-lime-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3-multispektral.webp"
                alt="DJI Mavic 3 Multispektral"
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
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                5 Kamera Sistemi
              </h3>
              <p className="text-gray-400">
                4 multispektral + 1 RGB kamera ile detaylı analiz
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                NDVI Analizi
              </h3>
              <p className="text-gray-400">
                Gerçek zamanlı bitki sağlığı indeksi hesaplama
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                RTK Modülü
              </h3>
              <p className="text-gray-400">
                Santimetre hassasiyetinde haritalama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spectral Bands */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Spektral Bantlar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Multispektral Kameralar
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Yeşil (G)</span>
                  <span className="text-white font-medium">560nm ± 16nm</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Kırmızı (R)</span>
                  <span className="text-white font-medium">650nm ± 16nm</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Kırmızı Kenar (RE)</span>
                  <span className="text-white font-medium">730nm ± 16nm</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Yakın Kızılötesi (NIR)</span>
                  <span className="text-white font-medium">860nm ± 26nm</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                RGB Kamera
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sensör</span>
                  <span className="text-white font-medium">4/3 CMOS</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çözünürlük</span>
                  <span className="text-white font-medium">20MP</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Uçuş Süresi</span>
                  <span className="text-white font-medium">43 dakika</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Güneş Sensörü</span>
                  <span className="text-white font-medium">Entegre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Kullanım Alanları
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  Bitki Sağlığı
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Hastalık ve stres tespiti
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  Verim Tahmini
                </h3>
                <p className="text-sm text-gray-300 mt-1">Rekolte analizi</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  Sulama Yönetimi
                </h3>
                <p className="text-sm text-gray-300 mt-1">Su stresi analizi</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">Gübreleme</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Besin eksikliği tespiti
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
            Hassas Tarım için Gelişmiş Multispektral Çözümler
          </h2>
          <p className="text-gray-300 mb-8">
            DJI Mavic 3 Multispektral ile tarımsal verimliliğinizi maksimize
            edin.
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

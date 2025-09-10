import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Mavic 3E | Endüstriyel Haritalama Dronu | Bisavunma",
  description:
    "DJI Mavic 3E profesyonel haritalama dronu. 4/3 CMOS sensör, mekanik obtüratör ve RTK modülü ile hassas fotogrametri.",
};

export default function DJIMavic3EPage() {
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
                <span className="text-white">DJI Mavic 3E</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Mavic 3E
              </h1>

              <p className="text-xl text-gray-300">
                Kompakt gövdede profesyonel haritalama ve inceleme çözümleri
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3e.webp"
                alt="DJI Mavic 3E"
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
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                4/3 CMOS Sensör
              </h3>
              <p className="text-gray-400">
                20MP çözünürlük, mekanik obtüratör ile keskin görüntüler
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                56× Zoom
              </h3>
              <p className="text-gray-400">
                Tele kamera ile detaylı inceleme imkanı
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                RTK Modülü
              </h3>
              <p className="text-gray-400">
                Santimetre hassasiyetinde konum doğruluğu
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
                Geniş Açı Kamera
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sensör</span>
                  <span className="text-white font-medium">4/3 CMOS, 20MP</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">FOV</span>
                  <span className="text-white font-medium">84°</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Obtüratör</span>
                  <span className="text-white font-medium">
                    Mekanik, 0.7s aralık
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Video</span>
                  <span className="text-white font-medium">4K/30fps</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Tele Kamera
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sensör</span>
                  <span className="text-white font-medium">
                    1/2&quot; CMOS, 12MP
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Zoom</span>
                  <span className="text-white font-medium">56× Hibrid</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Uçuş Süresi</span>
                  <span className="text-white font-medium">45 dakika</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">İletim</span>
                  <span className="text-white font-medium">
                    15km (O3 Enterprise)
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
            DJI Mavic 3E ile Profesyonel Haritalama ve İnceleme
          </h2>
          <p className="text-gray-300 mb-8">
            Kompakt ve güçlü haritalama çözümleri için bizimle iletişime geçin.
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

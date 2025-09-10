import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Mavic 2 Enterprise Advanced | Termal Drone | Bisavunma",
  description:
    "DJI Mavic 2 Enterprise Advanced kompakt termal drone. Çift kamera sistemi, RTK modülü ve profesyonel görüntüleme çözümleri.",
};

export default function DJIMavic2EAPage() {
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
                <span className="text-white">
                  DJI Mavic 2 Enterprise Advanced
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Mavic 2 Enterprise Advanced
              </h1>

              <p className="text-xl text-gray-300">
                Kompakt tasarımda çift kamera sistemi ile profesyonel termal
                görüntüleme
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-mavic-2-e-advanced.webp"
                alt="DJI Mavic 2 Enterprise Advanced"
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
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Çift Kamera
              </h3>
              <p className="text-gray-400">
                640×512 termal ve 48MP görünür ışık kamera
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                RTK Modülü
              </h3>
              <p className="text-gray-400">
                Santimetre hassasiyetinde konumlama
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Modüler Aksesuar
              </h3>
              <p className="text-gray-400">
                Hoparlör, spot ışık ve beacon eklentileri
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
                Termal Kamera
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çözünürlük</span>
                  <span className="text-white font-medium">640×512</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Görüş Alanı</span>
                  <span className="text-white font-medium">33°</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Dijital Zoom</span>
                  <span className="text-white font-medium">16×</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sıcaklık Ölçüm</span>
                  <span className="text-white font-medium">-40°C ~ 550°C</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Görünür Işık Kamera
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sensör</span>
                  <span className="text-white font-medium">1/2&quot; CMOS</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çözünürlük</span>
                  <span className="text-white font-medium">48MP</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Zoom</span>
                  <span className="text-white font-medium">32× Dijital</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Video</span>
                  <span className="text-white font-medium">4K/30fps</span>
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
            Profesyonel Termal Görüntüleme Çözümleri
          </h2>
          <p className="text-gray-300 mb-8">
            DJI Mavic 2 Enterprise Advanced ile kritik görevlerinizi başarıyla
            tamamlayın.
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

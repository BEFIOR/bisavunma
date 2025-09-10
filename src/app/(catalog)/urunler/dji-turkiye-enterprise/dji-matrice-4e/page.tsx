import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Matrice 4E | Endüstriyel Drone | Bisavunma",
  description:
    "DJI Matrice 4E yeni nesil endüstriyel drone. Gelişmiş görüntüleme, uzun uçuş süresi ve akıllı özellikler.",
};

export default function DJIMatrice4EPage() {
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
                <span className="text-white">DJI Matrice 4E</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 4E
              </h1>

              <p className="text-xl text-gray-300">
                Yeni nesil endüstriyel drone teknolojisi ile üstün performans
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-4e.webp"
                alt="DJI Matrice 4E"
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
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Gelişmiş Kamera
              </h3>
              <p className="text-gray-400">
                Yüksek çözünürlüklü görüntüleme ve zoom özellikleri
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Uzun Uçuş Süresi
              </h3>
              <p className="text-gray-400">
                Gelişmiş batarya teknolojisi ile kesintisiz operasyon
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Akıllı Özellikler
              </h3>
              <p className="text-gray-400">
                AI destekli otomatik görev planlama ve takip
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
                  <span className="text-white font-medium">45+ dakika</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Rüzgar Dayanımı</span>
                  <span className="text-white font-medium">Seviye 6</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çalışma İrtifası</span>
                  <span className="text-white font-medium">6000m</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Koruma Sınıfı</span>
                  <span className="text-white font-medium">IP54</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Kamera Sistemi
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Sensör</span>
                  <span className="text-white font-medium">1&quot; CMOS</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Çözünürlük</span>
                  <span className="text-white font-medium">50MP</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Video</span>
                  <span className="text-white font-medium">4K/60fps</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-800">
                  <span className="text-gray-400">Zoom</span>
                  <span className="text-white font-medium">10× Optik</span>
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
            DJI Matrice 4E ile Endüstriyel Operasyonlarınızı Güçlendirin
          </h2>
          <p className="text-gray-300 mb-8">
            Yeni nesil endüstriyel drone teknolojisi için bizimle iletişime
            geçin.
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

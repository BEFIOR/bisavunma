import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Radio,
  Monitor,
  Settings,
  Shield,
  Camera,
  Video,
  Bot,
  Eye,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "DJI Matrice 300 RTK | Endüstriyel Drone Platformu | Bisavunma",
  description:
    "DJI Matrice 300 RTK endüstriyel drone. 55 dakika uçuş süresi, 2.7kg yük kapasitesi, OcuSync Enterprise, çoklu gimbal desteği. Modern havacılık sistemlerinden ilham alan tasarım.",
};

export default function DJIMatrice300RTKPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-neutral-950 to-black pt-20">
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

              <div className="text-2xl font-bold text-sky-400 mb-4">
                ÜSTÜN PERFORMANS
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                DJI Matrice 300 RTK endüstriyel drone, modern havacılık
                sistemlerinden ilham alınarak tasarlanmıştır. Yeni bir
                endüstriyel drone platformudur. 55 dakikaya kadar uçuş süresi
                vardır. Gelişmiş AI yetenekleri, konumlandırma, 6 yönlü algılama
                ve daha fazlasını sizlere sunar.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">55 dk</div>
                  <div className="text-sm text-gray-400">
                    Maksimum Uçuş Süresi
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">2.7 kg</div>
                  <div className="text-sm text-gray-400">Maksimum Yük</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                >
                  Teklif Al
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-purple-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300rtk/hero.jpg"
                alt="DJI Matrice 300 RTK"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geliştirilmiş İletim Sistemi */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Geliştirilmiş İletim Sistemi
              </h2>
              <p className="text-gray-300">
                Yeni OcuSync Enterprise, 15 km uzaklığa kadar iletim sağlar. Üç
                kanallı 1080p videoyu destekler. 2,4 GHz ve 5,8 GHz arasında
                gerçek zamanlı otomatik geçiş, yüksek parazitli ortamların
                yakınında güvenilir uçuş sağlarken, AES-256 şifreleme güvenli
                veri iletimi sunar.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Radio className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      OcuSync Enterprise
                    </h4>
                    <p className="text-sm text-gray-400">
                      15 km uzaklığa kadar güvenilir iletim
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      3 Kanallı 1080p Video
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yüksek kaliteli çoklu video akışı
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      AES-256 Şifreleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      Güvenli veri iletimi ve koruma
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                <div className="text-lg font-bold text-sky-400">15 km</div>
                <div className="text-sm text-gray-400">
                  Maksimum İletim Mesafesi
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-cyan-600/10" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300rtk/gelistirilmis.jpg"
                alt="DJI Matrice 300 RTK İletim"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gelişmiş Uçuş Performansı */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300rtk/coklu-yuk.jpg"
                alt="DJI Matrice 300 RTK Performans"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Gelişmiş Uçuş Performansı
              </h2>
              <p className="text-gray-300">
                İyileştirilmiş ve geliştirilmiş gövde sistemi tasarımı, zorlu
                koşullarda dahi size daha verimli ve istikrarlı bir uçuş
                sağlayacaktır. Modern havacılık sistemlerinden ilham alan
                tasarım ile üstün performans sunar.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">23 m/s</div>
                  <div className="text-sm text-gray-400">Maksimum Hız</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">15 m/s</div>
                  <div className="text-sm text-gray-400">Rüzgar Direnci</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">7000 m</div>
                  <div className="text-sm text-gray-400">Maksimum İrtifa</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">IP45</div>
                  <div className="text-sm text-gray-400">Koruma Derecesi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çoklu Yük Yapılandırmaları */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Çoklu Yük Yapılandırmaları
          </h2>
          <p className="text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            M300 RTK endüstriyel drone'u, görev gereksinimlerinize uyacak
            şekilde yapılandırabilirsiniz. Max. 2,7 kg taşıma kapasitesi ile
            aynı anda 3 adede kadar faydalı yük monte edebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Camera className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tekli Aşağı Gimbal
              </h3>
              <p className="text-sm text-gray-400">
                Tek kamera ile standart operasyonlar
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Camera className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Çift Aşağı Gimbal
              </h3>
              <p className="text-sm text-gray-400">
                İki kamera ile gelişmiş görüntüleme
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Camera className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tek Yukarı Gimbal
              </h3>
              <p className="text-sm text-gray-400">
                Üst görüş açısı için özel kamera
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Settings className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Yukarı ve Aşağı Gimbal
              </h3>
              <p className="text-sm text-gray-400">
                Çift yönlü görüntüleme sistemi
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Eye className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Üçlü Gimbal
              </h3>
              <p className="text-sm text-gray-400">
                Maksimum görüntüleme kapasitesi
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-6 inline-block">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                2.7 kg
              </div>
              <div className="text-sm text-gray-400">
                Maksimum Tek Gimbal Yükü: 930g
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı Canlı Görev Kaydı */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Akıllı Canlı Görev Kaydı
              </h2>
              <p className="text-gray-300">
                Gelecekteki otomatik denetimleriniz için örnek görev dosyaları
                oluşturmak üzere gimbal oryantasyonu, drone hareketi, fotoğraf
                çekimi ve yakınlaştırma düzeyi gibi görev eylemlerini
                kaydedecektir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Görev Kaydı
                    </h4>
                    <p className="text-sm text-gray-400">
                      Gimbal oryantasyonu ve drone hareketi kaydı
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Fotoğraf Çekimi
                    </h4>
                    <p className="text-sm text-gray-400">
                      Otomatik fotoğraf çekimi ve yakınlaştırma kaydı
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Otomatik Denetim
                    </h4>
                    <p className="text-sm text-gray-400">
                      Gelecekteki otomatik denetimler için örnek dosyalar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300rtk/akilli.jpg"
                alt="DJI Matrice 300 RTK Görev Kaydı"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uçuş Süresi */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Uçuş Süresi</h2>
              <p className="text-gray-300">
                Faydalı yük yapılandırmasına göre M300 RTK'nızın uçuş süresini
                tahmin edebilirsiniz. Farklı gimbal konfigürasyonları ile
                optimize edilmiş performans elde edin. Bu grafik size hangi yük
                ile ne kadar uçuş süresi elde edebileceğinizi gösterir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Yük Bazlı Hesaplama
                    </h4>
                    <p className="text-sm text-gray-400">
                      Gimbal ağırlığına göre otomatik uçuş süresi tahmini
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Optimize Edilmiş Performans
                    </h4>
                    <p className="text-sm text-gray-400">
                      Farklı konfigürasyonlar ile maksimum verimlilik
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10" />
              <Image
                src="/products/dji-enterprise/dji-matrice-300rtk/ucus-suresi.png"
                alt="DJI Matrice 300 RTK Uçuş Süresi Grafiği"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-sky-400 mb-2">55 dk</div>
              <div className="text-white font-semibold mb-2">Yük Olmadan</div>
              <div className="text-sm text-gray-400">
                Maksimum uçuş süresi kapasitesi
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                45+ dk
              </div>
              <div className="text-white font-semibold mb-2">Tek Gimbal</div>
              <div className="text-sm text-gray-400">
                Tek gimbal ile uzun süreli operasyon
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                35+ dk
              </div>
              <div className="text-white font-semibold mb-2">Çift Gimbal</div>
              <div className="text-sm text-gray-400">
                İki gimbal ile gelişmiş görüntüleme
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">
                25+ dk
              </div>
              <div className="text-white font-semibold mb-2">Üçlü Gimbal</div>
              <div className="text-sm text-gray-400">
                Maksimum yük ile profesyonel operasyon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DJI Terra */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">DJI TERRA</h2>
          <p className="text-gray-300 mb-8">
            DJI Terra is a 3D modeling software based on photogrammetry
            technology. It supports the accurate and efficient reconstruction of
            various data and visible light using DJI LiDAR. DJI Terra is an
            ideal option for DJI Enterprise drones and accessories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                3D Modelleme
              </h3>
              <p className="text-sm text-gray-400">
                Realistic 3D models can be created in three different
                resolutions (high, medium, and low) with DJI Terra. Water
                surfaces are automatically optimized using artificial
                intelligence technology.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">LiDAR</h3>
              <p className="text-sm text-gray-400">
                With just a single click, DJI Terra facilitates the
                high-accuracy processing of point cloud data captured by Zenmuse
                LiDAR.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Multispektral
              </h3>
              <p className="text-sm text-gray-400">
                Multispectral data obtained from DJI Mavic 3 Multispectral and
                P4 Multispectral can be utilized to provide insights into plant
                growth and health.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Uygulama Alanları
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
              <div>• Soil analysis</div>
              <div>• Mapping</div>
              <div>• Energy transmission</div>
              <div>• Emergency services</div>
              <div>• Construction</div>
              <div>• Transportation</div>
              <div>• Agriculture</div>
              <div>• Accident scenes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Veri Tablosu */}
      <section className="py-20 px-4 border-t border-neutral-900">
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
              {/* DJI Matrice 300 RTK */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  DJI Matrice 300 RTK
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmamış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      810×670×430 mm (pervaneler hariç)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      430×420×430 mm (pervaneler dahil)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çapraz Dingil Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">895 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık (İki TB60 pil ile)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 6,3 kg
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">9 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tek Gimbal Maksimum Yükü
                    </div>
                    <div className="px-4 py-3 text-gray-300">930g</div>
                  </div>
                </div>
              </div>

              {/* Performans */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Performans
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">55 dakika</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Hız
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>S modu: 23 m/s</div>
                      <div>P modu: 17 m/s</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      15 m/s (kalkış/iniş: 12 m/s)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Servis Tavanı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>5000 m (2110 pervane)</div>
                      <div>7000 m (2195 pervane)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Açısal Hız
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Eğim: 300°/s, Sapma: 100°/s
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      -20°C ila 50°C (-4°F ila 122°F)
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigasyon */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Navigasyon ve Konumlandırma
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS+GLONASS+BeiDou+Galileo
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      RTK Konumlandırma Doğruluğu
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Yatay: 1 cm+1 ppm</div>
                      <div>Dikey: 1,5 cm + 1 ppm</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Gezinme Doğruluğu (GPS ile P modu)
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>
                        <strong>Dikey:</strong> ±0,1 m (Görüş Sistemi), ±0,5 m
                        (GPS), ±0,1 m (RTK)
                      </div>
                      <div>
                        <strong>Yatay:</strong> ±0,3 m (Görüş Sistemi), ±1,5 m
                        (GPS), ±0,1 m (RTK)
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>2,4000-2,4835 GHz</div>
                      <div>5,725-5,850 GHz</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">15 km</div>
                  </div>
                </div>
              </div>

              {/* Gimbal Konfigürasyonları */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Desteklenen Gimbal Yapılandırmaları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">
                      Tekli Aşağı Gimbal
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">
                      Çift Aşağı Gimbal
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">
                      Tek Yukarı Gimbal
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">
                      Yukarı ve Aşağı Gimbal
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">Üçlü Gimbal</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center">
                    <div className="text-white font-medium">
                      Giriş Koruma: IP45
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            DJI Matrice 300 RTK ile Endüstriyel Çözümler
          </h2>
          <p className="text-gray-300 mb-8">
            Modern havacılık sistemlerinden ilham alan tasarım, gelişmiş AI
            yetenekleri ve çoklu gimbal desteği ile endüstriyel
            operasyonlarınızı yeni bir seviyeye taşıyın. Uzman ekibimiz size en
            uygun çözümü sunmak için hazır.
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

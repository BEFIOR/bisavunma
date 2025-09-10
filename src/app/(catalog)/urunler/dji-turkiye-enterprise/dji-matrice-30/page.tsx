import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Matrice 30 | Profesyonel Enterprise Drone | Bisavunma",
  description:
    "DJI Matrice 30 profesyonel drone. Üçlü kamera sistemi, 41 dakika uçuş süresi, IP55 koruma, OcuSync 3 Enterprise teknolojisi. Profesyonel operasyonlar için ideal.",
};

export default function DJIMatrice30Page() {
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
                <span className="text-white">DJI Matrice 30</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 30
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                DJI Matrice 30, güçlü uçuş performansı ile güç ve taşınabilirlik
                arasındaki dengeyi koruyarak operasyonel verimliliği artırır.
                Profesyonel operasyonlar için tasarlanmış gelişmiş kamera
                sistemleri ve dayanıklı yapısı ile her türlü zorlu koşulda
                güvenilir performans sunar.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">41 dk</div>
                  <div className="text-sm text-gray-400">
                    Maksimum Uçuş Süresi
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">7000 m</div>
                  <div className="text-sm text-gray-400">Maksimum İrtifa</div>
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
                src="/products/dji-enterprise/dji-matrice-30/dji-matrice-30t.jpg"
                alt="DJI Matrice 30"
                fill
                className="object-contain relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Güçlü Uçuş Performansı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Güçlü Uçuş Performansı
          </h2>
          <p className="text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            DJI Matrice 30, güçlü uçuş performansı, güç ile taşınabilirlik
            arasındaki dengeyi koruyarak operasyonel verimliliği artırır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">
                Uzun Uçuş Süresi
              </h3>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>41 dakikaya kadar uçuş süresi</li>
                <li>Maksimum 1 saat uçuş kapasitesi</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">
                Yüksek Hız Performansı
              </h3>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>12 m/s normal hareket hızı</li>
                <li>Maksimum 23 m/s hıza erişim</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">
                Yüksek İrtifa Kapasitesi
              </h3>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>7000 metre irtifada uçabilir</li>
                <li>Rüzgar direncine karşı dayanıklılık</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Çevresel Uyumluluk ve Güvenlik */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Uyumlu, Güvenli, Güvenilir
              </h2>
              <p className="text-gray-300">
                Çevresel uyumluluk açısından, M30 IP55 korumasıyla
                donatılmıştır, bu da onun olumsuz hava koşullarına ve -20°C ila
                50°C arasındaki sıcaklıklara kolaylıkla dayanabileceği anlamına
                gelir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-sky-400">✓</span>
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
                    <span className="text-sky-400">✓</span>
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
                    <span className="text-sky-400">✓</span>
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
                alt="DJI Matrice 30 İletim"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Gelişmiş İletim</h2>
              <p className="text-gray-300">
                Dört yerleşik anten, üç kanallı 1080p video aktarımını destekler
                ve karmaşık ortamlarda bile giriş beslemeleri arasında
                kesintisiz geçiş yapılmasına imkan tanır. Bu özellikler, OcuSync
                3 Enterprise'ı destekler.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Gelişmiş Kamera Sistemleri
          </h2>
          <p className="text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            DJI Matrice 30 Serisi, geniş, yakınlaştırma kameraları bir araya
            getirir ve ihtiyacınız olan hava verilerini istediğiniz anda
            yakalayabilen bir lazer telemetreyle entegre edilmiştir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Kutu İçerikleri */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Kutu İçerikleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Ana Ürün
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI Matrice 30 Drone</li>
                <li>• Entegre kamera sistemi</li>
                <li>• Lazer menzil bulucu</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Kumanda ve Aksesuar
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• DJI RC Plus uzaktan kumanda</li>
                <li>• TB30 Akıllı Uçuş Bataryası</li>
                <li>• BS30 Akıllı Şarj İstasyonu</li>
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
              {/* DRONE */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  DRONE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (açık, pervaneler hariç)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      470×585×215 mm (U×G×Y)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      365×215×195 mm (U×G×Y)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çapraz Dingil Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">668mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık (iki pil dahil)
                    </div>
                    <div className="px-4 py-3 text-gray-300">3770 ± 10 gr</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">4069 gr</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">41 dakika</div>
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
                      Maksimum Yatay Hız
                    </div>
                    <div className="px-4 py-3 text-gray-300">23 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">12 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Servis Tavanı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>5.000 m (1.671 pervane ile)</div>
                      <div>7.000 m (1.676 pervane ile)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Açısal Hız
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Açı: 150°/sn.; Sapma: 100°/sn.
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Yükseliş/İniş Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 m/s, 5 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS+Galileo+BeiDou+GLONASS
                    </div>
                  </div>
                </div>
              </div>

              {/* Geniş Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Geniş Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2″ CMOS, 12M
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      DFOV
                    </div>
                    <div className="px-4 py-3 text-gray-300">84°</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Odak Uzaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4,5 mm (eşdeğer: 24 mm)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Video Çözünürlüğü
                    </div>
                    <div className="px-4 py-3 text-gray-300">3840×2160</div>
                  </div>
                </div>
              </div>

              {/* Yakınlaştırma Kamerası */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Yakınlaştırma Kamerası
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2″ CMOS, 48M
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Odak Uzaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      21-75 mm (eşdeğer: 113-405 mm)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Diyafram Açıklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">f/2,8-f/4,2</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Fotoğraf Boyutu
                    </div>
                    <div className="px-4 py-3 text-gray-300">8000×6000</div>
                  </div>
                </div>
              </div>

              {/* Lazer Modülü */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Lazer Modülü
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Dalgaboyu
                    </div>
                    <div className="px-4 py-3 text-gray-300">905 nm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ölçüm Doğruluğu
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      ± (0,2 m + D×0,15%)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ölçüm Aralığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">3-1.200 m</div>
                  </div>
                </div>
              </div>

              {/* TB30 Akıllı Uçuş Bataryası */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  TB30 Akıllı Uçuş Bataryası
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">5880 mAh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Gerilim
                    </div>
                    <div className="px-4 py-3 text-gray-300">26,1V</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Enerji
                    </div>
                    <div className="px-4 py-3 text-gray-300">131.6 Wh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Net Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 685 gr
                    </div>
                  </div>
                </div>
              </div>

              {/* O3 Enterprise */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  O3 Enterprise
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
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>15 km (FCC)</div>
                      <div>8 km (CE/SRRC/MIC)</div>
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
            DJI Matrice 30 ile Profesyonel Çözümler
          </h2>
          <p className="text-gray-300 mb-8">
            Güçlü uçuş performansı, gelişmiş kamera teknolojileri ve dayanıklı
            yapısı ile operasyonlarınızı bir üst seviyeye taşıyın. Uzman
            ekibimiz size en uygun çözümü sunmak için hazır.
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

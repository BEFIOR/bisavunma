import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DJI Mavic 3T | Termal Kameralı Enterprise Drone | Bisavunma",
  description:
    "DJI Mavic 3T Enterprise drone. Termal kamera, 56x yakınlaştırma, RTK modülü, 45 dakika uçuş süresi. Arama kurtarma, yangınla mücadele ve inceleme operasyonları için ideal.",
};

export default function DJIMavic3TPage() {
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
                <span className="text-white">DJI Mavic 3T</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Mavic 3T
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                DJI Mavic 3 Enterprise Serisi, ticari ve küçük drone modelleri
                için standartları baştan yazıyor. Mekanik deklanşör, 56×
                yakınlaştırma kamerası ve santimetre düzeyinde hassasiyet için
                RTK modülü ile haritalamayı ve görev verimliliğini en zirveye
                taşıyor.
              </p>

              <p className="text-gray-300">
                Arama ve kurtarma, yangınla mücadele, inceleme ve gece
                operasyonları için termal versiyonu ile güvenilirlik ve
                işlevselliğin sembolü.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">45 dk</div>
                  <div className="text-sm text-gray-400">Uçuş Süresi</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-sky-400">56×</div>
                  <div className="text-sm text-gray-400">
                    Hibrit Yakınlaştırma
                  </div>
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
                src="/products/dji-enterprise/dji-mavic-3t/dji-mavic-3t-hero.webp"
                alt="DJI Mavic 3T"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Taşınabilir ve Kompakt */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Taşınabilir ve Kompakt
              </h2>
              <p className="text-gray-300">
                DJI Mavic 3T, kompakt tasarımı ile her yere kolayca taşınabilir.
                Katlanabilir yapısı sayesinde operasyonel esneklik sağlar ve
                hızlı deployment için ideal boyutlarda tasarlanmıştır.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">920g</div>
                  <div className="text-sm text-gray-400">Ağırlık (T Model)</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">380mm</div>
                  <div className="text-sm text-gray-400">Çapraz Mesafe</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
              <Image
                src="/products/dji-enterprise/dji-mavic-3t/hero.png"
                alt="DJI Mavic 3T Taşınabilir"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* İki Model ile Sayısız Uygulama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            İki Model ile Sayısız Uygulama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                DJI Mavic 3 E
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• 20 MP 4/3 CMOS sensör</li>
                <li>• Mekanik deklanşör</li>
                <li>• RTK modülü desteği</li>
                <li>• 915 gr ağırlık</li>
                <li>• Haritalama ve surveying için ideal</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                DJI Mavic 3 T
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• 48 MP 1/2" CMOS sensör</li>
                <li>• 640×512 termal kamera</li>
                <li>• Sıcaklık ölçümü ve uyarıları</li>
                <li>• 920 gr ağırlık</li>
                <li>• Arama kurtarma ve yangın mücadelesi için ideal</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 max-w-4xl mx-auto">
              İş operasyonlarınızı optimize etmek, güvenilir veri toplamak ve
              çevresel farkındalığı artırmak istiyorsanız, DJI Mavic 3
              Enterprise Serisi sizin için ideal bir çözümdür.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Image
          src="/products/dji-enterprise/dji-mavic-3t/arasection.jpg"
          alt="DJI Mavic 3T"
          width={1000}
          height={1000}
          className="object-contain relative z-10 rounded-2xl mx-auto"
        />
      </section>

      {/* Odaklan ve Bul */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Odaklan ve Bul</h2>
              <p className="text-gray-300">
                Hem DJI Mavic 3 E hem de DJI Mavic 3 Termal, en temel
                ayrıntıları uzaktan görebilmeniz için 56× Maks. Hibrit
                Yakınlaştırmayı destekleyen 12MP Yakınlaştırmalı Kamera ile
                donatılmıştır.
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
              <video
                src="/products/dji-enterprise/dji-mavic-3t/odaklan-bul.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                56× Hibrit Yakınlaştırma
              </h3>
              <p className="text-sm text-gray-400">
                En temel ayrıntıları uzaktan görebilmeniz için güçlü
                yakınlaştırma kamerası
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                12MP Yakınlaştırma Kamerası
              </h3>
              <p className="text-sm text-gray-400">
                1/2 inç CMOS sensör ile yüksek çözünürlüklü detay yakalama
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Uzaktan Gözlem
              </h3>
              <p className="text-sm text-gray-400">
                Güvenli mesafeden detaylı inceleme ve analiz imkanı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Görünmeyeni Görebilirsiniz */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10" />
              <video
                src="/products/dji-enterprise/dji-mavic-3t/gorunmeyen.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Görünmeyeni Görebilirsiniz
              </h2>
              <p className="text-gray-300">
                DJI Mavic 3 T sahip olduğu termal kamera, 640 × 512 çözünürlüğe
                sahiptir. Hızlı kararlar almanıza ve hedeflerinizi bulmanıza
                yardımcı olmak için nokta ve alan sıcaklık ölçümü, yüksek
                sıcaklık uyarıları, izotermleri ve renk paletlerini destekler.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400">🌡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Sıcaklık Ölçümü
                    </h4>
                    <p className="text-sm text-gray-400">
                      Nokta ve alan sıcaklık ölçümü ile hassas analiz
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400">⚠️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Yüksek Sıcaklık Uyarıları
                    </h4>
                    <p className="text-sm text-gray-400">
                      Kritik sıcaklık seviyelerinde otomatik uyarı sistemi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Renk Paletleri
                    </h4>
                    <p className="text-sm text-gray-400">
                      9 farklı renk paleti ile görselleştirme seçenekleri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eş Zamanlı Bölünmüş Ekran */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Eş Zamanlı Bölünmüş Ekran Yakınlaştırma
              </h2>
              <p className="text-gray-300">
                DJI Mavic 3 T termal ve yakınlaştırma kameraları, kolay
                karşılaştırma için 28× sürekli yan yana yakınlaştırmayı
                destekler. Bu özellik sayesinde termal ve görünür ışık
                görüntülerini aynı anda analiz edebilirsiniz.
              </p>

              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                <div className="text-lg font-bold text-purple-400">28×</div>
                <div className="text-sm text-gray-400">
                  Sürekli Yan Yana Yakınlaştırma
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
              <video
                src="/products/dji-enterprise/dji-mavic-3t/es-zamanli.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Olağanüstü Operasyonel Verimlilik */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Olağanüstü Operasyonel Verimlilik
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Dayanıklılık İçin Optimize Edilmiş Piller
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  • 45 dakikalık uçuş süreleri ile tek bir uçuşta 2 kilometre
                  kareye kadar araştırma
                </li>
                <li>• 100 W şarj aleti ile hızlı şarj imkanı</li>
                <li>• 88 W hızlı şarj ile drone'u doğrudan şarj</li>
                <li>• 5000 mAh @ 7.2V Li-ion pil kapasitesi</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Performans Özellikleri
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-bold text-sky-400">45 dk</div>
                  <div className="text-sm text-gray-400">Uçuş Süresi</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-sky-400">32 km</div>
                  <div className="text-sm text-gray-400">Maks. Mesafe</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-sky-400">6000 m</div>
                  <div className="text-sm text-gray-400">Maks. İrtifa</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-sky-400">21 m/s</div>
                  <div className="text-sm text-gray-400">Maks. Hız</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenli Uçuş İçin Çok Yönlü Algılama */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Güvenli Uçuş İçin Çok Yönlü Algılama
          </h2>
          <p className="text-gray-300 mb-12">
            Sıfır kör nokta ile çok yönlü engellerden kaçınmak için her
            tarafından geniş açılı lenslerle donatılmıştır. Görev
            gereksinimlerine bağlı olarak fren mesafesini ve yakınlık
            alarmlarını ayarlayabilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Gelişmiş Eve Dönüş
              </h3>
              <p className="text-sm text-gray-400">
                Eve en uygun rotayı otomatik olarak planlayarak güçten ve
                zamandan tasarruf sağlar.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                APAS 5.0
              </h3>
              <p className="text-sm text-gray-400">
                Gelişmiş Pilot Yardım Sistemleri, engellerin etrafından otomatik
                olarak yeniden yönlendirme sağlar.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Çok Yönlü Algılama
              </h3>
              <p className="text-sm text-gray-400">
                Her yönden geniş açılı lenslerle sıfır kör nokta ile güvenli
                uçuş.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı Görev Özellikleri */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Akıllı Görev Özellikleri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Gerçek Zamanlı Arazi Takibi
              </h3>
              <p className="text-gray-400">
                Mavic 3 E'nin çok yönlü algılama özelliği sayesinde, yükseklik
                farklılıkları olan alanları haritalandırırken, yüksekliği harici
                yükseklik verilerini içe aktarmaya gerek kalmadan otomatik
                olarak ayarlarsınız.
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Akıllı Eğik Yakalama
              </h3>
              <p className="text-gray-400">
                Smart Oblique Capture ile eğik fotoğrafçılık görevlerinizin
                verimliliğini artırırsınız. Gimbal otomatik olarak üç yöne
                döner: ön, orta ve arka. Yüksek hassasiyetli 3B modelleme için
                gereken açılarda tüm fotoğrafları toplar.
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Canlı Görev Kaydı
              </h3>
              <p className="text-gray-400">
                Gelecekteki otomatik uçuşlar için örnek görev dosyaları
                oluşturmak üzere uçak hareketi, gimbal oryantasyonu, fotoğraf
                çekimi ve yakınlaştırma düzeyi gibi görev eylemlerini
                kaydedebilirsiniz.
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Koridor Görev Planlaması
              </h3>
              <p className="text-gray-400">
                Corridor Mission Planning ile otoyollar, nehirler, petrol boru
                hatları ve daha fazlası için otomatik uçuş görevleri
                oluşturabilirsiniz. Basitçe harita üzerinde bir çizgi
                çizebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DJI Terra */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">DJI TERRA</h2>
          <p className="text-gray-300 mb-8">
            DJI Terra, fotogrametri teknolojisine dayalı bir 3D model oluşturma
            yazılımıdır. DJI LiDAR kullanarak görünür ışığın ve verinin çeşitli
            doğru ve verimli 2D ve 3D yeniden yapılandırmasını destekler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                3D Modelleme
              </h3>
              <p className="text-sm text-gray-400">
                Gerçekçi 3D modeller, üç farklı çözünürlükte oluşturulabilir. Su
                yüzeyleri, yapay zeka teknolojisi kullanılarak otomatik olarak
                optimize edilir.
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
                DJI Mavic 3 Multispectral'den elde edilen çok spektral veriler,
                bitki büyümesi ve sağlığı hakkında bilgi sağlar.
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

      {/* Aksesuarlar */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Aksesuarlar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">
                DJI Pro Kurumsal
              </h3>
              <p className="text-sm text-gray-400">
                Profesyonel operasyonlar için gelişmiş özellikler
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">
                RTK Modülü
              </h3>
              <p className="text-sm text-gray-400">
                Santimetre düzeyinde hassasiyet için RTK modülü
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">
                D-RTK 2 Mobil İstasyon
              </h3>
              <p className="text-sm text-gray-400">
                Mobil RTK baz istasyonu çözümü
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-3">
                Hoparlör
              </h3>
              <p className="text-sm text-gray-400">
                Arama kurtarma operasyonları için ses sistemi
              </p>
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
              {/* Genel Özellikler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Genel Özellikler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık (pervaneli, aksesuarsız)
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>DJI Mavic 3 E: 915 gr</div>
                      <div>DJI Mavic 3 T: 920 gr</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">1.050 gr</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      221×96,3×90,3 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (Katlanmamış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      347,5×283×107,7 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çapraz Mesafe
                    </div>
                    <div className="px-4 py-3 text-gray-300">380,1 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">45 dakika</div>
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
                      Maksimum Uçuş Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Normal Mod: 15 m/s</div>
                      <div>Spor Modu: İleri 21 m/s</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">12 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İrtifa
                    </div>
                    <div className="px-4 py-3 text-gray-300">6000 m</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">32 km</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Eğim Açısı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Normal Mod: 30°</div>
                      <div>Spor Modu: 35°</div>
                    </div>
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

              {/* Ana Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ana Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör (Mavic 3E)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4/3 CMOS, 20 MP
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör (Mavic 3T)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2 inç CMOS, 48 MP
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Video Çözünürlüğü
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>4K: 3840×2160@30fps</div>
                      <div>FHD: 1920×1080@30fps</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Fotoğraf Modları
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Tek, Zamanlı, Panorama, Akıllı Düşük Işık
                    </div>
                  </div>
                </div>
              </div>

              {/* Tele Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Tele Kamera
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Sensör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1/2 inç CMOS, 12 MP
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Görüş Açısı
                    </div>
                    <div className="px-4 py-3 text-gray-300">15°</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Format Eşdeğeri
                    </div>
                    <div className="px-4 py-3 text-gray-300">162 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Açıklık
                    </div>
                    <div className="px-4 py-3 text-gray-300">f/4,4</div>
                  </div>
                </div>
              </div>

              {/* Termal Kamera */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Termal Kamera (Sadece Mavic 3T)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çözünürlük
                    </div>
                    <div className="px-4 py-3 text-gray-300">640×512</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Piksel Aralığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">12 mikron</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      DFOV
                    </div>
                    <div className="px-4 py-3 text-gray-300">61°</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Format Eşdeğeri
                    </div>
                    <div className="px-4 py-3 text-gray-300">40 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kızılötesi Dalga Boyu
                    </div>
                    <div className="px-4 py-3 text-gray-300">8-14 mikron</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-3">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Renk Paletleri
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Beyaz Sıcak, Siyah Sıcak, Renkli, Demir Kırmızısı, Sıcak
                      Demir, Arktik, Medikal, Fulgurit, Gökkuşağı
                    </div>
                  </div>
                </div>
              </div>

              {/* Pil */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Pil</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      5000 mAh @ 7.2V
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tip
                    </div>
                    <div className="px-4 py-3 text-gray-300">LiPo 4S</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      -10° ila 40° C
                    </div>
                  </div>
                </div>
              </div>

              {/* Video İletimi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Video İletimi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>FCC: 15 km</div>
                      <div>CE/SRRC/MIC: 8 km</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>2,400-2,4835 GHz</div>
                      <div>5,725-5,850 GHz</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İndirme Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      15 MB/s (DJI RC Pro Enterprise ile)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ekran Boyutu
                    </div>
                    <div className="px-4 py-3 text-gray-300">5,5 inç</div>
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
            DJI Mavic 3T ile Profesyonel Operasyonlar
          </h2>
          <p className="text-gray-300 mb-8">
            Termal görüntüleme, gelişmiş yakınlaştırma ve akıllı görev
            özellikleri ile arama kurtarma, yangınla mücadele ve inceleme
            operasyonlarınızı optimize edin. Uzman ekibimiz size en uygun çözümü
            sunmak için hazır.
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

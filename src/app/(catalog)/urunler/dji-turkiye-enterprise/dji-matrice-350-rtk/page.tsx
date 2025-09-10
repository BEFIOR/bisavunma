import Image from "next/image";
import Link from "next/link";
import {
  Radio,
  Monitor,
  Settings,
  Lock,
  Moon,
  Eye,
  Radar,
  Shield,
  Video,
  RotateCcw,
  Bot,
} from "lucide-react";

export const metadata = {
  title: "DJI Matrice 350 RTK | Profesyonel Enterprise Drone | Bisavunma",
  description:
    "DJI Matrice 350 RTK profesyonel drone. 55 dakika uçuş süresi, IP55 koruma, O3 Enterprise iletim, 2.7kg yük kapasitesi. Tam güç ile ilerleyen yeni nesil platform.",
};

export default function DJIMatrice350RTKPage() {
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
                <span className="text-white">DJI Matrice 350 RTK</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 350 RTK
              </h1>

              <div className="text-2xl font-bold text-sky-400 mb-4">
                TAM GÜÇ İLE İLERLER
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                DJI Matrice 350 RTK, sektör için en yeni ölçütü belirliyor. Yeni
                nesil drone platformu, tamamen yenilenmiş bir video iletim
                sistemi ve kontrol deneyimi, daha verimli bir pil sistemi ve
                daha kapsamlı güvenlik özelliklerinin yanında, sağlam genişletme
                ve yük özelliklerine de sahiptir.
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
                  <div className="text-sm text-gray-400">Azami Yük</div>
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
                src="/products/dji-enterprise/dji-matrice-350rtk/hero.jpg"
                alt="DJI Matrice 350 RTK"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zahmetsiz ve Güçlü Uçuş Performansı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Zahmetsiz ve Güçlü Uçuş Performansı
          </h2>
          <p className="text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Sağlam bir yapıda olan DJI Matrice 350 RTK, gelişmiş koruma
            derecesine, güçlü itiş gücüne ve mükemmel uçuş performansına
            sahiptir. Bu sayede çok çeşitli zorlukların zahmetsizce üstesinden
            gelmenize olanak tanır.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="text-3xl font-bold text-sky-400 mb-2">55</div>
                  <div className="text-lg font-semibold text-white mb-1">
                    Dakika
                  </div>
                  <div className="text-sm text-gray-400">
                    Maksimum Uçuş Süresi
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    IP55
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    Koruma
                  </div>
                  <div className="text-sm text-gray-400">Koruma Derecesi</div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    2,7
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">
                    kilo
                  </div>
                  <div className="text-sm text-gray-400">Azami Yük</div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    7000
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">m</div>
                  <div className="text-sm text-gray-400">
                    Maksimum Uçuş İrtifası
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors md:col-span-2 lg:col-span-1">
                  <div className="text-3xl font-bold text-red-400 mb-2">12</div>
                  <div className="text-lg font-semibold text-white mb-1">
                    m/s
                  </div>
                  <div className="text-sm text-gray-400">
                    Maksimum Rüzgar Hızı Direnci
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/zahmetsiz-guclu.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yeni İletim Sistemi */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Yeni İletim Sistemi
              </h2>
              <div className="text-xl font-semibold text-sky-400">
                O3 Kurumsal İletim
              </div>
              <p className="text-gray-300">
                DJI Matrice 350 RTK, üç kanallı 1080p HD canlı yayınları ve
                maksimum 20 km iletim mesafesini destekleyen DJI O3 Enterprise
                Transmission'ı kullanmaktadır. Hem uzaktan kumanda hem de hava
                taşıtı, sinyalleri iletmek için en uygun iki anteni akıllıca
                seçebilen ve dört anteni aynı anda sinyalleri alan, dört antenli
                bir alıcı-verici sistemine sahiptir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Radio className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      4 Antenli Sistem
                    </h4>
                    <p className="text-sm text-gray-400">
                      2T4R konfigürasyonu ile güçlü sinyal iletimi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      3 Kanallı 1080p HD
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yüksek kaliteli canlı video yayını
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Akıllı Anten Seçimi
                    </h4>
                    <p className="text-sm text-gray-400">
                      Parazit önleme ve iletim kararlılığı optimizasyonu
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                <div className="text-lg font-bold text-sky-400">20 km</div>
                <div className="text-sm text-gray-400">
                  Maksimum İletim Mesafesi (FCC)
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-cyan-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/yeni-iletim.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yeni Kontrol Deneyimi */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/zorlu-ortam.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Yeni Kontrol Deneyimi
              </h2>
              <div className="text-xl font-semibold text-green-400">
                DJI RC Plus
              </div>
              <p className="text-gray-300">
                7 inç yüksek parlaklığa sahip bir ekranı olan DJI RC Plus, Çift
                Operatör Modunu destekler ve çeşitli çalışma ihtiyaçlarını
                karşılayan, altı saate kadar çalışma süresi sunan standart bir
                WB37 harici pil ile birlikte size gelir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      IP54 Zorlu Ortam Koruması
                    </h4>
                    <p className="text-sm text-gray-400">
                      Su ve toza dayanıklı, -20° ila 50° C çalışma sıcaklığı
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Pürüzsüz ve Verimli Kontrol
                    </h4>
                    <p className="text-sm text-gray-400">
                      Özelleştirilebilir düğmeler ve kadranlar ile sezgisel
                      deneyim
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">7"</div>
                  <div className="text-sm text-gray-400">
                    Yüksek Parlaklık Ekran
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">6 saat</div>
                  <div className="text-sm text-gray-400">Çalışma Süresi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yükseltilmiş Pil Sistemi */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Yükseltilmiş Pil Sistemi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Yeni Çift Pil Sistemi
              </h3>
              <p className="text-gray-300 mb-4">
                DJI Matrice 350 RTK, çalışırken pil değiştirmeyi destekleyen ve
                gücü kapatmadan birden fazla uçuşa izin veren yeni bir TB65 çift
                pil sistemi ile donatılmıştır.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pil Kapasitesi:</span>
                  <span className="text-white">5880 mAh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Şarj Döngüsü:</span>
                  <span className="text-white">400 döngü</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gerilim:</span>
                  <span className="text-white">44,76 V</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Yeni Nesil Akıllı Akü İstasyonu
              </h3>
              <p className="text-gray-300 mb-4">
                Yeni BS65 Akıllı Akü İstasyonu, akünün şarj edilmesi,
                depolanması ve taşınması için bir çözüm sunar.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">TB65 Kapasitesi:</span>
                  <span className="text-white">8 adet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">WB37 Kapasitesi:</span>
                  <span className="text-white">4 adet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Şarj Süresi:</span>
                  <span className="text-white">60 dk (220V)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gelişmiş Uçuş Güvenliği */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Gelişmiş Uçuş Güvenliği
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Kod Kilit Göstergesi
              </h3>
              <p className="text-sm text-gray-400">Güvenli erişim kontrolü</p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Gece Görüşü FPV
              </h3>
              <p className="text-sm text-gray-400">
                Düşük ışık koşullarında görüş
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                6 Yönlü Algılama
              </h3>
              <p className="text-sm text-gray-400">Çok yönlü engel algılama</p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Radar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                CSM Radarı
              </h3>
              <p className="text-sm text-gray-400">
                30m etkili algılama aralığı
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Çok Katmanlı Yedekli
              </h3>
              <p className="text-sm text-gray-400">Güvenilir sistem tasarımı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Yüksek Hassasiyetli Haritalama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Yüksek Hassasiyetli Haritalama
              </h2>
              <p className="text-gray-300">
                DJI Matrice 350 RTK Yol Noktası, haritalama, doğrusal ve eğik
                uçuş görevlerini destekler. Verimli veri toplama için Terrain
                Follow veya Smart Oblique kullanabilirsiniz. DJI Terra ile
                birlikte, HD 2D ve 3D dijital sonuçları hızlı bir şekilde elde
                edebilir, yüksek verimli ve hassasiyetli haritalama işlemi
                yapabilirsiniz.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Çoklu Görev Desteği
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yol noktası, haritalama, doğrusal ve eğik uçuş görevleri
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Terrain Follow
                    </h4>
                    <p className="text-sm text-gray-400">
                      Arazi takibi ile verimli veri toplama
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Smart Oblique
                    </h4>
                    <p className="text-sm text-gray-400">
                      Akıllı eğik çekim ile hassas 3D modelleme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/yuksek-hassasiyet.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Havadan Yere Koordinasyon */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Havadan Yere Koordinasyon
              </h2>
              <p className="text-gray-300">
                Yüksek hassasiyetli PinPoint ve bulut tabanlı gerçek zamanlı
                haritalama gibi işlevlerle DJI Matrice 350 RTK, hava, yer ve
                bulutu birbirine bağlar. DJI FlightHub 2 ile operasyon sahasını
                hızlı bir şekilde modelleyebilir ve havadan yere işbirliğine
                dayalı operasyon için iletişim engellerini aşabilir.
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/havadan-yere.webm"
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
                PinPoint Hassasiyet
              </h3>
              <p className="text-sm text-gray-400">
                Yüksek hassasiyetli nokta belirleme ve koordinasyon
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Gerçek Zamanlı Haritalama
              </h3>
              <p className="text-sm text-gray-400">
                Bulut tabanlı anlık haritalama ve modelleme
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                FlightHub 2 Entegrasyonu
              </h3>
              <p className="text-sm text-gray-400">
                Operasyon sahasını hızlı modelleme ve komut iletimi
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Çoklu Çizim Desteği
              </h3>
              <p className="text-sm text-gray-400">
                Çizgi, nokta, yüzey çizimi ve gerçek zamanlı yükleme
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Canlı Yayın
              </h3>
              <p className="text-sm text-gray-400">
                Gerçek zamanlı operasyon görüntüsü canlı yayını
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Hava-Yer İşbirliği
              </h3>
              <p className="text-sm text-gray-400">
                İletişim engellerini aşan koordinasyonlu operasyonlar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Otomatik Hassas Kontrol */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-350rtk/otomatik-hassas.webm"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Otomatik Hassas Kontrol
              </h2>
              <p className="text-gray-300">
                Canlı Görev Kaydı aracılığıyla, DJI Matrice 350 RTK, otomatik
                işlemi gerçekleştirmek ve artık zaman alıcı veya zahmetli
                olmayan tekrarlayan inceleme yapmak için herhangi bir zamanda
                kullanılabilecek uçuş rotası dosyaları oluşturabilir ve
                depolayabilir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Canlı Görev Kaydı
                    </h4>
                    <p className="text-sm text-gray-400">
                      Uçuş rotası dosyaları oluşturma ve depolama
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Tekrarlayan İnceleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      Otomatik işlem ile zaman tasarrufu
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      AI Spot-Check
                    </h4>
                    <p className="text-sm text-gray-400">
                      Objelerin otomatik çerçevelemesi ve manuel ayarlama
                      desteği
                    </p>
                  </div>
                </div>
              </div>
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
                DJI Mavic 3 Multispectral ve P4 Multispectral'den elde edilen
                çok spektral veriler, bitki büyümesi ve sağlığı hakkında bilgi
                sağlar.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                BS65 Akıllı Akü İstasyonu
              </h3>
              <p className="text-gray-400 mb-4">
                Akü istasyonu, akünün şarj edilmesi, depolanması ve taşınması
                için tek duraklı bir çözüm sunar. Yeni Depolama Modu ve Uçmaya
                Hazır Modu, şarj verimliliğini artırır ve pil ömrünü uzatır.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 8 TB65 Akıllı Uçuş Pili kapasitesi</li>
                <li>• 4 WB37 Akıllı Pil kapasitesi</li>
                <li>• 360° hareket eden tekerlekler</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                DJI RC Plus
              </h3>
              <p className="text-gray-400 mb-4">
                DJI RC Plus, 1.200 nite kadar parlaklığa sahip 7 inçlik bir
                ekranın yanı sıra sorunsuz bir kontrol deneyimi sunan birden çok
                düğmeye sahiptir.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 7" LCD dokunmatik ekran</li>
                <li>• WB37 harici pil desteği</li>
                <li>• 6 saate kadar çalışma süresi</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                CSM Radarı
              </h3>
              <p className="text-gray-400 mb-4">
                CSM Radarı, uçuş güvenliğini daha da sağlamak için dronun üstüne
                monte edilebilir. Etkili algılama aralığı 30 m'ye ulaşabilir.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 30m etkili algılama aralığı</li>
                <li>• Yukarı doğru veya yatay 360° algılama</li>
                <li>• Küçük engelleri doğru algılama</li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Yüksek İrtifa Düşük Gürültülü Pervaneler
              </h3>
              <p className="text-gray-400 mb-4">
                Yüksek irtifa düşük gürültülü pervaneler, 3.000-7.000 m yüksek
                irtifalarda uçuş performansını garanti eder.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 3000-7000m yüksek irtifa performansı</li>
                <li>• 2 desibel gürültü azaltması</li>
                <li>• Standart 2110s pervanelere göre iyileştirme</li>
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
                      Boyutlar (katlanmamış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      810×670×430 mm (U×G×Y)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      430×420×430 mm (U×G×Y)
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
                      Ağırlık (iki TB65 pille)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 6,47 kg
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">9,2 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Yük (Tek Gimbal)
                    </div>
                    <div className="px-4 py-3 text-gray-300">960 gr</div>
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
                      Maksimum Uçuş İrtifası
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>5000 m (2110s pervaneler)</div>
                      <div>7000 m (2112 yüksek irtifa pervaneler)</div>
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
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS + GLONASS + BeiDou + Galileo
                    </div>
                  </div>
                </div>
              </div>

              {/* Video İletimi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Video İletimi (DJI O3 Enterprise)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Anten Konfigürasyonu
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      4 video aktarım anteni, 2T4R
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>20 km (FCC)</div>
                      <div>8 km (CE/SRRC/MIC)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Görüş Sistemi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Görüş Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Engel Algılama Menzili
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>İleri/Geri/Sol/Sağ: 0,7-40 m</div>
                      <div>Yukarı/Aşağı: 0,6-30 m</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Görüş Açısı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>İleri/Geri/Aşağı: 65° (yatay), 50° (dikey)</div>
                      <div>Sol/Sağ/Yukarı: 75° (yatay), 60° (dikey)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TB65 Akıllı Uçuş Bataryası */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  TB65 Akıllı Uçuş Bataryası
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
                    <div className="px-4 py-3 text-gray-300">44,76 V</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Enerji
                    </div>
                    <div className="px-4 py-3 text-gray-300">263,2 Wh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 1,35 kg
                    </div>
                  </div>
                </div>
              </div>

              {/* Uzaktan Kumanda */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Uzaktan Kumanda (DJI RC Plus)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ekran
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      7,02" LCD dokunmatik, 1920×1200, 1200 nit
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Operasyon Zamanı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Dahili Pil: yakl. 3,3 saat</div>
                      <div>Dahili + Harici: yakl. 6 saat</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>WB37 olmadan: yakl. 1,25 kg</div>
                      <div>WB37 ile: yakl. 1,42 kg</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Koruma Derecesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">IP54</div>
                  </div>
                </div>
              </div>

              {/* BS65 Akıllı Akü İstasyonu */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  BS65 Akıllı Akü İstasyonu
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      580×358×254 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Net Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yaklaşık 8,98 kg
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>8 TB65 Akıllı Uçuş Pili</div>
                      <div>4 WB37 Akıllı Pil</div>
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
            DJI Matrice 350 RTK ile Tam Güç İlerleyin
          </h2>
          <p className="text-gray-300 mb-8">
            Yeni nesil drone platformu, gelişmiş iletim sistemi ve kapsamlı
            güvenlik özellikleri ile herhangi bir hava operasyonuna yenilikçi
            güç katın. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
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

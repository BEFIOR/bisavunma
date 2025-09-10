import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Target,
  Zap,
  Eye,
  Map,
  Camera,
  Radar,
  Shield,
  Settings,
  CheckCircle,
  Search,
  Bot,
} from "lucide-react";

export const metadata = {
  title: "DJI Matrice 4E | Akıllı Çok Sensörlü Drone | Bisavunma",
  description:
    "DJI Matrice 4E akıllı drone. Çok sensörlü amiral gemisi, AI algılama, lazer mesafe ölçer, hassas haritalama. Coğrafi uygulamalar, inşaat ve madencilik için ideal.",
};

export default function DJIMatrice4EPage() {
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
                <span className="text-white">DJI Matrice 4E</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                DJI Matrice 4E
              </h1>

              <div className="text-2xl font-bold text-cyan-400 mb-4">
                AKILLI UÇUŞ ÇAĞI BAŞLIYOR!
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                DJI Matrice 4 Serisi'ni tanıtıyoruz: Yeni, kompakt ve akıllı çok
                sensörlü amiral gemisi drone serisi, kurumsal endüstriler için
                tasarlandı. Uçuş operasyonları, önemli ölçüde geliştirilmiş
                algılama yetenekleri ile artık daha güvenli ve daha güvenilir
                hale geldi.
              </p>

              <p className="text-gray-300">
                Matrice 4E, harita yapımı, inşaat ve madencilik gibi coğrafi
                uygulamalar için tasarlanmıştır. Akıllı hava operasyonlarında
                yeni bir dönem başlıyor!
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">AI</div>
                  <div className="text-sm text-gray-400">
                    Akıllı Algılama Sistemi
                  </div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">0.5s</div>
                  <div className="text-sm text-gray-400">Aralıklı Çekim</div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-matrice-4e/hero.png"
                alt="DJI Matrice 4E"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı Operasyonlar */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Akıllı Operasyonlar
              </h2>
              <p className="text-gray-300">
                Dahili model, arama ve kurtarma operasyonları veya rutin uçuşlar
                sırasında araçları, gemileri ve hedefleri tespit edebilir.
                Ayrıca, diğer modellere geçiş yapmayı destekler, bu da uygulama
                senaryolarının genişletilmesini sağlar.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      AI Hedef Tespiti
                    </h4>
                    <p className="text-sm text-gray-400">
                      Araçlar, gemiler ve hedefleri otomatik tespit
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Arama ve Kurtarma
                    </h4>
                    <p className="text-sm text-gray-400">
                      Arama kurtarma operasyonları için optimize edilmiş AI
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Güçlü Takip Yetenekleri
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yüksek çözünürlüklü ızgara fotoğrafları ve takip sistemi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-4e/akilli-operasyonlar.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lazer Mesafe Ölçer */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0" />
              <video
                src="/products/dji-enterprise/dji-matrice-4e/lazer-mesafe.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Lazer Mesafe Ölçer, Hassas Ölçüm
              </h2>
              <p className="text-gray-300">
                Lazer mesafe ölçer, gerçek zamanlı hassas ölçüm yapmayı sağlar.
                Nokta belirleme, çizgi çizme ve alan hesaplama gibi basit
                işlemlerle, denetim amacıyla hedef konumları işaretleme veya
                orman yangını alanını hesaplama gibi görevler tamamlanabilir.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Nokta Belirleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      Hassas nokta belirleme ve hedef konumu işaretleme
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Alan Hesaplama
                    </h4>
                    <p className="text-sm text-gray-400">
                      Çizgi çizme ve alan hesaplama ile detaylı ölçümler
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Bilgi Paylaşımı
                    </h4>
                    <p className="text-sm text-gray-400">
                      DJI Pilot QR kodu ve FlightHub 2 üzerinden işbirliği
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gözlem Aralığı Kaydı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Gözlem Aralığı Kaydı
              </h2>
              <p className="text-gray-300">
                DJI Pilot 2, kamera çerçevesinin merkez konumunu ve gözlemlenen
                yer yüzü alanını vurgulayabilir. Harita üzerinde incelenen alanı
                gösterebilir, bu da özellikle belirgin işaretler olmayan dağlık
                arazilerde devriye ve kurtarma operasyonları için son derece
                kullanışlıdır.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Merkez Konum Vurgulama
                    </h4>
                    <p className="text-sm text-gray-400">
                      Kamera çerçevesinin merkez konumunu hassas belirleme
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Map className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Harita Üzerinde Görüntüleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      İncelenen alanları harita üzerinde gerçek zamanlı gösterim
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Devriye ve Kurtarma
                    </h4>
                    <p className="text-sm text-gray-400">
                      Dağlık arazilerde belirgin işaret olmadan operasyon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-4e/gozlem-araligi.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hassas Haritalama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-4e/hassas-haritalama.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Hassas Haritalama, Zamandan Tasarruf ve Zahmetsiz
              </h2>
              <div className="text-xl font-semibold text-purple-400">
                Hızlı 0.5 Saniye Aralıklı Çekim
              </div>
              <p className="text-gray-300">
                Matrice 4E geniş açı kamerası, hem ortofoto hem de eğik
                fotoğrafçılık modlarında hızlı 0.5 saniye aralıklı çekim yapmayı
                destekler, bu da çoklu açılardan yüksek hızlı hava taraması
                yapmayı mümkün kılar. Haritalama uçuş hızı saatte 21 metreye
                kadar çıkabilir.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-purple-400">0.5s</div>
                  <div className="text-sm text-gray-400">Aralıklı Çekim</div>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-purple-400">
                    21 m/h
                  </div>
                  <div className="text-sm text-gray-400">Haritalama Hızı</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Ortofoto + Eğik Fotoğrafçılık
                    </h4>
                    <p className="text-sm text-gray-400">
                      Çoklu açılardan yüksek hızlı hava taraması
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Çalışma Verimliliği
                    </h4>
                    <p className="text-sm text-gray-400">
                      Önemli ölçüde artırılmış operasyon verimliliği
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı 3D Yakalama */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Akıllı 3D Yakalama, Hassas Modelleme
              </h2>
              <p className="text-gray-300">
                DJI Matrice 4E, Akıllı 3D Yakalamayı destekler, bu sayede
                uzaktan kumanda üzerinden kaba bir model oluşturabilir ve
                yakalayabilirsiniz. Bu kaba modele dayanarak, yapı yüzeyine
                yakın hassas haritalama rotalarını hızla oluşturabilir, düzensiz
                binaların detaylı ölçümlerini ve modellemelerini
                tamamlayabilirsiniz.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Kaba Model Oluşturma
                    </h4>
                    <p className="text-sm text-gray-400">
                      Uzaktan kumanda üzerinden hızlı model oluşturma
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Map className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Hassas Haritalama Rotaları
                    </h4>
                    <p className="text-sm text-gray-400">
                      Yapı yüzeyine yakın otomatik rota planlama
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Güvenlik Değerlendirmesi
                    </h4>
                    <p className="text-sm text-gray-400">
                      Sanal alan rotaları ile uçuş güvenliği analizi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
              <video
                src="/products/dji-enterprise/dji-matrice-4e/akilli-3d.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uygulama Alanları */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Coğrafi Uygulamalar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Map className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">
                  Harita Yapımı
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Yüksek hassasiyetli haritalama ve surveying operasyonları
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">İnşaat</h3>
              </div>
              <p className="text-sm text-gray-400">
                İnşaat projelerinde ilerleme izleme ve ölçüm
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-orange-400" />
                <h3 className="text-lg font-semibold text-white">Madencilik</h3>
              </div>
              <p className="text-sm text-gray-400">
                Maden sahalarında güvenli ve hassas ölçümler
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Search className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-semibold text-white">
                  Arama Kurtarma
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                AI destekli hedef tespiti ile arama kurtarma operasyonları
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Radar className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Denetim</h3>
              </div>
              <p className="text-sm text-gray-400">
                Rutin denetim ve inceleme operasyonları
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">
                  Akıllı Analiz
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                AI destekli veri analizi ve raporlama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı İzleme */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            DJI Matrice 4'ün Akıllı İzleme Özelliği
          </h2>
          <p className="text-gray-300 mb-8 max-w-4xl mx-auto">
            Gelişmiş AI teknolojisi ile hedef takibi ve akıllı izleme
            yetenekleri. Otomatik hedef tespiti ve sürekli takip sistemi ile
            operasyonel verimliliği maksimuma çıkarır.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Bot className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">
                Akıllı İzleme Sistemi
              </h3>
            </div>
            <p className="text-gray-400">
              YouTube kanalımızda DJI Matrice 4'ün akıllı izleme özelliklerini
              detaylı olarak inceleyebilirsiniz. Gerçek zamanlı test videoları
              ve uygulama örnekleri ile ürünün kapasitelerini keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Teknik Veri Tablosu */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
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
                      Seri
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      DJI Matrice 4 Serisi
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tasarım
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Kompakt ve akıllı çok sensörlü
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Hedef Sektör
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Kurumsal endüstriler
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ana Uygulama
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Harita yapımı, inşaat, madencilik
                    </div>
                  </div>
                </div>
              </div>

              {/* Kamera Sistemi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Kamera Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çekim Aralığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">0.5 saniye</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Haritalama Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      21 m/h'ye kadar
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çekim Modları
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Ortofoto + Eğik fotoğrafçılık
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Özellikleri */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  AI Özellikleri
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Hedef Tespiti
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Araçlar, gemiler, hedefler
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model Geçişi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Farklı AI modelleri arası geçiş
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Takip Yetenekleri
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Güçlü otomatik takip sistemi
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çözünürlük
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yüksek çözünürlüklü ızgara fotoğrafları
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
            DJI Matrice 4E ile Akıllı Uçuş Çağına Adım Atın
          </h2>
          <p className="text-gray-300 mb-8">
            Akıllı operasyonlar, hassas ölçüm ve gelişmiş AI yetenekleri ile
            coğrafi uygulamalarınızı, inşaat projelerinizi ve madencilik
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

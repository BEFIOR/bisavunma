import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Scale, Wrench, MapPin, Map, Bot } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo, VideoContainer } from "@/components/animations/LazyVideo";

export const metadata = {
  title: "DJI Agras T20P | Tarımsal İlaçlama Dronu | Bisavunma",
  description:
    "DJI Agras T20P tarımsal drone. 20kg püskürtme, 25kg yayma kapasitesi. Çift atomize püskürtme sistemi, aktif faz dizili radar, binoküler görüş ile yüksek hassasiyet.",
};

export default function DJIAgrasT20PPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-neutral-950 to-black pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <Link
                    href="/urunler/dji-turkiye-enterprise"
                    className="hover:text-white transition-colors"
                  >
                    DJI Enterprise
                  </Link>
                  <span>/</span>
                  <span className="text-white">DJI Agras T20P</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-green-400">DJI Agras T20P</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  Tarımsal Verimlilik Çözümü
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI Agras T20P, tarımsal ilaçlama ve tohumlama işlemlerinde
                  yüksek hassasiyet ve verimlilik sağlayan yeni nesil bir drone
                  çözümüdür. Kompakt tasarımı, otomatik uçuş planlama ve akıllı
                  püskürtme sistemiyle küçük ve orta ölçekli tarım arazilerinde
                  etkin çözümler sunar.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      20 kg
                    </div>
                    <div className="text-sm text-gray-400">
                      Püskürtme Kapasitesi
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      25 kg
                    </div>
                    <div className="text-sm text-gray-400">
                      Yayma Kapasitesi
                    </div>
                  </div>
                </StaggerItem>
              </HeroStaggerContainer>

              <HeroAnimation direction="up" delay={1.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Teklif Al
                  </Link>
                </div>
              </HeroAnimation>
            </div>

            <HeroScaleAnimation
              delay={0.8}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-sky-600/20 rounded-2xl blur-3xl" />
              <Image
                src="/products/dji-enterprise/dji-agras-t20p/hero.jpg"
                alt="DJI Agras T20P"
                width={1000}
                height={1000}
                className="object-contain relative z-10 rounded-2xl"
                priority
              />
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Hafif ve Çevik */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Hafif ve Çevik</h2>
          </ScrollAnimation>

          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="text-center mb-12"
          >
            <p className="text-gray-300 max-w-4xl mx-auto">
              AGRAS T20P, güçlü performansıyla birlikte hafif ve çevik bir
              özellik taşır. Bu araç, 20 kg'a kadar püskürtme yükünü taşıyabilme
              özelliği ile dikkat çeker. Çift Atomize Püskürtme Sistemi, DJI
              Terra, Aktif Faz Dizili Radar ve Binoküler Görüş gibi özelliklerle
              donatılmıştır.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Tarım Arazisi
                </h3>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  12 ha/saat
                </div>
                <p className="text-gray-400">
                  Saat başına 12 hektarlık tarım arazisinde etkili çalışma
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Meyve Bahçesi
                </h3>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  2.6 ha/saat
                </div>
                <p className="text-gray-400">
                  Saat başına 2.6 hektarlık meyve bahçesinde hassas işlem
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Gübreleme
                </h3>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  1 ton/saat
                </div>
                <p className="text-gray-400">
                  Saat başına 1 ton gübre ile verimli yayma işlemi
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Eşit Püskürtme için Çift Atomizasyon */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Eşit Püskürtme için Çift Atomizasyon
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  Manyetik Tahrikli Çark Pompası, yeni manyetik iletim tasarımı
                  sayesinde pestisiti motordan tamamen izole ederek uçağı
                  korozyona dayanıklı ve son derece dayanıklı hale getirir.
                </p>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-sky-400">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Manyetik Tahrikli Çark Pompası
                      </h4>
                      <p className="text-sm text-gray-400">
                        Pestisiti motordan tamamen izole ederek korozyona
                        dayanıklılık sağlar
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-sky-400">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Çift Atomize Santrifüj Sprinkler
                      </h4>
                      <p className="text-sm text-gray-400">
                        Çift atomize püskürtme diski ile eşit damlacıklar
                        oluşturarak verimli pestisit kullanımı
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-sky-400">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Hızlı Sökme Özelliği
                      </h4>
                      <p className="text-sm text-gray-400">
                        Elle hızlı sökme özelliği sayesinde kolay temizlik
                        imkanı
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollAnimation direction="right">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t20p/esit-puskurtme.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Saatte 1 Ton Gübre */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t20p/hizli-sokme.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Saatte 1 Ton Gübre
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-gray-300">
                  T20P Yayma Sistemi, artık daha büyük yük ağırlıklarını
                  başarıyla taşıma kapasitesine sahiptir ve 25 kg'a kadar ve 35
                  litrelik kapasiteyi destekleyebilmektedir.
                </p>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Scale className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Gerçek Zamanlı Tartım
                      </h4>
                      <p className="text-sm text-gray-400">
                        Serpme miktarını ve kalan taşıma yükünü izleyen tartım
                        sensörü
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Hızlı Sökme ve Temizleme
                      </h4>
                      <p className="text-sm text-gray-400">
                        Yayma aparatı sadece 3 dakika içinde çıkarılabilir ve su
                        ile yıkanabilir
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <ScrollAnimation direction="right" delay={0.4}>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                  <div className="text-lg font-bold text-green-400">25 kg</div>
                  <div className="text-sm text-gray-400">
                    Maksimum Yayma Kapasitesi (35L)
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Çok Yönlü Engel Algılama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Çok Yönlü Engel Algılama
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="text-center mb-12"
          >
            <p className="text-gray-300 max-w-4xl mx-auto">
              Aktif Faz Dizili Radar + Binoküler Görüş sistemi ile 360 derecelik
              çok yönlü engel algılama sağlar ve optimum güvenlik sunar.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Aktif Faz Dizili Radar
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 360 derece algılama</li>
                  <li>• 50 metreye kadar algılama mesafesi</li>
                  <li>• Akıllı arazi takibi</li>
                  <li>• Çoklu engel aşma</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Binoküler Görüş
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Ölçüm aralığı: 0.4-25m</li>
                  <li>• Etkili algılama hızı: &lt;10 m/s</li>
                  <li>• FOV: Yatay 90°, Dikey 106°</li>
                  <li>• Yeterli ışık ortamında çalışma</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Karmaşık Arazi Uyumu
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Engebeli meyve bahçelerinde çalışma</li>
                  <li>• Düzgün ölçeklendirme</li>
                  <li>• Optimum güvenlik</li>
                  <li>• Zorlu arazi koşullarında dayanıklılık</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Haritalama, Püskürtme ve Yayma */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Haritalama, püskürtme ve yayma, hepsi bir arada
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  AGRAS T20P, haritalama (D-RTK 2 mobil istasyonuyla), püskürtme
                  ve yayma işlevlerini başarıyla birleştirir. UHD kamerası ve
                  ayarlanabilir gimbal sayesinde istenilen görünümü kolayca
                  yakalamanıza olanak tanır.
                </p>
              </ScrollAnimation>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Gerçek Zamanlı Görüntüleme
                    </h4>
                    <p className="text-sm text-gray-400">
                      Tarım arazisi ve meyve bahçesi görüntüleri gerçek zamanlı
                      olarak çekilebilir
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Map className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Yerel Harita Oluşturma
                    </h4>
                    <p className="text-sm text-gray-400">
                      Tam internet bağlantısı olmadan uzaktan kumanda
                      kullanılarak yerel haritalar oluşturulabilir
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Otomatik Algılama
                    </h4>
                    <p className="text-sm text-gray-400">
                      Arazi sınırlarını ve engelleri otomatik olarak algılar,
                      uçuş rotalarını hızlı planlar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ScrollAnimation direction="right">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t20p/haritalama.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Zahmetsiz Haritalama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t20p/zahmetsiz.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Zahmetsiz haritalama için turbo şarjlı uzaktan kumanda
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-gray-300">
                  8 çekirdekli işlemci, 6,67 hektarlık bir alanın
                  haritalanmasını sadece 10 dakikada mümkün kılar. Daha fazla
                  verimlilik için her uçuşta taşınan yük, akıllı rota
                  planlamasıyla maksimum düzeye çıkarılır.
                </p>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-blue-400">
                      8 Çekirdek
                    </div>
                    <div className="text-sm text-gray-400">İşlemci Gücü</div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-blue-400">10 dk</div>
                    <div className="text-sm text-gray-400">
                      6,67 ha Haritalama
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-blue-400">7"</div>
                    <div className="text-sm text-gray-400">
                      Yüksek Parlaklık Ekran
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-blue-400">
                      1200 cd/m²
                    </div>
                    <div className="text-sm text-gray-400">
                      Ekran Parlaklığı
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenilirlik */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Üstün güvenilirlik için sağlam bir şekilde test edilmiştir
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-12">
              Temel bileşenler, karmaşık ve zorlu tarım arazisi ortamlarına
              dayanacak şekilde özel olarak tasarlanmıştır. Kullanıcının
              güvenliğini sağlamak adına bir dizi zorlu testten başarıyla
              geçmiştir.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Su Geçirmezlik
                </h3>
                <p className="text-sm text-gray-400">
                  Yağmurlu hava koşullarında güvenilir çalışma
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Toz Önleme
                </h3>
                <p className="text-sm text-gray-400">
                  Tozlu tarım ortamlarında koruma
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Korozyon Önleme
                </h3>
                <p className="text-sm text-gray-400">
                  Kimyasal maddelere karşı dayanıklılık
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Sıcaklık Dayanımı
                </h3>
                <p className="text-sm text-gray-400">
                  0°C - 45°C arasında güvenilir çalışma
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Ultra Hızlı Şarj */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="up">
                <h2 className="text-3xl font-bold text-white">
                  Ultra hızlı şarj
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <p className="text-gray-300">
                  6000 W Çok Fonksiyonlu İnverter Jeneratör, çıkarılabilir bir
                  şarj modülünü içerir ve şebeke güç girişinin yanı sıra çeşitli
                  şarj senaryolarına uyumludur. 13000mAh Akıllı Uçuş Pili ile
                  iki pilin 9 dakikada hızlı bir şekilde şarj edilmesini sağlar.
                </p>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-yellow-400">
                      6000W
                    </div>
                    <div className="text-sm text-gray-400">
                      İnverter Jeneratör
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-yellow-400">
                      9 dk
                    </div>
                    <div className="text-sm text-gray-400">
                      İki Pil Şarj Süresi
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-yellow-400">
                      13Ah
                    </div>
                    <div className="text-sm text-gray-400">
                      Akıllı Uçuş Pili
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-yellow-400">
                      Çoklu
                    </div>
                    <div className="text-sm text-gray-400">
                      Şarj Senaryoları
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* DJI Agras Akıllı Bulut */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              DJI Agras Akıllı Bulut
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-12">
              Kullanıcılar, DJI Tarımsal Bulut Platformu ve P4 Multispectra,
              PHANTOM 4 RTK veya AGRAS uçakları ile reçete haritalarını
              kullanarak tarla devriyeleri, arazi tesviye izleme, fide
              tanımlama, uzun vadeli büyüme analizi ve değişken ilaçlama/serpme
              işlemlerini gerçekleştirebilmektedir.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Tarla Devriyeleri
                </h3>
                <p className="text-sm text-gray-400">
                  Düzenli tarla kontrolü ve izleme işlemleri
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Büyüme Analizi
                </h3>
                <p className="text-sm text-gray-400">
                  Uzun vadeli büyüme analizi ve fide tanımlama
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Değişken Uygulama
                </h3>
                <p className="text-sm text-gray-400">
                  Reçete haritalarına dayalı hassas ilaçlama ve serpme
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Mahsul Uygulamaları
                </h3>
                <p className="text-sm text-gray-400">
                  Pirinç, pamuk, soya fasulyesi ve mısır için özel uygulamalar
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Arazi Tesviye
                </h3>
                <p className="text-sm text-gray-400">
                  Arazi tesviye izleme ve optimizasyon
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Entegre Platform
                </h3>
                <p className="text-sm text-gray-400">
                  P4 Multispectral, PHANTOM 4 RTK ile tam entegrasyon
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
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
              {/* DRONE */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  DRONE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>26 kg (pil yok)</div>
                      <div>32 kg (pil ile)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Püskürtme: 52 kg (deniz seviyesinde)</div>
                      <div>Serpme: 58 kg (deniz seviyesinde)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Çapraz Dingil Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">2,190 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (açık)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2,800×3,125×640 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar (katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1,077×620×670 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      0° - 45° C (32° - 113° F)
                    </div>
                  </div>
                </div>
              </div>

              {/* Uçuş Performansı */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Uçuş Performansı
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Uçuş Süresi (Yüksüz)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      14,5 dk (13Ah pil ile)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Püskürtme (Tam Dolu)
                    </div>
                    <div className="px-4 py-3 text-gray-300">7 dk (52 kg)</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Serpme (Tam Yüklü)
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 dk (58 kg)</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Uçuş Yarıçapı
                    </div>
                    <div className="px-4 py-3 text-gray-300">2,000 m</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS L1/L2, GLONASS, BeiDou, Galileo
                    </div>
                  </div>
                </div>
              </div>

              {/* Püskürtücüler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Püskürtme Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">LX8060SZ</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Adet
                    </div>
                    <div className="px-4 py-3 text-gray-300">2</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Damlacık Boyutu
                    </div>
                    <div className="px-4 py-3 text-gray-300">50-300 μm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Etkili Püskürtme Genişliği
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      7 m (2,5m yükseklikte)
                    </div>
                  </div>
                </div>
              </div>

              {/* Aktarma Pompaları */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Aktarma Pompaları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tip
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Manyetik tahrikli çark pompası
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Akış Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 L/dk x 2</div>
                  </div>
                </div>
              </div>

              {/* Aktif Faz Dizili Radar */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Aktif Faz Dizili Çok Yönlü Radar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">RD2484R</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      24.05-24.25 GHz
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Engel Algılama Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Yatay: 1.5-50m</div>
                      <div>Yukarı: 1.5-30m</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      FOV
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Yatay: 360°, Dikey: ±45°</div>
                      <div>Yukarı: 45°</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Binoküler Görüş */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Binoküler Görüş Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ölçüm Aralığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">0.4-25m</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Etkili Algılama Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">&lt;10 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      FOV
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yatay: 90°, Dikey: 106°
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Ortamı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Yeterli ışık ve fark edilebilir çevre
                    </div>
                  </div>
                </div>
              </div>

              {/* Uzaktan Kumanda */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Uzaktan Kumanda (RM700B)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ekran
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      7,02" LCD dokunmatik, 1920×1200, 1200 cd/m²
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Dahili: 3 saat 18 dk</div>
                      <div>Harici: 2 saat 42 dk</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS + Galileo + BeiDou
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2 saat (standart DJI şarj cihazı)
                    </div>
                  </div>
                </div>
              </div>

              {/* O3 Agras */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  O3 Agras İletim
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>2.400-2.4835 GHz</div>
                      <div>5.725-5.850 GHz</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>7km (FCC)</div>
                      <div>5 km (SRRC)</div>
                      <div>4 km (MIC/CE)</div>
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
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bisavunma Güvencesiyle DJI Agras T20P
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              Kompakt tasarım, akıllı püskürtme sistemi ve çok yönlü engel
              algılama ile küçük ve orta ölçekli tarım arazilerinde maksimum
              verimlilik elde edin. Uzman ekibimiz size en uygun çözümü sunmak
              için hazır.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="flex flex-wrap gap-4 justify-center"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors text-lg"
              >
                Hemen Teklif Alın
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/urunler/dji-turkiye-enterprise"
                className="inline-flex items-center px-8 py-4 border border-gray-700 hover:border-gray-600 text-white font-medium rounded-lg transition-colors text-lg"
              >
                Tüm DJI Enterprise Ürünleri
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="mt-8 p-6 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl">
              <p className="text-gray-300">
                <span className="text-green-400 font-semibold">
                  Bisavunma güvencesi
                </span>{" "}
                ile profesyonel destek, teknik servis ve eğitim hizmetlerinden
                faydalanın.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

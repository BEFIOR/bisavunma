import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Camera,
  Zap,
  Settings,
  Shield,
  Radar,
  Eye,
  MapPin,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
  HeroStaggerContainer,
  HeroScaleAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo, VideoContainer } from "@/components/animations/LazyVideo";

export const metadata = {
  title: "DJI Agras T40 | Yüksek Kapasiteli Tarımsal Drone | Bisavunma",
  description:
    "DJI Agras T40 tarımsal drone. 40kg püskürtme, 50kg yayma kapasitesi. Koaksiyel ikiz rotor tasarımı, çift atomize püskürtme sistemi, aktif faz dizili radar ile maksimum verimlilik.",
};

export default function DJIAgrasT40Page() {
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
                  <span className="text-white">DJI Agras T40</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-green-400">DJI Agras T40</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  Yüksek Kapasiteli Tarımsal Çözüm
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI Agras T40, yüksek kapasiteli ilaçlama ve gübreleme
                  işlemleri için tasarlanmış, ileri teknolojili bir tarımsal
                  drone çözümüdür. Çift rotor tasarımı, akıllı püskürtme sistemi
                  ve hassas ölçüm sensörleri sayesinde geniş tarım arazilerinde
                  verimliliği artırır.
                </p>
              </HeroAnimation>

              <HeroStaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                staggerDelay={0.2}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      40 kg
                    </div>
                    <div className="text-sm text-gray-400">
                      Püskürtme Kapasitesi
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      50 kg
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
                src="/products/dji-enterprise/dji-agras-t40/hero.jpg"
                alt="DJI Agras T40"
                width={500}
                height={500}
                className="object-contain relative z-10 rounded-2xl"
                priority
              />
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Koaksiyel İkiz Rotor Tasarımı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Devrim Niteliğindeki Koaksiyel İkiz Rotor Tasarımı
            </h2>
          </ScrollAnimation>

          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="text-center mb-12"
          >
            <p className="text-gray-300 max-w-4xl mx-auto">
              DJI Agras T40, devrim niteliğindeki Koaksiyel İkiz Rotor tasarımı
              ile 40 kg püskürtme yükü ve 50 kg (70 L) yayılmış yük taşıma
              kapasitesi sağlar. T40, Çift Atomize Püskürtme Sistemi, DJI Terra,
              Binoküler Görüş, Aktif Fazlı Radar ile üst düzeyde hassasiyet
              sunar.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">Ölçme</h3>
                </div>
                <p className="text-gray-400">
                  Hassas ölçüm sensörleri ile doğru alan hesaplama
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Haritalama
                  </h3>
                </div>
                <p className="text-gray-400">
                  DJI Terra ile gelişmiş haritalama çözümleri
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Püskürtme
                  </h3>
                </div>
                <p className="text-gray-400">
                  40 kg kapasiteyle çift atomize püskürtme sistemi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Yayma</h3>
                </div>
                <p className="text-gray-400">
                  50 kg (70L) yük ile geniş alan gübrelemeleri
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Uzun Süreli Hizmet İçin Mükemmel Tasarım */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Uzun Süreli Hizmet İçin Mükemmel Tasarım
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  DJI Agras T40, maksimum 50 kg yük ile taşıma kapasitesini %30
                  artıran bir koaksiyel ikiz rotor tasarımına sahip olarak
                  üretilmiştir. Katlanabilir tasarımı, daha fazla taşınabilirlik
                  için drone&apos;un boyutunu %70 kadar azaltmıştır.
                </p>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Koaksiyel İkiz Rotor
                      </h4>
                      <p className="text-sm text-gray-400">
                        %30 artırılmış taşıma kapasitesi ile maksimum 50 kg yük
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Katlanabilir Tasarım
                      </h4>
                      <p className="text-sm text-gray-400">
                        %70 boyut azaltması ile üstün taşınabilirlik
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-600/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Uzun Süreli Hizmet
                      </h4>
                      <p className="text-sm text-gray-400">
                        Dayanıklı yapı ile sürekli tarımsal operasyonlar
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollAnimation direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
                <Image
                  src="/products/dji-enterprise/dji-agras-t40/mukemmel-tasarim.png"
                  alt="DJI Agras T40 Tasarım"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Size Göre Bir Kamera Açısı */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t40/kamera-acisi.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Size Göre Bir Kamera Açısı
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-gray-300">
                  DJI Agras T40, püskürtme, haritalama ve serpme işlevlerini
                  birleştirirken, UHD kamerası ve ayarlanabilir kamera açısıyla,
                  istediğiniz görüntünün kolayca yakalanmasını sağlar. Tarım
                  arazisi veya meyve bahçesi görüntüleriniz gerçek zamanlı
                  olarak işlenebilir.
                </p>
              </ScrollAnimation>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        UHD Kamera
                      </h4>
                      <p className="text-sm text-gray-400">
                        Yüksek çözünürlüklü görüntüleme ve kayıt
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Ayarlanabilir Açı
                      </h4>
                      <p className="text-sm text-gray-400">
                        İstediğiniz görüntüyü kolayca yakalama
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Otomatik Algılama
                      </h4>
                      <p className="text-sm text-gray-400">
                        Arazi sınırları ve engelleri otomatik algılama
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Yenilenmiş Püskürtme */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Yenilenmiş Püskürtme
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <div className="text-xl font-semibold text-sky-400">
                  Eşit Püskürtme İçin Çift Atomizasyon Sistemi
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.3}>
                <p className="text-gray-300">
                  Çift Atomize Püskürtme Sistemi ile eşit ve verimli pestisit
                  dağılımı sağlar. Gelişmiş atomizasyon teknolojisi sayesinde
                  minimum kayıpla maksimum etki elde edilir.
                </p>
              </ScrollAnimation>

              <StaggerContainer
                className="grid grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-sky-400">6 L/dk</div>
                    <div className="text-sm text-gray-400">
                      Püskürtme Akış Hızı (x2)
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-sky-400">11 m</div>
                    <div className="text-sm text-gray-400">
                      Maksimum Etkili Püskürtme Genişliği
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollAnimation direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
                <Image
                  src="/products/dji-enterprise/dji-agras-t40/yenilenmis.png"
                  alt="DJI Agras T40 Püskürtme"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Çok Yönlü Engel Algılama */}
      <section className="py-20 px-4 border-t border-neutral-900">
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
              Aktif Faz Dizili Radar, 360 derece yatay, çok yönlü engel algılama
              sağlamak için bir binoküler görüş sensörü sistemi ile
              birleştirildi ve bu sayede optimum güvenlik sunuyor. 50 m&apos;ye
              kadar algılama mesafesi, düzgün ölçeklendirmeye, akıllı arazi
              takibine ve birden fazla engelin atlanmasına izin verir.
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Radar className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Aktif Faz Dizili Radar
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 360 derece yatay algılama</li>
                  <li>• 50 metreye kadar algılama mesafesi</li>
                  <li>• Çok yönlü engel algılama</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Binoküler Görüş
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Hassas görüş sistemi</li>
                  <li>• Optimum güvenlik</li>
                  <li>• Akıllı arazi takibi</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Çoklu Engel Aşma
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Birden fazla engeli aşma</li>
                  <li>• Düzgün ölçeklendirme</li>
                  <li>• Güvenli operasyon</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Daha Hızlı Haritalama */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10" />
                <Image
                  src="/products/dji-enterprise/dji-agras-t40/haritalama.png"
                  alt="DJI Agras T40 Uzaktan Kumanda"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  Daha Hızlı Haritalama İçin Tamamen Yenilenmiş Uzaktan Kumanda
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <p className="text-gray-300">
                  8 çekirdekli işlemci, 10 dakikada 6.67 hektarlık haritalamayı
                  mümkün kılacaktır. Daha çok verimlilik için akıllı rota
                  planlamasıyla boşa giden yolculukları en aza indirir. 7 inçlik
                  yüksek parlaklıktaki geniş ekran, ayrıntılarıyla daha geniş
                  bir görünüm sunar.
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
                    <div className="text-lg font-bold text-blue-400">
                      7&quot;
                    </div>
                    <div className="text-sm text-gray-400">
                      Yüksek Parlaklık Ekran
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-lg p-4">
                    <div className="text-lg font-bold text-blue-400">Esnek</div>
                    <div className="text-sm text-gray-400">
                      Fiziksel Düğmeler
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
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
              {/* DJI Agras T40 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  DJI Agras T40
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Çapraz Dingil Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">2184 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyut (Katlanmamış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2800×3150×780 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyut (Kollar Açık, Pervaneler Katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1590×1930×780 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyut (Katlanmış)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1125×750×850 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık (Pil Hariç)
                    </div>
                    <div className="px-4 py-3 text-gray-300">38 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Püskürtme: 90 kg</div>
                      <div>Serpme: 101 kg</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kapasiteler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Kapasiteler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ayırma Tankı Hacim
                    </div>
                    <div className="px-4 py-3 text-gray-300">70 Litre</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ayırma Tankı İç Yükü
                    </div>
                    <div className="px-4 py-3 text-gray-300">50 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Püskürtme Akış Hızı
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 L/dk × 2</div>
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
                      Uçuş Süresi (90 kg)
                    </div>
                    <div className="px-4 py-3 text-gray-300">7 dk</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Uçuş Süresi (50 kg)
                    </div>
                    <div className="px-4 py-3 text-gray-300">18 dk</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 m/s</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">0°C – 40°C</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Motor Gücü
                    </div>
                    <div className="px-4 py-3 text-gray-300">4000 W/rotor</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Pervane Rotor Miktarı
                    </div>
                    <div className="px-4 py-3 text-gray-300">8</div>
                  </div>
                </div>
              </div>

              {/* Batarya */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Batarya Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      BAX601-30000mAh-52.22V
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">30000 mAh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Voltaj
                    </div>
                    <div className="px-4 py-3 text-gray-300">52.22 V</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">12 kg</div>
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
              Bisavunma Güvencesiyle DJI Agras T40
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              Koaksiyel ikiz rotor tasarımı, çift atomize püskürtme sistemi ve
              çok yönlü engel algılama ile geniş tarım arazilerinde maksimum
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

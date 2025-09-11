import Link from "next/link";
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
  title: "DJI Agras T50 | Tarımsal İlaçlama Dronu | Bisavunma",
  description:
    "DJI Agras T50 profesyonel tarımsal drone. 40kg püskürtme, 50kg yayma kapasitesi. Çift atomize püskürtme sistemi, çok yönlü engel algılama ve 50°&apos;ye kadar arazi takibi.",
};

export default function DJIAgrasT50Page() {
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
                  <span className="text-white">DJI Agras T50</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Bisavunma Güvencesiyle
                  <br />
                  <span className="text-green-400">DJI Agras T50</span>
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  Profesyonel Tarımsal Çözüm
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  DJI AGRAS T50 drone, tarım operasyonlarını yeni bir seviyeye
                  taşıyor. 40 kg&apos;lık püskürtme veya 50 kg&apos;lık yayma
                  yüklerini taşıyabilen güçlü bir koaksiyel çift rotorlu tahrik
                  sistemi ve torka dayanıklı bölünmüş yapıya sahiptir.
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
              <VideoContainer>
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t50/agras.webm"
                  className="object-contain relative z-10 w-full h-full rounded-2xl"
                />
              </VideoContainer>
            </HeroScaleAnimation>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Öne Çıkan Özellikler
            </h2>
          </ScrollAnimation>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ağır Yük Kapasitesi
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>40 kg püskürtme</li>
                  <li>50 kg yayma</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Yüksek Akış Hızı
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Püskürtme: 16 L/dk</li>
                  <li>Yayma: 108 kg/dk</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sinyal İstikrarı
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Çevrimdışı işlemler</li>
                  <li>2 km O3 İletimi</li>
                  <li>Opsiyonel DJI Rölesi desteği</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Tüm Senaryolara Uyum
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Tam otomatik ve manuel çalışma</li>
                  <li>Meyve Bahçesi Modu</li>
                  <li>Değişken Oranlı Uygulama</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Çok Yönlü Engel Algılama
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Çok yönlü engellerden kaçınma</li>
                  <li>50°&apos;ye kadar arazi takibi</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Dörtlü Yağmurlama (Opsiyonel)
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  <li>Uçuş sırasında ters yönlü püskürtme</li>
                  <li>4 sprinkler püskürtme, akış hızı 24 L/dak </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Püskürtme Sistemi */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Çift Atomize Püskürtme Sistemi
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  DJI AGRAS T50&apos;nin Çift Atomize Püskürtme Sistemi,
                  dakikada 16 litreye kadar ultra yüksek akış hızı sağlar (2
                  yağmurlama püskürtme). Bu sistem, ince ve düzgün sprey
                  damlacıkları üretir ve sızıntı yapmaz. Yüksek uygulama hacmi
                  gerektiren işlemler için DJI AGRAS T50, akış hızını dakikada
                  24 litreye (4 sprinkler püskürtme) çıkaran ek bir çift
                  santrifüj sprinkler ile donatılabilir. Manuel uçuş sırasında,
                  dört sprinklerli Ters Yönlü Püskürtme kullanarak dönüş
                  yapmadan işlemleri kolaylaştırabilirsiniz.
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
                        Çift pompalı akış hızı 24 L/dak&apos;ya kadar, önceki
                        nesle göre %100 artış
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
                        Çift Atomize Santrifüjlü Sistemler
                      </h4>
                      <p className="text-sm text-gray-400">
                        Damlacık boyutu 50-500 μm arasında ayarlanabilir
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
                        Yepyeni Solenoid Vanalar
                      </h4>
                      <p className="text-sm text-gray-400">
                        Hassas başlatma ve durdurma işlevi, sızıntıyı önler
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <ScrollAnimation direction="right">
              <VideoContainer className="relative h-[400px] rounded-xl overflow-hidden">
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t50/cift-atomize.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-purple-600/10" />
              <video
                src="/products/dji-enterprise/dji-agras-t50/manyetik-cark.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Manyetik Tahrikli Çark Pompası
              </h2>
              <p className="text-gray-300">
                Çift pompalı akış hızı 24 L/dak’ya kadar ulaşır. Bu, tarlaların,
                meyve bahçelerinin ve yüksek sıcaklıktaki ortamların
                ihtiyaçlarını karşılamak için önceki nesle göre %100’lük bir
                artış demektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yayma Sistemi */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-1 lg:order-1">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  Yepyeni Solenoid Vanalar
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <p className="text-gray-300">
                  Hassas başlatma ve durdurma işlevi, sızıntıyı önler.
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation
              direction="right"
              className="relative h-[400px] rounded-xl overflow-hidden order-2 lg:order-2"
            >
              <VideoContainer>
                <LazyVideo
                  src="/products/dji-enterprise/dji-agras-t50/solenoid-vana.mp4"
                  className="object-cover w-full h-full"
                />
              </VideoContainer>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Güvenlik ve Dayanıklılık */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Güvenilirlik ve Güvenlik
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Binoküler Görüş ve Çift Radar
              </h3>
              <p className="text-gray-400">
                DJI AGRAS T50, daha yüksek algılama hassasiyeti için ön ve arka
                Aktif Faz Dizili Radarlarla donatılmıştır. Bu sistemler birlikte
                çalışarak Çok Yönlü Engel Algılama sağlar ve güvenli
                operasyonları garanti eder.
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Test Edilmiş Dayanıklılık
              </h3>
              <p className="text-gray-400">
                Püskürtme ve yayma işlemleri sık ve yoğun bir şekilde
                gerçekleştirilir. Drone, yüzlerce güvenilirlik testinden
                başarıyla geçmiş olup, ana gövdesi güvenli çalışmayı sağlamak
                için yeterince dayanıklıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DJI AGRAS T50 Yayma Sistemi */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              DJI AGRAS T50 Yayma Sistemi
            </h2>
          </ScrollAnimation>
          <p className="text-gray-300">
            Saatte 1.500 kg yayma kapasitesine sahiptir. DJI AGRAS T50’nin yeni
            yayıcı ve spiral kanallı eğirme diski, yayma verimliliğini ve
            düzgünlüğünü önemli ölçüde artırır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">50 kg Yük</h3>
              <p className="text-sm text-gray-400 mt-2">
                Hızlı yeniden doldurma için 75 L maksimum kapasite ve
                genişletilmiş yükleme kapısı sunar.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Pürüzsüz Yayılma
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Yayıcının torku iki katına çıkarılmış ve deşarj kapağı, 108
                kg/dakikaya kadar akış hızına izin vermek üzere
                genişletilmiştir.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">Serpme</h3>
              <p className="text-sm text-gray-400 mt-2">
                DJI AGRAS T50’nin spiral kanallı döner diski, yayılmayı daha
                homojen hale getirir.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Düşük Oranlı Yayılma
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Küçük hazne kapaklarıyla düşük akış hızıyla serpme doğruluğunu
                artırabilirsiniz.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Gerçek Zamanlı Tartım
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                DJI AGRAS T50, kalan yükü gerçek zamanlı olarak izlemenize
                olanak tanıyan bir tartım sensörüyle donatılmıştır.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Hızlı Sökme ve Temizleme
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Yayıcı, kolay bakım için hızlı bir şekilde sökülüp
                temizlenebilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenilirlik, Dayanıklılık ve Güvenlik */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Güvenilirlik, dayanıklılık ve güvenlik açısından test edildi.
            </h2>
          </ScrollAnimation>
          <p className="text-gray-300">
            Püskürtme ve yayma işlemleri sık ve yoğun bir şekilde
            gerçekleştirilir ve karmaşık ortamlarda kullanılır. Drone, yüzlerce
            güvenilirlik testinden başarıyla geçmiş olup, ana gövdesi güvenli
            çalışmayı sağlamak için yeterince dayanıklıdır.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Binoküler Görüş ve Çift Radar
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                DJI AGRAS T50, daha yüksek algılama hassasiyeti için ön ve arka
                Aktif Faz Dizili Radarlarla donatılmıştır; bu radarlar iki kat
                RF kanalı içerir. Bu sistemler birlikte çalışarak Çok Yönlü
                Engel Algılama özelliğini mümkün kılarak operasyonel güvenliği
                artırır. Ayrıca, iki set Binoküler Görüş sensörü, DJI AGRAS
                T50’nin araziyi doğru bir şekilde algılamasına olanak tanır ve
                dik yokuşlarda otomatik olarak engelleri aşma ve Arazi Takibi
                için engelleri detaylı olarak tanımlar.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Bir drone kullanarak ilaçlama ve gübreleme işlemleri
                gerçekleştirebilirsiniz.
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                DJI AGRAS T50, havadan keşif, püskürtme ve yayma işlevlerini tek
                bir drone üzerinde birleştirir. Yüksek çözünürlüklü FPV gimbal
                kamerası, tarla ve meyve bahçesi görüntülerini gerçek zamanlı
                olarak yakalamanıza olanak tanır. DJI RC Plus ve RTK hizmeti ile
                entegre edildiğinde, yüksek çözünürlüklü haritalar oluşturarak
                sonraki otomatik uçuş rotalarını destekler. DJI AGRAS T50, tek
                bir düğmeye basarak kalkış yapabilir ve otomatik işlemleri
                gerçekleştirebilir.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Yüksek Parlaklıkta Geniş Ekran Uzaktan Kumanda
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                DJI RC Plus, 7 inç yüksek parlaklıkta bir ekrana ve 8 çekirdekli
                işlemciye sahiptir, bu da sorunsuz işlemler için güçlü bir
                platform sağlar. Akıllı rota planlama özelliği, dolu depoyla kat
                edilen mesafeleri en aza indirerek operasyon verimliliğini
                önemli ölçüde artırır. Manuel mod ise kullanıcıya işlemleri
                istediği zaman kontrol etme imkanı
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white">
                Yakıt Tasarruflu Hızlı Şarj{" "}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                D12000iE Çok İşlevli Inverter Jeneratörü, elektronik yakıt
                enjeksiyonu (EFI) teknolojisine sahiptir ve yakıt kullanımında
                %15 tasarruf sağlar. DB1560 Akıllı Uçuş Pilleri, Hava Soğutmalı
                Isı Emici üzerinden şarj olabilir ve 9 dakikada ultra hızlı şarj
                imkanı sunar. C10000 Akıllı Şarj Cihazı, pilleri doğrudan şebeke
                gücüyle şarj edebilme özelliğine sahiptir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operasyon ve Kumanda */}

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
                      <div>39,9 kg (akü hariç)</div>
                      <div>52 kg (akü dahil)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Kalkış Ağırlığı [1]
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Püskürtme: 92 kg (deniz seviyesinde)</div>
                      <div>Yayma: 103 kg (deniz seviyesinde)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Çapraz Dingil Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">2200 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>
                        2800×3085×820 mm (kollar ve pervaneler açık değil)
                      </div>
                      <div>
                        1590×1900×820 mm (kollar açık değil, pervaneler katlı)
                      </div>
                      <div>1115×750×900 mm (kollar ve pervaneler katlı)</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Gezinme Doğruluk Aralığı (güçlü GNSS ile)
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>RTK etkin: Yatay ±10 cm, Dikey ±10 cm</div>
                      <div>
                        RTK devre dışı: Yatay ±60 cm, Dikey ±30 cm (radar etkin:
                        ±10 cm)
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      RTK/GNSS Çalışma Frekansı
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-2">
                      <div>
                        <span className="text-white">RTK:</span> GPS L1/L2,
                        GLONASS F1/F2, BeiDou B1I/B2I/B3I, Galileo E1/E5b, QZSS
                        L1/L2
                      </div>
                      <div>
                        <span className="text-white">GNSS:</span> GPS L1,
                        GLONASS F1, BeiDou B1I, Galileo E1, QZSS L1
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maks. Yapılandırılabilir Uçuş Yarıçapı
                    </div>
                    <div className="px-4 py-3 text-gray-300">2000 m</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum Rüzgar Direnci
                    </div>
                    <div className="px-4 py-3 text-gray-300">6 m/s</div>
                  </div>
                </div>
              </div>

              {/* Motorlar */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Motorlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Stator Boyutu
                    </div>
                    <div className="px-4 py-3 text-gray-300">100×33 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      KV
                    </div>
                    <div className="px-4 py-3 text-gray-300">48 dev/dak/V</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Güç
                    </div>
                    <div className="px-4 py-3 text-gray-300">4000 W/rotor</div>
                  </div>
                </div>
              </div>

              {/* Pervaneler */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Pervaneler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Malzeme
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Naylon karbon fiber filament
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyut
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      54 inç (1371,6 mm)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Dönüş Çapı
                    </div>
                    <div className="px-4 py-3 text-gray-300">1375 mm</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Miktar
                    </div>
                    <div className="px-4 py-3 text-gray-300">8</div>
                  </div>
                </div>
              </div>

              {/* Çift Atomize Püskürtme Sistemi – Püskürtme Tankı */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Çift Atomize Püskürtme Sistemi – Püskürtme Tankı
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Malzeme
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Plastik (HDPE)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Hacim
                    </div>
                    <div className="px-4 py-3 text-gray-300">40 litre</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      İşletim Yükü [1]
                    </div>
                    <div className="px-4 py-3 text-gray-300">40 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Miktar
                    </div>
                    <div className="px-4 py-3 text-gray-300">1</div>
                  </div>
                </div>
              </div>

              {/* Çift Atomize Püskürtme Sistemi – Yağmurlama Sistemleri */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Çift Atomize Püskürtme Sistemi – Yağmurlama Sistemleri
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Modeli
                    </div>
                    <div className="px-4 py-3 text-gray-300">LX8060SZ</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Miktar
                    </div>
                    <div className="px-4 py-3 text-gray-300">2</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Nozul Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      1570 mm (Arka)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Damlacık Boyutu
                    </div>
                    <div className="px-4 py-3 text-gray-300">50–500 µm</div>
                  </div>
                </div>
                <div className="mt-4 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                  <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                    Etkili Püskürtme Genişliği [2]
                  </div>
                  <div className="px-4 py-3 text-gray-300">
                    4–11 m (mahsullerin üzerinde 3 m yükseklikte)
                  </div>
                </div>
              </div>

              {/* Çift Atomize – Dağıtım Pompaları */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Çift Atomize – Dağıtım Pompaları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tip
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Pervaneli pompa (manyetik tahrik)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Miktar
                    </div>
                    <div className="px-4 py-3 text-gray-300">2</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tek Pompa Akış
                    </div>
                    <div className="px-4 py-3 text-gray-300">0–12 L/dk</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maks. Akış
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      16 L/dk (2 sprinkler); 24 L/dk (4 sprinkler)
                    </div>
                  </div>
                </div>
              </div>

              {/* T50 Yayılma Sistemi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  T50 Yayılma Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Uyumlu Malzeme Çapı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      0,5–5 mm kuru granüller
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Tank Hacmi
                    </div>
                    <div className="px-4 py-3 text-gray-300">75 L</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      İç Yük [10]
                    </div>
                    <div className="px-4 py-3 text-gray-300">50 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Yayılma Genişliği
                    </div>
                    <div className="px-4 py-3 text-gray-300">8 m</div>
                  </div>
                </div>
              </div>

              {/* Aşamalı Dizinli Radar Sistemi */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Aşamalı Dizinli Radar Sistemi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      RD241608RF (ileri) • RD241608RB (arka)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Arazi Takip
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Haritalamasız maks. eğim: 50°</div>
                      <div>Yükseklik algılama: 1–50 m • Stabil: 1,5–30 m</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Engellerden Kaçınma [4]
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>Algılama aralığı (çok yönlü): 1–50 m</div>
                      <div>
                        Görüş alanı: İleri radar 360° yatay, ±45° dikey (koni);
                        Arka radar 360° dikey, ±45° yatay
                      </div>
                      <div>
                        Koşullar: Engel üstünde 1,5 m, yatay ≤10 m/s, dikey ≤3
                        m/s
                      </div>
                      <div>
                        Güvenlik sınırı mesafesi: 2,5 m • Yön: 360° çok yönlü
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Binoküler Görüş Sistemi
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>
                        Ölçüm aralığı: 0,5–29 m • Etkili algılama hızı: ≤10 m/s
                      </div>
                      <div>
                        Görüş açısı: Yatay 90°, Dikey 106° • Çalışma ortamı: iyi
                        aydınlatma
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uzaktan Kumanda (RM700B) */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Uzaktan Kumanda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">RM700B</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı [5]
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2,4000–2,4835 GHz • 5,725–5,850 GHz
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maks. İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      7 km (FCC), 5 km (SRRC), 4 km (MIC/CE)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Wi‑Fi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Wi‑Fi 6 • 2.4/5.15–5.25/5.725–5.85 GHz
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Bluetooth
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      BT 5.1 • 2.4000–2.4835 GHz
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      GNSS
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      GPS + Galileo + BeiDou
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ekran
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      7.02&quot; 1920×1200, 1200 cd/m², LCD dokunmatik
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">-20° – 50° C</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Depolama Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      ≤1 ay: -30°–45° C • 1–3 ay: -30°–35° C • 6–12 ay: -30°–30°
                      C
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Sıcaklığı
                    </div>
                    <div className="px-4 py-3 text-gray-300">5° – 40° C</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Dahili Pil
                    </div>
                    <div className="px-4 py-3 text-gray-300">3 s 18 dk</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Harici Pil
                    </div>
                    <div className="px-4 py-3 text-gray-300">2 s 42 dk</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Türü
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      USB‑C 65W (20 V maks.) önerilir
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2 saat (kapalıyken, standart DJI şarj cihazı)
                    </div>
                  </div>
                </div>
              </div>

              {/* DB1560 Akıllı Uçuş Bataryası */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  DB1560 Akıllı Uçuş Bataryası
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      BAX702-30000mAh-52.22V
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">~12,1 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">30000 mAh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Nominal Voltaj
                    </div>
                    <div className="px-4 py-3 text-gray-300">52.22 V</div>
                  </div>
                </div>
              </div>

              {/* D12000iE Çok Fonksiyonlu İnverter Jeneratör */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  D12000iE Çok Fonksiyonlu İnverter Jeneratör
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çıkış Kanalları
                    </div>
                    <div className="px-4 py-3 text-gray-300 space-y-1">
                      <div>DC: 42–59.92 V / 9000 W</div>
                      <div>Hava Soğutmalı Isı Emici: 12 V / 6 A</div>
                      <div>AC: 230 V / 1500 W veya 120 V / 750 W [8]</div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Pil Şarj Süresi [11]
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      9–12 dakika (DB1560)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Yakıt Tankı
                    </div>
                    <div className="px-4 py-3 text-gray-300">30 L</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Başlangıç Yöntemi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Tek Tuş Başlatma
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maks. Motor Gücü
                    </div>
                    <div className="px-4 py-3 text-gray-300">12000 W</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Yakıt
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      RON ≥ 91, alkol &lt; %10 (BR: RON ≥ 91, alkol %27)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ref. Yakıt Tüketimi [9]
                    </div>
                    <div className="px-4 py-3 text-gray-300">500 ml/kWh</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Motor Yağı
                    </div>
                    <div className="px-4 py-3 text-gray-300">SJ 10W-40</div>
                  </div>
                </div>
              </div>

              {/* C10000 Akıllı Güç Kaynağı */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  C10000 Akıllı Güç Kaynağı
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">CSX702-9500</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      400×266×120 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">~11,4 kg</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Giriş/Çıkış (220–240 VAC)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Giriş: 50/60 Hz, 24 A maks • Çıkış: 59.92 VDC, 175 A, 9000
                      W maks
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Giriş/Çıkış (100–120 VAC)
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Giriş: 50/60 Hz, 16 A maks • Çıkış: 59.92 VDC, 60 A, 3000
                      W maks
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Süresi [11]
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      DB1560 pilini 9–12 dakikada tam şarj eder
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Koruma
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      Aşırı voltaj, aşırı şarj, düşük voltaj, aşırı sıcaklık
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:col-span-2">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Güvenliği
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      AC kablo, güç kablosu ve konektör koruması
                    </div>
                  </div>
                </div>
              </div>

              {/* Röle */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-white mb-2">Röle</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Model
                    </div>
                    <div className="px-4 py-3 text-gray-300">RL01-65</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Boyutlar
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      120×110×100 mm
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Ağırlık
                    </div>
                    <div className="px-4 py-3 text-gray-300">≤575 g</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Giriş Voltajı [6]
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      9 V 3 A / 12 V 2.5 A / 15 V 2 A
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Güç Tüketimi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      9 W (SRRC), 12 W (FCC)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Kapasite
                    </div>
                    <div className="px-4 py-3 text-gray-300">6500 mAh</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Operasyon Zamanı
                    </div>
                    <div className="px-4 py-3 text-gray-300">4 saat</div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Çalışma Frekansı [5]
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2.4 GHz • 5.725–5.850 GHz
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Maksimum İletim Mesafesi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      5 km (SRRC), 4 km (MIC/KCC/CE), 7 km (FCC)
                    </div>
                  </div>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl">
                    <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                      Şarj Süresi
                    </div>
                    <div className="px-4 py-3 text-gray-300">
                      2 s 20 dk (standart DJI şarj cihazı)
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                  <div className="px-4 py-3 border-b border-neutral-800 text-white font-medium">
                    IP Derecesi [6]
                  </div>
                  <div className="px-4 py-3 text-gray-300">IP55</div>
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
              Bisavunma Güvencesiyle DJI Agras T50
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-gray-300 mb-8">
              Profesyonel tarımsal ilaçlama ve yayma çözümleri için bizimle
              iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için
              hazır.
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

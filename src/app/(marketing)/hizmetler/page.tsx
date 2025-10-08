import {
  MapPin,
  Cog,
  GraduationCap,
  Code,
  Target,
  Shield,
  Eye,
  Radio,
  Wrench,
  ChevronDown,
} from "lucide-react";
import DotGrid from "@/components/DotGrid";
import {
  ScrollAnimation,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import Footer from "@/components/Footer";

export default function Hizmetler() {
  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section id="hero" className="relative pt-24 overflow-hidden h-screen">
          {/* Background DotGrid - only for hero section */}
          <div className="absolute inset-0 -z-20">
            <DotGrid
              dotSize={5}
              gap={25}
              baseColor="#3d3d3d"
              activeColor="#7daaf5"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          {/* Background Overlay - only for hero section */}
          <div className="absolute inset-0 -z-10 bg-gray-950/80" />
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <HeroAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  Hizmetlerimiz
                </span>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
                  Kapsamlı{" "}
                  <span className="text-gray-300">Savunma Çözümleri</span>
                </h1>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.6}>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                  Saha keşfinden yazılım çözümlerine, kurulumdan eğitime kadar
                  savunma teknolojilerinde tam kapsamlı hizmetler sunuyoruz.
                </p>
              </HeroAnimation>
              <HeroAnimation direction="up" delay={0.8}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#saha-kesfi"
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                  >
                    Saha Keşfi
                  </a>
                  <a
                    href="#kurulum-entegrasyon"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                  >
                    Kurulum & Entegrasyon
                  </a>
                  <a
                    href="#egitim-destek"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                  >
                    Eğitim & Destek
                  </a>
                </div>
              </HeroAnimation>
            </div>
          </div>
        </section>

        {/* Saha Keşfi & Konumlandırma */}
        <section
          id="saha-kesfi"
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                  Saha Keşfi & Konumlandırma
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Stratejik <span className="text-blue-300">Konumlandırma</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  Her operasyon sahası, yalnızca bulunduğu coğrafya ile değil;
                  iklim koşulları, arazi yapısı, elektromanyetik yoğunluğu,
                  çevresel gürültü seviyeleri, sivil yerleşim yakınlığı ve
                  tehdit profilleri açısından da benzersizdir. Bu nedenle,
                  güvenlik sistemlerinin planlanması basit bir &quot;cihaz
                  yerleştirme&quot; sürecinden ibaret değildir; çok boyutlu
                  analiz ve mühendislik yaklaşımı gerektirir.
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <ScrollAnimation direction="left" delay={1.0}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-xl hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-300 animate-pulse" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            Saha Keşfi & Konumlandırma
                          </h3>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation direction="up" delay={1.2}>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>
                            BİSAVUNMA, uzman mühendis ekibiyle sahada
                            gerçekleştirdiği ayrıntılı keşif ve analiz
                            çalışmaları sayesinde, operasyon sahasının tüm
                            güvenlik açıklarını ve potansiyel tehditlerini
                            ortaya koyar. Bu analizler yalnızca mevcut
                            tehlikelere karşı değil, gelecekteki hibrit tehdit
                            senaryolarına karşı da planlama yapılmasını sağlar.
                          </p>
                          <p>
                            Sonuç olarak, BİSAVUNMA&apos;nın saha keşif
                            çalışmaları, kör noktasız 360° kapsama sağlayarak
                            savunma zincirini en güçlü hale getirir.
                          </p>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-600" />
                            Radar Yerleşimi
                          </h4>
                          <p className="text-sm text-gray-300">
                            Her radarın kapsama alanı, menzili, açısal
                            hassasiyeti ve coğrafi engeller dikkate alınarak en
                            verimli noktalar belirlenir. Kör noktaların ortadan
                            kaldırılmasıyla 360° kesintisiz koruma sağlanır.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Radio className="h-5 w-5 text-blue-600" />
                            RF Tespit & Sinyal İstihbaratı
                          </h4>
                          <p className="text-sm text-gray-300">
                            Sahadaki elektromanyetik spektrum analiz edilir,
                            kritik frekans bantları incelenir, düşman iletişim
                            ve kontrol sinyalleri için yön bulma noktaları
                            seçilir.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-600" />
                            Drone Tespit Sistemleri
                          </h4>
                          <p className="text-sm text-gray-300">
                            Özellikle sürü drone saldırılarına, alçak irtifa
                            uçuşlarına ve GPS spoofing gibi elektronik harp
                            senaryolarına karşı çok katmanlı bir yerleşim planı
                            hazırlanır.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-blue-600" />
                            Elektro-Optik & Termal Sensörler
                          </h4>
                          <p className="text-sm text-gray-300">
                            Gündüz-gece, tüm hava koşullarında net teşhis
                            sağlayacak şekilde stratejik konumlandırma yapılır.
                            Radar ve RF sistemlerini tamamlayıcı bir katman
                            oluşturur.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            Kritik Altyapı Analizi
                          </h4>
                          <p className="text-sm text-gray-300">
                            Askeri üs bölgeleri, sınır karakolları,
                            havaalanları, enerji santralleri ve devlet binaları
                            gibi stratejik bölgeler için risk haritaları
                            çıkarılır.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Kurulum & Entegrasyon */}
        <section
          id="kurulum-entegrasyon"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/20 px-4 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  Kurulum & Entegrasyon
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Birleşik <span className="text-emerald-300">Savunma Ağı</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  Kurulum süreci, sadece cihazların montajı değildir; aynı
                  zamanda birleşik bir savunma ağı inşasıdır. BİSAVUNMA, her bir
                  alt sistemi tek bir C2 (Command & Control) yazılım
                  platformunda birleştirerek, kullanıcıya tam entegrasyonlu bir
                  operasyon kabiliyeti kazandırır.
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-emerald-900/20 rounded-xl hover:scale-110 transition-transform duration-300">
                            <Cog className="h-8 w-8 text-emerald-300 animate-spin" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            Kurulum & Entegrasyon
                          </h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>Entegre edilen sistemler:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>
                              Radar + RF Tespit + Sinyal İstihbarat Modülleri
                            </li>
                            <li>Drone Tespit & Anti-Drone Jammer Çözümleri</li>
                            <li>Elektro-Optik & Termal Sensörler</li>
                            <li>Hard-Kill Otomatik Silah Sistemleri</li>
                          </ul>
                          <p>
                            Bu sayede BİSAVUNMA&apos;nın çözümleri yalnızca
                            reaktif değil, proaktif savunma yetenekleri sunar.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-emerald-600" />
                            Entegrasyonun Sağladığı Faydalar
                          </h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>
                              • Anlık veri paylaşımı sayesinde, bir sistemin
                              tespit ettiği hedef diğerine otomatik aktarılır.
                            </li>
                            <li>
                              • Tek ekran üzerinden yönetim: Operatör, tüm
                              tehditleri tek merkezden takip eder.
                            </li>
                            <li>
                              • Hibrit tehditlere karşı koordinasyon: Örneğin,
                              radar bir hedefi tespit eder, RF sistemleri
                              frekansı doğrular, EO/IR görüntüyle kimlik
                              doğrulaması yapılır, jammer bağlantıyı keser ve
                              gerekirse hard-kill sistem imhayı gerçekleştirir.
                            </li>
                            <li>
                              • Siber güvenli entegrasyon: Tüm sistemler,
                              şifreli iletişim protokolleriyle dış müdahalelere
                              kapalı şekilde çalışır.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Eğitim & Teknik Destek */}
        <section
          id="egitim-destek"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                  Eğitim & Teknik Destek
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Uzmanlık <span className="text-purple-300">Transferi</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  BİSAVUNMA, teslim ettiği sistemlerle birlikte kullanıcılarına
                  uzmanlık transferi yapar. Eğitimler, gerçek operasyonel
                  senaryolar üzerinden uygulamalı olarak verilir. Ayrıca
                  BİSAVUNMA, sistemlerinin her zaman en yüksek verimle
                  çalışabilmesi için 7/24 teknik destek sağlar.
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <ScrollAnimation direction="left" delay={1.0}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-purple-900/20 rounded-xl hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="h-8 w-8 text-purple-300 animate-bounce" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            Eğitim & Teknik Destek
                          </h3>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation direction="up" delay={1.2}>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <p>
                            Eğitimler, gerçek operasyonel senaryolar üzerinden
                            uygulamalı olarak verilir:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>RF Spektrum Analizi & Yön Bulma (DF)</li>
                            <li>
                              Drone Tespit ve Anti-Drone Operasyon Prosedürleri
                            </li>
                            <li>Jammer Kullanımı & Soft-Kill Stratejileri</li>
                            <li>
                              Elektro-Optik & Termal Sistemlerle Hedef Teşhisi
                              ve takibi
                            </li>
                            <li>Hard-Kill Silah Sistemleri Kullanımı</li>
                            <li>
                              Senaryo Bazlı Simülasyon Eğitimleri (havaalanı
                              güvenliği, sınır hattı, üs bölgesi vb.)
                            </li>
                          </ul>
                          <p>
                            Ayrıca BİSAVUNMA, sistemlerinin her zaman en yüksek
                            verimle çalışabilmesi için 7/24 teknik destek
                            sağlar:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Uzaktan yazılım güncellemeleri,</li>
                            <li>Arıza tespiti ve hızlı müdahale,</li>
                            <li>Düzenli bakım ve performans kontrolleri,</li>
                            <li>Operasyonel danışmanlık hizmetleri.</li>
                          </ul>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-purple-600" />
                            Uzmanlık Transferi
                          </h4>
                          <p className="text-sm text-gray-300">
                            BİSAVUNMA, teslim ettiği sistemlerle birlikte
                            kullanıcılarına uzmanlık transferi yapar. Eğitimler,
                            gerçek operasyonel senaryolar üzerinden uygulamalı
                            olarak verilir.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-purple-600" />
                            7/24 Teknik Destek
                          </h4>
                          <p className="text-sm text-gray-300">
                            Sistemlerin her zaman en yüksek verimle
                            çalışabilmesi için kapsamlı teknik destek ve bakım
                            hizmetleri sunuyoruz.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Yazılım Çözümleri */}
        <section
          id="yazilim-cozumleri"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <ScrollAnimation direction="fade" delay={0.2}>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                  Yazılım Çözümleri
                </span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Özgün C2{" "}
                  <span className="text-orange-300">Yazılım Platformu</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <p className="mt-4 text-gray-300 max-w-4xl mx-auto">
                  Modern savunma mimarisinde donanım kadar yazılım da hayati
                  öneme sahiptir. BİSAVUNMA&apos;nın geliştirdiği özgün C2
                  yazılım platformu, tüm donanımları tek bir çatı altında
                  toplayarak karar üstünlüğü sağlar.
                </p>
              </ScrollAnimation>
            </div>

            <div className="max-w-6xl mx-auto">
              <ScrollAnimation direction="up" delay={0.8}>
                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-xl hover:scale-110 transition-transform duration-300">
                            <Code className="h-8 w-8 text-orange-600 dark:text-orange-300 animate-pulse" />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            Yazılım Çözümleri
                          </h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                          <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>
                              Radar, RF, EO/IR, jammer ve hard-kill sistemlerini
                              tek ekran üzerinde entegre eder.
                            </li>
                            <li>
                              Gerçek zamanlı RF spektrum analizi ve waterfall
                              görselleştirmeleri sunar.
                            </li>
                            <li>
                              Yapay zekâ destekli algoritmalar, drone türlerini
                              otomatik sınıflandırır.
                            </li>
                            <li>
                              Proaktif savunma altyapısı, sürü drone
                              saldırılarını önceden tahmin eder.
                            </li>
                            <li>
                              Siber güvenlik protokolleri ile dış müdahalelere
                              karşı güvenlik sağlar.
                            </li>
                            <li>
                              Raporlama & Arşivleme Modülü, tüm operasyonları
                              kayıt altına alır ve analiz raporları üretir.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={1.0}>
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Code className="h-5 w-5 text-orange-600" />
                            Özgün C2 Yazılım Platformu
                          </h4>
                          <p className="text-sm text-gray-300">
                            BİSAVUNMA&apos;nın geliştirdiği özgün C2 yazılım
                            platformu, tüm donanımları tek bir çatı altında
                            toplayarak karar üstünlüğü sağlar.
                          </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-orange-600" />
                            Modern Savunma Mimarisi
                          </h4>
                          <p className="text-sm text-gray-300">
                            Modern savunma mimarisinde donanım kadar yazılım da
                            hayati öneme sahiptir. Kapsamlı entegrasyon ve
                            güvenlik özellikleri ile üstün performans.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section
        id="cta"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200 hover:bg-emerald-400/20 transition-colors duration-300">
              Hizmetlerimiz hakkında
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-emerald-200 transition-colors duration-300">
              Kapsamlı savunma çözümleri
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="mt-3 text-gray-300 hover:text-gray-200 transition-colors duration-300">
              Saha keşfinden yazılım çözümlerine, kurulumdan eğitime kadar
              savunma teknolojilerinde tam kapsamlı hizmetler sunuyoruz.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                İletişime Geç
              </a>
              <a
                href="/cozumlerimiz"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:border-white/40"
              >
                Çözümlerimizi İncele
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group"
          style={{ animation: "bounce 2s infinite" }}
          title="Aşağı Kaydır"
        >
          <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
        </div>
      </div>
    </div>
  );
}

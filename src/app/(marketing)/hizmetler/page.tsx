import {
  MapPin,
  Cog,
  GraduationCap,
  Code,
  Search,
  Target,
  Shield,
  Eye,
  Radio,
  Satellite,
  Wrench,
  ChevronDown,
} from "lucide-react";
import DotGrid from "@/components/DotGrid";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";

export default function Hizmetler() {
  return (
    <div className="min-h-screen">
    <div>
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative pt-24 overflow-hidden h-screen"
      >
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
        <div className="absolute inset-0 -z-10 bg-white/90 dark:bg-gray-950/50" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <HeroAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Hizmetlerimiz
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Kapsamlı{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  Savunma Çözümleri
                </span>
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Kurulum & Entegrasyon
                </a>
                <a
                  href="#egitim-destek"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
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
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                Saha Keşfi & Konumlandırma
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stratejik{" "}
                <span className="text-blue-700 dark:text-blue-300">
                  Konumlandırma
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Her operasyon sahası benzersizdir. Uzman mühendis ekibimizle gerçekleştirdiğimiz 
                ayrıntılı keşif ve analiz çalışmaları ile 360° kesintisiz koruma sağlıyoruz.
              </p>
            </ScrollAnimation>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-xl hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-300 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Saha Keşfi & Konumlandırma
                        </h3>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={1.2}>
                      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                          Her operasyon sahası, yalnızca bulunduğu coğrafya ile değil; iklim koşulları, 
                          arazi yapısı, elektromanyetik yoğunluğu, çevresel gürültü seviyeleri, sivil yerleşim 
                          yakınlığı ve tehdit profilleri açısından da benzersizdir.
                        </p>
                        <p>
                          BİSAVUNMA, uzman mühendis ekibiyle sahada gerçekleştirdiği ayrıntılı keşif ve 
                          analiz çalışmaları sayesinde, operasyon sahasının tüm güvenlik açıklarını ve 
                          potansiyel tehditlerini ortaya koyar.
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation direction="right" delay={1.0}>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Radar Yerleşimi
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Her radarın kapsama alanı, menzili, açısal hassasiyeti ve coğrafi engeller 
                          dikkate alınarak en verimli noktalar belirlenir.
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Radio className="h-5 w-5 text-blue-600" />
                          RF Tespit & Sinyal İstihbaratı
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Sahadaki elektromanyetik spektrum analiz edilir, kritik frekans bantları 
                          incelenir, düşman iletişim sinyalleri için yön bulma noktaları seçilir.
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          Drone Tespit Sistemleri
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Sürü drone saldırılarına, alçak irtifa uçuşlarına ve GPS spoofing gibi 
                          elektronik harp senaryolarına karşı çok katmanlı yerleşim planı.
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
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Kurulum & Entegrasyon
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Birleşik{" "}
                <span className="text-emerald-700 dark:text-emerald-300">
                  Savunma Ağı
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Kurulum süreci, sadece cihazların montajı değildir; aynı zamanda birleşik bir 
                savunma ağı inşasıdır. Tek C2 platformunda tam entegrasyon.
              </p>
            </ScrollAnimation>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <ScrollAnimation direction="left" delay={1.0}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-800 rounded-xl hover:scale-110 transition-transform duration-300">
                          <Cog className="h-8 w-8 text-emerald-600 dark:text-emerald-300 animate-spin" />
                  </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Kurulum & Entegrasyon
                  </h3>
                      </div>
                      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                          BİSAVUNMA, her bir alt sistemi tek bir C2 (Command & Control) yazılım 
                          platformunda birleştirerek, kullanıcıya tam entegrasyonlu bir operasyon 
                          kabiliyeti kazandırır.
                        </p>
                        <p>
                          Bu sayede BİSAVUNMA'nın çözümleri yalnızca reaktif değil, proaktif 
                          savunma yetenekleri sunar.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={1.0}>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Radio className="h-5 w-5 text-emerald-600" />
                          Entegre Sistemler
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Radar + RF Tespit + Sinyal İstihbarat</li>
                          <li>• Drone Tespit & Anti-Drone Jammer</li>
                          <li>• Elektro-Optik & Termal Sensörler</li>
                          <li>• Hard-Kill Otomatik Silah Sistemleri</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-emerald-600" />
                          Entegrasyon Faydaları
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Anlık veri paylaşımı</li>
                          <li>• Tek ekran üzerinden yönetim</li>
                          <li>• Hibrit tehditlere karşı koordinasyon</li>
                          <li>• Siber güvenli entegrasyon</li>
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
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600 dark:bg-purple-800 dark:text-purple-300">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                Eğitim & Teknik Destek
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Uzmanlık{" "}
                <span className="text-purple-700 dark:text-purple-300">
                  Transferi
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                BİSAVUNMA, teslim ettiği sistemlerle birlikte kullanıcılarına uzmanlık transferi yapar. 
                Gerçek operasyonel senaryolar üzerinden uygulamalı eğitimler ve 7/24 teknik destek.
              </p>
            </ScrollAnimation>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <ScrollAnimation direction="left" delay={1.0}>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-xl hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-300 animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Eğitim & Teknik Destek
                        </h3>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={1.2}>
                      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                          Eğitimler, gerçek operasyonel senaryolar üzerinden uygulamalı olarak verilir. 
                          Sistemlerin her zaman en yüksek verimle çalışabilmesi için 7/24 teknik destek sağlarız.
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <ScrollAnimation direction="right" delay={1.0}>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Search className="h-5 w-5 text-purple-600" />
                          Eğitim Konuları
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• RF Spektrum Analizi & Yön Bulma</li>
                          <li>• Drone Tespit ve Anti-Drone Operasyon</li>
                          <li>• Jammer Kullanımı & Soft-Kill Stratejileri</li>
                          <li>• Elektro-Optik & Termal Sistemler</li>
                          <li>• Hard-Kill Silah Sistemleri</li>
                          <li>• Senaryo Bazlı Simülasyon Eğitimleri</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Wrench className="h-5 w-5 text-purple-600" />
                          7/24 Teknik Destek
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Uzaktan yazılım güncellemeleri</li>
                          <li>• Arıza tespiti ve hızlı müdahale</li>
                          <li>• Düzenli bakım ve performans kontrolleri</li>
                          <li>• Operasyonel danışmanlık hizmetleri</li>
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

      {/* Yazılım Çözümleri */}
      <section
        id="yazilim-cozumleri"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-medium text-orange-600 dark:bg-orange-800 dark:text-orange-300">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                Yazılım Çözümleri
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Özgün C2{" "}
                <span className="text-orange-700 dark:text-orange-300">
                  Yazılım Platformu
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Modern savunma mimarisinde donanım kadar yazılım da hayati öneme sahiptir. 
                BİSAVUNMA'nın geliştirdiği özgün C2 yazılım platformu ile karar üstünlüğü sağlıyoruz.
              </p>
            </ScrollAnimation>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <ScrollAnimation direction="left" delay={1.0}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-xl hover:scale-110 transition-transform duration-300">
                          <Code className="h-8 w-8 text-orange-600 dark:text-orange-300 animate-pulse" />
                  </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Yazılım Çözümleri
                  </h3>
                      </div>
                      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                          BİSAVUNMA'nın geliştirdiği özgün C2 yazılım platformu, tüm donanımları 
                          tek bir çatı altında toplayarak karar üstünlüğü sağlar.
                        </p>
                        <p>
                          Yapay zekâ destekli algoritmalar, drone türlerini otomatik sınıflandırır 
                          ve proaktif savunma altyapısı ile sürü drone saldırılarını önceden tahmin eder.
                        </p>
                </div>
        </div>
            </ScrollAnimation>
                  <ScrollAnimation direction="right" delay={1.0}>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Eye className="h-5 w-5 text-orange-600" />
                          Platform Özellikleri
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Tek ekran üzerinde entegrasyon</li>
                          <li>• Gerçek zamanlı RF spektrum analizi</li>
                          <li>• Yapay zekâ destekli algoritmalar</li>
                          <li>• Proaktif savunma altyapısı</li>
                        </ul>
          </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-orange-600" />
                          Güvenlik & Raporlama
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Siber güvenlik protokolleri</li>
                          <li>• Dış müdahalelere karşı güvenlik</li>
                          <li>• Raporlama & Arşivleme Modülü</li>
                          <li>• Operasyon analiz raporları</li>
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

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BİSAVUNMA</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Savunma teknolojilerinde uzman çözümler sunan, RF sistemlerinden 
                elektro-optik çözümlere kadar kapsamlı hizmetler veren güvenilir partneriniz.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
              <ul className="space-y-2">
                <li><a href="/hizmetler#saha-kesfi" className="text-gray-400 hover:text-emerald-400 transition-colors">Saha Keşfi</a></li>
                <li><a href="/hizmetler#kurulum-entegrasyon" className="text-gray-400 hover:text-emerald-400 transition-colors">Kurulum & Entegrasyon</a></li>
                <li><a href="/hizmetler#egitim-teknik-destek" className="text-gray-400 hover:text-emerald-400 transition-colors">Eğitim & Destek</a></li>
                <li><a href="/hizmetler#yazilim-cozumleri" className="text-gray-400 hover:text-emerald-400 transition-colors">Yazılım Çözümleri</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li><a href="/iletisim" className="text-gray-400 hover:text-emerald-400 transition-colors">İletişim</a></li>
                <li><a href="/destek" className="text-gray-400 hover:text-emerald-400 transition-colors">Destek</a></li>
                <li><a href="/cozumlerimiz" className="text-gray-400 hover:text-emerald-400 transition-colors">Çözümlerimiz</a></li>
                <li><a href="/sektorler" className="text-gray-400 hover:text-emerald-400 transition-colors">Sektörler</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 BİSAVUNMA. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>

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
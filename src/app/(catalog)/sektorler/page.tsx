import { MDiv } from '@/components/sections/Motion'
import { Shield, Building, Globe, Target, ChevronDown, Radio, Search, Eye, Satellite, Cog, Headset, Zap, Wrench, Settings, Users, Lock } from 'lucide-react'

export default async function Sektorler() {
  const sectors = [
    {
      title: "Askeri Tesisler",
      description: "Askeri üsler, eğitim merkezleri ve savunma tesisleri için kapsamlı güvenlik ve izleme çözümleri.",
      icon: Shield,
      color: "blue",
      features: ["RF Sinyal İstihbarat", "Elektro-Optik Sistemler", "Radar Teknolojileri", "Jammer Sistemleri"]
    },
    {
      title: "Enerji & Kritik Altyapılar",
      description: "Enerji santralleri, iletim hatları ve kritik altyapı tesisleri için güvenlik ve koruma sistemleri.",
      icon: Building,
      color: "green",
      features: ["Tesis Güvenliği", "Uzaktan İzleme", "Acil Müdahale", "Veri Analizi"]
    },
    {
      title: "Liman & Tersaneler",
      description: "Denizcilik endüstrisi ve liman tesisleri için özelleştirilmiş güvenlik ve operasyonel çözümler.",
      icon: Globe,
      color: "purple",
      features: ["Liman Güvenliği", "Gemi İzleme", "Operasyonel Verimlilik", "Risk Yönetimi"]
    },
    {
      title: "Sınır Güvenliği",
      description: "Sınır kontrolü, göçmen takibi ve ulusal güvenlik için gelişmiş teknoloji çözümleri.",
      icon: Target,
      color: "orange",
      features: ["Sınır İzleme", "Göçmen Tespiti", "Uluslararası İşbirlikleri", "Saha Desteği"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Sektörlerimiz
            </span>
            <div className="overflow-hidden">
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700">
                Her Sektöre <span className="text-gray-700 dark:text-gray-300">Özel Çözümler</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                Savunma, güvenlik ve teknoloji alanlarında farklı sektörlerin ihtiyaçlarına yönelik kapsamlı çözümler sunuyoruz.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#askeri-tesisler" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors">
                Askeri Tesisler
              </a>
              <a href="#enerji-altyapi" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Enerji & Altyapı
              </a>
              <a href="#liman-tersaneler" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Liman & Tersaneler
              </a>
              <a href="#sinir-guvenligi" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Sınır Güvenliği
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler */}
      <section id="askeri-tesisler" className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" /> Askeri Tesisler
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Askeri Tesisler İçin Güvenlik Çözümleri
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Askeri üsler, eğitim merkezleri ve savunma tesisleri için kapsamlı güvenlik ve izleme çözümleri.
            </p>
          </div>

        </div>
      </section>

      {/* Askeri Tesisler Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Askeri Tesis Görseli</p>
                    <p className="text-sm text-blue-500 dark:text-blue-500 mt-2">Güvenlik ve izleme sistemleri</p>
                  </div>
                </div>
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Sağ taraf - Yazı */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" /> Askeri Tesisler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Güvenlik ve İzleme Çözümleri
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Askeri tesisler için gelişmiş güvenlik ve izleme sistemleri sunuyoruz. RF sinyal istihbarat, elektro-optik sistemler ve radar teknolojileri ile kapsamlı koruma sağlıyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:text-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">RF Sinyal İstihbarat</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Spektrum analizi ve sinyal çözümleme sistemleri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:text-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Elektro-Optik Sistemler</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Görüntüleme, izleme ve hedefleme teknolojileri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:text-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Radar Teknolojileri</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Durumsal farkındalık ve hedef tespiti</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enerji & Kritik Altyapılar */}
      <section id="enerji-altyapi" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-600 dark:bg-green-800 dark:text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Enerji & Kritik Altyapılar
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Kritik Altyapı Güvenliği
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enerji santralleri, iletim hatları ve kritik altyapı tesisleri için güvenlik ve koruma sistemleri.
            </p>
          </div>

        </div>
      </section>

      {/* Enerji & Kritik Altyapılar Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-24 h-24 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <p className="text-green-600 dark:text-green-400 font-medium">Enerji Tesisleri Görseli</p>
                    <p className="text-sm text-green-500 dark:text-green-500 mt-2">Kritik altyapı güvenliği</p>
                  </div>
                </div>
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Sağ taraf - Yazı */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-600 dark:bg-green-800 dark:text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Enerji & Kritik Altyapılar
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Kritik Altyapı Koruma Sistemleri
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Enerji santralleri, iletim hatları ve kritik altyapı tesisleri için güvenlik ve koruma sistemleri. 7/24 izleme, acil müdahale ve operasyonel verimlilik sağlıyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:text-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Tesis Güvenliği</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Kritik altyapı koruma sistemleri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:text-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Uzaktan İzleme</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">7/24 tesis izleme ve kontrol</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:text-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Acil Müdahale</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Hızlı müdahale ve alarm sistemleri</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-6 py-3 text-sm font-semibold hover:bg-green-700 transition-colors">
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler */}
      <section id="liman-tersaneler" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600 dark:bg-purple-800 dark:text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Liman & Tersaneler
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Denizcilik Endüstrisi Çözümleri
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Denizcilik endüstrisi ve liman tesisleri için özelleştirilmiş güvenlik ve operasyonel çözümler.
            </p>
          </div>

        </div>
      </section>

      {/* Liman & Tersaneler Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Liman Tesisleri Görseli</p>
                    <p className="text-sm text-purple-500 dark:text-purple-500 mt-2">Denizcilik güvenliği</p>
                  </div>
                </div>
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Sağ taraf - Yazı */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600 dark:bg-purple-800 dark:text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Liman & Tersaneler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Denizcilik Endüstrisi Çözümleri
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Denizcilik endüstrisi ve liman tesisleri için özelleştirilmiş güvenlik ve operasyonel çözümler. Gemi izleme, liman güvenliği ve operasyonel verimlilik sağlıyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:text-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Liman Güvenliği</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Denizcilik tesisleri güvenlik sistemleri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:text-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Gemi İzleme</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Gemi takibi ve liman trafiği yönetimi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:text-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Operasyonel Verimlilik</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Liman operasyonları optimizasyonu</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-purple-600 text-white px-6 py-3 text-sm font-semibold hover:bg-purple-700 transition-colors">
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği */}
      <section id="sinir-guvenligi" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-medium text-orange-600 dark:bg-orange-800 dark:text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Sınır Güvenliği
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ulusal Güvenlik Çözümleri
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sınır kontrolü, göçmen takibi ve ulusal güvenlik için gelişmiş teknoloji çözümleri.
            </p>
          </div>

        </div>
      </section>

      {/* Sınır Güvenliği Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                    <p className="text-orange-600 dark:text-orange-400 font-medium">Sınır Güvenliği Görseli</p>
                    <p className="text-sm text-orange-500 dark:text-orange-500 mt-2">Ulusal güvenlik sistemleri</p>
                  </div>
                </div>
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Sağ taraf - Yazı */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-medium text-orange-600 dark:bg-orange-800 dark:text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Sınır Güvenliği
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Ulusal Güvenlik Çözümleri
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Sınır kontrolü, göçmen takibi ve ulusal güvenlik için gelişmiş teknoloji çözümleri. Sınır izleme, göçmen tespiti ve uluslararası işbirlikleri sağlıyoruz.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-600 dark:text-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Sınır İzleme</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Sınır hattı izleme ve kontrol sistemleri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-600 dark:text-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Göçmen Tespiti</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Kaçak göçmen tespit ve takip sistemleri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-600 dark:text-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Uluslararası İşbirlikleri</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Sınır ötesi güvenlik işbirlikleri</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-white px-6 py-3 text-sm font-semibold hover:bg-orange-700 transition-colors">
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sektörünüze Özel Çözümler
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Askeri tesislerden sınır güvenliğine, enerji altyapısından liman tesislerine kadar her sektör için özelleştirilmiş çözümler sunuyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors">
              İletişime Geç
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors">
              Teklif Al
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div 
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg pointer-events-none"
          style={{ animation: 'bounce 2s infinite' }}
          title="Aşağı Kaydır"
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">BİSAVUNMA</h3>
              <p className="text-gray-400">
                Savunma teknolojilerinde yenilikçi çözümler ve güvenilir
                sistemler.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Ürünler</h4>
              <ul className="space-y-2">
                {[
                  "RF Sistemleri",
                  "Radar Sistemleri",
                  "Sinyal İstihbarat",
                  "Elektro-Optik",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Hizmetler
              </h4>
              <ul className="space-y-2">
                {[
                  "Sistem Entegrasyonu",
                  "Teknik Destek",
                  "Eğitim",
                  "Danışmanlık",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                İletişim
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:info@bisavunma.com"
                    className="hover:text-white transition-colors"
                  >
                    info@bisavunma.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+90212XXXXXXX"
                    className="hover:text-white transition-colors"
                  >
                    +90 212 XXX XX XX
                  </a>
                </li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400">
            <p>© 2024 BİSAVUNMA. Tüm hakları saklıdır.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                KVKK
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Çerezler
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Şartlar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
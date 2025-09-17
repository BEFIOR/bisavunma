import { Shield, Building, Globe, Target, ChevronDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default async function Sektorler() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen bg-gray-950">
        <BackgroundBeams />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
              Sektörlerimiz
            </span>
            <div className="overflow-hidden">
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700">
                Sektörlere{" "}
                <span className="text-gray-300">
                  Göre
                </span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                Her sektörün kendine özgü güvenlik ihtiyaçlarına yönelik 
                Anti-Drone ve C-UAS çözümleri ile kapsamlı koruma sağlıyoruz.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#askeri-tesisler"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
              >
                Askeri Tesisler
              </a>
              <a
                href="#enerji-altyapi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Enerji & Altyapı
              </a>
              <a
                href="#liman-tersaneler"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Liman & Tersaneler
              </a>
              <a
                href="#sinir-guvenligi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Sınır Güvenliği
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler */}
      <section
        id="askeri-tesisler"
        className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
              Askeri Tesisler
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Askeri Tesisler
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Askeri üsler, harekât merkezleri, radar istasyonları ve havaalanları; 
              bir devletin ulusal güvenlik yapısının omurgasını oluşturur.
            </p>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-400 font-medium">
                      Askeri Tesis Görseli
                    </p>
                    <p className="text-sm text-blue-500 mt-2">
                      Güvenlik ve izleme sistemleri
                    </p>
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
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                  Askeri Tesisler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone Güvenlik Doktrini
                </h2>
              </div>

              <p className="text-lg text-gray-300">
                Bu kritik tesisler, günümüzde yalnızca konvansiyonel tehditlere değil, 
                aynı zamanda küçük boyutlu dronelar, sürü drone saldırıları ve izinsiz 
                uçak uçuşları gibi modern ve asimetrik tehditlere de maruz kalmaktadır.
              </p>

              <p className="text-lg text-gray-300">
                BİSAVUNMA, bu kritik alanları korumak için Anti-Drone teknolojilerini 
                merkeze alan, çok katmanlı ve entegre bir güvenlik doktrini sunar:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Radar Tabanlı Erken Uyarı
                    </h3>
                    <p className="text-sm text-gray-300">
                      En küçük hedefleri dahi düşük irtifada ve düşük radar kesit alanıyla tespit eder
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      RF Tespit ve Sinyal İstihbaratı
                    </h3>
                    <p className="text-sm text-gray-300">
                      Drone ve kumanda arasındaki iletişim linkini belirler, frekans analizi ile operatörün konumunu ortaya çıkarır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Elektro-Optik ve Termal Sistemler
                    </h3>
                    <p className="text-sm text-gray-300">
                      Gündüz/gece koşullarında görsel teşhis ve doğrulama yapar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Soft-Kill Anti-Drone Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Yalnızca ihtiyaç halinde devreye alınarak hedef droneları yön kaybına uğratır veya güvenli şekilde düşmelerini sağlar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Hard-Kill Anti-Drone Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Otomatik silah entegrasyonları ile tehdit unsurlarını doğrudan imha eder
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mt-6">
                Tüm bu unsurlar, C2 komuta kontrol altyapısı ile entegre çalışır. 
                Radarın belirlediği hedef, RF tespitiyle doğrulanır, elektro-optik 
                sistemlerle teşhis edilir, ardından soft-kill ve hard-kill sistemleriyle 
                etkisiz hale getirilir. Böylece askeri tesisler, 7/24 uçtan uca Anti-Drone 
                ve hava güvenlik sistemi ile korunur.
              </p>

              <div className="pt-4">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enerji & Kritik Altyapılar */}
      <section
        id="enerji-altyapi"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-4 py-1.5 text-xs font-medium text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
              Enerji & Kritik Altyapılar
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Enerji & Kritik Altyapılar
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Enerji santralleri, barajlar, petrol ve doğalgaz altyapıları, 
              nükleer tesisler ve telekomünikasyon merkezleri, bir ülkenin 
              ekonomik ve stratejik güvenliği için hayati öneme sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* Enerji & Kritik Altyapılar Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-24 h-24 text-green-400 mx-auto mb-4" />
                    <p className="text-green-400 font-medium">
                      Enerji Tesisleri Görseli
                    </p>
                    <p className="text-sm text-green-500 mt-2">
                      Kritik altyapı güvenliği
                    </p>
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
                <span className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-4 py-1.5 text-xs font-medium text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
                  Enerji & Kritik Altyapılar
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone ve C-UAS Çözümleri
                </h2>
              </div>

              <p className="text-lg text-gray-300">
                Bu alanlara yapılacak bir saldırı ya da sabotaj, yalnızca ulusal değil, 
                küresel ölçekte krizlere yol açabilir.
              </p>

              <p className="text-lg text-gray-300">
                BİSAVUNMA, bu altyapılar için geliştirdiği Anti-Drone ve C-UAS 
                (Counter-Unmanned Aerial Systems) çözümleri ile tesis güvenliğini 
                en üst düzeye çıkarır:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Çok Bantlı RF Tespit
                    </h3>
                    <p className="text-sm text-gray-300">
                      Farklı frekanslarda çalışan droneların tespiti yapılır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Spektrum Analizi
                    </h3>
                    <p className="text-sm text-gray-300">
                      Wrapped spektrum ve waterfall analizleri, elektromanyetik yoğunluğu anlık ve geçmiş verilerle operatöre sunar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Elektro-Optik & Termal Doğrulama
                    </h3>
                    <p className="text-sm text-gray-300">
                      Görsel teyit sağlar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Droneları anında kontrol dışı bırakır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Hard-Kill Entegrasyonu
                    </h3>
                    <p className="text-sm text-gray-300">
                      Kritik altyapıya yaklaşan dronelar doğrudan imha edilir
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mt-6">
                Tüm bu süreç, mevcut güvenlik altyapısıyla tam uyumlu entegre bir 
                sistem halinde çalışır. Böylece enerji ve kritik altyapılar, 
                Anti-Drone çözümleriyle güçlendirilmiş kesintisiz güvenlik zırhına sahip olur.
              </p>

              <div className="pt-4">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-6 py-3 text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler */}
      <section
        id="liman-tersaneler"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
              Liman & Tersaneler
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Liman & Tersaneler
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Limanlar ve tersaneler, hem uluslararası ticaretin güvenliği hem de 
              askeri deniz gücünün korunması açısından stratejik öneme sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                    <p className="text-purple-400 font-medium">
                      Liman Tesisleri Görseli
                    </p>
                    <p className="text-sm text-purple-500 mt-2">
                      Denizcilik güvenliği
                    </p>
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
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                  Liman & Tersaneler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone Odaklı Entegre Savunma
                </h2>
              </div>

              <p className="text-lg text-gray-300">
                Bu tesisler, deniz, kara ve hava kaynaklı hibrit tehditlere maruz kalırken; 
                son yıllarda özellikle drone tabanlı istihbarat, sabotaj ve saldırı 
                girişimleri artış göstermektedir.
              </p>

              <p className="text-lg text-gray-300">
                BİSAVUNMA, liman ve tersaneler için Anti-Drone odaklı entegre 
                savunma sistemleri geliştirir:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Radar Gözetim Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Hava ve deniz trafiğini eşzamanlı takip eder
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      RF İstihbarat Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Kontrol sinyallerini analiz ederek tehdit kaynaklarını belirler
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Elektro-Optik ve Termal Sensörler
                    </h3>
                    <p className="text-sm text-gray-300">
                      Droneları görsel olarak teşhis eder
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      İzinsiz droneları güvenli bir şekilde devre dışı bırakır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Hard-Kill Anti-Drone Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Yüksek hassasiyetli otomatik silahlarla tehditleri doğrudan imha eder
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mt-6">
                Bu sayede liman sahası, yalnızca klasik tehditlere karşı değil, 
                aynı zamanda drone ve insansız hava aracı saldırılarına karşı da 
                çok katmanlı bir koruma ile emniyet altına alınır.
              </p>

              <div className="pt-4">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-purple-600 text-white px-6 py-3 text-sm font-semibold hover:bg-purple-700 transition-colors"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği */}
      <section
        id="sinir-guvenligi"
        className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
              Sınır Güvenliği
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Sınır Güvenliği
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Sınır güvenliği, artık yalnızca kara hattının korunması değil, 
              aynı zamanda hava sahasının kontrol altına alınmasını da gerektirmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği Detay */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol taraf - Fotoğraf */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-orange-400 mx-auto mb-4" />
                    <p className="text-orange-400 font-medium">
                      Sınır Güvenliği Görseli
                    </p>
                    <p className="text-sm text-orange-500 mt-2">
                      Ulusal güvenlik sistemleri
                    </p>
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
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                  Sınır Güvenliği
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone ve C-UAS Çözümleri
                </h2>
              </div>

              <p className="text-lg text-gray-300">
                Özellikle küçük dronelar, izinsiz uçuş yapan hafif uçaklar ve hibrit 
                tehditler, sınır güvenliğini karmaşık bir hale getirmiştir.
              </p>

              <p className="text-lg text-gray-300">
                BİSAVUNMA, sınır güvenliği için geliştirdiği Anti-Drone ve C-UAS 
                çözümleri ile en ileri seviyede güvenlik sağlar:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Radar ve RF Tespit Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Sınır hattı boyunca kesintisiz gözetim sunar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Elektro-Optik & Termal Sistemler
                    </h3>
                    <p className="text-sm text-gray-300">
                      Sınır bölgesinde tehdit teşhisinde en yüksek doğruluk sağlar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Droneları ve uçakları anında kontrol dışı bırakır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Hard-Kill Anti-Drone Silah Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300">
                      Kritik tehditleri imha ederek sınır güvenliğini garanti altına alır
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      C2 Entegrasyonu
                    </h3>
                    <p className="text-sm text-gray-300">
                      Radar, RF, jammer, elektro-optik ve hard-kill sistemleri arasında gerçek zamanlı veri paylaşımı yapılır
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mt-6">
                Bu sayede sınır hattı, yalnızca bir gözetim hattı değil; aynı zamanda 
                tam entegre, Anti-Drone odaklı, dinamik bir savunma ekosistemine dönüşür.
              </p>

              <div className="pt-4">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-white px-6 py-3 text-sm font-semibold hover:bg-orange-700 transition-colors"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sektörünüze Özel Çözümler
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Askeri tesislerden sınır güvenliğine, enerji altyapısından liman
            tesislerine kadar her sektör için özelleştirilmiş çözümler
            sunuyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              İletişime Geç
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Arrow */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg pointer-events-none"
          style={{ animation: "bounce 2s infinite" }}
          title="Aşağı Kaydır"
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-black text-gray-300 overflow-hidden">
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
  );
}

import { ChevronDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import Footer from "@/components/Footer";

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
                Sektörlere <span className="text-gray-300">Göre</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                Her sektörün kendine özgü güvenlik ihtiyaçlarına yönelik
                Anti-Drone ve C-UAS çözümleri ile kapsamlı koruma sağlıyoruz.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              <Link
                href="/sektorler#askeri-tesisler"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
              >
                Askeri Tesisler
              </Link>
              <Link
                href="/sektorler#enerji-altyapi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Enerji & Altyapı
              </Link>
              <Link
                href="/sektorler#liman-tersaneler"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Liman & Tersaneler
              </Link>
              <Link
                href="/sektorler#sinir-guvenligi"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
              >
                Sınır Güvenliği
              </Link>
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
              Askeri üsler, harekât merkezleri, radar istasyonları ve
              havaalanları; bir devletin ulusal güvenlik yapısının omurgasını
              oluşturur.
            </p>
          </div>
        </div>
      </section>

      {/* Askeri Tesisler Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                  Askeri Tesisler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone Güvenlik Doktrini
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Bu kritik tesisler, günümüzde yalnızca konvansiyonel
                  tehditlere değil, aynı zamanda küçük boyutlu dronelar, sürü
                  drone saldırıları ve izinsiz uçak uçuşları gibi modern ve
                  asimetrik tehditlere de maruz kalmaktadır.
                </p>

                <p className="text-lg text-gray-300">
                  BİSAVUNMA, bu kritik alanları korumak için Anti-Drone
                  teknolojilerini merkeze alan, çok katmanlı ve entegre bir
                  güvenlik doktrini sunar.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-8 py-4 text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/25"
                >
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-3 gap-6">
                {/* Radar Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">
                        Radar Tabanlı Erken Uyarı
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        En küçük hedefleri dahi düşük irtifada ve düşük radar
                        kesit alanıyla tespit eder
                      </p>
                    </div>
                  </div>
                </div>

                {/* RF Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">
                        RF Tespit ve Sinyal İstihbaratı
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Drone ve kumanda arasındaki iletişim linkini belirler,
                        frekans analizi ile operatörün konumunu ortaya çıkarır
                      </p>
                    </div>
                  </div>
                </div>

                {/* Elektro-Optik Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">
                        Elektro-Optik ve Termal Sistemler
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Gündüz/gece koşullarında görsel teşhis ve doğrulama
                        yapar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soft-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">
                        Soft-Kill Anti-Drone Çözümleri
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Yalnızca ihtiyaç halinde devreye alınarak hedef
                        droneları yön kaybına uğratır veya güvenli şekilde
                        düşmelerini sağlar
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hard-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/20 hover:border-blue-700/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-800/40 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-200 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-2">
                        Hard-Kill Anti-Drone Sistemleri
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Otomatik silah entegrasyonları ile tehdit unsurlarını
                        doğrudan imha eder
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/10 to-blue-800/5 border border-blue-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  Tüm bu unsurlar, C2 komuta kontrol altyapısı ile entegre
                  çalışır. Radarın belirlediği hedef, RF tespitiyle doğrulanır,
                  elektro-optik sistemlerle teşhis edilir, ardından soft-kill ve
                  hard-kill sistemleriyle etkisiz hale getirilir. Böylece askeri
                  tesisler, 7/24 uçtan uca Anti-Drone ve hava güvenlik sistemi
                  ile korunur.
                </p>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-4 py-1.5 text-xs font-medium text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
                  Enerji & Kritik Altyapılar
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone ve C-UAS Çözümleri
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Bu alanlara yapılacak bir saldırı ya da sabotaj, yalnızca
                  ulusal değil, küresel ölçekte krizlere yol açabilir.
                </p>

                <p className="text-lg text-gray-300">
                  BİSAVUNMA, bu altyapılar için geliştirdiği Anti-Drone ve C-UAS
                  (Counter-Unmanned Aerial Systems) çözümleri ile tesis
                  güvenliğini en üst düzeye çıkarır.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-8 py-4 text-base font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-600/25"
                >
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* RF Tespit Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Çok Bantlı RF Tespit
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Farklı frekanslarda çalışan droneların tespiti yapılır
                    </p>
                  </div>
                </div>

                {/* Spektrum Analizi Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Spektrum Analizi
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Wrapped spektrum ve waterfall analizleri, elektromanyetik
                      yoğunluğu anlık ve geçmiş verilerle operatöre sunar
                    </p>
                  </div>
                </div>

                {/* Elektro-Optik Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Elektro-Optik & Termal Doğrulama
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Görsel teyit sağlar
                    </p>
                  </div>
                </div>

                {/* Soft-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Droneları anında kontrol dışı bırakır
                    </p>
                  </div>
                </div>

                {/* Hard-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/20 hover:border-green-700/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center group-hover:bg-green-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Hard-Kill Entegrasyonu
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Kritik altyapıya yaklaşan dronelar doğrudan imha edilir
                    </p>
                  </div>
                </div>
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-900/10 to-green-800/5 border border-green-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  Tüm bu süreç, mevcut güvenlik altyapısıyla tam uyumlu entegre
                  bir sistem halinde çalışır. Böylece enerji ve kritik
                  altyapılar, Anti-Drone çözümleriyle güçlendirilmiş kesintisiz
                  güvenlik zırhına sahip olur.
                </p>
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
              Limanlar ve tersaneler, hem uluslararası ticaretin güvenliği hem
              de askeri deniz gücünün korunması açısından stratejik öneme
              sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* Liman & Tersaneler Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                  Liman & Tersaneler
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone Odaklı Entegre Savunma
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Bu tesisler, deniz, kara ve hava kaynaklı hibrit tehditlere
                  maruz kalırken; son yıllarda özellikle drone tabanlı
                  istihbarat, sabotaj ve saldırı girişimleri artış
                  göstermektedir.
                </p>

                <p className="text-lg text-gray-300">
                  BİSAVUNMA, liman ve tersaneler için Anti-Drone odaklı entegre
                  savunma sistemleri geliştirir.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-purple-600 text-white px-8 py-4 text-base font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-600/25"
                >
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Radar Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Radar Gözetim Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Hava ve deniz trafiğini eşzamanlı takip eder
                    </p>
                  </div>
                </div>

                {/* RF İstihbarat Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      RF İstihbarat Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Kontrol sinyallerini analiz ederek tehdit kaynaklarını
                      belirler
                    </p>
                  </div>
                </div>

                {/* Elektro-Optik Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Elektro-Optik ve Termal Sensörler
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Droneları görsel olarak teşhis eder
                    </p>
                  </div>
                </div>

                {/* Soft-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      İzinsiz droneları güvenli bir şekilde devre dışı bırakır
                    </p>
                  </div>
                </div>

                {/* Hard-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/20 hover:border-purple-700/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Hard-Kill Anti-Drone Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Yüksek hassasiyetli otomatik silahlarla tehditleri
                      doğrudan imha eder
                    </p>
                  </div>
                </div>
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/10 to-purple-800/5 border border-purple-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  Bu sayede liman sahası, yalnızca klasik tehditlere karşı
                  değil, aynı zamanda drone ve insansız hava aracı saldırılarına
                  karşı da çok katmanlı bir koruma ile emniyet altına alınır.
                </p>
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
              aynı zamanda hava sahasının kontrol altına alınmasını da
              gerektirmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Sınır Güvenliği Detay */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Sol taraf - Görsel ve İçerik */}
            <div className="space-y-8">
              {/* Ana Başlık */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-900/20 px-4 py-1.5 text-xs font-medium text-orange-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                  Sınır Güvenliği
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  Anti-Drone ve C-UAS Çözümleri
                </h2>
              </div>

              {/* Açıklama */}
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Özellikle küçük dronelar, izinsiz uçuş yapan hafif uçaklar ve
                  hibrit tehditler, sınır güvenliğini karmaşık bir hale
                  getirmiştir.
                </p>

                <p className="text-lg text-gray-300">
                  BİSAVUNMA, sınır güvenliği için geliştirdiği Anti-Drone ve
                  C-UAS çözümleri ile en ileri seviyede güvenlik sağlar.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-white px-8 py-4 text-base font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-600/25"
                >
                  Detaylı Bilgi Al
                </Link>
              </div>
            </div>

            {/* Sağ taraf - Sistem Özellikleri */}
            <div className="space-y-6">
              {/* Sistem Kartları */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Radar ve RF Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Radar ve RF Tespit Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Sınır hattı boyunca kesintisiz gözetim sunar
                    </p>
                  </div>
                </div>

                {/* Elektro-Optik Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Elektro-Optik & Termal Sistemler
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Sınır bölgesinde tehdit teşhisinde en yüksek doğruluk
                      sağlar
                    </p>
                  </div>
                </div>

                {/* Soft-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Soft-Kill Jammer Çözümleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Droneları ve uçakları anında kontrol dışı bırakır
                    </p>
                  </div>
                </div>

                {/* Hard-Kill Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      Hard-Kill Anti-Drone Silah Sistemleri
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Kritik tehditleri imha ederek sınır güvenliğini garanti
                      altına alır
                    </p>
                  </div>
                </div>

                {/* C2 Entegrasyonu Kartı */}
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-800/20 hover:border-orange-700/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-800/40 transition-colors mb-4">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-200 animate-pulse"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      C2 Entegrasyonu
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Radar, RF, jammer, elektro-optik ve hard-kill sistemleri
                      arasında gerçek zamanlı veri paylaşımı yapılır
                    </p>
                  </div>
                </div>
              </div>

              {/* Entegrasyon Açıklaması */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-900/10 to-orange-800/5 border border-orange-800/20">
                <p className="text-base text-gray-300 leading-relaxed">
                  Bu sayede sınır hattı, yalnızca bir gözetim hattı değil; aynı
                  zamanda tam entegre, Anti-Drone odaklı, dinamik bir savunma
                  ekosistemine dönüşür.
                </p>
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
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              İletişime Geç
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Teklif Al
            </Link>
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

      <Footer />
    </div>
  );
}

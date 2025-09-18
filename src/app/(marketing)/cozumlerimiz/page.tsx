import {
  Radio,
  Target,
  Eye,
  Shield,
  Satellite,
  Zap,
  ChevronDown,
  Layers,
  Network,
  Cpu,
  Activity,
} from "lucide-react";
import DotGrid from "@/components/DotGrid";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { LazyVideo } from "@/components/animations/LazyVideo";

export default async function Cozumlerimiz() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen">
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
                Çözümlerimiz
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
                Sistem{" "}
                <span className="text-gray-300">
                  Konfigürasyonu
                </span>
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                BİSAVUNMA olarak geliştirdiğimiz çözümler, hava, kara ve deniz kuvvetleri, sahil güvenlik ve sınır güvenliği birimlerinin yanı sıra endüstriyel tesisler, enerji santralleri ve kritik altyapılar için özel olarak tasarlanmakta ve konfigüre edilmektedir.
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#sistem-konfigurasyonu"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                >
                  Sistem Konfigürasyonu
                </a>
                <a
                  href="#savunma-cozumleri"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  Savunma Çözümleri
                </a>
                <a
                  href="#entegre-guvenlik"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  Entegre Güvenlik
                </a>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Sistem Konfigürasyonu */}
      <section
        id="sistem-konfigurasyonu"
        className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        {/* Parallax layer */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-20"
        />
        {/* Soft shimmer line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-16 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
                Sistem Konfigürasyonu
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                BİSAVUNMA{" "}
                <span className="text-blue-300">
                  Çözümleri
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Sistemlerimiz, farklı görev sahalarının gereksinimlerine uyum sağlayacak şekilde özelleştirilebilir; bu sayede operasyonel etkinlik, her koşulda en üst seviyede tutulur.
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Geliştirdiğimiz araç entegre çözümleri, platformlara RF entegrasyonu, radar sistemleri, elektro-optik (EO/IR) sensörler ve jammer teknolojilerinin eklenmesi ile şekillenir. Bu çok katmanlı yapı sayesinde, ister yüksek hareket kabiliyeti gerektiren sahil güvenlik operasyonları olsun, ister sınır hattında sürekli gözetim gerektiren görevler olsun, her alanda sürdürülebilir güvenlik üstünlüğü sağlanır.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sistemlerimiz ihtiyaca yönelik olarak her ortama uygun özelleştirilir ve esnek modüler yapısı sayesinde mobil veya sabit konuşlanmalara entegre edilebilir.
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "RF Entegrasyonu",
                  desc: "Platformlara RF entegrasyonu ve spektrum yönetimi",
                  Icon: Radio,
                },
                {
                  title: "Radar Sistemleri",
                  desc: "Durumsal farkındalık ve hedef tespiti",
                  Icon: Target,
                },
                {
                  title: "Elektro-Optik Sensörler",
                  desc: "EO/IR sensörler ve görüntüleme sistemleri",
                  Icon: Eye,
                },
                {
                  title: "Jammer Teknolojileri",
                  desc: "Elektronik harp ve karıştırma sistemleri",
                  Icon: Zap,
                },
                {
                  title: "Modüler Yapı",
                  desc: "Esnek ve ölçeklenebilir sistem mimarisi",
                  Icon: Layers,
                },
                {
                  title: "Mobil Entegrasyon",
                  desc: "Sabit ve mobil konuşlanma çözümleri",
                  Icon: Network,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900/20 text-blue-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {s.desc}
                    </p>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-neutral-800 my-12 p-12 max-w-5xl mx-auto">
            <div className="aspect-video w-full">
              <LazyVideo 
                src="/cozumler/cozumlerimiz.mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-full rounded-xl object-cover" 
              />
            </div>
          </div>
      
      </section>

      {/* İhtiyaca Yönelik Savunma Çözümleri */}
      <section
        id="savunma-cozumleri"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/20 px-4 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                İhtiyaca Yönelik Savunma Çözümleri
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                Modern Tehdit{" "}
                <span className="text-emerald-300">
                  Ortamında Çözümler
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Modern tehdit ortamında her operasyon farklı riskler barındırır. BİSAVUNMA, bu nedenle çözümlerini son kullanıcı isterleri ve saha ihtiyaçları doğrultusunda özelleştirmektedir.
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  İster yüksek yoğunluklu elektronik harp tehdidiyle karşılaşılan bir bölge, ister deniz trafiği yüksek bir sahil güvenlik hattı, isterse de sabotaj riskinin bulunduğu bir enerji tesisi olsun; çözümlerimiz, her bir görev için özel olarak uyarlanır.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  RF spektrum yönetiminden radar kapsama optimizasyonuna, elektro-optik sensör hassasiyetinden jammer menzil ayarına kadar tüm kritik parametreler, kullanıcı ihtiyaçlarına göre ölçeklendirilir. Böylece sahadaki birlikler maksimum operasyonel esneklik, kurumlar ise kesintisiz güvenlik elde eder.
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Elektronik Harp Tehdidi",
                  desc: "Yüksek yoğunluklu elektronik harp ortamları için çözümler",
                  Icon: Shield,
                },
                {
                  title: "Sahil Güvenlik",
                  desc: "Deniz trafiği yüksek bölgeler için özel sistemler",
                  Icon: Satellite,
                },
                {
                  title: "Enerji Tesisleri",
                  desc: "Sabotaj riski bulunan kritik altyapı koruması",
                  Icon: Zap,
                },
                {
                  title: "RF Spektrum Yönetimi",
                  desc: "Spektrum analizi ve optimizasyon çözümleri",
                  Icon: Radio,
                },
                {
                  title: "Radar Optimizasyonu",
                  desc: "Kapsama alanı ve hassasiyet optimizasyonu",
                  Icon: Target,
                },
                {
                  title: "Sensör Hassasiyeti",
                  desc: "Elektro-optik sensör ayarlama ve kalibrasyon",
                  Icon: Eye,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/20 text-emerald-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {s.desc}
                    </p>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-neutral-800 my-12 p-12 max-w-5xl mx-auto">
            <div className="aspect-video w-full">
              <LazyVideo 
                src="/cozumler/cozumler-ihtiyac.mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-full rounded-xl object-cover" 
              />
            </div>
          </div>
      </section>

      {/* Entegre Güvenlik Yaklaşımları */}
      <section
        id="entegre-guvenlik"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <ScrollAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-900/20 px-4 py-1.5 text-xs font-medium text-purple-300">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />{" "}
                Entegre Güvenlik Yaklaşımları
              </span>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                Çok Katmanlı{" "}
                <span className="text-purple-300">
                  Güvenlik Mimarisi
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="mt-4 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Tekil sistemler artık günümüzün karmaşık tehditlerine karşı yeterli değildir. Bu noktada BİSAVUNMA, entegre güvenlik yaklaşımı ile farklı sensörleri ve savunma bileşenlerini tek bir ağ üzerinde birleştirir.
              </p>
            </ScrollAnimation>
          </div>

          {/* Ana İçerik */}
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Radar, RF algılama, elektro-optik/IR ve jammer çözümlerinin koordineli çalışması sayesinde tehditler yalnızca tespit edilmekle kalmaz, aynı zamanda doğru şekilde sınıflandırılır, takip edilir ve etkisiz hale getirilir.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Bu entegrasyon, askeri birliklere operasyonel üstünlük kazandırırken, sahil ve sınır güvenliği için durumsal farkındalık oluşturur, kritik altyapı ve enerji sahaları için ise tam koruma sağlar. Sonuç olarak, sistemlerimiz yalnızca bugünün tehditlerine değil, aynı zamanda geleceğin gelişen risklerine karşı da ölçeklenebilir ve sürdürülebilir bir güvenlik çözümü sunar.
                </p>
              </div>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Radar Koordinasyonu",
                  desc: "Çoklu radar sistemlerinin entegre çalışması",
                  Icon: Target,
                },
                {
                  title: "RF Algılama Ağı",
                  desc: "Spektrum analizi ve sinyal istihbaratı",
                  Icon: Radio,
                },
                {
                  title: "Elektro-Optik/IR",
                  desc: "Görüntüleme ve termal algılama sistemleri",
                  Icon: Eye,
                },
                {
                  title: "Jammer Koordinasyonu",
                  desc: "Elektronik karıştırma ve karşı önlemler",
                  Icon: Zap,
                },
                {
                  title: "Durumsal Farkındalık",
                  desc: "Gerçek zamanlı tehdit değerlendirme",
                  Icon: Activity,
                },
                {
                  title: "Gelecek Odaklı",
                  desc: "Gelişen tehditlere karşı ölçeklenebilir çözümler",
                  Icon: Cpu,
                },
              ].map((s) => (
                <StaggerItem key={s.title}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-900/20 text-purple-300">
                      <s.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {s.desc}
                    </p>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow:
                          "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Inline */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="fade" delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
              Daha fazlası için
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white">
              İhtiyacınıza uygun çözümü birlikte tasarlayalım
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="mt-3 text-gray-300">
              Hızlı keşif görüşmesi için bizimle iletişime geçin.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.8}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                İletişime Geç
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Teklif Al
              </a>
            </div>
          </ScrollAnimation>
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

import { MDiv } from '@/components/sections/Motion'
import { Radio, Target, Search, Eye, Shield, Satellite, Cog, Headset, Settings, Zap, Lock, Users, Building, Globe, Wrench, ChevronDown } from 'lucide-react'

export default async function Cozumlerimiz() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Çözümlerimiz
            </span>
            <div className="overflow-hidden">
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700">
                Operasyonel Üstünlük İçin <span className="text-gray-700 dark:text-gray-300">Tasarlandı</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                RF'den elektro-optik sistemlere, entegrasyondan saha desteğine kadar uçtan uca çözümler sunuyoruz.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#sistem-konfigurasyonu" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors">
                Sistem Konfigürasyonu
              </a>
              <a href="#savunma-cozumleri" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Savunma Çözümleri
              </a>
              <a href="#entegre-guvenlik" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                Entegre Güvenlik
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sistem Konfigürasyonu */}
      <section id="sistem-konfigurasyonu" className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        {/* Parallax layer */}
        <div aria-hidden className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-20" />
        {/* Soft shimmer line */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" /> Sistem Konfigürasyonu
            </span>
            <div className="overflow-hidden">
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-500">
                Altyapı ve <span className="text-blue-700 dark:text-blue-300">Mimari Çözümleri</span>
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
                Modüler, ölçeklenebilir ve güvenilir sistem mimarileri
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'RF Sistemleri', desc: 'Algılama, takip ve haberleşme çözümleri', Icon: Radio },
              { title: 'Radar Sistemleri', desc: 'Durumsal farkındalık ve hedef tespiti', Icon: Target },
              { title: 'Sinyal İstihbarat', desc: 'Spektrum analizi ve sinyal çözümleme', Icon: Search },
              { title: 'Elektro-Optik', desc: 'Görüntüleme, izleme ve hedefleme', Icon: Eye },
              { title: 'Sistem Entegrasyonu', desc: 'Modüler, ölçeklenebilir mimari', Icon: Cog },
              { title: 'Teknik Destek', desc: 'Saha kurulumu, eğitim ve bakım', Icon: Headset },
            ].map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)' }} />
                <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İhtiyaca Yönelik Savunma Çözümleri */}
      <section id="savunma-cozumleri" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> İhtiyaca Yönelik Savunma Çözümleri
            </span>
            <div className="overflow-hidden">
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-500">
                Operasyonel <span className="text-emerald-700 dark:text-emerald-300">Gereksinimler</span>
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
                Saha koşullarına uygun, özelleştirilmiş savunma sistemleri
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Korumalı Sistemler', desc: 'Elektronik harp ve jammer çözümleri', Icon: Shield },
              { title: 'DJI Enterprise', desc: 'Kurumsal UAV entegrasyon ve destek', Icon: Satellite },
              { title: 'Hızlı Müdahale', desc: 'Acil durum ve kritik operasyonlar', Icon: Zap },
              { title: 'Saha Testi', desc: 'Gerçek koşullarda doğrulama', Icon: Wrench },
              { title: 'Özel Projeler', desc: 'İhtiyaca özel Ar-Ge ve teslimat', Icon: Settings },
              { title: 'Eğitim Programları', desc: 'Operatör eğitimi ve sertifikasyon', Icon: Users },
            ].map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)' }} />
                <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entegre Güvenlik Yaklaşımları */}
      <section id="entegre-guvenlik" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-medium text-purple-600 dark:bg-purple-800 dark:text-purple-300">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Entegre Güvenlik Yaklaşımları
            </span>
            <div className="overflow-hidden">
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-500">
                Kapsamlı <span className="text-purple-700 dark:text-purple-300">Güvenlik Stratejileri</span>
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
                Çok katmanlı güvenlik mimarileri ve risk yönetimi
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Siber Güvenlik', desc: 'Ağ koruması ve veri güvenliği', Icon: Lock },
              { title: 'Fiziksel Güvenlik', desc: 'Erişim kontrolü ve izleme sistemleri', Icon: Building },
              { title: 'Operasyonel Güvenlik', desc: 'Prosedür ve protokol yönetimi', Icon: Users },
              { title: 'İletişim Güvenliği', desc: 'Şifreli haberleşme ve veri aktarımı', Icon: Globe },
              { title: 'Risk Analizi', desc: 'Tehdit değerlendirme ve azaltma', Icon: Search },
              { title: 'Süreklilik Planlaması', desc: 'İş sürekliliği ve felaket kurtarma', Icon: Shield },
            ].map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)' }} />
                <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Inline */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">Daha fazlası için</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white">İhtiyacınıza uygun çözümü birlikte tasarlayalım</h2>
          <p className="mt-3 text-gray-300">Hızlı keşif görüşmesi için bizimle iletişime geçin.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#iletisim" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors">İletişime Geç</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">Teklif Al</a>
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
  );
}

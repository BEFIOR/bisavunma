import { MDiv } from '@/components/sections/Motion'
import { Radio, Target, Search, Eye, Shield, Satellite, Cog, Headset } from 'lucide-react'

export default async function Cozumlerimiz() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">Çözümlerimiz</span>
          <div className="overflow-hidden">
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-2 duration-500">Operasyonel Üstünlük İçin Tasarlandı</h1>
          </div>
          <div className="overflow-hidden">
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">RF’den elektro-optik sistemlere, entegrasyondan saha desteğine kadar uçtan uca çözümler sunuyoruz.</p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-gray-900" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'RF Sistemleri', desc: 'Algılama, takip ve haberleşme çözümleri', Icon: Radio },
              { title: 'Radar Sistemleri', desc: 'Durumsal farkındalık ve hedef tespiti', Icon: Target },
              { title: 'Sinyal İstihbarat', desc: 'Spektrum analizi ve sinyal çözümleme', Icon: Search },
              { title: 'Elektro-Optik', desc: 'Görüntüleme, izleme ve hedefleme', Icon: Eye },
              { title: 'Korumalı Sistemler', desc: 'Elektronik harp ve jammer çözümleri', Icon: Shield },
              { title: 'DJI Enterprise', desc: 'Kurumsal UAV entegrasyon ve destek', Icon: Satellite },
              { title: 'Sistem Entegrasyonu', desc: 'Modüler, ölçeklenebilir mimari', Icon: Cog },
              { title: 'Teknik Destek', desc: 'Saha kurulumu, eğitim ve bakım', Icon: Headset },
              { title: 'Özel Projeler', desc: 'İhtiyaca özel Ar-Ge ve teslimat', Icon: Cog },
            ].map((s, i) => (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ willChange: 'transform' }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)' }} />
                <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                <div aria-hidden className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)', transform: 'translateX(-20%)' }} />
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
    </div>
  );
}

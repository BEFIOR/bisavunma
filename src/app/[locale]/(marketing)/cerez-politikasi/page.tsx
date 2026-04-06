import Footer from "@/components/Footer";

export const metadata = {
  title: "Çerez Politikası | Bisavunma",
  description: "Bisavunma internet sitesi çerez politikası.",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Çerez Politikası
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Bu sayfa, Bisavunma internet sitesinde kullanılan çerezler ve benzeri
            teknolojiler hakkında bilgilendirme amacıyla hazırlanmıştır.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Çerez Nedir?</h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Çerezler, internet sitesini ziyaret ettiğinizde tarayıcınızda
              depolanan küçük metin dosyalarıdır. Site performansını iyileştirmek,
              tercihlerinizi hatırlamak ve güvenli kullanım sağlamak için
              kullanılabilir.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Kullanım Amaçları</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Sitenin temel fonksiyonlarını çalıştırmak</li>
              <li>Kullanım deneyimini geliştirmek</li>
              <li>Trafik ve performans analizleri yapmak</li>
              <li>Güvenlik ve hata tespiti süreçlerini desteklemek</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Çerez Tercihleri</h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya
              çerez kullanımı konusunda bildirim alabilirsiniz. Çerezleri devre
              dışı bırakmanız hâlinde sitenin bazı özellikleri beklediği şekilde
              çalışmayabilir.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">İletişim</h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Çerez politikası ile ilgili sorularınız için
              <span className="text-white"> info@bisavunma.com </span>
              adresi üzerinden bizimle iletişime geçebilirsiniz.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { 
  HelpCircle, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail, 
  Download, 
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  Users,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import DotGrid from "@/components/DotGrid";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";

export default async function Destek() {
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
        <div className="absolute inset-0 -z-10 bg-white/90 dark:bg-gray-950/50" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <HeroAnimation direction="fade" delay={0.2}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                Destek Merkezi
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Size Nasıl{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  Yardımcı Olabiliriz?
                </span>
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Savunma sistemlerinizle ilgili tüm sorularınız için kapsamlı destek 
                kaynaklarımız ve uzman ekibimiz burada.
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#sss"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                >
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Sık Sorulan Sorular
                </a>
                <a
                  href="#teknik-destek"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Teknik Destek
                </a>
                <a
                  href="#dokumantasyon"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Dokümantasyon
                </a>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>


      {/* SSS Bölümü */}
      <section
        id="sss"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-medium text-green-600 dark:bg-green-800 dark:text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />{" "}
              Sık Sorulan Sorular
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              En Çok Merak Edilenler
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Müşterilerimizin en sık sorduğu sorular ve cevapları
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "RF sistemleriniz hangi frekans aralıklarında çalışır?",
                answer: "RF sistemlerimiz 20 MHz'den 18 GHz'e kadar geniş bir frekans aralığında çalışır. Sistem türüne göre özel frekans bantları desteklenir."
              },
              {
                question: "Teknik destek hizmeti nasıl alabilirim?",
                answer: "Teknik destek için +90 212 XXX XX XX numaralı telefonu arayabilir, info@bisavunma.com adresine e-posta gönderebilir veya destek portalımızı kullanabilirsiniz."
              },
              {
                question: "Sistem kurulumu ne kadar sürer?",
                answer: "Sistem kurulumu, sistemin karmaşıklığına ve çevresel faktörlere bağlı olarak 1-5 gün arasında değişir. Detaylı zaman çizelgesi proje planlaması sırasında belirlenir."
              },
              {
                question: "Garanti kapsamı nedir?",
                answer: "Tüm sistemlerimiz 2 yıl garanti kapsamındadır. Garanti kapsamı, normal kullanım koşullarında ortaya çıkan donanım arızalarını kapsar."
              },
              {
                question: "Eğitim hizmeti veriyor musunuz?",
                answer: "Evet, sistem operatörleri için kapsamlı eğitim programları sunuyoruz. Hem teorik hem de pratik eğitimler verilir."
              },
              {
                question: "Yedek parça temin süresi ne kadar?",
                answer: "Yedek parçalar genellikle 1-3 iş günü içinde temin edilir. Özel parçalar için süre 1-2 hafta olabilir."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik Destek Bölümü */}
      <section
        id="teknik-destek"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-medium text-orange-600 dark:bg-orange-800 dark:text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />{" "}
              Teknik Destek
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Uzman Desteği Alın
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Teknik ekibimiz size 7/24 destek sağlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Telefon Desteği */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-lg">
              <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Telefon Desteği
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Acil durumlar için 7/24 telefon desteği
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Acil: 7/24
                  </span>
                </div>
              </div>
              <a
                href="tel:+90212XXXXXXX"
                className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 text-white px-6 py-3 text-base font-semibold hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Hemen Ara
              </a>
            </div>

            {/* E-posta Desteği */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-lg">
              <div className="p-4 bg-green-100 dark:bg-green-800 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                E-posta Desteği
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Detaylı sorularınız için e-posta desteği
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    24 saat içinde yanıt
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Detaylı dokümantasyon
                  </span>
                </div>
              </div>
              <a
                href="mailto:destek@bisavunma.com"
                className="inline-flex items-center justify-center w-full rounded-lg bg-green-600 text-white px-6 py-3 text-base font-semibold hover:bg-green-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                E-posta Gönder
              </a>
            </div>

            {/* Canlı Destek */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-lg">
              <div className="p-4 bg-purple-100 dark:bg-purple-800 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Canlı Destek
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Anlık mesajlaşma ile hızlı çözüm
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Uzman teknisyenler
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Hızlı yanıt süresi
                  </span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center w-full rounded-lg bg-purple-600 text-white px-6 py-3 text-base font-semibold hover:bg-purple-700 transition-colors">
                <MessageSquare className="h-5 w-5 mr-2" />
                Canlı Destek Başlat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dokümantasyon Bölümü */}
      <section
        id="dokumantasyon"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent dark:from-gray-900" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-medium text-indigo-600 dark:bg-indigo-800 dark:text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />{" "}
              Dokümantasyon
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Kaynak Merkezi
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sistemlerinizi daha iyi anlamak için kapsamlı kaynaklar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kullanım Kılavuzları */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Kullanım Kılavuzları
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Detaylı kullanım kılavuzları ve teknik dokümantasyon
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
              >
                <Download className="h-4 w-4 mr-1" />
                İndir
              </a>
            </div>

            {/* Video Eğitimler */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-red-100 dark:bg-red-800 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <Video className="h-6 w-6 text-red-600 dark:text-red-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Video Eğitimler
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Görsel eğitim videoları ve demo içerikleri
              </p>
              <a
                href="#"
                className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium"
              >
                <Video className="h-4 w-4 mr-1" />
                İzle
              </a>
            </div>

            {/* API Dokümantasyonu */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-green-100 dark:bg-green-800 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                API Dokümantasyonu
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Geliştiriciler için API referansları ve örnekler
              </p>
              <a
                href="#"
                className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium"
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Görüntüle
              </a>
            </div>

            {/* Teknik Notlar */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Teknik Notlar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Önemli güncellemeler ve teknik duyurular
              </p>
              <a
                href="#"
                className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                Oku
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.1\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-10" />

        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700">
              Hala Yardıma Mı İhtiyacınız Var?
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="mt-6 text-xl text-gray-300 will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              Uzman ekibimizle iletişime geçin ve sorunlarınızı birlikte çözelim.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+90212XXXXXXX"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </a>
            <a
              href="mailto:destek@bisavunma.com"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
            >
              <Mail className="h-5 w-5 mr-2" />
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 dark:bg-black text-gray-300 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-black" />
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
              <h4 className="text-sm font-semibold text-white mb-4">Destek</h4>
              <ul className="space-y-2">
                {[
                  "Sık Sorulan Sorular",
                  "Teknik Destek",
                  "Dokümantasyon",
                  "Eğitim",
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
              <ul className="space-y-2">
                {[
                  "Telefon: +90 212 XXX XX XX",
                  "E-posta: destek@bisavunma.com",
                  "7/24 Acil Destek",
                  "Canlı Destek",
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
                Kaynaklar
              </h4>
              <ul className="space-y-2">
                {[
                  "Kullanım Kılavuzları",
                  "Video Eğitimler",
                  "API Dokümantasyonu",
                  "Teknik Notlar",
                ].map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
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

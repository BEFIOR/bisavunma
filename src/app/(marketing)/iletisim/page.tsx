"use client";

import { Mail, Phone, Clock, Send, MessageCircle, Map } from "lucide-react";
import DotGrid from "@/components/DotGrid";
import { HeroAnimation } from "@/components/animations/ScrollAnimations";
import Footer from "@/components/Footer";
import EmailServiceModal from "@/components/EmailServiceModal";
import {
  trackContactForm,
  trackConversion,
  trackButtonClick,
  trackFormSubmission,
} from "@/lib/gtag";
import { useState } from "react";

export default function Iletisim() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailUrls, setEmailUrls] = useState({ gmail: "", outlook: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Form verilerini mailto linkine dönüştür
    const subject = `İletişim Formu - ${data.subject || "Genel"}`;
    const body = `
Ad Soyad: ${data.firstName} ${data.lastName}
E-posta: ${data.email}
Telefon: ${data.phone}
Şirket/Kurum: ${data.company}
Konu: ${data.subject || "Belirtilmemiş"}

Mesaj:
${data.message}
    `.trim();

    // Gmail ve Outlook seçenekleri
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@bisavunma.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=info@bisavunma.com&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Google Ads ve Analytics tracking
    trackContactForm("contact");
    trackFormSubmission("contact_form", "contact_page");

    // Google Ads conversion tracking
    if (
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID &&
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONTACT
    ) {
      trackConversion(
        process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
        process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CONTACT
      );
    }

    // URL'leri state'e kaydet ve modal'ı aç
    setEmailUrls({ gmail: gmailUrl, outlook: outlookUrl });
    setShowEmailModal(true);
    setIsSubmitting(false);
  };

  const handleGmailSelect = () => {
    // Gmail seçildiğinde yapılacak işlemler (isteğe bağlı)
    console.log("Gmail seçildi");
  };

  const handleOutlookSelect = () => {
    // Outlook seçildiğinde yapılacak işlemler (isteğe bağlı)
    console.log("Outlook seçildi");
  };

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
                İletişim
              </span>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
                Bizimle <span className="text-gray-300">İletişime Geçin</span>
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Savunma ve güvenlik çözümleriniz için uzman ekibimizle iletişime
                geçin. Size en uygun çözümü birlikte bulalım.
              </p>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.8}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#iletisim-formu"
                  className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-4 text-base font-semibold hover:bg-black transition-colors"
                >
                  İletişim Formu
                </a>
                <a
                  href="#iletisim-bilgileri"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  İletişim Bilgileri
                </a>
                <a
                  href="#ofis-lokasyonlari"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
                >
                  Ofis Lokasyonları
                </a>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section
        id="iletisim-formu"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950"
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
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/20 px-4 py-1.5 text-xs font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />{" "}
              İletişim Formu
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projenizi Birlikte Planlayalım
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              İhtiyaçlarınızı detaylı olarak paylaşın, size özel çözüm
              önerilerimizi sunalım.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Şirket/Kurum
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                    placeholder="Şirket veya kurum adınız"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="rf-sistemleri">RF Sistemleri</option>
                    <option value="elektro-optik">
                      Elektro-Optik Sistemler
                    </option>
                    <option value="radar-sistemleri">Radar Sistemleri</option>
                    <option value="jammer-sistemleri">Jammer Sistemleri</option>
                    <option value="entegrasyon">Sistem Entegrasyonu</option>
                    <option value="egitim">Eğitim ve Destek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900 text-white transition-colors resize-none"
                    placeholder="Projeniz hakkında detaylı bilgi veriniz..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() =>
                    trackButtonClick("contact_form_submit", "contact_page")
                  }
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-6 py-4 text-base font-semibold hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl border border-blue-800 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-900/20 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Hızlı İletişim
                    </h3>
                    <p className="text-sm text-gray-300">
                      7/24 destek hattımız
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-300">+90 212 954 00 36</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blue-300" />
                    <span className="text-gray-300">info@bisavunma.com</span>
                  </div>
                  <div className=" items-center gap-3 w-full h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0717215256745!2d28.657287400000005!3d41.0236868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f6e5020f77b%3A0x80e48bdc17c6a4e!2zQsSwU0FWVU5NQSBHw5xWRU5MxLBLIFZFIFJBREFSIFPEsFNURU1MRVLEsCBTQU5BWcSwIFTEsENBUkVUIEzEsE3EsFRFRCDFnsSwUktFVMSw!5e0!3m2!1sen!2str!4v1759221329033!5m2!1sen!2str"
                      width="100%"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <h2 className="text-gray-300 mt-2 text-sm">
                      Yeşilkent Mahallesi Nâzım Hikmet Bulvarı, 2011. Sk. no :
                      18, 34517 Esenyurt/İstanbul
                    </h2>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-2xl border border-emerald-800 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-900/20 rounded-xl">
                    <Clock className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-sm text-gray-300">Pazartesi - Cuma</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Pazartesi - Cuma</span>
                    <span className="text-white font-medium">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cumartesi</span>
                    <span className="text-white font-medium">
                      09:00 - 16:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Pazar</span>
                    <span className="text-white font-medium">Kapalı</span>
                  </div>
                </div>
              </div>
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
              Projenizi Hemen Başlatalım
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="mt-6 text-xl text-gray-300 will-change-transform animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              Uzman ekibimizle iletişime geçin ve savunma çözümlerinizi birlikte
              hayata geçirelim.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#iletisim-formu"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              <Send className="h-5 w-5 mr-2" />
              Hemen İletişime Geç
            </a>
            <a
              href="tel:+90212XXXXXXX"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition"
            >
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Email Service Modal */}
      <EmailServiceModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSelectGmail={handleGmailSelect}
        onSelectOutlook={handleOutlookSelect}
        gmailUrl={emailUrls.gmail}
        outlookUrl={emailUrls.outlook}
      />
    </div>
  );
}

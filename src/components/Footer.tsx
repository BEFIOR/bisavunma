import Link from "next/link";

export default function Footer() {
  const productLinks = [
    {
      label: "RF Sistemleri",
      href: "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
    },
    { label: "Radar Sistemleri", href: "/urunler/radar-sistemleri" },
    {
      label: "Sinyal İstihbarat",
      href: "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
    },
    {
      label: "Elektro-Optik",
      href: "/urunler/elektro-optik-ve-termal-sistemler",
    },
  ];

  const serviceLinks = [
    { label: "Sistem Entegrasyonu", href: "/hizmetler#kurulum-entegrasyon" },
    { label: "Teknik Destek", href: "/hizmetler#egitim-destek" },
    { label: "Eğitim", href: "/hizmetler#egitim-destek" },
    { label: "Danışmanlık", href: "/hizmetler#saha-kesfi" },
  ];

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 py-14 bg-black text-gray-300 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
      <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-poppins-bold text-white mb-4">
              BİSAVUNMA
            </h3>
            <p className="text-gray-400 font-inter-regular">
              Savunma teknolojilerinde yenilikçi çözümler ve güvenilir
              sistemler.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-poppins-semibold text-white mb-4">
              Ürünler
            </h4>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-poppins-semibold text-white mb-4">
              Hizmetler
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-poppins-semibold text-white mb-4">
              İletişim
            </h4>
            <ul className="space-y-2 text-gray-400 font-inter-regular">
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
                  href="tel:+902129540036"
                  className="hover:text-white transition-colors"
                >
                  +90 212 954 00 36
                </a>
              </li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 font-inter-regular">
          <p>© {new Date().getFullYear()} BİSAVUNMA. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link
              href="/kvkk-aydinlatma-metni"
              className="hover:text-white transition-colors"
            >
              KVKK
            </Link>
            <Link
              href="/cerez-politikasi"
              className="hover:text-white transition-colors"
            >
              Çerezler
            </Link>
            <Link
              href="/kullanim-kosullari"
              className="hover:text-white transition-colors"
            >
              Şartlar/Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

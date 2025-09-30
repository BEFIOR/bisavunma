export default function Footer() {
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
            <h4 className="text-sm font-poppins-semibold text-white mb-4">
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
                  href="tel:+90 212 954 00 36"
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
  );
}

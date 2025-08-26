"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => setActive(null)}
      className="relative group"
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="cursor-pointer text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-all duration-300 relative">
          <span>{item}</span>
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      
      <AnimatePresence>
        {active === item && (
          <motion.div 
            className="absolute top-full left-0 min-w-[280px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Invisible bridge to prevent gap */}
            <div className="h-2 bg-transparent"></div>
            
            <motion.div 
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 space-y-3">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HoveredLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <motion.a
      href={href}
      className="block text-gray-600 hover:text-gray-900 font-medium py-2 px-3 rounded-lg hover:bg-gray-50"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
};

export const Navbar = () => {
  const [active, setActive] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-800">
              BİSAVUNMA
            </Link>
          </motion.div>

          {/* Navigation Menu */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Ana Sayfa */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
            </motion.div>

            {/* Kurumsal */}
            <MenuItem setActive={setActive} active={active} item="Kurumsal">
              <HoveredLink href="/hakkimizda">Hakkımızda</HoveredLink>
              <HoveredLink href="/referanslarimiz">Referanslarımız</HoveredLink>
              <HoveredLink href="/is-ortaklarimiz">İş Ortaklarımız</HoveredLink>
            </MenuItem>

            {/* Ürünlerimiz */}
            <MenuItem setActive={setActive} active={active} item="Ürünlerimiz">
              <HoveredLink href="/rf-sistemleri">RF Sistemleri</HoveredLink>
              <HoveredLink href="/sinyal-istihbarat">Sinyal İstihbaratı (SIGINT)</HoveredLink>
              <HoveredLink href="/radar-sistemleri">Radar Sistemleri</HoveredLink>
              <HoveredLink href="/elektro-optik">Elektro-Optik & Termal Sistemler</HoveredLink>
              <HoveredLink href="/jammer-rf">Jammer & RF Efektörler</HoveredLink>
              <HoveredLink href="/dji-enterprise">DJI Türkiye Enterprise</HoveredLink>
            </MenuItem>

            {/* Çözümlerimiz */}
            <MenuItem setActive={setActive} active={active} item="Çözümlerimiz">
              <HoveredLink href="/sistem-konfigurasyonu">Sistem Konfigürasyonu</HoveredLink>
              <HoveredLink href="/savunma-cozumleri">İhtiyaca Yönelik Savunma Çözümleri</HoveredLink>
              <HoveredLink href="/entegre-guvenlik">Entegre Güvenlik Yaklaşımları</HoveredLink>
            </MenuItem>

            {/* Sektörlere Göre */}
            <MenuItem setActive={setActive} active={active} item="Sektörlere Göre">
              <HoveredLink href="/askeri-tesisler">Askeri Tesisler</HoveredLink>
              <HoveredLink href="/enerji-altyapi">Enerji & Kritik Altyapılar</HoveredLink>
              <HoveredLink href="/liman-tersane">Liman & Tersaneler</HoveredLink>
              <HoveredLink href="/sinir-guvenligi">Sınır Güvenliği</HoveredLink>
            </MenuItem>

            {/* Hizmetlerimiz */}
            <MenuItem setActive={setActive} active={active} item="Hizmetlerimiz">
              <HoveredLink href="/saha-kesfi">Saha Keşfi & Konumlandırma</HoveredLink>
              <HoveredLink href="/kurulum-entegrasyon">Kurulum & Entegrasyon</HoveredLink>
              <HoveredLink href="/egitim-destek">Eğitim & Teknik Destek</HoveredLink>
              <HoveredLink href="/yazilim-cozumleri">Yazılım Çözümleri</HoveredLink>
            </MenuItem>

            {/* Destek */}
            <MenuItem setActive={setActive} active={active} item="Destek">
              <HoveredLink href="/destek-talebi">Destek Talebi</HoveredLink>
              <HoveredLink href="/yazilim-indirme">Yazılım İndirme</HoveredLink>
              <HoveredLink href="/teknik-destek">7/24 Teknik Destek</HoveredLink>
            </MenuItem>

            {/* İletişim */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/iletisim"
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                İletişim
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

"use client";

import { usePathname, useRouter } from "@/i18n";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  const handleLanguageChange = (locale: string) => {
    setIsOpen(false);
    router.push(pathname, { locale });
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white/85 hover:text-white hover:bg-white/15 transition-all duration-200 ring-1 ring-white/15 shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xl">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▾
        </motion.span>
      </motion.button>

      {isOpen && (
        <>
          {/* Overlay for mobile */}
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-xl ring-1 ring-white/20 shadow-xl border border-white/10 overflow-hidden z-50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-emerald-500/8" />
            <div className="relative p-2 space-y-1">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    currentLocale === lang.code
                      ? "bg-white/15 text-white ring-1 ring-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {currentLocale === lang.code && (
                    <motion.div
                      layoutId="active-lang"
                      className="ml-auto w-2 h-2 rounded-full bg-emerald-400"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

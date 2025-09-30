"use client";
import { useEffect, useState, useRef } from "react";
import { parseCookies, setCookie } from "nookies";
import { ChevronDown, Globe, Loader2 } from "lucide-react";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  name: string;
  title: string;
}

// Types for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize translation engine
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue - use default one
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (lang: string) => () => {
    if (currentLanguage === lang) return; // Don't switch if already selected

    setIsLoading(true);
    // We just need to set the related cookie and reload the page
    // "/auto/" prefix is Google's definition as far as a cookie name
    setCookie(null, COOKIE_NAME, "/auto/" + lang);

    // Add a small delay to show the loading state
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const currentLang =
    languageConfig.languages.find(
      (lang: LanguageDescriptor) => lang.name === currentLanguage
    ) ||
    languageConfig.languages.find(
      (lang: LanguageDescriptor) => lang.name === languageConfig.defaultLanguage
    );

  return (
    <div className="relative notranslate" ref={dropdownRef}>
      <button
        onClick={() => !isLoading && setIsOpen(!isOpen)}
        onTouchEnd={(e) => {
          e.preventDefault();
          if (!isLoading) {
            setIsOpen(!isOpen);
          }
        }}
        disabled={isLoading}
        className={`flex items-center gap-2 px-3 py-2 text-white/85 hover:text-white hover:bg-white/6 rounded-xl transition-all duration-200 group ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Globe className="w-4 h-4" />
        )}
        <span className="font-poppins-medium text-sm">
          {isLoading ? "Yükleniyor..." : currentLang?.title}
        </span>
        {!isLoading && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {isOpen && !isLoading && (
        <div className="language-dropdown absolute top-full right-0 lg:right-0 left-0 lg:left-auto mt-2 w-full lg:w-48 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-xl overflow-hidden ring-1 ring-white/20 shadow-xl border border-white/10 z-[100] max-h-64 overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-emerald-500/8" />
          <div className="relative p-2">
            {languageConfig.languages.map((lang: LanguageDescriptor) => (
              <button
                key={lang.name}
                onClick={() => {
                  switchLanguage(lang.name)();
                  setIsOpen(false);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  if (!isLoading) {
                    switchLanguage(lang.name)();
                    setIsOpen(false);
                  }
                }}
                disabled={isLoading}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  currentLanguage === lang.name
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className="font-poppins-regular text-sm">
                  {lang.title}
                </span>
                {currentLanguage === lang.name && (
                  <div className="ml-auto w-2 h-2 bg-sky-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };

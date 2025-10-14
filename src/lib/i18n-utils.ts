/**
 * Load additional translation files based on namespace
 * This allows you to split large translation files into smaller, more manageable chunks
 */
export async function loadTranslations(
  locale: string,
  namespaces: string[] = []
) {
  try {
    // Load main translations
    const mainTranslations = await import(
      `@/data/translations/${locale}.json`
    );

    // Load additional namespaced translations
    const additionalTranslations = await Promise.all(
      namespaces.map(async (namespace) => {
        try {
          const translations = await import(
            `@/data/translations/${namespace}-${locale}.json`
          );
          return { [namespace]: translations.default[namespace] };
        } catch {
          console.warn(
            `Translation file ${namespace}-${locale}.json not found`
          );
          return {};
        }
      })
    );

    // Merge all translations
    return additionalTranslations.reduce(
      (acc, trans) => ({ ...acc, ...trans }),
      mainTranslations.default
    );
  } catch (error) {
    console.error(`Error loading translations for locale ${locale}:`, error);
    return {};
  }
}

/**
 * Get available locales
 */
export function getAvailableLocales() {
  return ["tr", "en"];
}

/**
 * Get default locale
 */
export function getDefaultLocale() {
  return "tr";
}

/**
 * Check if a locale is supported
 */
export function isSupportedLocale(locale: string): boolean {
  return getAvailableLocales().includes(locale);
}


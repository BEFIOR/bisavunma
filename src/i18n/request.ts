import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Type assertion: locale is guaranteed to be string at this point
  const validLocale = locale as string;

  // Load all translation files and merge them
  const [main, hizmetler, cozumlerimiz, sektorler, iletisim] =
    await Promise.all([
      import(`../data/translations/${validLocale}.json`),
      import(`../data/translations/hizmetler-${validLocale}.json`),
      import(`../data/translations/cozumlerimiz-${validLocale}.json`),
      import(`../data/translations/sektorler-${validLocale}.json`),
      import(`../data/translations/iletisim-${validLocale}.json`),
    ]);

  // Merge all messages
  const messages = {
    ...main.default,
    ...hizmetler.default,
    ...cozumlerimiz.default,
    ...sektorler.default,
    ...iletisim.default,
  };

  return {
    locale: validLocale,
    messages,
  };
});


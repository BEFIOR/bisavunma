import { Link } from "@/i18n";
import NextLink from "next/link";
import { getTranslations } from "next-intl/server";

export default async function CatalogNotFound() {
  const t = await getTranslations("catalogNotFound");

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">{t("title")}</h2>
          <p className="text-gray-400 mb-6">{t("description")}</p>

          {/* Navigation */}
          <div className="space-y-3">
            <Link
              href="/urunler"
              className="block w-full px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition-colors"
            >
              {t("viewAllProducts")}
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <NextLink
                href="/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint"
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                {t("productCategories.rf")}
              </NextLink>
              <NextLink
                href="/urunler/radar-sistemleri"
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                {t("productCategories.radar")}
              </NextLink>
              <NextLink
                href="/urunler/elektro-optik-ve-termal-sistemler"
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                {t("productCategories.electroOptical")}
              </NextLink>
              <NextLink
                href="/urunler/jammer-rf-efektorler"
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                {t("productCategories.jammer")}
              </NextLink>
            </div>

            <Link
              href="/"
              className="block w-full px-5 py-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t("backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

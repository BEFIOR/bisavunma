import { Link } from "@/i18n";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            404
          </h1>
          <div className="flex justify-center mb-6">
            <svg
              className="w-24 h-24 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
        <p className="text-gray-400 mb-8 text-lg">{t("description")}</p>

        {/* Navigation Suggestions */}
        <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          <Link
            href="/"
            className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
          >
            <div className="text-blue-400 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">{t("nav.home")}</p>
          </Link>

          <Link
            href="/urunler"
            className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
          >
            <div className="text-blue-400 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">
              {t("nav.products")}
            </p>
          </Link>

          <Link
            href="/cozumlerimiz"
            className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
          >
            <div className="text-blue-400 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">
              {t("nav.solutions")}
            </p>
          </Link>

          <Link
            href="/iletisim"
            className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
          >
            <div className="text-blue-400 mb-2">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">{t("nav.contact")}</p>
          </Link>
        </div>

        {/* Primary Action */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t("backHome")}
        </Link>

        {/* Search Suggestion */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            {t("searchSuggestion")}{" "}
            <Link
              href="/iletisim"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {t("contactUs")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

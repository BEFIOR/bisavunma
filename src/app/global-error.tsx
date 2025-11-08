"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="tr">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-white mb-4">
              Kritik Bir Hata Oluştu
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              Üzgünüz, uygulama beklenmedik bir hatayla karşılaştı. Lütfen
              sayfayı yenileyin.
            </p>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mb-8 p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-left">
                <p className="text-red-400 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-red-500/70 text-xs mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
              >
                Tekrar Dene
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Ana Sayfaya Dön
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm mb-4">
                Sorun devam ederse lütfen bizimle iletişime geçin
              </p>
              <Link
                href="/iletisim"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                İletişim Sayfası
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

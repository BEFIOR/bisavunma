"use client";

import { useEffect } from "react";
import { Link } from "@/i18n";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Catalog error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
          {/* Error Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Ürün Yüklenemedi
          </h2>
          <p className="text-gray-400 mb-6">
            Ürün bilgileri yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
          </p>

          {/* Error Details (development only) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-6 p-3 bg-red-950/20 border border-red-900/30 rounded text-left">
              <p className="text-red-400 text-xs font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition-colors"
            >
              Tekrar Dene
            </button>
            <Link
              href="/urunler"
              className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors"
            >
              Ürünlere Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

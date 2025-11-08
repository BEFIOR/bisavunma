"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
export default function CTASection() {
  const t = useTranslations("home");
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-black" />
      <div className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23222\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-in fade-in duration-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
            {t("cta.badge")}
          </span>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
            {t("cta.title")}
          </h2>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-inter-regular">
            {t("cta.description")}
          </p>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 text-sm font-poppins-semibold hover:bg-gray-100 transition-colors"
            >
              {t("cta.buttons.start")}
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 text-sm font-poppins-semibold hover:bg-white/10 transition-colors"
            >
              {t("cta.buttons.demo")}
            </Link>
          </div>
        </div>
        <div className="animate-in fade-in duration-500 delay-700">
          <div
            aria-hidden
            className="mx-auto mt-10 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

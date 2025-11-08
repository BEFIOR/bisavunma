"use client";

import { useTranslations } from "next-intl";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ScaleAnimation,
} from "@/components/animations/ScrollAnimations";
import { Shield, Zap, Cog } from "@/lib/icons";
import { Link } from "@/i18n";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function AboutSection() {
  const t = useTranslations("home");
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        <div>
          <ScrollAnimation direction="up">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
              {t("about.badge")}
            </span>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
              {t("about.title")}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl font-inter-regular">
              {t("about.description")}
            </p>
          </ScrollAnimation>

          <StaggerContainer
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            staggerDelay={0.1}
          >
            {[
              {
                title: t("about.values.0.title"),
                desc: t("about.values.0.description"),
                Icon: Shield,
              },
              {
                title: t("about.values.1.title"),
                desc: t("about.values.1.description"),
                Icon: Zap,
              },
              {
                title: t("about.values.2.title"),
                desc: t("about.values.2.description"),
                Icon: Cog,
              },
            ].map((i) => (
              <StaggerItem key={i.title} direction="up">
                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 shadow-sm hover:shadow-md transition">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-200">
                    <i.Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-poppins-semibold text-white">
                    {i.title}
                  </div>
                  <div className="text-sm text-gray-300 font-inter-regular">
                    {i.desc}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-poppins-semibold hover:bg-black transition-colors"
              >
                {t("about.cta.moreInfo")}
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-sm font-poppins-semibold text-white hover:bg-gray-800 transition"
              >
                {t("about.cta.contact")}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
        <div>
          <ScaleAnimation delay={0.8}>
            <div className="relative">
              {/* Section Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t("about.gallery.title")}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {/* Lazy-loaded Gallery */}
              <GalleryCarousel
                images={Array.from(
                  { length: 44 },
                  (_, i) => `/main/alt-slider/alt-${i + 1}.webp`
                )}
                className="max-w-4xl mx-auto"
              />
            </div>
          </ScaleAnimation>
        </div>
      </div>
    </section>
  );
}

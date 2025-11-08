"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Shield, Target, Satellite, Cog, ArrowRight } from "@/lib/icons";
import {
  HeroStaggerContainer,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";

export default function HeroSection() {
  const t = useTranslations("home");
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <HeroStaggerContainer
          className="space-y-10 md:space-y-12"
          staggerDelay={0.05}
        >
          {/* Main Headlines */}
          <div className="space-y-8 pt-6 md:pt-16">
            <HeroAnimation direction="fade" delay={0}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-poppins-bold text-white notranslate tracking-tight">
                BİSAVUNMA
              </h1>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.1}>
              <h2 className="text-base md:text-2xl text-gray-300 font-poppins-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-12">
                {t("hero.subtitle")}
                <br />
                <span className="text-sky-400 font-poppins-medium">
                  {t("hero.features.experience")}
                </span>{" "}
                •
                <span className="text-sky-400 font-poppins-medium">
                  {" "}
                  {t("hero.features.service")}
                </span>{" "}
                •
                <span className="text-sky-400 font-poppins-medium">
                  {" "}
                  {t("hero.features.export")}
                </span>
              </h2>
            </HeroAnimation>

            <HeroAnimation direction="up" delay={0.15}>
              <p className="text-sm md:text-lg text-gray-400 max-w-3xl md:max-w-5xl mx-auto leading-relaxed font-inter-regular px-12">
                {t.rich("hero.description", {
                  optimumSolutions: (chunks) => (
                    <span className="text-sky-400 font-inter-medium">
                      {" "}
                      {chunks}
                    </span>
                  ),
                  technicalSupport: (chunks) => (
                    <span className="text-sky-400 font-inter-medium">
                      {" "}
                      {chunks}
                    </span>
                  ),
                })}
              </p>
            </HeroAnimation>
          </div>

          {/* Key Features */}
          <HeroAnimation direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 font-inter-medium text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sky-400" />
                <span>{t("hero.features.experience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-400" />
                <span>{t("hero.features.service")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Satellite className="w-5 h-5 text-sky-400" />
                <span>{t("hero.features.export")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cog className="w-5 h-5 text-sky-400" />
                <span>{t("hero.features.support")}</span>
              </div>
            </div>
          </HeroAnimation>

          {/* Call to Action */}
          <HeroAnimation direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-12">
              <Link
                href="/urunler"
                className="bg-sky-600 hover:bg-sky-700 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg font-poppins-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </HeroAnimation>
        </HeroStaggerContainer>
      </div>
    </section>
  );
}

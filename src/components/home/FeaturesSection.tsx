"use client";

import { useTranslations } from "next-intl";
import { Radio, Shield, Brain, Cog, Zap, Satellite } from "@/lib/icons";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollAnimations";
export default function FeaturesSection() {
  const t = useTranslations("home");
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
      {/* Parallax layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'0.5\'%3E%3Cpath d=\'M0 80h160M80 0v160\'/%3E%3C/g%3E%3C/svg%3E')] bg-center bg-repeat bg-fixed opacity-20"
      />
      {/* Soft shimmer line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <div className="text-center mb-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                {t("features.badge")}
              </span>
              <div className="overflow-hidden">
                <h2 className="mt-4 text-3xl md:text-4xl font-poppins-bold tracking-tight text-white">
                  {t("features.title")}
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-inter-regular">
                  {t("features.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {[
            {
              title: t("features.items.0.title"),
              description: t("features.items.0.description"),
              Icon: Radio,
            },
            {
              title: t("features.items.1.title"),
              description: t("features.items.1.description"),
              Icon: Shield,
            },
            {
              title: t("features.items.2.title"),
              description: t("features.items.2.description"),
              Icon: Brain,
            },
            {
              title: t("features.items.3.title"),
              description: t("features.items.3.description"),
              Icon: Cog,
            },
            {
              title: t("features.items.4.title"),
              description: t("features.items.4.description"),
              Icon: Zap,
            },
            {
              title: t("features.items.5.title"),
              description: t("features.items.5.description"),
              Icon: Satellite,
            },
          ].map((f) => (
            <StaggerItem key={f.title} direction="up">
              <div className="group relative rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 will-change-transform overflow-hidden">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-gray-200">
                  <f.Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-poppins-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300 font-inter-regular">
                  {f.description}
                </p>

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"
                />
                <div
                  aria-hidden
                  className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                    transform: "translateX(-20%)",
                  }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {[
            t("features.tags.0"),
            t("features.tags.1"),
            t("features.tags.2"),
          ].map((tag) => (
            <StaggerItem key={tag} direction="up">
              <div className="rounded-xl bg-gray-900 text-white px-4 py-3 text-sm text-center hover:scale-105 transition-transform duration-300">
                {tag}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

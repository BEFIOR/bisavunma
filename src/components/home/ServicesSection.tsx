"use client";

import { useTranslations } from "next-intl";
import {
  ScrollAnimation,
  StaggerContainer,
} from "@/components/animations/ScrollAnimations";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function ServicesSection() {
  const t = useTranslations("home");
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins-bold text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-inter-regular">
              {t("services.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="" staggerDelay={0.1}>
          <ServicesAccordion
            services={[
              {
                title: t("services.items.0.title"),
                summary: t("services.items.0.summary"),
                description: t("services.items.0.description"),
                iconName: "Radio",
              },
              {
                title: t("services.items.1.title"),
                summary: t("services.items.1.summary"),
                description: t("services.items.1.description"),
                iconName: "Target",
              },
              {
                title: t("services.items.2.title"),
                summary: t("services.items.2.summary"),
                description: t("services.items.2.description"),
                iconName: "Search",
              },
              {
                title: t("services.items.3.title"),
                summary: t("services.items.3.summary"),
                description: t("services.items.3.description"),
                iconName: "Eye",
              },
              {
                title: t("services.items.4.title"),
                summary: t("services.items.4.summary"),
                description: t("services.items.4.description"),
                iconName: "Shield",
              },
              {
                title: t("services.items.5.title"),
                summary: t("services.items.5.summary"),
                description: t("services.items.5.description"),
                iconName: "Satellite",
              },
              {
                title: t("services.items.6.title"),
                summary: t("services.items.6.summary"),
                description: t("services.items.6.description"),
                iconName: "Cog",
              },
              {
                title: t("services.items.7.title"),
                summary: t("services.items.7.summary"),
                description: t("services.items.7.description"),
                iconName: "Headset",
              },
            ]}
          />
        </StaggerContainer>
      </div>
    </section>
  );
}

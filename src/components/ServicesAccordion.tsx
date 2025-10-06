"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Radio,
  Shield,
  Search,
  Eye,
  Satellite,
  Target,
  Cog,
  Headset,
} from "@/lib/icons";

interface Service {
  title: string;
  summary: string;
  description: string;
  iconName: string;
}

interface ServicesAccordionProps {
  services: Service[];
}

export default function ServicesAccordion({
  services,
}: ServicesAccordionProps) {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Icon mapping using centralized icons
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Radio,
    Shield,
    Search,
    Eye,
    Satellite,
    Target,
    Cog,
    Headset,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {services.map((svc, index) => (
        <div
          key={svc.title}
          className="group relative rounded-2xl border border-gray-800 bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          {/* Header - Clickable */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleService(index);
            }}
            className="w-full p-4 sm:p-6 text-left hover:bg-gray-800 transition-colors duration-200 focus:outline-none relative z-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gray-800 text-gray-200 flex-shrink-0">
                  {React.createElement(iconMap[svc.iconName], {
                    className: "h-5 w-5 sm:h-6 sm:w-6",
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-poppins-semibold text-white truncate">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-300 font-inter-regular line-clamp-2">
                    {svc.summary}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-2">
                {expandedService === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 transition-transform duration-200" />
                )}
              </div>
            </div>
          </button>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedService === index
                ? "max-h-96 sm:max-h-80 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="border-t border-gray-700 pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-300 font-inter-regular leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              boxShadow:
                "0 0 0 1px rgba(17,24,39,0.06), 0 12px 40px rgba(17,24,39,0.12)",
            }}
          />
          <div
            aria-hidden
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity z-0"
          />
          <div
            aria-hidden
            className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
              transform: "translateX(-20%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

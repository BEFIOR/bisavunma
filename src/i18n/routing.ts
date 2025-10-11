import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tr", "en"],

  // Used when no locale matches
  defaultLocale: "tr",

  // The `pathnames` object can be used to map internal pathnames to external pathnames
  // This is useful when you want to change the URL structure without changing the internal structure
  pathnames: {
    "/": "/",
    "/hizmetler": "/hizmetler",
    "/cozumlerimiz": "/cozumlerimiz",
    "/sektorler": "/sektorler",
    "/iletisim": "/iletisim",
    "/urunler": "/urunler",
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);


import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import { criticalCSS } from "@/lib/critical-css";
import "../globals.css";

// Optimize font loading with next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// Get site URL from environment or use default
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bisavunma.com";

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });

  const title = "BİSAVUNMA";
  // Get description with rich text variables
  const description = t.rich("description", {
    optimumSolutions: (chunks) => chunks,
    technicalSupport: (chunks) => chunks,
  }) as string;
  const siteName = "BİSAVUNMA";
  const imageUrl = `${siteUrl}/main/logo.webp`;

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords: [
      "savunma sanayi",
      "güvenlik sistemleri",
      "kamera sistemleri",
      "RF sistemleri",
      "radar sistemleri",
      "elektro-optik sistemler",
      "defense industry",
      "security systems",
    ],
    authors: [{ name: "BİSAVUNMA" }],
    creator: "BİSAVUNMA",
    publisher: "BİSAVUNMA",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: "/",
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: siteUrl,
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@bisavunma",
      site: "@bisavunma",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    verification: {
      // Google Search Console verification can be added here
      // google: "verification-code",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Critical CSS - Inline to prevent render-blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.google.com https://www.youtube.com https://youtube.com https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://maps.googleapis.com https://www.youtube.com https://youtube.com https://www.google-analytics.com https://analytics.google.com; frame-src 'self' https://docs.google.com https://www.google.com https://www.youtube.com https://youtube.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https:;"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* Google Tag Manager - Load as early as possible for tracking */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}

        {/* Google Analytics & Google Ads - Lazy loaded to prevent blocking */}
        {/* Google Analytics varsa normal şekilde yükle */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script
              id="gtag"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
        {/* Google Analytics yoksa ama Google Ads conversion tracking varsa, gtag.js yükle */}
        {/* Google Tag Manager zaten yüklü, dataLayer mevcut. Sadece gtag fonksiyonunu tanımla */}
        {!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID && (
            <Script
              id="gtag-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                `,
              }}
            />
          )}
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

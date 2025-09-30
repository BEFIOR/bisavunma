import type { Metadata } from "next";
import Script from "next/script";
import GoogleTranslateSync from "@/components/GoogleTranslateSync";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bisavunma",
  description: "Savunma Sanayi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com https://maps.googleapis.com https://www.google.com; connect-src 'self' https://translate.googleapis.com https://translate-pa.googleapis.com https://maps.googleapis.com; frame-src 'self' https://translate.google.com https://docs.google.com https://www.google.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https:;"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>
      <body className="overflow-x-hidden">
        <GoogleTranslateSync />
        <div id="google_translate_element"></div>
        {children}
      </body>
    </html>
  );
}

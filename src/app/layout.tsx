import type { Metadata } from "next";
import Script from "next/script";
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
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.google.com https://www.youtube.com https://youtube.com; connect-src 'self' https://maps.googleapis.com https://www.youtube.com https://youtube.com; frame-src 'self' https://docs.google.com https://www.google.com https://www.youtube.com https://youtube.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https:;"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

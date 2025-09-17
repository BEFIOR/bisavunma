import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const siteName = "Bi Savunma";
const siteDescription =
  "RF sistemleri, radar çözümleri, jammer ve entegre savunma teknolojileri için uçtan uca mühendislik ve entegrasyon hizmetleri.";
const siteUrl = "https://bisavunma.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "RF sistemleri",
    "radar",
    "jammer",
    "savunma sanayi",
    "elektronik harp",
    "EMSO",
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} ${inter.variable} ${poppins.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

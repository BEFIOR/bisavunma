import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bi Savunma",
  description: "Savunma Sanayi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}

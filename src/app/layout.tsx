import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar-menu";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}

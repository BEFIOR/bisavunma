import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Bisavunma Admin",
  description: "Admin Panel",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

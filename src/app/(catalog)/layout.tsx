import { Navbar } from "@/components/layout/navbar";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}


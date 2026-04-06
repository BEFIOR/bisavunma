import NavbarServer from "@/components/layout/navbar.server";
import Footer from "@/components/Footer";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavbarServer />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

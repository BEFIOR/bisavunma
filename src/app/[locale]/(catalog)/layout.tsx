import NavbarServer from "@/components/layout/navbar.server";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavbarServer />
      </header>
      <main>{children}</main>
    </>
  );
}

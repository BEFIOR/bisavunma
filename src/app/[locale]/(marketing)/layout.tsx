import NavbarServer from "@/components/layout/navbar.server";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        {/* Server wrapper feeds dynamic categories into Navbar */}
        <NavbarServer />
      </header>
      <main>{children}</main>
    </>
  );
}

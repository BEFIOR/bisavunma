import { Navbar } from "@/components/layout/navbar";
import navigationSections from "@/config/navigation";
import type { NavSection, NavGroup } from "@/types/navigation";
import { listCategories } from "@/server/repositories/categories";

// Ensure Navbar rerenders on each request to reflect latest links
export const revalidate = 0;

export default async function NavbarServer() {
  const categories = await listCategories();
  // Map selected categories to custom static pages
  const staticRoutes: Record<string, string> = {
    "rf-sistemleri-ve-sinyal-istihbarat-sigint":
      "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
    "radar-sistemleri": "/urunler/radar-sistemleri",
    // Support both DB slug variants for consistency
    "elektro-optik-termal-sistemler": "/urunler/elektro-optik-termal-sistemler",
    "elektro-optik-ve-termal-sistemler":
      "/urunler/elektro-optik-ve-termal-sistemler",
    "jammer-rf-efektorler": "/urunler/jammer-rf-efektorler",
    "jammer-ve-rf-efektorler": "/urunler/jammer-rf-efektorler",
    "dji-turkiye-enterprise": "/urunler/dji-turkiye-enterprise",
  };

  const dynamicItems = categories.map((c) => ({
    title: c.title,
    href: staticRoutes[c.slug] ?? `/urunler/${c.slug}`,
  }));

  const sections: NavSection[] = navigationSections.map((s) => {
    if (s.type === "group" && s.title === "Ürünlerimiz") {
      const group: NavGroup = { ...s, items: dynamicItems };
      return group;
    }
    return s;
  });

  return <Navbar sections={sections} />;
}

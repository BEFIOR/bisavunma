import { Navbar } from "@/components/layout/navbar";
import navigationSections from "@/config/navigation";
import type { NavSection, NavGroup } from "@/types/navigation";
import { getStaticCategories } from "@/lib/categories";

// Use static categories for better SSG performance
export const revalidate = 3600; // 1 hour - categories are mostly static

export default async function NavbarServer() {
  const categories = getStaticCategories();
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

  const dynamicItems = categories.map((c) => {
    // Map category slugs to translation keys
    const keyMap: Record<string, string> = {
      "rf-sistemleri-ve-sinyal-istihbarat-sigint": "rf",
      "radar-sistemleri": "radar",
      "elektro-optik-termal-sistemler": "electroOptical",
      "elektro-optik-ve-termal-sistemler": "electroOptical",
      "jammer-rf-efektorler": "jammer",
      "jammer-ve-rf-efektorler": "jammer",
      "dji-turkiye-enterprise": "dji",
    };

    return {
      title: c.title,
      href: staticRoutes[c.slug] ?? `/urunler/${c.slug}`,
      key: keyMap[c.slug] ?? c.slug,
    };
  });

  const sections: NavSection[] = navigationSections.map((s) => {
    if (s.type === "group" && s.title === "Ürünlerimiz") {
      const group: NavGroup = { ...s, items: dynamicItems };
      return group;
    }
    return s;
  });

  return <Navbar sections={sections} />;
}

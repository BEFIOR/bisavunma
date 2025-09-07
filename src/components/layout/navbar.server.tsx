import { Navbar } from "@/components/layout/navbar";
import navigationSections from "@/config/navigation";
import type { NavSection, NavGroup } from "@/types/navigation";
import { listCategories } from "@/server/repositories/categories";

export default async function NavbarServer() {
  const categories = await listCategories();
  const dynamicItems = categories.map((c) => ({
    title: c.title,
    href: `/urunler/${c.slug}`,
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

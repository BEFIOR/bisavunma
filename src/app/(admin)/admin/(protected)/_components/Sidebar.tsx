"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Box, Layers, Settings } from "lucide-react";

type Item = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Ürünler", icon: Box },
  { href: "/admin/categories", label: "Kategoriler", icon: Layers },
  { href: "/admin/settings", label: "Ayarlar", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0">
      <div className="rounded-xl border border-gray-800 bg-gray-950/60 backdrop-blur-sm">
        <div className="px-4 py-3 text-sm font-medium text-gray-300 border-b border-gray-800">
          Yönetim
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            {items.map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href ||
                (href !== "/admin" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      "flex items-center gap-2 rounded-lg px-3 py-2 border border-transparent transition-colors " +
                      (active
                        ? "bg-gray-900/80 text-white border-gray-800"
                        : "text-gray-300 hover:text-white hover:bg-gray-900/50 hover:border-gray-800")
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

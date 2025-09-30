"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Product = {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  altCategory?: string | null;
};

const ORDER = [
  "RF Sensörleri",
  "Yön Bulma",
  "Platform Entegrasyonları",
  "TSCM (Dinlemeye Karşı Önlemler)",
  "RF Kayıt (I/Q)",
  "RFeye Suite (Yazılım)",
];

export default function RfSidebar({
  products,
  basePath = "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
}: {
  products: Product[];
  basePath?: string;
}) {
  const pathname = usePathname();
  const groupsMap = new Map<string, Product[]>();
  for (const p of products) {
    const key = p.altCategory ?? "Diğer";
    const arr = groupsMap.get(key) ?? [];
    arr.push(p);
    groupsMap.set(key, arr);
  }
  const groups = Array.from(groupsMap.entries())
    .sort((a, b) => {
      const ai = ORDER.indexOf(a[0]);
      const bi = ORDER.indexOf(b[0]);
      if (ai === -1 && bi === -1) return a[0].localeCompare(b[0]);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    })
    .map(([title, items]) => ({ id: title, title, items }));

  const [openId, setOpenId] = useState<string | null>(groups[0]?.id ?? null);

  return (
    <nav className="p-3 space-y-1">
      <Link
        href="/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint"
        className="block px-3 py-2 rounded hover:bg-gray-900"
      >
        Ana Sayfa
      </Link>

      {groups.map((c) => {
        const isOpen = openId === c.id;
        return (
          <div key={c.id} className="rounded">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : c.id)}
              className="w-full cursor-pointer flex items-center text-left justify-between px-3 py-2 text-gray-200 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <motion.span
                  className="h-0.5 bg-sky-500 rounded"
                  initial={false}
                  animate={{ width: isOpen ? 14 : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <span>{c.title}</span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-6 pb-2 space-y-1">
                    {c.items.map((p) => {
                      const active = pathname?.endsWith(`/${p.slug}`) ?? false;
                      return (
                        <Link
                          key={`${c.id}-${p.slug}`}
                          href={`${basePath}/${p.slug}`}
                          className="group flex items-center gap-2 text-sm px-2 py-1 rounded text-gray-300 hover:text-white hover:bg-gray-900 notranslate"
                        >
                          <motion.span
                            className="h-0.5 bg-sky-500 rounded"
                            initial={{
                              width: active ? 12 : 0,
                              opacity: active ? 1 : 0,
                            }}
                            animate={{
                              width: active ? 12 : 0,
                              opacity: active ? 1 : 0,
                            }}
                            whileHover={{ width: 12, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="truncate">{p.title}</span>
                        </Link>
                      );
                    })}
                    {c.items.length === 0 && (
                      <div className="text-sm text-gray-400 px-2 py-1">
                        Ürün bulunamadı
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

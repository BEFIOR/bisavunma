"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RfSidebar from "./RfSidebar.client";
import { usePathname } from "next/navigation";

type Product = {
  slug: string;
  title: string;
  description: string | null;
  image: string | null;
  altCategory?: string | null;
};

export default function RfMobileSidebar({ products }: { products: Product[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      {/* Left-edge floating arrow button */}
      <button
        type="button"
        aria-label="Kategorileri Aç"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-[90] h-10 w-10 rounded-full bg-neutral-900 text-white shadow-lg shadow-black/30 flex items-center justify-center border border-neutral-800 active:scale-95"
      >
        {/* Chevron pointing right */}
        <span className="inline-block border-t-2 border-r-2 border-white w-3 h-3 rotate-45 translate-x-[1px]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/70"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="absolute inset-0 h-full w-full bg-black text-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <div className="font-semibold">Kategoriler</div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Kapat"
                  className="p-2 rounded-md hover:bg-neutral-800"
                >
                  <span className="block w-4 h-0.5 bg-white rotate-45 translate-y-[1px]" />
                  <span className="block w-4 h-0.5 bg-white -rotate-45 -translate-y-[1px]" />
                </button>
              </div>
              <div className="h-[calc(100%-49px)] overflow-y-auto">
                <RfSidebar products={products} />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

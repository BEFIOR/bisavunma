"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { Transition } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import navigationSections from "@/config/navigation";
import type { NavSection } from "@/types/navigation";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
  isCurrentPage = false,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
  isCurrentPage?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div
        transition={{ duration: 0.2 }}
        className={`cursor-pointer mt-1 tracking-wide font-medium relative group ${
          isCurrentPage ? "text-white" : "text-white/90 hover:text-white"
        }`}
      >
        {href ? <Link href={href}>{item}</Link> : item}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300"
          initial={{ width: isCurrentPage ? "100%" : "0%" }}
          animate={{ width: isCurrentPage ? "100%" : "0%" }}
          whileHover={{ width: "100%" }}
        />
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black/90  text-white rounded-3xl  overflow-hidden ring-1 ring-white/20 shadow-2xl border border-white/10 "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-6"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative lg:flex hidden items-center gap-8 px-10 py-5 rounded-3xl bg-white/10 backdrop-blur-2xl text-white ring-1 ring-white/20 shadow-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-lg shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-neutral-300 text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
}) => {
  return (
    <a
      {...rest}
      className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
};

export const Navbar = ({
  sections: providedSections,
}: {
  sections?: NavSection[];
}) => {
  const [active, setActive] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const sections: NavSection[] = providedSections ?? navigationSections;

  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const toggleSection = (title: string) =>
    setOpenSection((prev) => (prev === title ? null : title));

  // Check if current path matches the section
  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="w-full flex items-center justify-center py-6 absolute z-50">
      {/* Mobile top bar */}
      <div className="w-full px-4 lg:hidden">
        <div className="flex items-center justify-between rounded-3xl bg-white/10 backdrop-blur-2xl ring-1 ring-white/20 px-6 py-4 text-white shadow-2xl border border-white/10">
          <Link href="/" onClick={close} className="flex items-center gap-3">
            <Image
              width={100}
              height={100}
              src="/logo.webp"
              alt="BİSAVUNMA Logo"
              className="h-10 w-auto rounded-2xl"
            />
          </Link>
          <button
            aria-label="Menüyü aç/kapat"
            onClick={toggle}
            className="p-3 rounded-2xl bg-white/10 text-white ring-1 ring-white/20 shadow-lg hover:bg-white/20 transition-all duration-200"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop menu (generated from sections) */}
      <Menu setActive={setActive}>
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={100}
            height={100}
            src="/logo.webp"
            alt="BİSAVUNMA Logo"
            className="h-10 w-auto rounded-2xl"
          />
        </Link>
        {sections.map((s) => {
          if (s.type === "link") {
            const isCurrentPage = isActive(s.href);
            return (
              <motion.div
                key={s.title}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer mt-1 tracking-wide font-medium relative group ${
                  isCurrentPage
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Link href={s.href}>{s.title}</Link>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300"
                  initial={{ width: isCurrentPage ? "100%" : "0%" }}
                  animate={{ width: isCurrentPage ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            );
          }
          return (
            <MenuItem
              key={s.title}
              setActive={setActive}
              active={active}
              item={s.title}
              href={s.href}
              isCurrentPage={isActive(s.href)}
            >
              <div className={`flex flex-col space-y-4`}>
                {s.items.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="block text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </MenuItem>
          );
        })}
      </Menu>

      {/* Mobile drawer + overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 bg-black/40 lg:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed right-0 top-0 h-[100dvh] w-full max-w-[22rem] lg:hidden bg-white/10 backdrop-blur-2xl ring-1 ring-white/20 shadow-2xl z-50 p-6 flex flex-col border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  onClick={close}
                  className="flex items-center gap-3"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/logo.webp"
                    alt="BİSAVUNMA Logo"
                    className="h-10 w-auto rounded-2xl"
                  />
                </Link>
                <button
                  aria-label="Kapat"
                  onClick={close}
                  className="p-3 rounded-2xl bg-white/10 text-white ring-1 ring-white/20 shadow-lg hover:bg-white/20 transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="overflow-y-auto pr-1">
                {sections.map((s) => {
                  if (s.type === "link") {
                    return (
                      <Link
                        key={s.title}
                        href={s.href}
                        onClick={close}
                        className="block py-4 text-lg font-medium text-white/90 hover:text-white border-b border-white/10 transition-colors duration-200"
                      >
                        {s.title}
                      </Link>
                    );
                  }
                  const isOpen = openSection === s.title;
                  return (
                    <div key={s.title} className="border-b border-white/10">
                      <div className="w-full py-4 text-left text-lg font-medium text-white flex items-center justify-between">
                        <Link
                          href={s.href}
                          onClick={close}
                          className="hover:text-white transition-colors duration-200"
                        >
                          {s.title}
                        </Link>
                        <button
                          aria-label="Alt menüyü aç/kapat"
                          className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                          onClick={() => toggleSection(s.title)}
                        >
                          <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block text-xl"
                          >
                            ▾
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-3">
                              {s.items.map((item) => (
                                <div key={item.title} className="space-y-1">
                                  <Link
                                    href={item.href}
                                    onClick={close}
                                    className="block text-base text-white/80 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                                  >
                                    {item.title}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

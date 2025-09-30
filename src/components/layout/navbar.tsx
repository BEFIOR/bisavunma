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
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`cursor-pointer tracking-wide font-medium relative group px-3 py-2 rounded-xl transition-all duration-200 ${
          isCurrentPage
            ? "text-white bg-white/10 shadow-lg"
            : "text-white/85 hover:text-white hover:bg-white/6"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {href ? <Link href={href}>{item}</Link> : item}
        <motion.div
          className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
          initial={{ width: isCurrentPage ? "70%" : "0%" }}
          animate={{ width: isCurrentPage ? "70%" : "0%" }}
          whileHover={{ width: "70%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl text-white rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-xl border border-white/10"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-emerald-500/8" />

                <motion.div
                  layout // layout ensures smooth animation
                  className="relative w-max h-full p-4"
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
      className="relative lg:flex hidden items-center gap-7 px-7 py-4 rounded-2xl bg-gradient-to-r from-white/6 via-white/10 to-white/6 backdrop-blur-md text-white ring-1 ring-white/15 shadow-xl border border-white/8 hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10 hover:ring-white/25 hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

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
      className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform group"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
      </span>
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
    <div className="w-full flex items-center justify-center py-5 fixed top-0 left-0 right-0 z-50">
      {/* Mobile top bar */}
      <div className="w-full px-4 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-white/6 via-white/10 to-white/6 backdrop-blur-md ring-1 ring-white/15 px-6 py-4 text-white shadow-xl border border-white/8 group"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-3 relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                width={100}
                height={100}
                src="/logo.webp"
                alt="BİSAVUNMA Logo"
                className="h-9 w-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </Link>
          <motion.button
            aria-label="Menüyü aç/kapat"
            onClick={toggle}
            className="p-2.5 rounded-xl bg-white/10 text-white ring-1 ring-white/15 shadow-lg hover:bg-white/15 transition-all duration-200 relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Desktop menu (generated from sections) */}
      <Menu setActive={setActive}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                width={100}
                height={100}
                src="/logo.webp"
                alt="BİSAVUNMA Logo"
                className="h-9 w-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-200"
              />
            </motion.div>
          </Link>
        </motion.div>
        {sections.map((s, index) => {
          if (s.type === "link") {
            const isCurrentPage = isActive(s.href);
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: "easeOut",
                }}
                className={`cursor-pointer tracking-wide font-medium relative group px-3 py-2 rounded-xl transition-all duration-200 ${
                  isCurrentPage
                    ? "text-white bg-white/10 shadow-lg"
                    : "text-white/85 hover:text-white hover:bg-white/6"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={s.href}>{s.title}</Link>
                <motion.div
                  className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"
                  initial={{ width: isCurrentPage ? "70%" : "0%" }}
                  animate={{ width: isCurrentPage ? "70%" : "0%" }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.div>
            );
          }
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + sections.length * 0.1 }}
            >
              <MenuItem
                setActive={setActive}
                active={active}
                item={s.title}
                href={s.href}
                isCurrentPage={isActive(s.href)}
              >
                <div className={`flex flex-col space-y-4`}>
                  {s.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white/90 hover:text-white font-semibold transition-all duration-300 hover:translate-x-1 transform group relative"
                      >
                        <span className="relative">
                          {item.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </MenuItem>
            </motion.div>
          );
        })}

        {/* Language Switcher for Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="ml-4"
        >
          <LanguageSwitcher />
        </motion.div>
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
              className="fixed right-0 top-0 h-[100dvh] w-full max-w-[22rem] lg:hidden bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl ring-1 ring-white/15 shadow-xl z-50 p-6 flex flex-col border border-white/8"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <Link
                  href="/"
                  onClick={close}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/logo.webp"
                      alt="BİSAVUNMA Logo"
                      className="h-9 w-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                    />
                  </motion.div>
                </Link>
                <motion.button
                  aria-label="Kapat"
                  onClick={close}
                  className="p-2.5 rounded-xl bg-white/10 text-white ring-1 ring-white/15 shadow-lg hover:bg-white/15 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                </motion.button>
              </div>

              <div className="overflow-y-auto pr-1 relative z-10">
                {sections.map((s, index) => {
                  if (s.type === "link") {
                    return (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={s.href}
                          onClick={close}
                          className="block py-4 text-lg font-medium text-white/85 hover:text-white border-b border-white/8 transition-all duration-200 hover:translate-x-1 transform group relative"
                        >
                          <span className="relative">
                            {s.title}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-200 group-hover:w-full" />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  }
                  const isOpen = openSection === s.title;
                  return (
                    <motion.div
                      key={s.title}
                      className="border-b border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-full py-4 text-left text-lg font-medium text-white flex items-center justify-between group">
                        <Link
                          href={s.href}
                          onClick={close}
                          className="hover:text-white transition-all duration-200 hover:translate-x-1 transform relative"
                        >
                          <span className="relative">
                            {s.title}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-200 group-hover:w-full" />
                          </span>
                        </Link>
                        <motion.button
                          aria-label="Alt menüyü aç/kapat"
                          className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                          onClick={() => toggleSection(s.title)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="inline-block text-xl"
                          >
                            ▾
                          </motion.span>
                        </motion.button>
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
                              {s.items.map((item, itemIndex) => (
                                <motion.div
                                  key={item.title}
                                  className="space-y-1"
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: itemIndex * 0.05,
                                  }}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={close}
                                    className="block text-base text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 transform group relative"
                                  >
                                    <span className="relative">
                                      {item.title}
                                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-200 group-hover:w-full" />
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Language Switcher for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <div className="text-center">
                    <LanguageSwitcher />
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

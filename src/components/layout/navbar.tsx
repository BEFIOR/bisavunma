"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Transition } from "motion";
import Link from "next/link";
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
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white mt-1"
      >
        {href ? <Link href={href}>{item}</Link> : item}
      </motion.p>
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
                className="bg-white dark:bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
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
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input md:flex hidden justify-center space-x-4 px-32 py-6 "
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
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
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
      className="text-neutral-700 dark:text-neutral-200 hover:text-gray-400 "
    >
      {children}
    </a>
  );
};

export const Navbar = ({ sections: providedSections }: { sections?: NavSection[] }) => {
  const [active, setActive] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const sections: NavSection[] = providedSections ?? navigationSections;

  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const toggleSection = (title: string) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <div className="w-full flex items-center justify-center py-4 absolute z-50">
      {/* Mobile top bar */}
      <div className="w-full px-4 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input px-4 py-3">
          <Link href="/" onClick={close} className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src="/logo.webp"
              alt="BİSAVUNMA Logo"
              className="h-8 w-auto rounded-2xl"
            />
          </Link>
          <button
            aria-label="Menüyü aç/kapat"
            onClick={toggle}
            className="p-2 rounded-md bg-white text-black border border-black/10 shadow-sm hover:bg-white"
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
        <Image
          width={100}
          height={100}
          src="/logo.webp"
          alt="BİSAVUNMA Logo"
          className="h-8 w-auto rounded-2xl"
        />
        {sections.map((s) => {
          if (s.type === "link") {
            return (
              <motion.p
                key={s.title}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white mt-1"
              >
                <Link href={s.href}>{s.title}</Link>
              </motion.p>
            );
          }
          return (
            <MenuItem
              key={s.title}
              setActive={setActive}
              active={active}
              item={s.title}
              href={s.href}
            >
              <div className={`flex flex-col space-y-6`}>
                {s.items.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link
                      href={item.href}
                      className="block text-black hover:opacity-70 dark:text-white font-medium transition-all duration-300"
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
              className="fixed inset-0 bg-black/40 md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed right-0 top-0 h-[100dvh] w-full max-w-[20rem] md:hidden bg-black border-l border-black/10 dark:border-white/10 shadow-2xl z-50 p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/"
                  onClick={close}
                  className="flex items-center gap-2"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/logo.webp"
                    alt="BİSAVUNMA Logo"
                    className="h-8 w-auto rounded-2xl"
                  />
                </Link>
                <button
                  aria-label="Kapat"
                  onClick={close}
                  className="p-2 rounded-md bg-white text-black border border-black/10 shadow-sm hover:bg-white"
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
                        className="block py-3 text-base text-white border-b border-black/5 dark:border-white/5"
                      >
                        {s.title}
                      </Link>
                    );
                  }
                  const isOpen = openSection === s.title;
                  return (
                    <div
                      key={s.title}
                      className="border-b border-white/5 dark:border-white/5"
                    >
                      <div className="w-full py-3 text-left text-base text-white dark:text-white flex items-center justify-between">
                        <Link
                          href={s.href}
                          onClick={close}
                          className="hover:text-gray-300"
                        >
                          {s.title}
                        </Link>
                        <button
                          aria-label="Alt menüyü aç/kapat"
                          className="p-1"
                          onClick={() => toggleSection(s.title)}
                        >
                          <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
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
                            <div className="pl-3 pb-3 space-y-2">
                              {s.items.map((item) => (
                                <div key={item.title} className="space-y-1">
                                  <Link
                                    href={item.href}
                                    onClick={close}
                                    className="block text-sm text-white hover:text-gray-300"
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

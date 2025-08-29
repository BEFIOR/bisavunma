"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Transition } from "motion";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

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
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white mt-1"
      >
        {item}
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

export const Navbar = () => {
  const [active, setActive] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const sections: Array<
    | { type: "link"; title: string; href: string }
    | {
        type: "group";
        title: string;
        items: Array<{ title: string; href: string }>;
      }
  > = [
    { type: "link", title: "Ana Sayfa", href: "/" },
    {
      type: "group",
      title: "Ürünlerimiz",
      items: [
        { title: "RF Sistemleri", href: "/" },
        { title: "Sinyal İstihbarat (SIGINT)", href: "/" },
        { title: "Radar Sistemleri", href: "/" },
        { title: "Elektro-Optik & Termal Sistemler", href: "/" },
        { title: "Jammer & RF Efektörler", href: "/" },
        { title: "DJI Türkiye Enterprise", href: "/" },
      ],
    },
    {
      type: "group",
      title: "Çözümlerimiz",
      items: [
        { title: "Sistem Konfigürasyonu", href: "/" },
        { title: "İhtiyaca Yönelik Savunma Çözümleri", href: "/" },
        { title: "Entegre Güvenlik Yaklaşımları", href: "/" },
      ],
    },
    {
      type: "group",
      title: "Sektörlere Göre",
      items: [
        { title: "Askeri Tesisler", href: "/" },
        { title: "Enerji & Kritik Altyapılar", href: "/" },
        { title: "Liman & Tersaneler", href: "/" },
        { title: "Sınır Güvenliği", href: "/" },
      ],
    },
    {
      type: "group",
      title: "Hizmetlerimiz",
      items: [
        { title: "Saha Keşfi & Konumlandırma", href: "/" },
        { title: "Kurulum & Entegrasyon", href: "/" },
        { title: "Eğitim & Teknik Destek", href: "/" },
        { title: "Yazılım Çözümleri", href: "/" },
      ],
    },
    {
      type: "group",
      title: "Destek",
      items: [
        { title: "Destek Talebi", href: "/" },
        { title: "Yazılım İndirme", href: "/" },
        { title: "7/24 Teknik Destek", href: "/" },
      ],
    },
    { type: "link", title: "İletişim", href: "/" },
  ];

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

      {/* Desktop menu */}
      <Menu setActive={setActive}>
        <Image
          width={100}
          height={100}
          src="/logo.webp"
          alt="BİSAVUNMA Logo"
          className="h-8 w-auto rounded-2xl"
        />
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white mt-1"
        >
          Ana Sayfa
        </motion.p>

        <MenuItem setActive={setActive} active={active} item="Ürünlerimiz">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">RF Sistemleri</HoveredLink>
            <HoveredLink href="/">Sinyal İstihbarat (SIGINT)</HoveredLink>
            <HoveredLink href="/">Radar Sistemleri</HoveredLink>
            <HoveredLink href="/">Elektro-Optik & Termal Sistemler</HoveredLink>
            <HoveredLink href="/">Jammer & RF Efektörler</HoveredLink>
            <HoveredLink href="/">DJI Türkiye Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Çözümlerimiz">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Sistem Konfigürasyonu</HoveredLink>
            <HoveredLink href="/">
              İhtiyaca Yönelik Savunma Çözümleri
            </HoveredLink>
            <HoveredLink href="/">Entegre Güvenlik Yaklaşımları</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sektörlere Göre">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Askeri Tesisler</HoveredLink>
            <HoveredLink href="/">Enerji & Kritik Altyapılar</HoveredLink>
            <HoveredLink href="/">Liman & Tersaneler</HoveredLink>
            <HoveredLink href="/">Sınır Güvenliği</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Hizmetlerimiz">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Saha Keşfi & Konumlandırma</HoveredLink>
            <HoveredLink href="/">Kurulum & Entegrasyon</HoveredLink>
            <HoveredLink href="/">Eğitim & Teknik Destek</HoveredLink>
            <HoveredLink href="/">Yazılım Çözümleri</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Destek">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Destek Talebi</HoveredLink>
            <HoveredLink href="/">Yazılım İndirme</HoveredLink>
            <HoveredLink href="/">7/24 Teknik Destek</HoveredLink>
          </div>
        </MenuItem>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white mt-1"
        >
          İletişim
        </motion.p>
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
                      <button
                        className="w-full py-3 text-left text-base text-white dark:text-white flex items-center justify-between"
                        onClick={() => toggleSection(s.title)}
                      >
                        <span>{s.title}</span>
                        <motion.span
                          initial={false}
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          ▾
                        </motion.span>
                      </button>
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
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={close}
                                  className="block text-sm text-neutral-700 dark:text-neutral-200 hover:text-gray-500"
                                >
                                  {item.title}
                                </Link>
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

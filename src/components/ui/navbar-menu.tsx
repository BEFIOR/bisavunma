"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import type { Transition } from "motion";
import Link from "next/link";



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
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
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
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-32 py-6 "
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

export const HoveredLink = (
  {
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
) => {
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
  return (
    <div className="w-full flex items-center justify-center py-4 absolute z-10">
      <Menu setActive={setActive}>
        <div className="flex items-center space-x-3">
          <img src="/logo.webp" alt="BİSAVUNMA Logo" className="h-8 w-auto" />
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          >
            Ana Sayfa
          </motion.p>
        </div>
        <MenuItem setActive={setActive} active={active} item="Kurumsal" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Hakkımızda</HoveredLink>
          <HoveredLink href="/">Referanslarımız</HoveredLink>
          <HoveredLink href="/">İş Ortaklarımız</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ürünlerimiz" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">RF Sistemleri</HoveredLink>
            <HoveredLink href="/">Sinyal İstihbarat (SIGINT)</HoveredLink>
            <HoveredLink href="/">Radar Sistemleri</HoveredLink>
            <HoveredLink href="/">Elektro-Optik & Termal Sistemler</HoveredLink>
            <HoveredLink href="/">Jammer & RF Efektörler</HoveredLink>
            <HoveredLink href="/">DJI Türkiye Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Çözümlerimiz" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Sistem Konfigürasyonu</HoveredLink>
            <HoveredLink href="/">İhtiyaca Yönelik Savunma Çözümleri</HoveredLink>
            <HoveredLink href="/">Entegre Güvenlik Yaklaşımları</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sektörlere Göre" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Askeri Tesisler</HoveredLink>
            <HoveredLink href="/">Enerji & Kritik Altyapılar</HoveredLink>
            <HoveredLink href="/">Liman & Tersaneler</HoveredLink>
            <HoveredLink href="/">Sınır Güvenliği</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Hizmetlerimiz" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Saha Keşfi & Konumlandırma</HoveredLink>
            <HoveredLink href="/">Kurulum & Entegrasyon</HoveredLink>
            <HoveredLink href="/">Eğitim & Teknik Destek</HoveredLink>
            <HoveredLink href="/">Yazılım Çözümleri</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Destek" >
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/">Destek Talebi</HoveredLink>
            <HoveredLink href="/">Yazılım İndirme</HoveredLink>
            <HoveredLink href="/">7/24 Teknik Destek</HoveredLink>
          </div>
        </MenuItem>
        <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        İletişim
      </motion.p>
      </Menu>
    </div>
  );
};
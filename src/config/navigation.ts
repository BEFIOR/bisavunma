import type { NavSection } from "@/types/navigation";

export const navigationSections: NavSection[] = [
  { type: "link", title: "Ana Sayfa", href: "/" },
  {
    type: "group",
    title: "Ürünlerimiz",
    href : "/urunler",
    items: [
      {
        title: "RF Sistemleri ve Sinyal İstihbarat (SIGINT)",
        href: "/urunler/rf-sistemleri",
      },
      { title: "Radar Sistemleri", href: "/urunler/radar-sistemleri" },
      {
        title: "Elektro-Optik & Termal Sistemler",
        href: "/urunler/elektro-optik-ve-termal-sistemler",
      },
      { title: "Jammer & RF Efektörler", href: "/urunler/jammer-ve-rf-efektorler" },
      { title: "DJI Türkiye Enterprise", href: "/urunler/dji-turkiye-enterprise" },
    ],
  },
  {
    type: "group",
    title: "Çözümlerimiz",
    href : "/cozumlerimiz",
    items: [
      { title: "Sistem Konfigürasyonu", href: "/cozumler/sistem-konfigurasyonu" },
      {
        title: "İhtiyaca Yönelik Savunma Çözümleri",
        href: "/cozumler/ihityaç-yonelik-savunma-cozumleri",
      },
      {
        title: "Entegre Güvenlik Yaklaşımları",
        href: "/cozumler/entegre-guvenlik-yaklasimlari",
      },
    ],
  },
  {
    type: "group",
    title: "Sektörlere Göre",
    href : "/urunler",
    items: [
      { title: "Askeri Tesisler", href: "/sektorler/askeri-tesisler" },
      {
        title: "Enerji & Kritik Altyapılar",
        href: "/sektorler/enerji-ve-kritik-altyapi",
      },
      { title: "Liman & Tersaneler", href: "/sektorler/liman-ve-tersaneler" },
      { title: "Sınır Güvenliği", href: "/sektorler/sinir-guvenligi" },
    ],
  },
  {
    type: "group",
    title: "Hizmetlerimiz",
    href : "/urunler",
    items: [
      {
        title: "Saha Keşfi & Konumlandırma",
        href: "/hizmetler/saha-kesfi-ve-konumlandirma",
      },
      { title: "Kurulum & Entegrasyon", href: "/hizmetler/kurulum-ve-entegrasyon" },
      { title: "Eğitim & Teknik Destek", href: "/hizmetler/egitim-ve-teknik-destek" },
      { title: "Yazılım Çözümleri", href: "/hizmetler/yazilim-cozumleri" },
    ],
  },
  {
    type: "group",
    title: "Destek",
    href : "/urunler",
    items: [
      { title: "Destek Talebi", href: "/destek/destek-talebi" },
      { title: "Yazılım İndirme", href: "/destek/yazilim-indirme" },
      { title: "7/24 Teknik Destek", href: "/destek/7-24-teknik-destek" },
    ],
  },
  { type: "link", title: "İletişim", href: "/iletisim" },
];

export default navigationSections;


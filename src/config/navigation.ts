import type { NavSection } from "@/types/navigation";

export const navigationSections: NavSection[] = [
  { type: "link", title: "Ana Sayfa", href: "/", key: "home" },
  {
    type: "group",
    title: "Ürünlerimiz",
    href: "/urunler",
    key: "products",
    items: [
      {
        title: "RF Sistemleri ve Sinyal İstihbarat (SIGINT)",
        href: "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
        key: "rf",
      },
      { title: "Radar Sistemleri", href: "/urunler/radar-sistemleri", key: "radar" },
      {
        title: "Elektro-Optik & Termal Sistemler",
        href: "/urunler/elektro-optik-ve-termal-sistemler",
        key: "electroOptical",
      },
      { title: "Jammer & RF Efektörler", href: "/urunler/jammer-rf-efektorler", key: "jammer" },
      { title: "DJI Türkiye Enterprise", href: "/urunler/dji-turkiye-enterprise", key: "dji" },
    ],
  },
  {
    type: "group",
    title: "Çözümlerimiz",
    href: "/cozumlerimiz",
    key: "solutions",
    items: [
      { title: "Sistem Konfigürasyonu", href: "/cozumlerimiz#sistem-konfigurasyonu", key: "systemConfig" },
      {
        title: "İhtiyaca Yönelik Savunma Çözümleri",
        href: "/cozumlerimiz#savunma-cozumleri",
        key: "defense",
      },
      {
        title: "Entegre Güvenlik Yaklaşımları",
        href: "/cozumlerimiz#entegre-guvenlik",
        key: "integrated",
      },
    ],
  },
  {
    type: "group",
    title: "Sektörlere Göre",
    href: "/sektorler",
    key: "sectors",
    items: [
      { title: "Askeri Tesisler", href: "/sektorler#askeri-tesisler", key: "military" },
      {
        title: "Enerji & Kritik Altyapılar",
        href: "/sektorler#enerji-altyapi",
        key: "energy",
      },
      { title: "Liman & Tersaneler", href: "/sektorler#liman-tersaneler", key: "port" },
      { title: "Sınır Güvenliği", href: "/sektorler#sinir-guvenligi", key: "border" },
    ],
  },
  {
    type: "group",
    title: "Hizmetlerimiz",
    href: "/hizmetler",
    key: "services",
    items: [
      {
        title: "Saha Keşfi & Konumlandırma",
        href: "/hizmetler#saha-kesfi",
        key: "fieldSurvey",
      },
      { title: "Kurulum & Entegrasyon", href: "/hizmetler#kurulum-entegrasyon", key: "installation" },
      { title: "Eğitim & Teknik Destek", href: "/hizmetler#egitim-destek", key: "training" },
      { title: "Yazılım Çözümleri", href: "/hizmetler#yazilim-cozumleri", key: "software" },
    ],
  },
  { type: "link", title: "İletişim", href: "/iletisim", key: "contact" },
];

export default navigationSections;

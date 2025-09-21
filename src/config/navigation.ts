import type { NavSection } from "@/types/navigation";

export const navigationSections: NavSection[] = [
  { type: "link", title: "Ana Sayfa", href: "/" },
  {
    type: "group",
    title: "Ürünlerimiz",
    href: "/urunler",
    items: [
      {
        title: "RF Sistemleri ve Sinyal İstihbarat (SIGINT)",
        href: "/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint",
      },
      { title: "Radar Sistemleri", href: "/urunler/radar-sistemleri" },
      {
        title: "Elektro-Optik & Termal Sistemler",
        href: "/urunler/elektro-optik-ve-termal-sistemler",
      },
      { title: "Jammer & RF Efektörler", href: "/urunler/jammer-rf-efektorler" },
      { title: "DJI Türkiye Enterprise", href: "/urunler/dji-turkiye-enterprise" },
    ],
  },
  {
    type: "group",
    title: "Çözümlerimiz",
    href: "/cozumlerimiz",
    items: [
      { title: "Sistem Konfigürasyonu", href: "/cozumlerimiz#sistem-konfigurasyonu" },
      {
        title: "İhtiyaca Yönelik Savunma Çözümleri",
        href: "/cozumlerimiz#savunma-cozumleri",
      },
      {
        title: "Entegre Güvenlik Yaklaşımları",
        href: "/cozumlerimiz#entegre-guvenlik",
      },
    ],
  },
  {
    type: "group",
    title: "Sektörlere Göre",
    href: "/sektorler",
    items: [
      { title: "Askeri Tesisler", href: "/sektorler#askeri-tesisler" },
      {
        title: "Enerji & Kritik Altyapılar",
        href: "/sektorler#enerji-altyapi",
      },
      { title: "Liman & Tersaneler", href: "/sektorler#liman-tersaneler" },
      { title: "Sınır Güvenliği", href: "/sektorler#sinir-guvenligi" },
    ],
  },
  {
    type: "group",
    title: "Hizmetlerimiz",
    href: "/hizmetler",
    items: [
      {
        title: "Saha Keşfi & Konumlandırma",
        href: "/hizmetler#saha-kesfi",
      },
      { title: "Kurulum & Entegrasyon", href: "/hizmetler#kurulum-entegrasyon" },
      { title: "Eğitim & Teknik Destek", href: "/hizmetler#egitim-destek" },
      { title: "Yazılım Çözümleri", href: "/hizmetler#yazilim-cozumleri" },
    ],
  },
  { type: "link", title: "Anket", href: "/anket" },
  { type: "link", title: "İletişim", href: "/iletisim" },
];

export default navigationSections;

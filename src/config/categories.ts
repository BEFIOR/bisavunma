export type CategoryConfig = {
  slug: string;
  title: string;
  description?: string;
};

export const categories: CategoryConfig[] = [
  {
    slug: "rf-sistemleri",
    title: "RF Sistemleri ve Sinyal İstihbarat (SIGINT)",
  },
  { slug: "radar-sistemleri", title: "Radar Sistemleri" },
  {
    slug: "elektro-optik-ve-termal-sistemler",
    title: "Elektro-Optik & Termal Sistemler",
  },
  { slug: "jammer-ve-rf-efektorler", title: "Jammer & RF Efektörler" },
  { slug: "dji-turkiye-enterprise", title: "DJI Türkiye Enterprise" },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c] as const));


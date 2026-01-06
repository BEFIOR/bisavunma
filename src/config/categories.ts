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
  { 
    slug: "integrated-counter-uas-c2", 
    title: "Integrated Counter-UAS & C2",
    description: "Entegre drone savunma ve komuta kontrol sistemleri. DroneHunter önleme İHA'ları, SkyDome Manager C2 yazılımı ve Edge Fusion System ile kapsamlı hava sahası koruması."
  },
  { slug: "dji-turkiye-enterprise", title: "DJI Türkiye Enterprise" },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c] as const));


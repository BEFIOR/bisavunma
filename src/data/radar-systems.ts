export interface RadarSystem {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  borderColor: string;
  gradient: string;
  url: string;
}

export const radarSystems: RadarSystem[] = [
  {
    slug: "mgr-1200-radar-sistemi",
    title: "MGR-1200 Radar Sistemi",
    description: "Orta menzilli, yazılım tanımlı 4D (Ku-band) radar sistemi. İnsan tespit menzili yaklaşık 13 km, araç tespit menzili yaklaşık 16 km.",
    image: "/products/radar-sistemleri/mgr-1200.webp",
    features: [
      "Ku-band 4D radar teknolojisi",
      "13 km insan tespit menzili",
      "16 km araç tespit menzili",
      "Yazılım tanımlı mimari"
    ],
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    url: "/urunler/radar-sistemleri/mgr-1200-radar-sistemi"
  },
  {
    slug: "mgr-600-radar-sistemi",
    title: "MGR-600 Radar Sistemi",
    description: "Kısa menzilli 4D radar (K-band) sistemi. 6 km enstrümanlı menzil ve 120°×80° görüş alanı özelliklerine sahip.",
    image: "/products/radar-sistemleri/mgr-600.webp",
    features: [
      "K-band 4D radar teknolojisi",
      "6 km enstrümanlı menzil",
      "120°×80° görüş alanı",
      "Kısa menzil optimizasyonu"
    ],
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "/urunler/radar-sistemleri/mgr-600-radar-sistemi"
  },
  {
    slug: "mgr-a600-advanced-radar-sistemi",
    title: "MGR-A600 Advanced+ Radar Sistemi",
    description: "Yeni nesil kısa menzilli 4D radar (X-band, AESA/MESA) sistemi. 360°×90° görüş alanı ile gelişmiş tespit yetenekleri.",
    image: "/products/radar-sistemleri/mgr-a600-advanced.webp",
    features: [
      "X-band AESA/MESA teknolojisi",
      "360°×90° görüş alanı",
      "Yeni nesil 4D radar",
      "Gelişmiş tespit algoritmaları"
    ],
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "/urunler/radar-sistemleri/mgr-a600-advanced-radar-sistemi"
  },
  {
    slug: "bisavunma-a200-mk2-radar-sistemi",
    title: "BİSAVUNMA A200 Mk 2 Radar Sistemi",
    description: "4D çok modlu AESA radar sistemi. Eş zamanlı hava, kara ve deniz tespiti yapabilir. Nano-drone tespit menzili 3 km.",
    image: "/products/radar-sistemleri/bisavunma-a200-mk2.webp",
    features: [
      "4D çok modlu AESA radar",
      "Eş zamanlı hava/kara/deniz tespiti",
      "3 km nano-drone tespit menzili",
      "Kanatlı drone tespit yeteneği"
    ],
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#000)",
    url: "/urunler/radar-sistemleri/bisavunma-a200-mk2-radar-sistemi"
  }
];


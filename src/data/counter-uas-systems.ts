export interface CounterUASSystem {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  borderColor: string;
  gradient: string;
  url: string;
  category: "interceptor" | "hangar" | "c2" | "edge" | "camera";
}

export const counterUASSystems: CounterUASSystem[] = [
  {
    slug: "dronehunter-f700",
    title: "DroneHunter F700",
    description: "4.500'den fazla drone yakalama başarısıyla, DroneHunter F700 gerçek saha başarısına sahip bir karşı-İHA silahıdır. Tamamen otonom, radar güdümlü ve üstün hız ve çeviklik için özel olarak tasarlanmış olup, gece ve gündüz düşman droneları maliyetli tali hasarlara yol açmadan durdurur.",
    image: "/products/counter-uas/dronehunter-f700.webp",
    features: [
      "4.500+ drone yakalama başarısı",
      "Tamamen otonom operasyon",
      "TrueView R20 radar güdümlü",
      "Grup-1 ve Grup-2 droneları etkisiz hale getirir",
      "NetGun ve DrogueChute sistemleri",
      "Saniyeler içinde fırlatma, 3 dakikada yeniden yükleme"
    ],
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg,#EF4444,#000)",
    url: "/urunler/integrated-counter-uas-c2/dronehunter-f700",
    category: "interceptor"
  },
  {
    slug: "dronehangar",
    title: "DroneHangar",
    description: "DroneHunter önleme İHA'larının 7/24 hazır durumda tutulmasını sağlayan otonom hangar sistemi. Yerleşik şarj ünitesi, iklim kontrolü ve uzaktan yönetim özellikleri ile kesintisiz hava sahası koruması sunar.",
    image: "/products/counter-uas/dronehangar.webp",
    features: [
      "Saniyeler içinde otonom fırlatma",
      "Yerleşik batarya şarj sistemi",
      "Sertleştirilmiş, hava koşullarına dayanıklı dış yapı",
      "İklim kontrollü iç mekan (-40°C ile +55°C)",
      "Yer veya çatı üstü yerleşim",
      "SkyDome Manager ile tam entegrasyon"
    ],
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "/urunler/integrated-counter-uas-c2/dronehangar",
    category: "hangar"
  },
  {
    slug: "skydome-manager",
    title: "SkyDome Manager",
    description: "Özel olarak hava sahası izleme ve karşı-İHA komuta kontrol için tasarlanmış yazılım platformu. 3D hava sahası farkındalığı sağlayarak drone tehditlerinin tespit, takip ve etkisiz hale getirilmesini doğrudan güvenlik personeline yetkilendirir.",
    image: "/products/counter-uas/skydome-manager.webp",
    features: [
      "Birleşik dünya görünümü",
      "ThreatAware AI risk değerlendirmesi",
      "DroneHunter görev kontrolü",
      "Otonom veya insan döngüsünde operasyon",
      "Kapsamlı API entegrasyonu",
      "FAAD C2 ile entegre edilmiş"
    ],
    borderColor: "#6366F1",
    gradient: "linear-gradient(165deg,#6366F1,#000)",
    url: "/urunler/integrated-counter-uas-c2/skydome-manager",
    category: "c2"
  },
  {
    slug: "edge-fusion-system",
    title: "Edge Fusion System",
    description: "Karşı-İHA için çevresel olarak sertleştirilmiş edge computing, iletişim ve güç dağıtım sistemi. AI hızlandırma, gelişmiş tehdit değerlendirme analitiği ve C-UAS sistemleri ile yönetilen şifreli iletişim sağlar.",
    image: "/products/counter-uas/edge-fusion-system.webp",
    features: [
      "Yüksek performanslı gömülü bilgisayar",
      "AI hızlandırma ve edge computing",
      "Şifreli radyo iletişimi",
      "Endüstriyel sınıf ağ donanımı",
      "Verimli güç yönetimi",
      "IP-6X sertifikalı, -40°C ile +55°C"
    ],
    borderColor: "#F59E0B",
    gradient: "linear-gradient(195deg,#F59E0B,#000)",
    url: "/urunler/integrated-counter-uas-c2/edge-fusion-system",
    category: "edge"
  },
  {
    slug: "trueview-c30-camera",
    title: "TrueView C30 Camera System",
    description: "Uzun menzilli gündüz ve gece gözetleme performansı sunan, sağlamlaştırılmış IP66 hava koşullarına dayanıklı muhafaza içinde entegre kamera sistemi. Çevre güvenliği, iç güvenlik ve kıyı koruma için ideal.",
    image: "/products/counter-uas/trueview-c30.webp",
    features: [
      "2 km mesafede drone tanıma",
      "Termal ve optik sensörler",
      "Radar güdümlü pan, tilt, zoom",
      "IP66 hava koşullarına dayanıklı",
      "Sis filtresi ile uzun menzil görüntüleme",
      "SkyDome Manager entegrasyonu"
    ],
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(180deg,#8B5CF6,#000)",
    url: "/urunler/integrated-counter-uas-c2/trueview-c30-camera",
    category: "camera"
  }
];

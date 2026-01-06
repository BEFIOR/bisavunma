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
    slug: "trueview-r40-radar",
    title: "TrueView R40 Radar",
    description: "Yüksek performanslı, gerçek AESA (Aktif Elektronik Taramalı Dizi) radar. 256 alıcı eleman, 16 dijital kanal, çok kanallı dijital hüzme oluşturma ve eşzamanlı analog hüzme yönlendirme özelliklerine sahip. Yapay zeka ve 5.5 teraflop GPU ile güçlendirilmiş.",
    image: "/products/radar-sistemleri/trueview-r40.webp",
    features: [
      "256 alıcı elemanlı gerçek AESA teknolojisi",
      "16 dijital kanal ile çok kanallı hüzme oluşturma",
      "5.5 teraflop GPU ile yapay zeka desteği",
      "Düşük yanlış alarm oranı",
      "Drone tespiti için özel tasarım",
      "STAP (Uzay-Zaman Uyarlamalı İşleme) özellikli"
    ],
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    url: "/urunler/radar-sistemleri/trueview-r40-radar"
  },
  {
    slug: "trueview-r30-radar",
    title: "TrueView R30 Radar",
    description: "Yüksek performanslı AESA radar sistemi. 256 alıcı eleman, 16 dijital kanal ve üstün anten verimliliği ile drone savunmasında güvenilir çözüm sunar. Edge AI teknolojisi ile donatılmış.",
    image: "/products/radar-sistemleri/trueview-r30.webp",
    features: [
      "Gerçek 3D tespit ve takip",
      "Düşük SWaP-C (Boyut, Ağırlık, Güç, Maliyet)",
      "Geniş alan koruması",
      "Yapay zeka destekli mikro-doppler sınıflandırma",
      "7 kg'dan hafif, 38W güç tüketimi",
      "360° kapsama için ağ oluşturma yeteneği"
    ],
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    url: "/urunler/radar-sistemleri/trueview-r30-radar"
  },
  {
    slug: "trueview-r20-radar",
    title: "TrueView R20 Radar",
    description: "206 mm boyutunda, sınıfındaki tek gerçek AESA teknolojisine sahip kompakt radar. Hem yer hem de hava platformlarında kullanılabilir. DroneHunter UAV'larında standart ekipman olarak kullanılır.",
    image: "/products/radar-sistemleri/trueview-r20.webp",
    features: [
      "206 mm ultra kompakt tasarım",
      "Havadan havaya radar yeteneği",
      "38 watt düşük güç tüketimi",
      "Tam 3D tespit hassasiyeti",
      "DroneHunter entegrasyonu",
      "Askeri uygulamalar için ideal SWaP-C"
    ],
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    url: "/urunler/radar-sistemleri/trueview-r20-radar"
  }
];

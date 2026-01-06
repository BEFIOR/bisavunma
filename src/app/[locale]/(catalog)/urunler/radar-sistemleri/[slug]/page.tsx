import { notFound } from "next/navigation";
import { getCachedProduct } from "@/lib/loaders";
import Image from "next/image";
import ProductTracking from "@/components/ProductTracking";
import QuoteButton from "@/components/QuoteButton";
import {
  Radar as RadarIcon,
  Target,
  Cpu,
  Activity,
  Gauge,
  Layers,
  Shield,
  Network,
  Wrench,
} from "lucide-react";

export const revalidate = 300; // Cache for 5 minutes

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getCachedProduct(slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: product.title,
    description: product.description ?? undefined,
  };
}

export default async function RadarProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getCachedProduct(slug);
  if (!product) notFound();

  const content = getRadarContent(slug);
  const title = content?.title ?? product.title ?? slug;
  const description =
    content?.overview ??
    product.description ??
    "Bu ürün için detaylı açıklama henüz eklenmedi.";

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <ProductTracking productName={title} category="radar-sistemleri" />
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">/urunler/radar-sistemleri/{slug}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-auto w-full rounded-lg bg-neutral-800 flex items-center justify-center text-gray-400 overflow-hidden">
              <Image
                src={product.image || "/logo.webp"}
                width={1300}
                height={675}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Genel Bakış
                </h2>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>

              {content?.sections?.map((sec) => (
                <div key={sec.title}>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    {sec.icon}
                    <span>{sec.title}</span>
                  </h3>
                  {sec.type === "bullets" && (
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {sec.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  )}
                  {sec.type === "kv" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sec.items.map((it) => (
                        <div
                          key={it.label}
                          className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-3"
                        >
                          <div className="text-xs text-gray-400">
                            {it.label}
                          </div>
                          <div className="text-sm text-gray-200 mt-0.5">
                            {it.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              <h3 className="text-lg font-semibold text-white mb-3">
                Hızlı Bakış
              </h3>
              <ul className="space-y-2 text-gray-300">
                {(
                  content?.highlights ??
                  product.features ?? [
                    "Çoklu hedef takibi",
                    "Gelişmiş sinyal işleme",
                    "Gerçek zamanlı analiz",
                  ]
                ).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <RadarIcon className="w-4 h-4 text-sky-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {(content?.badges ?? []).map((b) => (
                  <div
                    key={b}
                    className="text-xs px-2 py-1 rounded-md border border-neutral-800 bg-neutral-800/60 text-gray-300"
                  >
                    {b}
                  </div>
                ))}
              </div>
              <QuoteButton category="radar_product" slug={slug} />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

type SectionBullets = {
  title: string;
  type: "bullets";
  icon: React.ReactNode;
  items: string[];
};
type SectionKV = {
  title: string;
  type: "kv";
  icon: React.ReactNode;
  items: { label: string; value: string }[];
};
type RadarContent = {
  title: string;
  overview: string;
  highlights?: string[];
  badges?: string[];
  sections?: Array<SectionBullets | SectionKV>;
};

function getRadarContent(slug: string): RadarContent | null {
  const map: Record<string, RadarContent> = {
    "trueview-r40-radar": {
      title: "TrueView R40 Radar",
      overview:
        "TrueView R40/R40i, iyi korunan bir hava sahasının sembolüdür. 256 alıcı eleman, 16 dijital kanal, çok kanallı dijital hüzme oluşturma, eşzamanlı analog hüzme yönlendirme ve üstün anten verimliliğine sahip yüksek performanslı, gerçek AESA (Aktif Elektronik Taramalı Dizi) radardır. Yapay zeka ve 5.5 teraflop GPU ile güçlendirilmiş olup, uygun maliyetli bir pakette güvenilir drone savunması için ölçüt belirler.",
      highlights: [
        "256 alıcı elemanlı gerçek AESA",
        "16 dijital kanal",
        "5.5 teraflop GPU",
        "AI destekli hedef sınıflandırma",
        "Düşük yanlış alarm oranı",
      ],
      badges: ["AESA", "AI/ML", "Edge Computing", "360° Kapsama"],
      sections: [
        {
          title: "Temel Özellikler",
          type: "bullets",
          icon: <Gauge className="w-5 h-5 text-sky-400" />,
          items: [
            "Tam 3D tespit ve takip hassasiyeti",
            "Metrelerce yakınlıktaki nesneleri bile ayırt edebilme",
            "Düşük hızlarda bile (<0.1 m/s) tespit yeteneği",
            "Geniş alan koruması için mükemmel hüzme genişliği",
          ],
        },
        {
          title: "AI ve Edge Computing",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          items: [
            "Radar üzerinde yerleşik GPU ile gerçek zamanlı analiz",
            "10 yılı aşkın makine öğrenimi deneyimi",
            "Mikro-doppler imza analizi ile sınıflandırma",
            "Kuş/drone ayrımında yüksek doğruluk",
          ],
        },
        {
          title: "Entegrasyon",
          type: "bullets",
          icon: <Network className="w-5 h-5 text-sky-400" />,
          items: [
            "TrueView kamera sistemleri ile tam entegrasyon",
            "SkyDome Manager C2 yazılımı uyumluluğu",
            "360° kapsama için çoklu radar ağ oluşturma",
            "STAP (Uzay-Zaman Uyarlamalı İşleme) desteği",
          ],
        },
        {
          title: "Teknik Özellikler",
          type: "kv",
          icon: <RadarIcon className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Mimari", value: "Gerçek AESA (Aktif Elektronik Taramalı Dizi)" },
            { label: "Alıcı Elemanlar", value: "256 adet" },
            { label: "Dijital Kanallar", value: "16 adet" },
            { label: "İşlemci", value: "5.5 teraflop GPU" },
          ],
        },
      ],
    },
    "trueview-r30-radar": {
      title: "TrueView R30 Radar",
      overview:
        "R30, iyi korunan bir hava sahasının sembolüdür. 256 alıcı eleman, 16 dijital kanal, çok kanallı dijital hüzme oluşturma, eşzamanlı analog hüzme yönlendirme ve üstün anten verimliliğine sahip yüksek performanslı, gerçek AESA radardır. Yerleşik grafik işlemcisi (GPU) ile R30, rakip radarların sunabileceğinden çok daha doğru ve kapsamlı istihbarat sağlar.",
      highlights: [
        "Tam 3D tespit hassasiyeti",
        "Düşük SWaP-C tasarımı",
        "7 kg'dan hafif",
        "38W güç tüketimi",
        "AI destekli sınıflandırma",
      ],
      badges: ["AESA", "Düşük SWaP-C", "Edge AI", "Ölçeklenebilir"],
      sections: [
        {
          title: "Temel Özellikler",
          type: "bullets",
          icon: <RadarIcon className="w-5 h-5 text-sky-400" />,
          items: [
            "Tam 3D tespit ile yüksek hassasiyet",
            "Metrelerce yakınlıktaki nesneleri ayırt edebilme",
            "Düşük hızlarda (<0.1 m/s) drone tespiti",
            "TrueView kamera ile radar güdümlü pan, tilt, zoom",
          ],
        },
        {
          title: "Düşük SWaP-C",
          type: "kv",
          icon: <Shield className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Ağırlık", value: "< 7 kg (15.5 lbs)" },
            { label: "Güç Tüketimi", value: "38 watt" },
            { label: "Taşınabilirlik", value: "Tek kişi tarafından taşınabilir" },
            { label: "Kurulum", value: "Hızlı sabit veya taşınabilir kurulum" },
          ],
        },
        {
          title: "360° Kapsama",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-sky-400" />,
          items: [
            "Üstün 3D tespit ile kör nokta yok",
            "Çoklu birim ile ağ oluşturma yeteneği",
            "Yüksek veya alçak uçan droneları tespit",
            "Yoğun şehir alanlarında bile etkili",
          ],
        },
        {
          title: "AI at the Edge",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          items: [
            "Radar üzerinde yoğun hesaplama",
            "CNN tabanlı uyarlamalı makine öğrenimi",
            "Mikro-doppler imza, hareket paterni, boyut analizi",
            "Çoklu nesne eşzamanlı değerlendirme",
          ],
        },
      ],
    },
    "trueview-r20-radar": {
      title: "TrueView R20 Radar",
      overview:
        "Sadece 206 mm (8.1 inç) boyutunda, R20 sınıfında gerçek AESA teknolojisine sahip tek radardır. Etkileyici performansı, küçük form faktörü ve olağanüstü enerji verimliliği, R20'nin düşük SWaP-C (boyut, ağırlık, güç ve maliyet) değerlerine katkıda bulunarak askeri uygulamalar için ideal hale getirir. Hava platformu varyantı R20i, DroneHunter UAV'larda standart ekipman olarak kullanılır.",
      highlights: [
        "206 mm ultra kompakt boyut",
        "Havadan havaya radar yeteneği",
        "38 watt güç tüketimi",
        "DroneHunter entegrasyonu",
        "Askeri SWaP-C uyumlu",
      ],
      badges: ["AESA", "Ultra Kompakt", "Hava-Hava", "DroneHunter"],
      sections: [
        {
          title: "Temel Özellikler",
          type: "bullets",
          icon: <RadarIcon className="w-5 h-5 text-sky-400" />,
          items: [
            "Tam 3D tespit hassasiyeti",
            "Düşük hızda (<0.1 m/s) drone takibi",
            "TrueView kamera entegrasyonu",
            "Hızlı kurulum ve kolay kullanım",
          ],
        },
        {
          title: "Düşük SWaP-C",
          type: "kv",
          icon: <Gauge className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Boyut", value: "206 mm (8.1 inç)" },
            { label: "Ağırlık", value: "< 7 kg" },
            { label: "Güç Tüketimi", value: "38 watt" },
            { label: "Mimari", value: "Gerçek AESA" },
          ],
        },
        {
          title: "Hava-Hava Yeteneği",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-sky-400" />,
          items: [
            "Yer radarlarından veri alarak hedefleme",
            "DroneHunter UAV üzerinde standart ekipman",
            "Otonom hedef takibi ve kilitleme",
            "Navigasyon desteği",
          ],
        },
        {
          title: "Ölçeklenebilirlik",
          type: "bullets",
          icon: <Network className="w-5 h-5 text-sky-400" />,
          items: [
            "Birimler arası doğrudan bağlantı",
            "Sınırsız ölçekte TrueView ağı",
            "Küçük ve büyük ölçekli kurulumlar",
            "Yoğun şehir alanlarında bile 360° kapsama",
          ],
        },
      ],
    },
  };
  return map[slug] ?? null;
}

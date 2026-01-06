import { notFound } from "next/navigation";
import { getCachedProduct } from "@/lib/loaders";
import Image from "next/image";
import ProductTracking from "@/components/ProductTracking";
import QuoteButton from "@/components/QuoteButton";
import {
  Shield,
  Target,
  Cpu,
  Gauge,
  Network,
  Zap,
  Camera,
  Radio,
  Thermometer,
  Box,
} from "lucide-react";

export const revalidate = 300;

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

export default async function CounterUASProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getCachedProduct(slug);
  if (!product) notFound();

  const content = getCounterUASContent(slug);
  const title = content?.title ?? product.title ?? slug;
  const description =
    content?.overview ??
    product.description ??
    "Bu ürün için detaylı açıklama henüz eklenmedi.";

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <ProductTracking productName={title} category="integrated-counter-uas-c2" />
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">/urunler/integrated-counter-uas-c2/{slug}</p>
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
                    "Otonom operasyon",
                    "AI destekli tespit",
                    "Entegre C2 sistemi",
                  ]
                ).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-400" />
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
              <QuoteButton category="counter_uas_product" slug={slug} />
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
type CounterUASContent = {
  title: string;
  overview: string;
  highlights?: string[];
  badges?: string[];
  sections?: Array<SectionBullets | SectionKV>;
};

function getCounterUASContent(slug: string): CounterUASContent | null {
  const map: Record<string, CounterUASContent> = {
    "dronehunter-f700": {
      title: "DroneHunter F700",
      overview:
        "4.500'den fazla drone yakalama başarısıyla, DroneHunter F700 gerçek saha başarısına sahip bir karşı-İHA silahıdır. Tamamen otonom, radar güdümlü ve üstün hız ve çeviklik için özel olarak tasarlanmış olup, gece ve gündüz düşman droneları maliyetli tali hasarlara yol açmadan durdurur. DroneHunter İHA'ları tek başına veya büyük kısıtlı alanları korumak için birden fazla birimle işbirliği içinde hareket edebilir.",
      highlights: [
        "4.500+ drone yakalama başarısı",
        "Tamamen otonom operasyon",
        "TrueView R20 radar güdümlü",
        "Grup-1 ve Grup-2 droneları etkisiz hale getirir",
        "Gece ve gündüz operasyon",
      ],
      badges: ["Otonom", "Radar Güdümlü", "NetGun", "Kinetic C-UAS"],
      sections: [
        {
          title: "Temel Özellikler",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-red-400" />,
          items: [
            "Küçük ve büyük droneları etkisiz hale getirir",
            "Quad-copter ve sabit kanatlı hedeflere karşı etkili",
            "İlk atışta %85 isabet oranı",
            "Saniyeler içinde fırlatma",
            "3 dakikadan kısa sürede tam yeniden yükleme",
          ],
        },
        {
          title: "NetGun Sistemleri",
          type: "bullets",
          icon: <Shield className="w-5 h-5 text-red-400" />,
          items: [
            "Küçük ve orta boy bağlantılı ağ (tether net)",
            "Grup-1 dronelar için tether net ile yakalama ve taşıma",
            "DrogueChute ile büyük Grup-2 droneları etkisiz hale getirme",
            "Paraşütlü ağ sistemi ile kontrollü iniş sağlama",
          ],
        },
        {
          title: "Operasyon Modları",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-red-400" />,
          items: [
            "Pursue Mode: Yakın inceleme ve optik kamera ile izleme",
            "Attack Mode: Küçük/yavaş hedefler için yakalama ve taşıma",
            "Defense Mode: Büyük/hızlı hedefler için savunma pozisyonu",
            "Autonomous Tow-Away: Yakalanan droneları güvenli bölgeye taşıma",
          ],
        },
        {
          title: "Teknik Özellikler",
          type: "kv",
          icon: <Gauge className="w-5 h-5 text-red-400" />,
          items: [
            { label: "Radar", value: "TrueView R20i (yerleşik)" },
            { label: "Hedef Kapasitesi", value: "Grup-1 ve Grup-2 dronelar" },
            { label: "Fırlatma Süresi", value: "Saniyeler içinde" },
            { label: "Yeniden Yükleme", value: "< 3 dakika" },
          ],
        },
      ],
    },
    "dronehangar": {
      title: "DroneHangar",
      overview:
        "Sabit SkyDome System kurulumları genellikle bir alan üzerinde yayılmış birden fazla DroneHunter önleme İHA'sı kullanır. Bu durumlarda, her birimin insan yardımı olmadan, bir anda uzaktan etkinleştirilebilmesi gerekir. DroneHangar bu ihtiyacı karşılayarak, DroneHunter birimlerinin uçuş durumunda kalmasını sağlarken şarjlı ve kalkışa hazır tutar.",
      highlights: [
        "Saniyeler içinde otonom fırlatma",
        "7/24 DroneHunter hazırlığı",
        "Yerleşik batarya şarj sistemi",
        "Hava koşullarına dayanıklı",
        "İklim kontrollü iç mekan",
      ],
      badges: ["Otonom", "7/24 Hazırlık", "İklim Kontrol", "Uzaktan Yönetim"],
      sections: [
        {
          title: "Temel Özellikler",
          type: "bullets",
          icon: <Box className="w-5 h-5 text-red-400" />,
          items: [
            "Fırlatma komutu alındığında saniyeler içinde havalanma",
            "Yerleşik şarj ünitesi ile bataryaları tam dolu tutar",
            "Yedek azot tüpleri ve NetHead'ler için dahili depolama",
            "Yer veya çatı üstü yerleşim seçenekleri",
            "Araç üstü varyant mevcut",
          ],
        },
        {
          title: "Çevresel Dayanım",
          type: "kv",
          icon: <Thermometer className="w-5 h-5 text-red-400" />,
          items: [
            { label: "Dış Yapı", value: "Sertleştirilmiş, hava geçirmez" },
            { label: "Çalışma Sıcaklığı", value: "-40°C ile +55°C" },
            { label: "Koruma", value: "Rüzgar, nem, toz, kum" },
            { label: "İklim Kontrolü", value: "Aktif soğutma ve ısıtma" },
          ],
        },
        {
          title: "Yönetim ve Entegrasyon",
          type: "bullets",
          icon: <Network className="w-5 h-5 text-red-400" />,
          items: [
            "SkyDome Manager ile tam entegrasyon",
            "İç sıcaklık ve kapı durumu izleme",
            "DroneHunter bağlantı ve şarj durumu takibi",
            "Uzaktan kapı açma/kapama kontrolü",
            "Görev sonrası kolay geri dönüş ve yeniden yükleme",
          ],
        },
      ],
    },
    "skydome-manager": {
      title: "SkyDome Manager",
      overview:
        "SkyDome Manager, özel olarak hava sahası izleme ve karşı-İHA komuta kontrol için tasarlanmış yazılımdır. 3D hava sahası farkındalığı sağlayarak drone tehditlerinin tespit, takip ve etkisiz hale getirilmesini doğrudan güvenlik personeline yetkilendirir. Yazılım, radar, uzun menzilli kameralar, RF sensörleri ve drone etkisiz hale getirme sistemlerini entegre eden uçtan uca sensör korelasyon platformu olarak çalışır.",
      highlights: [
        "Birleşik dünya görünümü",
        "ThreatAware AI risk değerlendirmesi",
        "DroneHunter görev kontrolü",
        "Otonom veya insan döngüsünde",
        "FAAD C2 entegrasyonu",
      ],
      badges: ["C2 Yazılımı", "AI Risk Değerlendirme", "Sensör Füzyonu", "API"],
      sections: [
        {
          title: "ThreatAware Risk Değerlendirmesi",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-red-400" />,
          items: [
            "Sınıflandırma ile olası drone tehditleri belirleme",
            "Yük taşıma kapasitesi değerlendirmesi",
            "Mesafe, yön ve yaklaşma hızına göre niyet analizi",
            "Tehdit seviyesine göre otomatik yanıt tetikleme",
            "Özelleştirilebilir bölge ve koşul kuralları",
          ],
        },
        {
          title: "DroneHunter Kontrolü",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-red-400" />,
          items: [
            "Pursue, Attack, Defend ve Auto-capture modları",
            "Canlı video akışı ve telemetri izleme",
            "Uyarı ışıkları ve siren kontrolü",
            "Batarya seviyesi ve görev durumu takibi",
            "Yakalanan droneları bırakma bölgelerine otonom taşıma",
          ],
        },
        {
          title: "Sensör Entegrasyonu",
          type: "bullets",
          icon: <Radio className="w-5 h-5 text-red-400" />,
          items: [
            "TrueView radarları ile tam entegrasyon",
            "Radar güdümlü kamera takibi",
            "3D dışlama bölgeleri ile yanlış alarm azaltma",
            "Boyut, hız ve irtifa bazlı filtreleme",
            "Nesne sınıflandırma (Drone/Drone Değil)",
          ],
        },
        {
          title: "API ve Entegrasyon",
          type: "kv",
          icon: <Network className="w-5 h-5 text-red-400" />,
          items: [
            { label: "REST API", value: "Tam çift yönlü entegrasyon" },
            { label: "Realtime API", value: "Gerçek zamanlı veri akışı" },
            { label: "Track-only API", value: "Sadece iz verisi" },
            { label: "FAAD C2", value: "ABD Ordusu C2 uyumlu" },
          ],
        },
      ],
    },
    "edge-fusion-system": {
      title: "Edge Fusion System",
      overview:
        "Fortem Edge Fusion System, karşı-İHA için çevresel olarak sertleştirilmiş edge computing, iletişim ve güç dağıtım sistemidir. AI hızlandırma, gelişmiş tehdit değerlendirme analitiği çalıştırmak ve Fortem ile partner sağlayıcılardan C-UAS sistemleri ve diğer entegre sensörlerle yönetilen ve şifreli iletişim sağlamak için tasarlanmıştır.",
      highlights: [
        "Yüksek performanslı edge computing",
        "AI hızlandırma",
        "Şifreli radyo iletişimi",
        "Endüstriyel sınıf ağ donanımı",
        "Verimli güç yönetimi",
      ],
      badges: ["Edge Computing", "AI Hızlandırma", "IP-6X", "MIL-SPEC"],
      sections: [
        {
          title: "Edge Computing",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-red-400" />,
          items: [
            "Yüksek yoğunluklu 4x4 form faktörlü bilgisayar platformu",
            "Çift kat çekirdek, bellek ve depolama",
            "Gelişmiş tehdit değerlendirme analitiği",
            "SkyDome Manager ve diğer servisler için hesaplama gücü",
            "AI at the Edge yetenekleri",
          ],
        },
        {
          title: "İletişim Donanımı",
          type: "kv",
          icon: <Radio className="w-5 h-5 text-red-400" />,
          items: [
            { label: "Ağ Switch", value: "Gigabit L3 Yönetimli, fiber opsiyonlu" },
            { label: "Radyo", value: "Ultra hafif, şifreli" },
            { label: "Sertifikalar", value: "FCC, CE, UL, ATEX" },
            { label: "Çalışma Sıcaklığı", value: "-40°C ile +75°C" },
          ],
        },
        {
          title: "Güç Yönetimi",
          type: "bullets",
          icon: <Zap className="w-5 h-5 text-red-400" />,
          items: [
            "Doğrudan AC güç ve 12V/24V DC çıkışlar",
            "%95'e kadar verimli güç kaynakları",
            "Aşırı gerilim koruması",
            "Kolay erişimli sigortalar",
            "Uzaktan güç yönetimi (web relay)",
          ],
        },
        {
          title: "Çevresel Dayanım",
          type: "kv",
          icon: <Thermometer className="w-5 h-5 text-red-400" />,
          items: [
            { label: "Muhafaza", value: "4X Sertifikalı NEMA, Alüminyum" },
            { label: "Ağırlık", value: "46.2 lbs / 21 kg" },
            { label: "Boyut", value: "10x18x18 inç" },
            { label: "Soğutma", value: "430-560 BTU/Saat Peltier" },
          ],
        },
      ],
    },
    "trueview-c30-camera": {
      title: "TrueView C30 Camera System",
      overview:
        "Fortem TrueView C30 Kamera Sistemi, güçlendirilmiş alüminyumdan yapılmış sağlam IP66 hava koşullarına dayanıklı muhafaza içinde uzun menzilli gündüz ve gece gözetleme performansı sunar. Kamera, en zorlu iklim koşullarına dayanabilir ve çevre güvenliği, iç güvenlik ve kıyı koruma için idealdir.",
      highlights: [
        "2 km mesafede drone tanıma",
        "Termal ve optik sensörler",
        "Radar güdümlü PTZ",
        "IP66 hava koşullarına dayanıklı",
        "Askeri sınıf yapı",
      ],
      badges: ["Optik", "Termal", "Radar Güdümlü", "IP66"],
      sections: [
        {
          title: "Optik Kamera",
          type: "bullets",
          icon: <Camera className="w-5 h-5 text-red-400" />,
          items: [
            "Sony progresif tarama CMOS sensörler",
            "Görünür ve NIR dalga boylarında yüksek spektral hassasiyet",
            "Uzun menzilli gözetleme için optimize edilmiş",
            "NIR bandpass filtresi (sis filtresi)",
            "Duman, sis ve pus içinde görüntüleme",
          ],
        },
        {
          title: "Termal Sensör",
          type: "bullets",
          icon: <Thermometer className="w-5 h-5 text-red-400" />,
          items: [
            "Uzun menzilli gece tespiti",
            "Drone, insan ve araç takibi",
            "Uçuş davranışı belirleme",
            "Hareket izleme",
            "Tam karanlıkta operasyon",
          ],
        },
        {
          title: "Radar Entegrasyonu",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-red-400" />,
          items: [
            "TrueView radarları ile tam entegrasyon",
            "Radar güdümlü pan, tilt, zoom",
            "Radar mesafesine göre otomatik odak",
            "ThreatAware değerlendirmesi ile akıllı filtreleme",
            "Öncelikli hedeflere odaklanma",
          ],
        },
        {
          title: "Teknik Özellikler",
          type: "kv",
          icon: <Gauge className="w-5 h-5 text-red-400" />,
          items: [
            { label: "Tanıma Mesafesi", value: "2 km'ye kadar" },
            { label: "Koruma Sınıfı", value: "IP66" },
            { label: "Yapı", value: "Güçlendirilmiş alüminyum" },
            { label: "Entegrasyon", value: "SkyDome Manager C2" },
          ],
        },
      ],
    },
  };
  return map[slug] ?? null;
}

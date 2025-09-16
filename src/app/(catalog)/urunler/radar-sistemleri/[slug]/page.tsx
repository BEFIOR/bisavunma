import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import Image from "next/image";
import {
  Radar as RadarIcon,
  Target,
  Cpu,
  Activity,
  Gauge,
  Layers,
  Shield,
  Map as MapIcon,
  Network,
  Wrench,
} from "lucide-react";

export const revalidate = 60;

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
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
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const content = getRadarContent(slug);
  const title = content?.title ?? product.title ?? slug;
  const description =
    content?.overview ??
    product.description ??
    "Bu ürün için detaylı açıklama henüz eklenmedi.";

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-gray-400">/urunler/radar-sistemleri/{slug}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-lg bg-neutral-800 flex items-center justify-center text-gray-400 overflow-hidden">
              <Image
                src={product.image || "/logo.webp"}
                width={1200}
                height={675}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Genel Bakış</h2>
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
                          <div className="text-xs text-gray-400">{it.label}</div>
                          <div className="text-sm text-gray-200 mt-0.5">{it.value}</div>
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
              <h3 className="text-lg font-semibold text-white mb-3">Hızlı Bakış</h3>
              <ul className="space-y-2 text-gray-300">
                {(content?.highlights ?? product.features ?? [
                  "Çoklu hedef takibi",
                  "Gelişmiş sinyal işleme",
                  "Gerçek zamanlı analiz",
                ]).map((f) => (
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
              <button className="mt-6 w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 rounded-md transition-colors">
                Teklif Al
              </button>
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
    "mgr-1200-radar-sistemi": {
      title: "MGR-1200 Radar Sistemi",
      overview:
        "MGR-1200; Ku-band (15.4–16.6 GHz) çalışan, orta menzilli, yazılım tanımlı, darbe‑Doppler tabanlı bilişsel 4D radar sistemidir. Yoğun Tx/Rx hücre yapısı ile yüksek konumsal doğruluk sunar ve sensör füzyonu/C2 altyapılarına sorunsuz entegre olur.",
      highlights: [
        "<0.5° açısal doğruluk",
        "Yüzlerce hedefin eşzamanlı takibi",
        "Misyon setiyle hızlı görev optimizasyonu",
      ],
      badges: ["Ku-band", "4D", "Cognitive", "Pulse-Doppler"],
      sections: [
        {
          title: "Ana Performans Parametreleri",
          type: "bullets",
          icon: <Gauge className="w-5 h-5 text-sky-400" />,
          items: [
            "Açısal doğruluk: azimut ve yükselişte <0.5°",
            "Takip (güncel): Grup 3 UAV ~13 km, insan ~13 km, araç ~16 km",
            "Yoğun Tx/Rx hücreleri ile yüksek çözünürlüklü konumlandırma",
          ],
        },
        {
          title: "Görev Setleri",
          type: "bullets",
          icon: <Layers className="w-5 h-5 text-sky-400" />,
          items: [
            "C‑UAS: 9 km angajman bölgesinde düşük irtifa drone tespiti",
            "C‑UAS 2: Büyük UAV'lerde hassasiyet, ~16 km'ye kadar",
            "Dismount: Sınır/çevre gözetleme; insan ~13 km, araç ~16 km",
            "Coastal: Kıyı ve küçük deniz hedeflerinin izlenmesi",
            "Airspace Management: Uçuş sahası yönetimi ve kılavuzlama",
            "OTM C‑UAS: Seyir halinde kara/deniz platformlarında C‑UAS",
          ],
        },
        {
          title: "Yazılım ve Destek",
          type: "bullets",
          icon: <Wrench className="w-5 h-5 text-sky-400" />,
          items: [
            "Sürekli yazılım güncellemeleri ve sınıflandırma iyileştirmeleri",
            "Öncelikli teknik destek ve entegrasyon danışmanlığı",
            "24/7 kullanıcı portalı, dokümantasyon ve eğitim kaynakları",
          ],
        },
        {
          title: "Teknik Özellikler (Özet)",
          type: "kv",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Bant", value: "Ku (15.4–16.6 GHz)" },
            { label: "Tip", value: "Yazılım tanımlı bilişsel 4D, Pulse‑Doppler" },
            { label: "Açısal Doğruluk", value: "<0.5° azimut/yükseliş" },
            { label: "İzleme Kapasitesi", value: "Yüzlerce hedef" },
          ],
        },
      ],
    },
    "mgr-600-radar-sistemi": {
      title: "MGR-600 Radar Sistemi",
      overview:
        "MGR-600; kısa menzilli, yazılım tanımlı, katı hâl 4D radar sistemidir. Elektronik taramalı dizi mimarisi ile kompakt yapıda yüksek performans sunar.",
      highlights: [
        "6 km enstrümanlı menzil",
        "120°×80° görüş alanı",
        "20 eşzamanlı iz takibi",
      ],
      badges: ["K‑band", "4D", "ESA", "Kompakt"],
      sections: [
        {
          title: "Radar Performansı",
          type: "kv",
          icon: <RadarIcon className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Bant", value: "K (24.05–24.65 GHz)" },
            { label: "FoV", value: "120° azimut × 80° yükseliş" },
            { label: "Doğruluk", value: "<1° azimut, <1.5° yükseliş" },
            { label: "Güncelleme", value: "10 Hz" },
            { label: "Kapasite", value: "20 eşzamanlı iz" },
            { label: "Enstr. Menzil", value: "6 km" },
          ],
        },
        {
          title: "Tespit Menzilleri",
          type: "bullets",
          icon: <Target className="w-5 h-5 text-sky-400" />,
          items: [
            "Küçük UAV (Phantom 4): >1 km",
            "Büyük UAV (Matrice 600): >1.4 km",
            "Araç: >3.5 km, İnsan: >2.2 km",
          ],
        },
        {
          title: "SWaP ve Dayanım",
          type: "kv",
          icon: <Shield className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Boyut", value: "16.3×20.3×5.7 cm" },
            { label: "Ağırlık", value: "1.25 kg" },
            { label: "Güç", value: "+15…+28 VDC, 50 W (çalışma)" },
            { label: "Sıcaklık", value: "−40 °C … +75 °C" },
            { label: "Koruma", value: "IP67" },
          ],
        },
        {
          title: "Entegrasyon ve Veri",
          type: "kv",
          icon: <Network className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Kontrol I/O", value: "Gigabit Ethernet" },
            { label: "Çıkışlar", value: "Harita/tespit/ölçüm/iz veri oranları" },
            { label: "Montaj", value: "VESA 75 & 100 mm" },
          ],
        },
        {
          title: "Yazılım ve Destek",
          type: "bullets",
          icon: <Wrench className="w-5 h-5 text-sky-400" />,
          items: [
            "Sürekli yazılım güncellemeleri ve görselleştirme araçları",
            "Öncelikli teknik destek ve entegrasyon rehberi",
            "24/7 portal ve kullanıcı topluluğu",
          ],
        },
      ],
    },
    "mgr-a600-advanced-radar-sistemi": {
      title: "MGR-A600 Advanced+ Radar Sistemi",
      overview:
        "MGR‑A600 Advanced+; kısa menzilde yeni nesil 4D gözetleme radarıdır. X‑band, AESA/MESA hibrit mimarisiyle 360°×90° adaptif kapsama ve yüksek hassasiyet sunar.",
      highlights: [
        "≤0.2°/≤0.3° açısal doğruluk",
        "512 eşzamanlı hedef",
        "AI/ML sınıflandırma, gelişmiş parazit reddi",
      ],
      badges: ["X‑band", "AESA/MESA", "360×90", "AI/ML"],
      sections: [
        {
          title: "Performans (Yükseltilmiş)",
          type: "kv",
          icon: <Gauge className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Tarama", value: "1–4 Hz (göreve bağlı)" },
            { label: "Açısal Doğruluk", value: "≤0.2° az., ≤0.3° yük." },
            { label: "Menzi̇ller", value: "Pers. >9 km, Araç >12 km, sUAS >8 km, G2/3 >11 km" },
            { label: "İz Kapasitesi", value: "512 hedefe kadar" },
            { label: "Güncelleme", value: "20 Hz sürekli" },
          ],
        },
        {
          title: "Boyut ve Dayanım",
          type: "kv",
          icon: <Shield className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Ağırlık", value: "≤9 kg (tek kişi taşınabilir)" },
            { label: "Güç", value: "18–36 VDC, ≤65 W çalışma, <5 W bekleme" },
            { label: "Sıcaklık", value: "−50 °C … +85 °C" },
            { label: "Koruma", value: "IP68, MIL‑STD‑810H" },
          ],
        },
        {
          title: "Ağ ve Entegrasyon",
          type: "bullets",
          icon: <Network className="w-5 h-5 text-sky-400" />,
          items: [
            "Gigabit Ethernet/fiber, opsiyonel taktik 5G",
            "C2: NATO STANAG, Link‑16/22 uyumluluğu",
            "Sensör füzyonu: EO/IR, RF, jammer ve kinetik sistemlerle",
          ],
        },
        {
          title: "Yazılım ve Görev Özellikleri",
          type: "bullets",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          items: [
            "Bilişsel radar motoru, görev seti optimizasyonu",
            "3D gerçek zamanlı radar resmi ve otomatik hedef devri",
            "Önceliklendirme, alarm bölgeleri, otonom cueing",
          ],
        },
      ],
    },
    "bisavunma-a200-mk2-radar-sistemi": {
      title: "BİSAVUNMA A200 Mk 2 Radar Sistemi",
      overview:
        "A200 Mk 2; aynı anda hava, kara ve deniz hedeflerini algılayabilen 4D Çok Modlu AESA radardır. LSS (Low‑Slow‑Small) tehditlerine karşı optimize edilmiş, TRL‑9 saha başarımına sahip bir çözüm sunar.",
      highlights: [
        "Çok modlu eşzamanlı gözetleme",
        "700 hedef/scan'e kadar yoğun hedef ortamı",
        "AI destekli sınıflandırma ve düşük yanlış alarm",
      ],
      badges: ["4D", "AESA", "Çok Modlu", "TRL‑9"],
      sections: [
        {
          title: "Temel Kabiliyetler",
          type: "bullets",
          icon: <Activity className="w-5 h-5 text-sky-400" />,
          items: [
            "Eşzamanlı hava/kara/deniz gözetleme",
            "Nano‑drone: 3 km, Kanatlı drone: 7 km",
            "4D konumlama (menzil, azimut, yükseklik, hız)",
            "AI tabanlı sınıflandırma, mikro‑Doppler analiz",
          ],
        },
        {
          title: "Teknik Özellikler",
          type: "kv",
          icon: <Cpu className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Mimari", value: "4D Çok Modlu FMCW Doppler AESA" },
            { label: "Bant", value: "Ku (15.7–17.2 GHz)" },
            { label: "Tarama", value: "90° sektör 1 s, spotlight 0.25 s" },
            { label: "Kapsama", value: "Azimut 90°, Yükseliş 40°" },
            { label: "Arayüz", value: "TLS 1.3 GB Ethernet, RS‑232/422, IO" },
          ],
        },
        {
          title: "Çevresel ve Güç",
          type: "kv",
          icon: <Shield className="w-5 h-5 text-sky-400" />,
          items: [
            { label: "Güç", value: "24–28 VDC, 130 W nom." },
            { label: "Sıcaklık", value: "−32 °C … +65 °C" },
            { label: "Koruma", value: "IP66, MIL‑STD‑1275E" },
            { label: "Boyut/Ağırlık", value: "600×550×270 mm, ~25 kg" },
          ],
        },
      ],
    },
  };
  return map[slug] ?? null;
}

import { notFound } from "next/navigation";

type Product = {
  title: string;
  description: string;
  features?: string[];
  image?: string;
};

// Simple in-file product registry. Replace with API/DB later.
const PRODUCTS: Record<string, Product> = {
  "rf-sistemleri-urun-1": {
    title: "RF Sistemleri - Ürün 1",
    description:
      "Gelişmiş RF sinyal tespiti ve analiz yetenekleri sunan modüler çözüm.",
    features: ["GENİŞ bant tarama", "Gerçek zamanlı analiz", "Uzaktan yönetim"],
  },
  "rf-sistemleri-urun-2": {
    title: "RF Sistemleri - Ürün 2",
    description: "Taşınabilir RF keşif sistemi.",
    features: ["Hafif tasarım", "Uzun pil ömrü", "Dayanıklı yapı"],
  },
  "rf-sistemleri-urun-3": {
    title: "RF Sistemleri - Ürün 3",
    description: "Sabit istasyon RF izleme platformu.",
  },

  "radar-sistemleri-urun-1": {
    title: "Radar Sistemleri - Ürün 1",
    description: "Yüksek çözünürlüklü hedef tespit radarı.",
  },
  "radar-sistemleri-urun-2": {
    title: "Radar Sistemleri - Ürün 2",
    description: "Uzun menzil gözetleme radarı.",
  },
  "radar-sistemleri-urun-3": {
    title: "Radar Sistemleri - Ürün 3",
    description: "Çok modlu taktik radar.",
  },

  "elektro-optik-termal-urun-1": {
    title: "Elektro-Optik & Termal - Ürün 1",
    description: "Çok spektrumlu EO/IR görüntüleme sistemi.",
  },
  "elektro-optik-termal-urun-2": {
    title: "Elektro-Optik & Termal - Ürün 2",
    description: "Uzun menzil termal kamera.",
  },
  "elektro-optik-termal-urun-3": {
    title: "Elektro-Optik & Termal - Ürün 3",
    description: "Stabilize elektro-optik gimbal.",
  },

  "jammer-ve-rf-efektorler-urun-1": {
    title: "Jammer & RF Efektörler - Ürün 1",
    description: "Geniş bant frekans karıştırma sistemi.",
  },
  "jammer-ve-rf-efektorler-urun-2": {
    title: "Jammer & RF Efektörler - Ürün 2",
    description: "Taşınabilir jammer platformu.",
  },
  "jammer-ve-rf-efektorler-urun-3": {
    title: "Jammer & RF Efektörler - Ürün 3",
    description: "Sabit tesis koruma çözümleri.",
  },

  "dji-turkiye-enterprise-urun-1": {
    title: "DJI Enterprise - Ürün 1",
    description: "Endüstriyel drone platformu.",
  },
  "dji-turkiye-enterprise-urun-2": {
    title: "DJI Enterprise - Ürün 2",
    description: "Çoklu sensör entegrasyonu.",
  },
  "dji-turkiye-enterprise-urun-3": {
    title: "DJI Enterprise - Ürün 3",
    description: "Gelişmiş görev planlama yetenekleri.",
  },
};

function formatSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = PRODUCTS[slug];

  const title = product?.title ?? formatSlug(slug);
  const description =
    product?.description ??
    "Bu ürün için detaylı açıklama henüz eklenmedi.";
  const features = product?.features ?? [
    "Örnek özellik A",
    "Örnek özellik B",
    "Örnek özellik C",
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-8 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-gray-600">/urunler/{slug}</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
              Ürün Görseli
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Ürün Açıklaması
              </h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Öne Çıkan Özellikler
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-gray-900 hover:bg-black text-white font-medium py-2.5 rounded-md">
                Teklif Al
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}


import Link from "next/link";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import type { DbProduct } from "@/lib/products";
import EnterpriseClient from "./_components/EnterpriseClient";

export const metadata = {
  title: "DJI Türkiye Enterprise | Ürünler",
  description: "DJI Enterprise çözümleri ve kurumsal ürünler için kataloğumuz.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "dji-turkiye-enterprise";
  const cat = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(cat?.slug ?? slug);

  // Group products by altCategory (fallback to "Diğer")
  const groups = new Map<string, DbProduct[]>();
  for (const p of products) {
    const key = (p.altCategory ?? "Diğer").trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }

  // Desired section order; remaining groups follow alphabetically
  const desiredOrder = [
    "DJİ PROFESYONEL İHA",
    "DJİ İHA SENSÖRLERİ",
    "Diğer",
  ] as const;
  const orderedKeys = Array.from(groups.keys()).sort((a, b) => {
    const ia = desiredOrder.indexOf(a as any);
    const ib = desiredOrder.indexOf(b as any);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b, "tr");
  });

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">DJI Türkiye Enterprise</h1>
            <span className="inline-flex items-center rounded-full border border-emerald-600/40 bg-emerald-600/10 px-2.5 py-0.5 text-xs text-emerald-300">
              Yetkili Satıcı
            </span>
            <div className="flex-1" />
            <Link href="/iletisim" className="hidden md:inline-flex rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 text-sm font-medium">
              Teklif Al
            </Link>
          </div>
          <p className="mt-2 text-gray-300 max-w-3xl">
            Bisavunma olarak, DJI Enterprise yetkili satıcısı olmanın güvencesiyle; geniş ürün
            yelpazemiz, eğitim ve yazılım desteğimiz ve kesintisiz teknik servis çözümlerimiz ile
            her sektörden firmaya özel çözümler sunuyoruz.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-blue-400">
            <li>
              <span className="font-medium text-white">Geniş Ürün Yelpazesi:</span>
              {' '}İhtiyaçlarınıza en uygun DJI Enterprise drone’unu bulmak için Bisavunma’nın geniş ürün
              yelpazesine göz atın.
            </li>
            <li>
              <span className="font-medium text-white">Eğitim ve Yazılım Desteği:</span>
              {' '}DJI Enterprise drone’larınızı en verimli şekilde kullanmayı öğrenin. Bisavunma’nın uzman
              ekibi tarafından sunulan eğitim ve yazılım desteği ile drone’larınızdan en iyi performansı alın.
            </li>
            <li>
              <span className="font-medium text-white">Kesintisiz Teknik Servis Çözümleri:</span>
              {' '}Bisavunma’nın deneyimli teknik servis ekibi, drone’larınızın her zaman en iyi durumda
              kalması için kesintisiz destek sunar.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4">
        <EnterpriseClient
          groups={orderedKeys.map((k) => ({ key: k, items: groups.get(k)! }))}
          basePath={`/urunler/${slug}`}
        />
        {products.length === 0 && (
          <div className="max-w-6xl mx-auto text-gray-400 mt-6">Bu kategoride ürün bulunamadı.</div>
        )}
      </section>
    </div>
  );
}

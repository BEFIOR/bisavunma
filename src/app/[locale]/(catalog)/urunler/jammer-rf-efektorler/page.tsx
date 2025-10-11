import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import JammerPage from "./JammerPage";

export const metadata = {
  title: "Jammer & RF Efektörler | Ürünler",
  description: "Jammer ve RF etkisizleştirme çözümleri için ürün kataloğu.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "jammer-rf-efektorler";
  const alt = "jammer-ve-rf-efektorler";
  const cat = (await getCategoryBySlug(slug)) ?? (await getCategoryBySlug(alt));
  const effectiveSlug = cat?.slug ?? slug;
  const products = await getProductsByCategorySlug(effectiveSlug);

  return (
    <JammerPage
      products={products}
      effectiveSlug={effectiveSlug}
      categoryDescription={cat?.description || undefined}
    />
  );
}

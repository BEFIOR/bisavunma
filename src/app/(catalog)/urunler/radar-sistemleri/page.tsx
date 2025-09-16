import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import RadarPage from "./RadarPage";

export const metadata = {
  title: "Radar Sistemleri | Ürünler",
  description: "Radar sistemleri ve radar tabanlı çözümler için ürün kataloğu.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "radar-sistemleri";
  const cat = await getCategoryBySlug(slug);
  const effectiveSlug = cat?.slug ?? slug;
  const products = await getProductsByCategorySlug(effectiveSlug);

  return (
    <RadarPage
      products={products}
      effectiveSlug={effectiveSlug}
      categoryDescription={cat?.description || undefined}
    />
  );
}

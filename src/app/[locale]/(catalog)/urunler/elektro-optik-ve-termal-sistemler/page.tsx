import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import ElektroOptikPage from "./ElektroOptikPage";

export const metadata = {
  title: "Elektro-Optik & Termal Sistemler | Ürünler",
  description:
    "Elektro-optik ve termal sistemler için gelişmiş sensör ve çözüm ürünleri.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "elektro-optik-termal-sistemler";
  const alt = "elektro-optik-ve-termal-sistemler";
  const cat = (await getCategoryBySlug(slug)) ?? (await getCategoryBySlug(alt));
  const effectiveSlug = cat?.slug ?? slug;
  const products = await getProductsByCategorySlug(effectiveSlug);

  return (
    <ElektroOptikPage
      products={products}
      effectiveSlug={effectiveSlug}
      categoryDescription={cat?.description || undefined}
    />
  );
}

import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import { getTranslations } from "next-intl/server";
import ElektroOptikPage from "./ElektroOptikPage";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("elektroOptik");

  return {
    title: `${t("title")} | ${locale === "en" ? "Products" : "Ürünler"}`,
    description: t("description"),
  };
}

export const revalidate = 0;

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

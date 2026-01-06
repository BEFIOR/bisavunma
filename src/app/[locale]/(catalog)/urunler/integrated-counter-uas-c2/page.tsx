import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";
import { getTranslations } from "next-intl/server";
import CounterUASPage from "./CounterUASPage";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("counterUAS");

  return {
    title: `${t("title")} | ${locale === "en" ? "Products" : "Ürünler"}`,
    description: t("description"),
  };
}

export const revalidate = 0;

export default async function Page() {
  const slug = "integrated-counter-uas-c2";
  const cat = await getCategoryBySlug(slug);
  const effectiveSlug = cat?.slug ?? slug;
  const products = await getProductsByCategorySlug(effectiveSlug);

  return (
    <CounterUASPage
      products={products}
      effectiveSlug={effectiveSlug}
      categoryDescription={cat?.description || undefined}
    />
  );
}

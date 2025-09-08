import Link from "next/link";
import Image from "next/image";
import { getProductsByCategorySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/server/repositories/categories";

export const metadata = {
  title: "RF Sistemleri ve Sinyal İstihbarat (SIGINT) | Ürünler",
  description:
    "RF sistemleri, sinyal istihbaratı (SIGINT) ve ilgili çözümler için ürün kataloğu.",
};

export const revalidate = 60;

export default async function Page() {
  const slug = "rf-sistemleri-ve-sinyal-istihbarat-sigint";
  const cat = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(cat?.slug ?? slug);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">RF Sistemleri ve Sinyal İstihbarat (SIGINT)</h1>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto text-gray-300">
          Sol menüden alt kategorileri açarak ürünlere ulaşabilirsiniz.
        </div>
      </section>
    </div>
  );
}

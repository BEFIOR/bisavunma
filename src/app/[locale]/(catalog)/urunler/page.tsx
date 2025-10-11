import { listCategories } from "@/server/repositories/categories";
import FlowingMenu from "@/components/FlowingMenu";

const categories = await listCategories();

const categoryImages: Record<string, string> = {
  // Example: "rf-sistemleri-ve-sinyal-istihbarat-sigint": "/images/categories/rf.jpg",
  // Add your own images under /public/images/categories and map here
};

export default function Urunler() {
  const items = categories
    .filter((c) => !c.parentId)
    .map((c) => ({
      link: `/urunler/${c.slug}`,
      text: c.title,
      image: categoryImages[c.slug] ?? "/logo.webp",
    }));

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <section className="pt-28 pb-8 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-5xl my-5 font-bold text-white text-center">
            Ürünlerimiz
          </h1>
        </div>
      </section>
      <section className="min-h-[70vh]">
        <FlowingMenu items={items} />
      </section>
    </div>
  );
}

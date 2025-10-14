import { listCategories } from "@/server/repositories/categories";
import Image from "next/image";
// Removed FlowingMenu for performance

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
        {/* Optimized Category Grid - Simple grid instead of heavy GSAP animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {items.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.text}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.text}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

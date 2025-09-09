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
      {/* Hero */}
      <section className="pt-28 pb-10 px-4 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              RF Sistemleri ve Sinyal İstihbarat (SIGINT)
            </h1>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere, sapien vitae rhoncus pulvinar, dolor urna luctus ante,
              non pulvinar neque ipsum vitae lectus. Integer vehicula, metus at
              fringilla cursus, tortor ligula varius nunc, sit amet dignissim mi
              orci a lectus.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#preview"
                className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white"
              >
                Ürünleri Keşfet
              </Link>
              <Link
                href="/iletisim"
                className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-xl bg-neutral-900/50 ring-1 ring-white/5 overflow-hidden">
            <Image
              src="/logo.webp"
              alt="RF Sistemleri"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-10 border-b border-neutral-900 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-neutral-900/40 ring-1 ring-white/5 p-5"
            >
              <div className="text-white font-semibold">Öne Çıkan {i}</div>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                luctus, tristique id, elit. Aenean ut ultrices magna.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product preview */}
      <section id="preview" className="px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-white">Ürün Önizlemesi</h2>
          <p className="mt-1 text-neutral-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                href={`/urunler/${slug}/${p.slug}`}
                className="group rounded-xl overflow-hidden ring-1 ring-white/5 bg-neutral-900/40 hover:ring-sky-600/40 transition"
              >
                <div className="relative aspect-[4/3] w-full bg-neutral-900">
                  <Image
                    src={p.image || "/logo.webp"}
                    alt={p.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-4">
                  <div className="text-white font-medium line-clamp-1">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400 line-clamp-2">
                    {p.description ||
                      "Lorem ipsum dolor sit amet, consectetur."}
                  </div>
                </div>
              </Link>
            ))}
            {products.length === 0 && (
              <div className="col-span-full text-neutral-400">
                Şu an için ürün bulunamadı.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-sky-700 to-sky-500 p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <div className="text-white text-lg font-semibold">
                Danışmanlık alın
              </div>
              <p className="text-white/90 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sed risus non neque rhoncus congue.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="mt-4 md:mt-0 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-sky-700 font-medium hover:bg-white/90"
            >
              İletişim Kur
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

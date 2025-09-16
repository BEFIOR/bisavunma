import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { Radio, ArrowLeft, CheckCircle } from "lucide-react";
import { getRfSystemBySlug } from "@/data/rf-systems";
import { getProductsByCategorySlug } from "@/lib/products";
import HeroSlider from "@/components/HeroSlider";

export const revalidate = 60;

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = await getProductsByCategorySlug(
    "rf-sistemleri-ve-sinyal-istihbarat-sigint"
  );
  return slugs.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getRfSystemBySlug(slug);
  if (!product) return { title: "RF Sistemleri Bulunamadı" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductInRf({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getRfSystemBySlug(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Link
              href="/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              RF Sistemleri
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <Radio className="w-4 h-4" />
                  <span>RF Sensörleri</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {product.title}
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
                  >
                    Teklif Al
                  </Link>
                  <Link
                    href="#ozellikler"
                    className="inline-flex items-center px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Özellikleri Görüntüle
                  </Link>
                </div>
              </HeroAnimation>
            </div>

            <HeroAnimation direction="right" delay={1.0}>
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
                <div className="relative z-10 w-full h-full p-4 sm:p-6 md:p-8">
                  <HeroSlider
                    images={(product.images && product.images.length > 0) ? product.images : [product.image]}
                    className=""
                    autoplay={true}
                    autoplayInterval={3000}
                    loop={true}
                    slideClassName="bg-transparent"
                  />
                </div>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="ozellikler"
        className="py-20 px-4 border-t border-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Öne Çıkan Özellikler
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {product.title} ile spektrum analizinde üstün performans
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-sky-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Özellik {index + 1}
                    </h3>
                  </div>
                  <p className="text-gray-400">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 " />
                <Image
                  src={product.section1.image}
                  alt={product.section1.title}
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  {product.section1.title}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <div
                  className="text-lg text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.section1.content }}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <ScrollAnimation direction="left">
                <h2 className="text-3xl font-bold text-white">
                  {product.section2.title}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={0.2}>
                <div
                  className="text-lg text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.section2.content }}
                />
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="right" className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 " />
                <Image
                  src={product.section2.image}
                  alt={product.section2.title}
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 " />
                <Image
                  src={product.section3.image}
                  alt={product.section3.title}
                  width={600}
                  height={400}
                  className="object-contain max-w-full max-h-full rounded-xl relative z-10"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="right">
                <h2 className="text-3xl font-bold text-white">
                  {product.section3.title}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.2}>
                <div
                  className="text-lg text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.section3.content }}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              {product.title} Hakkında Daha Fazla Bilgi
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Teknik özellikler, fiyatlandırma ve kurulum hizmetleri için
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint"
                className="inline-flex items-center px-8 py-4 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
              >
                Diğer RF Ürünleri
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

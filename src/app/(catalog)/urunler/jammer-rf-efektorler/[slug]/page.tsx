import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductsByCategorySlug, getProductBySlug } from "@/lib/products";
import HeroSlider from "@/components/HeroSlider";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { Shield, Radio, Zap, ArrowLeft, CheckCircle } from "lucide-react";

export const revalidate = 60;

type Params = { slug: string };

export async function generateStaticParams() {
  const a = await getProductsByCategorySlug("jammer-rf-efektorler");
  const b = await getProductsByCategorySlug("jammer-ve-rf-efektorler");
  const uniq = new Map<string, true>();
  [...a, ...b].forEach((p) => uniq.set(p.slug, true));
  return Array.from(uniq.keys()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Jammer Ürünü Bulunamadı" };
  return {
    title: product.title,
    description: product.description ?? undefined,
  };
}

export default async function JammerProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const title = product.title;
  const description =
    product.description ??
    "Bu jammer ürünü için açıklama yakında eklenecektir.";

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero */}
      <section className="relative pt-24 overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href="/urunler/jammer-rf-efektorler"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Jammer & RF Efektörler
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <HeroAnimation direction="fade" delay={0.2}>
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Elektronik Harp / C-UAS</span>
                </div>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.4}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {title}
                </h1>
              </HeroAnimation>

              <HeroAnimation direction="up" delay={0.6}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {description}
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
                  <a
                    href="#ozellikler"
                    className="inline-flex items-center px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Özellikleri Görüntüle
                  </a>
                </div>
              </HeroAnimation>
            </div>

            <HeroAnimation direction="right" delay={1.0}>
              <div className="relative h-[360px] lg:h-[480px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl blur-3xl" />
                <div className="relative z-10 w-full h-full p-4 sm:p-6 md:p-8">
                  {product.image ? (
                    <HeroSlider images={[product.image]} />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center">
                      <Shield className="w-16 h-16 text-sky-500" />
                    </div>
                  )}
                </div>
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="ozellikler" className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Öne Çıkan Özellikler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {title} ile hava sahasında üstün C‑UAS ve EW koruması
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(product.features ?? [
              "Geniş bant kapsama",
              "Yüksek çıkış gücü",
              "Seçici bastırma",
            ]).map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-sky-400" />
                    <h3 className="text-lg font-semibold text-white">Özellik {index + 1}</h3>
                  </div>
                  <p className="text-gray-400">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capability Highlights */}
      <section className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-3 mb-2 text-white">
                <Radio className="w-5 h-5 text-sky-400" />
                Spektrum Kapsaması
              </div>
              <p className="text-gray-400 text-sm">
                Geniş bant ISM, GNSS ve haberleşme bantlarında kesintisiz bastırma için optimize edilmiş mimari.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-3 mb-2 text-white">
                <Zap className="w-5 h-5 text-sky-400" />
                Yüksek Çıkış Gücü
              </div>
              <p className="text-gray-400 text-sm">
                Sektör başına ayarlanabilir güç seviyeleri ile uzun menzilde güvenilir etkisizleştirme.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-3 mb-2 text-white">
                <Shield className="w-5 h-5 text-sky-400" />
                Askeri Dayanıklılık
              </div>
              <p className="text-gray-400 text-sm">
                IP65/66 koruma, pasif/aktif soğutma ve 7/24 operasyon için sahada kanıtlanmış tasarım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              {title} Hakkında Daha Fazla Bilgi
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Teknik özellikler, fiyatlandırma ve entegrasyon seçenekleri için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
              >
                Teklif Al
              </Link>
              <Link
                href="/urunler/jammer-rf-efektorler"
                className="inline-flex items-center px-8 py-4 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors"
              >
                Diğer Jammer Ürünleri
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

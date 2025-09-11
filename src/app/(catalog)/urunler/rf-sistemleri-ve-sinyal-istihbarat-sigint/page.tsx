import Link from "next/link";
import Image from "next/image";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  HeroAnimation,
} from "@/components/animations/ScrollAnimations";
import { Radio, Eye, Settings, ChevronDown } from "lucide-react";
import { rfSystems } from "@/data/rf-systems";

export default function RfSystemsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <HeroAnimation direction="fade" delay={0.2}>
              <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Radio className="w-4 h-4" />
                <span>RF Sistemleri ve Sinyal İstihbarat</span>
              </div>
            </HeroAnimation>
            <HeroAnimation direction="up" delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                RF Sensörleri
              </h1>
            </HeroAnimation>

            <HeroAnimation direction="up" delay={0.6}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gelişmiş spektrum analizi ve sinyal istihbarat sistemleri ile RF
                ortamınızı tam kontrol altında tutun.
              </p>
            </HeroAnimation>
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              RFeye Node Ürün Ailesi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Farklı frekans aralıkları ve uygulama ihtiyaçları için optimize
              edilmiş RF sensör çözümleri
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rfSystems.map((product, index) => (
              <StaggerItem key={product.slug}>
                <Link
                  href={`/urunler/rf-sistemleri-ve-sinyal-istihbarat-sigint/${product.slug}`}
                >
                  <div className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video w-full rounded-lg bg-neutral-800 mb-4 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-500"
                        >
                          <div className="w-1 h-1 rounded-full bg-sky-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center text-sky-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Detayları Görüntüle
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              RFeye Node Özellikleri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profesyonel spektrum analizi için gerekli tüm özellikler
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Geniş Frekans Aralığı
                </h3>
                <p className="text-gray-400">
                  100 MHz'den 40 GHz'e kadar geniş frekans aralığında spektrum
                  analizi
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Gerçek Zamanlı İzleme
                </h3>
                <p className="text-gray-400">
                  Sürekli spektrum izleme ve otomatik sinyal tespiti
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Gelişmiş Analiz
                </h3>
                <p className="text-gray-400">
                  DSP algoritmaları ve otomatik sinyal sınıflandırma
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

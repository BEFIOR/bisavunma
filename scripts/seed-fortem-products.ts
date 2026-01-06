import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: { url: "mysql://root:rootsifre123@db.home:3306/bisavunma" }
  }
});

async function main() {
  console.log("Starting Fortem Technologies product seeding...\n");

  // Step 1: Add new Counter-UAS category
  console.log("=== Step 1: Adding Counter-UAS category ===");
  const counterUASCategory = await prisma.category.upsert({
    where: { slug: "integrated-counter-uas-c2" },
    update: {},
    create: {
      slug: "integrated-counter-uas-c2",
      title: "Integrated Counter-UAS & C2",
      description: "Entegre Karşı-İHA ve Komuta Kontrol Sistemleri",
      position: 6
    }
  });
  console.log(`Category created/found: ${counterUASCategory.slug} (ID: ${counterUASCategory.id})`);

  // Step 2: Delete old MGR radar products
  console.log("\n=== Step 2: Removing old radar products ===");
  const oldRadarSlugs = [
    "mgr-1200-radar-sistemi",
    "mgr-600-radar-sistemi",
    "mgr-a600-advanced-radar-sistemi",
    "bisavunma-a200-mk2-radar-sistemi"
  ];
  
  for (const slug of oldRadarSlugs) {
    try {
      await prisma.product.delete({ where: { slug } });
      console.log(`Deleted: ${slug}`);
    } catch (e) {
      console.log(`Not found (already deleted): ${slug}`);
    }
  }

  // Step 3: Add new TrueView radar products
  console.log("\n=== Step 3: Adding TrueView radar products ===");
  const radarProducts = [
    {
      slug: "trueview-r40-radar",
      title: "TrueView R40 Radar",
      description: "360° kapsamalı, uzun menzilli 3D AESA radar. Çoklu drone sürülerini tespit ve takip edebilen, zorlu hava koşullarında çalışabilen gelişmiş radar sistemi.",
      image: "/products/radar-sistemleri/trueview-r40.webp",
      altCategory: "Radar Sistemleri"
    },
    {
      slug: "trueview-r30-radar",
      title: "TrueView R30 Radar",
      description: "Orta menzilli 3D AESA radar. Kompakt tasarımı ile mobil uygulamalar için ideal, yüksek doğruluklu hedef tespiti sağlar.",
      image: "/products/radar-sistemleri/trueview-r30.webp",
      altCategory: "Radar Sistemleri"
    },
    {
      slug: "trueview-r20-radar",
      title: "TrueView R20 Radar",
      description: "Taşınabilir, hafif 3D radar sistemi. Hızlı kurulum, düşük güç tüketimi ve yüksek mobilite gerektiren operasyonlar için tasarlanmıştır.",
      image: "/products/radar-sistemleri/trueview-r20.webp",
      altCategory: "Radar Sistemleri"
    }
  ];

  for (let i = 0; i < radarProducts.length; i++) {
    const product = radarProducts[i];
    const created = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product
    });
    console.log(`Created/Updated: ${created.slug}`);

    // Link to radar category (ID: 2)
    await prisma.productCategory.upsert({
      where: {
        productSlug_categoryId: {
          productSlug: product.slug,
          categoryId: 2
        }
      },
      update: { position: i },
      create: {
        productSlug: product.slug,
        categoryId: 2,
        position: i
      }
    });
    console.log(`  -> Linked to Radar Sistemleri category`);
  }

  // Step 4: Add Counter-UAS products
  console.log("\n=== Step 4: Adding Counter-UAS products ===");
  const counterUASProducts = [
    {
      slug: "dronehunter-f700",
      title: "DroneHunter F700",
      description: "Otonom kinetic müdahale dronu. Düşman drone'ları fiziksel olarak yakalayan ve etkisiz hale getiren, AI destekli takip sistemine sahip gelişmiş C-UAS platformu.",
      image: "/products/counter-uas/dronehunter-f700.webp",
      altCategory: "Counter-UAS"
    },
    {
      slug: "dronehangar",
      title: "DroneHangar",
      description: "Otonom DroneHunter operasyonları için akıllı hangar sistemi. Otomatik şarj, bakım ve 7/24 kesintisiz koruma sağlar.",
      image: "/products/counter-uas/dronehangar.webp",
      altCategory: "Counter-UAS"
    },
    {
      slug: "skydome-manager",
      title: "SkyDome Manager",
      description: "Entegre hava sahası yönetim ve komuta-kontrol yazılımı. Tüm sensör ve efektörleri tek bir arayüzden yöneten, AI destekli karar destek sistemi.",
      image: "/products/counter-uas/skydome-manager.webp",
      altCategory: "Counter-UAS"
    },
    {
      slug: "edge-fusion-system",
      title: "Edge Fusion System",
      description: "Dağıtık sensör füzyon platformu. Radar, RF, EO/IR ve diğer sensör verilerini gerçek zamanlı birleştiren, edge computing tabanlı gelişmiş analitik sistem.",
      image: "/products/counter-uas/edge-fusion-system.webp",
      altCategory: "Counter-UAS"
    },
    {
      slug: "trueview-c30-camera",
      title: "TrueView C30 Camera System",
      description: "AI destekli çok sensörlü kamera sistemi. Optik, termal ve IR görüntüleme ile drone tespit ve sınıflandırma yapan gelişmiş EO/IR platformu.",
      image: "/products/counter-uas/trueview-c30.webp",
      altCategory: "Counter-UAS"
    }
  ];

  for (let i = 0; i < counterUASProducts.length; i++) {
    const product = counterUASProducts[i];
    const created = await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product
    });
    console.log(`Created/Updated: ${created.slug}`);

    // Link to Counter-UAS category
    await prisma.productCategory.upsert({
      where: {
        productSlug_categoryId: {
          productSlug: product.slug,
          categoryId: counterUASCategory.id
        }
      },
      update: { position: i },
      create: {
        productSlug: product.slug,
        categoryId: counterUASCategory.id,
        position: i
      }
    });
    console.log(`  -> Linked to Counter-UAS category`);
  }

  console.log("\n=== Seeding complete! ===");
  
  // Print summary
  const categories = await prisma.category.findMany();
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { slug: { startsWith: "trueview" } },
        { slug: { startsWith: "drone" } },
        { slug: { startsWith: "skydome" } },
        { slug: { startsWith: "edge" } }
      ]
    }
  });
  
  console.log("\nCategories:", categories.map(c => c.slug));
  console.log("\nNew Fortem products:", products.map(p => p.slug));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

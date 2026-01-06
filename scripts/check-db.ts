import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: { url: "mysql://root:rootsifre123@db.home:3306/bisavunma" }
  }
});

async function main() {
  console.log("=== CATEGORIES ===");
  const categories = await prisma.category.findMany();
  console.log(JSON.stringify(categories, null, 2));

  console.log("\n=== PRODUCTS ===");
  const products = await prisma.product.findMany();
  console.log(JSON.stringify(products, null, 2));

  console.log("\n=== PRODUCT-CATEGORIES ===");
  const pc = await prisma.productCategory.findMany();
  console.log(JSON.stringify(pc, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

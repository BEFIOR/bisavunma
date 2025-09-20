import Image from "next/image";
import RfSidebar from "./RfSidebar.client";
import RfMobileSidebar from "./RfMobileSidebar.client";
import { getProductsByCategorySlug } from "@/lib/products";

export const revalidate = 60;

export default async function RfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = "rf-sistemleri-ve-sinyal-istihbarat-sigint";
  const products = await getProductsByCategorySlug(slug);

  return (
    <div className="min-h-screen bg-white flex">
      <aside className="hidden lg:block w-72 bg-black text-gray-200 min-h-screen sticky top-0">
        <div className="p-5 border-b border-gray-800">
          <div className="h-16 w-full" />
        </div>
        <RfSidebar products={products} />
      </aside>

      <div className="flex-1">
        <RfMobileSidebar products={products} />
        {children}
      </div>
    </div>
  );
}

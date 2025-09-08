import Image from "next/image";
import RfSidebar from "./RfSidebar.client";
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
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={150}
              height={150}
              className="rounded"
            />
          </div>
        </div>
        <RfSidebar products={products} />
      </aside>

      <div className="flex-1">{children}</div>
    </div>
  );
}

import Link from "next/link";
import prisma from "@/server/db/client";
import { Box, Layers, User } from "lucide-react";
export default async function AdminHome() {
  const [productCount, categoryCount, userCount] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.user.count(),
  ]);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Yönetim Paneli</h1>
        <p className="text-gray-400 text-sm">Hızlı özet ve kısayollar</p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Ürünler</div>
              <div className="text-2xl font-semibold">{productCount}</div>
            </div>
            <Box className="h-6 w-6 text-gray-400" />
          </div>
          <Link
            href="/admin/products"
            className="mt-3 inline-block text-sm text-emerald-400 hover:text-emerald-300"
          >
            Tümünü görüntüle →
          </Link>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Kategoriler</div>
              <div className="text-2xl font-semibold">{categoryCount}</div>
            </div>
            <Layers className="h-6 w-6 text-gray-400" />
          </div>
          <Link
            href="/admin/categories"
            className="mt-3 inline-block text-sm text-emerald-400 hover:text-emerald-300"
          >
            Yönet →
          </Link>
        </div>
        <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Kullanıcılar</div>
              <div className="text-2xl font-semibold">{userCount}</div>
            </div>
            <User className="h-6 w-6 text-gray-400" />
          </div>
          <Link
            href="/admin/settings"
            className="mt-3 inline-block text-sm text-emerald-400 hover:text-emerald-300"
          >
            Ayarlar →
          </Link>
        </div>
      </section>
      <section className="rounded-xl border border-gray-800 bg-gray-950/60 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Hızlı İşlemler</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/products/new"
            className="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-2"
          >
            Yeni Ürün
          </Link>
          <Link
            href="/admin/products"
            className="inline-flex items-center rounded-lg border border-gray-800 hover:bg-gray-900 text-gray-200 text-sm px-4 py-2"
          >
            Ürünleri Yönet
          </Link>
          <Link
            href="/admin/categories"
            className="inline-flex items-center rounded-lg border border-gray-800 hover:bg-gray-900 text-gray-200 text-sm px-4 py-2"
          >
            Kategorileri Yönet
          </Link>
        </div>
      </section>
    </div>
  );
}

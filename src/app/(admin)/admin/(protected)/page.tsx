import Link from "next/link";
export default async function AdminHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Yönetim Paneli</h1>
      <p className="text-gray-600">Sol üstteki menüden sayfalara geçin.</p>
      <Link href="/admin/products">Urunler Listesi</Link>
    </div>
  );
}

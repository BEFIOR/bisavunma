export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6 text-white">
      <div>
        <h1 className="text-5xl font-bold mb-2">Sayfa bulunamadı</h1>
        <p className="text-gray-500">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
      </div>
    </div>
  );
}

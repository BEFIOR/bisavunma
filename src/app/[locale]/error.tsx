"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Bir hata oluştu</h1>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={() => reset()}
        >
          Tekrar dene
        </button>
      </div>
    </div>
  );
}


import Footer from "@/components/Footer";

export const metadata = {
  title: "Şartlar ve Kullanım Koşulları | Bisavunma",
  description:
    "Bisavunma web sitesi şartlar ve kullanım koşulları metni.",
};

const maddeler = [
  {
    baslik: "1. Kapsam",
    icerik:
      "Bu sayfada yer alan koşullar, Bisavunma internet sitesinin tüm kullanımı için geçerlidir. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.",
  },
  {
    baslik: "2. Bilgi Doğruluğu",
    icerik:
      "Sitede yer alan ürün, hizmet ve teknik içerikler bilgilendirme amaçlıdır. Nihai teknik kapsam, teklif ve sözleşme belgelerinde belirtilir.",
  },
  {
    baslik: "3. Fikri Mülkiyet",
    icerik:
      "Sitedeki tüm metin, görsel, logo, tasarım ve diğer içeriklerin fikri mülkiyet hakları aksi belirtilmedikçe Bisavunma'ya aittir. İzinsiz kopyalama ve dağıtım yapılamaz.",
  },
  {
    baslik: "4. Yasaklı Kullanım",
    icerik:
      "Siteyi hukuka aykırı amaçla kullanmak, hizmet kesintisine yol açacak girişimlerde bulunmak, sistemlere yetkisiz erişim denemesi yapmak yasaktır.",
  },
  {
    baslik: "5. Üçüncü Taraf Bağlantılar",
    icerik:
      "Sitede üçüncü taraf internet sitelerine yönlendirmeler bulunabilir. Bu bağlantılar bilgilendirme amaçlı olup, ilgili sitelerin içerik ve politikalarından Bisavunma sorumlu değildir.",
  },
  {
    baslik: "6. Sorumluluğun Sınırlandırılması",
    icerik:
      "Bisavunma, internet sitesinin kesintisiz veya hatasız çalışacağını garanti etmez. Teknik altyapı veya dış kaynaklı aksaklıklardan doğabilecek zararlar açısından mevzuatın izin verdiği ölçüde sorumluluk kabul edilmez.",
  },
  {
    baslik: "7. Gizlilik ve Kişisel Veriler",
    icerik:
      "Kişisel verileriniz, yasal mevzuata uygun şekilde işlenir ve korunur. Ayrıntılı bilgi için KVKK Aydınlatma Metni ve Çerez Politikası sayfalarını inceleyebilirsiniz.",
  },
  {
    baslik: "8. Değişiklik Hakkı",
    icerik:
      "Bisavunma, işbu kullanım koşullarını önceden bildirim yapmaksızın güncelleme hakkını saklı tutar. Güncel metin web sitesinde yayımlandığı andan itibaren geçerlidir.",
  },
  {
    baslik: "9. İletişim",
    icerik:
      "Şartlar ve kullanım koşulları hakkında sorularınız için info@bisavunma.com adresi üzerinden bizimle iletişime geçebilirsiniz.",
  },
];

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Şartlar ve Kullanım Koşulları
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Bu metin, Bisavunma internet sitesinin kullanımına ilişkin genel
            kuralları ve tarafların hak-yükümlülüklerini açıklar.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid gap-4">
          {maddeler.map((madde) => (
            <article
              key={madde.baslik}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <h2 className="text-xl font-semibold text-white">{madde.baslik}</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">{madde.icerik}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

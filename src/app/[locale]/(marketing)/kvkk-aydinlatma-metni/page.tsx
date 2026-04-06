import Footer from "@/components/Footer";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Bisavunma",
  description:
    "Bisavunma Güvenlik ve Radar Sistemleri San. Tic. Ltd. Şti. Kişisel Verilerin Korunması ve İşlenmesi Politikası.",
};

const aktarimKosullari = [
  "Kişisel verilerin aktarımına ilişkin faaliyetin kanunlarda açıkça öngörülmesi",
  "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili ve gerekli olması",
  "Şirkete düşen hukuki yükümlülüğün yerine getirilmesi için zorunlu olması",
  "Veri sahibi tarafından alenileştirilmiş olması ve amaçla sınırlı kullanılması",
  "Şirketin, veri sahibinin veya üçüncü kişilerin haklarının tesisi, kullanılması veya korunması için zorunlu olması",
  "Veri sahibinin temel hak ve özgürlüklerine zarar vermemek kaydıyla şirketin meşru menfaati için zorunlu olması",
  "Fiili imkânsızlık nedeniyle rızasını açıklayamayacak kişinin hayatı veya beden bütünlüğünü korumak için zorunlu olması",
];

export default function KvkkAydinlatmaMetniPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            KVKK Aydınlatma Metni
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            BİSAVUNMA Güvenlik ve Radar Sistemleri Sanayi Ticaret Limited Şirketi
            tarafından hazırlanan Kişisel Verilerin Korunması ve İşlenmesi
            Politikası metnidir.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Bölüm 1 - Giriş</h2>
            <h3 className="mt-6 text-lg font-semibold text-gray-100">1.1 Giriş</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Kişisel verilerin korunması, Şirketimizin en önemli öncelikleri
              arasındadır. Şirketimiz, 6698 sayılı Kişisel Verilerin Korunması
              Kanunu kapsamında kişisel veri işleme faaliyetlerini hukuka uygun,
              şeffaf ve ölçülü şekilde yürütmeyi hedefler.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Bu politika ile veri işleme faaliyetlerinde benimsediğimiz temel
              ilkeler açıklanmakta, ilgili kişilerin bilgilendirilmesi ve gerekli
              şeffaflığın sağlanması amaçlanmaktadır.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-100">1.2 Kapsam</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              İşbu politika, Şirket çalışanları haricindeki kişilerin otomatik
              veya bir veri kayıt sisteminin parçası olmak kaydıyla otomatik
              olmayan yollarla işlenen tüm kişisel verilerini kapsar.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Bölüm 2 - Kişisel Verilerin İşlenmesi
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Kullanıcı tarafından paylaşılan kişisel veriler; mevzuata uygun
              olarak, veri güvenliği sağlanarak, belirli, açık ve meşru amaçlarla
              bağlantılı ve sınırlı biçimde işlenir.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Şirketimiz, ilgili kişi beyanlarını esas alır; verilerin doğruluğu ve
              güncelliği için resmi belgeler veya kişi talepleri doğrultusunda
              gerekli güncellemeleri yapar.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Veriler, mevzuatta öngörülen veya işleme amacının gerektirdiği süre
              boyunca saklanır; süre bitiminde silinir, yok edilir veya anonim hale
              getirilir.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Bölüm 3 - Kişisel Verilerin Aktarılması
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Şirketimiz, Kanun&apos;un 8. ve 9. maddeleri kapsamında gerekli güvenlik
              önlemlerini alarak kişisel verileri yurt içine ve/veya yurt dışına
              aktarabilir.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Açık rıza bulunması veya aşağıdaki hukuki şartlardan en az birinin
              varlığı hâlinde veri aktarımı yapılabilir:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-300 leading-relaxed">
              {aktarimKosullari.map((madde) => (
                <li key={madde}>{madde}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Bölüm 4 - Gizlilik ve Veri Güvenliği
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Kişisel veriler gizlidir; Şirketimiz veriye sadece yetkili kişilerin
              erişimini sağlar. Yetkisiz erişimi önlemek amacıyla teknik ve idari
              tedbirler sürekli güncellenir.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Kişisel verilerin hukuka aykırı olarak elde edildiğinin tespiti
              hâlinde, durum gecikmeksizin Kişisel Verileri Koruma Kurulu&apos;na ve
              ilgili veri sahiplerine bildirilir.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Bölüm 5 - Veri Sahibinin Hakları
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Veri sahipleri, 6698 sayılı Kanun&apos;un 11. maddesi kapsamındaki
              haklarını kullanarak kendileriyle ilgili veri işleme faaliyetleri
              hakkında bilgi talep edebilir.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Kanun&apos;un 28. maddesinde belirtilen istisnai hâllerde bu hakların
              kullanımı sınırlı olabilir.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Şirketimiz, mevzuat değişiklikleri doğrultusunda bu politikayı her
              zaman güncelleme hakkını saklı tutar.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

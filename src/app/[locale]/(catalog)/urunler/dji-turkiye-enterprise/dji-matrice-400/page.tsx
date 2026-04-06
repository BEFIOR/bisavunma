import DjiEnterpriseProductPage from "../_components/DjiEnterpriseProductPage";

export const metadata = {
  title: "DJI Matrice 400 | Kurumsal Drone Platformu | Bisavunma",
  description:
    "DJI Matrice 400; uzun ucus suresi, yuksek tasima kapasitesi ve gelismis engel algilama kabiliyetleriyle kurumsal operasyonlar icin tasarlanmis yeni nesil platformdur.",
};

export default function DJIMatrice400Page() {
  return (
    <DjiEnterpriseProductPage
      data={{
        title: "DJI Matrice 400",
        subtitle: "Ust Seviye Kurumsal Ucus Platformu",
        description:
          "DJI Matrice 400; guc, dayaniklilik ve operasyonel esnekligi tek platformda birlestirir. Kamu guvenligi, enerji denetimleri ve kritik altyapi operasyonlarinda yuksek guvenilirlik sunar.",
        image:
          "https://www-cdn.djiits.com/cms/uploads/3c9712c308bac3e36007c3a9ded88d9d@374*374.png",
        officialUrl: "https://enterprise.dji.com/matrice-400",
        stats: [
          { value: "59 dk", label: "Maksimum Ucus Suresi" },
          { value: "6 kg", label: "Maksimum Yuk Kapasitesi" },
        ],
        features: [
          "Uzun sureli gorevler icin optimize edilen yuksek dayanimli hava platformu",
          "6 kg'a kadar yuk tasima kapasitesi ile farkli payload kombinasyonlari",
          "Gelismis engel algilama ve guvenli ucus yardim sistemleri",
          "Kurumsal sinif video aktarimi ile uzak operasyonlarda yuksek kararlilik",
          "Acil durum, denetim ve haritalama gorevlerinde kesintisiz saha performansi",
          "Bisavunma teknik destegi ile hizli devreye alma ve operasyonel uyarlama",
        ],
        useCases: [
          "Enerji iletim hatlari ve kritik altyapi denetimleri",
          "Acil durum yonetimi ve kamu guvenligi operasyonlari",
          "Haritalama, modelleme ve genis alan gozlem gorevleri",
          "Zorlu hava kosullarinda yuksek guvenilirlik gerektiren kurumsal operasyonlar",
        ],
      }}
    />
  );
}

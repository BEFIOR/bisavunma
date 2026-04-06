import DjiEnterpriseProductPage from "../_components/DjiEnterpriseProductPage";

export const metadata = {
  title: "DJI Dock 3 | Otonom Uzak Operasyon Istasyonu | Bisavunma",
  description:
    "DJI Dock 3; 7/24 uzaktan drone operasyonlari, arac ustu konuslandirma esnekligi ve DJI FlightHub 2 entegrasyonu ile saha verimliligini artirir.",
};

export default function DJIDock3Page() {
  return (
    <DjiEnterpriseProductPage
      data={{
        title: "DJI Dock 3",
        subtitle: "7/24 Otonom Operasyon Altyapisi",
        description:
          "DJI Dock 3, kurumsal birimlere surekli ve uzaktan yonetilebilir operasyon kabiliyeti kazandirir. Matrice 4D/4TD ile birlikte sahada insan bagimliligini azaltir, operasyon suresini kisaltir.",
        image:
          "https://www-cdn.djiits.com/cms/uploads/596a276ec8d8577111cfa9bc19f147dd@374*374.png",
        officialUrl: "https://enterprise.dji.com/dock-3?site=enterprise&from=nav",
        stats: [
          { value: "24/7", label: "Uzaktan Operasyon Yetkinligi" },
          { value: "4D/4TD", label: "Desteklenen Drone Platformu" },
        ],
        features: [
          "Surekli izleme ve tekrarli gorevler icin otomasyon odakli dock yapisi",
          "Arac ustu konuslandirma secenegi ile mobil saha operasyon esnekligi",
          "Uzaktan gorev planlama, canli takip ve raporlama icin merkezilesmis is akis",
          "DJI FlightHub 2 ile operasyonel sureclerin tek panelden yonetimi",
          "Zaman kritik denetimlerde hizli kalkis ve geri donus senaryolari",
          "Bisavunma kurulum, devreye alma ve operasyon standartlastirma destegi",
        ],
        useCases: [
          "Kritik tesislerde surekli cevre guvenligi ve devriye gorevleri",
          "Enerji sahalarinda tekrarli denetim ve durum takibi",
          "Afet veya acil durumlarda hizli goruntu toplama operasyonlari",
          "Uzak lokasyonlarda insan kaynagi ihtiyacini azaltan otonom operasyonlar",
        ],
      }}
    />
  );
}

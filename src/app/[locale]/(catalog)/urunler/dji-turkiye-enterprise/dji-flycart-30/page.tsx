import DjiEnterpriseProductPage from "../_components/DjiEnterpriseProductPage";

export const metadata = {
  title: "DJI FlyCart 30 | Hava Lojistigi ve Teslimat Platformu | Bisavunma",
  description:
    "DJI FlyCart 30; guvenli yuk tasima, zorlu cografi kosullarda teslimat ve operasyonel sureklilik icin tasarlanan profesyonel hava lojistigi cozumudur.",
};

export default function DJIFlyCart30Page() {
  return (
    <DjiEnterpriseProductPage
      data={{
        title: "DJI FlyCart 30",
        subtitle: "Dinamik Hava Teslimat Cozumu",
        description:
          "DJI FlyCart 30, hava lojistigini saha operasyonlarina entegre ederek teslimat sureclerini hizlandirir. Zaman, guvenlik ve erisim zorlugu olan noktalarda etkili bir kurumsal cozum sunar.",
        image:
          "https://www-cdn.djiits.com/cms/uploads/6309da752b25bee607f0c785de57085e@374*374.png",
        officialUrl: "https://www.dji.com/flycart-30?site=enterprise&from=nav",
        stats: [
          { value: "30 kg", label: "Maksimum Tasima Kapasitesi" },
          { value: "2 Mod", label: "Kargo ve Vinc Operasyonu" },
        ],
        features: [
          "Kargo modu ve vinc modu ile farkli gorev tiplerine uyarlanabilir is akis",
          "Zorlu cografi kosullarda guvenli teslimat odakli operasyon tasarimi",
          "Lojistik sureclerde insanli tasimaya alternatif hizli hava koridoru",
          "Kamu guvenligi ve saha ekipleri icin kritik ekipman transferi",
          "Kurumsal operasyonlarda zaman kaybini azaltan surekli teslimat kabiliyeti",
          "Bisavunma ile teknik planlama, egitim ve operasyonel devreye alma destegi",
        ],
        useCases: [
          "Daglik ve ulasimi zor bolgelerde malzeme ulasimi",
          "Enerji iletim hatlarinda ekipman ve yedek parca sevki",
          "Acil durum ekipleri icin hizli medikal veya teknik malzeme tasimasi",
          "Saha ekiplerinin operasyon suresini kisaltan gunluk lojistik gorevleri",
        ],
      }}
    />
  );
}

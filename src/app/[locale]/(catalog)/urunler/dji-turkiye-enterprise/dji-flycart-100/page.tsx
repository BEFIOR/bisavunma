import DjiEnterpriseProductPage from "../_components/DjiEnterpriseProductPage";

export const metadata = {
  title: "DJI FlyCart 100 | Agir Yuk Hava Tasimaciligi | Bisavunma",
  description:
    "DJI FlyCart 100; yuksek tasima kapasitesi, teslimat odakli sistem mimarisi ve gelismis guvenlik yaklasimiyla endustriyel hava lojistiginde yeni bir standart sunar.",
};

export default function DJIFlyCart100Page() {
  return (
    <DjiEnterpriseProductPage
      data={{
        title: "DJI FlyCart 100",
        subtitle: "Agir Yuk Lojistiginde Yeni Nesil Cozum",
        description:
          "DJI FlyCart 100, kurumsal lojistik ihtiyaclari icin yuksek tasima kapasitesi ve esnek gorev planlamasi sunar. Daglik arazi, kritik tedarik noktasi ve zaman hassasiyeti yuksek operasyonlar icin idealdir.",
        image:
          "https://www-cdn.djiits.com/cms/uploads/9358904a6d5a4182e2bcd9a0db8be35a@374*374.png",
        officialUrl:
          "https://www.dji.com/flycart-100?site=brandsite&from=landing_page",
        stats: [
          { value: "85 kg", label: "Maksimum Tasima Kapasitesi" },
          { value: "2", label: "Yuk Sistemi Modu" },
        ],
        features: [
          "Agir yuk lojistigi icin optimize edilmis yuksek kapasiteli platform",
          "Operasyona gore farkli teslimat konfigurasyonlariyla esnek kullanim",
          "Gorev planlama sureclerinde kurumsal filo yonetimine uygun mimari",
          "Zorlu arazi sartlarinda guvenli teslimat odakli ucus yapisi",
          "Acil ihtiyac malzemeleri ve teknik ekipman transferlerinde hizli devreye alma",
          "Bisavunma saha danismanligi ile kurumsal entegrasyon destegi",
        ],
        useCases: [
          "Endustriyel tesisler arasi kritik malzeme transferi",
          "Daglik ve erisimi zor bolgelerde lojistik operasyonlar",
          "Afet sonrasi acil yardim ve teknik ekipman sevki",
          "Enerji, maden ve altyapi projelerinde saha tedarik surecleri",
        ],
      }}
    />
  );
}

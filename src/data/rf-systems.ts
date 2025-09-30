export interface RfSystemSection {
  title: string;
  content: string;
  image: string;
}

export interface RfSystem {
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  features: string[];
  section1: RfSystemSection;
  section2: RfSystemSection;
  section3: RfSystemSection;
  category: string;
  subcategory?: string;
}

export const rfSystems: RfSystem[] = [
  {
    slug: "rfeye-node-100-18",
    title: "RFeye Node 100-18",
    description: "Gelişmiş tespit, POI ve sinyal istihbaratı için tam 100 MHz I/Q kayıt ve akış özelliği ile taşınabilir, dayanıklı, olağanüstü hızlı RF sensörü.",
    image: "/products/rf-sistemleri/rfeye-node-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gerçek zamanlı spektrum analizi",
      "Otomatik sinyal tespiti",
    ],
    section1: {
      title: "RFeye Node Plus 100-18 Genel Bakış",
      content:
        "RFeye Node Plus 100-18, hem fiber optik hem de bakır bağlantıları destekleyen 10 Gigabit Ethernet SFP+ portu aracılığıyla hızlı, uzun mesafeli veri transferi için tasarlanmış yüksek performanslı spektrum analizörü ve izleme alıcısıdır. 9 kHz'den 18 GHz'e kadar ayarlama aralığını kapsar ve tam 100 MHz anlık bant genişliği (IBW) kaydı, yakalama ve akışı için kenar işleme özelliklerine sahiptir. 120 dB dinamik aralık, 2 MHz RBW'de 390 GHz/s tarama hızı ve sınıfının en iyi frekans doğruluğu, ayarlama süresi ve faz gürültüsü performansı ile sensör olağanüstü RF algılama yetenekleri sunar.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section1.webp",
    },
    section2: {
      title: "Gerçek Zamanlı İzleme",
      content:
        "RFeye Node Plus 100-18, operatörlerin daha geniş bant genişliği sinyallerini analiz etmesine olanak tanıyan tam 100 MHz RF kaydı (I/Q yakalama) destekler. Gelişmiş işlem gücü ve bellek ile I/Q verilerini 550 MB/s (4 Gbps) hızında yönetir ve akışa alır, bu da onu EMSO, SIGINT, COMINT, DF ve EW görevlerinde gelişmiş sinyal tespiti ve yüksek yakalama olasılığı (POI) için ideal kılar. Ağlı bir sistemde mükemmel bir devir alıcısı olarak spektrum izleme, yön bulma ve konum belirleme konularında üstün performans gösterir.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section2.webp",
    },
    section3: {
      title: "Entegre Analiz Platformu",
      content:
        "RFeye Node Plus 100-18, SWaP-C ve kenar performansının optimal dengesini sunar. Yüksek hızlı işlemci, 10GigE SFP veri arayüzü, SSD portu ve PCIe OCuLink portu ile donatılmış olarak, VITA-49 üzerinden tam 100 MHz akışı dahil olmak üzere gelişmiş RF istihbarat yakalama ve paylaşımını mümkün kılar. Konum belirleme akışı standart Asterix ve Google Protocol Buffer veri formatlarını destekler. Zorlu ortamlar için tasarlanmış sensör, çeşitli Kontrol PC seçenekleri ile birlikte gelir.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-18-lw",
    title: "RFeye Node 100-18 LW",
    description: "Otonom sistem entegrasyonu için yüksek performanslı RF sensörü. 18 GHz'e kadar gerçek zamanlı spektrum izleme ve I/Q veri toplama sağlayan ideal EW & ISR sensör yükü",
    image: "/products/rf-sistemleri/rfeye-node-100-18-lw.webp",
    features: [
      "Düşük güç tüketimi",
      "100 MHz - 18 GHz aralığı",
      "Uzun süreli operasyon",
    ],
    section1: {
      title: "RFeye Node 100-18-LW Genel Bakış",
      content:
        "Kompakt ama güçlü olan RFeye Node 100-18 LW (Hafif), düşük SWaP tasarımında gelişmiş elektronik harp ve RF istihbaratı sunar. Sadece 1.98 kg (antenler hariç) ağırlığında, yüksek performans yeteneklerini korurken eşsiz taşınabilirlik sunar. Sensör, etkili spektrum izleme, geniş bant sinyal tespiti ve I/Q yakalama ile hassas RF kaydı için tasarlanmış olup, 18 GHz'e kadar frekanslarda konum belirleme ve analizi genişletir.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section1.webp",
    },
    section2: {
      title: "Taşınabilir Tasarım",
      content:
        "Küçük ve orta boyuttan büyük ve çok büyük MGTW'ye kadar geniş bir UAS platform yelpazesi için uygun olan RFeye Node 100-18 LW (Hafif), azaltılmış 1.98 kg kütlesi (antenler hariç) sayesinde havacılık dayanıklılığını artırır ve yüksek performanslı EW sensörlerinin sabit kanatlı İHA'lar, döner dronlar ve bağlı sistemler üzerinde yük olarak konuşlandırılmasına olanak tanır. Üç RF portu, çoklu frekans bantlarında antenleri barındırır ve dört GNSS takımyıldızının tümünü destekler, sensörün I/Q kaydı, tespit ve konum belirleme yeteneği 18 GHz'e kadar ulaşır. Entegratörler için, sorunsuz gövde entegrasyonunu sağlamak üzere parazit azaltma ve filtre konfigürasyonu konularında uzmanlık ile birlikte ortak mühendislik desteği mevcuttur; ünite aynı zamanda insansız kara aracı (UGV) kurulumu için de uyarlanabilir.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section2.webp",
    },
    section3: {
      title: "Güvenilir Performans",
      content:
        "RFeye Node 100-18 LW, L1, L2 ve L5 bantlarını destekleyen geliştirilmiş GNSS çipseti aracılığıyla güvenilir performans sunar. Gelişmiş tasarımı, olağanüstü faz gürültüsü, düşük gürültü figürü, hızlı kanal yeniden ayarlama süresi ve sınıfındaki karşılaştırılabilir RF sensörleri aşan olağanüstü yüksek parazitsiz dinamik aralık sağlar. Entegre soğutucu ile değiştirilmiş alüminyum muhafazada barındırılan sistem, zorlu ortamlarda dayanıklılık ve verimlilik için inşa edilmiştir. Spektrum üstünlüğü için tasarlanmış olarak, sürekli gerçek zamanlı operasyonları mümkün kılar, düşük güçlü ve düşük yakalama olasılığı (LPI) sinyallerini bile tespit ederken GNSS reddedilmiş veya bozulmuş koşullarda dayanıklılığı korur. Esnek konuşlandırmada, Node hem bağımsız RF sensörü hem de ölçeklenebilir, ağlı mimarinin bir parçası olarak işlev görür ve geniş bir görev gereksinimleri yelpazesi için sorunsuz entegrasyon sunar.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-40",
    title: "RFeye Node 100-40",
    description: "40 GHz'e kadar vericilerin gerçek zamanlı 7/24 spektrum izleme ve konum belirleme için taşınabilir ve dayanıklı yüksek performanslı RF sensörü",
    image: "/products/rf-sistemleri/rfeye-node-100-40.webp",
    features: [
      "100 MHz - 40 GHz frekans aralığı",
      "Ultra geniş bant analizi",
      "Yüksek çözünürlük",
    ],
    section1: {
      title: "Ultra Geniş Bant Analizi",
      content:
        "RFeye Node 100-40, geniş bant kapsama ve gelişmiş sinyal istihbaratı sunmak için tasarlanmış yüksek performanslı RF sensörüdür. 100 MHz anlık bant genişliği ile 9 kHz'den 40 GHz'e kadar geniş frekans aralığında çalışarak, daha yüksek frekans alanlarında eşsiz görünürlük sağlar. Yeni nesil süperheterodin alıcı teknolojisinden yararlanarak, Node sinyal yakalama yeteneğini geliştirir ve operatörlerin karmaşık RF ortamlarında üstün izleme, tespit ve analiz gerçekleştirmesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section1.webp",
    },
    section2: {
      title: "Yüksek Çözünürlük",
      content:
        "Dördüncü nesil RF sensörü olarak, RFeye Node 100-40, geri hat bant genişliği gereksinimlerini minimize etmek ve veri akışını optimize etmek için gelişmiş kenar işleme özelliklerini içerir. Mükemmel faz gürültüsü, düşük gürültü figürü ve yüksek parazitsiz dinamik aralık dahil olmak üzere üstün RF özellikleri, SDR'lar ve bilgi işlem platformları ile entegrasyonu kolaylaştıran FPGA tabanlı teknoloji ile tamamlanır. Bu kombinasyon, zorlu operasyonel ortamlarda yüksek performansı korurken geniş bant sinyallerinin sorunsuz sömürülmesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "RFeye Node 100-40, düşük güçlü sinyalleri ortaya çıkarma ve düşük yakalama olasılığı (LPI) ile iletimleri tanımlama hassasiyeti sağlayan gerçek zamanlı, sürekli spektrum operasyonları için tasarlanmıştır. GPS, BeiDou, GALILEO ve GLONASS ile tam uyumlu olarak, çeşitli operasyonel ortamlarda güvenilir konumlandırma ve zamanlama sağlar. Güçlü yazılım ve API'lere geçit görevi görerek, sistem kapsamlı entegrasyon ve analiz yetenekleri sunar. Dayanıklı tasarımı, sabit kurulum, geçici kurulum veya mobil RF algılama platformu olarak esnek konuşlandırmayı destekler—iç mekan veya dış mekan.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-8",
    title: "RFeye Node 100-8",
    description: "8 GHz'e kadar vericilerin gerçek zamanlı spektrum izleme ve konum belirleme için taşınabilir ve dayanıklı yüksek performanslı RF sensörü",
    image: "/products/rf-sistemleri/rfeye-node-100-8.webp",
    features: [
      "100 MHz - 8 GHz frekans aralığı",
      "Orta bant optimizasyonu",
      "Maliyet etkin çözüm",
    ],
    section1: {
      title: "Orta Bant Optimizasyonu",
      content:
        "RFeye 100-8, 100 MHz anlık bant genişliği ile 9 kHz'den 8 GHz'e kadar frekans aralığında güvenilir kapsama sunan yüksek performanslı RF sensörüdür. Görev kritik operasyonlar için tasarlanmış olarak, hassas spektrum izleme, doğru konum belirleme ve kapsamlı raporlama sağlar, gelişmiş süperheterodin alıcı teknolojisi sinyal yakalama yeteneğini artırır. Bu kombinasyon, operatörlerin karmaşık RF aktivitesini olağanüstü doğruluk ve verimlilikle tespit etmesini, analiz etmesini ve harekete geçmesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section1.webp",
    },
    section2: {
      title: "Maliyet Etkin Çözüm",
      content:
        "Bu dördüncü nesil RF sensörü, geri hat bant genişliği taleplerini minimize etmek için gelişmiş kenar işleme özelliklerini entegre eder ve veri işlemede verimliliği optimize eder. Mükemmel faz gürültüsü performansı, düşük gürültü figürü ve üstün parazitsiz dinamik aralık sunarak, karmaşık RF ortamlarında yüksek sadakatli sinyal analizi sağlar. FPGA tabanlı mimari ve esnek kart tabanlı tasarım ile sistem, SDR'lar ve bilgi işlem platformları ile sorunsuz entegrasyonu mümkün kılar ve operatörlerin geniş bant sinyal istihbaratını kolayca tam olarak sömürmesine olanak tanır.",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section2.webp",
    },
    section3: {
      title: "Kolay Entegrasyon",
      content:
        "Esneklik ve dayanıklılık için tasarlanmış RFeye sensör ailesi, performanstan ödün vermeden sabit sahalar, mobil platformlar veya geçici kurulumlarda—iç mekan veya dış mekan—konuşlandırmayı destekler. Düşük güçlü emisyonları ve düşük yakalama olasılığı (LPI) ile tasarlanmış sinyalleri tespit etme hassasiyeti ile gerçek zamanlı, sürekli spektrum operasyonlarını mümkün kılar. GPS, BeiDou, GALILEO ve GLONASS ile tam uyumluluk, küresel görevlerde doğru konumlandırma ve zamanlama sağlar. Gelişmiş yazılım paketleri ve açık API'lere geçit görevi görerek, sistem operatörlere herhangi bir operasyonel ortamda sorunsuz entegrasyon, gelişmiş veri sömürümü ve güvenilir RF istihbaratı sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-40-8",
    title: "RFeye Node 40-8",
    description: "8 GHz'e kadar vericilerin mobil spektrum izleme ve konum belirleme için giriş seviyesi yüksek performanslı RF sensörü",
    image: "/products/rf-sistemleri/rfeye-node-40-8.webp",
    features: [
      "40 MHz - 8 GHz frekans aralığı",
      "Dar bant odaklı",
      "Yüksek hassasiyet",
    ],
    section1: {
      title: "Dar Bant Odaklı Tasarım",
      content:
        "RFeye 40-8, 40 MHz anlık bant genişliği sunarak 9 kHz'den 8 GHz'e kadar frekans aralığında güvenilir operasyonlar için tasarlanmış yüksek performanslı RF sensörüdür. Gelişmiş süperheterodin alıcı teknolojisinden yararlanarak, hassas spektrum izleme, doğru konum belirleme ve detaylı raporlama sunar, sinyal yakalama yeteneklerini artırır. Bu kombinasyon, operatörlerin karmaşık RF aktivitesini güven ve verimlilikle tespit etmesini, analiz etmesini ve yanıtlamasını sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet",
      content:
        "Bu dördüncü nesil RF sensörü, geri hat bant genişliği gereksinimlerini minimize eden ve veri transferini kolaylaştıran gelişmiş kenar işleme özellikleri ile donatılmıştır. Mükemmel faz gürültüsü, düşük gürültü figürü ve olağanüstü parazitsiz dinamik aralığı, karmaşık RF ortamlarında bile üstün sinyal sadakati sağlar. FPGA tabanlı mimari ve çok yönlü kart tasarımı ile birleştiğinde, sensör SDR'lar ve bilgi işlem platformları ile sorunsuz entegre olur ve geniş bant RF istihbaratının verimli sömürülmesini mümkün kılar.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section2.webp",
    },
    section3: {
      title: "Özel Uygulamalar",
      content:
        "RFeye sensör ailesi, düşük güçlü iletimleri ortaya çıkarma hassasiyeti ile düşük yakalama olasılığı için tasarlanmış sinyalleri tespit etme gelişmiş yeteneğini birleştirerek gerçek zamanlı, sürekli spektrum operasyonları için inşa edilmiştir. GPS, BeiDou, GALILEO ve GLONASS arasında tam uyumluluk ile, herhangi bir görev ortamında doğru küresel konumlandırma ve zamanlama sağlar. Güçlü yazılım uygulamaları ve açık API'lere geçit görevi görerek, sistem mevcut iş akışlarına sorunsuz entegrasyona olanak tanır. Dayanıklı tasarımı esnek konuşlandırmayı destekler—iç mekan veya dış mekan, sabit kurulum, geçici kurulum veya mobil RF algılama platformu olarak—ihtiyaç duyulan her yerde güvenilir RF istihbaratı sunar.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-plus-100-18",
    title: "RFeye Node Plus 100-18",
    description: "Gelişmiş tespit, POI ve sinyal istihbaratı için tam 100 MHz I/Q kayıt ve akış özelliği ile taşınabilir, dayanıklı, olağanüstü hızlı RF sensörü.",
    image: "/products/rf-sistemleri/rfeye-node-plus-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gelişmiş özellikler",
      "Premium performans",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "RFeye Node Plus 100-18, modern elektronik harp ve istihbarat görevlerinin taleplerini karşılamak için tasarlanmış son teknoloji spektrum analizörü ve izleme alıcısıdır. Yüksek hızlı ve uzun mesafeli veri transferi için tasarlanmış olarak, hem fiber optik hem de bakır bağlantıları destekleyen 10 Gigabit Ethernet SFP+ arayüzünü kullanır. 9 kHz'den 18 GHz'e kadar ayarlama aralığını kapsayan Node, tam 100 MHz anlık bant genişliği (IBW) kaydı, yakalama ve akışını mümkün kılan gelişmiş kenar işleme özelliklerini içerir. 120 dB dinamik aralık, 2 MHz RBW'de 390 GHz/s tarama hızı ve frekans doğruluğu, ayarlama yanıtı ve faz gürültüsü konularında endüstri lideri performans sunarak, bu sensör operatörlerin en karmaşık RF ortamlarını bile eşsiz hassasiyetle tespit etmesini, analiz etmesini ve yanıtlamasını sağlar.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "RFeye Node Plus 100-18, operatörlere kapsamlı gelişmiş yetenekler seti sağlamak için tasarlanmıştır. Tam 100 MHz RF kaydı (I/Q yakalama), geleneksel sistemlerin kaçırabileceği sinyallerin geniş bant analizine olanak tanır. Gelişmiş işlem gücü ve genişletilmiş bellek ile I/Q verilerini 550 MB/s (4 Gbps) hızında verimli bir şekilde yönetebilir ve akışa alabilir. Bu, onu gelişmiş sinyal tespiti için görev kritik bir araç haline getirir ve EMSO, SIGINT, COMINT, DF ve EW operasyonlarında yüksek yakalama olasılığı (POI) sağlar. Ağlı bir sistem içinde, Node aynı zamanda mükemmel bir devir alıcısı olarak işlev görür ve spektrum izleme, yön bulma ve konum belirleme konularında üstün performans sunar—hem bağımsız konuşlandırmaları hem de büyük ölçekli dağıtık mimarileri destekler.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section2.webp",
    },
    section3: {
      title: "Profesyonel Destek",
      content:
        "RFeye Node Plus 100-18, güçlü kenar işleme yetenekleri ile birlikte Boyut, Ağırlık, Güç ve Maliyet (SWaP-C) optimal dengesini sağlamak için tasarlanmıştır. Donanım mimarisi, yüksek hızlı işlemci, 10GigE SFP veri arayüzü, SSD portu ve PCIe OCuLink bağlantısı içerir ve sorunsuz RF istihbarat yakalama, depolama ve paylaşımını mümkün kılar. VITA-49 protokolü üzerinden tam 100 MHz akışı destekleyerek, modern analiz sistemleri arasında birlikte çalışabilirlik sağlar. Konum belirleme için, Node hem Asterix hem de Google Protocol Buffer formatlarında veri çıktısı verir ve komuta-kontrol platformları ve çok alanlı ISR sistemleri ile uyumluluk sağlar. Zorlu ortamlara dayanacak şekilde inşa edilmiş sensör, dayanıklılık ve güvenilirlik için sağlamlaştırılmıştır ve belirli görev gereksinimlerine uygun olarak çeşitli Kontrol PC seçenekleri ile eşleştirilebilir.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  // Yön Bulma Sistemleri
  {
    slug: "dfh18",
    title: "DFH18",
    description: "Yön bulma ve sinyal tespiti sistemi",
    image: "/products/rf-sistemleri/dfh18.webp",
    features: [
      "18 GHz frekans aralığı",
      "Yön bulma hassasiyeti",
      "Gerçek zamanlı tespit",
    ],
    section1: {
      title: "Yön Bulma Teknolojisi",
      content:
        "DFH18 Yön Bulma Anteni, tipik olarak 2.5° RMS'den daha az DF doğruluğu ile gerçek zamanlı 500 MHz–18 GHz yön hattı (LOB) sağlayan dayanıklı, saha hazır çözümdür. RFeye Node 100-18 ve RFeye Node 100-40 ile tam uyumlu olarak, mevcut herhangi bir RFeye Node sistemi ile sorunsuz entegre edilebilir.",
      image: "/products/rf-sistemleri/dfh18-section1.jpg",
    },
    section2: {
      title: "Geniş Frekans Aralığı",
      content:
        "Altı yüksek performanslı spiral anten ile donatılmış DFH18, çoklu DF Başlıkları ve RFeye Node'ları arasında senkronize veri korelasyonu sağlamak için yüksek hızlı komütasyon ve hassas zamanlama kullanır. Bu yetenek, birleşik Varış Açısı (AoA) ve Varış Zaman Farkı (TDoA) teknikleri kullanarak hedef sinyallerin doğru konum belirlemesini sağlar. LOB'lar, sinyal türü, frekans, bant genişliği veya güçten bağımsız olarak net konumsal veri ve kaynak konum belirleme olasılıkları sağlayan uydu görüntüleri ve 2D/3D GIS veri setleri dahil olmak üzere çeşitli haritalama platformlarında görüntülenebilir.",
      image: "/products/rf-sistemleri/dfh18-section2.jpg",
    },
    section3: {
      title: "Saha Uygulamaları",
      content:
        "Sadece 7.5 kg ağırlığında olan DFH18, hafif, taşınabilir ve zorlu ortamlarda hızla konuşlandırılabilir. CRFS sensör ağları ve yazılım ekosistemlerine sorunsuz entegre olur ve elektromanyetik operasyonlar, sınır güvenliği, parazit avcılığı ve geniş bant UHF/SHF/EHF COMINT/SIGINT görevleri için ideal hale getirir. CRFS ayrıca Hızlı Konuşlandırma Kitleri (RDK'lar) ile kullanım için değiştirilebilir DF Başlıkları seçimi sunar ve operatörlerin operasyonel ihtiyaçlara göre özelleştirilmiş görev özel araç takımları yapılandırmasını mümkün kılar.",
      image: "/products/rf-sistemleri/dfh18-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "dfh40",
    title: "DFH40",
    description: "DFH40, 500MHz'den 40GHz'e kadar çalışan Kompakt Yön Bulma Başlığıdır. Dayanıklı, taktik formatta yüksek hassasiyetli yön bulma (AoA) ile geniş bant spektrum izleme 2D/3D TDoA'yı birleştirir.",
    image: "/products/rf-sistemleri/dfh40.webp",
    features: [
      "40 GHz frekans aralığı",
      "Ultra hassas yön bulma",
      "Çoklu sinyal tespiti",
    ],
    section1: {
      title: "Ultra Geniş Bant Yön Bulma",
      content:
        "DFH40 Yön Bulma Anteni, 500 MHz'den 40 GHz'e kadar aralıkta hassas izleme ve yön bulma için dayanıklı, saha hazır çözümdür. SHF ve alt EHF frekans bantlarını kapsayarak, eşsiz esneklik ve frekans genişliği sağlar. Taktik konuşlandırmalar için tasarlanmış DFH40, geleneksel sistemlerin sınırlı olduğu ortamlarda güvenilir gerçek zamanlı yön bulma, sinyal yakalama ve verici konum belirleme sunar.",
      image: "/products/rf-sistemleri/dfh40-section1.jpg",
    },
    section2: {
      title: "Çoklu Sinyal Analizi",
      content:
        "Yüksek hızlı komütasyon ve hassas zamanlama ile altı yüksek performanslı spiral anten özelliği sunan DFH40, çoklu DF Başlıkları ve RFeye Node'ları arasında senkronize veri korelasyonunu destekler. Bu, birleşik Varış Açısı (AoA) ve Varış Zaman Farkı (TDoA) teknikleri aracılığıyla hedef sinyallerin yüksek doğrulukta konum belirlemesini mümkün kılar. Yön Hattı (LOB) sonuçları haritalar, uydu görüntüleri ve 2D/3D GIS veri setleri üzerine bindirilebilir ve net konumsal görüntüler ve kaynak olasılık tahminleri sağlar. Çalışma aralığındaki tüm sinyal türleri—frekans, bant genişliği veya güçten bağımsız olarak—haritalanabilir.",
      image: "/products/rf-sistemleri/dfh40-section2.jpg",
    },
    section3: {
      title: "Profesyonel Operasyonlar",
      content:
        "Hafif, modüler ve hızlı konuşlandırma için tasarlanmış DFH40, CRFS sensör ağları ve yazılım ekosistemlerine sorunsuz entegre olur. CRFS ayrıca Hızlı Konuşlandırma Kitleri (RDK'lar) ile kullanım için değiştirilebilir DF Başlıkları sağlar ve operatörlerin operasyonel taleplere göre özelleştirilmiş görev özel araç takımları yapılandırmasını mümkün kılar.",
      image: "/products/rf-sistemleri/dfh40-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "dfh500",
    title: "DFH500",
    description: "DFH500, dayanıklı, taktik formatta yüksek hassasiyetli yön bulma (AoA) ile geniş bant spektrum izleme 2D/3D TDoA'yı birleştiren Kompakt Yön Bulma Başlığıdır.",
    image: "/products/rf-sistemleri/dfh500.webp",
    features: [
      "500 MHz - 18 GHz aralığı",
      "Yüksek hassasiyet",
      "Hızlı tespit",
    ],
    section1: {
      title: "Yüksek Performans",
      content:
        "DFH500 Yön Bulma Anteni, 30 MHz'den 500 MHz'e kadar aralıkta hassas izleme ve yön bulma için tasarlanmış dayanıklı, saha hazır çözümdür. VHF ve alt UHF bantlarını kapsayarak, esneklik ve geniş frekans kapsama sağlar. Taktik konuşlandırmalar için optimize edilmiş DFH500, geleneksel sistemlerin sınırlı olduğu ortamlarda güvenilir gerçek zamanlı yön bulma, sinyal yakalama ve verici konum belirleme sunar.",
      image: "/products/rf-sistemleri/dfh500-section1.jpg",
    },
    section2: {
      title: "Hızlı Tespit",
      content:
        "Hafif ve kolay konuşlandırılabilir DFH500, CRFS sensör ağları ve yazılım ekosistemlerine sorunsuz entegre olur. Elektromanyetik spektrum operasyonları, sınır güvenliği, parazit avcılığı ve VHF/UHF COMINT/SIGINT görevleri için ideal olarak uygundur ve operatörlerin ortaya çıkan tehditleri hızla tespit etmesini ve yanıtlamasını sağlar.",
      image: "/products/rf-sistemleri/dfh500-section2.jpg",
    },
    section3: {
      title: "Saha Uyumluluğu",
      content:
        "Görev uyarlanabilirliğini maksimize etmek için, CRFS Hızlı Konuşlandırma Kitleri (RDK'lar) ile uyumlu değiştirilebilir DF Başlıkları yelpazesi sunar. Bu modüler yaklaşım, kullanıcıların özelleştirilmiş araç takımları oluşturmasına olanak tanır ve DFH500'ün çeşitli operasyonel gereksinimleri karşılamak üzere yapılandırılmasını sağlar.",
      image: "/products/rf-sistemleri/dfh500-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "rfeye-array-100-series",
    title: "RFeye Array 100 Series",
    description: "Radyo yön bulma, spektrum izleme ve konum belirleme sistemi",
    image: "/products/rf-sistemleri/rfeye-array-100-series.webp",
    features: [
      "100 MHz - 18 GHz aralığı",
      "Anten dizisi teknolojisi",
      "Yüksek kazanç",
    ],
    section1: {
      title: "Anten Dizisi Teknolojisi",
      content:
        "Array 100, hem mobil hem de sabit konuşlandırmalar için tasarlanmış tam entegre spektrum izleme ve yön bulma sistemidir. 100 MHz anlık bant genişliği (IBW) sunarak, 500 MHz'den 8 GHz veya 18 GHz'e kadar kapsayan iki alıcı konfigürasyonunda gelir. Boyut, Ağırlık ve Güç (SWaP) için optimize edilmiş sistem, araçlara monte edilebilir veya sabit sahalarda kurulabilir. Dayanıklı radom içinde barındırılan Array 100, eşzamanlı DF, spektrum izleme ve konum belirleme yetenekleri sağlar ve onu çok yönlü çok görevli çözüm haline getirir.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section1.webp",
    },
    section2: {
      title: "Geniş Frekans Kapsamı",
      content:
        "Her Array'in merkezinde, maksimum hassasiyet için spiral antenlerle doğrudan bağlanmış bir RFeye Node bulunur. Ultra hızlı komütasyon aracılığıyla, Node çoklu yönlerde neredeyse eşzamanlı Varış Açısı (AoA) ölçümleri gerçekleştirir. Array'ler arasında veya Array'ler ile bağımsız Node'lar arasında veri korelasyonu yaparak, operatörler hibrit Varış Konumu (PoA), AoA ve Varış Zaman Farkı (TDoA) teknikleri kullanarak hedef sinyallerin yüksek doğrulukta konum belirlemesini gerçekleştirebilir.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "Array 100, maksimum kullanılabilirlik için dayanıklı çevresel koruma ile SWaP-optimize edilmiş tasarımı birleştirerek profesyonel operasyonlar için tasarlanmıştır. Benzersiz fabrika kalibrasyonu yeniden kalibrasyon ihtiyacını ortadan kaldırırken, yerleşik işleme geri hattı azaltır ve tam uzaktan kontrol sağlar. Özelleştirilmiş anten düzeni tutarlı doğruluk ve performans sağlar. Sistem hem bağımsız AoA yön bulma hem de eşzamanlı hibrit AoA/TDoA operasyonunu destekler ve görev gereksinimlerine sorunsuz uyum sağlar.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "anten-dizileri",
  },
  {
    slug: "rfeye-array-300-series",
    title: "RFeye Array 300 Series",
    description: "Eşzamanlı geniş bant radyo izleme ve yön bulma için yüksek performanslı, çift kanallı sistem",
    image: "/products/rf-sistemleri/rfeye-array-300-series.webp",
    features: [
      "300 MHz - 18 GHz aralığı",
      "Premium performans",
      "Gelişmiş özellikler",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "Array 300, hem mobil hem de sabit konuşlandırmalar için tasarlanmış yüksek performanslı spektrum izleme ve yön bulma sistemidir. 100 MHz anlık bant genişliği (IBW) sağlayarak, 8, 18 veya 40 GHz'e kadar kapsayan üç alıcı konfigürasyonunda mevcuttur. Her Array iki RFeye Node entegre eder ve operatörlerin çoklu görevleri eşzamanlı olarak gerçekleştirmesini mümkün kılar. Maksimum hassasiyet için antenlerle yakından bağlanmış bu RF sensörleri, geniş frekans aralığında üstün tespit ve izleme sunar.",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "Sofistike çok katmanlı DF mimarisi kullanan Array 300, geleneksel yön bulma sistemlerinin ötesine geçer. Düşük frekans sinyalleri (20–300 MHz) için Watson-Watt metodolojisini, paraziti minimize etmek, çoklu yol reddini ve farklı bantlarda kapsama optimizasyonu için tasarlanmış gelişmiş yönlü spiral antenlerle birleştirir. Geniş polarizasyon yelpazesine—tüm doğrusal polarizasyonlar dahil—hassas olan sistem, çoğu DF çözümü tarafından tespit edilemeyen sinyalleri yakalayabilir. Zamanlama ve senkronizasyon özellikleri hibrit Varış Konumu (PoA), Varış Açısı (AoA) ve Varış Zaman Farkı (TDoA) tekniklerini destekler ve güç, bant genişliği veya frekanstan bağımsız olarak tüm sinyal türlerinin hassas haritalanmasını sağlar.",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section2.webp",
    },
    section3: {
      title: "Kritik Uygulamalar",
      content:
        "• Zorlu ortamlar için dayanıklı yapı (-30°C ile +55°C arası) • Artırılmış yakalama olasılığı için çift alıcı mimarisi • Maksimum tutarlılık ve doğruluk sağlayan benzersiz anten düzeni • Yeniden kalibrasyon ihtiyacını ortadan kaldıran fabrika kalibrasyonu • Geniş alan izleme için uzun mesafe ağ oluşturma yeteneği • Bozuk dalga cephelerine yüksek bağışıklık ve depolarizasyona minimal hassasiyet",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "anten-dizileri",
  },

  // Platform Entegrasyonları
  {
    slug: "integrated-drones",
    title: "Integrated Drones",
    description: "Entegre drone sistemleri",
    image: "/products/rf-sistemleri/integrated-drones-1.webp",
    images: [
      "/products/rf-sistemleri/integrated-drones-1.webp",
      "/products/rf-sistemleri/integrated-drones-2.webp",
      "/products/rf-sistemleri/integrated-drones-3.webp",
    ],
    features: [
      "Drone entegrasyonu",
      "Havadan spektrum analizi",
      "Mobil operasyon",
    ],
    section1: {
      title: "Delivering an Unmanned & Autonomous Future",
      content:
        "CRFS'in 18 GHz'e kadar çalışan hafif, dayanıklı ve yüksek performanslı RF sensörleri, insansız hava araçları (İHA'lar) için yük olarak optimize edilmiştir. Gerçek zamanlı spektrum izleme, yön bulma ve yüksek çözünürlüklü I/Q veri kaydı aracılığıyla gelişmiş EW ve ISR yetenekleri sağlarlar. Mühendislik desteği ile birleştiğinde, bu sensörler operatörlerin tartışmalı ortamlarda spektrum üstünlüğü elde etmesini mümkün kılar.",
      image: "/products/rf-sistemleri/integrated-drones-section1.webp",
    },
    section2: {
      title: "Extending Line-of-Sight & the Radio Horizon",
      content:
        "RFeye Node 100-18 LW, geri hat veri bant genişliğini azaltmak için yerleşik kenar işleme ile donatılmış kompakt, akıllı sensördür. 9 kHz'den 18 GHz'e kadar kapsayarak, yüksek sadakatli I/Q kaydı, üstün RF performansı ve gelişmiş sinyal yakalama sunar. İHA'lara entegre edildiğinde, bu sensörler görüş hattını iyileştirerek, gözlem yarıçapını büyüterek ve daha geniş bilgi toplama konisi sağlayarak gözetim erişimini genişletir. Bu genişletilmiş kapsama, çeşitli operasyonel tiyatrolarda istihbarat toplama, durumsal farkındalık ve görev etkinliğini artırır.",
      image: "/products/rf-sistemleri/integrated-drones-section2.webp",
    },
    section3: {
      title: "Benefits of Integrating RF Sensors as UAS Payloads",
      content:
        "• İyileştirilmiş görüş hattı (LOS) ve artırılmış gözlem yarıçapı • Azaltılmış personel riski ile değişken yükseklik anten konuşlandırması • Gelişmiş istihbarat verimi için daha büyük bilgi toplama konisi • Pasif izleme, düşmanların tespit edilmeden kalmasını sağlar • Sıfır RF emisyonu yapabilen bağlı platformlar • Bağımsız veya ağlı C2/alt sistem operasyonu • Uçtan uca iş akışı: RF verilerini topla, yakala, analiz et, dedektörler üret ve durumsal farkındalık oluştur • Geniş alan gözetimi, sınır güvenliği, iletişim istihbaratı, kıyı izleme ve I/Q veri toplama için güç çarpanı • Çoklu alanlarda entegre istihbaratı mümkün kılar",
      image: "/products/rf-sistemleri/integrated-drones-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  {
    slug: "integrated-vehicles",
    title: "Integrated Vehicles",
    description: "Entegre araç sistemleri",
    image: "/products/rf-sistemleri/integrated-vehicles-1.webp",
    images: [
      "/products/rf-sistemleri/integrated-vehicles-1.webp",
      "/products/rf-sistemleri/integrated-vehicles-2.webp",
      "/products/rf-sistemleri/integrated-vehicles-3.webp",
    ],
    features: [
      "Araç entegrasyonu",
      "Mobil platform",
      "Saha operasyonları",
    ],
    section1: {
      title: "Araç Entegrasyonu",
      content:
        "RF sensörlerini araç platformlarına entegre etmek, standart araçları mobil spektrum istihbarat sistemlerine dönüştürür. Bu entegrasyon, hareket halindeyken bile gerçek zamanlı izleme, geniş bant spektrum analizi ve sürekli sinyal istihbaratı toplama sağlar. RF algılama teknolojisi ile donatılmış araçlar, sürekli gözetim ve komuta merkezlerine hızlı veri transferi sağlayarak hem taktik hem de stratejik avantajlar sunar.",
      image: "/products/rf-sistemleri/integrated-vehicles-1.webp",
    },
    section2: {
      title: "Mobil Platform",
      content:
        "Araç tabanlı mobil platformlar, geniş alan kapsama ve hızlı konuşlandırma gerektiren görevlerde kritik rol oynar. Sabit kurulumların aksine, mobil sistemler farklı bölgelere hızla yeniden konumlanabilir ve hassas spektrum izleme ve sinyal tespiti sağlayabilir. Gelişmiş yetenekleri, zayıf iletimlerin, düşük yakalama olasılığı (LPI) sinyallerinin ve düşmanca iletişim aktivitelerinin yakalanmasına olanak tanır. Bu platformlar oldukça çok yönlüdür ve kentsel izleme, sınır güvenliği ve kritik altyapının korunması için konuşlandırılabilir.",
      image: "/products/rf-sistemleri/integrated-vehicles-2.webp",
    },
    section3: {
      title: "Saha Operasyonları",
      content:
        "Saha operasyonlarında hız, esneklik ve güvenilirlik esastır. RF sensörleri ile donatılmış araçlar, zorlu araziler ve yüksek tehdit ortamlarında bile hızlı konuşlandırma ve anlık görev hazırlığı sağlar. Gerçek zamanlı spektrum istihbaratı, yön bulma ve konum belirleme sunarlar ve eyleme dönüştürülebilir verileri doğrudan komuta ağlarına akışa alma yeteneğine sahiptirler. Bu, hedef sinyallerin eşzamanlı izleme, tespit ve kaydını desteklerken daha hızlı karar verme ve operasyonel üstünlük sağlar.",
      image: "/products/rf-sistemleri/integrated-vehicles-3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  {
    slug: "mini-outdoor-system-kit",
    title: "Mini Outdoor System Kit",
    description: "Kompakt açık hava sistem kiti",
    image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    images: [
      "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
      "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    ],
    features: [
      "Kompakt tasarım",
      "Açık hava uyumlu",
      "Hızlı kurulum",
    ],
    section1: {
      title: "Kompakt Tasarım",
      content:
        "Mini Outdoor System Kit, operatörlerin geniş bir görev ortamı yelpazesinde kolayca taşımasına ve konuşlandırmasına olanak tanıyan kompakt, hafif ve taşınabilir tasarımla özel olarak tasarlanmıştır. Azaltılmış form faktörü yetenekten ödün vermez; bunun yerine, hacimli ekipmanların lojistik zorlukları olmadan gelişmiş spektrum izleme, sinyal istihbaratı ve gerçek zamanlı analiz gerçekleştirilmesini mümkün kılar. Kompakt yapı aynı zamanda taktik ekipler için hareketliliği artırır ve dağlık arazi, sınır bölgeleri veya kentsel ortamlar gibi zor erişilebilir alanlarda sık yeniden konumlandırma veya operasyonlar gerektiren senaryolar için ideal hale getirir. Taşınabilirlik ile performansı birleştirerek, Mini Outdoor System Kit operatörlerin operasyonel ayak izini minimize ederken sürekli hazırlık durumunu korumasını mümkün kılar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "Aşırı ve öngörülemeyen açık hava koşullarında performans göstermek için tasarlanmış Mini Outdoor System Kit, dayanıklılık ve direnç için sağlamlaştırılmıştır. Sağlam yapısı, yağmur, toz, rüzgar ve şiddetli soğuktan yoğun sıcağa kadar değişen sıcaklık dalgalanmalarına maruz kalan ortamlarda kesintisiz işlevsellik sağlar. İster çöllerde, ister kıyı bölgelerinde veya yüksek irtifa konumlarında konuşlandırılsın, sistem kararlı ve doğru RF algılama yeteneklerini korur. Bu açık hava uyumluluğu sadece güvenilirliği artırmakla kalmaz, aynı zamanda ekipman arızasının seçenek olmadığı düşmanca veya hızla değişen ortamlarda görev sürekliliğini sağlar. Operatörler, en zorlu saha koşullarına dayanacak şekilde tasarlanmış ve en çok ihtiyaç duyulduğunda tutarlı spektrum istihbaratı sunan güvenilir bir sistemden yararlanır.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Hızlı Kurulum",
      content:
        "Mini Outdoor System Kit'in temel avantajlarından biri, hızla konuşlandırılabilmesi ve tam operasyonel duruma geçirilebilmesidir. Saha ekipleri sistemi dakikalar içinde monte edebilir ve etkinleştirebilir, saha varışı ile görev kritik spektrum izlemenin başlaması arasındaki süreyi büyük ölçüde azaltır. Bu hızlı kurulum yeteneği, özellikle parazit avcılığı, karşı-İHA görevleri veya acil müdahale senaryoları gibi zamana duyarlı operasyonlarda önemli taktik avantaj sağlar. Hızlı konuşlandırmanın yanı sıra, sistemin sezgisel konfigürasyonu operatörlerin onu mevcut ağlara ve iş akışlarına kolayca entegre etmesine olanak tanır ve komuta-kontrol yapıları ile sorunsuz uyumluluk sağlar. Hızlı kurulum, anlık veri toplama ve gerçek zamanlı analizi mümkün kılarak, Mini Outdoor System Kit operatörlerin gecikme olmadan durumsal farkındalık ve spektrum üstünlüğü elde etmesini sağlar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  {
    slug: "outdoor-system-kit",
    title: "Outdoor System Kit",
    description: "Kapsamlı açık hava sistem kiti",
    image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    images: [
      "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
      "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    ],
    features: [
      "Kapsamlı sistem",
      "Açık hava uyumlu",
      "Profesyonel kullanım",
    ],
    section1: {
      title: "Kapsamlı Sistem",
      content:
        "Outdoor System Kit, profesyonel seviye spektrum izleme, sinyal tespiti ve konum belirleme yetenekleri sağlayan tam entegre RF analiz çözümüdür. Sahada gelişmiş performans gerektiren operatörler için tasarlanmış sistem, geniş frekans aralığında elektromanyetik spektrumun sürekli izlenmesini mümkün kılar. Kapsamlı mimarisi, sadece zayıf veya düşük yakalama olasılığı (LPI) sinyallerinin doğru tespitini değil, aynı zamanda görev sonrası analiz için yüksek sadakatli I/Q veri kaydı yeteneğini de sağlar. Spektrum analizi, gerçek zamanlı izleme ve konum belirlemeyi tek bir sistemde birleştirerek, Outdoor System Kit istihbarat, güvenlik ve savunma uygulamaları için eksiksiz bir paket sunar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "En zorlu çevresel koşullara dayanacak şekilde tasarlanmış Outdoor System Kit, dayanıklılık ve uzun vadeli güvenilirlik için sağlamlaştırılmıştır. İster aşırı sıcakta, ister dondurucu sıcaklıklarda, kıyı neminde veya tozlu çöl ortamlarında konuşlandırılsın, sistem uzun operasyonel dönemler boyunca kararlı performans korur. Sağlam muhafazası hassas elektronikleri hava koşullarından ve sert dış faktörlerden korur ve kesintisiz görev etkinliği sağlar. Açık hava uyumluluğu aynı zamanda operatörlerin sürekli bakım veya yeniden kalibrasyon ihtiyacı olmadan uzak veya düşmanca bölgelerde sürekli spektrum gözetimi yapmasına olanak tanır.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Profesyonel Kullanım",
      content:
        "Profesyonel güvenlik, savunma ve askeri operasyonlar için özelleştirilmiş Outdoor System Kit, eşsiz performans ve güvenilirlik sunar. Hassasiyet ve hızın kritik olduğu sınır izleme, kritik altyapı koruması, karşı-İHA görevleri ve elektronik harp görevleri için ideal olarak uygundur. Daha büyük sensör ağları ve komuta-kontrol sistemlerine sorunsuz entegrasyon ile hem bağımsız yetenek hem de ölçeklenebilir ağlı operasyonlar sağlar. Gelişmiş teknolojiyi saha hazır sağlamlaştırılmış tasarımla birleştirerek, Outdoor System Kit operatörlerin en zorlu operasyonel tiyatrolarda bile spektrum üstünlüğü ve durumsal farkındalığı korumasını mümkün kılar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  {
    slug: "rfeye-stormcase",
    title: "RFeye Stormcase",
    description: "Dayanıklı taşıma ve koruma kutusu",
    image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    images: [
      "/products/rf-sistemleri/rfeye-stormcase-1.webp",
      "/products/rf-sistemleri/rfeye-stormcase-2.webp",
    ],
    features: [
      "Dayanıklı tasarım",
      "Koruma kutusu",
      "Taşıma kolaylığı",
    ],
    section1: {
      title: "Dayanıklı Tasarım",
      content:
        "RFeye Stormcase, en zorlu çevresel koşullarda hassas RF ekipmanlarını korumak için özel olarak inşa edilmiştir. Dayanıklı yapısı, şoklara, toza, neme ve aşırı sıcaklıklara karşı üstün direnç sağlar ve görev kritik sistemlerin ortamdan bağımsız olarak tam operasyonel kalmasını garanti eder. Bu dayanıklı tasarım, Stormcase'i saha konuşlandırmaları için vazgeçilmez çözüm haline getirir ve yüksek değerli elektronik varlıklar için uzun vadeli güvenilirlik ve koruma sağlar.",
      image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    },
    section2: {
      title: "Koruma Kutusu",
      content:
        "Sağlam koruyucu muhafaza olarak tasarlanmış RFeye Stormcase, performansı tehlikeye atabilecek fiziksel darbeler, titreşim, nem ve diğer dış tehditlerden hassas RF sensörlerini ve bileşenlerini korur. Ekipmanları hem doğal hem de operasyonel tehlikelerden koruyarak, görev kritik teknolojinin hizmet ömrünü uzatmaya yardımcı olur. İster transit halinde, ister depolamada veya hızlı konuşlandırma sırasında, Stormcase ekipmanın her zaman anında kullanıma hazır olmasını sağlayan güvenli bir ortam sağlar.",
      image: "/products/rf-sistemleri/rfeye-stormcase-2.webp",
    },
    section3: {
      title: "Taşıma Kolaylığı",
      content:
        "Hafif ama dirençli RFeye Stormcase, sahadaki operatörler için kolay kullanım ve taşıma sunar. Ergonomik özellikler ve güvenli kilit mekanizmaları, kullanıcıların ekipmanları konumlar arasında hızla taşımasına olanak tanırken, operasyon dışındayken güvenli depolamayı da mümkün kılar. Bu hareketlilik kolaylığı, kurulum süresini azaltarak operasyonel verimliliği artırır ve ekiplerin spektrum izleme ve sinyal istihbaratı görevlerine gecikme olmadan odaklanmasını sağlar. Stormcase'in taşınabilirliği, dayanıklı koruması ile birleştiğinde, dinamik saha operasyonları için güvenlik ve konforun pratik dengesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  // TSCM Sistemleri
  {
    slug: "rfeye-guard",
    title: "RFeye Guard",
    description: "Teknik Gözetim Karşı Önlemleri için sürekli gerçek zamanlı bina içi izleme",
    image: "/products/rf-sistemleri/rfeye-guard.webp",
    features: [
      "TSCM teknolojisi",
      "Dinleme tespiti",
      "Güvenlik önlemleri",
    ],
    section1: {
      title: "TSCM Teknolojisi",
      content:
        "RFeye Guard, sürekli Teknik Gözetim Karşı Önlemleri (TSCM) operasyonları için tasarlanmış, 7/24/365 çalışan gelişmiş yerinde spektrum izleme ve tehdit konum belirleme sistemidir. Yüksek hassasiyetli geniş bant alıcılar ve tam otonom gerçek zamanlı yazılım ile donatılmış olarak, hiçbir yasadışı iletimin tespit edilmeden geçmemesini sağlar. Sistem 40 GHz'e kadar kesintisiz izleme sağlar, 400 GHz/s'ye yaklaşan tarama hızları ve 1 Hz'ye kadar çözünürlük sunar. Bu yüksek performans yeteneği, geleneksel el tipi tarayıcılar tarafından tespit edilemeyecek kadar ince veya geçici olanlar dahil olmak üzere yetkisiz sinyaller için %100 yakalama olasılığı (POI) garanti eder. RFeye Guard, dinleme tehditlerine karşı sürekli, otomatik koruma katmanı oluşturur.",
      image: "/products/rf-sistemleri/rfeye-guard-section1.webp",
    },
    section2: {
      title: "Dinleme Tespiti",
      content:
        "Genellikle tavan kitleri içine monte edilen kalıcı RF alıcılar ağı aracılığıyla çalışan RFeye Guard, elektromanyetik spektrumu sürekli olarak anormallikler veya yetkisiz iletimler için tarar. Tespit edildiğinde, yazılımı gelişmiş Varış Gücü (PoA) teknikleri kullanarak sinyalin kaynağını anında hesaplar ve güvenlik personeline anında uyarı verir. Bu, hassas bilgilerin tehlikeye girmeden önce hızlı yanıt sağlar. Gerçek zamanlı otomatik gözetim, mevcut bina estetiğine sorunsuz entegrasyon ve hem bina içi cihazları hem de dış vericileri konum belirleme yeteneği gibi özelliklerle, RFeye Guard eksiksiz RF güvenlik kapsaması sağlar. SyncLinc teknolojisi konum belirleme hassasiyetini daha da artırır ve onu gizli gözetim cihazlarına karşı son derece etkili karşı önlem sistemi haline getirir.",
      image: "/products/rf-sistemleri/rfeye-guard-section2.webp",
    },
    section3: {
      title: "Güvenlik Önlemleri",
      content:
        "RFeye Guard, hükümet binaları, kurumsal genel merkezler, savunma kuruluşları ve finansal kurumlar gibi kritik tesislerde dinleme risklerini minimize etmek için özel olarak tasarlanmıştır. Sürekli RF güvenliği, konum belirleme yetenekleri ve otomatik tespit sağlayarak, casusluk ve veri ihlallerine karşı proaktif koruma görevi görür. Periyodik ve kapsamı sınırlı manuel taramaların aksine, bu sistem 7/24 sürekli koruma sağlar. Gizlilik, otomasyon ve yüksek performans kombinasyonu, organizasyonların operasyonel gizliliği korumasına ve tüm koşullarda hassas iletişimleri korumasına olanak tanır.",
      image: "/products/rf-sistemleri/rfeye-guard-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "tscm",
  },
  // RFeye Suite Yazılımları
  {
    slug: "rfeye-deepview",
    title: "RFeye DeepView",
    description: "Gelişmiş spektrum analizi yazılımı",
    image: "/products/rf-sistemleri/rfeye-deepview.webp",
    features: [
      "Spektrum analizi",
      "Gelişmiş görselleştirme",
      "Veri analizi",
    ],
    section1: {
      title: "Spektrum Analizi",
      content:
        "RFeye DeepView, derinlemesine RF ortam değerlendirmesi için tasarlanmış son teknoloji algoritmalar aracılığıyla operatörlere gelişmiş spektrum analizi yetenekleri sağlar. Geniş frekans aralığında sinyalleri tanımlayarak, izole ederek ve sınıflandırarak, kullanıcıların gizli iletimleri tespit etmesine, paraziti izlemesine ve elektromanyetik spektrumun genel sağlığını değerlendirmesine olanak tanır. Bu, onu doğruluk ve güvenilirliğin en önemli olduğu istihbarat toplama, düzenleyici uyumluluk ve görev planlama için vazgeçilmez araç haline getirir.",
      image: "/products/rf-sistemleri/rfeye-deepview-section1.jpg",
    },
    section2: {
      title: "Gelişmiş Görselleştirme",
      content:
        "Son derece sezgisel ve kullanıcı dostu arayüz ile donatılmış RFeye DeepView, karmaşık spektrum verilerinin net, eyleme dönüştürülebilir görselleştirmelere dönüştürülmesine olanak tanır. Operatörler frekans aktivitesini gerçek zamanlı görüntüleyebilir, anormallikleri tanımlayabilir ve spektrum desenlerini çoklu görselleştirme katmanları üzerine bindirebilir. Gelişmiş haritalama ve 2D/3D görselleştirme araçları, sinyalleri coğrafi veya operasyonel bağlamlarla korelasyon kurmayı kolaylaştırır ve karar vericilere elektromanyetik ortamın kapsamlı resmini sunar.",
      image: "/products/rf-sistemleri/rfeye-deepview-section2.jpg",
    },
    section3: {
      title: "Veri Analizi",
      content:
        "Görselleştirmenin ötesinde, RFeye DeepView ham spektrum ölçümlerini anlamlı istihbarata dönüştüren güçlü veri analitiği sunar. Yazılım, detaylı raporlar, istatistiksel dökümler ve operasyonel içgörüler üretmek için toplanan büyük miktarlarda RF verisini işler. Uzun süreli veri yakalama ve tekrar oynatmayı destekleyerek, kullanıcıların adli analiz yapmasına, yaşam deseni kütüphaneleri oluşturmasına ve aksi takdirde fark edilmeyebilecek aralıklı veya düşük güçlü sinyalleri tespit etmesine olanak tanır. Bu analitik yetenekler, onu savunma, güvenlik ve spektrum yönetimi görevleri için çok yönlü platform haline getirir.",
      image: "/products/rf-sistemleri/rfeye-deepview-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  {
    slug: "rfeye-mission-manager",
    title: "RFeye Mission Manager",
    description: "Operasyon yönetimi yazılımı",
    image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    features: [
      "Operasyon yönetimi",
      "Görev planlama",
      "Koordinasyon",
    ],
    section1: {
      title: "Operasyon Yönetimi",
      content:
        "RFeye Mission Manager, karmaşık RF operasyonlarını planlamak, yönetmek ve denetlemek için tasarlanmış güçlü yazılım platformudur. Operatörlere merkezi kontrol sağlar ve görev durumu, sistem performansı ve operasyonel sonuçların gerçek zamanlı izlenmesini mümkün kılar. Spektrum izleme, yön bulma ve konum belirleme görevlerini tek arayüzde entegre ederek, iş akışlarını kolaylaştırır ve görevlerin hassasiyet ve verimlilikle gerçekleştirilmesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section2: {
      title: "Görev Planlama",
      content:
        "Gelişmiş görevlendirme ve zamanlama araçları ile RFeye Mission Manager, kullanıcıların belirli operasyonel hedeflere göre özelleştirilmiş detaylı görev planları tasarlamasına ve uygulamasına olanak tanır. Operatörler izleme parametrelerini önceden tanımlayabilir, kaynakları atayabilir ve sinyal tespiti veya konum belirleme olayları için otomatik tetikleyiciler ayarlayabilir. Bu yapılandırılmış yaklaşım insan hatasını azaltır, hazırlığı artırır ve görev kritik operasyonların stratejik önceliklere göre gerçekleştirilmesini sağlar.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section3: {
      title: "Koordinasyon",
      content:
        "RFeye Mission Manager, çoklu ekipler, sensörler ve operasyonel tiyatrolar arasında koordinasyonu artırır. Dağıtık RFeye Node'ları ve DF sistemlerinden veri senkronizasyonu yaparak, farklı birimler ve komuta merkezleri arasında sorunsuz işbirliği sağlar. Platform ağlı operasyonları destekler ve bilgilerin organizasyonlar arasında güvenli ve anında paylaşılmasına olanak tanır. Bu çok ekip ve çok sistem entegrasyonu sadece operasyonel verimliliği artırmakla kalmaz, aynı zamanda durumsal farkındalığı güçlendirir ve karar vericilerin dinamik ortamlarda daha hızlı ve daha doğru yanıt vermesine yardımcı olur.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  {
    slug: "rfeye-site",
    title: "RFeye Site",
    description: "Saha operasyon yazılımı",
    image: "/products/rf-sistemleri/rfeye-site.webp",
    features: [
      "Saha operasyonları",
      "Mobil kullanım",
      "Gerçek zamanlı analiz",
    ],
    section1: {
      title: "Saha Operasyonları",
      content:
        "RFeye Site, saha RF operasyonları için özel olarak inşa edilmiş mobil yazılım çözümüdür ve operatörlere hareket halindeyken spektrum izleme için hafif ama güçlü platform sağlar. Dinamik ortamlarda konuşlandırma için optimize edilmiş olarak, gelişmiş spektrum istihbarat yeteneklerini doğrudan saha ekiplerinin ellerine getirerek görev hazırlığını sağlar. İster hızlı araştırmalar, ister parazit avcılığı veya taktik izleme için olsun, RFeye Site geleneksel komuta merkezlerinin dışında sorunsuz RF veri toplama ve analizi sağlar.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section2: {
      title: "Mobil Kullanım",
      content:
        "Yazılım, operatörlerin saha ortamında RFeye Node'lara kolayca erişmesine ve kontrol etmesine olanak tanıyan, tabletler ve mobil cihazlar için özel olarak optimize edilmiş arayüz özelliklerine sahiptir. Sezgisel tasarımı operatör iş yükünü ve eğitim gereksinimlerini azaltır ve saha personeli tarafından hızlı benimsenmesini mümkün kılar. Mobil erişilebilirlik ile ekipler spektrum taramaları gerçekleştirebilir, canlı sinyalleri izleyebilir ve saha içinde sensör konfigürasyonlarını yönetebilir, zamana duyarlı operasyonlarda maksimum esneklik ve yanıt hızı sağlar.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section3: {
      title: "Gerçek Zamanlı Analiz",
      content:
        "RFeye Site, operatörlere saha ortamında doğrudan gerçek zamanlı spektrum analizi ve sinyal tespiti yapma yeteneği sağlar. RF ortamına anlık içgörü sağlar ve parazit, yetkisiz iletimler veya potansiyel tehditleri gerçekleştikleri anda tanımlar. Gerçek zamanlı görselleştirme ve uyarı yetenekleri daha hızlı karar vermeyi mümkün kılar ve operatörlerin eyleme dönüştürülebilir istihbarat üzerinde gecikme olmadan hareket etmesini sağlar. Mobil kullanılabilirliği gelişmiş analitik ile birleştirerek, RFeye Site saha operasyonlarında spektrum üstünlüğü için vazgeçilmez araç sunar.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  {
    slug: "software-support-updates-service",
    title: "Software Support & Updates Service",
    description: "Yazılım destek ve güncelleme hizmeti",
    image: "/products/rf-sistemleri/software-support-updates-service.jpg",
    features: [
      "Teknik destek hizmeti",
      "Yazılım güncellemeleri",
      "Uzaktan bakım",
    ],
    section1: {
      title: "Teknik Destek Hizmeti",
      content:
        "Yazılım Desteği ve Güncelleme Hizmeti, tüm RFeye yazılım platformları için kapsamlı teknik destek ve bakım sağlar. Kullanıcıların uzman yardımına, sistem optimizasyonuna ve yaşam döngüsü desteğine sürekli erişim sağlaması için tasarlanmış olup, görev kritik operasyonların kesintisiz kalmasını garanti eder. Bu hizmet, sorun giderme ve hata çözümünden proaktif performans iyileştirmelerine kadar her şeyi kapsar ve organizasyonların RFeye sistemlerinin güvenilirliğini ve etkinliğini maksimize etmesini sağlar.",
      image: "/products/rf-sistemleri/software-support-updates-service-section1.jpg",
    },
    section2: {
      title: "Yazılım Güncellemeleri",
      content:
        "Düzenli yazılım güncellemeleri, sistemleri tamamen güncel tutmak için yeni özellikler, geliştirmeler ve güvenlik iyileştirmeleri sunar. Bu güncellemeler operasyonel gereksinimler ve kullanıcı geri bildirimlerine dayalı olarak geliştirilir ve yazılım yeteneklerinin görev ihtiyaçlarıyla birlikte evrimleşmesini sağlar. Gelişmiş görselleştirme araçlarından iyileştirilmiş sistem entegrasyonuna kadar, güncellemeler donanım değişiklikleri gerektirmeden işlevselliği genişletir, uzun vadeli yatırımı korur ve son teknoloji performansı sürdürür.",
      image: "/products/rf-sistemleri/software-support-updates-service-section2.jpg",
    },
    section3: {
      title: "Uzaktan Bakım",
      content:
        "Uzaktan bakım hizmetleri, operatörlere gerçek zamanlı sorun giderme ve sistem sağlığı izleme sağlar, kesinti süresini azaltır ve maksimum operasyonel kullanılabilirlik sağlar. Güvenli uzaktan erişim aracılığıyla, teknik uzmanlar sorunları hızla tanımlayabilir, teşhis edebilir ve çözebilir, genellikle kritik operasyonları etkilemeden önce. Bu yetenek, özellikle görev hassas veya coğrafi olarak dağınık ortamlarda faaliyet gösteren organizasyonlar için sürekli sistem hazırlığı ve performans güvenilirliği sağlar.",
      image: "/products/rf-sistemleri/software-support-updates-service-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  {
    slug: "software-releases",
    title: "Software Releases",
    description: "Yazılım sürümleri ve güncellemeler",
    image: "/products/rf-sistemleri/software-releases.jpg",
    features: [
      "Yeni yazılım sürümleri",
      "Özellik güncellemeleri",
      "Hata düzeltmeleri",
    ],
    section1: {
      title: "Yeni Yazılım Sürümleri",
      content:
        "Yazılım Sürümleri, RFeye yazılım paketi genelinde düzenli güncellemeler ve yeni yetenekler sunar ve kullanıcıların spektrum izleme, analiz ve yönetim için en son araçlara her zaman erişim sağlamasını garanti eder. Her sürüm, mevcut iş akışlarıyla sürekliliği korurken performans, güvenlik ve uyumluluğu artırmak için dikkatli bir şekilde tasarlanır. Bu yaklaşım, RFeye sistemlerinin geleceğe hazır, ölçeklenebilir ve gelişen görev gereksinimleriyle uyumlu kalmasını sağlar.",
      image: "/products/rf-sistemleri/software-releases-section1.jpg",
    },
    section2: {
      title: "Özellik Güncellemeleri",
      content:
        "Yeni özellikler ve geliştirmeler, kullanıcı geri bildirimlerine ve operasyonel ihtiyaçlara dayalı olarak sürekli geliştirilir. İyileştirilmiş görselleştirme araçlarından gelişmiş analitiklere ve dış sistemlerle genişletilmiş entegrasyona kadar, her güncelleme verimliliği artıran ve görev yeteneklerini genişleten işlevler sunar. Bu güncellemeler sadece değer katmakla kalmaz, aynı zamanda operatörlerin pahalı donanım değişiklikleri olmadan en son yeniliklerden yararlanmasını sağlar.",
      image: "/products/rf-sistemleri/software-releases-section2.jpg",
    },
    section3: {
      title: "Hata Düzeltmeleri",
      content:
        "Her sürüm aynı zamanda hedefli hata düzeltmeleri ve performans iyileştirmeleri içerir ve maksimum sistem kararlılığı ve güvenilirliği sağlamak için sahada tespit edilen sorunları ele alır. Tespit edilen hataların hızlı çözümü, kesintisiz operasyonları sürdürmeye ve kesinti süresini minimize etmeye yardımcı olur, bu da güvenilirliğin tehlikeye atılamayacağı görev ortamlarında kritiktir. Düzeltmelerle birlikte, güvenliği, yanıt hızını ve genel platform direncini daha da güçlendirmek için sistem optimizasyonları sunulur.",
      image: "/products/rf-sistemleri/software-releases-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  // RF Kayıt (I/Q) Sistemleri
  {
    slug: "rfeye-node-plus-100-18-iq",
    title: "RFeye Node Plus 100-18",
    description: "Gelişmiş tespit, POI ve sinyal istihbaratı için tam 100 MHz I/Q kaydı ve akışı ile taşınabilir, dayanıklı, olağanüstü hızlı RF sensörü.",
    image: "/products/rf-sistemleri/rfeye-node-plus-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gelişmiş özellikler",
      "Premium performans",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "RFeye Node Plus 100-18, hem fiber optik hem de bakır bağlantıları destekleyen 10 Gigabit Ethernet SFP+ portu aracılığıyla hızlı, uzun mesafe veri transferi için tasarlanmış yüksek performanslı spektrum analizörü ve izleme alıcısıdır. 9 kHz'den 18 GHz'e kadar ayarlama aralığını kapsar ve tam 100 MHz anlık bant genişliği (IBW) kaydı, yakalama ve akışı için kenar işleme özelliklerine sahiptir. 120 dB dinamik aralık, 2 MHz RBW'de 390 GHz/s tarama hızı ve sınıfının en iyi frekans doğruluğu, ayarlama süresi ve faz gürültü performansı ile sensör olağanüstü RF algılama yetenekleri sunar.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "RFeye Node Plus 100-18, tam 100 MHz RF kaydını (I/Q yakalama) destekler ve operatörlerin daha geniş bant genişliği sinyallerini analiz etmesine olanak tanır. Gelişmiş işleme gücü ve bellek ile 550 MB/s (4 Gbps) hızında I/Q verilerini yönetir ve akışa alır, bu da onu EMSO, SIGINT, COMINT, DF ve EW görevlerinde gelişmiş sinyal tespiti ve yüksek yakalama olasılığı (POI) için ideal hale getirir. Ağlı sistemde mükemmel devir alıcısı olarak spektrum izleme, yön bulma ve konum belirlemede mükemmelleşir.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section2.webp",
    },
    section3: {
      title: "Profesyonel Destek",
      content:
        "RFeye Node Plus 100-18, SWaP-C ve kenar performansının optimal dengesini sunar. Yüksek hızlı işlemci, 10GigE SFP veri arayüzü, SSD portu ve PCIe OCuLink portu ile donatılmış olarak, VITA-49 aracılığıyla tam 100 MHz akışı dahil olmak üzere gelişmiş RF istihbarat yakalama ve paylaşımını mümkün kılar. Konum belirleme akışı standart Asterix ve Google Protocol Buffer veri formatlarını destekler. Dayanıklı ortamlar için inşa edilmiş sensör, çeşitli Kontrol PC seçenekleri ile gelir.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-sens-portable",
    title: "RFeye SenS Portable",
    description: "Masaüstü kalitesinde RF I/Q kaydını laboratuvar dışına taşıyın",
    image: "/products/rf-sistemleri/rfeye-sens-portable.webp",
    features: [
      "Hafif ve taşınabilir tasarım",
      "Geniş frekans kapsama alanı",
      "Dahili batarya ile uzun çalışma",
    ],
    section1: {
      title: "Sahada Hızlı ve Güvenilir Analiz",
      content:
        "RFeye SenS Portable, yüksek sadakatli, uzun süreli RF sinyal yakalama ve çıkarma için tasarlanmış hafif ve taşınabilir I/Q kaydedicidir. Kompakt form faktörüne rağmen, 25.6 TB'a kadar yerleşik kurumsal sınıf depolama sunar ve hacimli laboratuvar ekipmanlarına ihtiyaç duymadan laboratuvar kalitesinde 12 saatten fazla kesintisiz RF kaydı sağlar. Boyut için performanstan ödün veren diğer taşınabilir kaydedicilerin aksine, SenS Portable düşük ağırlık ve küçük boyutu RFeye alıcısının gelişmiş hassasiyeti ile birleştirir. Bu benzersiz denge, operatörlerin en yüksek RF sadakat seviyelerini korurken gerçek dünya sinyallerini doğal ortamlarında yakalamasına olanak tanır. Taktik görevler ve saha operasyonları için mükemmel olan, masaüstü seviyesi RF kayıt yeteneklerini görev hazır, mobil çözüme dönüştürür.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet ve Doğruluk",
      content:
        "Ultra düşük gürültü ve yüksek çözünürlük ile tasarlanmış SenS Portable, geleneksel sistemlerden kaçan aralıklı, düşük güçlü veya kısa süreli darbeli sinyaller dahil olmak üzere en karmaşık RF iletimlerini bile yakalayabilir. Mimarisi, saatler veya günler sürekli kayıt sağlamak için yüksek kapasiteli SSD'ler (25.6 TB'a kadar) ile RFeye DeepView yazılımını birleştirir. Bu, onu seyrek ama kritik sinyalleri tespit etme, sinyal istihbaratı kütüphaneleri oluşturma veya delil analizi yapma için son derece etkili hale getirir. Ayrıca karşı istihbarat için \"yaşam deseni\" verilerini toplamak, görev provası için doğal RF ortamlarını kaydetmek veya üretim test ve ölçüm uygulamaları için referans veri setleri oluşturmak için kullanılabilir. Olağanüstü doğruluk ve tekrarlanabilirlik sunarak, SenS Portable operatörlere her kayıtta güven sağlar.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section2.webp",
    },
    section3: {
      title: "Çok Yönlü Uygulama Alanları",
      content:
        "9 kHz'den 8 GHz, 18 GHz veya 40 GHz'e kadar geniş bant tespit aralığı ile SenS Portable, çoklu operasyonel alanlarda geniş çeşitlilikte sinyalleri yakalama esnekliği sunar. Tasarımı tek Hz seviyelerine kadar ultra yüksek çözünürlüğü destekler ve hem canlı analiz hem de son işleme görevleri için maksimum detay ve netlik sağlar. 4 şeritli Thunderbolt 3 arayüzü ile donatılmış olarak, 100 MHz IBW'ye kadar boşluksuz, 16-bit akışı mümkün kılar ve hiçbir sinyalin kaçırılmamasını sağlar. Bu çok yönlülük, SenS Portable'ı elektronik harp ve SIGINT/COMINT toplamadan parazit avcılığı, test ve ölçüm ve konuşlandırma öncesi istihbarat toplamaya kadar geniş uygulama yelpazesi için uygun hale getirir. Dayanıklı, güvenilir ve görev hazır olarak, operatörlerin en çok ihtiyaç duyduğu yerde kapsamlı RF durumsal farkındalığı sunar.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rf-kayit-iq",
  },
];

// Alt kategoriler için yardımcı fonksiyonlar
export function getRfSystemsBySubcategory(subcategory: string): RfSystem[] {
  return rfSystems.filter((system) => system.subcategory === subcategory);
}

export function getAllSubcategories(): string[] {
  const subcategories = new Set(rfSystems.map((system) => system.subcategory));
  return Array.from(subcategories).filter(Boolean) as string[];
}

export function getRfSystemBySlug(slug: string): RfSystem | undefined {
  return rfSystems.find((system) => system.slug === slug);
}

export function getAllRfSystemSlugs(): string[] {
  return rfSystems.map((system) => system.slug);
}

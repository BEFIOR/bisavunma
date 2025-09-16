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
    description: "Portable, rugged, exceptionally fast RF sensor with full 100 MHz I/Q recording and streaming for enhanced detection, POI and signal intelligence.",
    image: "/products/rf-sistemleri/rfeye-node-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gerçek zamanlı spektrum analizi",
      "Otomatik sinyal tespiti",
    ],
    section1: {
      title: "RFeye Node Plus 100-18 overview",
      content:
        "The RFeye Node Plus 100-18 is a high-performance spectrum analyzer and monitoring receiver designed for fast, long-distance data transfer via a 10 Gigabit Ethernet SFP+ port, supporting both fiber optic and copper connections. It covers a tuning range of 9 kHz to 18 GHz and features edge processing for full 100 MHz instantaneous bandwidth (IBW) recording, capture, and streaming. With a 120 dB dynamic range, 390 GHz/s sweep speed at 2 MHz RBW, and best-in-class frequency accuracy, tuning time, and phase noise performance, the sensor delivers exceptional RF sensing capabilities.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section1.webp",
    },
    section2: {
      title: "Gerçek Zamanlı İzleme",
      content:
        "The RFeye Node Plus 100-18 supports full 100 MHz RF recording (I/Q capture), allowing operators to analyze wider bandwidth signals. With enhanced processing power and memory, it manages and streams I/Q data at 550 MB/s (4 Gbps), making it ideal for advanced signal detection and high probability of intercept (POI) in EMSO, SIGINT, COMINT, DF, and EW missions. As an excellent handoff receiver in a networked system, it excels in spectrum monitoring, direction finding, and geolocation.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section2.webp",
    },
    section3: {
      title: "Entegre Analiz Platformu",
      content:
        "The RFeye Node Plus 100-18 delivers an optimal balance of SWaP-C and edge performance. Equipped with a high-speed processor, 10GigE SFP data interface, SSD port, and PCIe OCuLink port, it enables advanced RF intelligence capture and sharing, including full 100 MHz streaming via VITA-49. Geolocation streaming supports standard Asterix and Google Protocol Buffer data formats. Built for rugged environments, the sensor comes with a range of Control PC options.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-18-lw",
    title: "RFeye Node 100-18 LW",
    description: "High-performance RF sensor for autonomous system integration. An ideal EW & ISR sensor payload enabling real-time spectrum monitoring and I/Q data collection to 18 GHz",
    image: "/products/rf-sistemleri/rfeye-node-100-18-lw.webp",
    features: [
      "Düşük güç tüketimi",
      "100 MHz - 18 GHz aralığı",
      "Uzun süreli operasyon",
    ],
    section1: {
      title: "RFeye Node 100-18-LW overview",
      content:
        "The RFeye Node 100-18 LW (lightweight) sensor provides electronic warfare capabilities and RF intelligence in a compact, low Size, Weight, and Power (SWaP) package. Weighing 1.98 kg (excluding antennas), this intelligent RF sensor excels in signal detection, spectrum monitoring, and RF signal recording (I/Q data), capture, and geolocation up to 18 GHz.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section1.webp",
    },
    section2: {
      title: "Taşınabilir Tasarım",
      content:
        "The sensor is suitable for various UAS platforms, including those with small, medium, large, and very large Maximum Gross Take-off Weights (MGTW). The RFeye Node 100-18 LW's reduced weight extends UAS flight time, enabling high-performance electronic warfare (EW) sensors to be used as payloads on fixed-wing UAVs, large and medium-sized rotary drones, and tethered drones. Additionally, it can be integrated into unmanned ground vehicles (UGVs).Three RF ports support antennas for different frequency bands and all four GNSS satellite constellations. Co-engineering, interference, and filter settings knowledge and support are available for airframe system integrators.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section2.webp",
    },
    section3: {
      title: "Güvenilir Performans",
      content:
        "An uprated GNSS chipset supports the L1, L2, and L5 bands. The RFeye Node 100-18 LW offers outstanding phase noise, noise figure, channel re-tune time, and spurious free dynamic range parameters, superior to other similar RF sensors.<br /> Modified aluminum case and heatsink </br> Supports spectrum superiority and RF intelligence </br> Enables real-time continuous spectrum operations </br> Detects low-power and LPI signals </br> Operates effectively in GNSS-disrupted environments </br> Functions as a standalone RF sensor a networkable unit </br> Easy to integrate",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-40",
    title: "RFeye Node 100-40",
    description: "Portable & rugged high-performance RF sensor for real-time 24/7 spectrum monitoring and geolocation of transmitters up to 40 GHz",
    image: "/products/rf-sistemleri/rfeye-node-100-40.webp",
    features: [
      "100 MHz - 40 GHz frekans aralığı",
      "Ultra geniş bant analizi",
      "Yüksek çözünürlük",
    ],
    section1: {
      title: "Ultra Geniş Bant Analizi",
      content:
        "RFeye Node 100-40 overview The RFeye 100-40 is a high-performance RF sensor with a 9 kHz – 40 GHz frequency range and a 100 MHz instantaneous bandwidth. The RFeye Node 100-40 enables operators to monitor higher frequencies with advanced signal intercept by incorporating the latest superheterodyne receiver technology. ",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section1.webp",
    },
    section2: {
      title: "Yüksek Çözünürlük",
      content:
        "This fourth-generation RF sensor has in-built edge processing, reducing backhaul data bandwidth. Excellent phase noise, low noise figure, and superb spurious free dynamic range, coupled with FPGA technology, enables easy integration and exploitation of the SDR and computer platform.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "Real-time continuous spectrum operations </br> Finds low-power signals </br> Detects signals that have a low probability of intercept </br> Compatible with GPS, BeiDou, GALILEO, and GLONASS </br> Gateway to powerful software and APIs </br> Flexible deployment – rugged indoor or outdoor RF sensors for fixed, temporary, or mobile platforms ",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-100-8",
    title: "RFeye Node 100-8",
    description: "Portable and rugged high-performance RF sensor for real-time spectrum monitoring and geolocation of transmitters up to 8 GHz",
    image: "/products/rf-sistemleri/rfeye-node-100-8.webp",
    features: [
      "100 MHz - 8 GHz frekans aralığı",
      "Orta bant optimizasyonu",
      "Maliyet etkin çözüm",
    ],
    section1: {
      title: "Orta Bant Optimizasyonu",
      content:
        "The RFeye 100-8 is a high-performance RF sensor with a 9 kHz – 8 GHz frequency range and a 100 MHz instantaneous bandwidth. The RFeye 100-8 provides operators with precise spectrum monitoring, geolocation, reporting, and advanced signal intercept capabilities by incorporating the latest superheterodyne receiver technology. ",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section1.webp",
    },
    section2: {
      title: "Maliyet Etkin Çözüm",
      content:
        "This fourth-generation RF sensor has in-built edge processing, reducing backhaul data bandwidth. Excellent phase noise, low noise figure, and superb spurious free dynamic range, coupled with FPGA technology and card design, enable easy integration and exploitation of the SDR and computer platform. ",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section2.webp",
    },
    section3: {
      title: "Kolay Entegrasyon",
      content:
        "Real-time continuous spectrum operations <br /> Finds low-power signals <br /> Detects signals that have a low probability of intercept <br /> Compatible with GPS, BeiDou, GALILEO, and GLONASS <br /> Gateway to powerful software and APIs <br /> Flexible deployment – rugged indoor or outdoor RF sensors for fixed, temporary, or mobile platforms ",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-40-8",
    title: "RFeye Node 40-8",
    description: "Entry-level high-performance RF sensor for mobile spectrum monitoring and geolocation of transmitters up to 8 GHz",
    image: "/products/rf-sistemleri/rfeye-node-40-8.webp",
    features: [
      "40 MHz - 8 GHz frekans aralığı",
      "Dar bant odaklı",
      "Yüksek hassasiyet",
    ],
    section1: {
      title: "Dar Bant Odaklı Tasarım",
      content:
        "The RFeye 40-8 is a high-performance RF sensor with a 9 kHz – 8 GHz frequency range and a 40 MHz instantaneous bandwidth. The RFeye 40-8 provides operators with precise spectrum monitoring, geolocation, reporting, and advanced signal intercept capabilities by incorporating the latest superheterodyne receiver technology.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet",
      content:
        "This fourth-generation RF sensor has in-built edge processing, reducing backhaul data bandwidth. Excellent phase noise, low noise figure, and superb spurious free dynamic range, coupled with FPGA technology and card design, enable easy integration and exploitation of the SDR and computer platform. ",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section2.webp",
    },
    section3: {
      title: "Özel Uygulamalar",
      content:
        "Real-time continuous spectrum operations <br /> Finds low-power signals <br /> Detects signals that have a low probability of intercept <br /> Compatible with GPS, BeiDou, GALILEO, and GLONASS <br /> Gateway to powerful software and APIs <br /> Flexible deployment – rugged indoor or outdoor RF sensors for fixed, temporary, or mobile platforms ",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-node-plus-100-18",
    title: "RFeye Node Plus 100-18",
    description: "Portable, rugged, exceptionally fast RF sensor with full 100 MHz I/Q recording and streaming for enhanced detection, POI and signal intelligence.",
    image: "/products/rf-sistemleri/rfeye-node-plus-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gelişmiş özellikler",
      "Premium performans",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "The RFeye Node Plus 100-18 is a high-performance spectrum analyzer and monitoring receiver designed for fast, long-distance data transfer via a 10 Gigabit Ethernet SFP+ port, supporting both fiber optic and copper connections. It covers a tuning range of 9 kHz to 18 GHz and features edge processing for full 100 MHz instantaneous bandwidth (IBW) recording, capture, and streaming. With a 120 dB dynamic range, 390 GHz/s sweep speed at 2 MHz RBW, and best-in-class frequency accuracy, tuning time, and phase noise performance, the sensor delivers exceptional RF sensing capabilities.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "The RFeye Node Plus 100-18 supports full 100 MHz RF recording (I/Q capture), allowing operators to analyze wider bandwidth signals. With enhanced processing power and memory, it manages and streams I/Q data at 550 MB/s (4 Gbps), making it ideal for advanced signal detection and high probability of intercept (POI) in EMSO, SIGINT, COMINT, DF, and EW missions. As an excellent handoff receiver in a networked system, it excels in spectrum monitoring, direction finding, and geolocation.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section2.webp",
    },
    section3: {
      title: "Profesyonel Destek",
      content:
        "The RFeye Node Plus 100-18 delivers an optimal balance of SWaP-C and edge performance. Equipped with a high-speed processor, 10GigE SFP data interface, SSD port, and PCIe OCuLink port, it enables advanced RF intelligence capture and sharing, including full 100 MHz streaming via VITA-49. Geolocation streaming supports standard Asterix and Google Protocol Buffer data formats. Built for rugged environments, the sensor comes with a range of Control PC options.",
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
        "The DFH18 Direction Finding antenna is a robust, field-ready solution for real-time 500MHz–18GHz line-of-bearing (LOB) with a typical DF accuracy of less than 2.5° RMS. It is compatible with the RFeye Node 100-18 and RFeye Node 100-40 and can be attached to any existing RFeye Node.",
      image: "/products/rf-sistemleri/dfh18-section1.jpg",
    },
    section2: {
      title: "Geniş Frekans Aralığı",
      content:
        "Six high-performance spiral antennas with high-speed commutation and precise timing enable synchronized data correlation across multiple DF Heads and RFeye Nodes, delivering accurate geolocation of target signals using combined AoA and TDoA techniques. LOBs can be overlaid onto a wide variety of maps, satellite images, and 2D / 3D GIS datasets to give a unique positional display showing source geolocation probabilities. All signal types in the range can be mapped, irrespective of signal power, bandwidth, or frequency.",
      image: "/products/rf-sistemleri/dfh18-section2.jpg",
    },
    section3: {
      title: "Saha Uygulamaları",
      content:
        "Lightweight (7.5kg) and rapidly deployable, the DFH18 can be fully integrated into CRFS sensor networks and software ecosystems. Ideal for electromagnetic operations, border security, interference hunting, and wideband UHF/SHF/EHF COMINT/SIGINT operations. CRFS offers a selection of interchangeable DF Heads designed for use with Rapid Deployment Kits (RDKs), allowing users to build a toolkit suited to each mission.",
      image: "/products/rf-sistemleri/dfh18-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "dfh40",
    title: "DFH40",
    description: "The DFH40 is a Compact Direction-Finding Head operating from 500MHz to 40GHz. It combines high-precision direction-finding (AoA) with wideband spectrum monitoring 2D/3D TDoA in a rugged, tactical format.",
    image: "/products/rf-sistemleri/dfh40.webp",
    features: [
      "40 GHz frekans aralığı",
      "Ultra hassas yön bulma",
      "Çoklu sinyal tespiti",
    ],
    section1: {
      title: "Ultra Geniş Bant Yön Bulma",
      content:
        "The DFH40 Direction Finding antenna is a robust, field-ready solution for precision monitoring and direction finding from 500MHz to 40GHz, offering flexibility and frequency breadth across the SHF and lower EHF frequency bands. Designed for tactical deployments, the DFH40 enables reliable real-time direction finding, signal interception, and emitter geolocation where traditional systems cannot operate.",
      image: "/products/rf-sistemleri/dfh40-section1.jpg",
    },
    section2: {
      title: "Çoklu Sinyal Analizi",
      content:
        "Six high-performance spiral antennas with high-speed commutation and precise timing enable synchronized data correlation across multiple DF Heads and RFeye Nodes, delivering accurate geolocation of target signals using combined AoA and TDoA techniques. LOBs can be overlaid onto a wide variety of maps, satellite images and 2D / 3D GIS datasets, to give a unique positional display showing source geolocation probabilities. All signal types in the range can be mapped, irrespective of signal power, bandwidth or frequency.",
      image: "/products/rf-sistemleri/dfh40-section2.jpg",
    },
    section3: {
      title: "Profesyonel Operasyonlar",
      content:
        "CRFS offers a selection of interchangeable DF Heads designed for use with Rapid Deployment Kits (RDKs), allowing users to build a toolkit suited to each mission.",
      image: "/products/rf-sistemleri/dfh40-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "dfh500",
    title: "DFH500",
    description: "The DFH500 is a Compact Direction Finding Head that combines high-precision direction-finding (AoA) with wideband spectrum monitoring 2D/3D TDoA in a rugged, tactical format.",
    image: "/products/rf-sistemleri/dfh500.webp",
    features: [
      "500 MHz - 18 GHz aralığı",
      "Yüksek hassasiyet",
      "Hızlı tespit",
    ],
    section1: {
      title: "Yüksek Performans",
      content:
        "The DFH500 Direction Finding antenna is a robust, field-ready solution for precision monitoring and direction finding from 30MHz to 500MHz, offering flexibility and frequency breadth across the VHF and lower UHF bands. Designed for tactical deployments, the DFH500 enables reliable real-time direction finding, signal interception, and emitter geolocation where traditional systems cannot operate.",
      image: "/products/rf-sistemleri/dfh500-section1.jpg",
    },
    section2: {
      title: "Hızlı Tespit",
      content:
        "Lightweight and rapidly deployable, the DFH500 can be fully integrated into CRFS sensor networks and software ecosystems. Ideal for electromagnetic spectrum operations, border security, interference hunting, and VHF/UHF COMINT/SIGINT operations.",
      image: "/products/rf-sistemleri/dfh500-section2.jpg",
    },
    section3: {
      title: "Saha Uyumluluğu",
      content:
        "CRFS offers a selection of interchangeable heads designed for use with Rapid Deployment Kits (RDKs), allowing users to build a toolkit suited to each mission.",
      image: "/products/rf-sistemleri/dfh500-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "yon-bulma",
  },
  {
    slug: "rfeye-array-100-series",
    title: "RFeye Array 100 Series",
    description: "Radio direction finding, spectrum monitoring, and geolocation system",
    image: "/products/rf-sistemleri/rfeye-array-100-series.webp",
    features: [
      "100 MHz - 18 GHz aralığı",
      "Anten dizisi teknolojisi",
      "Yüksek kazanç",
    ],
    section1: {
      title: "Anten Dizisi Teknolojisi",
      content:
        "The Array 100 is a spectrum monitoring and direction-finding system for mobile or fixed deployment. It provides 100 MHz IBW and is available in two different receiver configurations, offering spectrum monitoring from 500 MHz to 8 or 18 GHz. This fully integrated multi-mission system has been optimized for size, weight, and power (SWaP) and can be mounted on a fixed or mobile application. The Array 100 is housed in a ruggedized radome and offers simultaneous DF, spectrum monitoring, and geolocation capability.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section1.webp",
    },
    section2: {
      title: "Geniş Frekans Kapsamı",
      content:
        "Each Array contains an RFeye Node, which is closely connected to the spiral antennas for maximum sensitivity. Commutating at very high speed around the antennas, the Node makes near-simultaneous AoA measurements in multiple directions. Data between multiple Arrays or between Arrays and Nodes can be correlated and synchronized for accurate geolocation of target signals using combined PoA, AoA, and TDoA techniques.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "Ruggedized protection from in harsh conditions </br> Enhanced usability thanks to being optimized for SWaP </br> Unique calibration file means no need for recalibration </br> Data is processed on the Node, reducing backhaul and enabling remote control </br> Unique antenna layout delivers maximum consistency and accuracy </br> Offers stand alone AoA DF or simultaneous hybrid AoA / TDoA operation",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "anten-dizileri",
  },
  {
    slug: "rfeye-array-300-series",
    title: "RFeye Array 300 Series",
    description: "High-performance, twin-channel system for simultaneous wideband radio monitoring and direction finding ",
    image: "/products/rf-sistemleri/rfeye-array-300-series.webp",
    features: [
      "300 MHz - 18 GHz aralığı",
      "Premium performans",
      "Gelişmiş özellikler",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "The Array 300 is a spectrum monitoring and direction-finding system for mobile or fixed deployment. It provides 100 MHz IBW and is available in three different receiver configurations, offering spectrum monitoring up to 8, 18, or 40 GHz. Each Array contains two RFeye Nodes to allow users to carry out multiple missions simultaneously. These RF sensors are closely connected to the antennas for maximum sensitivity. ",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "The Array 300 uses a unique multi-layer approach that is more sophisticated and versatile than traditional direction finding. It uses the Watson-Watt methodology for signals between 20 MHz and 300 MHz in addition to high-performance directional spiral antennas that reject interference and multipath and are optimized for different frequency bands. These spiral antennas are sensitive to most incoming signal polarizations, including all linear polarizations. This means the Array 300 can detect signals that are invisible to most DF systems. Also, the Array’s timing and synchronization features enable combined PoA, AoA, and TDoA techniques, allowing all signal types in the range to be mapped, irrespective of signal power, bandwidth, or frequency. ",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section2.webp",
    },
    section3: {
      title: "Kritik Uygulamalar",
      content:
        "Ruggedized protection in harsh environments (-30°C – +55°C) </br> Increased probability of intercept thanks to a dual receiver design </br> Unique antenna layout delivers maximum consistency and accuracy </br> Unique calibration file means no need for recalibration </br> Network over large distances for wide-area monitoring </br> Immunity to distorted wavefronts </br> Minimal sensitivity to depolarization ",
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
      title: "Delivering an unmanned & autonomous future",
      content:
        "Lightweight, rugged, high-performance RF sensors operating to 18 GHz for unmanned aerial vehicles. A sophisticated EW & ISR sensor payload and engineering support to help you achieve spectrum dominance through real time spectrum monitoring, DF, and recording I/Q data in high definition.   ",
      image: "/products/rf-sistemleri/integrated-drones-section1.webp",
    },
    section2: {
      title: "Extending line-of-sight & the radio horizon ",
      content:
        "CRFS’ RFeye Node 100-18 LW is a lightweight and intelligent sensor with in-built edge processing to reduce backhaul data bandwidth. It can record and capture I/Q data in high fidelity, offers advanced signal intercept, and boasts exceptional RF performance (9 kHz – 18 GHz).Integrating RF sensors into UAVs offers significant benefits by enhancing surveillance capabilities and intelligence collection. Improved line-of-sight (LOS) enables more precise and comprehensive surveillance over vast areas, directly contributing to an increased observation radius. Additionally, a larger information collection cone provided by UAVs means more data can be gathered, improving intelligence collection’s overall efficiency and effectiveness.",
      image: "/products/rf-sistemleri/integrated-drones-section2.webp",
    },
    section3: {
      title: "Benefits of integrating RF sensors as UAS payloads",
      content:
        "Improved line-of-sight (LOS) </br> Increased observation radius </br> Variable height antenna (anywhere, anytime) with reduced risk to personnel </br> Larger information collection cone </br> Passive monitoring (adversaries are unaware they have been detected) </br> Tethered platforms can have zero RF emissions </br> Standalone or networked C2 or sub-system capability </br> Workflow – collect, capture, and analyze RF data, create detectors, build a situational awareness picture, gain spectrum superiority </br> Transforms broad area surveillance, border security monitoring, communications intelligence, coastal surveillance, I/Q data collection </br> Integrated intelligence across multiple domains",
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
        "Integrated Vehicles, RF sensörlerini araç sistemleri ile entegre ederek mobil spektrum analizi imkanı sağlar.",
      image: "/products/rf-sistemleri/integrated-vehicles-1.webp",
    },
    section2: {
      title: "Mobil Platform",
      content:
        "Araç tabanlı mobil platform ile geniş alanlarda spektrum analizi ve sinyal tespiti yapabilir.",
      image: "/products/rf-sistemleri/integrated-vehicles-2.webp",
    },
    section3: {
      title: "Saha Operasyonları",
      content:
        "Saha operasyonlarında hızlı konuşlanma ve etkili spektrum analizi imkanı sunar.",
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
        "Mini Outdoor System Kit, kompakt tasarımı ile sahada hızlı kurulum ve taşıma imkanı sağlar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "Zorlu açık hava koşullarında güvenilir performans sağlayan dayanıklı tasarım.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Hızlı Kurulum",
      content:
        "Sahada hızlı kurulum ve operasyona geçiş imkanı ile taktik avantaj sağlar.",
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
        "Outdoor System Kit, kapsamlı RF analiz sistemi ile profesyonel spektrum analizi imkanı sağlar.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "Zorlu açık hava koşullarında uzun süreli güvenilir operasyon sağlayan dayanıklı tasarım.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Profesyonel Kullanım",
      content:
        "Profesyonel güvenlik ve askeri operasyonlarda üstün performans ve güvenilirlik sağlar.",
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
        "RFeye Stormcase, zorlu çevre koşullarında RF ekipmanlarını koruyan dayanıklı tasarım.",
      image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    },
    section2: {
      title: "Koruma Kutusu",
      content:
        "Hassas RF ekipmanlarını darbelerden, nemden ve diğer çevresel faktörlerden korur.",
      image: "/products/rf-sistemleri/rfeye-stormcase-2.webp",
    },
    section3: {
      title: "Taşıma Kolaylığı",
      content:
        "Sahada kolay taşıma ve güvenli depolama imkanı ile operasyonel verimlilik sağlar.",
      image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "platform-entegrasyonlari",
  },
  // TSCM Sistemleri
  {
    slug: "rfeye-guard",
    title: "RFeye Guard",
    description: "Continuous real-time in-building monitoring for Technical Surveillance Countermeasures",
    image: "/products/rf-sistemleri/rfeye-guard.webp",
    features: [
      "TSCM teknolojisi",
      "Dinleme tespiti",
      "Güvenlik önlemleri",
    ],
    section1: {
      title: "TSCM Teknolojisi",
      content:
        "RFeye Guard is a sophisticated in-place spectrum monitoring and threat geolocation system for 24/7/365 TSCM. It combines highly sensitive and broad bandwidth receivers with real-time and autonomous software to ensure you never miss an illicit signal.This high-specification technology offers continuous spectrum monitoring up to 40 GHz and is designed to detect signals that are likely to be missed by handheld sweepers. Its high sweep rates of almost 400 GHz/s and resolution down to 1 Hz make it a robust system designed to provide a 100% probability of intercept (POI) for unauthorized transmissions in real-time.",
      image: "/products/rf-sistemleri/rfeye-guard-section1.webp",
    },
    section2: {
      title: "Dinleme Tespiti",
      content:
        "RFeye Guard relies on a network of permanent RF receivers discreetly installed in ceiling kits. They continuously scan and sweep the electromagnetic spectrum for unauthorized transmissions. When they detect an illicit signal, RFeye software calculates its exact location using Power on Arrival (PoA) and issues security with an alert. </br> Real-time and automated 24/7/365 surveillance </br> Complete RF security </br> Integrates with existing building aesthetics </br> In-building geolocation of bugs and exterior monitoring </br> SyncLinc technology for accurate geolocation",
      image: "/products/rf-sistemleri/rfeye-guard-section2.webp",
    },
    section3: {
      title: "Güvenlik Önlemleri",
      content:
        "Kritik tesislerde güvenlik önlemleri alarak dinleme risklerini minimize eder.",
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
        "RFeye DeepView, gelişmiş spektrum analizi algoritmaları ile detaylı RF ortam analizi sağlar.",
      image: "/products/rf-sistemleri/rfeye-deepview-section1.jpg",
    },
    section2: {
      title: "Gelişmiş Görselleştirme",
      content:
        "Kullanıcı dostu arayüz ile spektrum verilerini görselleştirir ve analiz eder.",
      image: "/products/rf-sistemleri/rfeye-deepview-section2.jpg",
    },
    section3: {
      title: "Veri Analizi",
      content:
        "Toplanan spektrum verilerini analiz ederek anlamlı bilgiler ve raporlar üretir.",
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
        "RFeye Mission Manager, RF operasyonlarını planlar, yönetir ve koordine eder.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section2: {
      title: "Görev Planlama",
      content:
        "Detaylı görev planlama ve operasyonel süreç yönetimi imkanı sağlar.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section3: {
      title: "Koordinasyon",
      content:
        "Çoklu ekip ve sistem koordinasyonu ile operasyonel verimlilik sağlar.",
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
        "RFeye Site, sahada RF operasyonları için optimize edilmiş mobil yazılım çözümü.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section2: {
      title: "Mobil Kullanım",
      content:
        "Tablet ve mobil cihazlarda kullanım için optimize edilmiş kullanıcı arayüzü.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section3: {
      title: "Gerçek Zamanlı Analiz",
      content:
        "Sahada gerçek zamanlı spektrum analizi ve sinyal tespiti imkanı sağlar.",
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
        "Software Support & Updates Service, RFeye yazılımları için kapsamlı teknik destek ve bakım hizmeti sunar.",
      image: "/products/rf-sistemleri/software-support-updates-service-section1.jpg",
    },
    section2: {
      title: "Yazılım Güncellemeleri",
      content:
        "Düzenli yazılım güncellemeleri ve yeni özellikler ile sisteminizi her zaman güncel tutar.",
      image: "/products/rf-sistemleri/software-support-updates-service-section2.jpg",
    },
    section3: {
      title: "Uzaktan Bakım",
      content:
        "Uzaktan bakım ve sorun giderme hizmetleri ile sisteminizin sürekli çalışır durumda kalmasını sağlar.",
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
        "Software Releases, RFeye yazılım ailesi için düzenli olarak yeni sürümler ve özellik güncellemeleri sunar.",
      image: "/products/rf-sistemleri/software-releases-section1.jpg",
    },
    section2: {
      title: "Özellik Güncellemeleri",
      content:
        "Kullanıcı geri bildirimlerine dayalı olarak sürekli geliştirilen yeni özellikler ve iyileştirmeler.",
      image: "/products/rf-sistemleri/software-releases-section2.jpg",
    },
    section3: {
      title: "Hata Düzeltmeleri",
      content:
        "Tespit edilen hataların hızlı bir şekilde düzeltildiği güncellemeler ve sistem kararlılığı iyileştirmeleri.",
      image: "/products/rf-sistemleri/software-releases-section3.jpg",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-suite",
  },
  // RF Kayıt (I/Q) Sistemleri
  {
    slug: "rfeye-node-plus-100-18-iq",
    title: "RFeye Node Plus 100-18",
    description: "Portable, rugged, exceptionally fast RF sensor with full 100 MHz I/Q recording and streaming for enhanced detection, POI and signal intelligence.",
    image: "/products/rf-sistemleri/rfeye-node-plus-100-18.webp",
    features: [
      "100 MHz - 18 GHz frekans aralığı",
      "Gelişmiş özellikler",
      "Premium performans",
    ],
    section1: {
      title: "Premium Performans",
      content:
        "The RFeye Node Plus 100-18 is a high-performance spectrum analyzer and monitoring receiver designed for fast, long-distance data transfer via a 10 Gigabit Ethernet SFP+ port, supporting both fiber optic and copper connections. It covers a tuning range of 9 kHz to 18 GHz and features edge processing for full 100 MHz instantaneous bandwidth (IBW) recording, capture, and streaming. With a 120 dB dynamic range, 390 GHz/s sweep speed at 2 MHz RBW, and best-in-class frequency accuracy, tuning time, and phase noise performance, the sensor delivers exceptional RF sensing capabilities.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "The RFeye Node Plus 100-18 supports full 100 MHz RF recording (I/Q capture), allowing operators to analyze wider bandwidth signals. With enhanced processing power and memory, it manages and streams I/Q data at 550 MB/s (4 Gbps), making it ideal for advanced signal detection and high probability of intercept (POI) in EMSO, SIGINT, COMINT, DF, and EW missions. As an excellent handoff receiver in a networked system, it excels in spectrum monitoring, direction finding, and geolocation.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section2.webp",
    },
    section3: {
      title: "Profesyonel Destek",
      content:
        "The RFeye Node Plus 100-18 delivers an optimal balance of SWaP-C and edge performance. Equipped with a high-speed processor, 10GigE SFP data interface, SSD port, and PCIe OCuLink port, it enables advanced RF intelligence capture and sharing, including full 100 MHz streaming via VITA-49. Geolocation streaming supports standard Asterix and Google Protocol Buffer data formats. Built for rugged environments, the sensor comes with a range of Control PC options.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section3.webp",
    },
    category: "rf-sistemleri-ve-sinyal-istihbarat-sigint",
    subcategory: "rfeye-node",
  },
  {
    slug: "rfeye-sens-portable",
    title: "RFeye SenS Portable",
    description: "Take desktop-quality RF I/Q recording outside the lab",
    image: "/products/rf-sistemleri/rfeye-sens-portable.webp",
    features: [
      "Hafif ve taşınabilir tasarım",
      "Geniş frekans kapsama alanı",
      "Dahili batarya ile uzun çalışma",
    ],
    section1: {
      title: "Sahada Hızlı ve Güvenilir Analiz",
      content:
        "This is a lightweight, portable I/Q recorder for high-fidelity, long-duration RF recording, and signal extraction. With its small size and built-in storage of up to 25.6 TB, it records up to 12+ hours of RF signals, allowing you to capture hours of lab-quality signal data without the bulky lab equipment.The RFeye SenS Portable takes the long-duration, high-fidelity RF signal recording you might expect from a desktop recording system, and delivers it in a lightweight, portable form factor. Where other portable RF recorders cut corners in terms of signal fidelity, the SenS Portable combines small size and low weight with a highly sensitive RFeye receiver. This makes it ideal for capturing live, real-world signals in their native environment – without sacrificing RF recording quality.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet ve Doğruluk",
      content:
        "With tremendous resolution and ultra-low noise, the SenS Portable empowers you to capture the most complex RF signals, including intermittent, low-power signals, even signals with a short pulse duration that hide next to other transmission sources.The SenS Portable uses built-in, enterprise-class SSDs to provide up to 25.6 TB of storage for RF signal recording using CRFS’s RFeye DeepView software. This capability enables you to record vital RF signals for hours or even days in order to capture highly sporadic but critical signals. It can be used to capture pattern-of-life information for evidentiary analysis, to generate libraries of high-value signals for manufacturing test and measurement (T&M), or even to record native environments for pre-mission operational planning.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section2.webp",
    },
    section3: {
      title: "Çok Yönlü Uygulama Alanları",
      content:
        "Broadband – up to 40 GHz – detection range of 9 kHz to 8 GHz, 18 GHz or 40 GHz allows you to capture diverse signals </br> High resolution – Hz resolution provides the highest signal quality for analysis and post-processing </br> Full-rate I/Q – 4-lane Thunderbolt 3 port allows gapless, 16-bit streaming at up to 100 MHz IBW",
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

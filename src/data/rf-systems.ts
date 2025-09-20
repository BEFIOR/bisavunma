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
        "Compact yet powerful, the RFeye Node 100-18 LW (Lightweight) delivers advanced electronic warfare and RF intelligence in a low SWaP design. At just 1.98 kg (excluding antennas), it offers unmatched portability while maintaining high-performance capabilities. The sensor is engineered for effective spectrum monitoring, wideband signal detection, and precise RF recording with I/Q capture, extending geolocation and analysis across frequencies up to 18 GHz.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section1.webp",
    },
    section2: {
      title: "Taşınabilir Tasarım",
      content:
        "Suited for a wide range of UAS platforms—from small and medium to large and very-large MGTW—the RFeye Node 100-18 LW (Lightweight) extends airborne endurance thanks to its reduced 1.98 kg mass (antennas excluded), allowing high-performance EW sensors to be deployed as payloads on fixed-wing UAVs, rotary drones and tethered systems. Its three RF ports accommodate antennas across multiple frequency bands and support all four GNSS constellations, while the sensor's I/Q recording, detection and geolocation capability reaches up to 18 GHz. For integrators, co-engineering assistance is available along with expertise in interference mitigation and filter configuration to ensure smooth airframe integration; the unit can also be adapted for unmanned ground vehicle (UGV) installation.",
      image: "/products/rf-sistemleri/rfeye-node-100-18-lw-section2.webp",
    },
    section3: {
      title: "Güvenilir Performans",
      content:
        "The RFeye Node 100-18 LW delivers reliable performance through an uprated GNSS chipset supporting the L1, L2, and L5 bands. Its advanced design ensures outstanding phase noise, low noise figure, fast channel re-tune time, and an exceptionally high spurious-free dynamic range—surpassing comparable RF sensors in its class. Housed in a modified aluminum enclosure with integrated heatsink, the system is built for durability and efficiency in demanding environments. Engineered for spectrum superiority, it enables continuous real-time operations, detecting even low-power and low-probability-of-intercept (LPI) signals while maintaining resilience in GNSS-denied or disrupted conditions. Flexible in deployment, the Node functions both as a standalone RF sensor and as part of a scalable, networked architecture, offering seamless integration for a wide range of mission requirements.",
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
        "The RFeye Node 100-40 is a high-performance RF sensor designed to deliver wideband coverage and advanced signal intelligence. Operating across a broad frequency range from 9 kHz to 40 GHz with a 100 MHz instantaneous bandwidth, it provides unmatched visibility into higher frequency domains. Leveraging next-generation superheterodyne receiver technology, the Node enhances signal intercept capability, enabling operators to achieve superior monitoring, detection, and analysis of complex RF environments.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section1.webp",
    },
    section2: {
      title: "Yüksek Çözünürlük",
      content:
        "As a fourth-generation RF sensor, the RFeye Node 100-40 incorporates advanced edge processing to minimize backhaul bandwidth requirements and optimize data flow. Its superior RF characteristics—including excellent phase noise, a low noise figure, and a high spurious-free dynamic range—are complemented by FPGA-based technology, which streamlines integration with SDRs and computing platforms. This combination ensures seamless exploitation of wideband signals while maintaining high performance in demanding operational environments.",
      image: "/products/rf-sistemleri/rfeye-node-100-40-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "The RFeye Node 100-40 is engineered for real-time, continuous spectrum operations, providing the sensitivity to uncover low-power signals and identify transmissions with a low probability of intercept (LPI). Fully compatible with GPS, BeiDou, GALILEO, and GLONASS, it ensures reliable positioning and timing in diverse operational environments. Acting as a gateway to powerful software and APIs, the system offers extensive integration and analysis capabilities. Its rugged design supports flexible deployment, whether as a fixed installation, a temporary setup, or a mobile RF sensing platform—indoors or outdoors.",
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
        "The RFeye 100-8 is a high-performance RF sensor that delivers reliable coverage across the 9 kHz to 8 GHz frequency range with a 100 MHz instantaneous bandwidth. Designed for mission-critical operations, it enables precise spectrum monitoring, accurate geolocation, and comprehensive reporting, while its advanced superheterodyne receiver technology enhances signal intercept capability. This combination ensures operators can detect, analyze, and act on complex RF activity with exceptional accuracy and efficiency.",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section1.webp",
    },
    section2: {
      title: "Maliyet Etkin Çözüm",
      content:
        "This fourth-generation RF sensor integrates advanced edge processing to minimize backhaul bandwidth demands, optimizing efficiency in data handling. Delivering excellent phase noise performance, a low noise figure, and a superior spurious-free dynamic range, it ensures high-fidelity signal analysis across complex RF environments. With FPGA-driven architecture and a flexible card-based design, the system enables seamless integration with SDRs and computing platforms, allowing operators to fully exploit wideband signal intelligence with ease.",
      image: "/products/rf-sistemleri/rfeye-node-100-8-section2.webp",
    },
    section3: {
      title: "Kolay Entegrasyon",
      content:
        "Engineered for flexibility and resilience, the RFeye sensor family supports deployment on fixed sites, mobile platforms, or temporary installations—indoors or outdoors—without compromising performance. It enables real-time, continuous spectrum operations with the sensitivity to detect both low-power emissions and signals designed with a low probability of intercept (LPI). Full compatibility with GPS, BeiDou, GALILEO, and GLONASS ensures accurate positioning and timing across global missions. Acting as a gateway to advanced software suites and open APIs, the system provides operators with seamless integration, enhanced data exploitation, and reliable RF intelligence in any operational environment.",
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
        "The RFeye 40-8 is a high-performance RF sensor designed for reliable operations across the 9 kHz to 8 GHz frequency range, offering a 40 MHz instantaneous bandwidth. Leveraging advanced superheterodyne receiver technology, it delivers precise spectrum monitoring, accurate geolocation, and detailed reporting, while enhancing signal intercept capabilities. This combination ensures operators can detect, analyze, and respond to complex RF activity with confidence and efficiency.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet",
      content:
        "This fourth-generation RF sensor is equipped with advanced edge processing that minimizes backhaul bandwidth requirements and streamlines data transfer. Its excellent phase noise, low noise figure, and outstanding spurious-free dynamic range ensure superior signal fidelity, even in complex RF environments. Combined with FPGA-based architecture and a versatile card design, the sensor integrates seamlessly with SDRs and computing platforms, enabling efficient exploitation of wideband RF intelligence.",
      image: "/products/rf-sistemleri/rfeye-node-40-8-section2.webp",
    },
    section3: {
      title: "Özel Uygulamalar",
      content:
        "The RFeye sensor family is built for real-time, continuous spectrum operations, combining the sensitivity to uncover low-power transmissions with the advanced capability to detect signals designed for a low probability of intercept. With full compatibility across GPS, BeiDou, GALILEO, and GLONASS, it ensures accurate global positioning and timing in any mission environment. Serving as a gateway to powerful software applications and open APIs, the system allows seamless integration into existing workflows. Its ruggedized design supports flexible deployment—indoors or outdoors, as a fixed installation, a temporary setup, or a mobile RF sensing platform—delivering dependable RF intelligence wherever it is needed.",
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
        "The RFeye Node Plus 100-18 is a state-of-the-art spectrum analyzer and monitoring receiver, engineered to meet the demands of modern electronic warfare and intelligence missions. Designed for high-speed and long-distance data transfer, it utilizes a 10 Gigabit Ethernet SFP+ interface supporting both fiber optic and copper connections. Covering a tuning range from 9 kHz to 18 GHz, the Node incorporates advanced edge processing that enables full 100 MHz instantaneous bandwidth (IBW) recording, capture, and streaming. Delivering a 120 dB dynamic range, a sweep speed of 390 GHz/s at 2 MHz RBW, and industry-leading performance in frequency accuracy, tuning response, and phase noise, this sensor ensures operators can detect, analyze, and respond to even the most complex RF environments with unmatched precision.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "The RFeye Node Plus 100-18 is designed to provide operators with a complete set of advanced capabilities. Its full 100 MHz RF recording (I/Q capture) allows for wideband analysis of signals that traditional systems may miss. With enhanced processing power and expanded memory, it can efficiently manage and stream I/Q data at 550 MB/s (4 Gbps). This makes it a mission-critical tool for advanced signal detection and ensures a high probability of intercept (POI) across EMSO, SIGINT, COMINT, DF, and EW operations. Within a networked system, the Node also functions as an outstanding handoff receiver, delivering superior performance in spectrum monitoring, direction finding, and geolocation—supporting both standalone deployments and large-scale distributed architectures.",
      image: "/products/rf-sistemleri/rfeye-node-plus-100-18-section2.webp",
    },
    section3: {
      title: "Profesyonel Destek",
      content:
        "The RFeye Node Plus 100-18 has been engineered to provide an optimal balance of Size, Weight, Power, and Cost (SWaP-C) alongside powerful edge processing capabilities. Its hardware architecture includes a high-speed processor, 10GigE SFP data interface, SSD port, and PCIe OCuLink connectivity, enabling seamless RF intelligence capture, storage, and sharing. Supporting full 100 MHz streaming via the VITA-49 protocol, it ensures interoperability across modern analysis systems. For geolocation, the Node outputs data in both Asterix and Google Protocol Buffer formats, delivering compatibility with command-and-control platforms and multi-domain ISR systems. Built to withstand harsh environments, the sensor is ruggedized for durability and reliability, and it can be paired with a range of Control PC options to fit specific mission requirements.",
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
        "The DFH18 Direction Finding Antenna is a rugged, field-ready solution providing real-time 500 MHz–18 GHz line-of-bearing (LOB) with a typical DF accuracy of less than 2.5° RMS. Fully compatible with the RFeye Node 100-18 and RFeye Node 100-40, it can be seamlessly integrated with any existing RFeye Node system.",
      image: "/products/rf-sistemleri/dfh18-section1.jpg",
    },
    section2: {
      title: "Geniş Frekans Aralığı",
      content:
        "Equipped with six high-performance spiral antennas, the DFH18 utilizes high-speed commutation and precise timing to enable synchronized data correlation across multiple DF Heads and RFeye Nodes. This capability delivers accurate geolocation of target signals using combined Angle of Arrival (AoA) and Time Difference of Arrival (TDoA) techniques. LOBs can be displayed on a variety of mapping platforms, including satellite imagery and 2D/3D GIS datasets, providing clear positional data and source geolocation probabilities—regardless of signal type, frequency, bandwidth, or power.",
      image: "/products/rf-sistemleri/dfh18-section2.jpg",
    },
    section3: {
      title: "Saha Uygulamaları",
      content:
        "Weighing just 7.5 kg, the DFH18 is lightweight, portable, and quickly deployable in demanding environments. It integrates seamlessly into CRFS sensor networks and software ecosystems, making it ideal for electromagnetic operations, border security, interference hunting, and wideband UHF/SHF/EHF COMINT/SIGINT missions. CRFS also offers a selection of interchangeable DF Heads for use with Rapid Deployment Kits (RDKs), enabling operators to configure mission-specific toolkits tailored to operational needs.",
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
        "The DFH40 Direction Finding Antenna is a rugged, field-ready solution for precision monitoring and direction finding across the 500 MHz to 40 GHz range. Covering SHF and lower EHF frequency bands, it provides unmatched flexibility and frequency breadth. Engineered for tactical deployments, the DFH40 delivers reliable real-time direction finding, signal interception, and emitter geolocation in environments where conventional systems are limited.",
      image: "/products/rf-sistemleri/dfh40-section1.jpg",
    },
    section2: {
      title: "Çoklu Sinyal Analizi",
      content:
        "Featuring six high-performance spiral antennas with high-speed commutation and precise timing, the DFH40 supports synchronized data correlation across multiple DF Heads and RFeye Nodes. This enables highly accurate geolocation of target signals through combined Angle of Arrival (AoA) and Time Difference of Arrival (TDoA) techniques. Line-of-Bearing (LOB) results can be overlaid on maps, satellite imagery, and 2D/3D GIS datasets, providing clear positional displays and source probability estimates. All signal types within the operating range can be mapped—regardless of frequency, bandwidth, or power.",
      image: "/products/rf-sistemleri/dfh40-section2.jpg",
    },
    section3: {
      title: "Profesyonel Operasyonlar",
      content:
        "Lightweight, modular, and designed for rapid deployment, the DFH40 integrates seamlessly into CRFS sensor networks and software ecosystems. CRFS also provides interchangeable DF Heads for use with Rapid Deployment Kits (RDKs), enabling operators to configure mission-specific toolkits tailored to operational demands.",
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
        "The DFH500 Direction Finding Antenna is a rugged, field-ready solution designed for precision monitoring and direction finding in the 30 MHz to 500 MHz range. Covering VHF and lower UHF bands, it delivers flexibility and broad frequency coverage. Optimized for tactical deployments, the DFH500 provides reliable real-time direction finding, signal interception, and emitter geolocation in environments where conventional systems are limited.",
      image: "/products/rf-sistemleri/dfh500-section1.jpg",
    },
    section2: {
      title: "Hızlı Tespit",
      content:
        "Lightweight and easy to deploy, the DFH500 integrates seamlessly into CRFS sensor networks and software ecosystems. It is ideally suited for electromagnetic spectrum operations, border security, interference hunting, and VHF/UHF COMINT/SIGINT missions, ensuring operators can rapidly detect and respond to emerging threats.",
      image: "/products/rf-sistemleri/dfh500-section2.jpg",
    },
    section3: {
      title: "Saha Uyumluluğu",
      content:
        "To maximize mission adaptability, CRFS offers a range of interchangeable DF Heads compatible with Rapid Deployment Kits (RDKs). This modular approach allows users to build tailored toolkits, ensuring the DFH500 can be configured to meet diverse operational requirements.",
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
        "The Array 100 is a fully integrated spectrum monitoring and direction-finding system designed for both mobile and fixed deployments. Offering a 100 MHz instantaneous bandwidth (IBW), it comes in two receiver configurations covering 500 MHz to either 8 GHz or 18 GHz. Optimized for Size, Weight, and Power (SWaP), the system can be mounted on vehicles or installed at fixed sites. Housed in a ruggedized radome, the Array 100 provides simultaneous DF, spectrum monitoring, and geolocation capabilities, making it a versatile multi-mission solution.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section1.webp",
    },
    section2: {
      title: "Geniş Frekans Kapsamı",
      content:
        "At the core of each Array is an RFeye Node, directly coupled with spiral antennas for maximum sensitivity. Through ultra-fast commutation, the Node performs near-simultaneous Angle of Arrival (AoA) measurements across multiple directions. By correlating data between Arrays or between Arrays and standalone Nodes, operators can achieve highly accurate geolocation of target signals using hybrid Position of Arrival (PoA), AoA, and Time Difference of Arrival (TDoA) techniques.",
      image: "/products/rf-sistemleri/rfeye-array-100-series-section2.webp",
    },
    section3: {
      title: "Profesyonel Uygulamalar",
      content:
        "The Array 100 is engineered for professional operations, combining ruggedized environmental protection with SWaP-optimized design for maximum usability. A unique factory calibration eliminates the need for recalibration, while on-board processing reduces backhaul and allows full remote control. Its specialized antenna layout ensures consistent accuracy and performance. The system supports both stand-alone AoA direction finding and simultaneous hybrid AoA/TDoA operation, adapting seamlessly to mission requirements.",
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
        "The Array 300 is a high-performance spectrum monitoring and direction-finding system designed for both mobile and fixed deployments. Providing 100 MHz instantaneous bandwidth (IBW), it is available in three receiver configurations covering up to 8, 18, or 40 GHz. Each Array integrates two RFeye Nodes, enabling operators to perform multiple missions simultaneously. Closely coupled with the antennas for maximum sensitivity, these RF sensors deliver superior detection and monitoring across a wide frequency range.",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section1.webp",
    },
    section2: {
      title: "Gelişmiş Özellikler",
      content:
        "Employing a sophisticated multi-layer DF architecture, the Array 300 goes beyond traditional direction-finding systems. It combines the Watson-Watt methodology for low-frequency signals (20–300 MHz) with advanced directional spiral antennas engineered to minimize interference, reject multipath, and optimize coverage across different bands. Sensitive to a wide range of polarizations—including all linear polarizations—the system can capture signals undetectable by most DF solutions. Timing and synchronization features support hybrid Position of Arrival (PoA), Angle of Arrival (AoA), and Time Difference of Arrival (TDoA) techniques, ensuring precise mapping of all signal types, regardless of power, bandwidth, or frequency.",
      image: "/products/rf-sistemleri/rfeye-array-300-series-section2.webp",
    },
    section3: {
      title: "Kritik Uygulamalar",
      content:
        "• Ruggedized construction for harsh environments (-30°C to +55°C) • Dual-receiver architecture for increased probability of intercept • Unique antenna layout ensuring maximum consistency and accuracy • Factory calibration eliminating the need for recalibration • Long-distance networking capability for wide-area monitoring • High immunity to distorted wavefronts and minimal sensitivity to depolarization",
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
        "CRFS' lightweight, rugged, and high-performance RF sensors—operating up to 18 GHz—are optimized as payloads for unmanned aerial vehicles (UAVs). They provide advanced EW and ISR capabilities through real-time spectrum monitoring, direction finding, and high-definition I/Q data recording. Combined with engineering support, these sensors empower operators to achieve spectrum dominance in contested environments.",
      image: "/products/rf-sistemleri/integrated-drones-section1.webp",
    },
    section2: {
      title: "Extending Line-of-Sight & the Radio Horizon",
      content:
        "The RFeye Node 100-18 LW is a compact, intelligent sensor equipped with in-built edge processing to reduce backhaul data bandwidth. Covering 9 kHz to 18 GHz, it delivers high-fidelity I/Q recording, superior RF performance, and advanced signal intercept. When integrated into UAVs, these sensors extend surveillance reach by improving line-of-sight, enlarging the observation radius, and providing a broader information collection cone. This expanded coverage enhances intelligence gathering, situational awareness, and mission effectiveness across diverse operational theaters.",
      image: "/products/rf-sistemleri/integrated-drones-section2.webp",
    },
    section3: {
      title: "Benefits of Integrating RF Sensors as UAS Payloads",
      content:
        "• Improved line-of-sight (LOS) and increased observation radius • Variable height antenna deployment with reduced personnel risk • Larger information collection cone for enhanced intelligence yield • Passive monitoring, ensuring adversaries remain undetected • Tethered platforms capable of zero RF emissions • Standalone or networked C2/sub-system operation • End-to-end workflow: collect, capture, analyze RF data, generate detectors, and build situational awareness • Force multiplier for wide-area surveillance, border security, communications intelligence, coastal monitoring, and I/Q data collection • Enables integrated intelligence across multiple domains",
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
        "Integrating RF sensors into vehicle platforms transforms standard vehicles into mobile spectrum intelligence systems. This integration enables real-time monitoring, wideband spectrum analysis, and continuous signal intelligence collection, even while on the move. Vehicles equipped with RF sensing technology provide both tactical and strategic advantages by ensuring persistent surveillance and rapid data transfer to command centers.",
      image: "/products/rf-sistemleri/integrated-vehicles-1.webp",
    },
    section2: {
      title: "Mobil Platform",
      content:
        "Vehicle-based mobile platforms play a critical role in missions requiring broad-area coverage and rapid deployment. Unlike fixed installations, mobile systems can quickly relocate to different regions and deliver precise spectrum monitoring and signal detection. Their advanced capabilities allow the capture of weak transmissions, low probability of intercept (LPI) signals, and hostile communication activities. These platforms are highly versatile and can be deployed for urban monitoring, border security, and the protection of critical infrastructure.",
      image: "/products/rf-sistemleri/integrated-vehicles-2.webp",
    },
    section3: {
      title: "Saha Operasyonları",
      content:
        "In field operations, speed, flexibility, and reliability are essential. Vehicles equipped with RF sensors enable rapid deployment and instant mission readiness, even in harsh terrains and high-threat environments. They provide real-time spectrum intelligence, direction finding, and geolocation, with the ability to stream actionable data directly to command networks. This ensures faster decision-making and operational superiority, while supporting simultaneous monitoring, detection, and recording of target signals.",
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
        "The Mini Outdoor System Kit has been specifically engineered with a compact, lightweight, and portable design, allowing operators to transport and deploy it with ease across a wide range of mission environments. Its reduced form factor does not compromise on capability; instead, it enables advanced spectrum monitoring, signal intelligence, and real-time analysis to be carried out without the logistical challenges of bulky equipment. The compact structure also enhances mobility for tactical teams, making it ideal for scenarios that require frequent relocation or operations in difficult-to-access areas such as mountainous terrain, border regions, or urban environments. By combining portability with performance, the Mini Outdoor System Kit empowers operators to maintain a constant state of readiness while minimizing operational footprint.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "Designed to perform under extreme and unpredictable outdoor conditions, the Mini Outdoor System Kit is ruggedized for durability and resilience. Its robust construction ensures uninterrupted functionality in environments exposed to rain, dust, wind, and temperature fluctuations ranging from severe cold to intense heat. Whether deployed in deserts, coastal regions, or high-altitude locations, the system maintains stable and accurate RF sensing capabilities. This outdoor compatibility not only enhances reliability but also ensures mission continuity in hostile or rapidly changing environments where equipment failure is not an option. Operators benefit from a dependable system that is engineered to endure the toughest field conditions, delivering consistent spectrum intelligence when it is needed most.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Hızlı Kurulum",
      content:
        "One of the key advantages of the Mini Outdoor System Kit is its ability to be rapidly deployed and transitioned into full operational status. Field teams can assemble and activate the system within minutes, drastically reducing the time between arrival on site and the commencement of mission-critical spectrum monitoring. This rapid setup capability provides a significant tactical edge, particularly in time-sensitive operations such as interference hunting, counter-UAS missions, or emergency response scenarios. In addition to fast deployment, the system's intuitive configuration allows operators to easily integrate it into existing networks and workflows, ensuring seamless compatibility with command-and-control structures. By enabling quick setup, immediate data collection, and real-time analysis, the Mini Outdoor System Kit ensures that operators can achieve situational awareness and spectrum superiority without delay.",
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
        "The Outdoor System Kit is a fully integrated RF analysis solution that provides professional-grade spectrum monitoring, signal detection, and geolocation capabilities. Designed for operators who require advanced performance in the field, the system enables continuous monitoring of the electromagnetic spectrum across a wide frequency range. Its comprehensive architecture ensures not only accurate detection of weak or low-probability-of-intercept (LPI) signals but also the ability to record I/Q data in high fidelity for post-mission analysis. By combining spectrum analysis, real-time monitoring, and geolocation into a single system, the Outdoor System Kit delivers a complete package for intelligence, security, and defense applications.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-1.webp",
    },
    section2: {
      title: "Açık Hava Uyumlu",
      content:
        "Engineered to withstand the most demanding environmental conditions, the Outdoor System Kit is ruggedized for durability and long-term reliability. Whether deployed in extreme heat, freezing temperatures, coastal humidity, or dusty desert environments, the system maintains stable performance over extended operational periods. Its robust enclosure protects sensitive electronics from weather and harsh external factors, ensuring uninterrupted mission effectiveness. Outdoor compatibility also allows operators to maintain persistent spectrum surveillance in remote or hostile regions without the need for constant maintenance or recalibration.",
      image: "/products/rf-sistemleri/mini-outdoor-kit-2.webp",
    },
    section3: {
      title: "Profesyonel Kullanım",
      content:
        "Tailored for professional security, defense, and military operations, the Outdoor System Kit offers unmatched performance and reliability. It is ideally suited for border monitoring, critical infrastructure protection, counter-UAS missions, and electronic warfare tasks where precision and speed are critical. With seamless integration into larger sensor networks and command-and-control systems, it provides both standalone capability and scalable networked operations. By combining advanced technology with a ruggedized field-ready design, the Outdoor System Kit empowers operators to maintain spectrum dominance and situational awareness in even the most challenging operational theaters.",
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
        "The RFeye Stormcase is purpose-built to protect sensitive RF equipment in the harshest environmental conditions. Its ruggedized structure provides superior resistance against shocks, dust, moisture, and extreme temperatures, ensuring mission-critical systems remain fully operational regardless of the environment. This durable design makes the Stormcase an essential solution for field deployments, guaranteeing long-term reliability and protection for high-value electronic assets.",
      image: "/products/rf-sistemleri/rfeye-stormcase-1.webp",
    },
    section2: {
      title: "Koruma Kutusu",
      content:
        "Designed as a robust protective enclosure, the RFeye Stormcase shields delicate RF sensors and components from physical impact, vibration, humidity, and other external threats that could compromise performance. By safeguarding equipment from both natural and operational hazards, it helps extend the service life of mission-critical technology. Whether in transit, in storage, or during rapid deployment, the Stormcase provides a secure environment that ensures equipment is always ready for immediate use.",
      image: "/products/rf-sistemleri/rfeye-stormcase-2.webp",
    },
    section3: {
      title: "Taşıma Kolaylığı",
      content:
        "Lightweight yet resilient, the RFeye Stormcase offers easy handling and transport for operators in the field. Ergonomic features and secure locking mechanisms allow users to quickly move equipment between locations, while also enabling safe storage when not in operation. This ease of mobility enhances operational efficiency by reducing setup time, ensuring teams can focus on spectrum monitoring and signal intelligence tasks without delays. The Stormcase's portability, combined with its rugged protection, provides a practical balance of security and convenience for dynamic field operations.",
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
        "RFeye Guard is an advanced in-place spectrum monitoring and threat geolocation system designed for continuous Technical Surveillance Counter-Measures (TSCM) operations, running 24/7/365. Equipped with highly sensitive wideband receivers and fully autonomous real-time software, it ensures that no illicit transmission goes undetected. The system provides uninterrupted monitoring up to 40 GHz, with sweep speeds approaching 400 GHz/s and resolution down to 1 Hz. This high-performance capability guarantees a 100% probability of intercept (POI) for unauthorized signals, including those too subtle or transient to be identified by conventional handheld sweepers. RFeye Guard establishes a persistent, automated layer of protection against eavesdropping threats.",
      image: "/products/rf-sistemleri/rfeye-guard-section1.webp",
    },
    section2: {
      title: "Dinleme Tespiti",
      content:
        "Operating through a discreetly installed network of permanent RF receivers—typically mounted within ceiling kits—RFeye Guard constantly scans the electromagnetic spectrum for anomalies or unauthorized transmissions. Upon detection, its software instantly calculates the signal's origin using advanced Power on Arrival (PoA) techniques and delivers an immediate alert to security personnel. This enables rapid response before sensitive information is compromised. With features such as real-time automated surveillance, seamless integration into existing building aesthetics, and the ability to geolocate both in-building devices and external emitters, RFeye Guard ensures complete RF security coverage. SyncLinc technology further enhances geolocation precision, making it a highly effective countermeasure system against covert surveillance devices.",
      image: "/products/rf-sistemleri/rfeye-guard-section2.webp",
    },
    section3: {
      title: "Güvenlik Önlemleri",
      content:
        "RFeye Guard is specifically designed to minimize eavesdropping risks in critical facilities such as government buildings, corporate headquarters, defense establishments, and financial institutions. By delivering constant RF security, geolocation capabilities, and automated detection, it acts as a proactive safeguard against espionage and data breaches. Unlike manual sweeps that are periodic and limited in scope, this system ensures persistent protection around the clock. Its combination of discretion, automation, and high performance allows organizations to maintain operational confidentiality and protect sensitive communications under all circumstances.",
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
        "RFeye DeepView provides operators with advanced spectrum analysis capabilities through state-of-the-art algorithms designed for in-depth RF environment evaluation. By identifying, isolating, and classifying signals across a broad frequency range, it enables users to detect hidden transmissions, monitor interference, and assess the overall health of the electromagnetic spectrum. This makes it an essential tool for intelligence gathering, regulatory compliance, and mission planning where accuracy and reliability are paramount.",
      image: "/products/rf-sistemleri/rfeye-deepview-section1.jpg",
    },
    section2: {
      title: "Gelişmiş Görselleştirme",
      content:
        "Equipped with a highly intuitive and user-friendly interface, RFeye DeepView allows complex spectrum data to be transformed into clear, actionable visualizations. Operators can view frequency activity in real time, identify anomalies, and overlay spectrum patterns on multiple visualization layers. Advanced mapping and 2D/3D visualization tools make it easier to correlate signals with geographic or operational contexts, giving decision-makers a comprehensive picture of the electromagnetic environment.",
      image: "/products/rf-sistemleri/rfeye-deepview-section2.jpg",
    },
    section3: {
      title: "Veri Analizi",
      content:
        "Beyond visualization, RFeye DeepView delivers powerful data analytics that transform raw spectrum measurements into meaningful intelligence. The software processes large volumes of collected RF data to generate detailed reports, statistical breakdowns, and operational insights. By supporting long-duration data capture and replay, it allows users to conduct forensic analysis, build pattern-of-life libraries, and detect intermittent or low-power signals that may otherwise go unnoticed. These analytical capabilities make it a versatile platform for defense, security, and spectrum management missions.",
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
        "RFeye Mission Manager is a powerful software platform designed to plan, manage, and oversee complex RF operations. It provides operators with centralized control, enabling real-time monitoring of mission status, system performance, and operational outcomes. By integrating spectrum monitoring, direction finding, and geolocation tasks into a single interface, it streamlines workflows and ensures that missions are executed with precision and efficiency.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section2: {
      title: "Görev Planlama",
      content:
        "With advanced tasking and scheduling tools, RFeye Mission Manager allows users to design and implement detailed mission plans tailored to specific operational objectives. Operators can predefine monitoring parameters, assign resources, and set automated triggers for signal detection or geolocation events. This structured approach reduces human error, improves readiness, and ensures that mission-critical operations are carried out according to strategic priorities.",
      image: "/products/rf-sistemleri/rfeye-mission-manager.webp",
    },
    section3: {
      title: "Koordinasyon",
      content:
        "RFeye Mission Manager enhances coordination across multiple teams, sensors, and operational theaters. By synchronizing data from distributed RFeye Nodes and DF systems, it enables seamless collaboration between different units and command centers. The platform supports networked operations, allowing information to be shared securely and instantly across organizations. This multi-team and multi-system integration not only boosts operational efficiency but also strengthens situational awareness, helping decision-makers respond faster and with greater accuracy in dynamic environments.",
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
        "RFeye Site is a mobile software solution purpose-built for field RF operations, providing operators with a lightweight yet powerful platform for on-the-go spectrum monitoring. Optimized for deployment in dynamic environments, it ensures mission readiness by bringing advanced spectrum intelligence capabilities directly into the hands of field teams. Whether for rapid surveys, interference hunting, or tactical monitoring, RFeye Site enables seamless RF data collection and analysis outside of traditional command centers.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section2: {
      title: "Mobil Kullanım",
      content:
        "The software features an interface specifically optimized for tablets and mobile devices, allowing operators to access and control RFeye Nodes with ease in the field. Its intuitive design reduces operator workload and training requirements, enabling quick adoption by field personnel. With mobile accessibility, teams can carry out spectrum scans, monitor live signals, and manage sensor configurations on-site, delivering maximum flexibility and responsiveness in time-sensitive operations.",
      image: "/products/rf-sistemleri/rfeye-site.webp",
    },
    section3: {
      title: "Gerçek Zamanlı Analiz",
      content:
        "RFeye Site empowers operators with the ability to perform real-time spectrum analysis and signal detection directly in the field. It provides immediate insight into the RF environment, identifying interference, unauthorized transmissions, or potential threats as they occur. Real-time visualization and alerting capabilities enable faster decision-making and ensure that operators can act on actionable intelligence without delay. By combining mobile usability with advanced analytics, RFeye Site delivers an essential tool for spectrum dominance in field operations.",
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
        "The Software Support & Updates Service provides comprehensive technical support and maintenance for all RFeye software platforms. It is designed to ensure that users have continuous access to expert assistance, system optimization, and lifecycle support, guaranteeing that mission-critical operations remain uninterrupted. This service covers everything from troubleshooting and bug resolution to proactive performance improvements, enabling organizations to maximize the reliability and effectiveness of their RFeye systems.",
      image: "/products/rf-sistemleri/software-support-updates-service-section1.jpg",
    },
    section2: {
      title: "Yazılım Güncellemeleri",
      content:
        "Regular software updates deliver new features, enhancements, and security improvements to keep systems fully up to date. These updates are developed based on operational requirements and user feedback, ensuring that software capabilities evolve alongside mission needs. From advanced visualization tools to improved system integration, updates expand functionality without requiring hardware changes, protecting long-term investment and maintaining cutting-edge performance.",
      image: "/products/rf-sistemleri/software-support-updates-service-section2.jpg",
    },
    section3: {
      title: "Uzaktan Bakım",
      content:
        "Remote maintenance services provide operators with real-time troubleshooting and system health monitoring, reducing downtime and ensuring maximum operational availability. Through secure remote access, technical experts can identify, diagnose, and resolve issues quickly, often before they impact critical operations. This capability ensures continuous system readiness and performance reliability, particularly for organizations operating in mission-sensitive or geographically dispersed environments.",
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
        "Software Releases deliver regular updates and new capabilities across the RFeye software suite, ensuring that users always have access to the latest tools for spectrum monitoring, analysis, and management. Each release is carefully engineered to enhance performance, security, and compatibility, while maintaining continuity with existing workflows. This approach ensures that RFeye systems remain future-ready, scalable, and aligned with evolving mission requirements.",
      image: "/products/rf-sistemleri/software-releases-section1.jpg",
    },
    section2: {
      title: "Özellik Güncellemeleri",
      content:
        "New features and enhancements are continuously developed based on user feedback and operational needs. From improved visualization tools and advanced analytics to expanded integration with external systems, each update introduces functionalities that improve efficiency and expand mission capabilities. These updates not only add value but also ensure that operators can take advantage of the latest innovations without costly hardware replacements.",
      image: "/products/rf-sistemleri/software-releases-section2.jpg",
    },
    section3: {
      title: "Hata Düzeltmeleri",
      content:
        "Each release also includes targeted bug fixes and performance improvements, addressing issues identified in the field to ensure maximum system stability and reliability. Quick resolution of detected errors helps maintain uninterrupted operations and minimizes downtime, which is critical in mission environments where reliability cannot be compromised. Alongside fixes, system optimizations are introduced to further strengthen security, responsiveness, and overall platform resilience.",
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
        "The RFeye SenS Portable is a lightweight and portable I/Q recorder designed for high-fidelity, long-duration RF signal capture and extraction. Despite its compact form factor, it offers up to 25.6 TB of built-in enterprise-class storage, enabling more than 12 hours of uninterrupted RF recording at lab-grade quality—without the need for bulky laboratory equipment. Unlike other portable recorders that sacrifice performance for size, the SenS Portable combines low weight and small size with the advanced sensitivity of the RFeye receiver. This unique balance allows operators to capture real-world signals in their native environments while preserving the highest levels of RF fidelity. Perfect for tactical missions and field operations, it transforms desktop-level RF recording capabilities into a mission-ready, mobile solution.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section1.webp",
    },
    section2: {
      title: "Yüksek Hassasiyet ve Doğruluk",
      content:
        "Engineered with ultra-low noise and high resolution, the SenS Portable is capable of capturing even the most complex RF transmissions, including intermittent, low-power, or short-duration pulsed signals that often evade conventional systems. Its architecture leverages high-capacity SSDs (up to 25.6 TB) combined with RFeye DeepView software to ensure hours or days of continuous recording. This makes it highly effective for detecting sporadic but critical signals, building signal intelligence libraries, or conducting evidentiary analysis. It can also be employed to collect \"pattern-of-life\" data for counterintelligence, record native RF environments for mission rehearsal, or generate reference datasets for manufacturing test and measurement applications. By delivering exceptional accuracy and repeatability, the SenS Portable provides operators with confidence in every recording.",
      image: "/products/rf-sistemleri/rfeye-sens-portable-section2.webp",
    },
    section3: {
      title: "Çok Yönlü Uygulama Alanları",
      content:
        "With a broadband detection range from 9 kHz to 8 GHz, 18 GHz, or 40 GHz, the SenS Portable offers flexibility to capture a wide variety of signals across multiple operational domains. Its design supports ultra-high resolution down to single-Hz levels, ensuring maximum detail and clarity for both live analysis and post-processing tasks. Equipped with a 4-lane Thunderbolt 3 interface, it enables gapless, 16-bit streaming at up to 100 MHz IBW, ensuring no signal is missed. This versatility makes the SenS Portable suitable for a broad spectrum of applications, from electronic warfare and SIGINT/COMINT collection to interference hunting, test & measurement, and pre-deployment intelligence gathering. Rugged, reliable, and mission-ready, it delivers comprehensive RF situational awareness wherever operators need it most.",
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

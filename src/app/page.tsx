export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section with Video Background Only */}
      <section className="relative pt-24 overflow-hidden min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
           <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) contrast(1.2)' }}
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0  bg-opacity-60"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden BİSAVUNMA?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Savunma sektöründe uzmanlığımız ve yenilikçi yaklaşımımızla fark yaratıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Güvenilir Teknoloji
              </h3>
              <p className="text-gray-600">
                En son teknolojileri kullanarak güvenilir ve etkili savunma çözümleri sunuyoruz.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hızlı Çözümler
              </h3>
              <p className="text-gray-600">
                Kritik durumlarda hızlı ve etkili çözümlerle yanınızdayız.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                7/24 Destek
              </h3>
              <p className="text-gray-600">
                Teknik destek ekibimiz her zaman hizmetinizde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Savunma sektöründe kapsamlı çözümler sunuyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "RF Sistemleri", icon: "📡", color: "bg-gray-200" },
              { title: "Radar Sistemleri", icon: "🎯", color: "bg-gray-300" },
              { title: "Sinyal İstihbarat", icon: "🔍", color: "bg-gray-200" },
              { title: "Elektro-Optik", icon: "👁️", color: "bg-gray-300" },
              { title: "Jammer Sistemleri", icon: "🛡️", color: "bg-gray-200" },
              { title: "DJI Enterprise", icon: "🚁", color: "bg-gray-300" },
              { title: "Sistem Entegrasyonu", icon: "⚙️", color: "bg-gray-200" },
              { title: "Teknik Destek", icon: "🛠️", color: "bg-gray-300" }
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Profesyonel çözümler ve uzman destek
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hakkımızda
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                BİSAVUNMA, savunma teknolojileri alanında uzmanlaşmış bir şirkettir. 
                Müşterilerimize en son teknolojileri kullanarak güvenilir ve etkili 
                çözümler sunuyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Deneyimli ekibimiz ve yenilikçi yaklaşımımızla, savunma sektöründe 
                güvenilir bir partner olarak hizmet veriyoruz.
              </p>
              <button className="bg-gray-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Daha Fazla Bilgi
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Şirket Görseli</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Savunma Çözümlerinizi Güçlendirin
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Uzman ekibimizle iletişime geçin ve ihtiyaçlarınıza özel çözümler alın.
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Hemen Başlayın
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">BİSAVUNMA</h3>
              <p className="text-gray-400">
                Savunma teknolojilerinde yenilikçi çözümler ve güvenilir sistemler.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">Ürünler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>RF Sistemleri</li>
                <li>Radar Sistemleri</li>
                <li>Sinyal İstihbarat</li>
                <li>Elektro-Optik</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">Hizmetler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sistem Entegrasyonu</li>
                <li>Teknik Destek</li>
                <li>Eğitim</li>
                <li>Danışmanlık</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@bisavunma.com</li>
                <li>+90 212 XXX XX XX</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BİSAVUNMA. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

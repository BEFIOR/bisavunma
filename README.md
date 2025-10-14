# 🛡️ Bisavunma - Savunma Sanayi Web Sitesi

Modern ve performanslı savunma sanayi web sitesi. Next.js 15, React 19, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ **Next.js 15** - App Router, SSR/SSG
- 🌍 **Çok Dilli** - TR/EN dil desteği (next-intl)
- 🎨 **Modern UI** - Tailwind CSS 4 + Framer Motion
- 📱 **Responsive** - Tüm cihazlarda mükemmel görünüm
- ⚡ **Optimize** - Lighthouse 90+, 1 yıl cache
- 🗄️ **Prisma ORM** - PostgreSQL database
- 📧 **Email** - Nodemailer ile iletişim formu
- 📊 **Analytics** - Google Analytics & Tag Manager
- 🔒 **Güvenli** - Production-ready security

## 📁 Proje Yapısı

```
bisavunma/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── [locale]/     # Çok dilli sayfalar
│   │   ├── (admin)/      # Admin panel
│   │   ├── (catalog)/    # Ürün kataloğu
│   │   └── (marketing)/  # Marketing sayfaları
│   ├── components/       # React bileşenleri
│   ├── lib/             # Utility fonksiyonlar
│   ├── data/            # Statik veri
│   └── i18n/            # Çeviri dosyaları
├── public/              # Static dosyalar
├── prisma/              # Database schema
└── ecosystem.config.js  # PM2 config
```

## 🛠️ Geliştirme

### Gereksinimler

- Node.js 20.x+
- npm 10.x+
- PostgreSQL (opsiyonel)

### Kurulum

```bash
# Dependencies
npm install

# Environment variables
cp env.example .env
# .env dosyasını düzenleyin

# Prisma (eğer database kullanıyorsanız)
npx prisma generate
npx prisma migrate dev

# Development server
npm run dev
```

Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

### Kullanışlı Komutlar

```bash
# Development
npm run dev          # Development server
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint kontrolü
npm run analyze      # Bundle analyzer

# Database
npx prisma studio    # Database UI
npx prisma generate  # Client generate
npx prisma migrate dev  # Migration
```

## 🚢 Deployment (Plesk + Supervisor)

**Detaylı rehber:** [PLESK-SUPERVISOR-DEPLOYMENT.md](./PLESK-SUPERVISOR-DEPLOYMENT.md)

**Hızlı deployment:**

```bash
# 1. Sunucuya bağlan
ssh user@your-server.com
cd /var/www/vhosts/your-domain.com/httpdocs

# 2. Projeyi yükle
git clone https://github.com/your-repo/bisavunma.git .

# 3. Environment ayarla
cp env.example .env
nano .env

# 4. Build yap
bash deploy.sh

# 5. Supervisor config düzenle
nano supervisor.conf  # Domain ve user değiştir

# 6. Supervisor'a yükle
sudo cp supervisor.conf /etc/supervisor/conf.d/bisavunma.conf
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start bisavunma
```

### Environment Variables

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
EMAIL_HOST=smtp.example.com
EMAIL_USER=your-email@example.com
EMAIL_PASSWORD=your-password
```

## 📊 Performans

Optimizasyonlar:

- ✅ Font weight optimization (9 → 3 weights)
- ✅ Aggressive caching (1 year TTL)
- ✅ Image optimization (AVIF/WebP)
- ✅ Code splitting & lazy loading
- ✅ Standalone output mode
- ✅ PM2 cluster mode

Sonuçlar:

- **First Load JS:** ~102-166 KB
- **Lighthouse:** 90+ (Performance)
- **Cache:** 1 year for static assets
- **Build time:** ~12 seconds

## 🏗️ Teknoloji Stack

### Frontend

- **Framework:** Next.js 15.5.0
- **React:** 19.1.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.1
- **Animations:** Framer Motion 12.x
- **Icons:** Lucide React
- **Slider:** Swiper 12.x

### Backend

- **Database:** PostgreSQL
- **ORM:** Prisma 6.x
- **Email:** Nodemailer 7.x
- **i18n:** next-intl 4.x
- **Validation:** Zod 4.x

### DevOps

- **Process Manager:** Supervisor
- **Server:** Node.js 20.x
- **Hosting:** Plesk
- **SSL:** Let's Encrypt

## 📝 Lisans

Özel proje - Tüm hakları saklıdır

## 👥 Destek

Sorunlar için:

- Supervisor logs: `sudo supervisorctl tail -f bisavunma stdout`
- Build errors: `npm run build`
- Database: `npx prisma studio`

## 🔄 Güncelleme

```bash
git pull origin main
npm ci
npm run build
sudo supervisorctl restart bisavunma
```

---

**🎉 Başarıyla deploy edilmiş bir Next.js projesi!**

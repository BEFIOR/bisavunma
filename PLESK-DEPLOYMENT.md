# 🚀 Plesk Deployment Rehberi

Bu rehber, Next.js standalone build'inizi Plesk üzerinde nasıl deploy edeceğinizi açıklar.

## 📋 Özet

**HAYIR, sadece `dist` klasörünü atmak yeterli değil!**

Next.js standalone build için şu klasörleri server'a yüklemeniz gerekir:

- `.next/standalone/` - Uygulama kodu
- `.next/static/` - Static assets (JS, CSS, images)
- `public/` - Public dosyalar
- `package.json` - Production dependencies için

## 🔧 Yöntem 1: Standalone Build (Önerilen)

### Adım 1: Local'de Build Yap

```bash
# Dependencies yükle
npm ci

# Prisma generate (eğer database kullanıyorsanız)
npx prisma generate

# Build yap
npm run build
```

Build sonrası şu klasörler oluşur:

- `.next/standalone/` - Minimal uygulama kodu
- `.next/static/` - Static dosyalar

### Adım 2: Server'a Yükle

Plesk File Manager veya FTP/SFTP ile şu klasörleri yükle:

```
httpdocs/
├── .next/
│   ├── standalone/     ← Tüm içeriği yükle
│   └── static/         ← Tüm içeriği yükle
├── public/             ← Tüm içeriği yükle
├── package.json        ← Yükle
└── .env                ← Server'da oluştur
```

**Önemli:** `.next/standalone` klasörünün içindeki dosyaları direkt `httpdocs/` klasörüne kopyalayın, `standalone` klasörü olmadan!

Yani:

- `.next/standalone/.next/` → `httpdocs/.next/`
- `.next/standalone/node_modules/` → `httpdocs/node_modules/`
- `.next/standalone/package.json` → `httpdocs/package.json` (varsa)
- `.next/standalone/server.js` → `httpdocs/server.js` (varsa)
- `.next/static/` → `httpdocs/.next/static/`
- `public/` → `httpdocs/public/`

### Adım 3: Plesk'te Node.js Ayarları

1. **Plesk Panel** → **Websites & Domains** → Domain'inize tıklayın
2. **Node.js** sekmesine gidin
3. **Node.js version** seçin (20.x önerilir)
4. **Application root** → `/httpdocs` (veya domain'inizin root klasörü)
5. **Application startup file** → `server.js` (standalone build'de genellikle `.next/standalone/server.js`)
6. **Application mode** → `production`
7. **Application URL** → `http://your-domain.com:3000` (veya port numarası)

### Adım 4: Environment Variables

Plesk Node.js ayarlarında **Environment variables** bölümüne `.env` dosyanızdaki değişkenleri ekleyin:

```
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
# ... diğer değişkenler
```

### Adım 5: Reverse Proxy (Nginx/Apache)

Plesk otomatik olarak reverse proxy kurar, ancak manuel ayar gerekirse:

**Nginx için** (`nginx.conf.example` dosyasına bakın):

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### Adım 6: Uygulamayı Başlat

Plesk Node.js panelinde **"Run npm install"** butonuna tıklayın (gerekirse), sonra **"Enable Node.js"** ve **"Restart App"** butonlarına tıklayın.

---

## 🔧 Yöntem 2: Tam Proje Yükleme (Alternatif)

Eğer standalone build ile sorun yaşarsanız, tüm projeyi server'a yükleyip orada build yapabilirsiniz:

### Adım 1: Tüm Projeyi Yükle

```bash
# Git ile
git clone https://github.com/your-repo/bisavunma.git /var/www/vhosts/domain.com/httpdocs

# Veya tüm dosyaları FTP/SFTP ile yükle
```

### Adım 2: Server'da Build Yap

Plesk Terminal veya SSH ile:

```bash
cd /var/www/vhosts/domain.com/httpdocs
npm ci --production=false
npx prisma generate
npm run build
```

### Adım 3: Plesk Node.js Ayarları

1. **Application startup file** → `.next/standalone/server.js` (veya `node_modules/next/dist/bin/next start`)
2. **Working directory** → `/httpdocs`
3. Diğer ayarlar Yöntem 1 ile aynı

---

## 🔧 Yöntem 3: PM2 ile Deployment (Önerilen - Supervisor Alternatifi)

PM2, Node.js uygulamalarını yönetmek için güçlü bir process manager'dır. Supervisor yerine PM2 kullanabilirsiniz.

### Adım 1: PM2 Kurulumu

SSH ile server'a bağlanın ve PM2'yi kurun:

```bash
# Global olarak PM2'yi kurun
sudo npm install -g pm2

# Veya Plesk kullanıcısı olarak (önerilen)
npm install -g pm2
```

### Adım 2: Projeyi Server'a Yükle

Tüm projeyi server'a yükleyin (veya Git ile clone edin):

```bash
cd /var/www/vhosts/bisavunma.com/httpdocs
```

### Adım 3: Dependencies ve Build

```bash
# Dependencies yükle
npm ci --production=false

# Prisma generate (eğer database kullanıyorsanız)
npx prisma generate

# Build yap
npm run build
```

### Adım 4: Log Dizinini Oluşturun

```bash
mkdir -p /var/www/vhosts/bisavunma.com/httpdocs/logs
```

### Adım 5: PM2 ile Başlatın

`ecosystem.config.js` dosyası projenizde hazır. Şu komutları çalıştırın:

```bash
cd /var/www/vhosts/bisavunma.com/httpdocs

# PM2 ile başlat
pm2 start ecosystem.config.js

# PM2'yi sistem başlangıcında otomatik başlat
pm2 startup
# Çıkan komutu çalıştırın (genellikle sudo ile başlar)

# PM2 durumunu kaydet
pm2 save
```

### Adım 6: PM2 Komutları

```bash
# Durum kontrolü
pm2 status

# Logları görüntüle
pm2 logs bisavunma

# Uygulamayı yeniden başlat
pm2 restart bisavunma

# Uygulamayı durdur
pm2 stop bisavunma

# Uygulamayı sil
pm2 delete bisavunma

# Tüm uygulamaları listele
pm2 list

# Monitör (gerçek zamanlı)
pm2 monit
```

### Adım 7: Environment Variables

`.env` dosyasını oluşturun veya PM2 ecosystem dosyasına ekleyin:

```bash
# .env dosyası oluştur
nano /var/www/vhosts/bisavunma.com/httpdocs/.env
```

Veya `ecosystem.config.js` dosyasındaki `env` bölümüne ekleyin:

```javascript
env: {
  NODE_ENV: 'production',
  PORT: 3000,
  DATABASE_URL: 'postgresql://...',
  // ... diğer değişkenler
}
```

### Adım 8: Reverse Proxy (Nginx)

Plesk otomatik olarak reverse proxy kurar, ancak manuel ayar gerekirse:

**Plesk Panel** → **Websites & Domains** → **bisavunma.com** → **Apache & nginx Settings**

Veya manuel olarak Nginx yapılandırması:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### PM2 Avantajları

- ✅ Otomatik restart
- ✅ Log yönetimi
- ✅ Memory limit kontrolü
- ✅ Cluster mode desteği
- ✅ Monitoring ve metrics
- ✅ Kolay deployment

---

## 📦 Otomatik Deployment Script

Plesk için özel bir deployment scripti oluşturabiliriz. İsterseniz `deploy-plesk.sh` dosyası oluşturabilirim.

---

## ✅ Kontrol Listesi

- [ ] Local'de `npm run build` başarılı
- [ ] `.next/standalone/` klasörü oluştu
- [ ] `.next/static/` klasörü oluştu
- [ ] Server'a gerekli klasörler yüklendi
- [ ] `.env` dosyası server'da oluşturuldu
- [ ] Plesk Node.js ayarları yapıldı
- [ ] Environment variables eklendi
- [ ] Uygulama başlatıldı
- [ ] Site çalışıyor (http://your-domain.com)

---

## 🐛 Sorun Giderme

### "Cannot find module" hatası

- `node_modules` klasörünün yüklendiğinden emin olun
- Standalone build'de `node_modules` `.next/standalone/` içinde olmalı

### Port hatası

- Plesk'te PORT environment variable'ını kontrol edin
- Reverse proxy ayarlarını kontrol edin

### Static dosyalar yüklenmiyor

- `.next/static/` klasörünün yüklendiğinden emin olun
- `public/` klasörünün yüklendiğinden emin olun

### Database bağlantı hatası

- `.env` dosyasında `DATABASE_URL` doğru mu?
- Database server'a erişim var mı?

---

## 📝 Notlar

- Standalone build çok daha küçük ve hızlıdır
- Production'da `NODE_ENV=production` olmalı
- Logları Plesk Node.js panelinden veya terminal'den kontrol edebilirsiniz
- SSL sertifikası Plesk'te otomatik olarak Let's Encrypt ile kurulabilir

# Bi Savunma Platformu

Modern savunma ve güvenlik çözümlerini tanıtmak için hazırlanmış Next.js tabanlı bir ürün kataloğu ve içerik sitesidir. RF sistemleri, radar çözümleri, jammer/rf efektörleri ve elektro-optik ürün aileleri için detaylı sayfalar, dinamik görsel bileşenler ve yönetici paneli altyapısı içerir.

## Teknoloji Yığını
- [Next.js 15](https://nextjs.org/) & React 19 (App Router)
- Tailwind CSS 4 & özel animasyon bileşenleri
- Prisma ORM & MySQL
- Vitest + Testing Library
- TypeScript 5, ESLint 9

## Gereksinimler
- Node.js 20 veya üzeri
- npm 10 (veya uyumlu paket yöneticisi)
- MySQL 8 çalışır durumda

## Kurulum
1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Ortam değişkenlerini yapılandırın. Proje kökünde `.env` dosyası oluşturup aşağıdaki alanları doldurun:
   ```bash
   DATABASE_URL="mysql://user:pass@host:3306/dbname"
   # veya alternatif olarak:
   # MYSQL_HOST=localhost
   # MYSQL_PORT=3306
   # MYSQL_USER=root
   # MYSQL_PASSWORD=secret
   # MYSQL_DATABASE=bisavunma

   SESSION_MAX_AGE_DAYS=7
   ADMIN_BASIC_AUTH=true
   ADMIN_BASIC_AUTH_USER=admin
   ADMIN_BASIC_AUTH_PASS=strong-password
   ```
   > `ADMIN_BASIC_AUTH` yönetici arayüzünü temel kimlik doğrulamayla korur. Üretimde güçlü parolalar kullanın.
3. Veritabanını hazırlayın:
   ```bash
   npx prisma migrate deploy   # üretim için
   # veya geliştirme sırasında: npx prisma migrate dev
   ```
4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
   Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışır.

## Komutlar
| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu çalıştırır. |
| `npm run build` | Üretim derlemesi oluşturur. |
| `npm run start` | Derlenmiş uygulamayı çalıştırır. |
| `npm run lint` | ESLint ile kod stil/kalite kontrolü yapar. |
| `npm test` | Vitest ile tüm birim testlerini çalıştırır. |
| `npm run test:watch` | Vitest’i watch modunda başlatır. |
| `npm run test:coverage` | Testleri kapsama raporu ile çalıştırır. |

## Test ve Kalite
- Birim testleri Vitest + Testing Library ile yazılır (`/src/lib/__tests__`).
- CI ortamlarında `npm run lint && npm test` kombinasyonunu kullanmanız önerilir.

## Dağıtım Notları
- `npm run build` sonrası `.next` klasörünü servis eden herhangi bir Node.js ortamına deploy edilebilir.
- Ortam değişkenlerini üretim ortamında da sağlamayı unutmayın.
- MySQL bağlantısının erişilebilir olduğundan emin olun ve gerekirse Prisma `prisma migrate deploy` komutunu başlatmadan önce çalıştırın.

## Katkı Rehberi
1. Yeni bir branch oluşturun.
2. Değişiklikleri yapıp uygun testleri çalıştırın.
3. Kod stili için `npm run lint` çalıştırın.
4. Pull request açmadan önce anlamlı commit mesajları kullanın.

## Lisans
Bu proje için özel bir lisans belirtilmemiştir. Şirket içi kullanım veya proje sahibiyle yapılan anlaşmalar geçerlidir.

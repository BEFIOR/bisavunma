#!/bin/bash

# Bisavunma - Production Deployment Script for Plesk (Supervisor)
# Usage: bash deploy.sh

set -e

echo "🚀 Starting deployment process..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check Node.js version
echo -e "${YELLOW}📦 Checking Node.js version...${NC}"
NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js version: $NODE_VERSION${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm ci --production=false

# Run Prisma migrations (if database is configured)
if [ -f "prisma/schema.prisma" ]; then
  echo -e "${YELLOW}🗄️  Running Prisma migrations...${NC}"
  npx prisma generate
  # Uncomment if you want auto-migrate: npx prisma migrate deploy
fi

# Build the application
echo -e "${YELLOW}🔨 Building Next.js application...${NC}"
npm run build

# Create logs directory
mkdir -p logs

echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. .env dosyasını oluştur ve düzenle"
echo "2. supervisor.conf dosyasını Plesk'e yükle"
echo "3. Supervisor'ı yeniden başlat:"
echo "   sudo supervisorctl reread"
echo "   sudo supervisorctl update"
echo "   sudo supervisorctl start bisavunma"
echo ""
echo -e "${GREEN}🎉 Deployment ready!${NC}"


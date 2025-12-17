#!/bin/bash

# Bisavunma - Production Deployment Script for Plesk (PM2)
# Usage: bash deploy.sh

set -e

echo "🚀 Starting deployment process..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Setup Node.js PATH for Plesk
export PATH="/opt/plesk/node/24/bin:$PATH"

# Check Node.js version
echo -e "${YELLOW}📦 Checking Node.js version...${NC}"
NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js version: $NODE_VERSION${NC}"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
  echo -e "${RED}❌ PM2 is not installed. Installing PM2...${NC}"
  npm install -g pm2
fi

PM2_VERSION=$(pm2 -v)
echo -e "${GREEN}✓ PM2 version: $PM2_VERSION${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Run Prisma migrations (if database is configured)
if [ -f "prisma/schema.prisma" ]; then
  echo -e "${YELLOW}🗄️  Running Prisma migrations...${NC}"
  npx prisma generate
  # Uncomment if you want auto-migrate: npx prisma migrate deploy
fi

# Clean old build
echo -e "${YELLOW}🧹 Cleaning old build...${NC}"
rm -rf .next

# Build the application
echo -e "${YELLOW}🔨 Building Next.js application...${NC}"
npm run build

# Copy static files for standalone mode
echo -e "${YELLOW}📦 Copying static files for standalone deployment...${NC}"
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
echo -e "${GREEN}✓ Static files copied${NC}"

# Create logs directory
mkdir -p logs

# Restart or start with PM2
echo -e "${YELLOW}🔄 Managing PM2 process...${NC}"
if pm2 describe bisavunma > /dev/null 2>&1; then
  echo -e "${YELLOW}♻️  Deleting old PM2 process...${NC}"
  pm2 delete bisavunma
fi

echo -e "${YELLOW}▶️  Starting new PM2 process...${NC}"
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${YELLOW}📊 PM2 Status:${NC}"
pm2 status

echo ""
echo -e "${YELLOW}🧪 Testing application...${NC}"
sleep 3
curl -I http://localhost:3000 || echo -e "${RED}Warning: Application may not be responding yet${NC}"

echo ""
echo -e "${YELLOW}📋 Useful PM2 commands:${NC}"
echo "  pm2 logs bisavunma      - View logs"
echo "  pm2 monit               - Monitor processes"
echo "  pm2 restart bisavunma   - Restart application"
echo "  pm2 stop bisavunma      - Stop application"
echo ""
echo -e "${GREEN}🎉 Deployment ready!${NC}"

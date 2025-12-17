#!/bin/bash
# Post-build script for Next.js standalone mode

echo "📦 Copying static files for standalone deployment..."

# Copy public folder to standalone
cp -r public .next/standalone/
echo "✓ Copied public/"

# Copy static files to standalone
cp -r .next/static .next/standalone/.next/
echo "✓ Copied .next/static/"

echo "✅ Standalone deployment ready!"

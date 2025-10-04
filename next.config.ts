import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static file serving configuration
  experimental: {
    // Enable static file serving for large files
    staticGeneration: {
      // Increase timeout for large static files
      staticPageGenerationTimeout: 1000,
    },
  },
  // Headers for video files
  async headers() {
    return [
      {
        source: '/cozumler/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

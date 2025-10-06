import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
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

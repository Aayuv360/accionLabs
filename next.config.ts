
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move turbo config to turbopack as recommended
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Remove deprecated swcMinify - it's enabled by default in Next.js 13+
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Add performance optimizations
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    turbo: {
      memoryLimit: 512,
    },
  },
  // Add allowed dev origins to fix CORS warning
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

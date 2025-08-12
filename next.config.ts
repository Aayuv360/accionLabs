
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*.replit.dev', '*.repl.co'],
    },
  },
};

export default nextConfig;

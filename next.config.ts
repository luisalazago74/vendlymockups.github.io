import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/vendlymockups.github.io' : '',
  basePath: isProd ? '/vendlymockups.github.io' : '',
  output: 'export'
}
export default nextConfig;

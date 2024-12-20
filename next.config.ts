import type { NextConfig } from "next";

<<<<<<< HEAD
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/vendlymockups.github.io' : '',
  basePath: isProd ? '/vendlymockups.github.io' : '',
  output: 'export'
=======
const nextConfig: NextConfig = {
  /* config options here */
>>>>>>> b2d8d6c6392b9791ced04fc9b1bc911ac3c24fdc
};

export default nextConfig;

import type { NextConfig } from "next";

// For Vercel: Use this config (serverless)                                                                                                                                                                                                         
// For static export (client hosting): Use output: 'export'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

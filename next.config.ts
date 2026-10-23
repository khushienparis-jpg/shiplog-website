import type { NextConfig } from "next";

// Static export so the wireframe can be hosted anywhere (Vercel included).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

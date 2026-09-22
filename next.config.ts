import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Workers static assets (out/ directory)
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

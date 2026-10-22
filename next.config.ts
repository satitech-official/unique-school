import type { NextConfig } from "next";

// The original project targets Cloudflare/vinext. Keep the preview build
// separate from that platform's database binding type-checking.
const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;

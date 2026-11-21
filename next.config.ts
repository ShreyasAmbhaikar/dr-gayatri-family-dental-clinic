import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // All source images are WebP; next/image resizes them per device and caches the result for 30 days.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Static images rarely change; let browsers and CDNs keep them for a month and revalidate in the background.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  // Permanent (308) redirects so old or alternative URLs pass their ranking to the canonical page.
  async redirects() {
    return [
      { source: "/treatments/root-canal", destination: "/treatments/root-canal-treatment", permanent: true },
      { source: "/treatments/rct", destination: "/treatments/root-canal-treatment", permanent: true },
      { source: "/services", destination: "/treatments", permanent: true },
      { source: "/services/:slug", destination: "/treatments/:slug", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

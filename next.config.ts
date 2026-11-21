import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
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

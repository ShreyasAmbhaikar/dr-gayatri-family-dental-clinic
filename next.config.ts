import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentUpgrade: "security",
  },
  // The site is fully static: `next build` writes plain HTML, CSS, JS and images to the `out/` folder, which
  // Cloudflare Pages (or any static host) serves directly. There is no server to run.
  output: "export",
  images: {
    // A static export cannot resize images on request, so next/image serves the files as they are.
    // Every image in public/images is already WebP and sized for the page (heroes are 1920 px wide).
    unoptimized: true,
  },
  // Redirects and cache headers are not supported by a static export. They live in
  // public/_redirects and public/_headers, which Cloudflare Pages reads.
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

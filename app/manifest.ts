import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Web app manifest: lets phones show the clinic icon and name if the site is added to the home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2b1c78",
    lang: "en-IN",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/clinic-logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

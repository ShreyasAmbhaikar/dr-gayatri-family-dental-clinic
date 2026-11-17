import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";
import { TREATMENTS, treatmentPath } from "@/lib/treatments/summary";

/**
 * Lists only real, indexable pages (no #fragment URLs, which search engines ignore).
 * New treatment pages are picked up automatically from lib/treatments/summary.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.contentUpdated);

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/treatments"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...TREATMENTS.map((t) => ({
      url: absoluteUrl(treatmentPath(t.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/gallery"), lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}

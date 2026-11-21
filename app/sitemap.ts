import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";
import { TREATMENTS, treatmentPath } from "@/lib/treatments/summary";
import { HERO_PHOTOS } from "@/lib/treatments/media";

/**
 * Lists only real, indexable pages (no #fragment URLs, which search engines ignore), with the main image of each.
 * New treatment pages are picked up automatically from lib/treatments/summary.ts.
 */
// Static export: written to a plain file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.contentUpdated);

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1, images: [absoluteUrl(SITE.ogImage)] },
    { url: absoluteUrl("/treatments"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...TREATMENTS.map((t) => ({
      url: absoluteUrl(treatmentPath(t.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: HERO_PHOTOS[t.slug] ? [absoluteUrl(HERO_PHOTOS[t.slug].src)] : undefined,
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7, images: [absoluteUrl(SITE.doctor.image)] },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/gallery"), lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}

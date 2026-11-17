import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

/**
 * Builds consistent page metadata: canonical URL, Open Graph, Twitter card and robots.
 * `title` is used as-is (absolute), so it must already include the brand.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const image = absoluteUrl(opts.image ?? SITE.ogImage);

  return {
    title: { absolute: opts.title },
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: image, width: 1200, height: 896, alt: `${SITE.name}, Hadapsar, Pune` }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

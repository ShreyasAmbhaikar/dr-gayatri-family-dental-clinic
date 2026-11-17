import { SITE, absoluteUrl, fullAddress } from "./site";
import { TREATMENTS, treatmentPath } from "./treatments/summary";
import type { Treatment } from "./treatments";

const clinicId = `${SITE.url}/#clinic`;
const websiteId = `${SITE.url}/#website`;

const openingHours = () =>
  SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.length === 1 ? h.days[0] : [...h.days],
    opens: h.opens,
    closes: h.closes,
  }));

/** The clinic entity. Defined once in the root layout and referenced by @id everywhere else. */
export function clinicSchema() {
  return {
    "@type": ["Dentist", "LocalBusiness"],
    "@id": clinicId,
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    description: `${SITE.name} is a family dental clinic in Amanora Park Town, Hadapsar, Pune, offering root canal treatment, dental implants, braces, clear aligners, kids dentistry, teeth whitening and emergency dental care.`,
    telephone: SITE.phone,
    priceRange: "₹₹",
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: openingHours(),
    areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Place", name })),
    ...(SITE.social.length ? { sameAs: [...SITE.social] } : {}),
    employee: { "@type": "Person", name: SITE.doctor.name, jobTitle: SITE.doctor.title },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "appointments",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental treatments",
      itemListElement: TREATMENTS.map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: t.name,
          url: absoluteUrl(treatmentPath(t.slug)),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": clinicId },
  };
}

/** Wraps nodes in a single @graph document. */
export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Schema for one treatment page: a medical web page, the service it describes, breadcrumbs and FAQs. */
export function treatmentGraph(t: Treatment) {
  const url = absoluteUrl(treatmentPath(t.slug));
  return graph(
    {
      "@type": ["MedicalWebPage", "WebPage"],
      "@id": `${url}#webpage`,
      url,
      name: t.seoTitle,
      description: t.content.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      about: { "@type": "MedicalProcedure", name: t.name },
      mainEntity: { "@id": `${url}#service` },
      dateModified: SITE.contentUpdated,
      ...(SITE.contentReviewedByDoctor
        ? { lastReviewed: SITE.contentUpdated, reviewedBy: { "@type": "Person", name: SITE.doctor.name } }
        : {}),
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `${t.name} in Hadapsar, Pune`,
      serviceType: t.name,
      description: t.content.quickAnswer,
      url,
      provider: { "@id": clinicId },
      areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Place", name })),
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: { "@type": "Place", name: SITE.name, address: fullAddress() },
        servicePhone: SITE.phone,
      },
    },
    { ...breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Treatments", path: "/treatments" }, { name: t.name, path: treatmentPath(t.slug) }]), "@id": `${url}#breadcrumb` },
    faqSchema(t.content.faqs),
  );
}

export function pageGraph(opts: {
  type: string | string[];
  path: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; path: string }[];
  extra?: object[];
}) {
  const url = absoluteUrl(opts.path);
  return graph(
    {
      "@type": opts.type,
      "@id": `${url}#webpage`,
      url,
      name: opts.name,
      description: opts.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      about: { "@id": clinicId },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    { ...breadcrumbSchema(opts.breadcrumbs), "@id": `${url}#breadcrumb` },
    ...(opts.extra ?? []),
  );
}

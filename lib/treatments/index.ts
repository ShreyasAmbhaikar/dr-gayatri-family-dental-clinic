import { CONTENT_A } from "./content-a";
import { CONTENT_B } from "./content-b";
import { CONTENT_C } from "./content-c";
import { TREATMENTS, getSummary, type TreatmentSummary } from "./summary";
import type { TreatmentContent } from "./types";

export * from "./summary";
export type { TreatmentContent, Faq, Step } from "./types";

const CONTENT: Record<string, TreatmentContent> = { ...CONTENT_A, ...CONTENT_B, ...CONTENT_C };

/** Slugs rendered by the shared template at /treatments/[slug]. Every treatment, including Root Canal Treatment, uses it. */
export const TEMPLATE_SLUGS = TREATMENTS.map((t) => t.slug).filter((slug) => slug in CONTENT);

export interface Treatment extends TreatmentSummary {
  content: TreatmentContent;
  /** Full <title> text. */
  seoTitle: string;
}

export const seoTitleFor = (t: TreatmentSummary) => {
  const brand = "Dr. Gayatri's Clinic";
  const full = `${t.titleName} in Hadapsar, Pune | ${brand}`;
  // Keep titles within the 60 character display limit: drop ", Pune" when too long
  // (Pune still appears in the H1 and the meta description).
  return full.length > 60 ? `${t.titleName} in Hadapsar | ${brand}` : full;
};

/**
 * Cost has no section of its own, so it lives in the FAQs. Once the clinic confirms a price and
 * `startingPrice` is set, the cost FAQ answer opens with it (the FAQ markup is generated from the same text).
 */
function withStartingPrice(name: string, content: TreatmentContent): TreatmentContent {
  if (!content.startingPrice) return content;
  const i = content.faqs.findIndex((f) => /cost|price|how much/i.test(f.q));
  if (i < 0) return content;
  const faqs = content.faqs.map((f, j) => (j === i ? { ...f, a: `${name} starts from ${content.startingPrice}. ${f.a}` } : f));
  return { ...content, faqs };
}

export function getTreatment(slug: string): Treatment | undefined {
  const summary = getSummary(slug);
  const content = CONTENT[slug];
  if (!summary || !content) return undefined;
  return { ...summary, content: withStartingPrice(summary.name, content), seoTitle: seoTitleFor(summary) };
}

export function getAllTreatments(): Treatment[] {
  return TEMPLATE_SLUGS.map((slug) => getTreatment(slug)).filter((t): t is Treatment => Boolean(t));
}

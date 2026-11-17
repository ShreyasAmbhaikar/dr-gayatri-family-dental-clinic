import { CONTENT_A } from "./content-a";
import { CONTENT_B } from "./content-b";
import { CONTENT_C } from "./content-c";
import { TREATMENTS, getSummary, type TreatmentSummary } from "./summary";
import type { TreatmentContent } from "./types";

export * from "./summary";
export type { TreatmentContent, Faq, Step } from "./types";

const CONTENT: Record<string, TreatmentContent> = { ...CONTENT_A, ...CONTENT_B, ...CONTENT_C };

/**
 * Slugs rendered by the shared template at /treatments/[slug].
 * Root Canal Treatment keeps its own hand-designed page at
 * /treatments/root-canal-treatment, which takes precedence over the dynamic route.
 */
export const TEMPLATE_SLUGS = TREATMENTS.map((t) => t.slug).filter((slug) => slug in CONTENT);

export interface Treatment extends TreatmentSummary {
  content: TreatmentContent;
  /** Full <title> text. */
  seoTitle: string;
}

export const seoTitleFor = (t: TreatmentSummary) => {
  const brand = "Dr. Gayatri's Clinic";
  const full = `${t.titleName} in Hadapsar, Pune | ${brand}`;
  // Keep titles close to the ~60 character display limit: drop ", Pune" when too long
  // (Pune still appears in the H1 and the meta description).
  return full.length > 62 ? `${t.titleName} in Hadapsar | ${brand}` : full;
};

export function getTreatment(slug: string): Treatment | undefined {
  const summary = getSummary(slug);
  const content = CONTENT[slug];
  if (!summary || !content) return undefined;
  return { ...summary, content, seoTitle: seoTitleFor(summary) };
}

export function getAllTreatments(): Treatment[] {
  return TEMPLATE_SLUGS.map((slug) => getTreatment(slug)).filter((t): t is Treatment => Boolean(t));
}

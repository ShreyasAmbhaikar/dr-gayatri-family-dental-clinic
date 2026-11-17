export interface Faq {
  q: string;
  a: string;
}

export interface Step {
  title: string;
  text: string;
}

/** Long-form copy for one treatment page. */
export interface TreatmentContent {
  /** 150-160 characters. Includes the primary keyword, a benefit and a call to action. */
  metaDescription: string;
  /** 1-2 sentences under the H1. */
  heroSub: string;
  /** Exactly three [label, value] chips shown in the hero. */
  facts: [string, string][];
  /** 40-60 word direct answer to "What is X?" (written for featured snippets). */
  quickAnswer: string;
  /** Two short paragraphs expanding on the answer. */
  overview: [string, string];
  symptomsTitle: string;
  symptoms: string[];
  steps: Step[];
  benefits: string[];
  suitableTitle: string;
  suitableFor: string;
  aftercare: string[];
  costIntro: string;
  costFactors: string[];
  /** One or two sentences, unique per page, tying the treatment to the local area. */
  localNote: string;
  faqs: Faq[];
  /** Slugs of three related treatments. */
  related: [string, string, string];
  /** Extra search phrases worked into the copy; used for meta keywords and llms.txt. */
  keywords: string[];
  /** Optional starting price, e.g. "₹X,XXX". Renders a price chip only when set. Leave unset until the clinic confirms real prices. */
  startingPrice?: string;
}

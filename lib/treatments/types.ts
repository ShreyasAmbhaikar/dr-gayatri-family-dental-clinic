export interface Faq {
  q: string;
  a: string;
}

/**
 * Illustration shown in the circular badge above a procedure step.
 * Every key is drawn in components/site/StepArt.tsx, so each step gets artwork that
 * depicts what actually happens in that step (not a generic tooth).
 */
export type StepArt =
  | "exam" // tooth + dental mirror
  | "inspect" // magnifier over a tooth
  | "xray" // X-ray film
  | "plan" // clipboard treatment plan
  | "notes" // health history / written instructions
  | "consult" // dentist-patient conversation
  | "kid" // friendly first meeting with a child
  | "anaesthesia" // syringe at the gum
  | "decay" // drill removing decay
  | "composite" // filling placed and cured with light
  | "polish" // polishing cup + sparkle
  | "scaling" // scaler removing tartar
  | "floss" // floss between teeth
  | "brush" // toothbrush technique
  | "tongue" // tongue cleaning
  | "fluoride" // fluoride varnish shield
  | "sealant" // sealant on a molar
  | "implant" // implant post in the jawbone
  | "healing" // implant fusing with bone over time
  | "prep" // tooth shaped for a crown or veneer
  | "impression" // impression tray
  | "scan" // digital scan on a monitor
  | "temp" // temporary crown
  | "crown" // permanent crown fitted
  | "veneer" // veneer shell on a front tooth
  | "bite" // bite check
  | "denture" // denture arch
  | "braces" // brackets and wire
  | "aligner" // clear aligner tray
  | "retainer" // retainer
  | "nightguard" // night guard
  | "shade" // shade guide
  | "gel" // whitening gel and light
  | "barrier" // gum protection
  | "smile" // finished smile
  | "extraction" // forceps
  | "stitch" // sutures
  | "phone" // call the clinic
  | "urgent" // urgent assessment
  | "calendar" // follow-up visit
  | "laser" // soft-tissue laser
  | "gum" // gum pocket measurement
  | "stabilise"; // treat infection and disease first

export interface Step {
  title: string;
  text: string;
  /** Drawn illustration for the step badge. */
  art: StepArt;
  /** Optional photo/illustration file that replaces the drawn art (used by the root canal page). */
  image?: string;
}

/** Long-form copy for one treatment page. */
export interface TreatmentContent {
  /** 150-160 characters. Includes the primary keyword, a benefit and a call to action. */
  metaDescription: string;
  /** 1-2 sentences under the H1. */
  heroSub: string;
  /** 40-60 word direct answer to "What is X?" (written for featured snippets). */
  quickAnswer: string;
  /** One short paragraph expanding on the answer. Keep the "What is it?" section brief. */
  overview: string;
  symptomsTitle: string;
  symptoms: string[];
  steps: Step[];
  benefits: string[];
  suitableTitle: string;
  suitableFor: string;
  aftercare: string[];
  /** Two or three sentences, unique per page, tying the treatment to the local area and nearby neighbourhoods. */
  localNote: string;
  /** 5-6 questions, written like Google's "People also ask". Include cost (it has no section of its own) and a local question. */
  faqs: Faq[];
  /** Slugs of three related treatments. Not shown on the page at the moment; kept so the section can return. */
  related: [string, string, string];
  /** Extra search phrases worked into the copy; used for meta keywords and llms.txt. */
  keywords: string[];
  /** Optional starting price, e.g. "₹X,XXX". When set, the cost FAQ answer opens with it. Leave unset until the clinic confirms real prices. */
  startingPrice?: string;
}

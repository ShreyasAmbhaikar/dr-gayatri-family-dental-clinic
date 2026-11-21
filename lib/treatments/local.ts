import { SITE, fullAddress } from "../site";
import type { Faq } from "./types";

/** "Monday – Saturday, 11:00 AM – 2:00 PM and 6:00 PM – 9:00 PM; Sunday, 11:00 AM – 2:00 PM" (from lib/site.ts). */
export const hoursText = () => SITE.hoursDisplay.map((h) => `${h.label}, ${h.value}`).join("; ");

/** One sentence with the opening hours, always in sync with the footer, contact page and schema. */
export const hoursSentence = () => `We are open ${hoursText()}.`;

/**
 * "Where can I get X near Magarpatta?" FAQ. The address, hours and phone come from lib/site.ts,
 * so name / address / phone / hours (NAP) are identical on every page.
 */
export function local(q: string, lead: string, areas: string): Faq {
  return {
    q,
    a: `${lead} ${SITE.name} is at ${fullAddress()}. Patients also visit us from ${areas}. ${hoursSentence()} Call ${SITE.phoneDisplay} to book.`,
  };
}

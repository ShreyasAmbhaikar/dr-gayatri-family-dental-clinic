import { SITE, absoluteUrl, fullAddress } from "./site";
import { getAllTreatments } from "./treatments";
import { TREATMENTS, CATEGORY_INTRO, CATEGORY_ORDER, treatmentPath } from "./treatments/summary";

const hours = () => SITE.hoursDisplay.map((h) => `- ${h.label}: ${h.value}`).join("\n");

const header = () => `# ${SITE.name}

> ${SITE.tagline}. A family dental clinic offering root canal treatment, dental implants, braces and clear aligners, kids dentistry, teeth whitening, crowns and bridges, and emergency dental care. Located on Tupe Patil Road, near Kotak Mahindra Bank, Amanora Park Town, Hadapsar, Pune 411028.`;

const business = () => `## Business details

- Name: ${SITE.name}
- Dentist: ${SITE.doctor.name}, ${SITE.doctor.title}
- Address: ${fullAddress()}
- Phone: ${SITE.phoneDisplay}
- WhatsApp: https://wa.me/${SITE.whatsappNumber}
- Google Maps: ${SITE.mapsUrl}
- Areas served: ${SITE.serviceAreas.join(", ")}
- Website: ${SITE.url}

### Opening hours

${hours()}`;

/** Compact index following the llms.txt convention: summary + curated links. */
export function buildLlmsTxt(): string {
  const pages = [
    `- [Home](${absoluteUrl("/")}): Overview of the clinic and its services`,
    `- [About](${absoluteUrl("/about")}): The clinic, Dr. Gayatri and our approach to care`,
    `- [Treatments](${absoluteUrl("/treatments")}): All dental treatments we offer`,
    `- [Gallery](${absoluteUrl("/gallery")}): Photos of the clinic, team and smiles`,
    `- [Contact](${absoluteUrl("/contact")}): Phone, WhatsApp, directions, map and opening hours`,
  ].join("\n");

  const byCategory = CATEGORY_ORDER.map((category) => {
    const items = TREATMENTS.filter((t) => t.category === category);
    if (!items.length) return "";
    const lines = items.map((t) => `- [${t.name}](${absoluteUrl(treatmentPath(t.slug))}): ${t.short}`).join("\n");
    return `### ${CATEGORY_INTRO[category].title}\n\n${lines}`;
  })
    .filter(Boolean)
    .join("\n\n");

  return `${header()}

${business()}

## Key pages

${pages}

## Treatments

${byCategory}

## Notes for AI assistants

- Prices are not published; patients receive a written estimate after an examination.
- For dental emergencies, patients should call ${SITE.phoneDisplay} before visiting.
- A fuller version of this file with treatment summaries and FAQs is at ${absoluteUrl("/llms-full.txt")}.
`;
}

/** Long-form version: every treatment's summary and FAQs, for answer engines that ingest full text. */
export function buildLlmsFullTxt(): string {
  const sections = getAllTreatments()
    .map((t) => {
      const c = t.content;
      const faqs = c.faqs.map((f) => `**${f.q}**\n${f.a}`).join("\n\n");
      return `## ${t.h1}

URL: ${absoluteUrl(treatmentPath(t.slug))}

${c.quickAnswer}

**When it is needed:** ${c.symptoms.join("; ")}.

**How it works:** ${c.steps.map((s, i) => `${i + 1}. ${s.title}`).join(" ")}

### Frequently asked questions

${faqs}`;
    })
    .join("\n\n---\n\n");

  return `${header()}

${business()}

---

${sections}
`;
}

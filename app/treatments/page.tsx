import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import TreatmentCard from "@/components/site/TreatmentCard";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import WaveDivider from "@/components/ui/WaveDivider";
import { AccentBar, BODY, Highlight } from "@/components/site/Section";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";
import { CATEGORY_INTRO, CATEGORY_ORDER, TREATMENTS, treatmentPath } from "@/lib/treatments/summary";

const TITLE = "Dental Treatments in Hadapsar, Pune | Dr. Gayatri's Clinic";
const DESCRIPTION =
  "Explore dental treatments in Hadapsar, Pune: root canals, implants, braces, aligners, kids dentistry, whitening, crowns and emergency care. Book a visit.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/treatments",
  keywords: ["dental treatments in hadapsar", "dentist in hadapsar", "dental clinic in hadapsar", "dental services pune", "family dentist amanora"],
});

export default function TreatmentsHubPage() {
  const schema = pageGraph({
    type: ["CollectionPage", "WebPage"],
    path: "/treatments",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Treatments", path: "/treatments" },
    ],
    extra: [
      {
        "@type": "ItemList",
        name: "Dental treatments at Dr. Gayatri's Family Dental Clinic",
        itemListElement: TREATMENTS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: absoluteUrl(treatmentPath(t.slug)) })),
      },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <div className="page-bg min-h-screen relative overflow-hidden">
        {/* Ambient Decorative Glow Orbs matching Website Theme */}
        <div aria-hidden="true" className="absolute top-[12%] -left-[10%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(173,228,240,0.5),transparent_70%)] blur-3xl pointer-events-none -z-10" />
        <div aria-hidden="true" className="absolute top-[48%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(211,240,247,0.5),transparent_70%)] blur-3xl pointer-events-none -z-10" />
        <div aria-hidden="true" className="absolute top-[80%] -left-[8%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(173,228,240,0.45),transparent_70%)] blur-3xl pointer-events-none -z-10" />

        <PageHero
          compact
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "Treatments" }]}
          eyebrow="Our Treatments"
          title={
            <>
              Dental Treatments <Highlight>in Hadapsar, Pune</Highlight>
            </>
          }
          sub="Complete dental care for the whole family under one roof in Amanora Park Town, from routine check-ups and cleaning to root canals, implants, braces and smile design."
        />

        {CATEGORY_ORDER.map((category, idx) => {
          const items = TREATMENTS.filter((t) => t.category === category);
          if (!items.length) return null;
          const intro = CATEGORY_INTRO[category];
          const id = `cat-${category.toLowerCase()}`;
          return (
            <section
              key={category}
              id={id}
              aria-labelledby={`${id}-title`}
              className={`relative scroll-mt-20 py-14 sm:py-16 lg:py-20 ${
                idx % 2 === 1
                  ? "bg-[linear-gradient(180deg,rgba(238,249,252,0.65)_0%,rgba(247,252,254,0.85)_50%,rgba(238,249,252,0.65)_100%)]"
                  : "bg-transparent"
              }`}
            >
              {idx % 2 === 1 && (
                <>
                  <WaveDivider variant="ribbon" position="top" className="h-16 sm:h-20" />
                  <WaveDivider variant="ribbon" position="bottom" flip className="h-16 sm:h-20" />
                </>
              )}

              <div className="page-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9 sm:mb-11">
                  <div>
                    <h2
                      id={`${id}-title`}
                      className="font-serif font-bold leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px] text-navy"
                    >
                      {intro.title}
                    </h2>
                    <AccentBar className="mt-2.5 mb-3" />
                    <p className={`${BODY} max-w-2xl text-slate-600`}>{intro.text}</p>
                  </div>
                  <div className="shrink-0 self-start md:self-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-teal/25 text-teal text-[13px] font-bold shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-teal" />
                      {items.length} {items.length === 1 ? "Treatment" : "Treatments"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                  {items.map((t) => (
                    <TreatmentCard key={t.slug} t={t} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <FooterWave />
    </SiteShell>
  );
}

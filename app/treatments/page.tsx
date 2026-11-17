import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import TreatmentHeroArt from "@/components/site/TreatmentHeroArt";
import TreatmentCard from "@/components/site/TreatmentCard";
import BookButton from "@/components/site/BookButton";
import FaqAccordion from "@/components/site/FaqAccordion";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { AccentBar, BODY, Band, DarkPanel, Eyebrow, Highlight, SectionTitle } from "@/components/site/Section";
import { SITE, absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, pageGraph } from "@/lib/schema";
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

const FAQS = [
  {
    q: "Which dental treatments do you offer in Hadapsar?",
    a: "We offer family dental care including check-ups and cleaning, fillings, root canal treatment, crowns and bridges, dentures, dental implants, braces and clear aligners, kids dentistry, tooth extraction and wisdom tooth removal, teeth whitening, veneers, gum treatment and emergency dental care.",
  },
  {
    q: "How do I know which treatment I need?",
    a: "The best starting point is a dental check-up. Dr. Gayatri examines your teeth and gums, takes X-rays when needed and explains your options in plain language, so you can decide what is right for you.",
  },
  {
    q: "Do you give a cost estimate before treatment?",
    a: "Yes. After your examination we give you a written estimate for the recommended treatment, so you know the cost before anything begins.",
  },
  {
    q: "Do you have evening and Sunday appointments?",
    a: "Yes. We are open Monday to Saturday from 11:00 AM to 2:00 PM and 6:00 PM to 9:00 PM, and on Sundays from 11:00 AM to 2:00 PM.",
  },
  {
    q: "Where is the clinic located?",
    a: "We are on Tupe Patil Road in Amanora Park Town, Hadapsar, Pune, near Kotak Mahindra Bank and opposite Sadhna Bank.",
  },
];

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
      faqSchema(FAQS),
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Treatments" }]}
        eyebrow="Our Treatments"
        title={
          <>
            Dental Treatments <Highlight>in Hadapsar, Pune</Highlight>
          </>
        }
        sub="Complete dental care for the whole family under one roof in Amanora Park Town, from routine check-ups and cleaning to root canals, implants, braces and smile design."
        actions={
          <>
            <BookButton />
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/90 text-navy border-[1.5px] border-purple/60 text-[14.5px] sm:text-[15px] font-semibold hover:bg-white hover:border-purple transition-all shadow-xs"
            >
              <Phone className="w-[17px] h-[17px] text-purple" aria-hidden="true" />
              <span>Call: {SITE.phoneDisplay}</span>
            </a>
          </>
        }
        checks={[<><strong>{TREATMENTS.length}</strong> treatments</>, <><strong>Evenings</strong> &amp; Sundays</>, <><strong>Amanora Park Town</strong>, Hadapsar</>]}
        art={
          <TreatmentHeroArt
            icon="tooth"
            image="/images/treatments/v2-general-dentistry.png"
            facts={[
              ["Treatments", `${TREATMENTS.length} services`],
              ["Open", "Evenings & Sundays"],
              ["Location", "Amanora Park Town"],
            ]}
          />
        }
      />

      {CATEGORY_ORDER.map((category, idx) => {
        const items = TREATMENTS.filter((t) => t.category === category);
        if (!items.length) return null;
        const intro = CATEGORY_INTRO[category];
        const id = `cat-${category.toLowerCase()}`;
        return (
          <Band key={category} id={id} labelledBy={`${id}-title`} tone={idx % 2 === 1 ? "tint" : "plain"}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
              <SectionTitle id={`${id}-title`} eyebrow={`${items.length} ${items.length === 1 ? "treatment" : "treatments"}`} title={intro.title} />
              <p className={`${BODY} max-w-md`}>{intro.text}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {items.map((t) => (
                <TreatmentCard key={t.slug} t={t} />
              ))}
            </div>
          </Band>
        );
      })}

      <Band labelledBy="not-sure-title">
        <DarkPanel className="p-7 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
            <div className="lg:col-span-8">
              <Eyebrow light>Not sure where to start?</Eyebrow>
              <h2 id="not-sure-title" className="font-serif font-bold text-white text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.15]">
                Begin with a check-up and we will <span className="text-teal-bright">guide you</span>
              </h2>
              <p className="mt-3.5 text-white/85 text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
                Dr. Gayatri examines your teeth, explains your options plainly and gives you a written estimate, so every decision is yours.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <BookButton variant="white" treatment="General Dentistry" />
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-7 h-[50px] border-[1.5px] border-white/50 text-white text-[14.5px] sm:text-[15px] font-semibold hover:bg-white/10 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </DarkPanel>
      </Band>

      <section id="faqs" aria-labelledby="hub-faqs" className="relative py-14 sm:py-16 lg:py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col items-start">
              <Eyebrow className="mb-2.5">Frequently Asked Questions</Eyebrow>
              <h2 id="hub-faqs" className="font-serif font-bold text-navy leading-[1.12] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[32px] xl:text-[35px]">
                Treatment <Highlight>Questions</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-4" />
              <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-md">
                Quick answers about our services, timings and location in Hadapsar.
              </p>
            </div>
            <div className="lg:col-span-7 w-full">
              <FaqAccordion faqs={FAQS} idPrefix="faq-hub" />
            </div>
          </div>
        </div>
      </section>

      <FooterWave />
    </SiteShell>
  );
}

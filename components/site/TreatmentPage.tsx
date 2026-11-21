import React from "react";
import Image from "next/image";
import { ChevronRight, Info, Phone } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ImageCard from "@/components/site/ImageCard";
import BookButton from "@/components/site/BookButton";
import ClinicCta from "@/components/site/ClinicCta";
import FaqAccordion from "@/components/site/FaqAccordion";
import StepArt from "@/components/site/StepArt";
import WhyChooseSection from "@/components/site/WhyChooseSection";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { AccentBar, BODY, Band, CheckItem, Eyebrow, Highlight, SectionTitle } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { treatmentGraph } from "@/lib/schema";
import { heroFor, photosFor } from "@/lib/treatments/media";
import type { Treatment } from "@/lib/treatments";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

// Names that read as plural in headings ("What are braces?").
const PLURAL = new Set(["braces", "clear-aligners", "dental-implants", "crowns-bridges", "dentures", "tooth-fillings", "veneers", "full-mouth-implants"]);

/**
 * Step layout classes, written out in full so Tailwind can see them. Every step count gets a single row on
 * wide screens (xl), so even a six-step procedure fits on screen without scrolling; smaller screens wrap.
 */
const STEP_WIDTH: Record<number, string> = {
  4: "sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(25%-1.125rem)] xl:basis-[calc(25%-1.125rem)]",
  5: "sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] xl:basis-[calc(20%-1.2rem)]",
  6: "sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] xl:basis-[calc(16.666%-1.25rem)]",
};

export default function TreatmentPage({ treatment: t }: { treatment: Treatment }) {
  const c = t.content;
  const bookingValue = t.bookingValue ?? t.name;
  const [photo1, photo2, photo3] = photosFor(t.slug);
  const hero = heroFor(t.slug);
  const lower = t.name.toLowerCase();
  const split = t.h1.indexOf(" in Hadapsar");
  const lead = split > 0 ? t.h1.slice(0, split) : t.h1;
  const place = split > 0 ? t.h1.slice(split + 1) : "";
  const stepWidth = STEP_WIDTH[c.steps.length] ?? STEP_WIDTH[5];
  // Only when a step title is long enough to wrap onto two lines (the limit depends on how many columns share the row),
  // every capsule on that page gets the same width and height. Other pages keep the compact capsules.
  const wrapLimit = c.steps.length >= 6 ? 21 : 27;
  const evenPills = c.steps.some((s, i) => `${i + 1}. ${s.title}`.length > wrapLimit);

  return (
    <>
      <JsonLd data={treatmentGraph(t)} />

      {/* ───────── Hero: treatment photo, H1, summary line and actions ───────── */}
      <PageHero
        bannerImage={hero.src}
        bannerAlt={hero.alt}
        bannerPosition={hero.position}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: t.name }]}
        title={
          split > 0 ? (
            <>
              {lead} <br />
              <span className="bg-gradient-to-r from-[#4ee4f4] via-[#38d8e8] to-[#1ab3c2] bg-clip-text text-transparent inline-block pb-1">
                {place}
              </span>
            </>
          ) : (
            t.h1
          )
        }
        sub={c.heroSub}
        actions={
          <>
            <BookButton treatment={bookingValue} variant="primary" />
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/10 hover:bg-white/20 active:scale-[0.98] backdrop-blur-md border border-white/25 text-white text-[14.5px] sm:text-[15px] font-semibold transition-all shadow-xs"
            >
              <Phone className="w-4.5 h-4.5 text-white" aria-hidden="true" />
              <span>Call Clinic: {SITE.phoneDisplay}</span>
            </a>
          </>
        }
      />

      {/* ───────── 1. What is it (short answer plus one paragraph) ───────── */}
      <Band id="what-is" labelledBy="what-is-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 w-full">
            <ImageCard {...photo1} side="left" ratio={1.85} mobileRatio={1.45} />
          </div>
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionTitle
              id="what-is-title"
              eyebrow={`About ${t.name}`}
              title={
                <>
                  {PLURAL.has(t.slug) ? "What are" : "What is"} <Highlight>{t.name}?</Highlight>
                </>
              }
              className="mb-4"
            />
            <p className={`${BODY} font-medium text-navy`}>{c.quickAnswer}</p>
            <p className={`mt-3.5 ${BODY}`}>{c.overview}</p>
          </div>
        </div>
      </Band>

      {/* ───────── 2. When do you need it ───────── */}
      <Band id="symptoms" tone="tint" labelledBy="symptoms-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
            <SectionTitle id="symptoms-title" eyebrow="Recognise the signs" title={c.symptomsTitle} className="mb-5" />
            <ul className="space-y-4 w-full">
              {c.symptoms.map((s) => (
                <CheckItem key={s}>{s}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 w-full">
            <ImageCard {...photo2} side="left" ratio={1.85} mobileRatio={1.45} />
          </div>
        </div>
      </Band>

      {/* ───────── 3. Procedure (compact: one row on wide screens, tidy rows on phones) ───────── */}
      <Band id="procedure" labelledBy="procedure-title" className="!py-9 sm:!py-11 lg:!py-12">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(135deg,#e9f8fc_0%,#f4fcfe_50%,#e4f6fb_100%)] border border-teal/20 shadow-[0_16px_36px_-24px_rgba(14,154,167,0.3)] px-5 sm:px-8 lg:px-10 py-7 sm:py-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <Eyebrow className="!mb-1.5">Step by step</Eyebrow>
            <h2 id="procedure-title" className="font-serif font-bold text-navy text-[26px] sm:text-[30px] lg:text-[34px] leading-tight">
              The {t.name} <Highlight>Procedure</Highlight>
            </h2>
            <p className="text-body text-[13.5px] sm:text-[14.5px] leading-relaxed mt-2 max-w-xl">
              What to expect from your first visit to your final check-up, explained clearly.
            </p>
          </div>

          <ol className="flex flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-y-7">
            {c.steps.map((step, i) => (
              <li
                key={step.title}
                className={`relative flex basis-full items-center gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center ${stepWidth}`}
              >
                <div className="w-[76px] h-[76px] sm:w-[104px] sm:h-[104px] shrink-0 rounded-full bg-white ring-4 ring-white shadow-[0_10px_24px_-10px_rgba(14,154,167,0.35)] flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                  <div className="relative w-full h-full">
                    {step.image ? (
                      <Image src={step.image} alt={`${t.name}: ${step.title.toLowerCase()} step`} fill sizes="104px" className="object-contain scale-[1.14]" />
                    ) : (
                      <StepArt kind={step.art} className="absolute inset-0 w-full h-full" />
                    )}
                  </div>
                </div>
                <div className={`min-w-0 sm:mt-3 sm:flex sm:flex-col sm:items-center ${evenPills ? "sm:w-full" : ""}`}>
                  <span className={`btn-primary-grad inline-block px-4 py-1 rounded-full text-white text-[12.5px] sm:text-[13px] font-bold shadow-[0_8px_18px_-6px_rgba(75,43,181,0.65)]${evenPills ? " sm:flex sm:h-[46px] sm:w-full sm:max-w-[215px] sm:items-center sm:justify-center sm:py-1.5 sm:text-center sm:leading-tight" : ""}`}>
                    {i + 1}. {step.title}
                  </span>
                  <p className="text-[12.5px] sm:text-[13px] text-body leading-snug mt-1.5 sm:mt-2 max-w-[300px] sm:max-w-[215px] xl:max-w-[190px]">{step.text}</p>
                </div>
                {i < c.steps.length - 1 && (
                  <ChevronRight aria-hidden="true" className="hidden xl:block absolute top-[42px] -right-[22px] w-5 h-5 stroke-[2.8] text-navy/60" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* ───────── 4. Benefits ───────── */}
      <Band id="benefits" tone="tint" labelledBy="benefits-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 w-full">
            <ImageCard {...photo3} side="left" ratio={1.85} mobileRatio={1.45} />
          </div>
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionTitle
              id="benefits-title"
              eyebrow="Why patients choose it"
              title={
                <>
                  Benefits of <Highlight>{t.name}</Highlight>
                </>
              }
              className="mb-5"
            />
            <ul className="space-y-4 w-full">
              {c.benefits.map((b) => (
                <CheckItem key={b} className="font-medium text-navy">
                  {b}
                </CheckItem>
              ))}
            </ul>
            <div className="mt-7 w-full rounded-[22px] glass-card p-5 sm:p-6 flex gap-4">
              <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] text-white grid place-items-center">
                <Info className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif font-bold text-navy text-[18px] sm:text-[20px] leading-snug">{c.suitableTitle}</h3>
                <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] text-body leading-relaxed">{c.suitableFor}</p>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* ───────── 5. Aftercare & recovery ───────── */}
      <Band id="aftercare" tone="aqua" labelledBy="aftercare-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionTitle
              id="aftercare-title"
              eyebrow="After your visit"
              title={
                <>
                  Aftercare &amp; <Highlight>Recovery</Highlight>
                </>
              }
              className="mb-4"
            />
            <p className={BODY}>
              Simple post-treatment guidelines to keep your teeth healthy, protect your results, and ensure a smooth, comfortable recovery.
            </p>
            <p className="mt-3.5 text-[14px] text-body">
              Have questions or feeling post-procedure sensitivity? Dr. Gayatri and our caring team at Ambrosia Alley, Amanora Park Town are always just a call away.
            </p>
          </div>
          <div className="lg:col-span-7 w-full">
            <h3 className="font-sans text-[12px] uppercase tracking-[0.2em] font-bold text-teal mb-4">Care Guidelines</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.aftercare.map((item, i) => (
                <li key={item} className="glass-card rounded-[20px] p-5 flex items-start gap-3.5">
                  <span className="font-serif font-bold text-[26px] leading-none text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14px] sm:text-[14.5px] text-navy font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* ───────── 6. Why choose us (doctor and clinic trust, local note) ───────── */}
      <WhyChooseSection id="why-us" treatmentName={t.name} note={c.localNote} />

      {/* ───────── 7. FAQ (cost lives here) ───────── */}
      <section id="faqs" aria-labelledby="faqs-title" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col items-start">
              <Eyebrow className="mb-2.5">Frequently Asked Questions</Eyebrow>
              <h2 id="faqs-title" className="font-serif font-bold text-navy leading-[1.12] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[32px] xl:text-[35px]">
                {t.name} <Highlight>Questions</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-4" />
              <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-md">
                Straight answers to what patients in Hadapsar and Pune ask us most about {lower}, including cost, comfort and how long it takes.
              </p>
              <p className="mt-4 text-[12.5px] text-body/80">
                {SITE.contentReviewedByDoctor ? `Medically reviewed by ${SITE.doctor.name}. ` : ""}Last updated {formatDate(SITE.contentUpdated)}
              </p>
            </div>
            <div className="lg:col-span-7 w-full">
              <FaqAccordion faqs={c.faqs} idPrefix={`faq-${t.slug}`} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 8. Closing call to action (same as the About page) ───────── */}
      <ClinicCta title={`Book ${t.name} in Hadapsar`} treatment={bookingValue} />

      <FooterWave />
    </>
  );
}

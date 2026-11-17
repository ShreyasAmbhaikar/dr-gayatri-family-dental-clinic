import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Info, MapPin, Phone, ScanLine, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import TreatmentHeroArt from "@/components/site/TreatmentHeroArt";
import ImageCard from "@/components/site/ImageCard";
import BookButton from "@/components/site/BookButton";
import FaqAccordion from "@/components/site/FaqAccordion";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { AccentBar, BODY, Band, CheckItem, DarkPanel, Eyebrow, Highlight, SectionTitle } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { treatmentGraph } from "@/lib/schema";
import { treatmentPath } from "@/lib/treatments/summary";
import { HERO_ART, photosFor } from "@/lib/treatments/media";
import type { Treatment } from "@/lib/treatments";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

// Names that read as plural in headings ("What are braces?").
const PLURAL = new Set(["braces", "clear-aligners", "dental-implants", "crowns-bridges", "dentures", "tooth-fillings", "veneers", "full-mouth-implants"]);

const WHY = [
  { icon: Users, title: "Experienced Dentist", desc: "Skilled and gentle treatment with a patient-friendly approach" },
  { icon: ScanLine, title: "Modern Technology", desc: "Digital X-rays & advanced tools for higher accuracy" },
  { icon: ShieldCheck, title: "Hygienic & Safe", desc: "Strict sterilisation and infection control protocols" },
  { icon: MapPin, title: "Convenient Location", desc: "Easy to reach in Amanora Park Town, open evenings and Sundays" },
];

// Tooth illustrations for the procedure steps (the same artwork the root canal page uses).
const STEP_IMAGES = [
  "/images/rct/step-1-diagnosis.png",
  "/images/rct/step-2-cleaning.png",
  "/images/rct/step-3-sealing.png",
  "/images/rct/step-4-restoration.png",
];

export default function TreatmentPage({ treatment: t }: { treatment: Treatment }) {
  const c = t.content;
  const bookingValue = t.bookingValue ?? t.name;
  const [photo1, photo2, photo3] = photosFor(t.category);
  const lower = t.name.toLowerCase();
  const split = t.h1.indexOf(" in Hadapsar");
  const lead = split > 0 ? t.h1.slice(0, split) : t.h1;
  const place = split > 0 ? t.h1.slice(split + 1) : "";
  const stepBasis = c.steps.length === 4 ? "lg:basis-[calc(25%-1.5rem)]" : "lg:basis-[calc(33.333%-1.34rem)]";

  return (
    <>
      <JsonLd data={treatmentGraph(t)} />

      {/* ───────── Hero ───────── */}
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: t.name }]}
        eyebrow={`${t.category} Care · Hadapsar, Pune`}
        title={
          <>
            {lead} {place && <Highlight>{place}</Highlight>}
          </>
        }
        sub={c.heroSub}
        actions={
          <>
            <BookButton treatment={bookingValue} />
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/90 text-navy border-[1.5px] border-purple/60 text-[14.5px] sm:text-[15px] font-semibold hover:bg-white hover:border-purple transition-all shadow-xs"
            >
              <Phone className="w-[17px] h-[17px] text-purple" aria-hidden="true" />
              <span>Call: {SITE.phoneDisplay}</span>
            </a>
          </>
        }
        checks={c.facts.map(([label, value]) => (
          <>
            {label}: <strong>{value}</strong>
          </>
        ))}
        art={<TreatmentHeroArt icon={t.icon} image={HERO_ART[t.slug]} facts={c.facts} />}
      />

      {/* ───────── 1. What is it ───────── */}
      <Band id="what-is" labelledBy="what-is-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 w-full">
            <ImageCard {...photo1} side="left" priority ratio={1.85} mobileRatio={1.45} />
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
            <p className={`mt-3.5 ${BODY}`}>{c.overview[0]}</p>
            <p className={`mt-3.5 ${BODY}`}>{c.overview[1]}</p>
            <p className="mt-3.5 text-[14px] text-body">
              Not sure what you need? Start with a{" "}
              {t.slug !== "dental-checkup" && (
                <>
                  <Link href={treatmentPath("dental-checkup")} className="font-semibold text-teal hover:underline">
                    dental check-up
                  </Link>
                  , browse{" "}
                </>
              )}
              <Link href="/treatments" className="font-semibold text-teal hover:underline">
                all treatments
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-teal hover:underline">
                contact us
              </Link>
              .
            </p>
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

      {/* ───────── 3. Procedure ───────── */}
      <Band id="procedure" labelledBy="procedure-title">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[linear-gradient(135deg,#e9f8fc_0%,#f4fcfe_50%,#e4f6fb_100%)] border border-teal/20 shadow-[0_16px_36px_-24px_rgba(14,154,167,0.3)] px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <Eyebrow>Step by step</Eyebrow>
            <h2 id="procedure-title" className="font-serif font-bold text-navy text-[28px] sm:text-[34px] lg:text-[38px] leading-tight">
              The {t.name} <Highlight>Procedure</Highlight>
            </h2>
            <p className="text-body text-[14px] sm:text-[15px] leading-relaxed mt-2.5 max-w-xl">
              What to expect from your first visit to your final check-up, explained clearly.
            </p>
          </div>

          <ol className="flex flex-wrap justify-center gap-x-8 gap-y-10 relative">
            {c.steps.map((step, i) => (
              <li key={step.title} className={`relative flex flex-col items-center text-center px-2 basis-full sm:basis-[calc(50%-1rem)] ${stepBasis}`}>
                <div className="w-[134px] h-[134px] sm:w-[146px] sm:h-[146px] rounded-full bg-white ring-4 ring-white shadow-[0_12px_28px_-10px_rgba(14,154,167,0.35)] flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                  <div className="relative w-full h-full">
                    <Image src={STEP_IMAGES[i % STEP_IMAGES.length]} alt="" fill sizes="146px" className="object-contain scale-[1.14]" />
                  </div>
                </div>
                <span className="btn-primary-grad inline-block px-5 py-1.5 rounded-full text-white text-[13px] sm:text-[13.5px] font-bold mt-4 shadow-[0_8px_20px_-6px_rgba(75,43,181,0.65)]">
                  {i + 1}. {step.title}
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-body leading-relaxed max-w-[250px] mx-auto mt-2.5">{step.text}</p>
                {(i + 1) % (c.steps.length === 4 ? 4 : 3) !== 0 && i < c.steps.length - 1 && (
                  <ChevronRight aria-hidden="true" className="hidden lg:block absolute top-[58px] -right-[24px] w-5 h-5 stroke-[2.8] text-navy/60" />
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

      {/* ───────── 5. Aftercare ───────── */}
      <Band id="aftercare" labelledBy="aftercare-title">
        <SectionTitle id="aftercare-title" eyebrow="After your visit" title={<>Aftercare &amp; <Highlight>Recovery</Highlight></>} align="center" className="mb-10" />
        <ol className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {c.aftercare.map((a, i) => (
            <li
              key={a}
              className="basis-full sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.85rem)] glass-card rounded-[22px] p-5 flex items-start gap-4"
            >
              <span className="w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] text-white font-bold text-[14px] grid place-items-center shadow-[0_8px_16px_-6px_rgba(14,154,167,0.7)]">
                {i + 1}
              </span>
              <p className="text-[14px] sm:text-[15px] leading-snug text-body pt-1.5">{a}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* ───────── 6. Cost ───────── */}
      <Band id="cost" tone="aqua" labelledBy="cost-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionTitle
              id="cost-title"
              eyebrow="Transparent pricing"
              title={
                <>
                  Cost of {lower} <Highlight>in Hadapsar</Highlight>
                </>
              }
              className="mb-4"
            />
            <p className={BODY}>{c.costIntro}</p>
            {c.startingPrice && (
              <p className="mt-3 text-[15px] font-bold text-navy">
                Starting from <span className="text-teal">{c.startingPrice}</span>
              </p>
            )}
          </div>
          <div className="lg:col-span-7 w-full">
            <h3 className="font-sans text-[12px] uppercase tracking-[0.2em] font-bold text-teal mb-4">What affects the cost</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.costFactors.map((f, i) => (
                <li key={f} className="glass-card rounded-[20px] p-5 flex items-start gap-3.5">
                  <span className="font-serif font-bold text-[26px] leading-none text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] sm:text-[14.5px] text-navy font-medium leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* ───────── 7. Why choose us ───────── */}
      <Band id="why-us" labelledBy="why-us-title">
        <DarkPanel className="p-6 sm:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            <div className="lg:col-span-5 lg:pr-8 flex flex-col items-start">
              <Eyebrow light>Why choose us</Eyebrow>
              <h2 id="why-us-title" className="font-serif font-bold text-white text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.15]">
                Trusted Dental Care <span className="text-teal-bright">in Hadapsar</span>
              </h2>
              <p className="mt-3.5 text-white/85 text-[13.5px] sm:text-[14.5px] leading-relaxed">{c.localNote}</p>
              <Link href="/about" className="mt-4 text-[13.5px] font-semibold text-teal-bright hover:underline">
                Meet Dr. Gayatri →
              </Link>
            </div>
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-px h-48 bg-white/20" />
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHY.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-[18px] bg-white/[0.12] hover:bg-white/[0.18] border border-white/15 p-4 flex items-start gap-3.5 transition-colors">
                  <Icon className="w-6 h-6 stroke-[2] text-teal-bright flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-white text-[14px] leading-snug">{title}</h3>
                    <p className="text-[12px] text-white/80 mt-1 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DarkPanel>
      </Band>

      {/* ───────── 8. FAQ (homepage design) ───────── */}
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
                Straight answers to what patients in Hadapsar and Pune ask us most about {lower}.
              </p>
              <p className="mt-4 text-[12.5px] text-body/80">Last updated {formatDate(SITE.contentUpdated)}</p>
            </div>
            <div className="lg:col-span-7 w-full">
              <FaqAccordion faqs={c.faqs} idPrefix={`faq-${t.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <FooterWave />
    </>
  );
}

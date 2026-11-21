"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Phone,
  ChevronRight,
  ChevronDown,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  Home,
} from "lucide-react";
import RctHeroArt from "@/components/rct/RctHeroArt";
import WaveDivider from "@/components/ui/WaveDivider";
import ImageCard from "@/components/site/ImageCard";
import WhyChooseSection from "@/components/site/WhyChooseSection";
import { AccentBar, Highlight } from "@/components/ui/SectionHeading";

interface RootCanalPageContentProps {
  onOpenBooking: () => void;
}

const FAQS = [
  {
    id: "pain",
    question: "Is a root canal treatment painful?",
    answer:
      "Not at all. Modern root canal treatment at Dr. Gayatri's clinic is virtually painless. We administer gentle local anesthesia before beginning so you feel completely comfortable throughout. Most patients report that it feels no different than getting a routine dental filling, and it immediately relieves the intense, throbbing toothache caused by the infected nerve.",
  },
  {
    id: "duration",
    question: "How long does a root canal take at your Hadapsar clinic?",
    answer:
      "Thanks to modern rotary endodontic technology, most uncomplicated root canals are completed in a single sitting lasting 45 to 60 minutes. If the tooth has severe infection or complex curved canals, Dr. Gayatri may recommend two appointments to ensure complete sterilization.",
  },
  {
    id: "crown",
    question: "Will I need a crown after a root canal?",
    answer:
      "Yes, for molars and premolars that handle heavy chewing forces, a dental crown is strongly recommended. A custom-fitted porcelain or zirconia crown protects the treated tooth from biting fractures, restores 100% chewing strength, and seals out bacteria.",
  },
  {
    id: "lifespan",
    question: "How long will the treated tooth last?",
    answer:
      "With good oral hygiene (twice-daily brushing and flossing) and routine 6-month checkups, a tooth treated with a root canal can last for decades — and very often a lifetime. Saving your original tooth root also prevents jawbone loss and maintains your natural bite.",
  },
  {
    id: "cost",
    question: "What is the cost of Root Canal Treatment in Hadapsar?",
    answer:
      "Root canal costs at Dr. Gayatri's clinic depend on the tooth involved (front single-canal teeth vs. back multi-canal molars) and crown selection. We provide honest, transparent, and affordable pricing for Hadapsar and Amanora residents, with full estimates explained upfront before treatment begins.",
  },
];

const PROCEDURE_STEPS = [
  {
    number: "1. Diagnosis",
    image: "/images/rct/step-1-diagnosis.png",
    alt: "Root canal diagnosis showing infected tooth pulp",
    desc: "Detailed examination & digital X-ray",
  },
  {
    number: "2. Cleaning",
    image: "/images/rct/step-2-cleaning.png",
    alt: "Endodontic file gently cleaning infected root canal",
    desc: "Gentle removal of infected tissue from root canals",
  },
  {
    number: "3. Sealing",
    image: "/images/rct/step-3-sealing.png",
    alt: "Root canal disinfected and sealed with biocompatible gutta percha",
    desc: "Disinfection and sealing to prevent future infection",
  },
  {
    number: "4. Restoration",
    image: "/images/rct/step-4-restoration.png",
    alt: "Permanent dental crown capping restored tooth",
    desc: "A filling or crown to restore strength, function and appearance",
  },
];

const BENEFITS = [
  {
    title: "Relieves tooth pain and discomfort immediately",
    desc: "Permanently stops severe throbbing toothaches, nighttime ache, and temperature sensitivity.",
  },
  {
    title: "Stops the spread of bacterial infection",
    desc: "Protects neighboring teeth and prevents deep jawbone abscess or systemic inflammation.",
  },
  {
    title: "Preserves your natural tooth for life",
    desc: "Keeps your natural root structure, preserves jawbone density, and avoids expensive extractions.",
  },
  {
    title: "Restores normal chewing and appearance",
    desc: "Bite comfortably and enjoy your favorite hot and cold foods without hesitation or twinges.",
  },
  {
    title: "A safe, long-lasting and cost-effective solution",
    desc: "Far more affordable and permanent than tooth extraction followed by bridges or dental implants.",
  },
];

/** Photo card: uses the shared ImageCard design (teal tab on one side). */
function PhotoFrame(props: {
  src: string;
  alt: string;
  side: "left" | "right";
  ratio?: number;
  mobileRatio?: number;
  position?: string;
  sizes: string;
  priority?: boolean;
  zoom?: number;
  origin?: string;
}) {
  return <ImageCard {...props} />;
}

export default function RootCanalPageContent({ onOpenBooking }: RootCanalPageContentProps) {
  const [openFaq, setOpenFaq] = useState<string>("pain");

  const toggleFaq = (id: string) => setOpenFaq(openFaq === id ? "" : id);

  return (
    <div className="w-full overflow-x-clip text-body selection:bg-cyan-500 selection:text-white">
      {/* ───────────────────────── Panoramic Hero Banner Section ───────────────────────── */}
      <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden flex items-center">
        {/* Panoramic Background Photo with Smiling Patient on the Right */}
        <Image
          src="/images/hero-patient-right.jpg"
          alt="Root Canal Treatment at Dr. Gayatri's Family Dental Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_25%] sm:object-[82%_28%] lg:object-[88%_32%]"
        />

        {/* Matching Rich Teal Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#06242c] via-[#093c47]/95 via-50% to-[#093c47]/45 lg:to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#06242c]/50 to-transparent pointer-events-none"
        />

        {/* Hero Content Container */}
        <div className="page-container relative z-10 pt-[110px] sm:pt-[120px] lg:pt-[130px] pb-14 sm:pb-16 lg:pb-18 w-full">
          <div className="max-w-[720px] flex flex-col items-start">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-white/80 mb-4 sm:mb-5">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
              <Link href="/treatments" className="hover:text-white transition-colors">
                Treatments
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
              <span aria-current="page" className="font-semibold text-white">
                Root Canal Treatment
              </span>
            </nav>

            {/* H1 Heading with vibrant gradient highlight on location */}
            <h1 className="font-serif font-bold text-white text-[36px] sm:text-[46px] lg:text-[52px] xl:text-[56px] leading-[1.1] tracking-tight">
              Root Canal Treatment <br />
              <span className="bg-gradient-to-r from-[#4ee4f4] via-[#38d8e8] to-[#1ab3c2] bg-clip-text text-transparent inline-block pb-1">
                in Hadapsar, Pune
              </span>
            </h1>

            {/* Simple CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn-primary-grad group inline-flex items-center gap-2.5 rounded-full px-7 sm:px-8 h-[50px] text-white text-[14.5px] sm:text-[15px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-[0_12px_24px_-10px_rgba(75,43,181,0.65)]"
              >
                <CalendarDays className="w-4.5 h-4.5" aria-hidden="true" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href="tel:+917841930325"
                className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/10 hover:bg-white/20 active:scale-[0.98] backdrop-blur-md border border-white/25 text-white text-[14.5px] sm:text-[15px] font-semibold transition-all shadow-xs"
              >
                <Phone className="w-4.5 h-4.5 text-white" aria-hidden="true" />
                <span>Call Clinic: 078419 30325</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 1. What is Root Canal Treatment? (Gentle Pulp Preservation) ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-18">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Clean rectangular photo card with teal side tab */}
            <div className="lg:col-span-6 w-full">
              <PhotoFrame
                src="/images/rct/generated-patient-smiling.jpg"
                alt="Smiling patient relaxing comfortably during gentle dental care"
                side="left"
                priority
                ratio={1.85}
                mobileRatio={1.45}
                position="center"
                zoom={1.05}
                sizes="(max-width: 1024px) 92vw, 580px"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-2">
                Gentle Pulp Preservation
              </span>
              <h2 className="font-serif font-bold text-navy leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px]">
                What is Root Canal <Highlight>Treatment?</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-4" />

              <p className="text-body text-[15px] sm:text-[16px] xl:text-[16.5px] leading-relaxed">
                A <strong>Root Canal Treatment (RCT)</strong> is a specialized endodontic procedure performed to <strong>save an infected, decayed, or fractured tooth</strong> rather than extracting it. Deep inside every tooth, beneath the protective enamel and dentin, lies a sensitive chamber called the <strong>dental pulp</strong> — containing living nerves, blood vessels, and connective tissue.
              </p>
              <p className="mt-3.5 text-body text-[15px] sm:text-[16px] xl:text-[16.5px] leading-relaxed">
                When deep untreated cavities or dental trauma allow oral bacteria to invade this chamber, the pulp becomes inflamed and painful. At <strong>Dr. Gayatri&apos;s Family Dental Clinic in Hadapsar</strong>, the infected tissue is delicately removed, the root canals are sanitized with <strong>precision rotary instruments</strong>, and the space is hermetically sealed with bio-ceramic gutta-percha to protect your tooth for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 2. When Do You Need a Root Canal? (Parallelogram Image Attachment 5) ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-18 bg-slate-50/50">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-2">
                Recognize the Warning Signs
              </span>
              <h2 className="font-serif font-bold text-navy leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px]">
                When Do You Need a <Highlight>Root Canal?</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-4" />

              <p className="text-body text-[15px] sm:text-[16px] xl:text-[16.5px] leading-relaxed mb-4">
                Pulp infections do not heal on their own and can form a painful jawbone abscess if left untreated. A root canal may be recommended if you experience any of the following clinical symptoms:
              </p>

              {/* Checklist with generous vertical spacing */}
              <ul className="space-y-4 sm:space-y-4.5 text-[14.5px] sm:text-[15.5px] text-body w-full">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" />
                  </span>
                  <span><strong>Persistent or throbbing toothache</strong> while chewing or resting at night.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" />
                  </span>
                  <span><strong>Prolonged sensitivity to hot or cold</strong> foods that lingers for 30+ seconds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" />
                  </span>
                  <span><strong>Swollen or tender gums</strong> or a small pimple-like bump (fistula) near the tooth root.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" />
                  </span>
                  <span><strong>Tooth discoloration or darkening</strong> caused by inner pulp necrosis or injury.</span>
                </li>
              </ul>
            </div>

            {/* Clean rectangular photo card with teal side tab */}
            <div className="lg:col-span-6 order-1 lg:order-2 w-full">
              <PhotoFrame
                src="/images/rct/generated-dentist-model.jpg"
                alt="Dentist examining a cross-section tooth model with an endodontic probe"
                side="left"
                priority
                ratio={1.85}
                mobileRatio={1.45}
                position="center"
                zoom={1.05}
                sizes="(max-width: 1024px) 92vw, 580px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 3. Minimally Invasive Protocol (Exact Design from Image Attachment 3) ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-18">
        <div className="page-container">
          <div className="rounded-[32px] sm:rounded-[44px] bg-[linear-gradient(135deg,#e9f8fc_0%,#f4fcfe_50%,#e4f6fb_100%)] border border-teal/20 shadow-[0_16px_36px_-24px_rgba(14,154,167,0.3)] px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
            {/* Header */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-teal uppercase mb-2">
                MINIMALLY INVASIVE PROTOCOL
              </span>
              <h2 className="font-serif font-bold text-navy text-[28px] sm:text-[34px] lg:text-[38px] leading-tight">
                The Root Canal Procedure
              </h2>
              <p className="text-body text-[14px] sm:text-[15px] leading-relaxed mt-2.5 max-w-xl">
                A precise, comfortable, and tooth-preserving approach using modern, minimally invasive techniques.
              </p>
            </div>

            {/* 4 Steps with Chevrons matching Attachment 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start relative">
              {PROCEDURE_STEPS.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col items-center text-center px-2">
                  {/* Circular White Badge with High-Res Cropped Tooth (tight crop, minimal white margin) */}
                  <div className="w-[134px] h-[134px] sm:w-[146px] sm:h-[146px] rounded-full bg-white ring-4 ring-white shadow-[0_12px_28px_-10px_rgba(14,154,167,0.35)] flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="146px"
                        className="object-contain scale-[1.14]"
                      />
                    </div>
                  </div>

                  {/* Primary Purple Theme Pill Badge matching Book Appointment button */}
                  <span className="btn-primary-grad inline-block px-5 py-1.5 rounded-full text-white text-[13px] sm:text-[13.5px] font-bold mt-4 shadow-[0_8px_20px_-6px_rgba(75,43,181,0.65)]">
                    {step.number}
                  </span>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-body leading-relaxed max-w-[210px] mx-auto mt-2">
                    {step.desc}
                  </p>

                  {/* Desktop Chevron separator between steps */}
                  {idx < PROCEDURE_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex absolute top-[58px] -right-[14px] z-10 text-navy/70"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.8]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 4. Benefits of Root Canal Treatment ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-18 bg-slate-50/50">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Clean rectangular photo card with teal side tab */}
            <div className="lg:col-span-6 w-full">
              <PhotoFrame
                src="/images/rct/generated-tooth-restoration.jpg"
                alt="Restored natural tooth model on a clear display stand in a modern clinic"
                side="left"
                priority
                ratio={1.85}
                mobileRatio={1.45}
                position="center"
                zoom={1.05}
                sizes="(max-width: 1024px) 92vw, 580px"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-2">
                Long-Term Oral Health
              </span>
              <h2 className="font-serif font-bold text-navy leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px]">
                Benefits of Root Canal <Highlight>Treatment</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-5" />

              {/* Checklist points with generous breathing room */}
              <div className="space-y-5 sm:space-y-5.5 w-full">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy text-[14.5px] sm:text-[15.5px] leading-snug">{benefit.title}</h3>
                      <p className="text-[13px] sm:text-[13.5px] text-body mt-0.5 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 5. WHY CHOOSE Dr. Gayatri – Trusted Dental Care in Hadapsar ───────────────────── */}
      <WhyChooseSection
        id="why-us"
        treatmentName="root canal treatment"
      />

      {/* ───────────────────── 6. Frequently Asked Questions (Static Left Column) ───────────────────── */}
      <section id="faqs" className="relative scroll-mt-20 py-14 sm:py-16 lg:py-20">
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            {/* Left Column: Heading & Subtitle (Static, NOT sticky) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-2.5">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif font-bold text-navy leading-[1.12] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[32px] xl:text-[35px]">
                Frequently Asked <Highlight>Questions</Highlight>
              </h2>
              <AccentBar className="mt-3.5 mb-4" />

              <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-md">
                Get clear, transparent answers about <strong>root canal therapy</strong>, <strong>pain control</strong>, <strong>procedure duration</strong>, and <strong>aftercare</strong> at our Hadapsar clinic.
              </p>
            </div>

            {/* Right Column: Home Page Accordion Design */}
            <div className="lg:col-span-7 w-full space-y-3">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                const panelId = `rct-faq-panel-${faq.id}`;
                return (
                  <div
                    key={faq.id}
                    className={`glass-card rounded-[18px] transition-all duration-200 ${
                      isOpen ? "ring-1 ring-teal/30" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-sans font-bold text-[14px] sm:text-[15px] focus:outline-hidden cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className={`${isOpen ? "text-teal" : "text-navy"} transition-colors`}>
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen ? "border-teal bg-teal text-white rotate-180" : "border-teal/50 text-teal"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    {isOpen && (
                      <div id={panelId} className="px-5 sm:px-6 pb-5 text-body text-[13.5px] sm:text-[14px] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Footer Wave Transition (Common with Landing Page) ───────────────────── */}
      <div className="relative z-20 h-24 sm:h-36 lg:h-44 -mt-4 sm:-mt-8">
        <WaveDivider variant="footer" className="h-full" />
      </div>
    </div>
  );
}

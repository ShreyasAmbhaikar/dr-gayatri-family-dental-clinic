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
  Users,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import RctHeroArt from "@/components/rct/RctHeroArt";
import WaveDivider from "@/components/ui/WaveDivider";
import ImageCard from "@/components/site/ImageCard";
import { AccentBar, Highlight } from "@/components/ui/SectionHeading";

interface RootCanalPageContentProps {
  onOpenBooking: () => void;
}

/**
 * Computer monitor displaying dental tooth icon, exactly matching Image Attachment 2.
 */
function MonitorToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      {/* Mini tooth glyph on screen */}
      <path
        d="M10 8c-.6 0-1 .4-1 1 0 .8.3 1.5.5 2.5.2.8.5.8.8.8.3 0 .5-.6.7-1.4.1-.3.3-.4.5-.4s.4.1.5.4c.2.8.4 1.4.7 1.4.3 0 .6 0 .8-.8.2-1 .5-1.7.5-2.5 0-.6-.4-1-1-1-.5 0-.7.3-1 .5-.3-.2-.5-.5-1-.5Z"
        strokeWidth="1.5"
      />
    </svg>
  );
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

const WHY_CHOOSE_FEATURES = [
  {
    icon: Users,
    title: "Experienced Dentist",
    desc: "Skilled and gentle treatment with a patient-friendly approach",
  },
  {
    icon: MonitorToothIcon,
    title: "Modern Technology",
    desc: "Digital X-rays & advanced tools for higher accuracy",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    desc: "Strict sterilization and infection control protocols",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    desc: "Easily accessible in Hadapsar with flexible appointment slots",
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
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="relative isolate">
        {/* Soft aqua gradient background + wave edge */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef9fc_0%,#f7fcfe_55%,#fdfeff_100%)]" />
          <div className="absolute -right-[8%] top-[6%] w-[62%] h-[88%] rounded-full bg-[radial-gradient(closest-side,rgba(190,234,243,0.55),rgba(190,234,243,0)_100%)]" />
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[55px] sm:h-[75px] lg:h-[95px]"
          >
            <path
              d="M0,78 C260,108 470,70 760,84 C1040,98 1240,56 1440,26 L1440,120 L0,120 Z"
              fill="#ffffff"
              opacity="0.55"
            />
            <path
              d="M0,96 C300,118 540,92 820,100 C1080,108 1260,78 1440,60 L1440,120 L0,120 Z"
              fill="#fdfeff"
            />
          </svg>
        </div>

        {/* Hero container */}
        <div className="page-container relative pt-[86px] sm:pt-[94px] lg:pt-[100px] pb-10 sm:pb-12 lg:pb-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-body mb-5 sm:mb-6">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-body/60" aria-hidden="true" />
            <Link href="/#treatments" className="hover:text-teal transition-colors">
              Treatments
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-body/60" aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-navy">
              Root Canal Treatment in Hadapsar
            </span>
          </nav>

          {/* Hero Content & Art in a 12-column grid vertically center-aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start max-w-[690px]">
              <span className="text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.24em] text-teal uppercase mb-2.5 inline-block">
                Painless Endodontic Care · Hadapsar, Pune
              </span>

              {/* Exact heading requested: Root Canal Treatment in Hadapsar */}
              <h1 className="font-serif font-bold text-navy text-[40px] sm:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.08] tracking-[-0.015em]">
                Root Canal Treatment <br />
                <Highlight>in Hadapsar</Highlight>
              </h1>

              <p className="mt-4 text-[16px] sm:text-[17.5px] leading-relaxed text-body">
                Relieve severe tooth pain, eliminate deep infection, and <strong>preserve your natural tooth</strong> with safe, advanced <strong>single-sitting root canal therapy</strong> by <strong>Dr. Gayatri</strong> at Ambrosia Alley, Amanora Park Town, Hadapsar.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="btn-primary-grad group inline-flex items-center gap-2.5 rounded-full px-7 sm:px-8 h-[50px] text-white text-[14.5px] sm:text-[15px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-[0_12px_24px_-10px_rgba(75,43,181,0.65)]"
                >
                  <CalendarDays className="w-[18px] h-[18px]" aria-hidden="true" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
                <a
                  href="tel:+917841930325"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/90 text-navy border-[1.5px] border-purple/60 text-[14.5px] sm:text-[15px] font-semibold hover:bg-white hover:border-purple transition-all shadow-xs"
                >
                  <Phone className="w-[17px] h-[17px] text-purple" aria-hidden="true" />
                  <span>Call: 078419 30325</span>
                </a>
              </div>

              {/* Exactly 3 clean checklist points on a single clean row on desktop */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-[12.5px] sm:text-[13px] font-medium text-body">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Check className="w-4 h-4 text-teal stroke-[2.5]" />
                  <span><strong>100% Painless</strong> Local Anesthesia</span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Check className="w-4 h-4 text-teal stroke-[2.5]" />
                  <span><strong>Single-Sitting</strong> Available</span>
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <Check className="w-4 h-4 text-teal stroke-[2.5]" />
                  <span><strong>Amanora Park Town</strong>, Hadapsar</span>
                </span>
              </div>
            </div>

            {/* Right Column: 3D tooth illustration vertically centered */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-[85%] max-w-[390px] lg:w-full lg:max-w-[430px]">
                <RctHeroArt className="w-full h-auto" />
              </div>
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

      {/* ───────────────────── 5. WHY CHOOSE Dr. Gayatri – Trusted Dental Care in Hadapsar (Exact Match to Theme & Image 2) ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-18">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(135deg,#4b2bb5_0%,#3d2096_50%,#2f1778_100%)] border border-white/15 shadow-[0_22px_48px_-18px_rgba(75,43,181,0.65)] p-6 sm:p-9 lg:p-10 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
              {/* Left Column: Exactly matching Image Attachment 2 */}
              <div className="lg:col-span-5 lg:pr-8 flex flex-col items-start">
                <span className="text-teal-bright text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase mb-2 inline-block">
                  WHY CHOOSE
                </span>

                <h2 className="font-serif font-bold text-white text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.15]">
                  Dr. Gayatri – Trusted<br />
                  Dental Care <span className="text-teal-bright">in Hadapsar</span>
                </h2>

                <p className="mt-3.5 text-white/85 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                  Experience expert care, advanced technology, and a patient-first approach for safe and successful root canal treatment.
                </p>
              </div>

              {/* Vertical Divider Line matching Attachment 2 */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <div className="w-px h-48 bg-white/20" />
              </div>

              {/* Right Column: 2x2 Grid with exact icons & copy from Attachment 2 */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {WHY_CHOOSE_FEATURES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[18px] bg-white/[0.12] hover:bg-white/[0.18] border border-white/15 p-4 flex items-start gap-3.5 transition-colors"
                    >
                      <div className="flex-shrink-0 text-teal-bright mt-0.5">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-[14px] leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[12px] text-white/80 mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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

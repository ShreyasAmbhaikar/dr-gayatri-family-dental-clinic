import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Smile,
  ArrowRight,
  FileText,
  NotebookPen,
  ShieldPlus,
  ScanLine,
  SmilePlus,
  ShieldCheck,
  Users,
  HeartHandshake,
  Sparkles,
  Feather,
} from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import OrganicImage from "@/components/ui/OrganicImage";
import BookButton from "@/components/site/BookButton";
import ClinicCta from "@/components/site/ClinicCta";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { AccentBar, BODY, Highlight } from "@/components/site/Section";
import { ToothIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";
import { TREATMENTS } from "@/lib/treatments/summary";

const TITLE = "About Dr. Gayatri's Family Dental Clinic | Hadapsar, Pune";
const DESCRIPTION =
  "Meet Dr. Gayatri and our team in Amanora Park Town, Hadapsar, Pune. Gentle, patient-first family dental care, with written estimates before treatment.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
  image: SITE.doctor.image,
  keywords: [
    "dr gayatri dentist hadapsar",
    "family dental clinic hadapsar",
    "dentist in amanora park town",
    "about our dental clinic pune",
    "dr gayatri dental surgeon pune",
  ],
});

// 4 Core Commitments (Values) using standard Lucide icons
const VALUES = [
  {
    icon: NotebookPen,
    title: "Personalised Care Plans",
    desc: "We listen carefully to your symptoms and goals, explaining every option without rushing or pressure.",
  },
  {
    icon: ShieldPlus,
    title: "Strict Sterilisation",
    desc: "Sterilised instruments, disposable barriers and strict infection control for every single visit.",
  },
  {
    icon: ScanLine,
    title: "Modern Digital Technology",
    desc: "Digital X-rays and a digital consultation screen help us diagnose accurately and explain your treatment clearly.",
  },
  {
    icon: SmilePlus,
    title: "Gentle, Stress-Free Experience",
    desc: "We work at your pace with gentle technique and soothing amenities to eliminate dental anxiety.",
  },
];

export default function AboutPage() {
  const schema = pageGraph({
    type: ["AboutPage", "WebPage"],
    path: "/about",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    extra: [
      {
        "@type": "Person",
        name: SITE.doctor.name,
        jobTitle: SITE.doctor.title,
        worksFor: { "@id": `${SITE.url}/#clinic` },
        image: `${SITE.url}${SITE.doctor.image}`,
      },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <div className="page-bg min-h-screen">
        {/* ───────────────────── 1. HERO SECTION WITH RANDOM SMOOTH BLOB ───────────────────── */}
        <section className="relative isolate pt-[86px] sm:pt-[94px] lg:pt-[102px] pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
          {/* Background Radial & Wave Wash */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef9fc_0%,#f7fcfe_55%,#fdfeff_100%)]" />
            <div className="absolute -right-[10%] top-[2%] w-[65%] h-[95%] rounded-full bg-[radial-gradient(closest-side,rgba(190,234,243,0.55),rgba(190,234,243,0)_100%)]" />
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-[55px] sm:h-[75px] lg:h-[95px]"
            >
              <path d="M0,78 C260,108 470,70 760,84 C1040,98 1240,56 1440,26 L1440,120 L0,120 Z" fill="#ffffff" opacity="0.6" />
              <path d="M0,96 C300,118 540,92 820,100 C1080,108 1260,78 1440,60 L1440,120 L0,120 Z" fill="#fdfeff" />
            </svg>
          </div>

          <div className="page-container relative z-10 w-full">
            <div className="mb-5 sm:mb-6">
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
              {/* Left Column: Heading, description, actions, trust checkmarks */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.24em] text-teal uppercase mb-3 inline-block">
                  About Dr. Gayatri&apos;s Family Dental Clinic
                </span>

                <h1 className="font-serif font-bold text-navy text-[34px] sm:text-[44px] lg:text-[46px] xl:text-[52px] leading-[1.12] tracking-[-0.015em]">
                  Gentle, Modern Dental Care <Highlight>for the Whole Family</Highlight>
                </h1>

                <p className="mt-4 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[580px]">
                  Founded in Amanora Park Town, Hadapsar, our clinic blends modern dental technology with a gentle, patient-first approach — giving families healthy, confident smiles in a calm, welcoming setting.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <BookButton />
                  <Link
                    href="/treatments"
                    className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 h-[50px] bg-white/95 text-navy border-[1.5px] border-purple/50 text-[14.5px] sm:text-[15px] font-semibold hover:bg-white hover:border-purple transition-all shadow-xs"
                  >
                    Our Treatments <ArrowRight className="w-4 h-4 text-purple" />
                  </Link>
                </div>

                {/* Key Trust Strip matching Attachment 1 */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-2 max-w-[560px] w-full">
                  {/* Item 1 */}
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <ToothIcon className="w-6 h-6 sm:w-7 sm:h-7 text-teal shrink-0 stroke-[1.8]" />
                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-navy text-[13px] sm:text-[13.5px] tracking-tight whitespace-nowrap">{TREATMENTS.length} Treatments</span>
                      <span className="text-[11.5px] sm:text-[12px] text-slate-600 font-medium whitespace-nowrap">Under One Roof</span>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-7 bg-slate-300/80 shrink-0" aria-hidden="true" />

                  {/* Item 2 */}
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-teal shrink-0 stroke-[1.8]" aria-hidden="true" />
                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-navy text-[13px] sm:text-[13.5px] tracking-tight whitespace-nowrap">Evenings &amp; Sundays</span>
                      <span className="text-[11.5px] sm:text-[12px] text-slate-600 font-medium whitespace-nowrap">Open for Visits</span>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-7 bg-slate-300/80 shrink-0" aria-hidden="true" />

                  {/* Item 3 */}
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-teal shrink-0 stroke-[1.8]" aria-hidden="true" />
                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-navy text-[13px] sm:text-[13.5px] tracking-tight whitespace-nowrap">Amanora Park Town</span>
                      <span className="text-[11.5px] sm:text-[12px] text-slate-600 font-medium whitespace-nowrap">Hadapsar, Pune</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Random Organic Blob (Enlarged) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[500px] xl:max-w-[550px] aspect-[1.02]">
                  <OrganicImage
                    src="/images/gallery/clinic-operatory-dental-chair.webp"
                    alt="Modern ergonomic treatment operatory at Dr. Gayatri's Family Dental Clinic in Amanora Park Town, Hadapsar, Pune"
                    shape="blob1"
                    priority
                    sizes="(max-width: 1024px) 90vw, 550px"
                    className="w-full h-full drop-shadow-2xl"
                    layers={[
                      { className: "bg-teal/25", blur: true, scale: 1.05 },
                      { className: "bg-gradient-to-br from-[#c6edf6] via-[#e2f6fa] to-[#a6e0ec]", x: "-14px", y: "14px", scale: 1.02 },
                      { className: "bg-gradient-to-tr from-[#9fe3f1]/70 to-[#e8f7fb]", x: "10px", y: "-10px", scale: 0.98 },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── 2. MEET DR. GAYATRI (Lead Dental Surgeon - Normal Theme) ───────────────────── */}
        <section id="meet-doctor" className="relative py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-transparent via-[#f4fbfd]/80 to-transparent overflow-hidden">
          <div className="page-container relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Column: Doctor's Floating Random Organic Blob (Enlarged) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[490px] xl:max-w-[540px] aspect-[0.98]">
                  <OrganicImage
                    src={SITE.doctor.image}
                    alt={`${SITE.doctor.name}, ${SITE.doctor.title} at Dr. Gayatri's Family Dental Clinic Hadapsar`}
                    shape="blob2"
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="w-full h-full drop-shadow-2xl"
                    imgClassName="object-[50%_18%]"
                    layers={[
                      { className: "bg-teal/25", blur: true, scale: 1.05 },
                      { className: "bg-gradient-to-bl from-[#d7f3f9] via-[#eaf8fb] to-[#bfe9f3]", x: "14px", y: "-12px", scale: 1.02 },
                      { className: "bg-gradient-to-tr from-[#a6e0ec]/60 to-[#d3f0f7]", x: "-10px", y: "10px", scale: 0.98 },
                    ]}
                  />
                </div>
              </div>

              {/* Right Column: Doctor Details */}
              <div className="lg:col-span-6 flex flex-col items-start mt-6 lg:mt-0">
                <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.24em] text-teal uppercase mb-2 sm:mb-2.5 inline-block">
                  Lead Dental Surgeon
                </span>

                <h2 className="font-serif font-bold text-navy text-[32px] sm:text-[40px] lg:text-[44px] leading-tight">
                  Meet <Highlight>{SITE.doctor.name}</Highlight>
                </h2>

                <AccentBar className="mt-3.5 mb-5" />

                <p className={`${BODY} font-medium text-navy text-[15.5px] sm:text-[16px]`}>
                  {SITE.doctor.name} leads the clinic and provides compassionate, comprehensive dental care for patients of all generations across Hadapsar and Pune.
                </p>

                <p className={`mt-3.5 ${BODY} leading-relaxed`}>
                  Her practice philosophy is centered on honest advice: listen attentively, explain diagnoses in simple terms, treat gently, and recommend only treatments that are genuinely necessary. Her expertise spans family dentistry, single-sitting root canal treatment, aesthetic smile makeovers, and pediatric dental care.
                </p>

                <p className={`mt-3.5 ${BODY} leading-relaxed`}>
                  Every consultation begins with an unhurried discussion. {SITE.doctor.name} ensures you clearly understand your treatment choices, expected duration, and costs beforehand — empowering you to make confident decisions for your health.
                </p>

                {/* 4 Clinical Philosophy Cards in 2x2 Grid */}
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  <div className="rounded-2xl p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border border-teal/20 shadow-[0_4px_16px_-4px_rgba(14,154,167,0.12)] hover:border-teal/45 hover:shadow-[0_8px_24px_-6px_rgba(14,154,167,0.2)] transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-navy text-[14.5px] sm:text-[15px] leading-snug">
                      Patient-First Philosophy
                    </h4>
                  </div>

                  <div className="rounded-2xl p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border border-teal/20 shadow-[0_4px_16px_-4px_rgba(14,154,167,0.12)] hover:border-teal/45 hover:shadow-[0_8px_24px_-6px_rgba(14,154,167,0.2)] transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-navy text-[14.5px] sm:text-[15px] leading-snug">
                      Minimally Invasive Dentistry
                    </h4>
                  </div>

                  <div className="rounded-2xl p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border border-teal/20 shadow-[0_4px_16px_-4px_rgba(14,154,167,0.12)] hover:border-teal/45 hover:shadow-[0_8px_24px_-6px_rgba(14,154,167,0.2)] transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Feather className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-navy text-[14.5px] sm:text-[15px] leading-snug">
                      Gentle Anesthesia Techniques
                    </h4>
                  </div>

                  <div className="rounded-2xl p-3.5 sm:p-4 bg-white/95 backdrop-blur-sm border border-teal/20 shadow-[0_4px_16px_-4px_rgba(14,154,167,0.12)] hover:border-teal/45 hover:shadow-[0_8px_24px_-6px_rgba(14,154,167,0.2)] transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-navy text-[14.5px] sm:text-[15px] leading-snug">
                      Clear, Written Estimates
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ───────────────────── 3. OUR STORY: CARE THAT FEELS PERSONAL ───────────────────── */}
      <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-transparent via-[#eef9fc]/60 to-transparent">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.24em] text-teal uppercase mb-2 inline-block">
              Our Story &amp; Presence
            </span>
            <h2 className="font-serif font-bold text-navy text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.16]">
              Care That Feels <Highlight>Personal</Highlight>
            </h2>
            <div className="mt-3.5 mb-4 flex justify-center">
              <AccentBar />
            </div>
            <p className="text-body text-[15.5px] sm:text-[16.5px] leading-relaxed">
              Serving families from Amanora Park Town, Magarpatta City, Mundhwa, Keshav Nagar, and across Hadapsar with modern digital tools and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="rounded-[24px] p-6 bg-white/90 backdrop-blur-md border border-teal/15 shadow-[0_12px_28px_-12px_rgba(14,154,167,0.14)] hover:shadow-[0_18px_36px_-12px_rgba(14,154,167,0.25)] hover:border-teal/35 hover:-translate-y-1 transition-all">
              <span className="w-11 h-11 rounded-2xl bg-teal/10 text-teal grid place-items-center mb-4">
                <Smile className="w-5 h-5 stroke-[2.2]" />
              </span>
              <h3 className="font-bold text-navy text-[17px] mb-2">Zero Judgment Care</h3>
              <p className="text-[13.5px] text-body leading-relaxed">
                Whether it has been six months or six years since your last dental visit, we welcome you with warmth and no lecturing.
              </p>
            </div>

            <div className="rounded-[24px] p-6 bg-white/90 backdrop-blur-md border border-teal/15 shadow-[0_12px_28px_-12px_rgba(14,154,167,0.14)] hover:shadow-[0_18px_36px_-12px_rgba(14,154,167,0.25)] hover:border-teal/35 hover:-translate-y-1 transition-all">
              <span className="w-11 h-11 rounded-2xl bg-purple/10 text-purple grid place-items-center mb-4">
                <FileText className="w-5 h-5 stroke-[2.2]" />
              </span>
              <h3 className="font-bold text-navy text-[17px] mb-2">Transparent Estimates</h3>
              <p className="text-[13.5px] text-body leading-relaxed">
                You receive a printed, itemized estimate before anything begins. Every treatment decision stays entirely in your hands.
              </p>
            </div>

            <div className="rounded-[24px] p-6 bg-white/90 backdrop-blur-md border border-teal/15 shadow-[0_12px_28px_-12px_rgba(14,154,167,0.14)] hover:shadow-[0_18px_36px_-12px_rgba(14,154,167,0.25)] hover:border-teal/35 hover:-translate-y-1 transition-all">
              <span className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-600 grid place-items-center mb-4">
                <Clock className="w-5 h-5 stroke-[2.2]" />
              </span>
              <h3 className="font-bold text-navy text-[17px] mb-2">Evenings &amp; Sundays</h3>
              <p className="text-[13.5px] text-body leading-relaxed">
                Open late until 9:00 PM on weekdays and open on Sunday mornings so dental care easily fits around work and school.
              </p>
            </div>

            <div className="rounded-[24px] p-6 bg-white/90 backdrop-blur-md border border-teal/15 shadow-[0_12px_28px_-12px_rgba(14,154,167,0.14)] hover:shadow-[0_18px_36px_-12px_rgba(14,154,167,0.25)] hover:border-teal/35 hover:-translate-y-1 transition-all">
              <span className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-600 grid place-items-center mb-4">
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </span>
              <h3 className="font-bold text-navy text-[17px] mb-2">Prime Hadapsar Location</h3>
              <p className="text-[13.5px] text-body leading-relaxed">
                Convenient ground floor clinic in Ambrosia Alley, opposite Sadhna Bank and near Kotak Mahindra Bank in Amanora Park Town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 4. A DENTAL CLINIC YOU CAN TRUST (Core Commitments) ───────────────────── */}
      <section className="relative py-14 sm:py-18 lg:py-20 bg-transparent">
        <div aria-hidden="true" className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-teal/10 blur-3xl pointer-events-none -z-10" />
        <div aria-hidden="true" className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple/10 blur-3xl pointer-events-none -z-10" />

        <div className="page-container">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(135deg,#3c1c9c_0%,#301584_50%,#250f6c_100%)] border border-white/15 shadow-[0_24px_55px_-16px_rgba(40,15,110,0.65)] p-7 sm:p-10 lg:p-12 text-white">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
              <span className="text-teal-bright text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase mb-2.5 inline-block">
                WHAT TO EXPECT
              </span>
              <h2 className="font-serif font-bold text-white text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.16]">
                A Dental Clinic You Can <span className="text-teal-bright">Trust</span>
              </h2>
              <p className="mt-3.5 text-white/85 text-[14px] sm:text-[15.5px] leading-relaxed">
                Four unwavering commitments we promise every patient — from a toddler&apos;s first visit to root canals and implants.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group rounded-[22px] bg-white/[0.10] hover:bg-white/[0.16] border border-white/15 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-teal-bright/15 border border-teal-bright/25 text-teal-bright grid place-items-center mb-4 shadow-[0_4px_16px_-4px_rgba(26,179,194,0.35)] group-hover:bg-teal-bright/25 transition-colors">
                        <Icon className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-white text-[15.5px] sm:text-[16px] leading-snug">
                        {val.title}
                      </h3>
                      <p className="text-[12.5px] sm:text-[13px] text-white/80 mt-2.5 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 5. VISIT CLINIC / FINAL BOOKING BANNER ───────────────────── */}
      <ClinicCta />

      </div>

      <FooterWave />
    </SiteShell>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, CalendarDays, Layers, Smile } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Button from "@/components/ui/Button";

interface BeforeAfterSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

interface TransformationCase {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  tag: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  bookingTreatment: string;
  benefits: string[];
  icon: typeof Sparkles;
}

const CASES: TransformationCase[] = [
  {
    id: "crowded",
    tabLabel: "Crooked Teeth",
    title: "Crooked & Crowded Teeth Correction",
    category: "Orthodontics",
    tag: "Clear Aligners",
    duration: "Varies by case",
    beforeImage: "/images/before-after/crowded-before.webp",
    afterImage: "/images/before-after/crowded-after.webp",
    description:
      "Clear aligners or braces can straighten crowded, overlapping front teeth. The right option, and how long it takes, depends on your teeth and bite.",
    bookingTreatment: "Orthodontics / Aligners",
    benefits: [
      "Clear aligners with no metal brackets",
      "Planned around your alignment and bite",
      "Discreet and comfortable everyday wear",
    ],
    icon: Smile,
  },
  {
    id: "restoration",
    tabLabel: "Chipped Tooth",
    title: "Chipped Tooth Cosmetic Restoration",
    category: "Restorative Dentistry",
    tag: "Tooth-Coloured Filling",
    duration: "Often one visit",
    beforeImage: "/images/before-after/restoration-before.webp",
    afterImage: "/images/before-after/restoration-after.webp",
    description:
      "A chipped edge can often be rebuilt with tooth-coloured composite resin that is shaped and polished to blend in with the natural tooth.",
    bookingTreatment: "Cosmetic Dentistry",
    benefits: [
      "Often completed in a single visit",
      "Shade matched to your natural tooth",
      "Bonded to the tooth to restore strength",
    ],
    icon: Layers,
  },
  {
    id: "whitening",
    tabLabel: "Teeth Whitening",
    title: "Professional Teeth Whitening",
    category: "Cosmetic Dentistry",
    tag: "Stain Removal",
    duration: "About 60-90 mins",
    beforeImage: "/images/before-after/whitening-before.webp",
    afterImage: "/images/before-after/whitening-after.webp",
    description:
      "Dentist-supervised whitening can lift yellowing and tea or coffee stains. How much lighter your teeth become depends on your starting shade.",
    bookingTreatment: "Teeth Whitening",
    benefits: [
      "Supervised by a dentist, with gums protected",
      "Realistic results explained at your consultation",
      "Desensitising care if you feel any sensitivity",
    ],
    icon: Sparkles,
  },
];

export default function BeforeAfterSection({ onOpenBooking }: BeforeAfterSectionProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("crowded");

  const currentCase = CASES.find((c) => c.id === selectedCaseId) || CASES[0];

  return (
    <section id="transformations" className="relative scroll-mt-20 py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-cyan-50/25 to-white">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-cyan-100/30 via-purple-100/20 to-pink-100/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Smile Transformations"
            title="Before & After Smile Examples"
            align="center"
          />
          <p className="text-body text-[15px] sm:text-[16px] leading-relaxed mt-3.5">
            Slide to compare what these treatments can change. Results vary from person to person and depend on your starting condition, so we explain what is realistic for you at your consultation.
          </p>

          {/* Scenario Tab Pills with vibrant clinic teal active styling */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 p-1.5 rounded-full bg-white/95 border border-slate-200 shadow-xs backdrop-blur-sm">
            {CASES.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === selectedCaseId;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "btn-primary-grad text-white shadow-md shadow-purple/40 scale-[1.02]"
                      : "text-slate-600 hover:text-purple hover:bg-purple/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-width responsive 2-column layout matching application width */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Interactive Slider */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center w-full">
            <BeforeAfterSlider
              key={currentCase.id}
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              beforeLabel="Before"
              afterLabel="After"
              treatmentTag={currentCase.tag}
            />
            <p className="text-[12px] text-slate-500 mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span>Drag the vertical handle left or right to inspect the transformation</span>
            </p>
          </div>

          {/* Case Details */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal/10 text-teal border border-teal/20">
                {currentCase.category}
              </span>
              <span className="text-[12px] font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                ⏱ {currentCase.duration}
              </span>
            </div>

            <h3 className="font-serif font-bold text-navy text-[26px] sm:text-[30px] leading-tight mb-3">
              {currentCase.title}
            </h3>

            <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed mb-6">
              {currentCase.description}
            </p>

            {/* Benefits checklist */}
            <ul className="space-y-2.5 mb-7 w-full">
              {currentCase.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal stroke-[2.2] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3.5 w-full">
              <Button
                onClick={() => onOpenBooking(currentCase.bookingTreatment)}
                icon={<CalendarDays className="w-4 h-4" />}
                arrow
                className="w-full sm:w-auto"
              >
                Consult for Similar Treatment
              </Button>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal hover:underline px-2 py-2"
              >
                <span>View Full Clinic Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

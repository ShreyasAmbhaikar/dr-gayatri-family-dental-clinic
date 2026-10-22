"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import {
  GeneralDentistryIcon,
  RootCanalIcon,
  DentalImplantsIcon,
  PediatricDentistryIcon,
  TeethWhiteningIcon,
  BracesAlignersIcon,
} from "./TreatmentIcons";

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  icon: React.ReactNode;
}

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Routine checkups for healthy teeth",
    longDescription:
      "Comprehensive dental examinations, digital diagnostic radiographs, ultrasonic plaque and tartar scaling, and tooth-colored composite restorations designed to prevent oral complications and preserve natural tooth longevity.",
    benefits: [
      "Digital cavity and plaque assessment",
      "Painless ultrasonic cleaning & polishing",
      "Fluoride varnish & preventive remineralization",
      "Custom oral hygiene regimen",
    ],
    duration: "30 - 45 Mins",
    icon: <GeneralDentistryIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Relieve pain and save your natural teeth",
    longDescription:
      "State-of-the-art painless single-sitting root canal treatment utilizing rotary endodontic files, apex locators, and bio-ceramic sealers to eliminate infection and relieve toothaches while conserving original tooth structure.",
    benefits: [
      "100% painless procedure with gentle anesthesia",
      "Single-visit completion in most cases",
      "Preserves natural jawbone & tooth structure",
      "High-precision computerized apex localization",
    ],
    duration: "45 - 60 Mins",
    icon: <RootCanalIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    longDescription:
      "Medical-grade titanium and zirconia root implants capped with handcrafted porcelain crowns that look, feel, and function exactly like natural healthy teeth, preventing adjacent bone resorption.",
    benefits: [
      "Permanent lifetime stability & strength",
      "Zero slippage during chewing or speaking",
      "Restores 99% of natural bite force",
      "Preserves facial harmony & bone density",
    ],
    duration: "2 - 3 Visits",
    icon: <DentalImplantsIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle care for your child's smile",
    longDescription:
      "A compassionate, warm, and playful dental care environment tailored specifically for infants, children, and teenagers to build lifelong positive oral habits with zero anxiety or fear.",
    benefits: [
      "Friendly, child-adapted clinic atmosphere",
      "Fluoride treatments & cavity pit sealants",
      "Habit correction (thumb sucking, tongue thrust)",
      "Gentle space maintainers for early tooth loss",
    ],
    duration: "30 Mins",
    icon: <PediatricDentistryIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Brighter smiles with safe treatments",
    longDescription:
      "Clinically supervised laser teeth bleaching that safely removes deep intrinsic and extrinsic stains from tea, coffee, and age, lifting your smile up to 8 shades lighter without damaging enamel.",
    benefits: [
      "Up to 8 shades noticeably brighter in 1 hour",
      "Safe on sensitive enamel & gum tissue",
      "Immediate, radiant, photo-ready results",
      "Long-lasting shine with aftercare guidance",
    ],
    duration: "45 - 60 Mins",
    icon: <TeethWhiteningIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    description: "Straighten your teeth with confidence",
    longDescription:
      "Advanced orthodontic correction featuring customized clear transparent aligners and aesthetic ceramic braces to fix crowded, spaced, rotated teeth, or severe bite irregularities comfortably.",
    benefits: [
      "Nearly invisible clear aligner options",
      "Custom 3D digital smile simulation before start",
      "Comfortable without painful wire pokes",
      "Removable for effortless eating and brushing",
    ],
    duration: "Custom Roadmap",
    icon: <BracesAlignersIcon className="w-16 h-16 transition-transform group-hover:scale-110" />,
  },
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentItem | null>(null);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              OUR TREATMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e] mb-4">
              Complete Dental Care <br />
              <span className="font-normal">Under One Roof</span>
            </h2>

            {/* Dual color accent bar matching design reference */}
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-10 h-1 rounded-full bg-[#372379]" />
              <span className="w-6 h-1 rounded-full bg-[#00a4c4]" />
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From preventive care to advanced treatments, we offer personalized solutions for every member of your family.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#372379] hover:bg-[#372379] text-[#372379] hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md group"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 6 Treatments Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TREATMENTS_DATA.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => setSelectedModalTreatment(treatment)}
              className="group relative bg-white rounded-3xl p-7 border border-[#e4f3f7] hover:border-cyan-300/80 shadow-sm hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* 3D Treatment Icon in soft circular glow */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#f0fbfd] to-[#e4f6fa] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d6f5fb] transition-colors">
                  {treatment.icon}
                </div>

                {/* Treatment Title */}
                <h3 className="font-serif text-xl font-bold text-[#1c1549] text-center mb-2 group-hover:text-[#009eb8] transition-colors">
                  {treatment.title}
                </h3>

                {/* Subtitle / Short Description */}
                <p className="text-slate-500 text-xs sm:text-sm text-center leading-relaxed mb-6 font-normal">
                  {treatment.description}
                </p>
              </div>

              {/* Bottom Action Pill & Circular Arrow */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#009eb8] group-hover:underline">
                  Learn more &amp; book
                </span>
                <div className="w-8 h-8 rounded-full bg-[#00a4c4] group-hover:bg-[#372379] text-white flex items-center justify-center transition-colors shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment Detail Modal */}
      {selectedModalTreatment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedModalTreatment(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  {selectedModalTreatment.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1c1549]">
                    {selectedModalTreatment.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#009eb8] uppercase tracking-wider">
                    Est. Duration: {selectedModalTreatment.duration}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalTreatment(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold"
                aria-label="Close treatment details"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedModalTreatment.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Key Clinical Advantages:
              </h4>
              <ul className="space-y-2">
                {selectedModalTreatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00a4c4] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const name = selectedModalTreatment.title;
                  setSelectedModalTreatment(null);
                  onSelectTreatment(name);
                }}
                className="flex-1 bg-[#372379] hover:bg-[#2c1a63] text-white font-semibold py-3 px-5 rounded-full text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
              <button
                onClick={() => setSelectedModalTreatment(null)}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 rounded-full text-slate-700 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

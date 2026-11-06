"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
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
      "Comprehensive dental examinations, digital diagnostic radiographs, ultrasonic plaque scaling, and tooth-colored composite restorations designed to prevent oral complications.",
    benefits: [
      "Digital cavity and plaque assessment",
      "Painless ultrasonic cleaning & polishing",
      "Fluoride varnish & preventive remineralization",
      "Custom oral hygiene regimen",
    ],
    duration: "30 - 45 Mins",
    icon: <GeneralDentistryIcon className="w-12 h-12" />,
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Relieve pain and save your natural teeth",
    longDescription:
      "State-of-the-art painless single-sitting root canal treatment utilizing rotary endodontic files, apex locators, and bio-ceramic sealers to eliminate infection while conserving original tooth structure.",
    benefits: [
      "100% painless procedure with gentle anesthesia",
      "Single-visit completion in most cases",
      "Preserves natural jawbone & tooth structure",
      "High-precision computerized apex localization",
    ],
    duration: "45 - 60 Mins",
    icon: <RootCanalIcon className="w-12 h-12" />,
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    longDescription:
      "Medical-grade titanium and zirconia root implants capped with handcrafted porcelain crowns that look, feel, and function exactly like natural healthy teeth.",
    benefits: [
      "Permanent lifetime stability & strength",
      "Zero slippage during chewing or speaking",
      "Restores 99% of natural bite force",
      "Preserves facial harmony & bone density",
    ],
    duration: "2 - 3 Visits",
    icon: <DentalImplantsIcon className="w-12 h-12" />,
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle care for your child's smile",
    longDescription:
      "A compassionate, warm, and playful dental care environment tailored specifically for infants, children, and teenagers to build lifelong positive oral habits with zero anxiety.",
    benefits: [
      "Friendly, child-adapted clinic atmosphere",
      "Fluoride treatments & cavity pit sealants",
      "Habit correction guidance",
      "Gentle space maintainers for early tooth loss",
    ],
    duration: "30 Mins",
    icon: <PediatricDentistryIcon className="w-12 h-12" />,
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
    icon: <TeethWhiteningIcon className="w-12 h-12" />,
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    description: "Straighten your teeth with confidence",
    longDescription:
      "Advanced orthodontic correction featuring customized clear transparent aligners and aesthetic ceramic braces to fix crowded, spaced, rotated teeth comfortably.",
    benefits: [
      "Nearly invisible clear aligner options",
      "Custom 3D digital smile simulation before start",
      "Comfortable without painful wire pokes",
      "Removable for effortless eating and brushing",
    ],
    duration: "Custom Roadmap",
    icon: <BracesAlignersIcon className="w-12 h-12" />,
  },
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentItem | null>(null);

  return (
    <section id="treatments" className="py-14 lg:py-20 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split 2-Column Section Layout Matching Reference 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (Approx 38% width): Section Title, Intro & Button */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              OUR TREATMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-bold text-[#1d174e] mb-4">
              Complete Dental Care <br />
              <span className="text-[#1d174e]">Under One Roof</span>
            </h2>

            {/* Dual color accent bar matching Reference 1 */}
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-9 h-1 rounded-full bg-[#38247b]" />
              <span className="w-5 h-1 rounded-full bg-[#009eb8]" />
            </div>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-7 max-w-sm">
              From preventive care to advanced treatments, we offer personalized solutions for every member of your family.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-[#38247b] hover:bg-[#38247b] text-[#38247b] hover:text-white text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column (Approx 62% width): 3x2 Grid of 6 Treatment Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {TREATMENTS_DATA.map((treatment) => (
                <div
                  key={treatment.id}
                  onClick={() => setSelectedModalTreatment(treatment)}
                  className="group relative bg-white rounded-2xl p-4 sm:p-4.5 border border-[#e5f4f7] hover:border-cyan-300 shadow-2xs hover:shadow-lg hover:shadow-cyan-900/5 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon container with soft circular glow matching Reference 1 */}
                    <div className="w-16 h-16 rounded-full bg-[#f0fbfe] border border-cyan-100/80 group-hover:bg-[#e2f8fc] flex items-center justify-center mb-3 transition-colors shadow-2xs">
                      {treatment.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[15px] font-bold text-[#1d174e] leading-snug mb-1 group-hover:text-[#009eb8] transition-colors">
                      {treatment.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-slate-500 text-[11px] leading-snug mb-4">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Circular Cyan Arrow Button on Bottom Right */}
                  <div className="flex justify-end mt-auto">
                    <div className="w-6 h-6 rounded-full bg-[#009eb8] group-hover:bg-[#38247b] text-white flex items-center justify-center transition-colors shadow-2xs">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Modal */}
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
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  {selectedModalTreatment.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1d174e]">
                    {selectedModalTreatment.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#009eb8] uppercase tracking-wider">
                    Duration: {selectedModalTreatment.duration}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalTreatment(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold"
                aria-label="Close treatment details"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedModalTreatment.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                Clinical Highlights:
              </h4>
              <ul className="space-y-1.5">
                {selectedModalTreatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009eb8] flex-shrink-0 mt-0.5" />
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
                className="flex-1 bg-[#38247b] hover:bg-[#2c1a63] text-white font-semibold py-2.5 px-5 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
              <button
                onClick={() => setSelectedModalTreatment(null)}
                className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-full text-slate-700 text-xs sm:text-sm font-medium"
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";

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
  image: string;
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
    image: "/images/treatments/v2-general-dentistry.png",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Relieve pain and save your natural tooth",
    longDescription:
      "State-of-the-art painless single-sitting root canal treatment utilizing rotary endodontic files, apex locators, and bio-ceramic sealers to eliminate infection while conserving original tooth structure.",
    benefits: [
      "100% painless procedure with gentle anesthesia",
      "Single-visit completion in most cases",
      "Preserves natural jawbone & tooth structure",
      "High-precision computerized apex localization",
    ],
    duration: "45 - 60 Mins",
    image: "/images/treatments/v2-root-canal.png",
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
    image: "/images/treatments/v2-dental-implants.png",
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
    image: "/images/treatments/v2-pediatric-dentistry.png",
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
    image: "/images/treatments/v2-teeth-whitening.png",
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
    image: "/images/treatments/v2-braces-aligners.png",
  },
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentItem | null>(null);

  return (
    <section id="treatments" className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f3f9fc] via-[#f7fcfe] to-white relative overflow-hidden">
      {/* Soft Fluid Aqua Wave at Bottom-Left matching Reference Image */}
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-36 pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 380 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
          preserveAspectRatio="none"
        >
          <path
            d="M0 160 C80 110, 180 135, 380 50 L380 160 L0 160 Z"
            fill="#d2f2fa"
            opacity="0.85"
          />
          <path
            d="M0 160 C60 130, 140 140, 300 80 L300 160 L0 160 Z"
            fill="#9dd7eb"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Split 2-Column Section Layout Matching Reference Image Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Section Title, Accent Bar, Intro & Action Button */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start pt-2">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#009eb8] uppercase block mb-3">
              OUR TREATMENTS
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.12] font-bold text-[#1d174e] mb-4">
              Complete Dental Care <br />
              <span className="text-[#1d174e]">Under One Roof</span>
            </h2>

            {/* 3-segment color accent bar matching Reference Image exactly */}
            <div className="h-[3px] w-14 rounded-full mb-5 flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>

            <p className="text-[#556070] text-[13.5px] sm:text-[14.5px] leading-relaxed mb-7 max-w-[340px] font-normal">
              From preventive care to advanced treatments, we offer personalized solutions for every member of your family.
            </p>

            {/* Pill CTA button matching Reference Image */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-[1.5px] border-[#38247b] hover:bg-[#38247b] text-[#38247b] hover:text-white text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-2xs hover:shadow-md"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: 3x2 Grid of 6 Treatment Cards with 3D Graphical Assets */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {TREATMENTS_DATA.map((treatment) => (
                <div
                  key={treatment.id}
                  onClick={() => setSelectedModalTreatment(treatment)}
                  className="group relative bg-white rounded-[22px] p-4 sm:p-4.5 border border-[#e8f3f6] hover:border-cyan-300 shadow-[0_4px_18px_rgba(0,100,150,0.04)] hover:shadow-lg hover:shadow-cyan-900/10 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Authentic 3D Graphical Master Asset matching User Attachment exactly */}
                    <div className="w-24 h-24 sm:w-[100px] sm:h-[100px] mb-3 relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        width={100}
                        height={100}
                        className="object-contain drop-shadow-[0_4px_16px_rgba(0,180,216,0.2)]"
                        priority
                        unoptimized
                      />
                    </div>

                    {/* Title in sans-serif matching Reference Image exactly */}
                    <h3 className="font-sans text-[14px] sm:text-[14.5px] font-bold text-[#1d174e] leading-snug mb-1 group-hover:text-[#009eb8] transition-colors">
                      {treatment.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-[#64748b] text-[11px] sm:text-[11.5px] leading-snug mb-3 max-w-[155px]">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Circular Cyan Arrow Button on Bottom Right matching Reference Image */}
                  <div className="flex justify-end mt-auto pt-0.5">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#009eb8] group-hover:bg-[#38247b] text-white flex items-center justify-center transition-colors shadow-2xs">
                      <ArrowRight className="w-2.5 h-2.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
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
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0 p-1">
                  <Image
                    src={selectedModalTreatment.image}
                    alt={selectedModalTreatment.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
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

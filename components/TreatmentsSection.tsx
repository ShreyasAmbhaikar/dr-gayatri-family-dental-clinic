"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

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
      "Gentle ultrasonic cleaning & polishing",
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
      "Gentle, modern root canal treatment under local anaesthesia that clears the infection and keeps your natural tooth, often in a single sitting.",
    benefits: [
      "Comfortable procedure under local anaesthesia",
      "Often completed in a single sitting",
      "Preserves your natural tooth and the bone around it",
      "Examination and X-ray before any decision",
    ],
    duration: "45 - 60 Mins",
    image: "/images/treatments/v2-root-canal.png",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    longDescription:
      "Titanium or zirconia implants topped with custom-made crowns, designed to look and feel like natural teeth and planned around your bone, gums and bite.",
    benefits: [
      "A fixed, stable replacement for missing teeth",
      "No slipping, unlike a loose denture",
      "Helps you chew a wide range of foods",
      "Helps protect the jawbone where a tooth was lost",
    ],
    duration: "2 - 3 Visits",
    image: "/images/treatments/v2-dental-implants.png",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle care for your child's smile",
    longDescription:
      "A compassionate, warm, and playful dental care environment tailored specifically for infants, children, and teenagers to build healthy oral habits and help children feel at ease.",
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
      "Dentist-supervised teeth whitening that lifts stains from tea, coffee and age, planned around your teeth, gums and sensitivity.",
    benefits: [
      "A visibly brighter smile, usually in one visit",
      "Gums protected during treatment",
      "Realistic expectations explained upfront",
      "Aftercare advice to help you keep the shade",
    ],
    duration: "45 - 60 Mins",
    image: "/images/treatments/v2-teeth-whitening.png",
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    description: "Straighten your teeth with confidence",
    longDescription:
      "Metal or tooth-coloured ceramic braces and clear aligners to straighten crowded, spaced or rotated teeth, with the option chosen to suit your case.",
    benefits: [
      "Nearly invisible clear aligner options",
      "Metal and ceramic braces for complex cases",
      "A written plan and estimate before you start",
      "Aligners are removable for eating and brushing",
    ],
    duration: "Custom Roadmap",
    image: "/images/treatments/v2-braces-aligners.png",
  },
];

// Each homepage treatment card links to its dedicated, SEO-optimised page.
const PAGE_FOR: Record<string, string> = {
  "root-canal": "/treatments/root-canal-treatment",
  "general-dentistry": "/treatments/dental-checkup",
  "dental-implants": "/treatments/dental-implants",
  "pediatric-dentistry": "/treatments/kids-dentistry",
  "teeth-whitening": "/treatments/teeth-whitening",
  "braces-aligners": "/treatments/braces",
};

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentItem | null>(null);

  return (
    <section id="treatments" className="relative pt-10 sm:pt-14 lg:pt-16 pb-28 sm:pb-36 lg:pb-40">
      {/* Aqua wave rising from the bottom-left; its bottom colour continues into the stats band */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[180px] sm:h-[240px] pointer-events-none">
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" className="w-full h-full block">
          <defs>
            <linearGradient id="treatmentsWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e6f7fb" />
              <stop offset="100%" stopColor="#d6f1f7" />
            </linearGradient>
          </defs>
          <path d="M0,30 C200,50 360,160 660,178 C940,196 1200,150 1440,118 L1440,240 L0,240 Z" fill="url(#treatmentsWave)" />
          <path d="M0,92 C240,120 470,200 800,204 C1080,208 1260,170 1440,150 L1440,170 C1260,190 1080,226 800,222 C470,218 240,140 0,112 Z" fill="#ffffff" opacity="0.55" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionHeading
              eyebrow="Our Treatments"
              accent
              titleClassName="text-[30px] sm:text-[38px] lg:text-[38px] xl:text-[42px]"
              title={
                <>
                  Complete Dental Care <br />
                  Under One Roof
                </>
              }
            />

            <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed mt-5 mb-8 max-w-[470px]">
              From preventive care to advanced treatments, we offer personalized solutions for every member of your family.
            </p>

            <Button href="/treatments" variant="outline" size="sm" arrow className="px-6">
              View All Treatments
            </Button>
          </div>

          <div className="lg:col-span-7 pt-2 lg:pt-9 xl:pt-11">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {TREATMENTS_DATA.map((treatment) => (
                <button
                  type="button"
                  key={treatment.id}
                  onClick={() => setSelectedModalTreatment(treatment)}
                  aria-label={`${treatment.title}: view details`}
                  className="group relative glass-card rounded-[20px] px-3 sm:px-4 pt-4 pb-5 text-center flex flex-col items-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(14,110,150,0.35)]"
                >
                  <div className="w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] mb-2 relative transition-transform duration-200 group-hover:scale-105">
                    <Image
                      src={treatment.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-contain drop-shadow-[0_6px_14px_rgba(14,154,167,0.18)]"
                    />
                  </div>

                  <h3 className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-navy leading-snug mb-1 group-hover:text-teal transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-body text-[11.5px] sm:text-[12px] leading-snug max-w-[150px] pr-4 sm:pr-0">
                    {treatment.description}
                  </p>

                  <span className="absolute bottom-3.5 right-3.5 w-[22px] h-[22px] rounded-full bg-teal group-hover:bg-purple text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </button>
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
                className="flex-1 bg-[#38247b] hover:bg-[#2c1a63] text-white font-semibold py-2.5 px-5 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
              {PAGE_FOR[selectedModalTreatment.id] ? (
                <Link
                  href={PAGE_FOR[selectedModalTreatment.id]}
                  onClick={() => setSelectedModalTreatment(null)}
                  className="px-5 py-2.5 border border-teal text-teal hover:bg-cyan-50 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Dedicated Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <button
                  onClick={() => setSelectedModalTreatment(null)}
                  className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-full text-slate-700 text-xs sm:text-sm font-medium cursor-pointer"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

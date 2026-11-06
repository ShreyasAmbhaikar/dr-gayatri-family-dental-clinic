"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface PatientReview {
  id: number;
  name: string;
  location: string;
  avatar?: string;
  initials: string;
  avatarBg: string;
  treatment: string;
  rating: number;
  review: string;
}

const REVIEWS_DATA: PatientReview[] = [
  {
    id: 1,
    name: "Priya S.",
    location: "Viman Nagar, Pune",
    avatar: "/images/patient-priya.jpg",
    initials: "PS",
    avatarBg: "from-rose-400 to-pink-500",
    treatment: "Routine Cleaning & Preventive Care",
    rating: 5,
    review:
      "Dr. Gayatri is very patient and explains everything so well. The clinic is clean, modern, and extremely friendly. My whole family visits here and we always have a gentle, comfortable experience.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Kalyani Nagar, Pune",
    initials: "RV",
    avatarBg: "from-[#38247b] to-[#5b3ebf]",
    treatment: "Single-Sitting Root Canal",
    rating: 5,
    review:
      "I was terrified of getting a root canal done after past dental trauma. Dr. Gayatri completely changed my perspective. Absolutely zero pain throughout the entire procedure! Highly recommend for anxiety-free dental care.",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    location: "Kharadi, Pune",
    initials: "AD",
    avatarBg: "from-[#009eb8] to-[#0ea5e9]",
    treatment: "Pediatric Dentistry (Son, 6 yrs)",
    rating: 5,
    review:
      "Best pediatric dentist experience for my 6-year-old son! Dr. Gayatri was so calm and playful that he actually enjoyed his tooth filling. The clinic hygiene and warmth are truly unmatched.",
  },
];

export default function PatientStoriesSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[activeReviewIndex];

  return (
    <section id="patient-stories" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header with Eyebrow, Heading, Accent Bar & Google Trust Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#009eb8] uppercase block mb-3">
              PATIENT STORIES
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[44px] leading-tight font-bold text-[#1d174e] mb-4">
              Real Smiles, <span className="text-[#009eb8]">Real Stories</span>
            </h2>

            {/* 3-segment color accent bar */}
            <div className="h-[3.5px] w-14 rounded-full flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>
          </div>

          {/* Google Verified Review Badge & Carousel Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Google Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-[#f4fafc] border border-cyan-100 rounded-full py-2 px-4 shadow-2xs">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
              </div>
              <span className="text-xs font-bold text-[#1d174e]">
                4.9/5 <span className="font-normal text-slate-500">• 200+ Google Reviews</span>
              </span>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#009eb8] hover:bg-cyan-50 text-slate-700 hover:text-[#009eb8] flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                aria-label="Previous patient story"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={nextReview}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#009eb8] hover:bg-cyan-50 text-slate-700 hover:text-[#009eb8] flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
                aria-label="Next patient story"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Left Review Card, Right Before/After Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Review Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white via-white to-[#f9fdfe] rounded-[32px] p-7 sm:p-9 border border-[#e2f1f6] shadow-[0_8px_30px_rgba(0,100,160,0.06)] flex flex-col justify-between relative overflow-hidden">
            {/* Top Row: Stars + Treatment Tag */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Patient</span>
                </div>
              </div>

              {/* Treatment Pill */}
              <div className="inline-block text-[11px] font-semibold text-[#009eb8] bg-cyan-50 px-3 py-1 rounded-full mb-4">
                Treatment: {currentReview.treatment}
              </div>

              {/* Patient Review Text */}
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-6 font-normal italic">
                &ldquo;{currentReview.review}&rdquo;
              </p>
            </div>

            {/* Profile Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-2">
              <div className="flex items-center gap-3.5">
                {/* Avatar with photo or stylized initial badge */}
                {currentReview.avatar ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#b2eaf5] shadow-sm relative bg-slate-200 flex-shrink-0">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      fill
                      priority
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${currentReview.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-md flex-shrink-0 border-2 border-white`}>
                    {currentReview.initials}
                  </div>
                )}
                <div>
                  <h4 className="text-[14px] font-bold text-[#1d174e] leading-tight">
                    {currentReview.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{currentReview.location}</p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeReviewIndex === idx
                        ? "w-6 bg-[#38247b]"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Jump to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Before & After Smile Transformation Result */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white via-white to-[#f4fbfe] rounded-[32px] p-6 sm:p-8 border border-[#e2f1f6] shadow-[0_8px_30px_rgba(0,100,160,0.06)] flex flex-col justify-between">
            {/* Case Study Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#009eb8]" />
                <span className="text-xs font-bold text-[#1d174e] uppercase tracking-wider">
                  Clinical Case Study
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Laser Teeth Whitening
              </span>
            </div>

            {/* Interactive Before & After Slider */}
            <BeforeAfterSlider
              beforeImage="/images/teeth-before.jpg"
              afterImage="/images/teeth-after.jpg"
              beforeLabel="Before"
              afterLabel="After"
              treatmentTag="1-Hour Laser Whitening Result"
            />

            {/* Clinical Highlights Footnote */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 mt-4 text-center">
              <div className="text-[11px] font-bold text-[#1d174e]">
                ✓ 8 Shades Brighter
              </div>
              <div className="text-[11px] font-bold text-[#009eb8]">
                ✓ Enamel-Safe Formula
              </div>
              <div className="text-[11px] font-bold text-emerald-600">
                ✓ Zero Discomfort
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

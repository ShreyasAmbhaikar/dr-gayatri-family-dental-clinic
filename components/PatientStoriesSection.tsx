"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface PatientReview {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  treatment: string;
}

const REVIEWS_DATA: PatientReview[] = [
  {
    id: 1,
    name: "Priya S",
    location: "Viman Nagar",
    avatar: "/images/patient-priya.jpg",
    rating: 5,
    review:
      "Dr. Gayatri is very patient and explains everything so well. The clinic is clean, modern and extremely friendly. My whole family visits here and we always have a comfortable experience.",
    treatment: "Teeth Whitening & Checkup",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Kalyani Nagar",
    avatar: "/images/patient-priya.jpg",
    rating: 5,
    review:
      "I was terrified of getting a root canal done after past trauma. Dr. Gayatri changed everything. Absolutely zero pain throughout the entire procedure! Highly recommend for anyone looking for gentle dental care.",
    treatment: "Rotary Root Canal",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    location: "Kharadi, Pune",
    avatar: "/images/patient-priya.jpg",
    rating: 5,
    review:
      "Best pediatric dentist experience for my 6-year-old son! Dr. Gayatri was so calm and playful that he actually enjoyed his tooth filling. The clinic hygiene is unmatched.",
    treatment: "Pediatric Dentistry",
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
    <section id="patient-stories" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Arrows */}
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              PATIENT STORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e]">
              Real Smiles, Real Stories
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-600 flex items-center justify-center transition-all shadow-xs"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-600 flex items-center justify-center transition-all shadow-xs"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2-Column Content: Left Review Card, Right Before/After Result */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Review Card */}
          <div className="lg:col-span-6 bg-[#f7fcfd] rounded-3xl p-8 sm:p-10 border border-[#e2f3f7] shadow-sm flex flex-col justify-between min-h-[340px]">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Patient Review Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic mb-8">
                &ldquo;{currentReview.review}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-cyan-100/70">
              {/* Patient Profile */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-slate-200 flex-shrink-0">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1c1549] text-base leading-tight">
                    {currentReview.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {currentReview.location} • <span className="text-[#009eb8]">{currentReview.treatment}</span>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx
                        ? "w-6 bg-[#372379]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Jump to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Before & After Smile Transformation Result */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <BeforeAfterSlider
              beforeImage="/images/teeth-before.jpg"
              afterImage="/images/teeth-after.jpg"
              beforeLabel="Before"
              afterLabel="After"
              treatmentTag="Teeth Whitening Result"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

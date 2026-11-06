"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface PatientReview {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
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
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Kalyani Nagar",
    avatar: "/images/patient-priya.jpg",
    rating: 5,
    review:
      "I was terrified of getting a root canal done after past trauma. Dr. Gayatri changed everything. Absolutely zero pain throughout the entire procedure! Highly recommend for gentle dental care.",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    location: "Kharadi, Pune",
    avatar: "/images/patient-priya.jpg",
    rating: 5,
    review:
      "Best pediatric dentist experience for my 6-year-old son! Dr. Gayatri was so calm and playful that he actually enjoyed his tooth filling. The clinic hygiene is unmatched.",
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
    <section id="patient-stories" className="py-14 lg:py-20 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Arrows */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              PATIENT STORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold text-[#1d174e]">
              Real Smiles, Real Stories
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="w-8 h-8 rounded-full border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-600 flex items-center justify-center transition-all shadow-2xs"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-8 h-8 rounded-full border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-700 hover:text-cyan-600 flex items-center justify-center transition-all shadow-2xs"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Content: Left Review Card, Right Before/After Result */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: Review Card matching Reference 1 layout */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5f4f7] shadow-sm flex flex-col justify-between min-h-[300px]">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Patient Review Text */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                &ldquo;{currentReview.review}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {/* Patient Profile */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm relative bg-slate-200 flex-shrink-0">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#1d174e] leading-tight">
                    — {currentReview.name}, {currentReview.location}
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx
                        ? "w-4 bg-[#38247b]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Jump to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Before & After Smile Transformation Result */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5f4f7] shadow-sm flex flex-col items-center justify-center min-h-[290px]">
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

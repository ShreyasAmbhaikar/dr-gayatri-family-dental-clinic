"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WaveDivider from "@/components/ui/WaveDivider";

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
  date: string;
}

const REVIEWS_DATA: PatientReview[] = [
  {
    id: 1,
    name: "Priya S.",
    location: "Hadapsar, Pune",
    avatar: "/images/patient-priya.jpg",
    initials: "PS",
    avatarBg: "from-rose-400 to-pink-500",
    treatment: "Routine Cleaning & Preventive Care",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Dr. Gayatri is very patient and explains everything so well. The clinic is clean, modern, and extremely friendly. My whole family visits here and we always have a gentle, comfortable experience without any anxiety.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Kalyani Nagar, Pune",
    initials: "RV",
    avatarBg: "from-[#38247b] to-[#5b3ebf]",
    treatment: "Single-Sitting Root Canal",
    rating: 5,
    date: "1 month ago",
    review:
      "I was terrified of getting a root canal done after past dental trauma elsewhere. Dr. Gayatri completely changed my perspective. Absolutely zero pain throughout the entire procedure! Highly recommend for anxiety-free dental care.",
  },
  {
    id: 3,
    name: "Ananya Deshmukh",
    location: "Kharadi, Pune",
    initials: "AD",
    avatarBg: "from-[#009eb8] to-[#0ea5e9]",
    treatment: "Pediatric Dentistry (Son, 6 yrs)",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Best pediatric dentist experience for my 6-year-old son! Dr. Gayatri was so calm and playful that he actually enjoyed his tooth filling. The clinic hygiene and warmth are truly unmatched.",
  },
  {
    id: 4,
    name: "Amit Kulkarni",
    location: "Amanora Park Town, Pune",
    initials: "AK",
    avatarBg: "from-emerald-500 to-teal-600",
    treatment: "Dental Implant & Ceramic Crown",
    rating: 5,
    date: "2 months ago",
    review:
      "Got an implant placed by Dr. Gayatri. The 3D scan planning and painless local anesthesia made the entire procedure seamless. Chewing feels completely natural now. Truly world-class dental expertise right in Amanora.",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Magarpatta City, Pune",
    initials: "MJ",
    avatarBg: "from-amber-500 to-orange-500",
    treatment: "Clear Aligners (Teeth Straightening)",
    rating: 5,
    date: "1 month ago",
    review:
      "Completed my clear aligner treatment for crowded front teeth. Dr. Gayatri guided me through every tray change. The results exceeded my expectations and my smile is now perfectly straight and confident!",
  },
];

export default function PatientStoriesSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-sliding every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS_DATA[activeReviewIndex];

  return (
    <section
      id="patient-stories"
      className="relative scroll-mt-20 pt-28 pb-32 sm:pt-36 sm:pb-40 overflow-hidden"
    >
      {/* Top and Bottom Waves with proper clearance */}
      <WaveDivider position="top" flip className="h-20 sm:h-24 opacity-80" />
      <WaveDivider position="bottom" className="h-20 sm:h-28" />

      <div className="page-container relative z-10">
        {/* Left and Right Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Trust signals, and Controls */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 shadow-xs mb-3.5">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-[12px] font-semibold text-navy">
                4.9 / 5 Rating on Google • 250+ Happy Smiles
              </span>
            </div>

            <SectionHeading
              eyebrow="Patient Stories"
              title="Real Smiles, Real Stories"
              titleClassName="text-[30px] sm:text-[36px] lg:text-[40px]"
            />

            <p className="text-body text-[15px] sm:text-[16px] leading-relaxed mt-4 mb-6 max-w-md">
              Read authentic experiences from families and working professionals across Hadapsar who trust Dr. Gayatri&apos;s gentle, anxiety-free care.
            </p>

            {/* Quick trust feature tags */}
            <div className="flex flex-col gap-2.5 mb-8 w-full max-w-sm">
              <div className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700 bg-white/70 rounded-xl px-3.5 py-2 border border-slate-200/60">
                <HeartHandshake className="w-4 h-4 text-teal flex-shrink-0" />
                <span>100% Gentle & Anxiety-Free Dentistry</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] font-medium text-slate-700 bg-white/70 rounded-xl px-3.5 py-2 border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0" />
                <span>10+ Years of Clinical Excellence in Pune</span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prevReview}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-teal text-navy hover:text-teal flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Previous patient story"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-1.5">
                {REVIEWS_DATA.map((review, idx) => (
                  <button
                    type="button"
                    key={review.id}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeReviewIndex === idx ? "w-6 bg-teal" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Show review ${idx + 1}`}
                    aria-current={activeReviewIndex === idx}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextReview}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-teal text-navy hover:text-teal flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
                aria-label="Next patient story"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <span className="text-[12px] font-semibold text-slate-400 ml-1">
                0{activeReviewIndex + 1} / 0{REVIEWS_DATA.length}
              </span>
            </div>
          </div>

          {/* Right Column: Single Auto-sliding Testimonial Card */}
          <div
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <figure className="glass-card rounded-[28px] p-7 sm:p-10 relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(29,23,78,0.18)] border border-slate-100 flex flex-col justify-between h-[360px] sm:h-[350px] lg:h-[340px]">
              {/* Subtle watermark quote icon */}
              <Quote className="absolute right-6 bottom-6 w-28 h-28 text-cyan-100/35 -rotate-12 pointer-events-none -z-0" />

              <div className="relative z-10">
                {/* Top Patient Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    {currentReview.avatar ? (
                      <div className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 flex-shrink-0">
                        <Image
                          src={currentReview.avatar}
                          alt={currentReview.name}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr ${currentReview.avatarBg} text-white font-bold text-xl flex items-center justify-center border-2 border-white shadow-md flex-shrink-0`}
                        aria-hidden="true"
                      >
                        {currentReview.initials}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <figcaption className="text-[16px] font-bold text-navy">
                          {currentReview.name}
                        </figcaption>
                        <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="w-3 h-3 text-teal" />
                          <span>Verified</span>
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-500 font-medium">
                        {currentReview.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <div className="flex items-center gap-0.5" aria-label={`${currentReview.rating} out of 5 stars`}>
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11.5px] font-semibold text-teal bg-cyan-50 border border-teal/20 px-2.5 py-0.5 rounded-full">
                      {currentReview.treatment}
                    </span>
                  </div>
                </div>

                {/* Review Text with Key for Smooth Animation and line clamp to prevent overflow */}
                <blockquote
                  key={currentReview.id}
                  className="text-body text-[15px] sm:text-[16.5px] leading-relaxed font-normal animate-in fade-in duration-300 line-clamp-4"
                >
                  &ldquo;{currentReview.review}&rdquo;
                </blockquote>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-400">
                <span>Google Verified Review</span>
                <span>Posted {currentReview.date}</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

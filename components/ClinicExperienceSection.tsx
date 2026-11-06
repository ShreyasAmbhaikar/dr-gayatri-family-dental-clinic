"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Play, X, Shield, Clock } from "lucide-react";

export default function ClinicExperienceSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="clinic" className="py-14 lg:py-22 bg-[#f4fbfe] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              A MODERN DENTAL EXPERIENCE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-[#1d174e] mb-4">
              Designed for <br />
              <span className="text-[#1d174e]">Your Comfort</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-md">
              Our clinic is designed to make every visit a calm and pleasant experience with modern facilities, advanced safety standards and a warm, friendly atmosphere.
            </p>

            <button
              onClick={() => setShowVideoModal(true)}
              className="group inline-flex items-center gap-2 bg-[#009eb8] hover:bg-[#00879e] text-white text-[13.5px] font-semibold px-6 py-3 rounded-full shadow-md shadow-cyan-900/15 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Take a Virtual Tour</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Operatory Image Capsule & Floating Pill Badge */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              {/* Wide Capsule Framed Photo */}
              <div className="relative rounded-t-[130px] sm:rounded-t-[160px] rounded-b-[45px] sm:rounded-b-[55px] overflow-hidden border-4 border-white shadow-xl shadow-cyan-950/10 aspect-[16/10] bg-slate-100 group">
                <Image
                  src="/images/clinic-operatory.jpg"
                  alt="State-of-the-art sterile dental operatory at Dr. Gayatri's Family Dental Clinic in Pune"
                  fill
                  priority
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 580px"
                />

                {/* Subtle Play Overlay */}
                <div
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/25 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/95 group-hover:bg-white text-[#009eb8] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform pl-0.5">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge on Bottom Right matching Reference 1 */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md py-2.5 px-4 sm:px-5 rounded-full shadow-lg border border-cyan-100 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-cyan-50 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11.5px] sm:text-xs font-bold text-[#1d174e] leading-tight">
                  A Calm Space <br className="sm:hidden" />
                  <span className="font-normal text-slate-500">for Healthier Smiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1d174e]">
                  Dr. Gayatri&apos;s Clinic Experience
                </h3>
                <p className="text-xs text-slate-500">
                  Clean operatories, advanced dental delivery units, and sterilization safety.
                </p>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner flex flex-col items-center justify-center text-white p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold mb-1.5">Hospital-Grade Sterilization &amp; Comfort</h4>
              <p className="text-xs text-slate-300 max-w-sm">
                Our clinic adheres strictly to international sterilization protocols with vacuum Class-B autoclaving, ultrasonic scaling, and HEPA air purification.
              </p>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-[#38247b] hover:bg-[#2c1a63] text-white px-5 py-2 rounded-full text-xs font-semibold"
              >
                Close Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Check, Play, X, Shield, Clock } from "lucide-react";

export default function ClinicExperienceSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="clinic" className="py-20 lg:py-28 bg-[#f6fcfe] relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-100/50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              A MODERN DENTAL EXPERIENCE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e] mb-6">
              Designed for <br />
              <span className="text-[#009eb8]">Your Comfort</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Our clinic is designed to make every visit a calm and pleasant experience with modern facilities, advanced safety standards and a warm, friendly atmosphere.
            </p>

            <button
              onClick={() => setShowVideoModal(true)}
              className="group inline-flex items-center gap-2.5 bg-[#00a4c4] hover:bg-[#008ba3] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-900/15 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Take a Virtual Tour</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Operatory Image Capsule & Floating Pill Badge */}
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-[560px]">
              {/* Capsule Shaped Image Frame */}
              <div className="relative rounded-t-[160px] rounded-b-[60px] overflow-hidden border-4 border-white shadow-2xl shadow-cyan-950/15 aspect-[16/10] bg-slate-100 group">
                <Image
                  src="/images/clinic-operatory.jpg"
                  alt="State-of-the-art sterile dental operatory at Dr. Gayatri's Family Dental Clinic in Pune"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 560px"
                />

                {/* Video Play Overlay Trigger Button */}
                <div
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-[#009eb8] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform pl-0.5">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge on Bottom Right */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md py-3 px-5 rounded-full shadow-xl border border-cyan-100 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-cyan-50 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1c1549] leading-tight">
                  A Calm Space <br className="sm:hidden" />
                  <span className="font-medium text-slate-500">for Healthier Smiles</span>
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
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1c1549]">
                  Dr. Gayatri&apos;s Clinic Experience
                </h3>
                <p className="text-xs text-slate-500">
                  A walk through our sterilization protocols, calming operatories, and modern imaging.
                </p>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Preview Embed */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner flex flex-col items-center justify-center text-white p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-2">Hospital-Grade Sterilization &amp; Comfort</h4>
              <p className="text-xs text-slate-300 max-w-md">
                Our clinic adheres to international OSHA and CDC infection control protocols with Class B autoclave sterilization, contactless water filtration, and HEPA air purification.
              </p>
              <div className="flex items-center gap-6 mt-6 text-xs text-cyan-300">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 100% Sterile Instruments
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Zero Waiting Time
                </span>
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-[#372379] hover:bg-[#2c1a63] text-white px-6 py-2.5 rounded-full text-xs font-semibold"
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

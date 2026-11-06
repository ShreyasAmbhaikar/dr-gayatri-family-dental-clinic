"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Play, X, ShieldCheck, Armchair, Activity } from "lucide-react";

export default function ClinicExperienceSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="clinic" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#eef8fb] via-[#f8fdfe] to-white relative overflow-hidden">
      {/* Background Ambient Glows & Subtle Waves */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Heading, Accent Bar, Story & 3 Feature Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start pt-2">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#009eb8] uppercase block mb-3">
              A MODERN DENTAL EXPERIENCE
            </span>

            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.14] font-bold text-[#1d174e] mb-4">
              Designed for <br />
              <span className="text-[#009eb8]">Your Comfort &amp; Safety</span>
            </h2>

            {/* 3-segment color accent bar */}
            <div className="h-[3.5px] w-14 rounded-full mb-6 flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>

            <p className="text-[#556070] text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-lg font-normal">
              Our clinic in Amanora Park Town is meticulously designed to make every visit calm and pleasant. From computerized rotary instruments to international sterilization, we prioritize your peace of mind.
            </p>

            {/* 3 Clinic Key Highlight Cards */}
            <div className="space-y-3.5 w-full max-w-lg mb-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-2xs hover:border-cyan-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#1d174e]">Hospital-Grade Sterilization</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Class-B vacuum autoclave &amp; strict 7-step sterilization protocols for 100% patient safety.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-2xs hover:border-cyan-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#38247b] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Armchair className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#1d174e]">Ergonomic Memory-Foam Loungers</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Contoured plush seating designed to keep neck and lumbar stress-free throughout your procedure.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-slate-100 shadow-2xs hover:border-cyan-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#087f94] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Activity className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-[#1d174e]">Low-Radiation Digital Imaging</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                    Instant chairside radiographs with up to 90% lower radiation exposure than traditional film.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowVideoModal(true)}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#009eb8] to-[#00b4d8] hover:from-[#00879e] hover:to-[#009eb8] text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full shadow-md shadow-cyan-950/15 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Take a Virtual Tour</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Operatory Image Capsule with Layered Halo & Floating Pill Badge */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px]">
              {/* Soft Aqua Background Halo */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#9fe4f1]/50 via-[#cbf2f8]/40 to-white rounded-t-[140px] sm:rounded-t-[170px] rounded-b-[50px] sm:rounded-b-[60px] -z-10 blur-md" />

              {/* Wide Capsule Framed Photo */}
              <div className="relative rounded-t-[130px] sm:rounded-t-[160px] rounded-b-[45px] sm:rounded-b-[55px] overflow-hidden border-4 border-white shadow-2xl shadow-cyan-950/15 aspect-[16/10.5] bg-slate-100 group">
                <Image
                  src="/images/clinic-operatory.jpg"
                  alt="State-of-the-art sterile dental operatory at Dr. Gayatri's Family Dental Clinic in Pune"
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 560px"
                />

                {/* Subtle Interactive Play Overlay */}
                <div
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 bg-slate-900/15 group-hover:bg-slate-900/25 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-cyan-400/30 animate-ping opacity-75" />
                    <div className="w-14 h-14 rounded-full bg-white/95 group-hover:bg-white text-[#009eb8] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform pl-0.5">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge on Bottom Right */}
              <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md py-3 px-5 sm:px-6 rounded-full shadow-xl border border-cyan-100 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-cyan-50 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-[12.5px] font-bold text-[#1d174e] leading-tight">
                  A Calm Space <br className="sm:hidden" />
                  <span className="font-normal text-slate-500">for Healthier Smiles ♡</span>
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
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
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
                className="bg-[#38247b] hover:bg-[#2c1a63] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
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

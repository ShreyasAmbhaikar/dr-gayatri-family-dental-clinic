"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, ShieldCheck, Cpu, Smile } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Portrait with Cursive Text & Curved Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Organic Soft Turquoise Background Wave Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#98e2ef] via-[#cbf2f8] to-[#edfbfd] rounded-[50px] transform -rotate-2 -z-10 shadow-md" />

              {/* Doctor Image Container */}
              <div className="relative rounded-[42px] overflow-hidden border-4 border-white shadow-2xl shadow-cyan-900/10 aspect-[4/5] bg-slate-100">
                <Image
                  src="/images/dr-gayatri.jpg"
                  alt="Dr. Gayatri - Chief Dental Surgeon & Family Dentist in Viman Nagar, Pune"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              {/* Handwritten Script Accent Overlaid */}
              <div className="absolute top-8 -left-6 sm:-left-10 z-20 transform -rotate-12 select-none pointer-events-none">
                <span className="font-script text-3xl sm:text-4xl text-[#007b92] drop-shadow-sm font-bold tracking-wide">
                  Care, <br />
                  Compassion, <br />
                  <span className="text-[#1c1549]">Confidence ♡</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, CTA & 4 Badges */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              ABOUT US
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e] mb-6">
              Your Partner in <br />
              <span className="text-[#372379]">Lifelong Oral Health</span>
            </h2>

            {/* Narrative text from reference */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              At Dr. Gayatri&apos;s Family Dental Clinic, we combine advanced technology with a compassionate approach to provide high-quality and painless dental care for you and your family. Our focus is on building long-term relationships and helping you achieve healthy, confident smiles at every stage of life.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 bg-[#372379] hover:bg-[#2c1a63] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 4 Feature Badges in Row matching reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-100 w-full">
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-cyan-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-[#1c1549] leading-snug">
                  Personalized <br /> Care Plans
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-cyan-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-[#1c1549] leading-snug">
                  Hygienic &amp; Safe <br /> Environment
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-cyan-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-3">
                  <Cpu className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-[#1c1549] leading-snug">
                  Modern <br /> Technology
                </span>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-cyan-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-3">
                  <Smile className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-[#1c1549] leading-snug">
                  Comfortable <br /> Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

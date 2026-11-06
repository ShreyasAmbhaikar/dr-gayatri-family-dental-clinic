"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#1c0e44] text-white overflow-hidden pt-8 sm:pt-10 pb-8 -mt-[1px]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-12 border-b border-white/10 items-start">
          {/* Column 1: Brand Logo, Rainbow Line & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo with Navy Shield & 5-Color Rainbow Line */}
            <Link href="#home" className="flex items-center gap-3 mb-4 group">
              <div className="w-11 h-11 rounded-full bg-[#140d3a] border-2 border-cyan-400 p-[2px] shadow-sm flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-tight">
                  Dr. Gayatri&apos;s
                </span>
                <span className="text-[10px] font-bold tracking-wider text-cyan-300 uppercase">
                  Family Dental Clinic
                </span>
                {/* 5-Color Rainbow Gradient Bar */}
                <div className="h-[2px] w-28 rounded-full mt-1 bg-gradient-to-r from-red-500 via-amber-400 via-green-400 via-cyan-400 to-purple-500" />
              </div>
            </Link>

            <p className="text-[#a89fc7] text-xs sm:text-[13px] leading-relaxed max-w-sm mb-4">
              Gentle, modern and personalized dental care for you and your family. Providing pain-free solutions across all age groups.
            </p>
          </div>

          {/* Column 2: List of Services (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-cyan-300">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#a89fc7]">
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  Root Canal Treatment
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  Pediatric Dentistry
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-cyan-300 transition-colors">
                  Braces &amp; Aligners
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-cyan-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#a89fc7]">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About Dr. Gayatri
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-cyan-300 transition-colors">
                  Smile Journey
                </a>
              </li>
              <li>
                <a href="#clinic-experience" className="hover:text-cyan-300 transition-colors">
                  Clinic Tour
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-300 transition-colors">
                  Patient Stories
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-cyan-300 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Clinic Details & Map Card (3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1 text-cyan-300">
              Clinic Location &amp; Hours
            </h3>

            {/* Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
              <p className="text-[#a89fc7] text-xs leading-relaxed">
                Amanora Park Town, Hadapsar, Pune - 411028, Maharashtra, India
              </p>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
              <p className="text-[#a89fc7] text-xs leading-relaxed">
                Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment
              </p>
            </div>

            {/* Styled Map Card with Direct Google Maps Link */}
            <div className="relative w-full rounded-[18px] overflow-hidden bg-white p-1.5 shadow-xl border border-white/20 mt-1 group">
              <div className="relative w-full h-32 rounded-[14px] overflow-hidden bg-[#e5f4f8]">
                {/* Styled Vector Map Canvas */}
                <svg viewBox="0 0 340 140" className="w-full h-full object-cover" preserveAspectRatio="none">
                  <rect width="340" height="140" fill="#f4f7f6" />
                  <path d="M0 30 L340 40 M0 90 L340 80 M50 0 L40 140 M270 0 L280 140 M150 0 L140 140" stroke="#ffffff" strokeWidth="4" />
                  <path d="M0 60 Q170 70 340 50" stroke="#ffffff" strokeWidth="6" />
                  <path d="M-20 100 C100 90 220 120 360 90" stroke="#fde68a" strokeWidth="4" />
                  <path d="M-10 15 Q120 30 240 5 T360 20" stroke="#bae6fd" strokeWidth="8" fill="none" opacity="0.8" />
                  <rect x="70" y="45" width="25" height="12" rx="2" fill="#e2e8f0" />
                  <rect x="170" y="25" width="35" height="15" rx="2" fill="#e2e8f0" />
                  <rect x="165" y="55" width="40" height="20" rx="2" fill="#e2e8f0" />
                </svg>

                {/* Location Marker */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md border border-slate-200/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                  <span className="text-[9.5px] font-bold text-[#1d174e] whitespace-nowrap">
                    Dr. Gayatri&apos;s Family Dental Clinic
                  </span>
                </div>

                {/* Get Directions Button */}
                <a
                  href="https://maps.google.com/?q=Dr.+Gayatri+Family+Dental+Clinic+Amanora+Park+Town+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 bg-[#009eb8] hover:bg-[#008ba3] text-white text-[10.5px] font-bold px-3 py-1.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Exactly "Developed with ❤️ by QuantumReach Media" */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a098c7]">
          <p>© 2026 Dr. Gayatri&apos;s Family Dental Clinic. All Rights Reserved.</p>
          
          {/* Exactly matching Image Attachment 2 */}
          <div className="inline-flex items-center gap-1.5 text-xs text-[#a098c7]">
            <span>Developed with</span>
            <span className="text-[#a85a48] text-sm">❤️</span>
            <span>by</span>
            <span className="font-bold text-white tracking-wide">QuantumReach Media</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#160f3e] text-white overflow-hidden pt-16 pb-8">
      {/* Wave shape top transition */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-cyan-500/20 via-teal-400/30 to-indigo-500/20 blur-md pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#160f3e] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-tight">
                  Dr. Gayatri&apos;s
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                  Family Dental Clinic
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
              Gentle, modern and personalized dental care for you and your family in Viman Nagar, Pune.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors"
                aria-label="YouTube channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Location & Hours (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Location */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
                  Our Location
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Amorea Park Town, <br />
                  Viman Nagar, Pune - 411014, <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            {/* Clinic Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
                  Clinic Hours
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-medium text-white">Mon - Sat:</span> 9:00 AM - 8:00 PM <br />
                  <span className="font-medium text-white">Sunday:</span> By Appointment
                </p>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">
                  Direct Line
                </h3>
                <a
                  href="tel:+919876543210"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Interactive Map Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-white rounded-3xl p-4 sm:p-5 text-slate-800 shadow-xl border border-white/20 relative overflow-hidden group">
              {/* Map Preview Graphic */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4">
                {/* Stylized Map Canvas SVG */}
                <svg viewBox="0 0 300 180" className="w-full h-full object-cover">
                  {/* Road Network Background */}
                  <rect width="300" height="180" fill="#f1f5f9" />
                  <path d="M0 60 Q100 40 200 90 T300 80" stroke="#cbd5e1" strokeWidth="16" fill="none" />
                  <path d="M80 0 Q100 100 120 180" stroke="#cbd5e1" strokeWidth="14" fill="none" />
                  <path d="M180 0 Q160 80 250 180" stroke="#cbd5e1" strokeWidth="12" fill="none" />
                  <path d="M0 130 H300" stroke="#e2e8f0" strokeWidth="10" fill="none" />

                  {/* Parks / Green Areas in Viman Nagar */}
                  <rect x="20" y="80" width="45" height="35" rx="6" fill="#dcfce7" />
                  <rect x="220" y="20" width="60" height="40" rx="8" fill="#dcfce7" />
                  <text x="230" y="44" fontSize="8" fill="#15803d" fontWeight="bold">Symbiosis</text>
                  <text x="25" y="100" fontSize="8" fill="#15803d" fontWeight="bold">Joggers Park</text>

                  {/* Clinic Location Pin */}
                  <g transform="translate(140, 75)">
                    {/* Pulsing ring */}
                    <circle cx="10" cy="10" r="16" fill="#ef4444" opacity="0.2" className="animate-ping" />
                    {/* Pin Marker */}
                    <path
                      d="M10 0C4.5 0 0 4.5 0 10C0 17 10 26 10 26C10 26 20 17 20 10C20 4.5 15.5 0 10 0Z"
                      fill="#ef4444"
                    />
                    <circle cx="10" cy="9" r="4" fill="#ffffff" />
                  </g>
                </svg>

                {/* Location Tooltip Pill */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-xs border border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Dr. Gayatri&apos;s Clinic</span>
                </div>
              </div>

              {/* Action Button: Get Directions */}
              <a
                href="https://maps.google.com/?q=Amorea+Park+Town+Viman+Nagar+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00a4c4] hover:bg-[#008ba3] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-full transition-all duration-200 shadow-md group-hover:shadow-lg"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; 2026 Dr. Gayatri&apos;s Family Dental Clinic. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

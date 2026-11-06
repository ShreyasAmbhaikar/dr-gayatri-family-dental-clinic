"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3"
          : "bg-white/90 backdrop-blur-xs py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Logo matching Reference Image 1 exactly */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Dr. Gayatri's Family Dental Clinic Home"
        >
          {/* Circular Navy Shield with Tooth & Cyan Medical Cross */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
            <svg
              viewBox="0 0 48 48"
              className="w-full h-full drop-shadow-xs"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dark Navy Circular Badge */}
              <circle cx="24" cy="24" r="23" fill="#1d174e" />

              {/* White Stylized Tooth Silhouette */}
              <path
                d="M24 10 C18.2 10 14 13.5 14 19 C14 23.8 16.5 27.5 17.6 32.5 C18.2 35.2 19.6 37.8 21.2 37.8 C22.8 37.8 23.3 35.2 24 32.5 C24.7 35.2 25.2 37.8 26.8 37.8 C28.4 37.8 29.8 35.2 30.4 32.5 C31.5 27.5 34 23.8 34 19 C34 13.5 29.8 10 24 10 Z"
                fill="white"
              />

              {/* Inner subtle vertical tooth cleft line */}
              <path
                d="M24 16 V24"
                stroke="#1d174e"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.3"
              />

              {/* Vibrant Cyan Medical Cross Badge on Top-Left Shoulder */}
              <circle cx="15.5" cy="15.5" r="6.5" fill="#00b4d8" stroke="#ffffff" strokeWidth="1.5" />
              {/* Crisp White Cross */}
              <path
                d="M15.5 12 V19 M12 15.5 H19"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Clinic Name & Multi-Color Accent Stripe Underline */}
          <div className="flex flex-col">
            <span className="font-serif text-[19px] sm:text-[21px] font-bold tracking-tight text-[#1d174e] leading-tight">
              Dr. Gayatri&apos;s
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#1d174e] uppercase leading-tight mt-0.5">
              Family Dental Clinic
            </span>
            {/* The 5-color accent bar directly under text matching Reference 1 */}
            <div className="h-[2.5px] w-full max-w-[124px] rounded-full mt-1 bg-gradient-to-r from-[#f59e0b] via-[#ec4899] via-[#8b5cf6] via-[#00b4d8] to-[#10b981]" />
          </div>
        </Link>

        {/* Desktop Navigation Links with Active 'Home' Pill Indicator */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-[13.5px] font-medium"
          aria-label="Main Navigation"
        >
          {/* Active Home item */}
          <Link
            href="#home"
            className="text-[#38247b] font-semibold relative py-1 flex flex-col items-center"
          >
            <span>Home</span>
            <span className="w-5 h-[2.5px] bg-[#38247b] rounded-full mt-0.5" />
          </Link>

          <Link
            href="#about"
            className="text-slate-600 hover:text-[#009eb8] transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="#treatments"
            className="text-slate-600 hover:text-[#009eb8] transition-colors py-1"
          >
            Treatments
          </Link>
          <Link
            href="#patient-stories"
            className="text-slate-600 hover:text-[#009eb8] transition-colors py-1"
          >
            Patient Stories
          </Link>
          <Link
            href="#clinic"
            className="text-slate-600 hover:text-[#009eb8] transition-colors py-1"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="text-slate-600 hover:text-[#009eb8] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Header Action Button - Royal Purple Pill */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13px] font-semibold px-5 sm:px-6 py-2.5 rounded-full shadow-md shadow-indigo-950/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-cyan-600 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-100 px-5 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-3.5 text-base font-medium text-slate-700">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-[#38247b] font-semibold"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#009eb8]"
            >
              About
            </Link>
            <Link
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#009eb8]"
            >
              Treatments
            </Link>
            <Link
              href="#patient-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#009eb8]"
            >
              Patient Stories
            </Link>
            <Link
              href="#clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#009eb8]"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#009eb8]"
            >
              Contact
            </Link>
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#38247b] text-white py-3 rounded-full font-semibold text-sm shadow-md"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919876543210"
              className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-2.5 rounded-full font-medium text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-[#009eb8]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

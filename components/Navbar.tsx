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
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Dr. Gayatri's Family Dental Clinic Home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#251a5c] to-[#009eb8] p-[2px] shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#251a5c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-[21px] font-bold tracking-tight text-[#1d174e] leading-tight">
              Dr. Gayatri&apos;s
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#009eb8] uppercase">
              Family Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          <Link
            href="#home"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="#treatments"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            Treatments
          </Link>
          <Link
            href="#patient-stories"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            Patient Stories
          </Link>
          <Link
            href="#clinic"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#009eb8] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-md shadow-indigo-950/15 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
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
              className="py-1.5 hover:text-[#009eb8]"
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

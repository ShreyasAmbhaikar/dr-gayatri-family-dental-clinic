"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone, ShieldCheck } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          aria-label="Dr. Gayatri's Family Dental Clinic Home"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#251a5c] to-[#3f2b8a] p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#2d1f6e]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized Tooth Icon */}
                <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1c1549] leading-tight group-hover:text-[#00a4c4] transition-colors">
              Dr. Gayatri&apos;s
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Family Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 text-[14.5px] font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          <Link
            href="#home"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            About
          </Link>
          <Link
            href="#treatments"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Treatments
          </Link>
          <Link
            href="#patient-stories"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Patient Stories
          </Link>
          <Link
            href="#clinic"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#00a4c4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a4c4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2.5 bg-[#372379] hover:bg-[#2c1a63] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-md shadow-indigo-950/15 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#372379]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-100 px-5 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4] border-b border-slate-50"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4] border-b border-slate-50"
            >
              About Dr. Gayatri
            </Link>
            <Link
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4] border-b border-slate-50"
            >
              Treatments
            </Link>
            <Link
              href="#patient-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4] border-b border-slate-50"
            >
              Patient Stories
            </Link>
            <Link
              href="#clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4] border-b border-slate-50"
            >
              Clinic Gallery
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00a4c4]"
            >
              Contact & Location
            </Link>
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#372379] text-white py-3 rounded-full font-semibold shadow-md"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919876543210"
              className="w-full inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 py-3 rounded-full font-medium hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-[#00a4c4]" />
              <span>Call Clinic Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

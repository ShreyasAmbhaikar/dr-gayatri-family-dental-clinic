"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { LogoMark, RainbowBar } from "@/components/ui/icons";
import { CATEGORY_ORDER, TREATMENTS, treatmentPath } from "@/lib/treatments/summary";
import { SITE } from "@/lib/site";

// Every service, grouped by category, for the Treatments mega-menu and the mobile menu.
const MENU_GROUPS = CATEGORY_ORDER.map((category) => ({
  category,
  items: TREATMENTS.filter((t) => t.category === category),
})).filter((g) => g.items.length > 0);

// Three balanced columns for the desktop mega menu (each column lists its categories top to bottom).
const MEGA_COLUMNS = [
  ["Restorative"],
  ["Orthodontic", "Pediatric", "Preventive"],
  ["Surgical", "Cosmetic", "Emergency"],
].map((cats) => cats.map((c) => MENU_GROUPS.find((g) => g.category === c)).filter((g): g is (typeof MENU_GROUPS)[number] => Boolean(g)));

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = pathname === "/" || pathname === "";
  const isTreatmentsPage = Boolean(pathname?.startsWith("/treatments"));
  const isAboutPage = Boolean(pathname?.startsWith("/about"));
  const isGalleryPage = Boolean(pathname?.startsWith("/gallery"));
  const isContactPage = Boolean(pathname?.startsWith("/contact"));

  // Individual treatment pages (e.g. /treatments/root-canal-treatment, /treatments/dental-implants)
  // Have a dark hero banner at the top, so header uses a solid static color matching image 2.
  const isIndividualTreatment = Boolean(
    pathname && pathname.startsWith("/treatments/") && pathname !== "/treatments" && pathname !== "/treatments/"
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real, crawlable pages.
  const navLinks = [
    { href: "/", label: "Home", isActive: isHomePage },
    { href: "/about", label: "About Us", isActive: isAboutPage },
    { href: "/treatments", label: "Treatments", isActive: isTreatmentsPage, isDropdown: true },
    { href: "/gallery", label: "Gallery", isActive: isGalleryPage },
    { href: "/contact", label: "Contact Us", isActive: isContactPage },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setTreatmentsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setTreatmentsDropdownOpen(false);
    }, 260);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isIndividualTreatment
          ? "bg-white border-b border-slate-100 shadow-[0_4px_20px_-10px_rgba(29,23,78,0.12)] py-2.5 sm:py-3"
          : scrolled || mobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(29,23,78,0.25)] py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="page-container flex items-center justify-between">
        <Link
          href={isHomePage ? "#home" : "/"}
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Dr. Gayatri's Family Dental Clinic Home"
        >
          <LogoMark className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-[20px] sm:text-[22px] font-bold tracking-tight text-navy leading-none">
              Dr. Gayatri&apos;s
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-purple leading-tight mt-1">
              Family Dental Clinic
            </span>
            <RainbowBar className="w-full mt-1" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onFocus={handleMouseEnter}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setTreatmentsDropdownOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setTreatmentsDropdownOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    aria-haspopup="true"
                    aria-expanded={treatmentsDropdownOpen}
                    className={`relative py-1 flex items-center gap-1 transition-colors ${
                      link.isActive ? "text-navy font-semibold" : "text-slate-600 hover:text-teal"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        treatmentsDropdownOpen ? "rotate-180 text-teal" : link.isActive ? "text-navy" : "text-slate-400"
                      }`}
                    />
                    {link.isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[120%] h-[2px] rounded-full bg-purple" />
                    )}
                  </Link>

                  {/* Mega menu: every treatment, grouped by category */}
                  {treatmentsDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(960px,calc(100vw-2rem))] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="grid grid-cols-[250px_1fr] rounded-[24px] bg-white border border-slate-100 shadow-[0_28px_70px_-18px_rgba(29,23,78,0.35)] overflow-hidden">
                        {/* Intro column */}
                        <div className="flex flex-col p-7 bg-[linear-gradient(165deg,#e6f7fb_0%,#f3fbfd_70%,#ffffff_100%)] border-r border-slate-100">
                          <span className="text-[11px] font-semibold tracking-[0.24em] text-teal uppercase mb-2">Treatments</span>
                          <p className="font-serif font-bold text-navy text-[24px] leading-[1.15]">Complete care for the whole family</p>
                          <p className="mt-3 text-[13px] leading-relaxed text-body">
                            {TREATMENTS.length} treatments across {MENU_GROUPS.length} categories, all under one roof in Amanora Park Town.
                          </p>
                          <Link
                            href="/treatments"
                            onClick={() => setTreatmentsDropdownOpen(false)}
                            className="btn-primary-grad mt-5 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full h-11 px-4 text-white text-[12.5px] font-semibold hover:scale-[1.02] transition-transform"
                          >
                            Browse all treatments
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          <div className="mt-auto pt-6">
                            <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-body/70">Dental emergency?</p>
                            <a href={`tel:${SITE.phone}`} className="mt-1 inline-flex items-center gap-2 text-[14px] font-bold text-navy hover:text-teal transition-colors">
                              <Phone className="w-4 h-4 text-teal" />
                              {SITE.phoneDisplay}
                            </a>
                          </div>
                        </div>

                        {/* Category columns */}
                        <div className="grid grid-cols-3 gap-x-7 p-7">
                          {MEGA_COLUMNS.map((col, i) => (
                            <div key={i} className="flex flex-col gap-6">
                              {col.map((g) => (
                                <div key={g.category}>
                                  <p className="flex items-center gap-2 pb-2 mb-1.5 border-b border-slate-100 text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
                                    {g.category}
                                  </p>
                                  <ul>
                                    {g.items.map((t) => (
                                      <li key={t.slug}>
                                        <Link
                                          href={treatmentPath(t.slug)}
                                          onClick={() => setTreatmentsDropdownOpen(false)}
                                          className="group/item flex items-center justify-between gap-2 rounded-lg px-2.5 py-[7px] -mx-2.5 text-[13.5px] font-medium text-slate-700 hover:bg-cyan-50 hover:text-teal transition-colors"
                                        >
                                          <span>{t.name}</span>
                                          <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  link.isActive ? "text-navy font-semibold" : "text-slate-600 hover:text-teal"
                }`}
              >
                {link.label}
                {link.isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[130%] h-[2px] rounded-full bg-purple" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center">
          <Link
            href="/contact"
            className="group btn-primary-grad inline-flex items-center gap-2 text-white text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-teal focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-100 px-5 pt-3 pb-6 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col gap-3.5 text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 ${link.isActive ? "text-purple font-semibold" : "hover:text-teal"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pl-3 border-l-2 border-teal/40 mt-1 space-y-4">
              {MENU_GROUPS.map((g) => (
                <div key={g.category}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-coral mb-1.5">{g.category}</p>
                  <div className="grid gap-1.5">
                    {g.items.map((t) => (
                      <Link
                        key={t.slug}
                        href={treatmentPath(t.slug)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-semibold text-teal"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/treatments"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-navy"
              >
                View all treatments →
              </Link>
            </div>
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-grad w-full inline-flex items-center justify-center gap-2 text-white py-3 rounded-full font-semibold text-sm"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-2.5 rounded-full font-medium text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-teal" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

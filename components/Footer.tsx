"use client";

import Link from "next/link";
import { MapPin, Clock, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { LogoMark, RainbowBar } from "@/components/ui/icons";

import { SITE, whatsappLink } from "@/lib/site";
import { treatmentPath } from "@/lib/treatments/summary";

const MAPS_URL = SITE.mapsUrl;

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

// 2-grid layout with generous horizontal spacing between treatment columns
const FOOTER_TREATMENT_COLUMNS = [
  {
    category: "Restorative & Surgery",
    items: [
      { name: "Root Canal Treatment", slug: "root-canal-treatment" },
      { name: "Dental Implants", slug: "dental-implants" },
      { name: "Crowns & Bridges", slug: "crowns-and-bridges" },
      { name: "Dentures", slug: "dentures" },
      { name: "Tooth-Coloured Fillings", slug: "tooth-coloured-fillings" },
      { name: "Full Mouth Implants", slug: "full-mouth-implants" },
      { name: "Tooth Extraction", slug: "tooth-extraction" },
      { name: "Wisdom Tooth Removal", slug: "wisdom-tooth-removal" },
    ],
  },
  {
    category: "Preventive, Cosmetic & Ortho",
    items: [
      { name: "Teeth Cleaning & Polishing", slug: "teeth-cleaning" },
      { name: "Gum Disease Treatment", slug: "gum-treatment" },
      { name: "Dental Check-up & X-ray", slug: "dental-check-up-and-x-ray" },
      { name: "Laser Teeth Whitening", slug: "teeth-whitening" },
      { name: "Dental Veneers", slug: "dental-veneers" },
      { name: "Smile Makeover", slug: "smile-makeover" },
      { name: "Clear Aligners", slug: "clear-aligners" },
      { name: "Kids Dentistry", slug: "kids-dentistry" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative -mt-px text-white bg-[linear-gradient(180deg,#2b1c78_0%,#201460_40%,#160c48_100%)]"
    >
      <div className="page-container py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* 1. Brand & Contact Column (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-3.5 mb-2.5 group"
              aria-label="Dr. Gayatri's Dental Clinic Home"
            >
              <LogoMark inverted className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif text-[24px] sm:text-[26px] font-bold leading-none text-white tracking-tight">
                  Dr. Gayatri&apos;s
                </span>
                <span className="text-[14px] sm:text-[14.5px] text-white/95 leading-tight mt-1 font-medium">
                  Family Dental Clinic
                </span>
                <RainbowBar className="w-full mt-2" />
              </div>
            </Link>

            {/* Short, Concise Tagline & Description */}
            <p className="text-teal-bright text-[13px] font-semibold mt-2 tracking-wide">
              Gentle Care. Beautiful Smiles.
            </p>
            <p className="text-white/75 text-[12.5px] leading-relaxed max-w-[300px] mt-1.5">
              Gentle, personalised family dental care and advanced root canal therapy in Amanora Park Town, Hadapsar, Pune.
            </p>

            {/* Separate Dedicated Contact Block */}
            <div className="mt-4 pt-3.5 border-t border-white/10 w-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright mb-2">
                Contact Directly
              </p>
              <div className="space-y-2 text-[12.5px]">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-teal-bright transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-teal-bright/15 text-teal-bright flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">{SITE.phoneDisplay}</span>
                </a>
                <div>
                  <a
                    href={whatsappLink("Hello Dr. Gayatri's Clinic, I would like to enquire about your dental services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-[#25d366] transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-medium">Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Quick Links (lg:col-span-2) - Dot removed per user request */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-serif font-bold text-white text-[15px] mb-3.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[12.5px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/75 hover:text-teal-bright transition-colors"
                  >
                    <span className="text-teal-bright/60 group-hover:text-teal-bright group-hover:translate-x-0.5 transition-all text-[11px]">
                      ›
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. All Treatments in a Spacious 2-Grid (lg:col-span-4) - Dot removed per user request */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h3 className="font-serif font-bold text-white text-[15px] mb-3.5">
              Our Treatments
            </h3>
            <div className="w-full grid grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-4 text-[12.5px]">
              {FOOTER_TREATMENT_COLUMNS.map((col) => (
                <div key={col.category} className="flex flex-col">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-bright mb-2">
                    {col.category}
                  </p>
                  <ul className="space-y-1.5">
                    {col.items.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={treatmentPath(t.slug)}
                          className="text-white/75 hover:text-teal-bright transition-colors block py-0.5"
                        >
                          {t.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Generous spacing below Browse All Treatments link */}
            <div className="mt-6 pt-1">
              <Link
                href="/treatments"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-teal-bright hover:underline"
              >
                <span>Browse all 22 treatments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. Clickable Location & Table-wise Clinical Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col text-left">
            {/* Clickable Location Card */}
            <div>
              <h3 className="font-serif font-bold text-white text-[15px] flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-teal-bright flex-shrink-0" />
                <span>Our Location</span>
              </h3>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view Dr. Gayatri's Family Dental Clinic on Google Maps"
                className="group block p-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-teal-bright/40 transition-all text-left"
              >
                <p className="text-[12px] text-white/85 leading-relaxed group-hover:text-white transition-colors">
                  Shop No. 18, Ambrosia Alley, 17/18, Tupe Patil Rd, near Kotak Mahindra Bank, Amanora Park Town, Hadapsar, Pune 411028
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-teal-bright group-hover:underline">
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

            {/* Table-wise Clinical Hours */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <h3 className="font-serif font-bold text-white text-[14px] flex items-center gap-2 mb-2.5">
                <Clock className="w-4 h-4 text-teal-bright flex-shrink-0" />
                <span>Clinical Hours</span>
              </h3>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.04]">
                <table className="w-full text-[12px] border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.06] text-white/70 text-[11px] font-semibold tracking-wider">
                      <th className="text-left py-1.5 px-3">Days</th>
                      <th className="text-left py-1.5 px-3">Timings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.07] text-white/80">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-teal-bright align-top whitespace-nowrap">
                        Mon – Sat
                      </td>
                      <td className="py-2.5 px-3 leading-snug text-white/85">
                        <div>11:00 AM – 2:00 PM</div>
                        <div>6:00 PM – 9:00 PM</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-teal-bright align-top whitespace-nowrap">
                        Sun
                      </td>
                      <td className="py-2.5 px-3 leading-snug text-white/85">
                        <div>11:00 AM – 2:00 PM</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Copyright Line */}
      <div className="border-t border-white/10">
        <div className="page-container py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-white/60 text-center sm:text-left">
          <p>© 2026 Dr. Gayatri&apos;s Family Dental Clinic. All Rights Reserved.</p>
          <p className="text-white/50">
            Developed with <span className="text-coral">❤</span> by{" "}
            <span className="font-semibold text-white/80">QuantumReach Media</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

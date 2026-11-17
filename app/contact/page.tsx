import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, MessageCircle, Navigation, Phone, ChevronRight } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { SITE, fullAddress, whatsappLink } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";

const TITLE = "Contact Dr. Gayatri's Clinic | Dentist in Hadapsar, Pune";
const DESCRIPTION =
  "Contact our dental clinic in Amanora Park Town, Hadapsar, Pune. Call +91 78419 30325, get directions, see opening hours and message us on WhatsApp.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
  keywords: [
    "dentist near me hadapsar",
    "dental clinic amanora park town contact",
    "dentist hadapsar sunday open",
    "dental clinic near kotak mahindra bank hadapsar",
  ],
});

const WA = whatsappLink(`Hello ${SITE.shortName}, I would like to book a dental consultation.`);

export default function ContactPage() {
  const schema = pageGraph({
    type: ["ContactPage", "WebPage"],
    path: "/contact",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      {/* ───────── Clean Header (No Clutter / 3D Graphics) ───────── */}
      <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-10 bg-gradient-to-b from-[#eaf8fb] via-[#f4fcfe] to-white">
        <div className="page-container text-center max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 text-[12.5px] text-body/80 mb-4">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
            <span className="font-semibold text-navy">Contact</span>
          </nav>

          <span className="block text-[11.5px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-2">
            Get in Touch
          </span>

          <h1 className="font-serif font-bold text-navy text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.12] tracking-[-0.015em] mb-4">
            Contact Our Dental Clinic <span className="text-teal">in Hadapsar</span>
          </h1>

          <p className="text-body text-[15px] sm:text-[16.5px] leading-relaxed max-w-2xl mx-auto">
            Have questions or looking to schedule a consultation? Connect directly with Dr. Gayatri&apos;s team via phone, WhatsApp, or visit our clinic in Amanora Park Town.
          </p>
        </div>
      </section>

      {/* ───────── Main Content: Contact & Clinic Details + Map ───────── */}
      <section className="relative py-10 sm:py-14 lg:py-16 bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Direct Contact & Clinic Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Call Card */}
                <a
                  href={`tel:${SITE.phone}`}
                  className="group glass-card rounded-[24px] p-5 flex flex-col justify-between border border-teal/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] shadow-[0_8px_16px_-6px_rgba(14,154,167,0.5)]">
                      <Phone className="w-4.5 h-4.5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-navy text-[17px] leading-tight">Call Clinic</h3>
                      <p className="text-[12px] text-body">Direct doctor desk</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[13px] font-bold text-teal group-hover:text-teal-bright">
                    <span>{SITE.phoneDisplay}</span>
                    <span className="text-[15px]">→</span>
                  </div>
                </a>

                {/* WhatsApp Chat Card */}
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card rounded-[24px] p-5 flex flex-col justify-between border border-emerald-500/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-[#10b981] to-[#059669] shadow-[0_8px_16px_-6px_rgba(16,185,129,0.5)]">
                      <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif font-bold text-navy text-[17px] leading-tight">WhatsApp</h3>
                      <p className="text-[12px] text-body">Quick chat inquiry</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[13px] font-bold text-emerald-600 group-hover:text-emerald-700">
                    <span>Chat with Us</span>
                    <span className="text-[15px]">→</span>
                  </div>
                </a>
              </div>

              {/* Clinic Visit Card: Address & Timings */}
              <div className="glass-card rounded-[28px] p-6 sm:p-7 border border-teal/15 shadow-sm flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full bg-teal shrink-0 inline-block" aria-hidden="true" />
                  <h2 className="font-serif font-bold text-navy text-[20px] sm:text-[22px]">
                    Visit Our Clinic
                  </h2>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-teal/10 text-teal grid place-items-center mt-0.5">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy text-[15px]">{SITE.name}</h3>
                    <p className="text-body text-[14px] leading-relaxed mt-1">
                      {fullAddress()}
                    </p>
                    <p className="text-[12.5px] text-teal font-medium mt-1.5">
                      Near Kotak Mahindra Bank &amp; opp. Sadhna Bank
                    </p>
                  </div>
                </div>

                {/* Clinical Hours */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-purple/10 text-purple grid place-items-center mt-0.5">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy text-[15px] mb-2">Clinic Hours</h3>
                    <div className="rounded-xl bg-slate-50 p-3 text-[13px] sm:text-[13.5px]">
                      <div className="flex items-start justify-between py-1 border-b border-slate-200/60">
                        <span className="font-semibold text-teal whitespace-nowrap">Mon – Sat</span>
                        <span className="text-navy font-medium text-right">11:00 AM – 2:00 PM<br />6:00 PM – 9:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 pt-2">
                        <span className="font-semibold text-teal whitespace-nowrap">Sun</span>
                        <span className="text-navy font-medium">11:00 AM – 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Direction Link */}
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-grad mt-2 w-full flex items-center justify-center gap-2 rounded-full h-[46px] text-white text-[14px] font-semibold hover:scale-[1.01] transition-transform shadow-[0_10px_20px_-8px_rgba(75,43,181,0.5)]"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  Get Directions in Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_45px_-18px_rgba(29,23,78,0.20)] border border-slate-100 bg-white ring-4 ring-white">
                <iframe
                  title={`Map showing ${SITE.name} in Amanora Park Town, Hadapsar, Pune`}
                  src={SITE.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWave />
    </SiteShell>
  );
}

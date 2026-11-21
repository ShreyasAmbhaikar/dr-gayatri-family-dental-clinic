import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { Highlight } from "@/components/site/Section";
import { SITE, fullAddress, whatsappLink } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";

const TITLE = "Contact Us | Dr. Gayatri's Family Dental Clinic Hadapsar";
const DESCRIPTION =
  "Contact our dental clinic in Amanora Park Town, Hadapsar, Pune. Call +91 78419 30325, get directions, see opening hours and message us on WhatsApp today.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
  keywords: [
    "contact dentist hadapsar",
    "dr gayatri dental clinic phone",
    "dental clinic amanora park town contact",
    "dentist hadapsar sunday open",
    "dental clinic near kotak mahindra bank hadapsar",
  ],
});

const WA = whatsappLink(`Hello ${SITE.shortName}, I would like to book a dental consultation.`);

/** Official WhatsApp brand SVG icon. */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function ContactPage() {
  const schema = pageGraph({
    type: ["ContactPage", "WebPage"],
    path: "/contact",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <div className="page-bg min-h-screen relative overflow-hidden">
        {/* Ambient Decorative Glow Orbs */}
        <div aria-hidden="true" className="absolute top-[18%] -left-[12%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(173,228,240,0.55),transparent_70%)] blur-3xl pointer-events-none -z-10" />
        <div aria-hidden="true" className="absolute top-[55%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(211,240,247,0.5),transparent_70%)] blur-3xl pointer-events-none -z-10" />

        {/* ───────── Left-Aligned Hero (Matches Gallery) ───────── */}
        <PageHero
          compact
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact Us" }]}
          eyebrow="Get in Touch"
          title={
            <>
              Contact Us <Highlight>in Hadapsar, Pune</Highlight>
            </>
          }
          sub="Call, WhatsApp or visit Dr. Gayatri's Family Dental Clinic on Tupe Patil Road in Amanora Park Town, near Kotak Mahindra Bank and a short drive from Magarpatta City, Mundhwa and Keshav Nagar."
        />

        {/* ───────── Main Content: Contact & Clinic Details + Map ───────── */}
        <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-18 bg-transparent">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Column: Direct Contact & Clinic Info */}
              <div className="lg:col-span-6 flex flex-col gap-4.5 justify-between">
                {/* Quick Connect Row (Call & WhatsApp) with Themed Colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Phone Call Card - Radiant Teal Theme */}
                  <a
                    href={`tel:${SITE.phone}`}
                    className="group rounded-[20px] bg-[linear-gradient(135deg,#e6f7fa_0%,#f0fbfd_50%,#ddf3f7_100%)] p-4 sm:p-4.5 border border-teal/30 shadow-[0_4px_16px_-4px_rgba(14,165,167,0.15)] hover:border-teal/60 hover:shadow-[0_8px_24px_-6px_rgba(14,165,167,0.25)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(14,165,167,0.35)] group-hover:scale-105 transition-transform">
                          <Phone className="w-4.5 h-4.5 stroke-[2.2]" aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-navy text-[16.5px] leading-snug mt-2.5 group-hover:text-teal transition-colors">
                        Call Clinic
                      </h3>
                      <p className="text-[12px] text-slate-600 mt-0.5 leading-snug">
                        Direct doctor desk for appointments &amp; queries
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-teal/20 flex items-center justify-between text-[12.5px]">
                      <span className="font-bold text-navy text-[13px]">{SITE.phoneDisplay}</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal text-white text-[11.5px] font-semibold group-hover:bg-[#0b8d8f] transition-colors shadow-xs">
                        Call Now →
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp Chat Card - Emerald WhatsApp Theme */}
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[20px] bg-[linear-gradient(135deg,#e8faf0_0%,#f2fdf7_50%,#daf6e5_100%)] p-4 sm:p-4.5 border border-emerald-500/30 shadow-[0_4px_16px_-4px_rgba(37,211,102,0.15)] hover:border-[#25d366]/60 hover:shadow-[0_8px_24px_-6px_rgba(37,211,102,0.25)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="w-9 h-9 rounded-xl bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(37,211,102,0.35)] group-hover:scale-105 transition-transform">
                          <WhatsAppIcon className="w-4.5 h-4.5" />
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-navy text-[16.5px] leading-snug mt-2.5 group-hover:text-emerald-700 transition-colors">
                        WhatsApp Chat
                      </h3>
                      <p className="text-[12px] text-slate-600 mt-0.5 leading-snug">
                        Send photos, ask questions, or request slots
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-emerald-500/20 flex items-center justify-between text-[12.5px]">
                      <span className="font-bold text-navy text-[13px]">Chat on WhatsApp</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#25d366] text-white text-[11.5px] font-semibold group-hover:bg-[#20ba59] transition-colors shadow-xs">
                        Message →
                      </span>
                    </div>
                  </a>
                </div>

                {/* Main Clinic Information Card with Frosted Glass Look */}
                <div className="rounded-[26px] p-5 sm:p-6 bg-white/90 backdrop-blur-md border border-white/90 shadow-[0_10px_30px_-10px_rgba(14,154,167,0.14)] flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-5 rounded-full bg-teal shrink-0 inline-block" aria-hidden="true" />
                      <h2 className="font-serif font-bold text-navy text-[18px] sm:text-[19px]">
                        Visit Our Clinic
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-teal px-2.5 py-0.5 rounded-full bg-teal/10 border border-teal/20">
                      Amanora Park Town
                    </span>
                  </div>

                  {/* Address block with landmark chips */}
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-navy text-[14.5px]">{SITE.name}</h3>
                      <p className="text-body text-[13px] leading-relaxed mt-0.5">
                        {fullAddress()}
                      </p>

                      {/* Landmark Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-navy">
                          Near Kotak Mahindra Bank
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-navy">
                          Opp. Sadhna Bank
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-teal/10 text-teal">
                          Tupe Patil Road
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Schedule block */}
                  <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-purple/10 text-purple flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="font-bold text-navy text-[14px]">Doctor Consultation Hours</h3>
                      </div>

                      <div className="rounded-xl border border-slate-200/60 bg-slate-50/70 p-2.5 sm:p-3 space-y-1.5 text-[12.5px]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1.5 border-b border-slate-200/50">
                          <span className="font-semibold text-navy flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                            Monday – Saturday
                          </span>
                          <div>
                            <span className="font-medium text-navy">11:00 AM – 2:00 PM</span>
                            <span className="mx-1 text-slate-300">|</span>
                            <span className="font-medium text-navy">6:00 PM – 9:00 PM</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
                          <span className="font-semibold text-navy flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple" />
                            Sunday
                          </span>
                          <div>
                            <span className="font-medium text-navy">11:00 AM – 2:00 PM</span>
                            <span className="ml-1.5 text-[11px] text-slate-400">(Evening Closed)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Google Maps Direction Link */}
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-grad mt-0.5 w-full flex items-center justify-center gap-2 rounded-full h-[44px] text-white text-[13.5px] font-semibold hover:scale-[1.01] transition-all shadow-[0_8px_18px_-6px_rgba(75,43,181,0.5)] cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                    Get Directions in Google Maps
                  </a>
                </div>
              </div>

              {/* Right Column: Proportionately Sized Google Maps Frame with Ambient Glow */}
              <div className="lg:col-span-6 flex flex-col relative">
                <div aria-hidden="true" className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-teal/20 via-cyan-400/15 to-purple/20 blur-xl opacity-75 -z-10 pointer-events-none" />
                <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-[26px] sm:rounded-[28px] overflow-hidden shadow-[0_16px_40px_-14px_rgba(29,23,78,0.16)] border border-white/90 bg-white ring-2 ring-white/80 flex flex-col">
                  {/* Floating Top Info Overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10 glass-card rounded-xl py-2 px-3 border border-white/95 shadow-xs flex items-center gap-2.5 max-w-xs">
                    <div>
                      <h4 className="font-bold text-navy text-[13px] leading-tight">
                        {SITE.name}
                      </h4>
                      <p className="text-[11px] text-body mt-0.5">
                        Ambrosia Alley · Amanora Park Town, Hadapsar
                      </p>
                    </div>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-7 h-7 rounded-lg bg-teal/10 hover:bg-teal hover:text-white text-teal grid place-items-center transition-colors shadow-xs ml-1"
                      aria-label="Open in Google Maps"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2]" />
                    </a>
                  </div>

                  {/* Google Maps Iframe */}
                  <iframe
                    title={`Map showing ${SITE.name} in Amanora Park Town, Hadapsar, Pune`}
                    src={SITE.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[380px] sm:min-h-[420px] border-0 flex-grow"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterWave />
    </SiteShell>
  );
}

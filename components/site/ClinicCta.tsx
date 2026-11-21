import Link from "next/link";
import { MapPin } from "lucide-react";
import BookButton from "@/components/site/BookButton";

/**
 * Closing call to action shared by the About page and every treatment page:
 * one heading, one line of copy and two buttons (book, directions).
 */
export default function ClinicCta({
  title = "Visit Dr. Gayatri's Clinic in Hadapsar",
  eyebrow = "Ready for healthier smiles?",
  treatment,
  id = "book",
}: {
  title?: string;
  eyebrow?: string;
  /** Pre-selects this treatment on the contact page. */
  treatment?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-14 sm:py-20 bg-transparent">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[linear-gradient(135deg,#0a7e8c_0%,#0e9aa7_35%,#0284c7_80%,#1d174e_100%)] border border-white/20 p-8 sm:p-12 lg:p-14 text-center max-w-4xl mx-auto shadow-[0_24px_60px_-16px_rgba(14,154,167,0.45)]">
          {/* Ambient decorative lighting */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#1ab3c2]/25 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.26em] text-teal-100 uppercase mb-2.5 inline-block drop-shadow-xs">
              {eyebrow}
            </span>
            <h2 id={`${id}-title`} className="font-serif font-bold text-white text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.15] drop-shadow-xs">
              {title}
            </h2>
            <p className="mt-3.5 text-white/90 text-[15px] sm:text-[16.5px] max-w-xl mx-auto leading-relaxed">
              Book a consultation today for clear answers, transparent written estimates, and gentle family dental care.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <BookButton treatment={treatment} variant="white" className="font-bold shadow-lg" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 h-[50px] bg-white/15 hover:bg-white/25 border border-white/35 text-white text-[14.5px] font-semibold transition-all shadow-xs backdrop-blur-sm"
              >
                <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Find Us &amp; Directions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

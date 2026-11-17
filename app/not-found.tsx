import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import BookButton from "@/components/site/BookButton";
import TreatmentCard from "@/components/site/TreatmentCard";
import { SITE } from "@/lib/site";
import { FEATURED_TREATMENTS } from "@/lib/treatments/summary";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Dr. Gayatri's Family Dental Clinic" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="page-container pt-[130px] pb-16 text-center">
        <p className="text-[#0a9fb1] uppercase font-bold text-[14px] tracking-[0.12em]">Error 404</p>
        <h1 className="mt-3 font-serif font-bold text-navy text-[38px] sm:text-[52px] leading-[1.08]">We can&apos;t find that page</h1>
        <p className="mt-4 mx-auto max-w-[520px] text-[17px] sm:text-[18px] text-body">
          The page may have moved. Try one of these links, or call us on {SITE.phoneDisplay}.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/" className="btn-primary-grad inline-flex items-center rounded-full h-[52px] px-8 text-white text-[15px] font-semibold">
            Back to home
          </Link>
          <BookButton variant="outline" />
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full h-[52px] px-7 bg-white text-navy border-[1.5px] border-purple/70 text-[15px] font-semibold"
          >
            <Phone className="w-4 h-4 text-purple" aria-hidden="true" /> Call us
          </a>
        </div>

        <h2 className="mt-14 font-serif font-bold text-navy text-[26px]">Popular treatments</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {FEATURED_TREATMENTS.slice(0, 6).map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}

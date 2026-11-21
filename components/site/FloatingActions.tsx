"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

/**
 * Floating WhatsApp button (with a soft ripple) and a back-to-top button stacked above it.
 * Mounted once in the root layout, so it appears on every page.
 */
export default function FloatingActions() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setShowWhatsApp(scrollY > 160);
      setShowTop(scrollY > 450);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside aria-label="Quick actions" className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[80] flex flex-col items-center gap-2.5">
      {/* Back to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-navy border border-slate-200/90 shadow-[0_8px_20px_-6px_rgba(29,23,78,0.35)] grid place-items-center cursor-pointer hover:bg-navy hover:text-white transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 pointer-events-none scale-90"
        }`}
      >
        <ArrowUp className="w-4 h-4" aria-hidden="true" />
      </button>

      {/* WhatsApp floating button (perfectly sized, appears only after scrolling) */}
      <a
        href={whatsappLink(`Hello ${SITE.shortName}, I would like to know more about your services.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        tabIndex={showWhatsApp ? 0 : -1}
        className={`relative w-[50px] h-[50px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#25d366] text-white grid place-items-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 ${
          showWhatsApp ? "opacity-100 translate-y-0 pointer-events-auto scale-100" : "opacity-0 translate-y-4 pointer-events-none scale-90"
        }`}
      >
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25d366] opacity-35 animate-ping [animation-duration:2.6s]" />
        <svg viewBox="0 0 24 24" className="relative w-6 h-6 sm:w-7 sm:h-7 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </aside>
  );
}

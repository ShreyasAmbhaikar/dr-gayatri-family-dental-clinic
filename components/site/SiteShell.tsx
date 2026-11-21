"use client";

import React, { createContext, useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BookingApi {
  /** Navigates to the Contact Us page. */
  open: (treatment?: string) => void;
}

const BookingContext = createContext<BookingApi>({ open: () => {} });

export const useBooking = () => useContext(BookingContext);

/**
 * Page chrome for every inner page: header and footer.
 * Directs consultation requests to the Contact Us page.
 */
export default function SiteShell({
  children,
  defaultTreatment = "General Dentistry",
}: {
  children: React.ReactNode;
  defaultTreatment?: string;
}) {
  const router = useRouter();

  const open = useCallback(
    (t?: string) => {
      const treatment = t ?? defaultTreatment;
      router.push(`/contact?treatment=${encodeURIComponent(treatment)}`);
    },
    [router, defaultTreatment],
  );

  const api = useMemo(() => ({ open }), [open]);

  return (
    <BookingContext.Provider value={api}>
      <div className="bg-[#fdfeff] min-h-screen flex flex-col overflow-x-clip selection:bg-cyan-500 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar onOpenBooking={() => open()} />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </BookingContext.Provider>
  );
}

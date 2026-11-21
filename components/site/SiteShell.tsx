import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Page chrome for every inner page: skip link, header, main landmark and footer. */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#fdfeff] min-h-screen flex flex-col overflow-x-clip selection:bg-cyan-500 selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

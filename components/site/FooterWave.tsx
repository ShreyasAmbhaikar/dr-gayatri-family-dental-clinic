import React from "react";
import WaveDivider from "@/components/ui/WaveDivider";

/** The aqua > teal > indigo wave that flows into the footer (same ending as the root canal page). */
export default function FooterWave() {
  return (
    <div className="relative z-20 h-24 sm:h-36 lg:h-44 -mt-4 sm:-mt-8" aria-hidden="true">
      <WaveDivider variant="footer" className="h-full" />
    </div>
  );
}

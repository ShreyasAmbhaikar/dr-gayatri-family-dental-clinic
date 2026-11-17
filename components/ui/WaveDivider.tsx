import React, { useId } from "react";

interface WaveDividerProps {
  /**
   * ribbon: translucent aqua bands that cross a section edge (background shows through).
   * footer: layered aqua → teal → indigo waves that end in the footer colour.
   */
  variant?: "ribbon" | "footer";
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  variant = "ribbon",
  position = "bottom",
  flip = false,
  className = "h-24 sm:h-32",
}: WaveDividerProps) {
  const gid = `wave-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const transform = `${flip ? "scaleX(-1)" : ""} ${position === "top" ? "scaleY(-1)" : ""}`.trim();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-x-0 ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={transform ? { transform } : undefined}
    >
      <svg viewBox={variant === "footer" ? "0 0 1440 200" : "0 0 1440 140"} preserveAspectRatio="none" className="w-full h-full block">
        <defs>
          <linearGradient id={`${gid}-a`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d3f0f7" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#e8f7fb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#bfe9f3" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id={`${gid}-t`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7fd6e6" />
            <stop offset="45%" stopColor="#1ab3c2" />
            <stop offset="100%" stopColor="#0e9aa7" />
          </linearGradient>
          <linearGradient id={`${gid}-n`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2b1c78" />
            <stop offset="100%" stopColor="#2b1c78" />
          </linearGradient>
        </defs>

        {variant === "ribbon" ? (
          <>
            <path
              d="M0,62 C240,22 520,92 780,56 C1040,20 1260,60 1440,30 L1440,74 C1260,104 1040,74 780,98 C520,122 240,74 0,104 Z"
              fill={`url(#${gid}-a)`}
            />
            <path
              d="M0,96 C300,66 560,118 860,90 C1120,66 1300,100 1440,78 L1440,100 C1300,124 1120,96 860,116 C560,140 300,96 0,124 Z"
              fill="#c9eef6"
              opacity="0.55"
            />
          </>
        ) : (
          <>
            <path d="M0,70 C200,30 420,92 700,62 C980,32 1200,82 1440,40 L1440,200 L0,200 Z" fill="#cdeff6" opacity="0.9" />
            <path d="M0,108 C220,72 450,128 720,100 C990,72 1210,40 1440,62 L1440,200 L0,200 Z" fill={`url(#${gid}-t)`} />
            <path d="M0,132 C240,108 470,152 740,130 C1010,108 1220,84 1440,98 L1440,200 L0,200 Z" fill="#0b7f99" opacity="0.8" />
            <path
              d="M0,150 C200,182 380,132 600,142 C840,154 1060,130 1250,114 C1340,107 1400,112 1440,117 L1440,200 L0,200 Z"
              fill={`url(#${gid}-n)`}
            />
          </>
        )}
      </svg>
    </div>
  );
}

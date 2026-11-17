import React from "react";

type IconProps = { className?: string };

/**
 * Step 1: Diagnosis Icon
 * Digital Radiograph / X-ray scanner examining tooth structure with precision crosshair.
 */
export function DiagnosisIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Digital radiograph / diagnostic clipboard screen */}
      <rect x="7" y="6" width="34" height="36" rx="6" strokeWidth="2.4" />
      <path d="M16 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" strokeWidth="2.2" />
      {/* Tooth silhouette inside X-ray screen */}
      <path
        d="M20 18c-2.5 0-4.5 2-4.5 4.5 0 2.5 1 4.5 1.5 7.5.5 2.5 1 4.5 2.5 4.5 1.5 0 2-3 2.5-5.5.3-1.5.8-2 2-2s1.7.5 2 2c.5 2.5 1 5.5 2.5 5.5s2-2 2.5-4.5c.5-3 1.5-5 1.5-7.5 0-2.5-2-4.5-4.5-4.5-2 0-3 1-4 2-1-1-2-2-4-2Z"
        strokeWidth="2"
      />
      {/* Diagnostic crosshair / scan ray */}
      <circle cx="34" cy="32" r="5" fill="#ffffff" strokeWidth="2.2" />
      <path d="M38 36l4 4" strokeWidth="2.8" />
      <path d="M12 12h5M12 16h3" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

/**
 * Step 2: Root Canal Treatment Icon
 * Endodontic rotary file entering the tooth root canal to remove infection and seal.
 */
export function CanalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Tooth outer anatomy */}
      <path
        d="M24 13C19.5 9 14.5 9.5 12 14c-2.5 4.5-.5 10 1 15 1.2 4 1.8 7 3.5 11 1.5 3.5 3.5 3 4.5.5 1.5-4 2.5-9 3-12.5.5-1.5 1.2-2 2-2s1.5.5 2 2c.5 3.5 1.5 8.5 3 12.5 1 2.5 3 3 4.5-.5 1.7-4 2.3-7 3.5-11 1.5-5 3.5-10.5 1-15-2.5-4.5-7.5-5-12-1Z"
        strokeWidth="2.4"
      />
      {/* Precision endodontic file / needle entering the canal */}
      <path d="M24 3v18" strokeWidth="2.8" />
      <path d="M21 5h6" strokeWidth="2.4" />
      <path d="M22 9h4" strokeWidth="2" />
      {/* Root canal channels being cleaned */}
      <path d="M19 25c-.5 5-.5 9-1.5 12" strokeWidth="2" strokeDasharray="1.5 2.5" />
      <path d="M29 25c.5 5 .5 9 1.5 12" strokeWidth="2" strokeDasharray="1.5 2.5" />
    </svg>
  );
}

/**
 * Step 3: Restoration Icon
 * Permanent handcrafted dental crown capping the tooth with restoration sparkle.
 */
export function RestorationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Tooth roots foundation */}
      <path
        d="M14 26c1 5 2 8 3.5 12 1.2 3.5 3 3 4 .5 1.5-4 2.2-8.5 2.5-11.5.5-1.5 1.2-2 2-2s1.5.5 2 2c.3 3 1 7.5 2.5 11.5 1 2.5 2.8 3 4-.5 1.5-4 2.5-7 3.5-12"
        strokeWidth="2.4"
      />
      {/* Royal dental crown sitting firmly on top */}
      <path
        d="M10 24L12 12l6 5 6-7 6 7 6-5 2 12H10Z"
        fill="#ffffff"
        strokeWidth="2.4"
      />
      {/* Crown base rim line */}
      <path d="M11 24h26" strokeWidth="2.6" />
      {/* Restoration sparkle star */}
      <path d="M38 7l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" fill="currentColor" stroke="none" />
      <circle cx="39" cy="8" r="1.5" />
    </svg>
  );
}

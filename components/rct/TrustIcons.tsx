import React from "react";

type IconProps = { className?: string };

/**
 * 1. Rotary Apex Precision Icon
 * Micro-rotary endodontic file with computerized precision pulse waves.
 */
export function RotaryFileIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Precision rotary head */}
      <rect x="13" y="3" width="6" height="5" rx="1.5" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 8v16" strokeWidth="2.4" />
      {/* Spiral cutting flutes of rotary file */}
      <path d="M13.5 12l5 2.5M13.5 16l5 2.5M14 20l4 2M15 23l2 1" strokeWidth="1.6" />
      {/* Apex locator precision waves */}
      <path d="M7 16a9 9 0 0 0 4 6M25 16a9 9 0 0 1-4 6" strokeWidth="1.8" strokeDasharray="1.5 2" />
      <circle cx="16" cy="27" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 2. Single-Sitting Care Icon
 * A tooth with a speed timer and gentle anesthesia droplet.
 */
export function SingleSittingToothIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Tooth silhouette */}
      <path
        d="M16 6C13 3.5 9 4 7 7c-2 3.5-1 7.5.5 11 1 2.5 1.5 5 2.5 8 1 2.5 2.5 2 3 .5 1-2.5 1.8-6 2-8.5.5-1 1-1.5 1-1.5s.5.5 1 1.5c.2 2.5 1 6 2 8.5.5 1.5 2 2 3-.5 1-3 1.5-5.5 2.5-8 1.5-3.5 2.5-7.5.5-11-2-3-6-3.5-9-1Z"
        strokeWidth="1.9"
      />
      {/* Clock badge for single sitting */}
      <circle cx="23" cy="9" r="6" fill="#150e3d" strokeWidth="2" />
      <path d="M23 6v3l2 1.5" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * 3. Amanora Clinic Landmark Icon
 * Modern clinic facade with dental medical cross and pin marker.
 */
export function ClinicBuildingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Clinic building silhouette */}
      <path d="M5 28h22M7 28V9l9-5 9 5v19" strokeWidth="2" />
      <rect x="13" y="21" width="6" height="7" strokeWidth="2" />
      {/* Dental healthcare cross */}
      <path d="M16 11v6M13 14h6" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

/**
 * 4. Bio-Ceramic Zirconia Crown Icon
 * Tooth crowned with zirconia cap and shield protection sparkle.
 */
export function BioCeramicCrownIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Tooth roots foundation */}
      <path d="M10 18c.8 3.5 1.5 6 2.5 8.5 1 2 2.2 1.8 3 0 .8-2 1.5-5 1.5-7 .5-.8.8-1 1-1s.5.2 1 1c0 2 .7 5 1.5 7 .8 1.8 2 2 3 0 1-2.5 1.7-5 2.5-8.5" strokeWidth="2" />
      {/* Zirconia Crown on top */}
      <path d="M7 16l2-9 4.5 4 4.5-5.5 4.5 5.5L27 7l2 9H7Z" fill="currentColor" fillOpacity="0.25" strokeWidth="2" />
      <path d="M7.5 16h21" strokeWidth="2.2" />
      {/* Sparkle star */}
      <path d="M28 3l.8 1.5 1.7.5-1.7.5-.8 1.5-.8-1.5-1.7-.5 1.7-.5.8-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

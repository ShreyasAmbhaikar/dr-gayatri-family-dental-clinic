import React from "react";

type IconProps = { className?: string };

/** Outlined tooth used across sections. */
export function ToothIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
    </svg>
  );
}

/** Clinic logo mark: outlined tooth with a medical-cross badge and a mirror. */
export function LogoMark({ className, inverted = false }: IconProps & { inverted?: boolean }) {
  const outline = inverted ? "#ffffff" : "#1d174e";
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 7.5c-3-2.6-7.6-3.3-11.2-1.4C8.6 8.3 7 13 8 18c1.1 5.4 3.2 9.1 4.3 15.3.8 4.3 2 9.2 4.6 9.2 2.9 0 3.3-4.6 4.2-8.4.5-2.1 1.6-3.3 2.9-3.3s2.4 1.2 2.9 3.3c.9 3.8 1.3 8.4 4.2 8.4 2.6 0 3.8-4.9 4.6-9.2C36.8 27.1 38.9 23.4 40 18c1-5-.6-9.7-4.8-11.9C31.6 4.2 27 4.9 24 7.5z"
        stroke={outline}
        strokeWidth="2.6"
        strokeLinejoin="round"
        fill={inverted ? "rgba(255,255,255,0.06)" : "#ffffff"}
      />
      <path d="M17 12.5c2.2-1.2 4.6-.8 7 1.2" stroke="#1ab3c2" strokeWidth="2" strokeLinecap="round" />
      {/* Mirror */}
      <circle cx="30.5" cy="21" r="3.6" stroke="#1ab3c2" strokeWidth="2" />
      <path d="M28.6 24.2 23.5 34" stroke="#1ab3c2" strokeWidth="2.2" strokeLinecap="round" />
      {/* Cross badge */}
      <circle cx="12" cy="12" r="8" fill="#0e9aa7" stroke="#ffffff" strokeWidth="2" />
      <path d="M12 8v8M8 12h8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** Thin multi-colour stripe shown under the clinic name. */
export function RainbowBar({ className = "" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[2.5px] rounded-full bg-[linear-gradient(90deg,#f59e0b_0%,#ef4f6c_28%,#8b5cf6_52%,#1ab3c2_76%,#10b981_100%)] ${className}`}
    />
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v7A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.7 19 12 19 12 19s6.3 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

/** Filled people icon for the stats bar. */
export function UsersFilledIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="24" cy="10" r="7" />
      <path d="M11 37c0-7.7 5.8-13 13-13s13 5.3 13 13v1H11v-1z" />
      <circle cx="9.5" cy="14" r="5" opacity="0.8" />
      <path d="M0 36c0-5.6 4-9.5 9.5-9.5 1.7 0 3.2.4 4.5 1-2.2 2.4-3.6 5.6-3.9 9.5H0V36z" opacity="0.8" />
      <circle cx="38.5" cy="14" r="5" opacity="0.8" />
      <path d="M48 36c0-5.6-4-9.5-9.5-9.5-1.7 0-3.2.4-4.5 1 2.2 2.4 3.6 5.6 3.9 9.5H48V36z" opacity="0.8" />
    </svg>
  );
}

/** Filled shield with a check mark for the stats bar. */
export function ShieldCheckFilledIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 46" className={className} aria-hidden="true">
      <path d="M20 1 3 7.5v12.2C3 31 10.3 40.6 20 45c9.7-4.4 17-14 17-25.3V7.5L20 1z" fill="currentColor" />
      <path d="M12.5 23.5 18 29l10-11" fill="none" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

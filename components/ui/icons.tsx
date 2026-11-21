import Image from "next/image";

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

/** Clinic logo mark: 3D purple tooth with teal stethoscope and medical cross emblem. */
export function LogoMark({ className = "w-11 h-11", inverted = false }: IconProps & { inverted?: boolean }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <Image
        src="/clinic-logo.png"
        alt="Dr. Gayatri's Family Dental Clinic Logo"
        width={64}
        height={64}
        priority
        className={`w-full h-full object-contain ${inverted ? "drop-shadow-[0_2px_10px_rgba(26,179,194,0.45)]" : "drop-shadow-xs"}`}
      />
    </span>
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

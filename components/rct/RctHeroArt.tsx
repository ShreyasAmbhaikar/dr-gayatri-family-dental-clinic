import React, { useId } from "react";

/**
 * Hero illustration: cross-section of a molar with an endodontic file,
 * standing on a teal pedestal inside layered aqua circles.
 * Drawn as vector art so it stays crisp at any size. The tooth is built from a
 * right-hand half that is mirrored, which keeps both sides perfectly symmetrical.
 */

// Right half of the tooth silhouette (centre line at x = 200).
const SIL = "M200 80 C220 78 235 50 270 52 C330 56 364 110 360 170 C358 215 346 250 340 280 C336 330 322 372 304 392 C296 402 280 400 276 388 C268 352 262 328 252 308 C240 292 222 288 200 288 Z";
// White enamel crown.
const CROWN = "M200 80 C220 78 235 50 270 52 C330 56 364 110 360 170 C358 215 350 252 343 284 C322 300 292 296 262 304 C246 296 224 282 200 282 Z";
// Dentin layer, which also runs down into the root.
const DENTIN = "M200 118 C215 118 228 100 252 102 C292 106 318 135 316 178 C315 215 310 250 312 290 C314 330 308 358 296 380 C292 388 284 386 283 378 C278 348 274 322 268 312 C256 292 228 276 200 276 Z";
// Pulp chamber and root canal.
const PULP = "M200 164 C220 160 232 148 252 150 C276 152 288 176 288 206 C288 232 292 262 298 296 C300 322 298 350 293 374 L287 374 C285 350 284 322 280 300 C276 282 266 262 246 252 C232 246 214 244 200 244 Z";

// Same outline without the closing segment, so stroking never draws a seam on the centre line.
const PULP_OPEN = PULP.replace(/ Z$/, "");

export default function RctHeroArt({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (n: string) => `${n}-${uid}`;

  const Mirrored = ({ children }: { children: React.ReactNode }) => (
    <>
      {children}
      <g transform="translate(401 0) scale(-1 1)">{children}</g>
    </>
  );

  return (
    <svg
      viewBox="-100 -130 600 600"
      className={className}
      role="img"
      aria-label="Illustration of a molar cross-section with an endodontic file inside the root canal"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id={id("ring")} cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#e9f8fb" />
          <stop offset="100%" stopColor="#d4f1f6" />
        </radialGradient>
        <linearGradient id={id("disc")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bdeef4" />
          <stop offset="55%" stopColor="#cdf2f7" />
          <stop offset="100%" stopColor="#e2f7fa" />
        </linearGradient>
        <linearGradient id={id("padTop")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b7ebef" />
          <stop offset="50%" stopColor="#d7f6f6" />
          <stop offset="100%" stopColor="#9fe0e6" />
        </linearGradient>
        <linearGradient id={id("padSide")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#86d8df" />
          <stop offset="45%" stopColor="#4cc6ce" />
          <stop offset="100%" stopColor="#2fb4bd" />
        </linearGradient>
        <linearGradient id={id("root")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbe0ae" />
          <stop offset="100%" stopColor="#f6c78e" />
        </linearGradient>
        <linearGradient id={id("enamel")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fbf6f2" />
          <stop offset="100%" stopColor="#ece2da" />
        </linearGradient>
        <linearGradient id={id("dentin")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde7b3" />
          <stop offset="100%" stopColor="#f8c37a" />
        </linearGradient>
        <radialGradient id={id("pulp")} cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#d02b25" />
          <stop offset="100%" stopColor="#8e0b12" />
        </radialGradient>
        <linearGradient id={id("handle")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a67cf2" />
          <stop offset="55%" stopColor="#7a4ddb" />
          <stop offset="100%" stopColor="#5a32bd" />
        </linearGradient>
        <linearGradient id={id("collar")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9468e8" />
          <stop offset="100%" stopColor="#5f37c4" />
        </linearGradient>
        {/* clipPath only accepts shapes (no <g>), so both halves are explicit paths */}
        <clipPath id={id("clip")}>
          <path d={SIL} />
          <path d={SIL} transform="translate(401 0) scale(-1 1)" />
        </clipPath>
        <clipPath id={id("lower")}>
          <rect x="0" y="282" width="400" height="140" />
        </clipPath>
        <filter id={id("soft")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id={id("soft2")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Backdrop circles */}
      <circle cx="232" cy="130" r="335" fill={`url(#${id("ring")})`} opacity="0.55" />
      <circle cx="232" cy="130" r="335" fill="none" stroke="#bfeaf2" strokeWidth="1.5" opacity="0.7" />
      <circle cx="196" cy="176" r="285" fill={`url(#${id("disc")})`} />
      <circle cx="196" cy="176" r="285" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.35" />

      {/* Pedestal */}
      <ellipse cx="200" cy="422" rx="205" ry="30" fill="#2c9fa9" opacity="0.28" filter={`url(#${id("soft")})`} />
      <path d="M-5 396 L-5 424 C-5 444 85 458 200 458 C315 458 405 444 405 424 L405 396 Z" fill={`url(#${id("padSide")})`} />
      <ellipse cx="200" cy="396" rx="205" ry="38" fill={`url(#${id("padTop")})`} />
      <ellipse cx="200" cy="396" rx="205" ry="38" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <ellipse cx="200" cy="402" rx="118" ry="16" fill="#5fb7bf" opacity="0.38" filter={`url(#${id("soft2")})`} />

      {/* Tooth */}
      <g transform="translate(20 0) scale(0.9 1)">
      <g clipPath={`url(#${id("clip")})`}>
        {/* Root + body */}
        <Mirrored>
          <path d={SIL} fill={`url(#${id("root")})`} />
        </Mirrored>
        {/* Gum-line tint on the roots */}
        <g clipPath={`url(#${id("lower")})`}>
          <Mirrored>
            <path d={SIL} fill="none" stroke="#f08a68" strokeWidth="9" opacity="0.55" />
          </Mirrored>
        </g>
        {/* Enamel crown */}
        <Mirrored>
          <path d={CROWN} fill={`url(#${id("enamel")})`} />
        </Mirrored>
        {/* Soft groove shadow in the crown */}
        <ellipse cx="200" cy="90" rx="70" ry="9" fill="#d9cdc4" opacity="0.32" filter={`url(#${id("soft2")})`} />
        {/* Dentin */}
        <Mirrored>
          <path d={DENTIN} fill={`url(#${id("dentin")})`} />
        </Mirrored>
        {/* Hot rim around the pulp */}
        <Mirrored>
          <path d={PULP_OPEN} fill="none" stroke="#fac77a" strokeWidth="24" strokeLinejoin="round" />
          <path d={PULP_OPEN} fill="none" stroke="#ee5a2c" strokeWidth="12" strokeLinejoin="round" />
        </Mirrored>
        {/* Pulp */}
        <Mirrored>
          <path d={PULP} fill={`url(#${id("pulp")})`} />
          <path d="M214 178 C238 176 262 190 270 216" fill="none" stroke="#6b080f" strokeWidth="1.6" opacity="0.35" />
          <path d="M214 196 C232 194 252 204 260 224" fill="none" stroke="#6b080f" strokeWidth="1.6" opacity="0.3" />
          <path d="M214 214 C226 212 240 216 246 228" fill="none" stroke="#6b080f" strokeWidth="1.4" opacity="0.28" />
        </Mirrored>
      </g>

      {/* Enamel gloss */}
      <path d="M56 150 C54 108 84 68 128 62" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
      <path d="M342 118 C346 100 336 82 322 72" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* Endodontic file */}
      <g transform="translate(270 50) rotate(19.5)">
        <line x1="0" y1="0" x2="0" y2="166" stroke="#7d8793" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="-0.9" y1="0" x2="-0.9" y2="166" stroke="#d4dae0" strokeWidth="1" strokeLinecap="round" />
        <rect x="-19" y="-24" width="38" height="24" rx="7" fill={`url(#${id("collar")})`} />
        <rect x="-16" y="-104" width="32" height="84" rx="16" fill={`url(#${id("handle")})`} />
        <rect x="-10" y="-96" width="5" height="62" rx="2.5" fill="#ffffff" opacity="0.4" />
      </g>
    </svg>
  );
}

import React from "react";

export function GeneralDentistryIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gd-tooth" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e8f7fa" />
          <stop offset="100%" stopColor="#bce7f0" />
        </radialGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0891b2" floodOpacity="0.2" />
        </filter>
        <linearGradient id="shine-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 3D Molar Tooth Body */}
      <path
        d="M25 24C16 32 18 48 24 64C27 72 32 86 38 88C44 90 46 76 50 68C54 76 56 90 62 88C68 86 73 72 76 64C82 48 84 32 75 24C68 18 58 20 50 25C42 20 32 18 25 24Z"
        fill="url(#gd-tooth)"
        filter="url(#soft-shadow)"
      />
      {/* Crown Top Highlights */}
      <path
        d="M27 26C35 21 44 23 50 27C56 23 65 21 73 26C78 30 78 38 74 46C66 40 58 40 50 43C42 40 34 40 26 46C22 38 22 30 27 26Z"
        fill="url(#shine-grad)"
      />
      {/* Gloss Sparkle */}
      <circle cx="34" cy="32" r="3.5" fill="#ffffff" />
      <circle cx="66" cy="32" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export function RootCanalIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rc-tooth" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f0f9fb" />
          <stop offset="100%" stopColor="#c5eaf1" />
        </radialGradient>
        <linearGradient id="pulp-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      {/* Outer Enamel */}
      <path
        d="M25 24C16 32 18 48 24 64C27 72 32 86 38 88C44 90 46 76 50 68C54 76 56 90 62 88C68 86 73 72 76 64C82 48 84 32 75 24C68 18 58 20 50 25C42 20 32 18 25 24Z"
        fill="url(#rc-tooth)"
        stroke="#e2e8f0"
        strokeWidth="1.5"
      />
      {/* Exposed Root Canal Pulp Chamber */}
      <path
        d="M38 34C45 32 55 32 62 34C60 42 56 46 56 54C56 64 61 74 60 80C59 81 57 78 55 72C53 66 52 58 50 56C48 58 47 66 45 72C43 78 41 81 40 80C39 74 44 64 44 54C44 46 40 42 38 34Z"
        fill="url(#pulp-grad)"
      />
      {/* Micro Canal Lines */}
      <path d="M49 52V65" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <circle cx="50" cy="39" r="4" fill="#dc2626" />
    </svg>
  );
}

export function DentalImplantsIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="imp-crown" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e2f5f8" />
          <stop offset="100%" stopColor="#b6e3ed" />
        </radialGradient>
        <linearGradient id="titanium-screw" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="gold-abutment" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Ceramic Crown (Top Half) */}
      <path
        d="M26 25C18 31 20 44 26 50C33 53 67 53 74 50C80 44 82 31 74 25C67 19 58 22 50 26C42 22 33 19 26 25Z"
        fill="url(#imp-crown)"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />
      {/* Golden Abutment Ring */}
      <rect x="36" y="50" width="28" height="6" rx="2" fill="url(#gold-abutment)" />
      {/* Titanium Screw Threads */}
      <path d="M40 56H60L57 63H43L40 56Z" fill="url(#titanium-screw)" />
      <path d="M41 64H59L56 71H44L41 64Z" fill="url(#titanium-screw)" />
      <path d="M42 72H58L55 79H45L42 72Z" fill="url(#titanium-screw)" />
      <path d="M43 80H57L53 87H47L43 80Z" fill="url(#titanium-screw)" />
      <path d="M46 88H54L50 93L46 88Z" fill="url(#titanium-screw)" />
    </svg>
  );
}

export function PediatricDentistryIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="child-skin" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fff1eb" />
          <stop offset="80%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fbb67e" />
        </radialGradient>
        <linearGradient id="hair-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>
      {/* Hair Behind */}
      <circle cx="50" cy="48" r="32" fill="url(#hair-grad)" />
      {/* Face */}
      <circle cx="50" cy="52" r="26" fill="url(#child-skin)" />
      {/* Front Hair Fringe */}
      <path
        d="M26 44C32 30 68 30 74 44C70 41 62 42 58 40C52 42 46 39 40 42C34 40 30 42 26 44Z"
        fill="url(#hair-grad)"
      />
      {/* Happy Eyes */}
      <path d="M37 49C39 47 43 47 45 49" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M55 49C57 47 61 47 63 49" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
      {/* Rosy Cheeks */}
      <circle cx="35" cy="56" r="4.5" fill="#f87171" opacity="0.45" />
      <circle cx="65" cy="56" r="4.5" fill="#f87171" opacity="0.45" />
      {/* Broad Happy Smile Showing Baby Teeth */}
      <path d="M40 57C40 65 60 65 60 57Z" fill="#b91c1c" />
      <path d="M43 57H57V60C57 60 50 62 43 60V57Z" fill="#ffffff" />
    </svg>
  );
}

export function TeethWhiteningIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lips-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>
      </defs>
      {/* Upper Lip */}
      <path
        d="M20 45C30 38 42 41 50 44C58 41 70 38 80 45C72 49 60 48 50 49C40 48 28 49 20 45Z"
        fill="url(#lips-grad)"
      />
      {/* Lower Lip */}
      <path
        d="M24 55C32 68 68 68 76 55C66 61 34 61 24 55Z"
        fill="url(#lips-grad)"
      />
      {/* Glistening White Teeth */}
      <path
        d="M28 47H72C71 56 62 61 50 61C38 61 29 56 28 47Z"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      {/* Tooth Separations */}
      <line x1="43" y1="47" x2="43" y2="59" stroke="#e2e8f0" strokeWidth="1" />
      <line x1="50" y1="47" x2="50" y2="60" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="57" y1="47" x2="57" y2="59" stroke="#e2e8f0" strokeWidth="1" />
      {/* Whitening Sparkles */}
      <path
        d="M66 33L68 39L74 41L68 43L66 49L64 43L58 41L64 39L66 33Z"
        fill="#00a4c4"
      />
      <path
        d="M32 37L33.5 41L37.5 42.5L33.5 44L32 48L30.5 44L26.5 42.5L30.5 41L32 37Z"
        fill="#38bdf8"
      />
    </svg>
  );
}

export function BracesAlignersIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mouth-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
      {/* Smile Aperture */}
      <path
        d="M20 46C22 38 78 38 80 46C76 66 24 66 20 46Z"
        fill="url(#mouth-grad)"
      />
      {/* Teeth Arc */}
      <path
        d="M24 45C32 42 68 42 76 45C73 57 65 60 50 60C35 60 27 57 24 45Z"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1"
      />
      {/* Individual Teeth Dividers */}
      <line x1="36" y1="43" x2="36" y2="56" stroke="#e2e8f0" strokeWidth="1" />
      <line x1="43" y1="42" x2="43" y2="58" stroke="#e2e8f0" strokeWidth="1" />
      <line x1="50" y1="42" x2="50" y2="59" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="57" y1="42" x2="57" y2="58" stroke="#e2e8f0" strokeWidth="1" />
      <line x1="64" y1="43" x2="64" y2="56" stroke="#e2e8f0" strokeWidth="1" />
      {/* Orthodontic Archwire */}
      <path
        d="M26 50C36 51 64 51 74 50"
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Aesthetic Cyan Ceramic Brackets */}
      <rect x="33.5" y="47.5" width="5" height="5" rx="1" fill="#00a4c4" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="40.5" y="47.5" width="5" height="5" rx="1" fill="#00a4c4" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="47.5" y="47.5" width="5" height="5" rx="1" fill="#00a4c4" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="54.5" y="47.5" width="5" height="5" rx="1" fill="#00a4c4" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="61.5" y="47.5" width="5" height="5" rx="1" fill="#00a4c4" stroke="#ffffff" strokeWidth="0.8" />
    </svg>
  );
}

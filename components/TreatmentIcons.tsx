import React from "react";

export function GeneralDentistryIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gd-gloss" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f0fbfe" />
          <stop offset="100%" stopColor="#b6e7f2" />
        </radialGradient>
        <filter id="tooth-3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#009eb8" floodOpacity="0.28" />
        </filter>
      </defs>
      {/* 3D Molar Tooth Body */}
      <path
        d="M26 24C18 32 20 48 25 64C28 72 33 86 39 88C45 90 47 76 50 68C53 76 55 90 61 88C67 86 72 72 75 64C80 48 82 32 74 24C67 18 57 20 50 25C43 20 33 18 26 24Z"
        fill="url(#gd-gloss)"
        filter="url(#tooth-3d-shadow)"
      />
      {/* Gloss Highlight on Crown */}
      <path
        d="M30 26C38 21 45 23 50 26C55 23 62 21 70 26C74 30 74 38 70 44C63 40 57 40 50 42C43 40 37 40 30 44C26 38 26 30 30 26Z"
        fill="#ffffff"
        opacity="0.9"
      />
      <circle cx="36" cy="32" r="3.5" fill="#ffffff" />
      <circle cx="64" cy="32" r="2.5" fill="#ffffff" />
      {/* Sparkle */}
      <path d="M72 16L74 21L79 23L74 25L72 30L70 25L65 23L70 21Z" fill="#009eb8" />
    </svg>
  );
}

export function RootCanalIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rc-gloss" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f2fbfe" />
          <stop offset="100%" stopColor="#c2edf5" />
        </radialGradient>
        <linearGradient id="rc-pulp-rich" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      {/* Outer Enamel Shell */}
      <path
        d="M26 24C18 32 20 48 25 64C28 72 33 86 39 88C45 90 47 76 50 68C53 76 55 90 61 88C67 86 72 72 75 64C80 48 82 32 74 24C67 18 57 20 50 25C43 20 33 18 26 24Z"
        fill="url(#rc-gloss)"
        stroke="#94a3b8"
        strokeWidth="1.2"
      />
      {/* Exposed Root Canal Pulp with Red Nerve */}
      <path
        d="M37 36C45 33 55 33 63 36C61 44 57 48 57 56C57 66 62 76 60 81C59 82 57 79 55 73C53 67 52 59 50 57C48 59 47 67 45 73C43 79 41 82 40 81C38 76 43 66 43 56C43 48 39 44 37 36Z"
        fill="url(#rc-pulp-rich)"
      />
      <circle cx="50" cy="41" r="4" fill="#dc2626" />
      <path d="M49 54V68" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function DentalImplantsIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="imp-crown-rich" cx="40%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e2f5f8" />
          <stop offset="100%" stopColor="#b6e3ed" />
        </radialGradient>
        <linearGradient id="threads-metal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="30%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>
      {/* Porcelain Crown */}
      <path
        d="M26 24C18 30 20 44 26 50C33 53 67 53 74 50C80 44 82 30 74 24C67 18 58 21 50 25C42 21 33 18 26 24Z"
        fill="url(#imp-crown-rich)"
        stroke="#94a3b8"
        strokeWidth="1.2"
      />
      {/* Gold Abutment Ring */}
      <rect x="35" y="50" width="30" height="6" rx="2" fill="#d97706" />
      {/* Titanium Screw Threads */}
      <path d="M39 56H61L58 63H42L39 56Z" fill="url(#threads-metal)" />
      <path d="M40 64H60L57 71H43L40 64Z" fill="url(#threads-metal)" />
      <path d="M41 72H59L56 79H44L41 72Z" fill="url(#threads-metal)" />
      <path d="M42 80H58L54 87H46L42 80Z" fill="url(#threads-metal)" />
      <path d="M45 88H55L50 94L45 88Z" fill="url(#threads-metal)" />
    </svg>
  );
}

export function PediatricDentistryIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="child-skin-rich" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fff3ec" />
          <stop offset="85%" stopColor="#fecba1" />
          <stop offset="100%" stopColor="#fba96b" />
        </radialGradient>
      </defs>
      {/* Brown Hair Behind */}
      <circle cx="50" cy="46" r="33" fill="#78350f" />
      {/* Cute Round Face */}
      <circle cx="50" cy="52" r="27" fill="url(#child-skin-rich)" />
      {/* Front Hair Bangs */}
      <path
        d="M25 44C32 26 68 26 75 44C71 40 63 42 58 38C52 42 46 38 41 42C35 38 30 42 25 44Z"
        fill="#78350f"
      />
      {/* Big Cheerful Eyes */}
      <circle cx="39" cy="50" r="3.8" fill="#451a03" />
      <circle cx="61" cy="50" r="3.8" fill="#451a03" />
      <circle cx="40.5" cy="48.5" r="1.4" fill="#ffffff" />
      <circle cx="62.5" cy="48.5" r="1.4" fill="#ffffff" />
      {/* Cute Rosy Cheeks */}
      <circle cx="33" cy="57" r="5" fill="#f87171" opacity="0.55" />
      <circle cx="67" cy="57" r="5" fill="#f87171" opacity="0.55" />
      {/* Broad Smile Showing Little Teeth */}
      <path d="M37 57C37 69 63 69 63 57Z" fill="#b91c1c" />
      <path d="M40 57H60V61C60 61 50 63 40 61V57Z" fill="#ffffff" />
    </svg>
  );
}

export function TeethWhiteningIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lips-pink-rich" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
      {/* Upper Lip */}
      <path
        d="M16 46C26 37 42 41 50 44C58 41 74 37 84 46C76 50 62 49 50 50C38 49 24 50 16 46Z"
        fill="url(#lips-pink-rich)"
      />
      {/* Lower Lip */}
      <path
        d="M20 56C30 71 70 71 80 56C70 62 30 62 20 56Z"
        fill="url(#lips-pink-rich)"
      />
      {/* Bright Sparkling Teeth Arc */}
      <path
        d="M24 48H76C75 59 65 64 50 64C35 64 25 59 24 48Z"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.2"
      />
      <line x1="41" y1="48" x2="41" y2="62" stroke="#e2e8f0" strokeWidth="1.2" />
      <line x1="50" y1="48" x2="50" y2="63" stroke="#cbd5e1" strokeWidth="1.2" />
      <line x1="59" y1="48" x2="59" y2="62" stroke="#e2e8f0" strokeWidth="1.2" />
      {/* Sparkling Stars */}
      <path d="M70 31L72 38L79 40L72 42L70 49L68 42L61 40L68 38Z" fill="#009eb8" />
      <path d="M28 35L29.5 40L34 41.5L29.5 43L28 48L26.5 43L22 41.5L26.5 40Z" fill="#38bdf8" />
    </svg>
  );
}

export function BracesAlignersIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mouth-braces-rich" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
      </defs>
      {/* Mouth Opening */}
      <path
        d="M16 47C18 37 82 37 84 47C80 69 20 69 16 47Z"
        fill="url(#mouth-braces-rich)"
      />
      {/* Teeth Arc */}
      <path
        d="M20 46C28 42 72 42 80 46C77 60 67 63 50 63C33 63 23 60 20 46Z"
        fill="#ffffff"
        stroke="#cbd5e1"
        strokeWidth="1.2"
      />
      {/* Teeth Separators */}
      <line x1="33" y1="44" x2="33" y2="59" stroke="#e2e8f0" strokeWidth="1.2" />
      <line x1="42" y1="43" x2="42" y2="61" stroke="#e2e8f0" strokeWidth="1.2" />
      <line x1="50" y1="43" x2="50" y2="62" stroke="#cbd5e1" strokeWidth="1.2" />
      <line x1="58" y1="43" x2="58" y2="61" stroke="#e2e8f0" strokeWidth="1.2" />
      <line x1="67" y1="44" x2="67" y2="59" stroke="#e2e8f0" strokeWidth="1.2" />
      {/* Archwire */}
      <path
        d="M22 51C32 52 68 52 78 51"
        stroke="#475569"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Ceramic/Turquoise Brackets */}
      <rect x="30" y="48" width="6" height="6" rx="1.5" fill="#009eb8" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="39" y="48" width="6" height="6" rx="1.5" fill="#009eb8" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="47" y="48" width="6" height="6" rx="1.5" fill="#009eb8" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="55" y="48" width="6" height="6" rx="1.5" fill="#009eb8" stroke="#ffffff" strokeWidth="0.8" />
      <rect x="64" y="48" width="6" height="6" rx="1.5" fill="#009eb8" stroke="#ffffff" strokeWidth="0.8" />
    </svg>
  );
}

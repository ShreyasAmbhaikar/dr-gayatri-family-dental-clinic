/**
 * Single source of truth for the clinic's business details.
 * Every page, schema block, sitemap, llms.txt and the footer read from here,
 * so name / address / phone / hours (NAP) can never drift apart.
 * These values must match the Google Business Profile exactly.
 */

export const SITE = {
  name: "Dr. Gayatri's Family Dental Clinic",
  shortName: "Dr. Gayatri's Clinic",
  // Set NEXT_PUBLIC_SITE_URL in the hosting dashboard once the domain is bought.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://drgayatridental.com").replace(/\/$/, ""),
  locale: "en_IN",
  tagline: "Gentle, modern dental care for the whole family in Amanora Park Town, Hadapsar, Pune",

  phone: "+917841930325",
  phoneDisplay: "+91 78419 30325",
  whatsappNumber: "917841930325",

  address: {
    street: "Shop No. 18, Ambrosia Alley, 17/18, Tupe Patil Road, Near Kotak Mahindra Bank, Opposite Sadhna Bank, Amanora Park Town",
    locality: "Hadapsar",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411028",
    country: "IN",
  },
  geo: { latitude: 18.5177861, longitude: 73.9372014 },

  // Google Maps (Business Profile CID taken from the clinic's Maps listing).
  mapsUrl: "https://maps.google.com/?cid=2231670144594384323",
  mapsEmbedUrl: "https://www.google.com/maps?q=18.5177861,73.9372014&z=16&output=embed",

  // Opening hours. Mon-Sat have a lunch break; Sunday is morning only.
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "11:00", closes: "14:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "21:00" },
    { days: ["Sunday"], opens: "11:00", closes: "14:00" },
  ],
  hoursDisplay: [
    { label: "Monday – Saturday", value: "11:00 AM – 2:00 PM and 6:00 PM – 9:00 PM" },
    { label: "Sunday", value: "11:00 AM – 2:00 PM" },
  ],

  doctor: {
    name: "Dr. Gayatri",
    title: "Chief Dental Surgeon & Family Dentist",
    image: "/images/doctor/dr-gayatri-lead-dentist.webp",
  },

  // Areas the clinic serves (used in copy and schema areaServed).
  serviceAreas: ["Hadapsar", "Amanora Park Town", "Magarpatta City", "Mundhwa", "Keshav Nagar", "Pune"],

  // Social profiles: add real URLs here when they exist. They flow into schema sameAs automatically.
  social: [] as string[],

  /**
   * Flip to true only after Dr. Gayatri has personally reviewed the clinical
   * content. Controls the "Medically reviewed by" line on treatment pages.
   */
  contentReviewedByDoctor: false,
  contentUpdated: "2026-11-07",

  /**
   * Homepage "Patient Stories" carousel. Its current entries are PLACEHOLDERS (invented names and dates).
   * Keep this false until components/PatientStoriesSection.tsx is fed with real, consented reviews
   * (for example from the Google Business Profile). Publishing invented reviews breaches Google's
   * policies and Indian consumer-protection rules on fake reviews.
   */
  showPatientStories: false,

  ogImage: "/images/hero-patient.jpg",
} as const;

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

export const fullAddress = () =>
  `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

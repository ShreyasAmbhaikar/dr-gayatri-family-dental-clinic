import type { Category } from "./summary";

export interface Photo {
  src: string;
  alt: string;
  position?: string;
  zoom?: number;
  origin?: string;
}

const PHOTOS = {
  patient: {
    src: "/images/rct/generated-patient-smiling.jpg",
    alt: "Smiling patient relaxing comfortably in the dental chair",
    position: "78% 38%",
    zoom: 1.5,
    origin: "100% 40%",
  },
  model: {
    src: "/images/rct/generated-dentist-model.jpg",
    alt: "Dentist explaining a tooth cross-section model with a dental probe",
    position: "50% 72%",
    zoom: 1.35,
    origin: "52% 82%",
  },
  restoration: {
    src: "/images/rct/generated-tooth-restoration.jpg",
    alt: "Tooth model on a clear display stand in a modern dental clinic",
    position: "50% 70%",
    zoom: 1.3,
    origin: "50% 62%",
  },
  clinic: {
    src: "/images/gallery/clinic-operatory-dental-chair.webp",
    alt: "Bright treatment operatory with modern dental chair and digital console",
    position: "50% 55%",
  },
  doctor: {
    src: "/images/doctor/dr-gayatri-lead-dentist.webp",
    alt: "Dr. Gayatri, Chief Dental Surgeon in her clinic in Hadapsar, Pune",
    position: "50% 25%",
  },
  smile: {
    src: "/images/hero-patient.jpg",
    alt: "Patient smiling in the dental chair during a visit",
    position: "55% 35%",
  },
  priya: {
    src: "/images/patient-priya.jpg",
    alt: "Smiling patient outdoors after dental care",
    position: "50% 30%",
  },
  after: {
    src: "/images/teeth-after.jpg",
    alt: "A bright, even smile after professional dental care",
    position: "50% 45%",
  },
} satisfies Record<string, Photo>;

const BY_CATEGORY: Record<Category, [keyof typeof PHOTOS, keyof typeof PHOTOS, keyof typeof PHOTOS]> = {
  Restorative: ["restoration", "model", "clinic"],
  Orthodontic: ["smile", "patient", "clinic"],
  Preventive: ["clinic", "patient", "doctor"],
  Surgical: ["model", "doctor", "clinic"],
  Cosmetic: ["after", "smile", "patient"],
  Pediatric: ["priya", "clinic", "doctor"],
  Emergency: ["patient", "doctor", "clinic"],
};

/** Three photos for a treatment page's image cards: [what-is, symptoms, benefits]. */
export function photosFor(category: Category): [Photo, Photo, Photo] {
  const [a, b, c] = BY_CATEGORY[category];
  return [PHOTOS[a], PHOTOS[b], PHOTOS[c]];
}

/** 3D hero artwork (the same images used on the homepage) for services that have a matching one. */
export const HERO_ART: Record<string, string> = {
  "dental-implants": "/images/treatments/v2-dental-implants.png",
  "full-mouth-implants": "/images/treatments/v2-dental-implants.png",
  braces: "/images/treatments/v2-braces-aligners.png",
  "clear-aligners": "/images/treatments/v2-braces-aligners.png",
  "kids-dentistry": "/images/treatments/v2-pediatric-dentistry.png",
  "teeth-whitening": "/images/treatments/v2-teeth-whitening.png",
  veneers: "/images/treatments/v2-teeth-whitening.png",
  "smile-makeover": "/images/treatments/v2-teeth-whitening.png",
  "dental-checkup": "/images/treatments/v2-general-dentistry.png",
  "teeth-cleaning": "/images/treatments/v2-general-dentistry.png",
  "tooth-fillings": "/images/treatments/v2-general-dentistry.png",
  "gum-treatment": "/images/treatments/v2-general-dentistry.png",
  "root-canal-treatment": "/images/treatments/v2-root-canal.png",
};

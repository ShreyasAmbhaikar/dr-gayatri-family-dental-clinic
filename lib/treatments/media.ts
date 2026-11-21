/**
 * Photos for the three image cards on every treatment page: [what-is, symptoms, benefits].
 *
 * Every slot is chosen for that exact treatment (an implant model for implants, forceps for
 * extraction, a shade guide for whitening...). Stock photos come from Pexels (free licence,
 * no attribution required); sources are listed in docs/image-credits.md.
 * Real clinic and before/after photos already in the project are reused where they fit.
 */

export interface Photo {
  src: string;
  alt: string;
  /** CSS object-position, used to keep the subject in frame when the photo is cropped to the card. */
  position?: string;
  zoom?: number;
  origin?: string;
}

const STOCK = "/images/treatments/photos";
const p = (file: string, alt: string, position = "50% 50%"): Photo => ({ src: `${STOCK}/${file}.webp`, alt, position });

export const TREATMENT_PHOTOS: Record<string, [Photo, Photo, Photo]> = {
  "root-canal-treatment": [
    { src: "/images/rct/generated-dentist-model.webp", alt: "Dentist pointing to the nerve canals on a cross-section tooth model", position: "50% 72%", zoom: 1.35, origin: "52% 82%" },
    p("toothache-hand-on-cheek", "Woman holding her cheek because of a throbbing toothache", "50% 35%"),
    { src: "/images/rct/generated-tooth-restoration.webp", alt: "Restored natural tooth model on a clear display stand in a modern dental clinic", position: "50% 50%", zoom: 1.05 },
  ],
  "dental-implants": [
    p("implant-model-on-desk", "Dental implant model showing the titanium post, abutment and crown in the jawbone", "50% 55%"),
    p("xray-panoramic-tablet", "Panoramic dental X-ray on a tablet used to plan implant placement", "50% 45%"),
    p("implant-model-cutaway", "Cutaway implant model with the titanium post fused into the jawbone", "50% 50%"),
  ],
  braces: [
    p("braces-smile", "Smiling patient showing metal braces on the upper teeth", "50% 16%"),
    { src: "/images/before-after/crowded-before.webp", alt: "Crowded, overlapping front teeth before orthodontic treatment", position: "50% 50%" },
    p("braces-closeup-mono", "Close-up of a smile with metal brackets and archwire", "50% 4%"),
  ],
  "clear-aligners": [
    p("clear-aligners-in-hand", "Hands holding a set of clear, removable aligner trays", "50% 50%"),
    p("dentist-tablet-scan", "Dentist reviewing a digital tooth scan with a patient to plan aligner treatment", "50% 40%"),
    p("man-smile-closeup", "Confident, discreet smile of a patient wearing clear aligners", "50% 60%"),
  ],
  "kids-dentistry": [
    p("kids-dentist-smiling-girl", "Smiling child in the dental chair with a friendly dentist", "50% 40%"),
    p("kids-dental-exam-boy", "Dentist gently examining a young boy's teeth", "50% 40%"),
    p("kids-brushing-smile", "Happy child learning to brush her teeth", "50% 35%"),
  ],
  "teeth-cleaning": [
    p("teeth-cleaning-patient", "Dentist carrying out a professional teeth cleaning on a patient", "50% 40%"),
    p("teeth-cleaning-scaler", "Dental scaler removing plaque and tartar from a patient's teeth", "50% 30%"),
    p("bright-smile-closeup", "Bright, clean smile after a professional scale and polish", "50% 55%"),
  ],
  "tooth-extraction": [
    p("tooth-extraction-forceps", "Dentist removing a tooth with extraction forceps", "50% 62%"),
    p("toothache-pain-expression", "Patient in pain from a decayed or infected tooth", "50% 62%"),
    p("extraction-forceps-flatlay", "Dental extraction forceps and a removed tooth on a clean tray", "50% 50%"),
  ],
  "wisdom-tooth-removal": [
    p("xray-shown-to-patient", "Dentist showing a patient a panoramic X-ray of the wisdom teeth", "50% 35%"),
    p("cold-compress-cheek", "Woman holding a cold compress to a swollen cheek from wisdom tooth pain", "50% 40%"),
    p("extraction-procedure", "Dentist carrying out a tooth removal with surgical instruments", "50% 45%"),
  ],
  "teeth-whitening": [
    p("whitening-light-treatment", "Patient receiving a professional teeth whitening treatment in the clinic", "50% 45%"),
    { src: "/images/before-after/whitening-before.webp", alt: "Yellowed and stained teeth before whitening", position: "50% 50%" },
    p("tooth-shade-guide", "Dentist's tooth shade guide used to record and match tooth colour", "50% 55%"),
  ],
  "crowns-bridges": [
    { src: "/images/gallery/custom-dental-crown-prosthesis-model.webp", alt: "Custom dental bridge prosthesis made for a patient at Dr. Gayatri's clinic", position: "50% 60%" },
    p("mouth-mirror-closeup", "Dentist examining a damaged tooth with a mouth mirror", "50% 50%"),
    p("crown-and-implant-model", "Ceramic crown beside an implant model showing how a crown fits", "50% 82%"),
  ],
  dentures: [
    p("denture-model", "Complete denture model showing upper and lower teeth", "50% 55%"),
    p("senior-patient-mirror", "Older patient checking a dental result in a hand mirror", "50% 40%"),
    p("senior-patient-smiling-dentist", "Older patient smiling with her dentist after a dental check-up", "50% 40%"),
  ],
  "emergency-dental-care": [
    p("toothache-dentist-exam", "Dentist examining a patient with a severe toothache", "50% 45%"),
    p("toothache-woman-outdoors", "Woman holding her jaw in sudden tooth pain", "50% 40%"),
    p("dentist-and-assistant", "Dentist and assistant treating a patient's tooth", "50% 45%"),
  ],
  "full-mouth-implants": [
    p("dental-ct-scan", "Patient having a 3D dental scan to plan full-arch implants", "50% 40%"),
    p("senior-patient-dental-exam", "Dentist examining an older patient before a full-arch treatment plan", "50% 40%"),
    p("senior-smile-closeup", "Confident smile of a mature patient with a full set of teeth", "50% 55%"),
  ],
  "tooth-fillings": [
    p("mouth-exam-instruments", "Dentist examining a tooth with a mirror and probe before placing a filling", "50% 45%"),
    { src: "/images/before-after/restoration-before.webp", alt: "Front tooth with a chipped edge before a tooth-coloured restoration", position: "50% 50%" },
    p("natural-teeth-closeup", "Natural-looking teeth that blend with a tooth-coloured filling", "50% 50%"),
  ],
  "gum-treatment": [
    p("gum-exam-closeup", "Dentist examining a patient's gums and teeth with a mirror and probe", "50% 40%"),
    p("exam-tool-over-model", "Dental instrument over a gum and teeth model used to explain gum disease", "50% 50%"),
    p("natural-smile-closeup", "Healthy gums and a natural smile", "50% 50%"),
  ],
  veneers: [
    p("veneer-fitting", "Dentist fitting a ceramic veneer on a patient's front tooth", "50% 45%"),
    p("veneer-samples", "Row of ceramic veneers in different shades", "50% 55%"),
    p("smile-white-teeth", "Smile with evenly shaped, bright front teeth", "50% 55%"),
  ],
  "smile-makeover": [
    p("smiling-patient-tooth-model", "Smiling patient in the dental chair holding a tooth model during smile planning", "50% 35%"),
    p("shade-matching-patient", "Dentist matching tooth shade to a patient's smile", "50% 40%"),
    p("smile-bright-closeup", "Bright, even smile", "50% 55%"),
  ],
  "dental-checkup": [
    p("dental-exam-closeup", "Dentist checking a patient's teeth with a mouth mirror during a routine check-up", "50% 45%"),
    p("digital-xray-monitor", "Digital dental X-ray on a monitor during an examination", "50% 45%"),
    p("dentist-patient-consultation", "Dentist explaining the findings of a check-up to a patient", "50% 40%"),
  ],
  "full-mouth-rehabilitation": [
    p("digital-plan-consultation", "Dentist and patient reviewing a digital treatment plan on a monitor", "50% 40%"),
    p("xray-on-lightbox", "Dentist studying dental X-rays on a light box to plan a full-mouth rehabilitation", "50% 40%"),
    p("dental-lab-technician", "Dental technician crafting restorations in the laboratory", "50% 50%"),
  ],
  "bad-breath-treatment": [
    p("oral-exam-open-mouth", "Dentist examining a patient's teeth, gums and tongue for the cause of bad breath", "50% 45%"),
    p("self-conscious-covering-mouth", "Woman covering her mouth, worried about bad breath", "50% 40%"),
    p("woman-brushing-teeth", "Woman brushing her teeth as part of a daily oral-care routine", "50% 40%"),
  ],
  "sensitive-teeth": [
    p("toothache-concerned", "Woman with a hand on her cheek, feeling tooth sensitivity", "50% 62%"),
    p("iced-drinks", "Iced drinks, a common trigger for sensitive teeth", "50% 40%"),
    { src: `${STOCK}/ice-lolly.webp`, alt: "Cold ice lolly that sensitive teeth can struggle with", position: "50% 45%", zoom: 1.2, origin: "47% 45%" },
  ],
  "laser-dentistry": [
    p("dental-laser-device", "Dental laser unit with a handpiece used for gentle soft-tissue treatment", "50% 88%"),
    p("dentist-exam-gloves", "Dentist in gloves examining a patient's gums and teeth before soft-tissue treatment", "50% 45%"),
    p("dentist-blue-light", "Dentist treating a patient with a modern light-based dental device", "50% 40%"),
  ],
};

/** The three image-card photos for a treatment page. */
export function photosFor(slug: string): [Photo, Photo, Photo] {
  const photos = TREATMENT_PHOTOS[slug];
  if (!photos) throw new Error(`No treatment photos defined for "${slug}" in lib/treatments/media.ts`);
  return photos;
}

export interface HeroPhoto {
  src: string;
  alt: string;
  /** CSS object-position, used to keep the subject in frame when the photo is cropped to the wide banner. */
  position?: string;
}

const HERO = "/images/treatments/hero";
const hero = (slug: string, alt: string, position = "50% 40%"): HeroPhoto => ({ src: `${HERO}/${slug}.webp`, alt, position });

/**
 * Wide banner photo at the top of each treatment page. One per treatment, chosen to show that service
 * and different from the page's three image cards. Files are 1920px-wide JPEGs (under 175 KB each) that
 * next/image resizes per device. Sources are listed in docs/image-credits.md.
 */
export const HERO_PHOTOS: Record<string, HeroPhoto> = {
  "root-canal-treatment": hero("root-canal-treatment", "Dentist reviewing a tooth X-ray on a tablet with a patient before root canal treatment"),
  "dental-implants": hero("dental-implants", "Dental implant model showing the implant post, abutment and crown beside a loose crown"),
  braces: hero("braces", "Young woman with braces smiling softly with her fingers at her lips"),
  "clear-aligners": hero("clear-aligners", "Woman smiling while holding a clear aligner tray"),
  "kids-dentistry": hero("kids-dentistry", "Smiling child giving a thumbs-up in the dental chair beside a friendly dentist"),
  "teeth-cleaning": hero("teeth-cleaning", "Gloved hand holding an ultrasonic dental scaler used for professional teeth cleaning"),
  "tooth-extraction": hero("tooth-extraction", "Dentist carrying out a tooth extraction with forceps on a patient"),
  "wisdom-tooth-removal": hero("wisdom-tooth-removal", "Dentist studying a panoramic X-ray of the teeth and jaw on a monitor"),
  "teeth-whitening": hero("teeth-whitening", "Dentist holding a shade guide against a patient's teeth to check tooth colour"),
  "crowns-bridges": hero("crowns-bridges", "Gloved hands holding a dental model with a row of crowned teeth"),
  dentures: hero("dentures", "Dental professional holding a complete upper denture"),
  "emergency-dental-care": hero("emergency-dental-care", "Man holding his cheek in sudden tooth pain"),
  "full-mouth-implants": hero("full-mouth-implants", "Full-arch dental bridge supported by four implants"),
  "tooth-fillings": hero("tooth-fillings", "Dentist hardening a tooth-coloured filling with a curing light while the patient wears protective glasses"),
  "gum-treatment": hero("gum-treatment", "Dentist examining a patient's teeth and gums with a mouth mirror and probe"),
  veneers: hero("veneers", "Dentist and patient discussing veneers while the patient checks her smile in a mirror"),
  "smile-makeover": hero("smile-makeover", "Woman with a bright, confident smile"),
  "dental-checkup": hero("dental-checkup", "Dentist chatting with a smiling patient in the dental chair before a check-up"),
  "full-mouth-rehabilitation": hero("full-mouth-rehabilitation", "Dentist showing a patient a dental model while planning treatment"),
  "bad-breath-treatment": hero("bad-breath-treatment", "Woman covering her mouth, worried about bad breath"),
  "sensitive-teeth": hero("sensitive-teeth", "Man holding his jaw because of sensitive, aching teeth"),
  "laser-dentistry": hero("laser-dentistry", "Dentist in protective eyewear carrying out a light-based dental procedure"),
};

/** The wide banner photo for a treatment page. */
export function heroFor(slug: string): HeroPhoto {
  const photo = HERO_PHOTOS[slug];
  if (!photo) throw new Error(`No hero photo defined for "${slug}" in lib/treatments/media.ts`);
  return photo;
}

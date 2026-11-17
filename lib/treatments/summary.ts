/**
 * Lightweight list of every treatment page. Safe to import from client
 * components (Navbar, Footer, booking modal) because it holds no long-form copy.
 * Long-form content lives in ./content-*.ts and is only imported by server code.
 */

export type IconKey =
  | "tooth"
  | "Wrench"
  | "Activity"
  | "Smile"
  | "Baby"
  | "Droplets"
  | "Scissors"
  | "Bone"
  | "Sun"
  | "Crown"
  | "Layers"
  | "Siren"
  | "Award"
  | "ShieldPlus"
  | "HeartPulse"
  | "Gem"
  | "Sparkles"
  | "Stethoscope"
  | "Microscope"
  | "Wind"
  | "Snowflake"
  | "Zap";

export type Category = "Restorative" | "Orthodontic" | "Preventive" | "Surgical" | "Cosmetic" | "Pediatric" | "Emergency";

export interface TreatmentSummary {
  slug: string;
  /** Short name used in cards, breadcrumbs and menus. */
  name: string;
  /** Page H1. Carries the primary local keyword. */
  h1: string;
  /** Name used in the <title> tag (kept short so titles stay near 60 characters). */
  titleName: string;
  category: Category;
  /** Primary keyword this page owns. */
  keyword: string;
  /** One-line blurb for cards and menus. */
  short: string;
  icon: IconKey;
  /** Value of the matching option in the booking modal, when one already exists. */
  bookingValue?: string;
  /** Show in the header dropdown and footer. */
  featured?: boolean;
}

export const TREATMENTS: TreatmentSummary[] = [
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    h1: "Root Canal Treatment in Hadapsar, Pune",
    titleName: "Root Canal Treatment",
    category: "Restorative",
    keyword: "root canal treatment in hadapsar",
    short: "Save an infected or painful tooth with gentle, modern root canal care.",
    icon: "tooth",
    bookingValue: "Root Canal Treatment",
    featured: true,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    h1: "Dental Implants in Hadapsar, Pune",
    titleName: "Dental Implants",
    category: "Restorative",
    keyword: "dental implants in hadapsar",
    short: "Fixed, natural-looking replacements for missing teeth.",
    icon: "Wrench",
    bookingValue: "Dental Implants",
    featured: true,
  },
  {
    slug: "braces",
    name: "Braces",
    h1: "Braces in Hadapsar, Pune: Metal & Ceramic",
    titleName: "Braces: Metal & Ceramic",
    category: "Orthodontic",
    keyword: "braces in hadapsar",
    short: "Straighten crooked, crowded or gapped teeth with metal or ceramic braces.",
    icon: "Activity",
    bookingValue: "Braces & Aligners",
    featured: true,
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    h1: "Clear Aligners in Hadapsar, Pune",
    titleName: "Clear Aligners",
    category: "Orthodontic",
    keyword: "clear aligners in hadapsar",
    short: "Nearly invisible, removable trays to straighten teeth discreetly.",
    icon: "Smile",
    bookingValue: "Braces & Aligners",
    featured: true,
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    h1: "Kids Dentist in Hadapsar, Pune",
    titleName: "Kids Dentist",
    category: "Pediatric",
    keyword: "kids dentist in hadapsar",
    short: "Friendly, fear-free dental care for infants, children and teens.",
    icon: "Baby",
    bookingValue: "Pediatric Dentistry",
    featured: true,
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    h1: "Teeth Cleaning in Hadapsar, Pune: Scaling & Polishing",
    titleName: "Teeth Cleaning & Scaling",
    category: "Preventive",
    keyword: "teeth cleaning in hadapsar",
    short: "Professional scaling and polishing to protect your gums and freshen your smile.",
    icon: "Droplets",
    bookingValue: "General Dentistry",
    featured: true,
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    h1: "Tooth Extraction in Hadapsar, Pune",
    titleName: "Tooth Extraction",
    category: "Surgical",
    keyword: "tooth extraction in hadapsar",
    short: "Careful, comfortable removal of damaged or problem teeth.",
    icon: "Scissors",
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    h1: "Wisdom Tooth Removal in Hadapsar, Pune",
    titleName: "Wisdom Tooth Removal",
    category: "Surgical",
    keyword: "wisdom tooth removal in hadapsar",
    short: "Relief from painful, impacted or infected wisdom teeth.",
    icon: "Bone",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    h1: "Teeth Whitening in Hadapsar, Pune",
    titleName: "Teeth Whitening",
    category: "Cosmetic",
    keyword: "teeth whitening in hadapsar",
    short: "Safe, supervised whitening for a visibly brighter smile.",
    icon: "Sun",
    bookingValue: "Teeth Whitening",
    featured: true,
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    h1: "Dental Crowns & Bridges in Hadapsar, Pune",
    titleName: "Dental Crowns & Bridges",
    category: "Restorative",
    keyword: "dental crown in hadapsar",
    short: "Strong, natural-looking caps and bridges to restore damaged or missing teeth.",
    icon: "Crown",
    featured: true,
  },
  {
    slug: "dentures",
    name: "Dentures",
    h1: "Dentures in Hadapsar, Pune",
    titleName: "Dentures",
    category: "Restorative",
    keyword: "dentures in hadapsar",
    short: "Comfortable complete and partial dentures that restore chewing and confidence.",
    icon: "Layers",
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    h1: "Emergency Dentist in Hadapsar, Pune",
    titleName: "Emergency Dentist",
    category: "Emergency",
    keyword: "emergency dentist in hadapsar",
    short: "Fast relief for severe toothache, swelling, broken or knocked-out teeth.",
    icon: "Siren",
    bookingValue: "Emergency Dental Pain",
    featured: true,
  },
  {
    slug: "full-mouth-implants",
    name: "Full Mouth Implants",
    h1: "Full Mouth Dental Implants in Hadapsar, Pune",
    titleName: "Full Mouth Dental Implants",
    category: "Restorative",
    keyword: "full mouth dental implants pune",
    short: "A fixed, full-arch solution to replace all or most of your teeth.",
    icon: "Award",
  },
  {
    slug: "tooth-fillings",
    name: "Tooth-Coloured Fillings",
    h1: "Tooth-Coloured Fillings in Hadapsar, Pune",
    titleName: "Tooth-Coloured Fillings",
    category: "Restorative",
    keyword: "tooth coloured filling in hadapsar",
    short: "Invisible composite fillings that repair cavities and chips.",
    icon: "ShieldPlus",
    bookingValue: "General Dentistry",
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    h1: "Gum Treatment in Hadapsar, Pune",
    titleName: "Gum Treatment",
    category: "Preventive",
    keyword: "gum treatment in hadapsar",
    short: "Treatment for bleeding, swollen or receding gums and gum disease.",
    icon: "HeartPulse",
    bookingValue: "General Dentistry",
  },
  {
    slug: "veneers",
    name: "Dental Veneers",
    h1: "Dental Veneers in Hadapsar, Pune",
    titleName: "Dental Veneers",
    category: "Cosmetic",
    keyword: "dental veneers in hadapsar",
    short: "Thin ceramic shells that reshape and brighten the front teeth.",
    icon: "Gem",
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    h1: "Smile Makeover in Hadapsar, Pune",
    titleName: "Smile Makeover",
    category: "Cosmetic",
    keyword: "smile makeover in hadapsar",
    short: "A personalised plan that combines treatments for a smile you love.",
    icon: "Sparkles",
  },
  {
    slug: "dental-checkup",
    name: "Dental Check-up & X-ray",
    h1: "Dental Check-up & Digital X-ray in Hadapsar, Pune",
    titleName: "Dental Check-up & X-ray",
    category: "Preventive",
    keyword: "dental check-up in hadapsar",
    short: "A thorough six-monthly exam with digital X-rays to catch problems early.",
    icon: "Stethoscope",
    bookingValue: "General Dentistry",
    featured: true,
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    h1: "Full Mouth Rehabilitation in Hadapsar, Pune",
    titleName: "Full Mouth Rehabilitation",
    category: "Restorative",
    keyword: "full mouth rehabilitation pune",
    short: "A phased plan to restore worn, damaged or missing teeth and your bite.",
    icon: "Microscope",
  },
  {
    slug: "bad-breath-treatment",
    name: "Bad Breath Treatment",
    h1: "Bad Breath Treatment in Hadapsar, Pune",
    titleName: "Bad Breath Treatment",
    category: "Preventive",
    keyword: "bad breath treatment in hadapsar",
    short: "Find and treat the real cause of persistent bad breath.",
    icon: "Wind",
    bookingValue: "General Dentistry",
  },
  {
    slug: "sensitive-teeth",
    name: "Sensitive Teeth Treatment",
    h1: "Sensitive Teeth Treatment in Hadapsar, Pune",
    titleName: "Sensitive Teeth Treatment",
    category: "Preventive",
    keyword: "sensitive teeth treatment in hadapsar",
    short: "Lasting relief from sharp pain with hot, cold or sweet foods.",
    icon: "Snowflake",
    bookingValue: "General Dentistry",
  },
  {
    slug: "laser-dentistry",
    name: "Laser Dentistry",
    h1: "Laser Dentistry in Hadapsar, Pune",
    titleName: "Laser Dentistry",
    category: "Cosmetic",
    keyword: "laser dentistry in hadapsar",
    short: "Gentle soft-tissue laser treatment with less discomfort and quicker healing.",
    icon: "Zap",
  },
];

export const CATEGORY_INTRO: Record<Category, { title: string; text: string }> = {
  Restorative: {
    title: "Restorative & Implant Dentistry",
    text: "Save damaged teeth and replace missing ones so you can chew, speak and smile comfortably again.",
  },
  Orthodontic: {
    title: "Braces & Aligners",
    text: "Straighten your teeth and correct your bite, with options for teens and adults.",
  },
  Preventive: {
    title: "Preventive & Gum Care",
    text: "Regular care that keeps teeth and gums healthy and stops small problems becoming big ones.",
  },
  Surgical: {
    title: "Tooth Removal & Oral Surgery",
    text: "Comfortable, carefully planned removal of teeth that cannot be saved or are causing problems.",
  },
  Cosmetic: {
    title: "Cosmetic & Smile Design",
    text: "Brighter, more even, more confident smiles through personalised cosmetic treatment.",
  },
  Pediatric: {
    title: "Children's Dentistry",
    text: "Gentle, friendly care that helps children build healthy habits and a fear-free relationship with the dentist.",
  },
  Emergency: {
    title: "Dental Emergencies",
    text: "Prompt help for sudden pain, swelling, injuries and broken teeth.",
  },
};

export const CATEGORY_ORDER: Category[] = ["Restorative", "Orthodontic", "Preventive", "Surgical", "Cosmetic", "Pediatric", "Emergency"];

export const getSummary = (slug: string) => TREATMENTS.find((t) => t.slug === slug);
export const treatmentPath = (slug: string) => `/treatments/${slug}`;
export const FEATURED_TREATMENTS = TREATMENTS.filter((t) => t.featured);

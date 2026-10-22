import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgayatridental.com"),
  title: "Dr. Gayatri's Family Dental Clinic | Painless & Modern Dental Care in Viman Nagar, Pune",
  description:
    "Experience painless, modern, and compassionate family dental care in Viman Nagar, Pune. Led by Dr. Gayatri with 10+ years of excellence in root canals, teeth whitening, implants, braces, and pediatric dentistry. 4.9/5 rating with 350+ Google reviews.",
  keywords: [
    "Dr. Gayatri Family Dental Clinic",
    "Dentist in Viman Nagar Pune",
    "Best dental clinic Pune",
    "Painless dental treatment",
    "Root canal specialist Viman Nagar",
    "Teeth whitening Pune",
    "Dental implants Viman Nagar",
    "Braces and aligners Pune",
    "Pediatric dentist Viman Nagar",
    "Emergency dentist Pune",
  ],
  authors: [{ name: "Dr. Gayatri" }],
  creator: "Dr. Gayatri's Family Dental Clinic",
  publisher: "Dr. Gayatri's Family Dental Clinic",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Gayatri's Family Dental Clinic | Healthy Smiles for a Brighter Tomorrow",
    description:
      "Modern, painless, and personalized dental care for you and your family in Viman Nagar, Pune. Over 10+ years of trusted care, 1,000+ happy smiles.",
    url: "https://drgayatridental.com",
    siteName: "Dr. Gayatri's Family Dental Clinic",
    images: [
      {
        url: "/images/hero-patient.png",
        width: 1200,
        height: 630,
        alt: "Dr. Gayatri's Family Dental Clinic - Viman Nagar, Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gayatri's Family Dental Clinic | Pune",
    description:
      "Modern, painless, and personalized dental care in Viman Nagar, Pune. 10+ Years of Care, 4.9/5 Google Rating.",
    images: ["/images/hero-patient.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const clinicStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": "https://drgayatridental.com/#clinic",
  name: "Dr. Gayatri's Family Dental Clinic",
  image: "https://drgayatridental.com/images/hero-patient.png",
  url: "https://drgayatridental.com",
  telephone: "+919876543210",
  priceRange: "₹₹",
  medicalSpecialty: ["Dentistry", "Endodontics", "Orthodontics", "PediatricDentistry"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Amorea Park Town, Viman Nagar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5679,
    longitude: 73.9143,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
      description: "By Prior Appointment Only",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "350",
    bestRating: "5",
    worstRating: "1",
  },
  physician: {
    "@type": "Physician",
    name: "Dr. Gayatri",
    jobTitle: "Chief Dental Surgeon & Family Dentist",
    description: "Specialist in painless family dentistry, aesthetic smile design, and root canal therapy with 10+ years of clinical excellence.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Dentistry & Routine Checkups",
          description: "Comprehensive oral examinations, digital cavity detection, ultrasonic scaling and teeth cleaning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rotary Root Canal Treatment",
          description: "Single-sitting painless root canal treatments using precision microscopic endodontics.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Implants",
          description: "Permanent titanium and zirconia tooth replacements with natural chewing restoration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pediatric Dentistry",
          description: "Gentle, fear-free dental treatments designed specially for infants, children, and teens.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laser Teeth Whitening",
          description: "Safe, enamel-friendly in-clinic laser teeth whitening for up to 8 shades brighter smiles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Orthodontics & Clear Aligners",
          description: "Invisible aligners and ceramic braces for crooked, crowded, or spaced teeth.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} ${scriptFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicStructuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4, Sacramento } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/site/JsonLd";
import FloatingActions from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";
import { clinicSchema, graph, websiteSchema } from "@/lib/schema";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700"],
  style: ["normal", "italic"],
});

const scriptFont = Sacramento({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Dentist & Dental Clinic in Hadapsar | Dr. Gayatri's Clinic",
  description:
    "Family dentist in Amanora Park Town, Hadapsar, Pune: root canals, implants, braces, aligners and kids dentistry. Open evenings and Sundays. Book today.",
  keywords: [
    "Dentist in Hadapsar",
    "Dental clinic in Hadapsar",
    "Dentist in Amanora Park Town",
    "Dr. Gayatri Family Dental Clinic",
    "Root canal treatment Hadapsar",
    "Dental implants Hadapsar Pune",
    "Braces and aligners Hadapsar",
    "Kids dentist Hadapsar",
    "Emergency dentist Hadapsar Pune",
  ],
  authors: [{ name: SITE.doctor.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: true, address: true, telephone: true },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: "Dentist & Dental Clinic in Hadapsar | Dr. Gayatri's Clinic",
    description:
      "Gentle, modern and personalised dental care for the whole family in Amanora Park Town, Hadapsar, Pune.",
    url: SITE.url,
    images: [{ url: SITE.ogImage, width: 1200, height: 896, alt: `${SITE.name}, Hadapsar, Pune` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist & Dental Clinic in Hadapsar | Dr. Gayatri's Clinic",
    description: "Modern, personalised dental care in Amanora Park Town, Hadapsar, Pune.",
    images: [SITE.ogImage],
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
  applicationName: SITE.name,
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2b1c78",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${sansFont.variable} ${serifFont.variable} ${scriptFont.variable} scroll-smooth`}>
      <head>
        {/* Site-wide entity graph: the clinic (referenced by @id from every page) and the website. */}
        <JsonLd data={graph(clinicSchema(), websiteSchema())} />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}

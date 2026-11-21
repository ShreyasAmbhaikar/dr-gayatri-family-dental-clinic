import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import BentoGallery, { type BentoItem } from "@/components/site/BentoGallery";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { BODY, Band, Highlight, SectionTitle } from "@/components/site/Section";
import { absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";

const TITLE = "Clinic & Smile Gallery | Dr. Gayatri's Clinic, Hadapsar";
const DESCRIPTION =
  "Take a look inside our family dental clinic in Amanora Park Town, Hadapsar, and see our team and smile results. Browse the photo gallery, then book a visit.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/gallery",
  image: "/images/gallery/clinic-operatory-dental-chair.webp",
  keywords: ["dental clinic gallery hadapsar", "dental clinic photos pune", "dr gayatri dental clinic photos", "smile results hadapsar", "clinic tour amanora"],
});

// Clinic photography in WebP format for fast loading
const ITEMS: BentoItem[] = [
  {
    src: "/images/gallery/clinic-operatory-dental-chair.webp",
    alt: "Bright dental operatory with a comfortable treatment chair at Dr. Gayatri's Family Dental Clinic, Hadapsar",
    caption: "Treatment Operatory",
    width: 1280,
    height: 1148,
  },
  {
    src: "/images/gallery/sterilized-dental-instruments-tray.webp",
    alt: "Sterilised dental instruments laid out on a clean tray before an appointment",
    caption: "Sterilised Instruments",
    width: 1280,
    height: 921,
  },
  {
    src: "/images/doctor/dr-gayatri-lead-dentist.webp",
    alt: "Dr. Gayatri, Chief Dental Surgeon and Family Dentist at Dr. Gayatri's Family Dental Clinic in Hadapsar, Pune",
    caption: "Dr. Gayatri, Chief Dentist",
    width: 1280,
    height: 1280,
  },
  {
    src: "/images/gallery/custom-dental-crown-prosthesis-model.webp",
    alt: "Ceramic dental bridge on a working model with Dr. Gayatri's clinic signage in the background",
    caption: "Crowns & Bridges",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/gallery/advanced-digital-dental-treatment-chair.webp",
    alt: "Dental treatment chair with a digital consultation monitor used to explain X-rays and diagnosis",
    caption: "Digital Consultation Screen",
    width: 1280,
    height: 1104,
  },
  {
    src: "/images/gallery/calming-ceiling-sky-view-operatory.webp",
    alt: "Calming illuminated sky and foliage ceiling above the patient dental chair",
    caption: "Calming Sky Ceiling View",
    width: 1280,
    height: 1168,
  },
  {
    src: "/images/gallery/overhead-view-modern-dental-operatory.webp",
    alt: "High-angle view of the dental treatment station and operatory in Amanora Park Town, Hadapsar",
    caption: "Treatment Station",
    width: 1280,
    height: 1102,
  },
  {
    src: "/images/gallery/clinic-facilities-multi-view-collage.webp",
    alt: "Collage of the clinic's treatment rooms, equipment and patient amenities",
    caption: "Clinic Overview",
    width: 896,
    height: 1195,
  },
  {
    src: "/images/gallery/single-sitting-root-canal-treatment-xray.webp",
    alt: "Dental X-ray of a tooth after root canal treatment",
    caption: "Root Canal X-ray",
    width: 960,
    height: 1280,
  },
];

export default function GalleryPage() {
  const schema = pageGraph({
    type: ["CollectionPage", "WebPage"],
    path: "/gallery",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
    extra: [
      {
        "@type": "ImageGallery",
        name: "Dr. Gayatri's Family Dental Clinic photo gallery",
        image: ITEMS.map((i) => ({ "@type": "ImageObject", contentUrl: absoluteUrl(i.src), caption: i.caption, description: i.alt })),
      },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <PageHero
        compact
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Gallery" }]}
        eyebrow="Gallery"
        title={
          <>
            Inside Our Clinic <Highlight>in Hadapsar</Highlight>
          </>
        }
        sub="A calm space and a friendly team at our family dental clinic in Amanora Park Town. Tap any photo to view it full screen."
      />

      <Band tone="aqua" className="!pt-6 sm:!pt-8">
        <BentoGallery items={ITEMS} />
      </Band>

      <Band id="visit" labelledBy="visit-title">
        <SectionTitle
          id="visit-title"
          align="center"
          eyebrow="Visit us"
          title={
            <>
              Your Dental Clinic in <Highlight>Hadapsar, Pune</Highlight>
            </>
          }
          className="mb-5"
        />
        <p className={`${BODY} text-center max-w-3xl mx-auto`}>
          Dr. Gayatri&apos;s Family Dental Clinic is on Tupe Patil Road in Amanora Park Town, near Kotak Mahindra Bank and opposite Sadhna Bank, a short
          drive from Magarpatta City, Mundhwa and Keshav Nagar. The treatment rooms are bright and calm, instruments are sterilised for every
          appointment, and a digital screen lets us show you your X-rays and explain your options. Browse our{" "}
          <Link href="/treatments" className="font-semibold text-teal hover:underline">
            dental treatments
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-teal hover:underline">
            contact us
          </Link>{" "}
          to book a visit.
        </p>
      </Band>

      <FooterWave />
    </SiteShell>
  );
}

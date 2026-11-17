import type { Metadata } from "next";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import BentoGallery, { type BentoItem } from "@/components/site/BentoGallery";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { Band, Highlight } from "@/components/site/Section";
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

// Authentic clinic photography optimized in WebP format adhering to Core Web Vitals
const ITEMS: BentoItem[] = [
  {
    src: "/images/gallery/clinic-operatory-dental-chair.webp",
    alt: "Modern ergonomic dental operatory with comfortable treatment chair and welcoming interior at Dr. Gayatri's Family Dental Clinic Hadapsar",
    caption: "Modern Treatment Operatory",
    span: "col-span-2 row-span-2",
    position: "50% 50%",
  },
  {
    src: "/images/gallery/sterilized-dental-instruments-tray.webp",
    alt: "Autoclaved and sterilized precision dental diagnostic instruments on surgical tray demonstrating strict hygiene protocols",
    caption: "Sterile Diagnostic Instruments",
    span: "col-span-1 row-span-1",
    position: "50% 50%",
  },
  {
    src: "/images/doctor/dr-gayatri-lead-dentist.webp",
    alt: "Dr. Gayatri, Chief Dental Surgeon and Family Dentist at Dr. Gayatri's Family Dental Clinic in Hadapsar, Pune",
    caption: "Dr. Gayatri, Chief Dentist",
    span: "col-span-1 row-span-2",
    position: "50% 20%",
  },
  {
    src: "/images/gallery/custom-dental-crown-prosthesis-model.webp",
    alt: "Precision ceramic dental prosthesis and custom crown model with Dr. Gayatri Dental Clinic entrance branding in the background",
    caption: "Precision Dental Prosthetics",
    span: "col-span-1 row-span-1",
    position: "50% 50%",
  },
  {
    src: "/images/gallery/advanced-digital-dental-treatment-chair.webp",
    alt: "Advanced computerized dental delivery unit with high-definition digital consultation monitor for precise dental diagnosis",
    caption: "Digital Consultation Suite",
    span: "col-span-2 row-span-1",
    position: "50% 45%",
  },
  {
    src: "/images/gallery/calming-ceiling-sky-view-operatory.webp",
    alt: "Soothing illuminated sky and foliage ceiling view above patient dental chair to relieve anxiety during dental treatments",
    caption: "Anxiety-Free Sky Ceiling View",
    span: "col-span-1 row-span-2",
    position: "50% 50%",
  },
  {
    src: "/images/gallery/overhead-view-modern-dental-operatory.webp",
    alt: "High-angle view of the fully equipped dental treatment station and digital operatory setup in Amanora Park Town, Hadapsar",
    caption: "High-Tech Treatment Station",
    span: "col-span-1 row-span-1",
    position: "50% 50%",
  },
  {
    src: "/images/gallery/clinic-facilities-multi-view-collage.webp",
    alt: "Comprehensive clinic overview collage featuring treatment operatories, sterilized equipment, and soothing patient amenities",
    caption: "Clinic Overview & Mezzanine",
    span: "col-span-2 row-span-1",
    position: "50% 50%",
  },
  {
    src: "/images/gallery/single-sitting-root-canal-treatment-xray.webp",
    alt: "Digital dental X-ray radiograph proving successful single-sitting root canal treatment and hermetic obturation at Dr. Gayatri's Dental Clinic",
    caption: "Single-Sitting RCT Digital X-Ray",
    span: "col-span-1 row-span-1",
    position: "50% 50%",
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
        sub="A calm space, a friendly team and smiles we are proud of. Tap any photo to view it full screen."
      />

      <Band tone="aqua" className="!pt-6 sm:!pt-8">
        <BentoGallery items={ITEMS} />
      </Band>

      <FooterWave />
    </SiteShell>
  );
}

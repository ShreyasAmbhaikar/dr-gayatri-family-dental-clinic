import type { Metadata } from "next";
import RootCanalTreatmentClient from "@/components/rct/RootCanalTreatmentClient";
import JsonLd from "@/components/site/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";

const PATH = "/treatments/root-canal-treatment";
const TITLE = "Root Canal Treatment in Hadapsar, Pune | Dr. Gayatri's Clinic";
const DESCRIPTION =
  "Root canal treatment in Hadapsar, Pune: relieve tooth pain and save your natural tooth with gentle, modern care. See the steps and cost factors. Book today.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "root canal treatment in hadapsar",
    "root canal cost in pune",
    "rct in hadapsar",
    "single sitting rct pune",
    "root canal specialist amanora park town",
    "save natural tooth pune",
  ],
});

export default function RootCanalTreatmentPage() {
  const url = absoluteUrl(PATH);
  const schema = pageGraph({
    type: ["MedicalWebPage", "WebPage"],
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Treatments", path: "/treatments" },
      { name: "Root Canal Treatment", path: PATH },
    ],
    extra: [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Root Canal Treatment in Hadapsar, Pune",
        serviceType: "Root canal treatment",
        description:
          "A root canal treatment removes infected or damaged tissue from inside a tooth, cleans and seals the root canals, and helps preserve your natural tooth.",
        url,
        provider: { "@id": `${SITE.url}/#clinic` },
        areaServed: SITE.serviceAreas.map((name) => ({ "@type": "Place", name })),
      },
    ],
  });

  return (
    <>
      <JsonLd data={schema} />
      <RootCanalTreatmentClient />
    </>
  );
}

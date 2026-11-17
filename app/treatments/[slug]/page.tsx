import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import TreatmentPage from "@/components/site/TreatmentPage";
import { TEMPLATE_SLUGS, getTreatment, treatmentPath } from "@/lib/treatments";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

// Every service page is generated at build time. Root Canal Treatment keeps its own
// hand-built page at /treatments/root-canal-treatment, which takes precedence over this route.
export function generateStaticParams() {
  return TEMPLATE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return buildMetadata({
    title: t.seoTitle,
    description: t.content.metaDescription,
    path: treatmentPath(t.slug),
    keywords: [t.keyword, ...t.content.keywords],
  });
}

// `params` is read inside a Suspense boundary so the route stays compatible with instant navigation
// (cacheComponents + partialPrefetching). Every slug is prerendered, so the full HTML is still served.
async function TreatmentContent({ params }: { params: Params }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <SiteShell defaultTreatment={t.bookingValue ?? t.name}>
      <TreatmentPage treatment={t} />
    </SiteShell>
  );
}

export default function TreatmentRoute({ params }: { params: Params }) {
  return (
    <Suspense fallback={null}>
      <TreatmentContent params={params} />
    </Suspense>
  );
}

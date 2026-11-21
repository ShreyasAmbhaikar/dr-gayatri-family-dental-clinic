import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/site/JsonLd";
import { SITE } from "@/lib/site";
import { HOME_FAQS } from "@/lib/home-faqs";
import { faqSchema, graph } from "@/lib/schema";

// The homepage itself is a client component (navigation state), so its canonical URL and
// structured data live here in a server wrapper. Title and description come from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
};

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(HOME_FAQS.map((f) => ({ q: f.question, a: f.answer }))))} />
      <HomePage />
    </>
  );
}

import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { SITE } from "@/lib/site";

// The homepage itself is a client component (booking modal state), so its
// canonical URL lives here in a server wrapper. Title and description come from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
};

export default function Page() {
  return <HomePage />;
}

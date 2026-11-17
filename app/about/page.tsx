import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardPen, Clock, HeartHandshake, MapPin, ShieldCheck, ShieldPlus } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import ImageCard from "@/components/site/ImageCard";
import BookButton from "@/components/site/BookButton";
import FooterWave from "@/components/site/FooterWave";
import JsonLd from "@/components/site/JsonLd";
import { BODY, Band, DarkPanel, Eyebrow, Highlight, SectionTitle } from "@/components/site/Section";
import { SITE, fullAddress } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { pageGraph } from "@/lib/schema";
import { FEATURED_TREATMENTS, treatmentPath } from "@/lib/treatments/summary";

const TITLE = "About Dr. Gayatri's Family Dental Clinic, Hadapsar, Pune";
const DESCRIPTION =
  "Meet Dr. Gayatri and the team at our family dental clinic in Amanora Park Town, Hadapsar. Gentle, modern care with clear explanations and written estimates.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
  image: SITE.doctor.image,
  keywords: ["dr gayatri dentist hadapsar", "family dental clinic hadapsar", "dentist in amanora park town", "about our dental clinic pune"],
});

const VALUES = [
  { icon: ClipboardPen, title: "Personalised care plans", text: "We examine carefully, listen to your goals and recommend the simplest effective treatment." },
  { icon: ShieldPlus, title: "A clean, safe environment", text: "Strict infection-control and sterilisation routines for every visit, big or small." },
  { icon: ShieldCheck, title: "Modern technology", text: "Digital X-rays and contemporary equipment for accurate diagnosis and gentle treatment." },
  { icon: HeartHandshake, title: "A comfortable experience", text: "We explain each step and work at your pace, which matters most if you feel anxious." },
];

const PROMISE = [
  { title: "We listen", text: "We start by understanding your concerns, your history and what you want." },
  { title: "We examine", text: "A thorough check of teeth, gums and bite, with X-rays only when needed." },
  { title: "We explain", text: "You see what we see, and hear your options without jargon or pressure." },
  { title: "We estimate", text: "A written estimate before any treatment begins, so there are no surprises." },
  { title: "We treat gently", text: "Local anaesthesia and careful technique, at a pace you are comfortable with." },
  { title: "We follow up", text: "We check your recovery and help you keep your smile healthy for the long term." },
];

export default function AboutPage() {
  const schema = pageGraph({
    type: ["AboutPage", "WebPage"],
    path: "/about",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    extra: [
      {
        "@type": "Person",
        name: SITE.doctor.name,
        jobTitle: SITE.doctor.title,
        worksFor: { "@id": `${SITE.url}/#clinic` },
        image: `${SITE.url}${SITE.doctor.image}`,
      },
    ],
  });

  return (
    <SiteShell>
      <JsonLd data={schema} />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        eyebrow="About Us"
        title={
          <>
            Your Family Dentist <Highlight>in Hadapsar, Pune</Highlight>
          </>
        }
        sub="Dr. Gayatri's Family Dental Clinic combines modern technology with a gentle, personal approach, so you and your family feel looked after at every stage of life."
        actions={
          <>
            <BookButton />
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 h-[50px] bg-white/90 text-navy border-[1.5px] border-purple/60 text-[14.5px] sm:text-[15px] font-semibold hover:bg-white hover:border-purple transition-all shadow-xs"
            >
              Our treatments
            </Link>
          </>
        }
        checks={[<><strong>Gentle</strong> care</>, <><strong>Clear</strong> estimates</>, <><strong>Evenings</strong> &amp; Sundays</>]}
        art={
          <ImageCard
            src={SITE.doctor.image}
            alt="Dr. Gayatri, family dentist at Dr. Gayatri's Family Dental Clinic in Hadapsar, Pune"
            side="left"
            ratio={1.15}
            mobileRatio={1.2}
            position="50% 20%"
            priority
            sizes="(max-width: 1024px) 80vw, 430px"
          />
        }
      />

      {/* Story + visit card */}
      <Band labelledBy="our-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionTitle id="our-story" eyebrow="Our story" title={<>Care that feels <Highlight>personal</Highlight></>} className="mb-4" />
            <p className={`${BODY} font-medium text-navy`}>
              {SITE.name} is a family dental clinic on Tupe Patil Road in Amanora Park Town, Hadapsar, Pune.
            </p>
            <p className={`mt-3.5 ${BODY}`}>
              We combine advanced technology with a compassionate approach, so that you and your family receive high-quality, comfortable dental
              care. Our focus is on building long-term relationships and helping you achieve healthy, confident smiles at every stage of life,
              from a toddler&apos;s first visit to care for grandparents.
            </p>
            <p className={`mt-3.5 ${BODY}`}>
              Families from Amanora Park Town, Magarpatta City, Mundhwa, Keshav Nagar and across Hadapsar visit us for everything from{" "}
              <Link href={treatmentPath("dental-checkup")} className="font-semibold text-teal hover:underline">routine check-ups</Link>{" "}and{" "}
              <Link href={treatmentPath("root-canal-treatment")} className="font-semibold text-teal hover:underline">root canal treatment</Link>{" "}to{" "}
              <Link href={treatmentPath("dental-implants")} className="font-semibold text-teal hover:underline">dental implants</Link>,{" "}
              <Link href={treatmentPath("braces")} className="font-semibold text-teal hover:underline">braces</Link>{" "}and{" "}
              <Link href={treatmentPath("kids-dentistry")} className="font-semibold text-teal hover:underline">children&apos;s dentistry</Link>.
            </p>
          </div>

          <aside aria-label="Visit the clinic" className="lg:col-span-5 glass-card rounded-[28px] p-6 sm:p-8">
            <h3 className="font-serif font-bold text-navy text-[22px]">Visit the clinic</h3>
            <address className="not-italic mt-5 grid gap-5 text-[14.5px] text-body">
              <p className="flex items-start gap-3.5">
                <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] text-white grid place-items-center"><MapPin className="w-5 h-5" aria-hidden="true" /></span>
                <span className="pt-0.5">{fullAddress()}</span>
              </p>
              <p className="flex items-start gap-3.5">
                <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] text-white grid place-items-center"><Clock className="w-5 h-5" aria-hidden="true" /></span>
                <span className="pt-0.5">
                  {SITE.hoursDisplay.map((h) => (
                    <span key={h.label} className="block"><strong className="text-navy">{h.label}:</strong> {h.value}</span>
                  ))}
                </span>
              </p>
            </address>
            <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full h-[48px] btn-teal-grad text-white text-[14.5px] font-semibold hover:scale-[1.02] transition-transform">
              Directions &amp; contact
            </Link>
          </aside>
        </div>
      </Band>

      {/* Values on the dark gradient band */}
      <Band tone="tint" labelledBy="expect-title">
        <DarkPanel className="p-6 sm:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            <div className="lg:col-span-5 lg:pr-8 flex flex-col items-start">
              <Eyebrow light>What to expect</Eyebrow>
              <h2 id="expect-title" className="font-serif font-bold text-white text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.15]">
                A Dental Clinic You Can <span className="text-teal-bright">Trust</span>
              </h2>
              <p className="mt-3.5 text-white/85 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                Four things we promise every patient, whether it is a first check-up or a long course of treatment.
              </p>
            </div>
            <div className="hidden lg:flex lg:col-span-1 justify-center"><div className="w-px h-48 bg-white/20" /></div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[18px] bg-white/[0.12] hover:bg-white/[0.18] border border-white/15 p-4 flex items-start gap-3.5 transition-colors">
                  <Icon className="w-6 h-6 stroke-[2] text-teal-bright flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-white text-[14px] leading-snug">{title}</h3>
                    <p className="text-[12px] text-white/80 mt-1 leading-snug">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DarkPanel>
      </Band>

      {/* Meet the doctor */}
      <Band labelledBy="meet-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 w-full">
            <ImageCard src={SITE.doctor.image} alt={`${SITE.doctor.name}, ${SITE.doctor.title}`} side="left" ratio={1.5} mobileRatio={1.3} position="50% 20%" sizes="(max-width: 1024px) 92vw, 580px" />
          </div>
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionTitle id="meet-title" eyebrow={SITE.doctor.title} title={<>Meet <Highlight>{SITE.doctor.name}</Highlight></>} className="mb-4" />
            <p className={BODY}>
              {SITE.doctor.name} leads the clinic and cares for patients of all ages. Her approach is simple: explain clearly, treat gently and
              recommend only what you need. Her areas of care include family dentistry, root canal therapy, aesthetic smile design and
              children&apos;s dental care.
            </p>
            <p className={`mt-3.5 ${BODY}`}>
              Every treatment plan begins with a conversation. {SITE.doctor.name} wants you to understand your options, so that the decisions
              about your teeth are always yours.
            </p>
            <div className="mt-6"><BookButton>Book with Dr. Gayatri</BookButton></div>
          </div>
        </div>
      </Band>

      {/* Promise steps */}
      <Band tone="tint" labelledBy="promise-title">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[linear-gradient(135deg,#e9f8fc_0%,#f4fcfe_50%,#e4f6fb_100%)] border border-teal/20 shadow-[0_16px_36px_-24px_rgba(14,154,167,0.3)] px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <Eyebrow>How we work</Eyebrow>
            <h2 id="promise-title" className="font-serif font-bold text-navy text-[28px] sm:text-[34px] lg:text-[38px] leading-tight">
              Our Patient <Highlight>Promise</Highlight>
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {PROMISE.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center px-2">
                <div className="w-[96px] h-[96px] rounded-full ring-4 ring-white shadow-[0_12px_28px_-10px_rgba(14,154,167,0.35)] flex items-center justify-center bg-[radial-gradient(circle_at_30%_25%,#ffffff,#e4f6fb)]">
                  <span className="font-serif font-bold text-[40px] text-teal">{i + 1}</span>
                </div>
                <span className="btn-primary-grad inline-block px-5 py-1.5 rounded-full text-white text-[13px] font-bold mt-4 shadow-[0_8px_20px_-6px_rgba(75,43,181,0.65)]">{s.title}</span>
                <p className="text-[13px] sm:text-[13.5px] text-body leading-relaxed max-w-[250px] mx-auto mt-2.5">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      <Band labelledBy="about-treatments">
        <SectionTitle id="about-treatments" eyebrow="What we do" title={<>Treatments We <Highlight>Offer</Highlight></>} align="center" className="mb-8" />
        <ul className="flex flex-wrap justify-center gap-3">
          {FEATURED_TREATMENTS.map((t) => (
            <li key={t.slug}>
              <Link href={treatmentPath(t.slug)} className="inline-flex rounded-full glass-card px-5 py-2.5 text-[14px] font-semibold text-navy hover:-translate-y-0.5 hover:border-teal/50 transition-all">
                {t.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/treatments" className="inline-flex rounded-full btn-primary-grad px-5 py-2.5 text-[14px] font-semibold text-white hover:scale-[1.03] transition-transform">
              View all treatments →
            </Link>
          </li>
        </ul>
      </Band>

      <FooterWave />
    </SiteShell>
  );
}

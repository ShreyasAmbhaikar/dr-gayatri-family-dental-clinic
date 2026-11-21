# Treatment pages and site audit

Audited 21 Nov 2026 against [seo-strategy.md](./seo-strategy.md) (22-page keyword map, service-page template, compliance rules), then revised the same day after review. Numbers come from the rendered HTML of every page, not from the source files.

## Result in one table

| | Before | After |
| --- | --- | --- |
| On-page score (rubric below), typical treatment page | about 5/10 | 10/10 |
| Root canal page | 3/10 (separate hand-built page) | 10/10 (same template as the rest) |
| Copy per treatment page (rendered, excluding menu and footer) | about 560 words | 881-1,217 words |
| FAQs per page | 5, none about cost | 5 or 6 (12 pages with 6, 10 with 5), each with a cost question and a local one |
| Procedure-step images | the same 4 root canal teeth on all 21 other pages | 43 step-specific illustrations (root canal keeps its own artwork) |
| Photo cards | picked by category, reused across pages | 66 slots, each chosen for that treatment |
| Hero banner | one patient photo on every page | a different photo per treatment, 22 in total |

"10/10" means 10 of 10 rubric points, and that is the ceiling for what can be done without the clinic. Two things still cap real-world strength: real prices and the doctor's credentials (see Open items).

## Page layout (treatment pages)

Hero (photo, H1, summary line, buttons) -> What is it? (short answer plus one paragraph) -> When you need it -> Procedure -> Benefits -> Aftercare -> Why choose us -> FAQs -> closing call to action.

Removed on request after the first pass:

- The "at a glance" info strip under the hero (anaesthesia, visits and so on).
- The cost section with its three-step boxes and buttons. Cost now lives in the FAQs, as the cost question on every page.
- The related-treatments cards. The menu, footer and hub page still link to every treatment.
- Three of the four paragraphs in "What is it?". It now has the short answer plus one paragraph.
- The long "Book a visit" panel. It now matches the About page (heading, one line, two buttons) and shares its code in `components/site/ClinicCta.tsx`.

The procedure section was rebuilt to fit the screen: six steps sit in one row, about 456 px tall, on screens from 1280 to 1920 px wide (it used to need two rows and about 900 px). Tablets wrap to tidy rows and phones get compact side-by-side rows.

## Rubric (1 point each)

1. Title tag 60 characters or fewer, with the keyword and Hadapsar.
2. Meta description 150-160 characters with keyword, benefit and call to action.
3. One H1 that carries the primary keyword.
4. Depth of roughly 900 words or more across the sections the doc lists.
5. Template complete: what it is, when you need it, procedure, benefits, why us, FAQs, call to action. Cost is covered by the FAQs.
6. 5-6 FAQs that cover cost, comfort and duration.
7. Local relevance: Hadapsar, at least two nearby areas, and the Tupe Patil Road / Kotak Mahindra Bank landmarks.
8. Structured data: MedicalWebPage, Service, BreadcrumbList, FAQPage.
9. Images match the treatment, with descriptive alt text.
10. Compliance and accuracy: no guarantees, no "best", no absolute pain claims, no invented prices or statistics.

## FAQs

Each page keeps 5 or 6 questions: the cost question, a "where can I get this near Magarpatta / Amanora Park Town / Mundhwa / Keshav Nagar" question, and the questions people ask most about that treatment (for example "Is a root canal painful?", "How long do dental implants last?", "Does scaling damage tooth enamel?", "What is a dry socket?", "Dental implant or bridge: which is better?"). The questions are written the way People Also Ask phrases them. No keyword tool was available, so they come from the doc's keyword list and common Google phrasing; validate them against Search Console once the site is live.

If `startingPrice` is set on a page, its cost answer starts with that price. There is no separate price box.

## Is the order correct?

- **Treatment order.** `TREATMENTS` already matched the doc's keyword map (1-22). Kept.
- **Category order (hub page, menu, llms.txt).** Was Restorative, Orthodontic, Preventive, Surgical, Cosmetic, Pediatric, Emergency. Kids dentistry (800-1,500 searches a month in the doc) sat 6th. Now Restorative, Orthodontic, Pediatric, Preventive, Surgical, Cosmetic, Emergency, with the menu columns rebalanced to 7 / 8 / 7.
- **Step order inside each procedure.** All 22 sequences were read for clinical sense. No step needed reordering.

## What was wrong, and what changed

### Treatment pages

- **Root canal** was a separate page with 5 FAQs, only the open answer in the HTML, no FAQ markup, "virtually painless" and "restores 100% chewing strength". It now uses the shared template with the same keyword, steps and artwork, full structured data and the same URL.
- **Copy.** Every page has a local FAQ built from `lib/site.ts` (so the address, hours and phone cannot drift), a cost FAQ, and a local note naming Magarpatta City, Mundhwa, Keshav Nagar and the clinic's landmarks. The old local notes described what "many patients" do; the clinic cannot support that yet, so they state facts about location and hours.
- **Compliance.** Removed "no pain", "little or no pain", "the procedure is not painful", an invented payment-plan promise and "best" used as a claim. Added an honest answer to "Are you open 24 hours?" on the emergency page.
- **Titles.** ", Pune" is dropped only when a title would exceed 60 characters; all rendered titles are 49-60.

### Images

- **Step badges.** The root canal tooth drawings appeared on all 21 other pages, for example under "Scaling" on the teeth-cleaning page. Replaced by 43 original illustrations that show the actual step (scaler with tartar, impression tray, aligner tray, forceps, laser and so on).
- **Photo cards.** Each of the three cards on every page was chosen for that treatment. Sources are in [image-credits.md](./image-credits.md). Real clinic photos were reused where they fit (the crown bridge on the crowns page).
- **Hero banners.** Each page has its own wide photo that shows the service (a shade guide for whitening, forceps for extraction, an implant model for implants, a full-arch bridge for full-mouth implants and so on). On desktop the photo fills the right two-thirds of the banner and fades into the teal behind the headline; on phones it sits behind a dark overlay. Files are 1920 px JPEGs under 175 KB, loaded with `priority` and a `sizes` hint so each device downloads only what it shows.
- **The clinic's root canal X-ray was dropped from that page.** The photo has the text "SINGLE SEATING ROOT CANAL TREATMENT" baked into the image (it should say "sitting"). The same image is still used in the gallery and in the home-page clinic tour (`public/images/gallery/single-sitting-root-canal-treatment-xray.webp`), so re-export it with the spelling fixed or retire it.

### Other pages

- **Home.** The H1 was a slogan with no keyword. The H1 is now "Dentist & Dental Clinic in Hadapsar, Pune" (same look as the old eyebrow), the slogan sits below it, and the title is "Dentist & Dental Clinic in Hadapsar | Dr. Gayatri's Clinic" (58 characters). FAQ answers were only in the HTML when open; all are now in the page, and the home page has FAQPage markup built from the same data.
- **Invented or conflicting figures removed.** The site said both "200+" and "250+" Google reviews, "1,000+ happy smiles", "4.9/5" and "10+ years"; the doc says the clinic has 0-10 reviews and none of these are confirmed. The stats banner now shows verifiable facts (22 treatments, open 7 days, written estimates).
- **Patient stories carousel hidden.** Its reviews carry invented names, dates and "Google Verified Review" labels. It is switched off with `SITE.showPatientStories = false` in `lib/site.ts`. Turn it on only after replacing every entry with a real, consented review.
- **Absolute claims reworded.** "Painless" (hero, footer, about, call-to-action), "zero discomfort", "no needles", "up to 8 shades in 1 hour", "99% of natural bite force", "laser whitening", "apex locators", "bio-ceramic sealers", "international Class-B sterilization" and "state-of-the-art" were reworded to what the clinic can stand behind.
- **Before and after.** The section no longer says "authentic transformations performed by Dr. Gayatri" or quotes durations and shades. It is framed as examples, with "results vary".
- **About, Contact, Gallery.** Descriptions fixed to 150-160 characters; Contact states the landmarks and nearby areas; Gallery gained a text section with internal links (it had 77 words and no headings). "Stress-free parking" removed (unverified).
- **Customer journey.** "Book online" removed; the site has no online booking, only calls and WhatsApp.

### Checked and already correct

Sitemap lists real pages, redirects exist for the old URLs, hours are split correctly everywhere, the map pin matches the Business Profile, there are no "Viman Nagar" references and the phone number is the same on every page.

## Open items (need the clinic)

1. **Prices.** The doc's biggest-volume searches are cost searches, and the template asks for real prices. Nothing was invented. Fill `startingPrice` in each page's content once the clinic confirms; the cost FAQ answer then opens with it.
2. **Doctor credentials.** The About page has no qualifications, registration number or years of practice, which the doc flags as critical for health content. Add them, then set `SITE.contentReviewedByDoctor = true` so pages show "Medically reviewed by Dr. Gayatri" and the structured data records the review.
3. **Laser dentistry.** The doc says to publish this page only if the clinic owns a laser. Confirm, or remove the entry from `TREATMENTS`.
4. **Before and after photos.** The Dental Council of India's code requires written patient consent. Confirm these belong to consented cases, or replace them.
5. **Reviews.** Collect real ones (the doc's engine), then fill the patient stories carousel.
6. **Real photos.** Replace stock cards and hero photos with clinic photos as you take them.
7. **Unused code.** `components/rct/*` and `components/site/TreatmentHeroArt.tsx` are no longer used. They were left in place because they hold uncommitted changes; safe to delete. The `related` field in the treatment data is also unused now (the section was removed) but kept in case it returns.

## Adding or editing a treatment

1. Add it to `lib/treatments/summary.ts` (slug, names, keyword, category, icon).
2. Add its copy to `content-a.ts`, `content-b.ts` or `content-c.ts`: one overview paragraph, 5-6 FAQs including cost, and an `art` key on every step. The local FAQ comes from `local(...)`.
3. Add its three card photos and its hero photo to `lib/treatments/media.ts`, and the hero file to `public/images/treatments/hero/`.
4. The sitemap, hub, menu, llms.txt, structured data and static page generation pick it up automatically.

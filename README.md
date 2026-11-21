# Dr. Gayatri's Family Dental Clinic

Website for Dr. Gayatri's Family Dental Clinic, Amanora Park Town, Hadapsar, Pune. Built with Next.js (App Router), React, TypeScript and Tailwind CSS. The site is a local-SEO site: a home page, 22 treatment pages, a treatments hub, About, Contact and Gallery.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export: writes the finished site to the out/ folder
pnpm preview      # serve out/ locally to check the production build
```

## Deploying (Cloudflare Pages)

The site is a **static export** (`output: "export"` in `next.config.ts`), so there is no server to run. In Cloudflare Pages use:

- Build command: `npx next build`
- Build output directory: `out`

Redirects for old URLs live in `public/_redirects` and cache/security headers in `public/_headers`; Cloudflare reads both. They replace the `redirects()`/`headers()` that `next.config.ts` cannot use in a static export. Add any new redirect to `public/_redirects`.

Set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.in`) in the hosting dashboard. It feeds canonical URLs, the sitemap, robots.txt, Open Graph tags and structured data. Until it is set, the placeholder `https://drgayatridental.com` is used.

## Where things live

| Path | What it holds |
| --- | --- |
| `lib/site.ts` | Single source of truth for name, address, phone, hours, doctor and feature flags. Everything else reads from here. |
| `lib/treatments/summary.ts` | The list of treatments (slug, names, keyword, category, icon) and category order. |
| `lib/treatments/content-*.ts` | Long-form copy for each treatment: short answer, symptoms, procedure steps, benefits, aftercare, FAQs. |
| `lib/treatments/media.ts` | Hero banner and three image-card photos for each treatment. |
| `components/site/TreatmentPage.tsx` | The template every treatment page uses. |
| `components/site/StepArt.tsx` | The 3D-style procedure-step illustrations. |
| `lib/schema.ts`, `lib/seo.ts`, `lib/llms.ts` | Structured data, page metadata, `llms.txt`. |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | Sitemap, robots.txt and web app manifest. |
| `docs/` | SEO strategy, the content audit and image credits. |

## Adding or editing a treatment

1. Add it to `lib/treatments/summary.ts`.
2. Add its copy to `content-a.ts`, `content-b.ts` or `content-c.ts` (one overview paragraph, 5-6 FAQs including cost, an `art` key on every step).
3. Add its three card photos and hero photo to `lib/treatments/media.ts`, and the hero file to `public/images/treatments/hero/`.

The sitemap, hub page, menu, `llms.txt`, structured data and static generation pick it up automatically.

## Images

- Use **WebP** for everything in `public/images/`. A static export cannot resize images on request (`images.unoptimized` is on), so **export each file at the size it is shown** (about 2x the displayed width). Hero banners are 1920 px wide.
- Deliberate exceptions: `public/og-image.jpg` (1200x630, under 100 KB) is the social-share image, which Facebook and WhatsApp read best as JPEG; the icons in `app/` and the 512 px `public/clinic-logo.png` (manifest and structured data) are PNG/ICO. The logo shown on the page is `public/clinic-logo.webp`.
- Stock photo sources are listed in `docs/image-credits.md`.

## Before launch

See "Open items" in `docs/treatments-audit.md`: real prices, Dr. Gayatri's credentials, real patient reviews (`SITE.showPatientStories`), confirmation that the clinic offers laser dentistry, and the real domain.

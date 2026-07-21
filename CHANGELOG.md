# CHANGELOG

Scope across the two passes so far: **framework migration to Next.js (App Router + TypeScript)**, **Part A (asset SEO prep)**, **Part B (performance)**, and **Part C (SEO technical fixes)**. Part D (full multilingual routing + Italian) and Part E (visual/color redesign) are separate future passes — see `TODO-before-launch.md`.

## Framework migration (Vite → Next.js)
- New project scaffolded from scratch: `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next-env.d.ts`, `.eslintrc.json`
- `app/layout.tsx` — root layout, metadata title template, viewport/theme-color, WhatsApp button, Organization JSON-LD
- Every route rebuilt as a server/client pair (client components can't export Next.js metadata):
  - `app/page.tsx` + `components/pages/HomeClient.tsx`
  - `app/our-story/page.tsx` + `components/pages/OurStoryClient.tsx`
  - `app/experiences/page.tsx` + `components/pages/ExperiencesClient.tsx`
  - `app/gallery/page.tsx` + `components/pages/GalleryClient.tsx`
  - `app/events/page.tsx` + `components/pages/EventsClient.tsx`
  - `app/shop/page.tsx` + `components/pages/ShopClient.tsx`
  - `app/contact/page.tsx` + `components/pages/ContactClient.tsx` + `components/BookingInfo.tsx`
- `components/Header.tsx`, `components/Footer.tsx` — react-router → `next/link` / `next/navigation`
- `components/StructuredData.tsx` — reusable JSON-LD component
- i18next preserved as-is via `components/I18nProvider.tsx` + `lib/i18n.ts`; all 10 locale JSON files copied to `lib/locales/` unchanged

## Part A — Asset SEO prep
- **A1**: all 49 in-use images audited and renamed to `[subject]-[context]-[location].ext` (see `ASSET-RENAMES.md`); every reference updated project-wide; no old filenames remain
- **A2**: no `photos/` directory was present in the uploaded zip (see `TODO-before-launch.md`) — existing site photography catalogued instead in `PHOTOS-MANIFEST.md`
- **A3**: hero images assigned to Home, About, Experiences, and Contact using `next/image` with `fill`, `priority`, and descriptive alt text. About, Experiences, and Contact had no hero image before this pass.

## Part B — Performance
- **B1**: every `<img>` replaced with `next/image`; every instance has `fill` + a `sizes` prop, or explicit width/height (logo); hero images use `priority`
- **B2**: removed the Google Fonts `@import` from CSS; Poppins + Inter now load via `next/font/google` with `display: swap`; Noto Sans SC and Noto Sans Devanagari added as fallback stacks so Chinese/Hindi glyphs render correctly when a user switches language
- **B3**: `next.config.js` sets `images.qualities`/`formats`, and security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`); `X-Robots-Tag` is `noindex` outside production; `viewport`/`themeColor` set in root layout
- **B4**: `components/BookingInfo.tsx` — static, server-rendered (no `'use client'`) booking section rendered above the contact form so it's present in initial HTML, not just after hydration

## Incidental Part C groundwork (done because the route split required it anyway)
- Per-page `<title>` via metadata template — no page duplicates the brand name (Task C1)
- `StructuredData` + BreadcrumbList JSON-LD on every page; Organization schema in layout; LocalBusiness/ContactPoint schema on Contact (Task C2, partial)
- `metadataBase` + per-page canonical URLs (Task C4, partial — no hreflang yet, since that's Part D)
- `app/sitemap.ts` and `app/robots.ts` (dynamic, App Router native)
- Gallery alt text de-duplicated and made descriptive while the component was already being touched for image renaming (Task C6, partial)

## Part C — SEO technical fixes (this pass)
- **C1**: title template confirmed clean — every page emits exactly one `| Mzamo Village Homestead`
- **C2**: `FAQPage` JSON-LD added on the new `/faq` page; `Organization`, `LocalBusiness`/`ContactPoint`, and `BreadcrumbList` schema already in place from the migration pass
- **C3**: staging `noindex` header already in place (see Part B/B3)
- **C4**: added an apex → `www` redirect in `next.config.js` for domain consistency; `metadataBase` + per-page canonicals already set
- **C5**: built `/faq` — new page, added to nav (Header + Footer), sitemap, and JSON-LD. `/contact` already existed with phone/email/WhatsApp. A "Find Us" page was **not** built — no address/map data exists yet, see TODO
- **C6**: internal linking pass — Our Story, Gallery, and Shop now link to `/contact` from body copy (previously only in the footer); Gallery alt text de-duplicated during the A1 pass
- **C7**: OpenGraph + Twitter Card metadata added to the root layout (title/description/image per card type); `twitter:site` is a `// TODO` placeholder pending a real handle; `og:image:type` set explicitly


## Follow-up fixes (this pass)
- Shop: removed "Add to Cart" — the page is a display-only catalogue for now, not a marketplace
- Contact: added an embedded Google Maps location (28°01'56.77"S 32°10'07.54"E) with a "Get Directions" link; `geo` coordinates added to the LocalBusiness JSON-LD on Contact and the Organization JSON-LD in the root layout
- Logo: `mzamo-village-homestead-logo-horizontal.png` had a solid white background baked in (not transparent) — fixed by converting the near-white background to transparency, so it now sits correctly on the dark header bar instead of showing as a white box. This was a technical fix only; no redesign of the mark itself.

## Part D — Full multilingual routing + Italian (this pass)
- **D1**: migrated from client-side react-i18next to `next-intl` with real locale-prefixed routing. `app/` restructured under `app/[locale]/`; `middleware.ts` handles locale detection/routing; English has no URL prefix, all other 10 locales get `/xx/`
- **D2**: all UI strings now live in `messages/*.json` (11 files, 136 keys each, verified exact parity) instead of `lib/locales`. **Italian added as the 11th locale** — full translation, not machine-filler
- **D3**: `Header.tsx` rewritten with a real language switcher using next-intl's locale-aware `Link`/`useRouter` — switching locale preserves the current path (e.g. `/experiences` → `/de/experiences`)
- **D4**: translated per-page metadata (title/description) via a new `seo` namespace across all 11 locales; full reciprocal hreflang set (11 locales + x-default) on every page; `<html lang>` mapped per locale (en→en-ZA, zh→zh-Hans, others→code); OG locale/alternateLocale tags; sitemap now emits one entry per page × locale with hreflang annotations
- Removed the old react-i18next setup entirely (`lib/locales/`, `lib/i18n.ts`, `components/I18nProvider.tsx`, the `i18next`/`react-i18next` packages)
- Verified with a real production build + server: fetched `/`, `/de`, and `/it/experiences` directly and confirmed correct `<html lang>`, translated `<title>`, translated body content, and the full hreflang set

## Content/structure fixes (master update, applied before finishing D4)
- **Primary experience restored**: isiZulu Cultural Tours = beadwork, dance, spear & shield crafting, traditional cooking — exactly as specified, matching between Home and Experiences
- **Extra experiences separated**: School Workshops, Homestead Stay, isiZulu Traditional Hut Stay, and Traditional Ceremonies now presented as a distinct "Extra Experiences" section on the Experiences page, clearly labeled as optional add-ons not included in the primary tour
- FAQ rewritten (visible content + JSON-LD) to state this distinction explicitly
- Email address commented out (not deleted) in `BookingInfo.tsx`, with a TODO; also intentionally left out of JSON-LD in `layout.tsx` and `contact/page.tsx`
- Footer brand heading standardized to "Mzamo's Cultural Village & Homestead" across all 11 locales (was already a single instance, just wrong text before)
- **Iconset processed**: your 21-icon sheet was sliced, each icon cropped to content with the white background removed (transparent PNG), and renamed for SEO (e.g. `zulu-beadwork-icon.png`, `crocodile-carving-icon.png`) into `public/images/icons/`. Applied to: Shop (replacing emoji with the matching craft icon per product), Events (matching activity icon per card), and the new Extra Experiences section on the Experiences page. The full sheet itself isn't used anywhere on the site — only the individually cropped icons.

## Icon swap + full FAQ translation (this pass)
- Replaced the last generic emoji on the site with your custom icons: Home's primary-tour cards, Experiences' primary-tour cards (both use small white badge circles behind the icons for contrast against the dark photo overlay), and Shop's "Handmade by Our Community" section (community icon, on white so no badge needed)
- **FAQ fully translated into all 11 locales** — it was the one piece of copy still English-only after Part D; now uses `next-intl` like the rest of the site, including the `FAQPage` JSON-LD which is now built from the actual translated content per locale
- **Found and fixed a real title bug**: `seo.gallery/events/faq/contact.title` in all 11 locales included the brand name in the string itself (e.g. "FAQ — Mzamo Village Homestead"), which combined with the root title template to duplicate the brand name (e.g. "FAQ — Mzamo Village Homestead | Mzamo Village Homestead") — violates Task C1. Caught by directly curling the built pages and reading the `<title>` tag rather than trusting the earlier spot-check. Fixed across all 11 locales.


## Brand name standardization (this pass)
- Standardized every reference across the entire site to the full "Mzamo's Cultural Village & Homestead" — previously only 5 places used it (the Home H1, footer, and root default title) while 27+ other places (title template suffix, JSON-LD business name, OG siteName, image alt text, body copy, FAQ) still used the shorter "Mzamo Village Homestead"
- Applied across all `.tsx` files and all 11 `messages/*.json` locale files, including locale-specific variants (isiZulu's "I-" noun-class prefix, Chinese's previously fully-translated "姆扎莫村庄园") — all now consistently use the English proper noun
- Caught and fixed two `react/no-unescaped-entities` build errors from the apostrophe/ampersand landing in raw JSX text (not inside string attributes) — verified with a live rebuild that the apostrophe and ampersand render correctly rather than as literal HTML entities
- Verified: zero remaining occurrences of the short form anywhere in `app/`, `components/`, or `messages/`; translation key parity re-confirmed (155 keys, all 11 locales)


- `npx next build` — compiles clean (zero errors, zero warnings), all 94 pages statically generated (8 pages × 11 locales + robots/sitemap/not-found)
- Translation key parity verified across all 11 locales: 155 keys, exact match (includes the new `faq` namespace)
## Verification
- Directly curled built pages and checked raw `<title>` tags — this is how the brand-name duplication bug above was actually caught and confirmed fixed
- Spot-checked a real production server across multiple locales — correct `<html lang>`, translated titles, translated body copy, full hreflang set, no emoji remaining anywhere
- `tsc --noEmit` clean against the real (unstubbed) `next/font/google` code
- Full-name brand standardization verified with another live rebuild + server check: apostrophe/ampersand render correctly, zero short-form occurrences remain

(earlier passes)
- `npm install` — no errors
- `npx next build` — compiles clean, all 8 routes statically generated (7 pages + FAQ), zero TypeScript errors, zero ESLint errors
- Translation key parity re-verified across all 10 locale files after adding `nav.faq` (108 keys, no drift)

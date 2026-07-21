# TODO Before Launch

Things that can't be finished in code and need Mzamo/the site owner's input.

## Content & contact details
- Email address is commented out site-wide per your request (see `components/BookingInfo.tsx`) — re-enable by uncommenting once you're ready to publish one; the confirmed real address is still needed first (see below).
- **Icons**: the 21 icons from your sheet were cropped and background-removed automatically (not by hand) — worth a quick visual scan of `public/images/icons/` for any faint edge fringing, especially on the two bird icons which had the most detailed silhouettes.
- Email address is a placeholder (`info@mzamovillagehomestead.co.za`) in the commented-out markup and was never in any JSON-LD — replace with the real inbox when you're ready to re-enable it.
- Phone/WhatsApp number (`+27 66 584 5674`) was carried over from the existing site — please confirm it's still correct.
- Real GPS coordinates now added (28°01'56.77"S 32°10'07.54"E) — embedded map and JSON-LD `geo` updated on the Contact page and homepage. Street address / postal address still only has suburb-level detail (Hluhluwe, KwaZulu-Natal) — add the exact street address if you have one, for the "Find Us" page and Google Business Profile.
- Twitter/X handle: add to `twitter:site` meta once you have one — currently unset.
- Add real `sameAs` social profile URLs (Facebook/Instagram/TripAdvisor etc.) to the Organization/LocalBusiness JSON-LD in `app/layout.tsx` and `app/contact/page.tsx`.

## Photography
- The brief referenced a `photos/` directory of new site photography to catalogue and assign — **this wasn't present in the uploaded zip**. If you have additional photos, send them and I'll run Task A2/A3 properly (SEO renaming, EXIF stripping, hero assignment) instead of reusing the existing image set.
- A handful of images from the original project weren't carried into the new build because a smaller, already-optimized duplicate was already in active use (see the "unused / spare" rows in `PHOTOS-MANIFEST.md`). If any of those are actually needed (e.g. for a future Find Us or expanded gallery), let me know and I'll bring them in properly renamed.

## Pages not yet built
- **Find Us / Directions page** — the brief calls for this as a core page. We now have real GPS coordinates (added to Contact), so this is buildable whenever you want it — just say the word and I'll build it with the map, directions, and an "approach to the property" photo.
- FAQ page — built at `/faq` with 6 questions and `FAQPage` JSON-LD, clearly stating that School Workshops, Homestead Stay, Hut Stay, and Ceremonies are separate from the primary isiZulu Cultural Tours. **Now fully translated into all 11 locales**, including the JSON-LD.

## Deferred by design (confirm before next session)
- **Shop is display-only for now** — "Add to Cart" was removed at your request; the page now just showcases what Mzamo has available. Turning it into an actual marketplace (cart, checkout, payments) is a separate future project.
- Visual/color redesign (Part E) — not done this pass; current palette/typography was ported over as-is from the Vite build, just re-implemented with next/font and Tailwind tokens. You mentioned you might handle some of this yourself — let me know if you want me to pick anything up here.
- Real street address (beyond "Hluhluwe, KwaZulu-Natal") is still missing — see above.

## Technical / environment
- **`next/font` requires network access to Google Fonts at build time.** This sandbox's network allowlist doesn't include `fonts.googleapis.com`, so the build here was validated with fonts temporarily stubbed out, then the real `next/font/google` code was restored unchanged. Run `npm run build` in your normal dev machine or CI/host (e.g. Vercel) to confirm the font fetch succeeds there — it should, since this is only a sandbox restriction.
- No image in the current asset set exceeds 4MB, so there's nothing flagged for manual compression review.
- Set up Google Search Console, verify the domain, and submit `/sitemap.xml` once deployed.
- Set up Google Analytics 4 (not present in this build).
- HTTPS is a hosting-level toggle, not a code change — enable it on whichever host you deploy to.
- Confirm `og:image` resolves correctly once deployed to `https://www.mzamovillagehomestead.co.za`.
- Run a final `npm run build` on the real deployment target as the last pre-launch check.

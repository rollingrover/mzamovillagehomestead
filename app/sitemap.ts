import type { MetadataRoute } from "next";
import { routing, buildLanguageAlternates } from "@/i18n/routing";

// Task D4: one sitemap entry per page x locale, with the full reciprocal
// hreflang set attached to each entry via `alternates.languages`.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.mzamovillagehomestead.co.za";
  const paths = ["/", "/our-story", "/experiences", "/gallery", "/events", "/shop", "/faq", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const languages = buildLanguageAlternates(path);
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const url = `${base}${prefix}${path === "/" ? "" : path}` || base;
      entries.push({
        url: path === "/" && locale === routing.defaultLocale ? base : url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "/" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}

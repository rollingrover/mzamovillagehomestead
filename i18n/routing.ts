import { defineRouting } from "next-intl/routing";

// Task D1: 11 locales. English has no URL prefix (as-needed strategy);
// all others get a /xx/ prefix.
export const routing = defineRouting({
  locales: ["en", "zu", "de", "nl", "fr", "it", "ru", "zh", "hi", "es", "pt"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

// Task D4: <html lang> per locale — most map directly to their code,
// a few need a region/script suffix.
export const htmlLangMap: Record<Locale, string> = {
  en: "en-ZA",
  zu: "zu",
  de: "de",
  nl: "nl",
  fr: "fr",
  it: "it",
  ru: "ru",
  zh: "zh-Hans",
  hi: "hi",
  es: "es",
  pt: "pt",
};

// OG locale tags (underscore, region where relevant)
export const ogLocaleMap: Record<Locale, string> = {
  en: "en_ZA",
  zu: "zu_ZA",
  de: "de_DE",
  nl: "nl_NL",
  fr: "fr_FR",
  it: "it_IT",
  ru: "ru_RU",
  zh: "zh_CN",
  hi: "hi_IN",
  es: "es_ES",
  pt: "pt_PT",
};

// Task D4: build the reciprocal hreflang map for a given path.
// Pathnames are identical across locales (no translated slugs), so this
// just needs to vary the locale prefix per the "as-needed" strategy.
const BASE_URL = "https://www.mzamovillagehomestead.co.za";

export function buildLanguageAlternates(path: string): Record<string, string> {
  const clean = path === "/" ? "" : path;
  const langs: Record<string, string> = {};
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    const hreflangCode = locale === "en" ? "en-ZA" : locale === "zh" ? "zh-Hans" : locale;
    langs[hreflangCode] = `${BASE_URL}${prefix}${clean || "/"}`;
  }
  langs["x-default"] = `${BASE_URL}${clean || "/"}`;
  return langs;
}

export function localeUrl(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${BASE_URL}${prefix}${clean || "/"}`;
}

import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactClient from "@/components/pages/ContactClient";
import BookingInfo from "@/components/BookingInfo";
import { StructuredData } from "@/components/StructuredData";
import { buildLanguageAlternates, localeUrl, routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/contact" : `/${locale}/contact`,
      languages: buildLanguageAlternates("/contact"),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localeUrl(locale as Locale, "/") },
      { "@type": "ListItem", position: 2, name: "Contact", item: localeUrl(locale as Locale, "/contact") },
    ],
  };

  // TODO: email intentionally omitted from this schema for now — see TODO-before-launch.md.
  // Do not add an "email" field here until a confirmed business address is provided.
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mzamo's Cultural Village & Homestead",
    telephone: "+27665845674",
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hluhluwe",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -28.0324361,
      longitude: 32.1687611,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27665845674",
      contactType: "reservations",
      availableLanguage: ["English", "Zulu"],
    },
  };

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={contactPointSchema} />
      {/* Task B4: static, server-rendered, indexable before hydration */}
      <BookingInfo />
      <ContactClient />
    </div>
  );
}

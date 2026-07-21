import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HomeClient from "@/components/pages/HomeClient";
import { StructuredData } from "@/components/StructuredData";
import { buildLanguageAlternates, localeUrl, routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Home uses the root layout's translated default title (no page-level
// title needed — Task C1: avoids duplicating the brand name in the title).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: buildLanguageAlternates("/"),
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
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <HomeClient />
    </>
  );
}

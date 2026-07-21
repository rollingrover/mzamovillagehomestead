import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import GalleryClient from "@/components/pages/GalleryClient";
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
  const t = await getTranslations({ locale, namespace: "seo.gallery" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/gallery" : `/${locale}/gallery`,
      languages: buildLanguageAlternates("/gallery"),
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
      { "@type": "ListItem", position: 2, name: "Gallery", item: localeUrl(locale as Locale, "/gallery") },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <GalleryClient />
    </>
  );
}

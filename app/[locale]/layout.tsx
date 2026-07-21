import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages, setRequestLocale } from "next-intl/server";
import { Poppins, Inter, Noto_Sans_SC, Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { routing, htmlLangMap, ogLocaleMap, buildLanguageAlternates, type Locale } from "@/i18n/routing";

// Task B2: next/font — self-hosted, zero layout shift, display: swap.
// Latin covers en/de/nl/fr/it/es/pt/zu. Cyrillic subset added for ru.
// zh (Noto Sans SC) and hi (Noto Sans Devanagari) are loaded as separate
// fallback fonts and only actually fetched by the browser when those
// glyphs are needed, rather than being force-loaded on every page.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zh",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  variable: "--font-hi",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    metadataBase: new URL("https://www.mzamovillagehomestead.co.za"),
    title: {
      default: t("siteTitleDefault"),
      template: "%s | Mzamo's Cultural Village & Homestead",
    },
    description: t("siteDescriptionDefault"),
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: buildLanguageAlternates("/"),
    },
    openGraph: {
      type: "website",
      siteName: "Mzamo's Cultural Village & Homestead",
      locale: ogLocaleMap[locale as Locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l as Locale]),
      url: "https://www.mzamovillagehomestead.co.za",
      title: t("siteTitleDefault"),
      description: t("siteDescriptionDefault"),
      images: [
        {
          url: "/images/mzamo-village-homestead-kraal-hero-hluhluwe-kzn.jpg",
          type: "image/jpeg",
          width: 1200,
          height: 630,
          alt: "Mzamo's Cultural Village & Homestead kraal at sunset in Hluhluwe, KwaZulu-Natal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      // TODO: replace with the real Twitter/X handle once one exists
      site: "@TODO_handle",
      title: t("siteTitleDefault"),
      description: t("siteDescriptionDefault"),
      images: ["/images/mzamo-village-homestead-kraal-hero-hluhluwe-kzn.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#5C3A21",
  width: "device-width",
  initialScale: 1,
};

function organizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Mzamo's Cultural Village & Homestead",
    description:
      "A warm, respectful Zulu cultural tourism experience in Hluhluwe, KwaZulu-Natal — cultural tours, beadwork, dance, traditional cooking, hut accommodation, school workshops and traditional ceremonies.",
    url: "https://www.mzamovillagehomestead.co.za",
    telephone: "+27665845674",
    // TODO: email intentionally omitted from public-facing schema for now — see TODO-before-launch.md
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
    image: "https://www.mzamovillagehomestead.co.za/images/mzamo-village-homestead-entrance-hluhluwe-kzn.png",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enables static rendering for this locale
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={htmlLangMap[locale as Locale]}>
      <body
        className={`${poppins.variable} ${inter.variable} ${notoSC.variable} ${notoDevanagari.variable} bg-white text-zulu-black font-sans`}
      >
        <StructuredData data={organizationSchema(locale)} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>

        <a
          href="https://wa.me/27665845674"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center text-2xl"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
      </body>
    </html>
  );
}

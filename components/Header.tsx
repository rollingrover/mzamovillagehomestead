"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useTransition } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LANGUAGE_META: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇿🇦" },
  zu: { label: "isiZulu", flag: "🇿🇦" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  fr: { label: "Français", flag: "🇫🇷" },
  nl: { label: "Nederlands", flag: "🇳🇱" },
  it: { label: "Italiano", flag: "🇮🇹" },
  zh: { label: "中文", flag: "🇨🇳" },
  ru: { label: "Русский", flag: "🇷🇺" },
  hi: { label: "हिन्दी", flag: "🇮🇳" },
  es: { label: "Español", flag: "🇪🇸" },
  pt: { label: "Português", flag: "🇧🇷" },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, startTransition] = useTransition();
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const dropRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.ourStory"), path: "/our-story" },
    { label: t("nav.experiences"), path: "/experiences" },
    { label: t("nav.gallery"), path: "/gallery" },
    { label: t("nav.events"), path: "/events" },
    { label: t("nav.shop"), path: "/shop" },
    { label: t("nav.faq"), path: "/faq" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  const currentLang = LANGUAGE_META[locale];

  // Task D3: switching locale preserves the current path.
  function switchLocale(nextLocale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zulu-brown/95 backdrop-blur-md shadow-warm" : "bg-zulu-brown"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/mzamo-village-homestead-logo-horizontal.png"
            alt="Mzamo's Cultural Village & Homestead — Zulu Cultural Village logo"
            width={200}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`text-zulu-cream hover:text-zulu-ochre-light transition-colors pb-1 border-b-2 ${
                pathname === link.path
                  ? "border-zulu-ochre-light text-zulu-ochre-light"
                  : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative ml-2" ref={dropRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-zulu-cream/30 rounded-full text-zulu-cream hover:border-zulu-ochre-light hover:text-zulu-ochre-light transition text-sm"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <Globe size={13} />
              <span>
                {currentLang.flag} {currentLang.label}
              </span>
              <ChevronDown size={13} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-44 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-warm-lg border border-gray-100 z-50 py-1"
              >
                {routing.locales.map((code) => (
                  <button
                    key={code}
                    role="option"
                    aria-selected={locale === code}
                    onClick={() => {
                      switchLocale(code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-zulu-cream transition ${
                      locale === code ? "text-zulu-brown font-semibold bg-amber-50" : "text-zulu-text"
                    }`}
                  >
                    <span className="text-base">{LANGUAGE_META[code].flag}</span>
                    {LANGUAGE_META[code].label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zulu-cream hover:text-zulu-ochre-light transition min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-zulu-brown border-t border-zulu-ochre/20 pb-6">
          <div className="px-5 pt-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className={`flex items-center min-h-[44px] px-4 rounded-xl text-sm font-medium text-zulu-cream hover:bg-white/10 transition ${
                  pathname === link.path ? "text-zulu-ochre-light bg-white/10" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 px-5">
            <p className="text-xs uppercase tracking-widest text-zulu-cream/40 mb-3 px-1">Language</p>
            <div className="grid grid-cols-2 gap-2">
              {routing.locales.map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    switchLocale(code);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-3 rounded-xl text-sm min-h-[44px] transition ${
                    locale === code
                      ? "bg-zulu-ochre text-white font-semibold"
                      : "bg-white/10 text-zulu-cream hover:bg-white/20"
                  }`}
                >
                  <span>{LANGUAGE_META[code].flag}</span>
                  {LANGUAGE_META[code].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

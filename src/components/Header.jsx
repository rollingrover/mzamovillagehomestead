import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-horizontal.png";

const LANGUAGES = [
  { code: "en", label: "English",    flag: "🇿🇦" },
  { code: "zu", label: "isiZulu",    flag: "🇿🇦" },
  { code: "zh", label: "中文",       flag: "🇨🇳" },
  { code: "ru", label: "Русский",    flag: "🇷🇺" },
  { code: "hi", label: "हिन्दी",    flag: "🇮🇳" },
  { code: "es", label: "Español",    flag: "🇪🇸" },
  { code: "pt", label: "Português",  flag: "🇧🇷" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const { t, i18n } = useTranslation();
  const location    = useLocation();
  const dropRef     = useRef(null);

  const navLinks = [
    { label: t("nav.home"),        path: "/" },
    { label: t("nav.ourStory"),    path: "/our-story" },
    { label: t("nav.experiences"), path: "/experiences" },
    { label: t("nav.gallery"),     path: "/gallery" },
    { label: t("nav.events"),      path: "/events" },
    { label: t("nav.shop"),        path: "/shop" },
    { label: t("nav.contact"),     path: "/contact" },
  ];

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  /* Close dropdown on outside click */
  useEffect(() => {
    const h = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setLangOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  /* Scroll-aware background */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-zulu-brown/95 backdrop-blur-md shadow-warm"
        : "bg-zulu-brown"
    }`}>
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src={logo} alt="Mzamo Village Homestead" className="h-11 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`text-zulu-cream hover:text-zulu-ochre transition-colors pb-1 border-b-2 ${
                location.pathname === link.path
                  ? "border-zulu-ochre text-zulu-ochre"
                  : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language picker */}
          <div className="relative ml-2" ref={dropRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-zulu-cream/30 rounded-full text-zulu-cream hover:border-zulu-ochre hover:text-zulu-ochre transition text-sm"
            >
              <Globe size={13} />
              <span>{currentLang.flag} {currentLang.label}</span>
              <ChevronDown size={13} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-warm-lg border border-gray-100 overflow-hidden z-50 py-1">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-zulu-cream transition ${
                      i18n.language === lang.code
                        ? "text-zulu-brown font-semibold bg-amber-50"
                        : "text-zulu-text"
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zulu-cream hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-zulu-brown border-t border-zulu-ochre/20 pb-6">
          <div className="px-5 pt-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`flex items-center min-h-[44px] px-4 rounded-xl text-sm font-medium text-zulu-cream hover:bg-white/10 transition ${
                  location.pathname === link.path ? "text-zulu-ochre bg-white/10" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile language grid */}
          <div className="mt-5 px-5">
            <p className="text-xs uppercase tracking-widest text-zulu-cream/40 mb-3 px-1">Language</p>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { i18n.changeLanguage(lang.code); setMobileOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-3 rounded-xl text-sm min-h-[44px] transition ${
                    i18n.language === lang.code
                      ? "bg-zulu-ochre text-white font-semibold"
                      : "bg-white/10 text-zulu-cream hover:bg-white/20"
                  }`}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

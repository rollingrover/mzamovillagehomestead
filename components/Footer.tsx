"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  const navLinks = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.ourStory'), path: "/our-story" },
    { label: t('nav.experiences'), path: "/experiences" },
    { label: t('nav.gallery'), path: "/gallery" },
    { label: t('nav.events'), path: "/events" },
    { label: t('nav.shop'), path: "/shop" },
    { label: t('nav.faq'), path: "/faq" },
    { label: t('nav.contact'), path: "/contact" },
  ];

  const partners = [
    { name: "Diza Travels", url: "https://www.dizatravels.co.za" },
    { name: "eThlathini Rest Camp", url: "https://www.ethlathini.co.za" },
    { name: "OpDesk", url: "https://opdesk.app" },
    { name: "Zatours", url: "https://www.zatours.co.za" },
  ];

  return (
    <footer style={{ backgroundColor: '#f04805' }}>
      {/* Decorative tribal top border */}
      <div className="w-full h-2 bg-gradient-to-r from-zulu-ochre via-amber-400 to-zulu-ochre opacity-80" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand column */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">{t('footer.title')}</h2>
          <div className="w-10 h-0.5 bg-zulu-ochre mb-4 rounded" />
          <p className="text-white/60 leading-relaxed text-sm mb-6">{t('footer.tagline')}</p>
          <a
            href="https://wa.me/27665845674"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-base font-bold mb-2 text-white">{t('footer.quickLinks')}</h2>
          <div className="w-10 h-0.5 bg-zulu-ochre mb-4 rounded" />
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="text-white/60 hover:text-zulu-ochre transition text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-bold mb-2 text-white">{t('footer.contact')}</h2>
          <div className="w-10 h-0.5 bg-zulu-ochre mb-4 rounded" />
          <div className="space-y-3 text-sm text-white/60">
            <p>📍 Hluhluwe, KwaZulu-Natal</p>
            <a
              href="https://wa.me/27665845674"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-zulu-ochre transition"
            >
              💬 +27 66 584 5674
            </a>
            <p>🌍 Authentic isiZulu experiences</p>
          </div>
        </div>

        {/* Partners Column */}
        <div>
          <h2 className="text-base font-bold mb-2 text-white">Partners</h2>
          <div className="w-10 h-0.5 bg-zulu-ochre mb-4 rounded" />
          <ul className="space-y-2">
            {partners.map((partner, i) => (
              <li key={i}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-zulu-ochre transition text-sm block"
                >
                  {partner.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar - UPDATED with WebDesign credit */}
      <div className="border-t border-white/10 text-center py-5 text-xs text-white/35 space-y-1">
        <p>{t('footer.copyRight', { year: new Date().getFullYear() })}</p>
        <p>
          WebDesign by{" "}
          <a
            href="https://www.rollingrover.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-zulu-ochre transition"
          >
            RollingRover Productions
          </a>
        </p>
      </div>
    </footer>
  );
}
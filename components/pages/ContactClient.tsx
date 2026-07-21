"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, MessageCircle, Globe, Clock } from "lucide-react";

export default function ContactClient() {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      {/* Hero banner — Task A3: friendly, welcoming image with people */}
      <section className="relative bg-zulu-brown text-white py-28 text-center overflow-hidden">
        <Image
          src="/images/mzamo-village-homestead-guests-hluhluwe-kzn.jpg"
          alt="Guests welcomed at Mzamo's Cultural Village & Homestead, Hluhluwe, KwaZulu-Natal"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-zulu-brown" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t("contact.pageTitle")}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">{t("contact.intro")}</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-warm border border-amber-100 p-8"
          >
            <span className="inline-block w-8 h-1 bg-zulu-ochre mb-5 rounded" />
            <h2 className="text-2xl font-bold mb-2 text-zulu-brown-dark">
              {t("contact.sendMessageTitle")}
            </h2>

            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6 mt-4">
              <Clock size={20} className="text-zulu-ochre flex-shrink-0 mt-0.5" />
              <p className="text-zulu-text text-sm leading-relaxed">{t("contact.formComingSoon")}</p>
            </div>

            <div className="space-y-4 opacity-40 pointer-events-none select-none">
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed text-zulu-text"
              />
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed text-zulu-text"
              />
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed resize-none text-zulu-text"
              />
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 px-6 py-3.5 rounded-xl font-semibold cursor-not-allowed"
              >
                {t("contact.sendButton")}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <span className="inline-block w-8 h-1 bg-zulu-ochre mb-5 rounded" />
              <h2 className="text-2xl font-bold mb-6 text-zulu-brown-dark">{t("contact.contactTitle")}</h2>
            </div>

            <a
              href="https://wa.me/27665845674"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-green-600 hover:bg-green-700 rounded-2xl transition group shadow-warm"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Chat on WhatsApp</p>
                <p className="text-white/85 text-sm">+27 66 584 5674 · Fastest reply</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 bg-white border border-amber-100 rounded-2xl shadow-warm">
              <div className="w-11 h-11 bg-zulu-cream rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-zulu-ochre" />
              </div>
              <div>
                <p className="font-semibold text-zulu-brown-dark">Location</p>
                <p className="text-zulu-text">Hluhluwe, KwaZulu-Natal</p>
                <p className="text-zulu-text/60 text-sm">South Africa</p>
              </div>
            </div>

            {/* GPS map — 28°01'56.77"S 32°10'07.54"E */}
            <div className="bg-white border border-amber-100 rounded-2xl shadow-warm overflow-hidden">
              <div className="relative w-full h-64">
                <iframe
                  title="Mzamo's Cultural Village & Homestead location map"
                  src="https://www.google.com/maps?q=-28.0324361,32.1687611&z=15&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Mzamo's Cultural Village & Homestead at coordinates 28°01'56.77&quot;S 32°10'07.54&quot;E, Hluhluwe, KwaZulu-Natal"
                />
              </div>
              <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-zulu-text/70 text-sm">28°01&apos;56.77&quot;S 32°10&apos;07.54&quot;E</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-28.0324361,32.1687611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zulu-ochre-text font-semibold text-sm hover:underline"
                >
                  <MapPin size={15} /> Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-amber-100 rounded-2xl shadow-warm">
              <div className="w-11 h-11 bg-zulu-cream rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe size={22} className="text-zulu-ochre" />
              </div>
              <p className="text-zulu-text pt-2.5">{t("contact.note")}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

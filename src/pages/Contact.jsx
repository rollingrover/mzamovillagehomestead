import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, MessageCircle, Globe, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      {/* Page header */}
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('contact.pageTitle')}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">{t('contact.intro')}</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Contact form — temporarily disabled ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-warm border border-amber-100 p-8"
          >
            <span className="inline-block w-8 h-1 bg-zulu-ochre mb-5 rounded" />
            <h2 className="text-2xl font-bold mb-2 text-zulu-brown-dark">{t('contact.sendMessageTitle', 'Send us a message')}</h2>

            {/* Temporary notice banner */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6 mt-4">
              <Clock size={20} className="text-zulu-ochre flex-shrink-0 mt-0.5" />
              <p className="text-zulu-text text-sm leading-relaxed">{t('contact.formComingSoon')}</p>
            </div>

            {/* Disabled form fields (visual only) */}
            <div className="space-y-4 opacity-40 pointer-events-none select-none">
              <input
                type="text"
                placeholder={t('contact.namePlaceholder', 'Your Name')}
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed text-zulu-text"
              />
              <input
                type="email"
                placeholder={t('contact.emailPlaceholder', 'Your Email')}
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed text-zulu-text"
              />
              <textarea
                placeholder={t('contact.messagePlaceholder', 'Your Message')}
                rows="5"
                disabled
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 cursor-not-allowed resize-none text-zulu-text"
              />
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 px-6 py-3.5 rounded-xl font-semibold cursor-not-allowed"
              >
                {t('contact.sendButton', 'Send Message')}
              </button>
            </div>
          </motion.div>

          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <span className="inline-block w-8 h-1 bg-zulu-ochre mb-5 rounded" />
              <h2 className="text-2xl font-bold mb-6 text-zulu-brown-dark">{t('contact.contactTitle')}</h2>
            </div>

            {/* WhatsApp CTA — primary */}
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

            {/* Location */}
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

            {/* Note */}
            <div className="flex items-start gap-4 p-5 bg-white border border-amber-100 rounded-2xl shadow-warm">
              <div className="w-11 h-11 bg-zulu-cream rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe size={22} className="text-zulu-ochre" />
              </div>
              <p className="text-zulu-text pt-2.5">{t('contact.note')}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Events() {
  const { t } = useTranslation();

  const events = [
    { titleKey: 'events.cards.weddings.title',     descKey: 'events.cards.weddings.desc',     emoji: '💒', bg: 'bg-amber-50',  border: 'border-amber-200' },
    { titleKey: 'events.cards.workshops.title',    descKey: 'events.cards.workshops.desc',    emoji: '🎓', bg: 'bg-green-50',  border: 'border-green-200' },
    { titleKey: 'events.cards.storytelling.title', descKey: 'events.cards.storytelling.desc', emoji: '🔥', bg: 'bg-orange-50', border: 'border-orange-200' },
    { titleKey: 'events.cards.ceremonies.title',   descKey: 'events.cards.ceremonies.desc',   emoji: '🥁', bg: 'bg-purple-50', border: 'border-purple-200' },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre text-sm font-semibold tracking-widest uppercase">Celebrate with us</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('events.pageTitle')}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto">{t('events.intro')}</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-7">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className={`group ${event.bg} border ${event.border} rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-warm hover:shadow-warm-lg`}
            >
              <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform inline-block">{event.emoji}</span>
              <h3 className="text-2xl font-bold mb-3 text-zulu-brown-dark">{t(event.titleKey)}</h3>
              <p className="text-zulu-text/80 leading-relaxed">{t(event.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-zulu-brown hover:bg-zulu-brown-dark text-white px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-warm"
          >
            {t('nav.contact')} →
          </Link>
        </div>
      </section>
    </div>
  );
}

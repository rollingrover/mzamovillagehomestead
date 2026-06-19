import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import hutImg from '../assets/hut1.png';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Experiences() {
  const { t } = useTranslation();

  // The 4 core activities that make up the unified isiZulu Cultural Tour
  const activities = [
    { key: 'workshops',     emoji: '🎓', img: '/images/workshop.png' },
    { key: 'homesteadStay', emoji: '🏡', img: '/images/hutandimpi.png' },
    { key: 'hutStay',       emoji: '🛖', img: '/images/hut2.png' },
    { key: 'ceremonies',    emoji: '🥁', img: '/images/ceremony.png' },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">What we offer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('experiences.pageTitle')}</h1>
        </motion.div>
      </section>

      {/* ── Unified isiZulu Cultural Tour ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative bg-zulu-brown rounded-3xl overflow-hidden mb-14 shadow-warm-lg"
        >
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-zulu-ochre text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
            <Star size={14} fill="white" /> One Unified Experience
          </div>

          <div className="p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('experiences.tour.title')}
            </h2>
            <p className="text-zulu-cream/85 text-lg leading-relaxed">
              {t('experiences.tour.desc')}
            </p>
          </div>

          {/* 4 core activities grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zulu-brown-dark">
            {activities.map(({ key, emoji, img }) => (
              <div key={key} className="bg-zulu-brown p-6 flex flex-col items-center text-center">
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 bg-zulu-brown-dark">
                  <img src={img} alt={t(`experiences.tour.activities.${key}.title`)} className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl mb-2">{emoji}</span>
                <h3 className="text-white font-bold mb-1">{t(`experiences.tour.activities.${key}.title`)}</h3>
                <p className="text-zulu-cream/70 text-sm leading-relaxed">{t(`experiences.tour.activities.${key}.desc`)}</p>
              </div>
            ))}
          </div>

          <div className="p-10 md:p-14 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-zulu-ochre hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              {t('experiences.tour.cta')}
              <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* ── Craftsmanship note ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-warm"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-zulu-cream">
            <img src={hutImg} alt="Handmade by Mzamo Village" className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-zulu-brown-dark mb-2">{t('experiences.craftsmanship.title')}</h3>
            <p className="text-zulu-text leading-relaxed">{t('experiences.craftsmanship.desc')}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

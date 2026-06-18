import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import beadworkImg from '../assets/beadwork.jpg';
import danceImg from '../assets/dance.jpg';
import spearImg from '../assets/spear.jpg';
import hutImg from '../assets/hut1.png';
import cookingImg from '../assets/cooking.png';

export default function Experiences() {
  const { t } = useTranslation();

  const experiences = [
    { titleKey: 'experiences.cards.beadwork.title', descKey: 'experiences.cards.beadwork.desc', img: beadworkImg, emoji: '📿' },
    { titleKey: 'experiences.cards.dance.title',    descKey: 'experiences.cards.dance.desc',    img: danceImg,    emoji: '💃' },
    { titleKey: 'experiences.cards.spear.title',    descKey: 'experiences.cards.spear.desc',    img: spearImg,    emoji: '🛡️' },
    { titleKey: 'experiences.cards.cooking.title',  descKey: 'experiences.cards.cooking.desc',  img: cookingImg,        emoji: '🍲' },
    { titleKey: 'experiences.cards.accommodation.title', descKey: 'experiences.cards.accommodation.desc', img: hutImg, emoji: '🛖' },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre text-sm font-semibold tracking-widest uppercase">What we offer</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('experiences.pageTitle')}</h1>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-7">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-warm border border-amber-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden h-56 bg-zulu-cream">
                {exp.img
                  ? <img src={exp.img} alt={t(exp.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  : <div className="w-full h-full flex items-center justify-center text-6xl">{exp.emoji}</div>
                }
              </div>
              <div className="p-7">
                <span className="text-2xl mb-3 block">{exp.emoji}</span>
                <h3 className="text-xl font-bold mb-2 text-zulu-brown-dark">{t(exp.titleKey)}</h3>
                <p className="text-zulu-text/80 leading-relaxed text-sm">{t(exp.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function OurStory() {
  const { t } = useTranslation();

  const sections = [
    { title: t('ourStory.livingKraalTitle'), body: t('ourStory.livingKraalP') },
    { title: t('ourStory.missionTitle'),     body: t('ourStory.missionP')     },
    { title: t('ourStory.communityTitle'),   body: t('ourStory.communityP')   },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>

      {/* Hero banner */}
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">Mzamo Village</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('ourStory.heroTitle')}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto">{t('ourStory.heroSubtitle')}</p>
        </motion.div>
      </section>

      {/* My Story */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block w-12 h-1 bg-zulu-ochre mb-6 rounded" />
          <h2 className="text-4xl font-bold mb-8 text-zulu-brown-dark">{t('ourStory.myStoryTitle')}</h2>
          <p className="text-lg leading-relaxed mb-6 text-zulu-text">{t('ourStory.myStoryP1')}</p>
          <p className="text-lg leading-relaxed mb-8 text-zulu-text">{t('ourStory.myStoryP2')}</p>
          <blockquote className="border-l-4 border-zulu-ochre pl-6 py-2 italic text-xl text-zulu-brown font-medium">
            {t('ourStory.thankYou')}
          </blockquote>
        </motion.div>
      </section>

      {/* Three sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="inline-block w-8 h-1 bg-zulu-ochre mb-4 rounded" />
              <h2 className="text-3xl font-bold mb-4 text-zulu-brown-dark">{s.title}</h2>
              <p className="text-lg leading-relaxed text-zulu-text">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

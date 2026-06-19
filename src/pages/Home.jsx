import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Star, GraduationCap, Home as HomeIcon, ChevronRight } from 'lucide-react';
import kraalHero from '../assets/kraal-hero.jpg';
import beadworkImg from '../assets/beadwork.jpg';
import danceImg from '../assets/dance.jpg';
import spearImg from '../assets/spear.jpg';
import hutImg from '../assets/hut1.png';
import cookingImg from '../assets/cooking.jpg';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const { t } = useTranslation();

  const subItems = [
    { icon: '📿', key: 'beadwork', img: beadworkImg, label: 'Beadwork with Gogo' },
    { icon: '💃', key: 'dance', img: danceImg, label: 'Zulu Dance & Music' },
    { icon: '🛡️', key: 'spear', img: spearImg, label: 'Spear & Shield Crafting' },
    { icon: '🍲', key: 'cooking', img: cookingImg, label: 'Traditional Cooking Experience' },
  ];

  const secondaryCards = [
    {
      icon: <Star size={24} className="text-zulu-ochre" />,
      titleKey: 'home.featured.ceremonies.title',
      descKey:  'home.featured.ceremonies.desc',
      to: '/events',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      icon: <GraduationCap size={24} className="text-zulu-ochre" />,
      titleKey: 'home.featured.workshops.title',
      descKey:  'home.featured.workshops.desc',
      to: '/events',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      icon: <HomeIcon size={24} className="text-zulu-ochre" />,
      titleKey: 'home.featured.accommodation.title',
      descKey:  'home.featured.accommodation.desc',
      to: '/experiences',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
    },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${kraalHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28">
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            className="text-sm font-bold tracking-[0.35em] uppercase mb-4"
            style={{ 
              color: '#FF8C42', 
              textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,140,66,0.3)',
              fontWeight: 800,
              letterSpacing: '0.4em'
            }}
          >
            Hluhluwe · KwaZulu-Natal
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.22 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span style={{ color: '#e4ba78' }}>{t('home.heroTitlePart1')}</span>
            <br />
            <span style={{ color: '#ffffff' }}>{t('home.heroTitlePart2')}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.38 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            style={{ 
              color: '#FF8C42', 
              textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 50px rgba(255,140,66,0.25)',
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}
          >
            {t('home.heroSubtitle')}
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white hover:bg-zulu-ochre text-zulu-brown hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-warm-lg"
            >
              {t('home.bookButton')}
            </Link>
            <Link
              to="/experiences"
              className="bg-white hover:bg-zulu-ochre text-zulu-brown hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-warm-lg"
            >
              {t('home.exploreButton')}
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="10" r="3" fill="currentColor"/>
          </svg>
        </motion.div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block w-12 h-1 bg-zulu-ochre mb-6 rounded" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zulu-brown-dark">{t('home.introTitle')}</h2>
            <p className="text-lg text-zulu-text leading-relaxed">{t('home.introText')}</p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED EXPERIENCES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block w-12 h-1 bg-zulu-ochre mb-5 rounded" />
            <h2 className="text-4xl md:text-5xl font-bold text-zulu-brown-dark">{t('home.featuredTitle')}</h2>
          </motion.div>

          {/* PRIMARY card - NOW WITH 2x2 GRID OF IMAGE CARDS */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative bg-zulu-brown rounded-3xl overflow-hidden mb-10 shadow-warm-lg"
          >
            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-zulu-ochre text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
              <Star size={14} fill="white" /> Primary Experience
            </div>

            <div className="p-10 md:p-14">
              {/* Header text */}
              <div className="max-w-2xl mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('home.featured.culturalTour.title')}
                </h3>
                <p className="text-zulu-cream/85 text-lg leading-relaxed">
                  {t('home.featured.culturalTour.desc')}
                </p>
              </div>

              {/* 2x2 Grid of Experience Cards - WITH BRIGHTER TEXT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subItems.map(({ icon, key, img }) => (
                  <div 
                    key={key} 
                    className="group relative overflow-hidden rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={img} 
                        alt={key} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Overlay with icon and text - BRIGHTER COLORS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col justify-end p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl drop-shadow-lg">{icon}</span>
                        <span 
                          className="font-bold text-lg drop-shadow-lg"
                          style={{ 
                            color: '#FFD700',
                            textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(255,215,0,0.3)'
                          }}
                        >
                          {t(`home.featured.culturalTour.items.${key}`)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-zulu-ochre hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  {t('home.featured.culturalTour.cta')}
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* SECONDARY cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryCards.map(({ icon, titleKey, descKey, to, bg, border }, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <Link
                  to={to}
                  className={`group flex flex-col h-full ${bg} border ${border} rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 shadow-warm hover:shadow-warm-lg`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zulu-brown-dark">{t(titleKey)}</h3>
                  <p className="text-zulu-text/80 leading-relaxed text-sm flex-1">{t(descKey)}</p>
                  <div className="mt-5 flex items-center gap-1 text-zulu-ochre-text text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={15} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUT ACCOMMODATION BANNER ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl overflow-hidden shadow-warm"
          >
            <div className="overflow-hidden h-72 md:h-full min-h-[280px]">
              <img src={hutImg} alt="Traditional Hut" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-10 md:pr-14">
              <span className="inline-block w-8 h-1 bg-zulu-ochre mb-5 rounded" />
              <h2 className="text-3xl font-bold mb-4 text-zulu-brown-dark">{t('home.featured.accommodation.title')}</h2>
              <p className="text-zulu-text leading-relaxed mb-7">{t('home.featured.accommodation.desc')}</p>
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 bg-zulu-brown hover:bg-zulu-brown-dark text-white px-7 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                {t('home.exploreButton')} <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
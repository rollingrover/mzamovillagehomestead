import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag } from 'lucide-react';
import necklaceImg from '../assets/shop/beadnecklace.png';
import buffImg from '../assets/shop/buff.png';
import smlshieldImg from '../assets/shop/smlshield.png';
import danceImg from '../assets/dance.jpg';
import rhinoImg from '../assets/shop/rhinosml.png';
import crocImg from '../assets/shop/croc.png';
import medshieldImg from '../assets/shop/medshield.png';
import gwalagwalaImg from '../assets/shop/gwalagwala.png';
import servingtrayImg from '../assets/shop/servingtray.png';

export default function Shop() {
  const { t } = useTranslation();

  const products = [
    { titleKey: 'shop.products.necklace.title', priceKey: 'shop.products.necklace.price', img: necklaceImg, emoji: '📿' },
    { titleKey: 'shop.products.smlshield.title',   priceKey: 'shop.products.smlshield.price',   img: smlshieldImg,    emoji: '🛡️' },
    { titleKey: 'shop.products.buff.title',   priceKey: 'shop.products.buff.price',   img: buffImg,      emoji: '🎨🏺' },
    { titleKey: 'shop.products.rhino.title',   priceKey: 'shop.products.rhino.price',   img: rhinoImg,    emoji: '🎨🏺' },
    { titleKey: 'shop.products.croc.title', priceKey: 'shop.products.croc.price', img: crocImg, emoji: '🐊🎨' },
    { titleKey: 'shop.products.medshield.title',   priceKey: 'shop.products.medshield.price',   img: medshieldImg,    emoji: '🛡️' },
    { titleKey: 'shop.products.gwalagwala.title',   priceKey: 'shop.products.gwalagwala.price',   img: gwalagwalaImg,      emoji: '🎨🏺' },
    { titleKey: 'shop.products.servingtray.title',   priceKey: 'shop.products.servingtray.price',   img: servingtrayImg,    emoji: '🎨🏺' },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">Handmade with Heritage</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('shop.pageTitle')}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">{t('shop.intro')}</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Craftsmanship note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left shadow-warm"
        >
          <span className="text-4xl flex-shrink-0">🤲</span>
          <div>
            <h2 className="text-lg font-bold text-zulu-brown-dark mb-1">{t('experiences.craftsmanship.title')}</h2>
            <p className="text-zulu-text/80 text-sm leading-relaxed">{t('experiences.craftsmanship.desc')}</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-warm border border-amber-100 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden h-52 bg-zulu-cream">
                <img
                  src={product.img}
                  alt={t(product.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <span className="text-3xl mb-2">{product.emoji}</span>
                <h3 className="text-lg font-bold mb-1 text-zulu-brown-dark">{t(product.titleKey)}</h3>
                <p className="text-zulu-ochre-text font-semibold text-lg mb-4">{t(product.priceKey)}</p>
                <button className="mt-auto flex items-center justify-center gap-2 bg-zulu-brown hover:bg-zulu-brown-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors min-h-[44px]">
                  <ShoppingBag size={16} />
                  {t('shop.addToCart')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

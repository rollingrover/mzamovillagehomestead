import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag } from 'lucide-react';
import beadworkImg from '../assets/beadwork.jpg';
import hutImg from '../assets/hut1.png';
import spearImg from '../assets/spear.jpg';
import danceImg from '../assets/dance.jpg';

export default function Shop() {
  const { t } = useTranslation();

  const products = [
    { titleKey: 'shop.products.necklace.title', priceKey: 'shop.products.necklace.price', img: beadworkImg, emoji: '📿' },
    { titleKey: 'shop.products.shield.title',   priceKey: 'shop.products.shield.price',   img: spearImg,    emoji: '🛡️' },
    { titleKey: 'shop.products.basket.title',   priceKey: 'shop.products.basket.price',   img: hutImg,      emoji: '🧺' },
    { titleKey: 'shop.products.attire.title',   priceKey: 'shop.products.attire.price',   img: danceImg,    emoji: '👘' },
  ];

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre text-sm font-semibold tracking-widest uppercase">Handmade with Heritage</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('shop.pageTitle')}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">{t('shop.intro')}</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
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
                <p className="text-zulu-ochre font-semibold text-lg mb-4">{t(product.priceKey)}</p>
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const { t } = useTranslation();
  const images = [
    "/images/frontentrance.png", "/images/hutandimpi.png", "/images/ntombi.png",
    "/images/village.png", "/images/viewfrominside.png", "/images/hut2.png",
    "/images/cs8_4627.webp",
  ];
  const [current, setCurrent] = useState(null);
  const close = () => setCurrent(null);
  const prev = (e) => { e.stopPropagation(); setCurrent(p => p === 0 ? images.length - 1 : p - 1); };
  const next = (e) => { e.stopPropagation(); setCurrent(p => p === images.length - 1 ? 0 : p + 1); };

  return (
    <div style={{ backgroundColor: '#e4ba78' }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre text-sm font-semibold tracking-widest uppercase">Photos</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t('gallery.pageTitle')}</h1>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.07 }}
              className="group overflow-hidden rounded-2xl shadow-warm cursor-pointer aspect-[4/3] border border-amber-100"
              onClick={() => setCurrent(i)}
            >
              <img
                src={src}
                alt={t('gallery.imageAlt', { index: i + 1 })}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {current !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/92 flex items-center justify-center z-50 p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center">
              <X size={30} />
            </button>
            <button onClick={prev} className="absolute left-4 md:left-8 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center">
              <ChevronLeft size={44} />
            </button>
            <motion.img
              key={current}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              src={images[current]}
              className="max-w-4xl w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button onClick={next} className="absolute right-4 md:right-8 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center">
              <ChevronRight size={44} />
            </button>
            <div className="absolute bottom-5 text-white/40 text-sm">{current + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

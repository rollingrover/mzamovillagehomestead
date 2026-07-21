"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/mzamo-village-homestead-entrance-hluhluwe-kzn.png",
    alt: "Entrance to Mzamo's Cultural Village & Homestead in Hluhluwe, KwaZulu-Natal",
  },
  {
    src: "/images/zulu-guide-traditional-hut-hluhluwe-kzn.png",
    alt: "Zulu cultural guide beside a traditional hut at Mzamo's Cultural Village & Homestead",
  },
  {
    src: "/images/zulu-cultural-guide-portrait-hluhluwe-kzn.png",
    alt: "Portrait of a Zulu cultural guide at Mzamo's Cultural Village & Homestead",
  },
  {
    src: "/images/mzamo-village-homestead-overview-hluhluwe-kzn.png",
    alt: "Overview of Mzamo's Cultural Village & Homestead, a living Zulu kraal in Hluhluwe",
  },
  {
    src: "/images/zulu-hut-interior-view-hluhluwe-kzn.png",
    alt: "Interior view from inside a traditional Zulu hut at Mzamo Village",
  },
  {
    src: "/images/traditional-zulu-hut-interior-hluhluwe-kzn.png",
    alt: "Traditional Zulu hut interior showing woven craftsmanship, Hluhluwe",
  },
  {
    src: "/images/zulu-village-cultural-scene-hluhluwe-kzn.webp",
    alt: "Zulu cultural village scene at Mzamo's Cultural Village & Homestead, Hluhluwe",
  },
];

export default function GalleryClient() {
  const t = useTranslations();
  const [current, setCurrent] = useState<number | null>(null);
  const close = () => setCurrent(null);
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((p) => (p === 0 ? images.length - 1 : (p as number) - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((p) => (p === images.length - 1 ? 0 : (p as number) + 1));
  };

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">Photos</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t("gallery.pageTitle")}</h1>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl shadow-warm cursor-pointer aspect-[4/3] border border-amber-100"
              onClick={() => setCurrent(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zulu-brown-dark mt-14">
          Want to see it in person?{" "}
          <Link href="/contact" className="text-zulu-ochre-text font-semibold hover:underline">
            Book a visit to Mzamo&apos;s Cultural Village &amp; Homestead
          </Link>
          .
        </p>
      </section>

      <AnimatePresence>
        {current !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/92 flex items-center justify-center z-50 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X size={30} />
            </button>
            <button
              onClick={prev}
              className="absolute left-4 md:left-8 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronLeft size={44} />
            </button>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                sizes="90vw"
                className="object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
            <button
              onClick={next}
              className="absolute right-4 md:right-8 text-white hover:text-zulu-ochre transition min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronRight size={44} />
            </button>
            <div className="absolute bottom-5 text-white/40 text-sm">
              {current + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

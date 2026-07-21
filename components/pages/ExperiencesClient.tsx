"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronRight, Plus } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

// Primary Experience — the four core activities, exactly as specified.
const primaryItems = [
  { key: "beadwork", icon: "/images/icons/zulu-beadwork-icon.png", img: "/images/zulu-beadwork-with-gogo-hluhluwe-kzn.jpg" },
  { key: "dance", icon: "/images/icons/zulu-dance-icon.png", img: "/images/zulu-traditional-dance-music-hluhluwe-kzn.jpg" },
  { key: "spear", icon: "/images/icons/zulu-spear-shield-icon.png", img: "/images/zulu-spear-shield-crafting-hluhluwe-kzn.jpg" },
  { key: "cooking", icon: "/images/icons/zulu-cooking-icon.png", img: "/images/traditional-zulu-cooking-experience-hluhluwe-kzn.jpg" },
];

// Extra experiences — separate, optional, bookable on their own.
const extraItems = [
  { key: "workshops", icon: "/images/icons/zulu-school-workshop-icon.png" },
  { key: "homesteadStay", icon: "/images/icons/zulu-homestead-icon.png" },
  { key: "hutStay", icon: "/images/icons/zulu-hut-icon.png" },
  { key: "ceremonies", icon: "/images/icons/zulu-ceremony-icon.png" },
];

export default function ExperiencesClient() {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      {/* Hero banner — Task A3: cultural activity hero image */}
      <section className="relative bg-zulu-brown text-white py-28 text-center overflow-hidden">
        <Image
          src="/images/zulu-storytelling-experience-hluhluwe-kzn.png"
          alt="Zulu storytelling and cultural performance at Mzamo's Cultural Village & Homestead, Hluhluwe"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-zulu-brown" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">
            What we offer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t("experiences.pageTitle")}</h1>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* PRIMARY EXPERIENCE — restored exact wording, matches the Home page */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-zulu-brown rounded-3xl overflow-hidden mb-10 shadow-warm-lg"
        >
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-zulu-ochre text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
            <Star size={14} fill="white" /> Primary Experience
          </div>

          <div className="p-10 md:p-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("experiences.tour.title")}</h2>
            <p className="text-zulu-cream/85 text-lg leading-relaxed">{t("experiences.tour.desc")}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-10 pb-4">
            {primaryItems.map(({ key, icon, img }) => (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={img}
                    alt={t(`experiences.tour.items.${key}`)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 flex-shrink-0 bg-white/90 rounded-full p-1 shadow-lg">
                      <Image src={icon} alt="" fill sizes="28px" className="object-contain p-0.5" aria-hidden="true" />
                    </div>
                    <span
                      className="font-bold text-sm drop-shadow-lg"
                      style={{ color: "#FFD700", textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
                    >
                      {t(`experiences.tour.items.${key}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 md:p-14 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zulu-ochre hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              {t("experiences.tour.cta")}
              <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* EXTRA EXPERIENCES — clearly separate from the primary tour */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-white border border-amber-200 text-zulu-ochre-text px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              <Plus size={13} /> {t("experiences.extra.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zulu-brown-dark mb-3">
              {t("experiences.extra.title")}
            </h2>
            <p className="text-zulu-text/80 max-w-2xl mx-auto">{t("experiences.extra.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extraItems.map(({ key, icon }) => (
              <div
                key={key}
                className="bg-white border border-amber-100 rounded-2xl p-6 text-center shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={icon}
                    alt={t(`experiences.extra.items.${key}.title`)}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-zulu-brown-dark mb-1.5">
                  {t(`experiences.extra.items.${key}.title`)}
                </h3>
                <p className="text-zulu-text/70 text-sm leading-relaxed">
                  {t(`experiences.extra.items.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-warm"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-zulu-cream">
            <Image
              src="/images/traditional-zulu-hut-exterior-hluhluwe-kzn.png"
              alt="Handcrafted traditional hut built by the Mzamo Village community"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-zulu-brown-dark mb-2">{t("experiences.craftsmanship.title")}</h3>
            <p className="text-zulu-text leading-relaxed">{t("experiences.craftsmanship.desc")}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

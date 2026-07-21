"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const products = [
  { titleKey: "shop.products.necklace.title", priceKey: "shop.products.necklace.price", img: "/images/zulu-beaded-necklace-handcraft-hluhluwe-kzn.png", icon: "/images/icons/zulu-beaded-necklace-icon.png" },
  { titleKey: "shop.products.smlshield.title", priceKey: "shop.products.smlshield.price", img: "/images/zulu-warrior-shield-small-hluhluwe-kzn.png", icon: "/images/icons/zulu-shield-icon.png" },
  { titleKey: "shop.products.buff.title", priceKey: "shop.products.buff.price", img: "/images/buffalo-carved-wood-craft-hluhluwe-kzn.png", icon: "/images/icons/buffalo-carving-icon.png" },
  { titleKey: "shop.products.rhino.title", priceKey: "shop.products.rhino.price", img: "/images/rhino-carved-wood-craft-small-hluhluwe-kzn.png", icon: "/images/icons/rhino-carving-icon.png" },
  { titleKey: "shop.products.croc.title", priceKey: "shop.products.croc.price", img: "/images/crocodile-carved-wood-craft-hluhluwe-kzn.png", icon: "/images/icons/crocodile-carving-icon.png" },
  { titleKey: "shop.products.medshield.title", priceKey: "shop.products.medshield.price", img: "/images/zulu-warrior-shield-medium-hluhluwe-kzn.png", icon: "/images/icons/zulu-shield-medium-icon.png" },
  { titleKey: "shop.products.gwalagwala.title", priceKey: "shop.products.gwalagwala.price", img: "/images/gwalagwala-bird-carved-craft-hluhluwe-kzn.png", icon: "/images/icons/bird-carving-icon.png" },
  { titleKey: "shop.products.servingtray.title", priceKey: "shop.products.servingtray.price", img: "/images/traditional-carved-serving-tray-hluhluwe-kzn.png", icon: "/images/icons/serving-tray-icon.png" },
];

export default function ShopClient() {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">
            Handmade with Heritage
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t("shop.pageTitle")}</h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">{t("shop.intro")}</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left shadow-warm"
        >
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image src="/images/icons/mzamo-community-icon.png" alt="" fill sizes="56px" className="object-contain" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-zulu-brown-dark mb-1">{t("experiences.craftsmanship.title")}</h2>
            <p className="text-zulu-text/80 text-sm leading-relaxed">{t("experiences.craftsmanship.desc")}</p>
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
              <div className="relative overflow-hidden h-52 bg-zulu-cream">
                <Image
                  src={product.img}
                  alt={t(product.titleKey)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <div className="relative w-9 h-9 mx-auto mb-2">
                  <Image src={product.icon} alt="" fill sizes="36px" className="object-contain" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-zulu-brown-dark">{t(product.titleKey)}</h3>
                <p className="text-zulu-ochre-text font-semibold text-lg">{t(product.priceKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zulu-brown-dark mt-14">
          Interested in a piece, or want to arrange collection in person?{" "}
          <Link href="/contact" className="text-zulu-ochre-text font-semibold hover:underline">
            Contact us to order
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

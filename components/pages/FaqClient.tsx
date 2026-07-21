"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function FaqClient() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <div style={{ backgroundColor: "#e4ba78" }}>
      <section className="bg-zulu-brown text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-zulu-ochre-light text-sm font-semibold tracking-widest uppercase">
            {t("kicker")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 text-white">{t("pageTitle")}</h1>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-amber-100 rounded-2xl p-7 shadow-warm"
            >
              <h2 className="text-lg font-bold text-zulu-brown-dark mb-2">{item.q}</h2>
              <p className="text-zulu-text leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zulu-brown-dark mt-12">
          {t("closingPrefix")}{" "}
          <Link href="/contact" className="text-zulu-ochre-text font-semibold hover:underline">
            {t("closingLink")}
          </Link>{" "}
          {t("closingSuffix")}
        </p>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLang } from "@/i18n/LangContext";

/**
 * Experience timeline. Rendered as horizontal pills (role / company / period),
 * driven by the bilingual experience content.
 */
export default function Journal() {
  const { t } = useLang();

  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow={t.experience.eyebrow}
          heading={t.experience.heading}
          italicWord={t.experience.italic}
          subtext={t.experience.subtext}
        />

        <div className="flex flex-col gap-4">
          {t.experience.items.map((item, i) => (
            <motion.div
              key={`${item.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              {/* Index badge */}
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-stroke font-display text-xl italic text-muted sm:h-16 sm:w-16">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Role + company */}
              <div className="flex-1">
                <h3 className="text-base text-text-primary md:text-lg">{item.role}</h3>
                <p className="text-sm text-muted">{item.company}</p>
              </div>

              {/* Period */}
              <span className="hidden shrink-0 pr-2 text-right text-xs text-muted sm:block">
                {item.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

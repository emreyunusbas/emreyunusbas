import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "./Image";
import { useLang } from "@/i18n/LangContext";
import { PROJECT_ITEMS } from "@/data/content";

export default function SelectedWorks() {
  const { t } = useLang();

  return (
    <section id="projects" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          heading={t.projects.heading}
          italicWord={t.projects.italic}
          subtext={t.projects.subtext}
          ctaLabel={t.projects.viewAll}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECT_ITEMS.map((item, i) => {
            const copy = t.projects.items[i];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${item.span} ${item.aspect}`}
              >
                <Image
                  src={item.image}
                  alt={copy.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Halftone overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />

                {/* Category tag */}
                <span className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-xs text-text-primary/80 backdrop-blur-md">
                  {copy.category}
                </span>

                {/* Hover layer */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg/70 px-6 text-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                  <span className="group/gb relative inline-flex">
                    <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full" />
                    <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black">
                      {t.projects.viewVerb} —{" "}
                      <span className="font-display italic">{copy.title}</span>
                    </span>
                  </span>
                  <p className="max-w-sm text-sm text-text-primary/80">{copy.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

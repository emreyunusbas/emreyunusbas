import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLang } from "@/i18n/LangContext";
import { TOOLS } from "@/data/content";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          heading={t.skills.heading}
          italicWord={t.skills.italic}
          subtext={t.skills.subtext}
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* Skills column */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">
              {t.skills.skillsLabel}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t.skills.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="rounded-full border border-stroke bg-surface px-4 py-2 text-sm text-text-primary transition-colors duration-300 hover:border-white/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools column */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">
              {t.skills.toolsLabel}
            </h3>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="rounded-full border border-stroke bg-surface/40 px-4 py-2 text-sm text-muted transition-colors duration-300 hover:text-text-primary"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

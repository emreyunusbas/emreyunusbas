import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "./Image";
import { WORKS } from "@/data/content";

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          heading="Featured"
          italicWord="projects"
          subtext="A selection of projects I've worked on, from concept to launch."
          ctaLabel="View all work"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {WORKS.map((work, i) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${work.span} ${work.aspect}`}
            >
              {/* Image */}
              <Image
                src={work.image}
                alt={work.title}
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

              {/* Category tag (always visible, bottom-left) */}
              <span className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-xs text-text-primary/80 backdrop-blur-md">
                {work.category}
              </span>

              {/* Hover blur layer */}
              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                {/* Hover label pill with animated gradient border */}
                <span className="group/gb relative inline-flex">
                  <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full" />
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black">
                    View —{" "}
                    <span className="font-display italic">{work.title}</span>
                  </span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

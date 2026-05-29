import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "./Image";
import { JOURNAL } from "@/data/content";

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          heading="Recent"
          italicWord="thoughts"
          subtext="Writing on design, engineering, and the craft in between."
          ctaLabel="View all"
        />

        <div className="flex flex-col gap-4">
          {JOURNAL.map((entry, i) => (
            <motion.a
              key={entry.id}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              {/* Thumbnail */}
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="flex-1 text-base text-text-primary transition-colors group-hover:text-text-primary md:text-lg">
                {entry.title}
              </h3>

              {/* Meta */}
              <div className="hidden shrink-0 flex-col items-end gap-1 pr-2 text-right sm:flex">
                <span className="text-xs text-muted">{entry.readTime}</span>
                <span className="text-xs text-muted">{entry.date}</span>
              </div>

              {/* Arrow */}
              <span
                aria-hidden
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-stroke text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-text-primary"
              >
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

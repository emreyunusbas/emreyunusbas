import { motion } from "framer-motion";
import GradientBorder from "./GradientBorder";

interface SectionHeaderProps {
  eyebrow: string;
  /** plain text part of the heading */
  heading: string;
  /** word rendered in display-italic (appended after heading) */
  italicWord: string;
  subtext: string;
  /** optional "View all" CTA label; hidden on mobile when present */
  ctaLabel?: string;
  ctaHref?: string;
}

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function SectionHeader({
  eyebrow,
  heading,
  italicWord,
  subtext,
  ctaLabel,
  ctaHref = "#",
}: SectionHeaderProps) {
  return (
    <motion.div {...reveal} className="mb-10 md:mb-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-4xl leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            {heading}{" "}
            <span className="font-display italic text-text-primary/90">
              {italicWord}
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted md:text-base">{subtext}</p>
        </div>

        {ctaLabel && (
          <a href={ctaHref} className="hidden md:inline-flex">
            <GradientBorder>
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary">
                {ctaLabel}
                <span aria-hidden className="transition-transform duration-300 group-hover/gb:translate-x-0.5">
                  →
                </span>
              </span>
            </GradientBorder>
          </a>
        )}
      </div>
    </motion.div>
  );
}

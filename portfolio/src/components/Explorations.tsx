import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "./Image";
import Lightbox from "./Lightbox";
import { EXPLORATIONS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ src: string; title: string } | null>(null);

  const leftItems = EXPLORATIONS.filter((_, i) => i % 2 === 0);
  const rightItems = EXPLORATIONS.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center content for the duration of the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax: columns drift at different speeds while scrolling through
      gsap.to(colLeftRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(colRightRef.current, {
        yPercent: -28,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="explorations" ref={sectionRef} className="relative min-h-[300vh] bg-bg">
      {/* Layer 1: pinned center content */}
      <div
        ref={contentRef}
        className="pointer-events-none relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            Explorations
          </span>
          <span className="h-px w-8 bg-stroke" />
        </div>
        <h2 className="text-4xl leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="mt-5 max-w-md text-sm text-muted md:text-base">
          Experiments, studies, and side quests — the work that lives between the
          briefs.
        </p>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="pointer-events-auto group/gb relative mt-8 inline-flex">
          <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/gb:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm text-text-primary backdrop-blur-md">
            View on Dribbble
            <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      {/* Layer 2: parallax columns */}
      <div className="absolute inset-0 z-20">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40">
          <div ref={colLeftRef} className="flex flex-col gap-24 pt-[40vh] md:gap-40">
            {leftItems.map((item) => (
              <ExplorationCard key={item.id} item={item} onOpen={setActive} align="end" />
            ))}
          </div>
          <div ref={colRightRef} className="flex flex-col gap-24 pt-[70vh] md:gap-40">
            {rightItems.map((item) => (
              <ExplorationCard key={item.id} item={item} onOpen={setActive} align="start" />
            ))}
          </div>
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}

interface ExplorationCardProps {
  item: (typeof EXPLORATIONS)[number];
  onOpen: (img: { src: string; title: string }) => void;
  align: "start" | "end";
}

function ExplorationCard({ item, onOpen, align }: ExplorationCardProps) {
  return (
    <button
      onClick={() => onOpen({ src: item.image, title: item.title })}
      style={{ rotate: `${item.rotate}deg` }}
      className={`group aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface transition-transform duration-500 hover:!rotate-0 hover:scale-[1.03] ${
        align === "end" ? "self-end" : "self-start"
      }`}
    >
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-display italic text-text-primary">{item.title}</span>
        </div>
      </div>
    </button>
  );
}

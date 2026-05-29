import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "./Image";
import Lightbox from "./Lightbox";
import { useLang } from "@/i18n/LangContext";
import { EXPLORATION_ITEMS, SOCIAL_LINKS } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

const INSTAGRAM = SOCIAL_LINKS.find((l) => l.label === "Instagram")!.href;

export default function Explorations() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ src: string; title: string } | null>(null);

  const leftItems = EXPLORATION_ITEMS.filter((_, i) => i % 2 === 0);
  const rightItems = EXPLORATION_ITEMS.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

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

  const studyTitle = (i: number) =>
    `${t.explorations.studyWord} ${String(i + 1).padStart(2, "0")}`;

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
            {t.explorations.eyebrow}
          </span>
          <span className="h-px w-8 bg-stroke" />
        </div>
        <h2 className="text-4xl leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
          {t.explorations.heading}{" "}
          <span className="font-display italic">{t.explorations.italic}</span>
        </h2>
        <p className="mt-5 max-w-md text-sm text-muted md:text-base">
          {t.explorations.subtext}
        </p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="group/gb pointer-events-auto relative mt-8 inline-flex"
        >
          <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/gb:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm text-text-primary backdrop-blur-md">
            {t.explorations.cta}
            <span aria-hidden>↗</span>
          </span>
        </a>
      </div>

      {/* Layer 2: parallax columns */}
      <div className="absolute inset-0 z-20">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40">
          <div ref={colLeftRef} className="flex flex-col gap-24 pt-[40vh] md:gap-40">
            {leftItems.map((item, i) => (
              <ExplorationCard
                key={item.id}
                image={item.image}
                rotate={item.rotate}
                title={studyTitle(i * 2)}
                onOpen={setActive}
                align="end"
              />
            ))}
          </div>
          <div ref={colRightRef} className="flex flex-col gap-24 pt-[70vh] md:gap-40">
            {rightItems.map((item, i) => (
              <ExplorationCard
                key={item.id}
                image={item.image}
                rotate={item.rotate}
                title={studyTitle(i * 2 + 1)}
                onOpen={setActive}
                align="start"
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}

interface ExplorationCardProps {
  image: string;
  rotate: number;
  title: string;
  onOpen: (img: { src: string; title: string }) => void;
  align: "start" | "end";
}

function ExplorationCard({ image, rotate, title, onOpen, align }: ExplorationCardProps) {
  return (
    <button
      onClick={() => onOpen({ src: image, title })}
      style={{ rotate: `${rotate}deg` }}
      className={`group aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface transition-transform duration-500 hover:!rotate-0 hover:scale-[1.03] ${
        align === "end" ? "self-end" : "self-start"
      }`}
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-display italic text-text-primary">{title}</span>
        </div>
      </div>
    </button>
  );
}

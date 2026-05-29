import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useHls } from "@/hooks/useHls";
import { HLS_SRC, SOCIAL_LINKS, CONTACT_EMAIL } from "@/data/content";

const MARQUEE_TEXT = "BUILDING THE FUTURE • ";

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useHls(videoRef, HLS_SRC);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      {/* Flipped background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 md:px-10 lg:px-16">
        {/* Marquee */}
        <div className="w-full overflow-hidden py-8">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-5xl italic text-text-primary/80 md:text-7xl lg:text-8xl"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <p className="mb-6 mt-8 text-center text-sm uppercase tracking-[0.3em] text-muted">
          Let's work together
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="group/gb relative inline-flex">
          <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/gb:opacity-100" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-8 py-4 text-sm text-bg backdrop-blur-md transition-transform duration-300 group-hover/gb:scale-105">
            {CONTACT_EMAIL}
            <span aria-hidden>↗</span>
          </span>
        </a>

        {/* Footer bar */}
        <footer className="mt-20 flex w-full flex-col items-center justify-between gap-6 border-t border-stroke pt-8 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </footer>

        <p className="mt-8 text-center text-xs text-muted/60">
          © {new Date().getFullYear()} Michael Smith. All rights reserved.
        </p>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useHls } from "@/hooks/useHls";
import { ROLES, HLS_SRC } from "@/data/content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useHls(videoRef, HLS_SRC);

  // Cycle the role word every 2s
  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 });
      tl.from(
        ".blur-in",
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 1,
          stagger: 0.1,
        },
        0.3,
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background HLS video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          Collection '26
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Michael Smith
        </h1>

        <p className="blur-in mb-6 text-lg text-text-primary/90 md:text-xl">
          A{" "}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Chicago.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          Designing seamless digital interactions by focusing on the unique nuances
          which bring systems to life.
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* See Works — solid */}
          <a href="#work" className="group/cta relative inline-flex">
            <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100" />
            <span className="relative rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-all duration-300 group-hover/cta:scale-105 group-hover/cta:bg-bg group-hover/cta:text-text-primary">
              See Works
            </span>
          </a>

          {/* Reach out — outlined */}
          <a href="#contact" className="group/cta relative inline-flex">
            <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100" />
            <span className="relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-all duration-300 group-hover/cta:scale-105 group-hover/cta:border-transparent">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient absolute left-0 top-0 h-1/2 w-full animate-scroll-down" />
        </span>
      </div>
    </section>
  );
}

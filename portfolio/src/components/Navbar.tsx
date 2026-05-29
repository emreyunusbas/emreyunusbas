import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";

// Map each nav label to a section id used for smooth scrolling
const LINK_TARGETS: Record<string, string> = {
  Home: "home",
  Work: "work",
  Resume: "stats",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (label: string) => {
    setActive(label);
    const el = document.getElementById(LINK_TARGETS[label]);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          aria-label="Home"
          className="group/logo relative grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover/logo:rotate-180" />
          <span className="absolute inset-[2px] grid place-items-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic text-text-primary">JA</span>
          </span>
        </button>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Nav links */}
        <div className="flex items-center">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === label
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Say hi button with gradient hover border */}
        <a href="#contact" className="group/say relative inline-flex">
          <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/say:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            Say hi
            <span aria-hidden>↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

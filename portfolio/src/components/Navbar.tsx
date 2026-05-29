import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LangContext";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Map each nav entry to its label and target section id
  const links = [
    { id: "home", label: t.nav.home },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          aria-label={t.nav.home}
          className="group/logo relative grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover/logo:rotate-180" />
          <span className="absolute inset-[2px] grid place-items-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic text-text-primary">YB</span>
          </span>
        </button>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Nav links */}
        <div className="flex items-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === link.id
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Say hi button with gradient hover border */}
        <a href="#contact" className="group/say relative hidden sm:inline-flex">
          <span className="accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover/say:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            {t.nav.sayHi}
            <span aria-hidden>↗</span>
          </span>
        </a>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Language switch */}
        <LangToggle />
      </div>
    </nav>
  );
}

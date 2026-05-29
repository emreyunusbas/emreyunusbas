import type { ReactNode } from "react";

interface GradientBorderProps {
  children: ReactNode;
  /** extra classes for the outer wrapper */
  className?: string;
  /** rounded radius for both the gradient layer and the inner surface */
  rounded?: string;
  /** whether the gradient is always visible (true) or only on hover (false) */
  always?: boolean;
  /** classes applied to the inner surface that sits above the gradient */
  innerClassName?: string;
}

/**
 * The signature "gradient border on hover" effect used across the site
 * (Navbar "Say hi", CTA buttons, "View all" buttons, card labels, Contact CTA).
 * An absolutely-positioned span with the accent gradient sits behind an inner
 * surface, revealed via group-hover by default.
 */
export default function GradientBorder({
  children,
  className = "",
  rounded = "rounded-full",
  always = false,
  innerClassName = "bg-surface",
}: GradientBorderProps) {
  return (
    <span className={`group/gb relative inline-flex ${className}`}>
      <span
        aria-hidden
        className={`accent-gradient-animated animate-gradient-shift pointer-events-none absolute -inset-[2px] ${rounded} transition-opacity duration-300 ${
          always ? "opacity-100" : "opacity-0 group-hover/gb:opacity-100"
        }`}
      />
      <span
        className={`relative inline-flex w-full items-center justify-center backdrop-blur-md ${rounded} ${innerClassName}`}
      >
        {children}
      </span>
    </span>
  );
}

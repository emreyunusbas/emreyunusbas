/**
 * Centralized content for the portfolio. Image paths point at files under
 * `public/images/...`. Until those generated images are added (see
 * `image-prompts/image-map.md`), the <Image> helper renders a graceful
 * placeholder so the layout never breaks.
 */

export const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"] as const;

export const LOADING_WORDS = ["Design", "Create", "Inspire"] as const;

export const NAV_LINKS = ["Home", "Work", "Resume"] as const;

export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  /** Tailwind md: column span on the 12-col bento grid */
  span: string;
  /** aspect ratio utility class */
  aspect: string;
}

export const WORKS: Work[] = [
  {
    id: "automotive",
    title: "Automotive Motion",
    category: "Motion / Film",
    image: "/images/works/automotive.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "architecture",
    title: "Urban Architecture",
    category: "Photography",
    image: "/images/works/architecture.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    id: "perspective",
    title: "Human Perspective",
    category: "Editorial",
    image: "/images/works/perspective.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    id: "brand",
    title: "Brand Identity",
    category: "Branding",
    image: "/images/works/brand.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

export interface JournalEntry {
  id: string;
  title: string;
  image: string;
  readTime: string;
  date: string;
}

export const JOURNAL: JournalEntry[] = [
  {
    id: "journal-1",
    title: "Designing for motion-first interfaces",
    image: "/images/journal/journal-1.jpg",
    readTime: "5 min read",
    date: "Mar 2026",
  },
  {
    id: "journal-2",
    title: "The quiet power of monochrome systems",
    image: "/images/journal/journal-2.jpg",
    readTime: "7 min read",
    date: "Feb 2026",
  },
  {
    id: "journal-3",
    title: "Building a brand from a single gesture",
    image: "/images/journal/journal-3.jpg",
    readTime: "4 min read",
    date: "Jan 2026",
  },
  {
    id: "journal-4",
    title: "Notes on rhythm, pace, and whitespace",
    image: "/images/journal/journal-4.jpg",
    readTime: "6 min read",
    date: "Dec 2025",
  },
];

export interface Exploration {
  id: string;
  title: string;
  image: string;
  /** initial rotation in degrees for a scattered look */
  rotate: number;
}

export const EXPLORATIONS: Exploration[] = [
  { id: "exploration-1", title: "Study 01", image: "/images/explorations/exploration-1.jpg", rotate: -4 },
  { id: "exploration-2", title: "Study 02", image: "/images/explorations/exploration-2.jpg", rotate: 3 },
  { id: "exploration-3", title: "Study 03", image: "/images/explorations/exploration-3.jpg", rotate: -2 },
  { id: "exploration-4", title: "Study 04", image: "/images/explorations/exploration-4.jpg", rotate: 5 },
  { id: "exploration-5", title: "Study 05", image: "/images/explorations/exploration-5.jpg", rotate: -3 },
  { id: "exploration-6", title: "Study 06", image: "/images/explorations/exploration-6.jpg", rotate: 2 },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/yemrevisual" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yunus-emre-ba%C5%9F?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  { label: "Twitter", href: "https://twitter.com/emrebasyunus1" },
  { label: "GitHub", href: "https://github.com/emreyunusbas" },
];

export const CONTACT_EMAIL = "emrebasyunus1@gmail.com";

/** Shared Mux HLS stream used by the Hero and Contact background videos */
export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

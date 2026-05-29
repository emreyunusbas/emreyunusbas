/**
 * Bilingual (TR/EN) content for the portfolio, built from Yunus Emre Baş's CV.
 *
 * - Language-independent constants (links, images, video) are exported directly.
 * - All user-facing copy lives in CONTENT[lang]; components read it via useLang().
 * - Image paths point at files under `public/images/...`. Until those generated
 *   images are added (see image-prompts/image-map.md) the <Image> helper shows a
 *   graceful placeholder.
 */

export type Lang = "tr" | "en";

/* ----------------------------- shared constants ---------------------------- */

export const CONTACT_EMAIL = "emrebasyunus1@gmail.com";
export const PHONE = "+90 543 212 70 34";
export const PHONE_HREF = "tel:+905432127034";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/yemrevisual" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yunus-emre-ba%C5%9F?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  { label: "GitHub", href: "https://github.com/emreyunusbas" },
] as const;

/** Shared Mux HLS stream used by the Hero and Contact background videos */
export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

/** Language-independent layout data for the Projects bento grid */
export const PROJECT_ITEMS = [
  { id: "fidovita", image: "/images/projects/project-fidovita.png", span: "md:col-span-7", aspect: "aspect-[16/10]" },
  { id: "youtube-shorts", image: "/images/projects/project-youtube-shorts.png", span: "md:col-span-5", aspect: "aspect-[16/10]" },
  { id: "premiere-plugin", image: "/images/projects/project-premiere-plugin.png", span: "md:col-span-5", aspect: "aspect-[16/10]" },
  { id: "vextoris", image: "/images/projects/project-vextoris.png", span: "md:col-span-7", aspect: "aspect-[16/10]" },
] as const;

/** Language-independent layout data for the Explorations parallax gallery */
export const EXPLORATION_ITEMS = [
  { id: "exploration-1", image: "/images/explorations/exploration-1.jpeg", rotate: -4 },
  { id: "exploration-2", image: "/images/explorations/exploration-2.jpeg", rotate: 3 },
  { id: "exploration-3", image: "/images/explorations/exploration-3.jpeg", rotate: -2 },
  { id: "exploration-4", image: "/images/explorations/exploration-4.png", rotate: 5 },
  { id: "exploration-5", image: "/images/explorations/exploration-5.jpeg", rotate: -3 },
  { id: "exploration-6", image: "/images/explorations/exploration-6.jpeg", rotate: 2 },
] as const;

/** Tool names are brand names — shared across languages */
export const TOOLS = [
  "Veo 3.1",
  "NanoBanana Pro",
  "ElevenLabs",
  "Kling AI",
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Canva",
  "n8n",
  "Shotstack",
  "Google Ads",
  "Meta Ads",
  "Git / GitHub",
] as const;

/* --------------------------------- content --------------------------------- */

export interface ProjectCopy {
  title: string;
  category: string;
  description: string;
}

export interface ExperienceCopy {
  role: string;
  company: string;
  period: string;
}

export interface StatCopy {
  value: string;
  label: string;
}

export interface SiteContent {
  nav: {
    home: string;
    projects: string;
    experience: string;
    contact: string;
    sayHi: string;
  };
  loading: {
    label: string;
    words: string[];
  };
  hero: {
    eyebrow: string;
    name: string;
    roles: string[];
    roleLinePre: string;
    roleLinePost: string;
    summary: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    italic: string;
    subtext: string;
    skillsLabel: string;
    toolsLabel: string;
    skills: string[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    italic: string;
    subtext: string;
    viewAll: string;
    viewVerb: string;
    items: ProjectCopy[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    italic: string;
    subtext: string;
    items: ExperienceCopy[];
  };
  explorations: {
    eyebrow: string;
    heading: string;
    italic: string;
    subtext: string;
    cta: string;
    studyWord: string;
  };
  stats: StatCopy[];
  contact: {
    marquee: string;
    lets: string;
    available: string;
    rights: string;
  };
}

export const CONTENT: Record<Lang, SiteContent> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      projects: "Projeler",
      experience: "Deneyim",
      contact: "İletişim",
      sayHi: "Merhaba",
    },
    loading: {
      label: "Portföy",
      words: ["Tasarla", "Üret", "İlham Ver"],
    },
    hero: {
      eyebrow: "Dijital Pazarlama & AI Video",
      name: "Yunus Emre Baş",
      roles: ["Yaratıcı", "Prodüktör", "Pazarlamacı", "Geliştirici"],
      roleLinePre: "Kocaeli'de yaşayan bir ",
      roleLinePost: ".",
      summary:
        "Gayrimenkulden otomotive, sağlıktan e-ticarete kadar pek çok sektörde içerik üretimi, AI video prodüksiyon ve otomasyon projeleri yürütüyorum.",
      ctaProjects: "Projeleri Gör",
      ctaContact: "İletişime Geç",
      scroll: "Kaydır",
    },
    skills: {
      eyebrow: "Yetenekler",
      heading: "Yetenekler ve",
      italic: "araçlar",
      subtext:
        "Yaratıcı ve teknik süreçleri birleştiren hibrit bir profil — üretimden otomasyona, reklamdan yazılıma.",
      skillsLabel: "Uzmanlık",
      toolsLabel: "Araçlar",
      skills: [
        "AI Video Prodüksiyon",
        "Motion Grafik",
        "Sosyal Medya Yönetimi",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Prompt Mühendisliği",
        "Otomasyon (n8n)",
        "Google / Meta Ads",
        "E-Ticaret Yönetimi",
        "C# / .NET",
      ],
    },
    projects: {
      eyebrow: "Seçili Projeler",
      heading: "Öne çıkan",
      italic: "projeler",
      subtext: "Konseptten yayına kadar üzerinde çalıştığım projelerden bir seçki.",
      viewAll: "Tümünü gör",
      viewVerb: "İncele",
      items: [
        {
          title: "FidoVita AI Healthcare",
          category: "Sağlık & AI",
          description: "Yatırımcı pitch deck ve landing page tasarımı (TR/EN/AR).",
        },
        {
          title: "YouTube Shorts Pipeline",
          category: "Otomasyon",
          description: "n8n + KIE AI/Veo + ElevenLabs ile otomatik video üretim sistemi.",
        },
        {
          title: "Premiere Pro UXP Plugin",
          category: "Yazılım",
          description: "Python/librosa ile müzik yapısına göre otomatik marker yerleştirme.",
        },
        {
          title: "Vextoris E-Commerce",
          category: "E-Ticaret",
          description: "Shopify mağazası, Facebook/Instagram video reklam kampanyaları.",
        },
      ],
    },
    experience: {
      eyebrow: "Deneyim",
      heading: "İş",
      italic: "geçmişi",
      subtext: "5+ yıllık dijital pazarlama, video prodüksiyon ve e-ticaret deneyimi.",
      items: [
        {
          role: "Sosyal Medya Uzmanı",
          company: "Dijital Pazarlama Ajansı",
          period: "Nis 2022 — Günümüz",
        },
        {
          role: "Bilgi Giriş Elemanı",
          company: "CEVA Logistics",
          period: "Eki 2022 — Mar 2023",
        },
        {
          role: "E-Ticaret İşletme Sahibi",
          company: "AlışverişTargası",
          period: "Haz 2019 — Oca 2023",
        },
        {
          role: "Kişisel AI İçerik Markası",
          company: "@yemrevisual",
          period: "2026 — Günümüz",
        },
      ],
    },
    explorations: {
      eyebrow: "Keşifler",
      heading: "Görsel",
      italic: "oyun alanı",
      subtext: "@yemrevisual için ürettiğim AI görsel ve video denemeleri.",
      cta: "Instagram'da gör",
      studyWord: "Çalışma",
    },
    stats: [
      { value: "5+", label: "Yıl Deneyim" },
      { value: "10+", label: "Marka" },
      { value: "8", label: "Sektör" },
    ],
    contact: {
      marquee: "GELECEĞİ ÜRETİYORUM • ",
      lets: "Birlikte çalışalım",
      available: "Projelere açığım",
      rights: "Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      sayHi: "Say hi",
    },
    loading: {
      label: "Portfolio",
      words: ["Design", "Create", "Inspire"],
    },
    hero: {
      eyebrow: "Digital Marketing & AI Video",
      name: "Yunus Emre Baş",
      roles: ["Creative", "Producer", "Marketer", "Developer"],
      roleLinePre: "A ",
      roleLinePost: " based in Kocaeli.",
      summary:
        "I produce content, AI video, and automation projects across real estate, automotive, health, retail, and e-commerce sectors.",
      ctaProjects: "See Projects",
      ctaContact: "Get in Touch",
      scroll: "Scroll",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Skills &",
      italic: "tools",
      subtext:
        "A hybrid profile bridging creative and technical work — from production and automation to advertising and software.",
      skillsLabel: "Expertise",
      toolsLabel: "Tools",
      skills: [
        "AI Video Production",
        "Motion Graphics",
        "Social Media Management",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Prompt Engineering",
        "Automation (n8n)",
        "Google / Meta Ads",
        "E-Commerce Management",
        "C# / .NET",
      ],
    },
    projects: {
      eyebrow: "Selected Projects",
      heading: "Featured",
      italic: "projects",
      subtext: "A selection of projects I've worked on, from concept to launch.",
      viewAll: "View all",
      viewVerb: "View",
      items: [
        {
          title: "FidoVita AI Healthcare",
          category: "Health & AI",
          description: "Investor pitch deck and landing page design (TR/EN/AR).",
        },
        {
          title: "YouTube Shorts Pipeline",
          category: "Automation",
          description: "Automated video production with n8n + KIE AI/Veo + ElevenLabs.",
        },
        {
          title: "Premiere Pro UXP Plugin",
          category: "Software",
          description: "Auto-marker placement via Python/librosa music analysis.",
        },
        {
          title: "Vextoris E-Commerce",
          category: "E-Commerce",
          description: "Shopify store with Facebook/Instagram video ad campaigns.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      heading: "Work",
      italic: "history",
      subtext: "5+ years across digital marketing, video production, and e-commerce.",
      items: [
        {
          role: "Social Media Specialist",
          company: "Digital Marketing Agency",
          period: "Apr 2022 — Present",
        },
        {
          role: "Data Entry Specialist",
          company: "CEVA Logistics",
          period: "Oct 2022 — Mar 2023",
        },
        {
          role: "E-Commerce Business Owner",
          company: "AlışverişTargası",
          period: "Jun 2019 — Jan 2023",
        },
        {
          role: "Personal AI Content Brand",
          company: "@yemrevisual",
          period: "2026 — Present",
        },
      ],
    },
    explorations: {
      eyebrow: "Explorations",
      heading: "Visual",
      italic: "playground",
      subtext: "AI image and video experiments I create for @yemrevisual.",
      cta: "View on Instagram",
      studyWord: "Study",
    },
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "10+", label: "Brands" },
      { value: "8", label: "Industries" },
    ],
    contact: {
      marquee: "BUILDING THE FUTURE • ",
      lets: "Let's work together",
      available: "Available for projects",
      rights: "All rights reserved.",
    },
  },
};

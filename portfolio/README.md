# Yunus Emre Baş — Portfolio

A single-page **bilingual (TR/EN)** dark portfolio landing page built with **React +
Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion + hls.js**. Content is sourced
from Yunus Emre Baş's CV (Digital Marketing & AI Video Production).

The language switch lives in the navbar (TR / EN); the preference is saved in
`localStorage` and falls back to the browser language. All copy lives in
`src/data/content.ts` under `CONTENT.tr` / `CONTENT.en`, consumed via the `useLang()`
hook in `src/i18n/LangContext.tsx`.

## Getting started

```bash
cd portfolio
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
portfolio/
├─ index.html              # fonts (Inter + Instrument Serif), #root
├─ tailwind.config.ts      # color tokens, fonts, keyframes
├─ src/
│  ├─ index.css            # CSS custom props, accent gradient, keyframes
│  ├─ main.tsx             # React + Router entry
│  ├─ App.tsx              # routes + page transitions
│  ├─ pages/Index.tsx      # loading screen + all sections
│  ├─ components/          # LoadingScreen, Navbar, LangToggle, Hero, Skills,
│  │                       #   SelectedWorks(Projects), Journal(Experience),
│  │                       #   Explorations, Stats, Contact, …
│  ├─ i18n/LangContext.tsx # TR/EN provider + useLang() hook
│  ├─ hooks/useHls.ts      # shared HLS video loader
│  └─ data/content.ts      # bilingual content + image paths + contact links
├─ public/images/          # generated images go here (see below)
└─ image-prompts/          # generation prompts + image-map.md schema
```

## Images

Images are **not** committed. Generate them with your own image tool using the prompt
files in [`image-prompts/`](./image-prompts), then drop each file at the path listed in
[`image-prompts/image-map.md`](./image-prompts/image-map.md). Until then, the app renders
clean placeholders automatically — no code changes required.

## Customizing content

Edit `src/data/content.ts` to change works, journal entries, explorations, stats, roles,
social links, the contact email, and image paths. The hero/contact background video is the
`HLS_SRC` constant in the same file.

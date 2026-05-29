# Dark Portfolio Landing Page

A single-page dark portfolio landing page built with **React + Vite + Tailwind CSS +
TypeScript + GSAP + Framer Motion + hls.js**.

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
│  ├─ components/          # LoadingScreen, Navbar, Hero, SelectedWorks,
│  │                       #   Journal, Explorations, Stats, Contact, …
│  ├─ hooks/useHls.ts      # shared HLS video loader
│  └─ data/content.ts      # all content + image paths + contact links
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

# Image Map / Schema

Master schema for every image the portfolio uses. Generate each image with the matching
prompt file, export it with the **exact filename** in the **Target path** column, and drop
it in. No code changes needed — `src/data/content.ts` already points at these paths, and
`src/components/Image.tsx` shows a clean placeholder until the file exists.

## Naming convention
- Keep the exact filename shown below (lowercase, `.jpg`).
- Place files under `public/images/<section>/`.
- Match the aspect ratio so cards don't crop awkwardly (`object-cover` is used).

## Projects — `public/images/projects/`  (aspect 16:10, ~1600×1000)

| Slot | Prompt file | Target path | content.ts key |
|------|-------------|-------------|----------------|
| FidoVita AI Healthcare | `project-fidovita.md` | `public/images/projects/fidovita.jpg` | `PROJECT_ITEMS[0].image` |
| YouTube Shorts Pipeline | `project-youtube-shorts.md` | `public/images/projects/youtube-shorts.jpg` | `PROJECT_ITEMS[1].image` |
| Premiere Pro UXP Plugin | `project-premiere-plugin.md` | `public/images/projects/premiere-plugin.jpg` | `PROJECT_ITEMS[2].image` |
| Vextoris E-Commerce | `project-vextoris.md` | `public/images/projects/vextoris.jpg` | `PROJECT_ITEMS[3].image` |

## Explorations — `public/images/explorations/`  (aspect 1:1, ~800×800)

| Slot | Prompt file | Target path | content.ts key |
|------|-------------|-------------|----------------|
| Study 01 | `exploration-1.md` | `public/images/explorations/exploration-1.jpg` | `EXPLORATION_ITEMS[0].image` |
| Study 02 | `exploration-2.md` | `public/images/explorations/exploration-2.jpg` | `EXPLORATION_ITEMS[1].image` |
| Study 03 | `exploration-3.md` | `public/images/explorations/exploration-3.jpg` | `EXPLORATION_ITEMS[2].image` |
| Study 04 | `exploration-4.md` | `public/images/explorations/exploration-4.jpg` | `EXPLORATION_ITEMS[3].image` |
| Study 05 | `exploration-5.md` | `public/images/explorations/exploration-5.jpg` | `EXPLORATION_ITEMS[4].image` |
| Study 06 | `exploration-6.md` | `public/images/explorations/exploration-6.jpg` | `EXPLORATION_ITEMS[5].image` |

> Note: the Experience section uses numbered badges (no images), so it needs no assets.

## Style guide for every prompt
All images share a **dark, cinematic, near-monochrome** look with a single cool steel-blue
accent (`#89AACC` → `#4E85BF`, the site's accent gradient). Keep backgrounds dark and
subjects centered — the UI layers a halftone pattern and a blur-on-hover over project
cards, so very bright or busy images reduce legibility.

> Tip: if you prefer `.png` or `.webp`, just update the matching `image` value(s) in
> `src/data/content.ts`.

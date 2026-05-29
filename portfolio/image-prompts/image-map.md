# Image Map / Schema

This is the master schema for every image the portfolio uses. Generate each image in
your image tool of choice using the matching prompt file, export it with the **exact
filename** in the **Target path** column, and drop it in. No code changes are needed —
`src/data/content.ts` already points at these paths, and `src/components/Image.tsx`
shows a clean placeholder until the file exists.

## Naming convention
- Keep the exact filename shown below (lowercase, `.jpg`).
- Place files under `public/images/<section>/`.
- Match the aspect ratio so cards don't crop awkwardly (`object-cover` is used).

## Selected Works — `public/images/works/`  (aspect 16:10, ~1600×1000)

| Slot | Prompt file | Target path | content.ts key |
|------|-------------|-------------|----------------|
| Automotive Motion | `works-automotive.md` | `public/images/works/automotive.jpg` | `WORKS[0].image` |
| Urban Architecture | `works-architecture.md` | `public/images/works/architecture.jpg` | `WORKS[1].image` |
| Human Perspective | `works-perspective.md` | `public/images/works/perspective.jpg` | `WORKS[2].image` |
| Brand Identity | `works-brand.md` | `public/images/works/brand.jpg` | `WORKS[3].image` |

## Journal — `public/images/journal/`  (aspect 1:1, ~400×400, shown circular)

| Slot | Prompt file | Target path | content.ts key |
|------|-------------|-------------|----------------|
| Motion-first interfaces | `journal-1.md` | `public/images/journal/journal-1.jpg` | `JOURNAL[0].image` |
| Monochrome systems | `journal-2.md` | `public/images/journal/journal-2.jpg` | `JOURNAL[1].image` |
| Brand from a gesture | `journal-3.md` | `public/images/journal/journal-3.jpg` | `JOURNAL[2].image` |
| Rhythm & whitespace | `journal-4.md` | `public/images/journal/journal-4.jpg` | `JOURNAL[3].image` |

## Explorations — `public/images/explorations/`  (aspect 1:1, ~800×800)

| Slot | Prompt file | Target path | content.ts key |
|------|-------------|-------------|----------------|
| Study 01 | `exploration-1.md` | `public/images/explorations/exploration-1.jpg` | `EXPLORATIONS[0].image` |
| Study 02 | `exploration-2.md` | `public/images/explorations/exploration-2.jpg` | `EXPLORATIONS[1].image` |
| Study 03 | `exploration-3.md` | `public/images/explorations/exploration-3.jpg` | `EXPLORATIONS[2].image` |
| Study 04 | `exploration-4.md` | `public/images/explorations/exploration-4.jpg` | `EXPLORATIONS[3].image` |
| Study 05 | `exploration-5.md` | `public/images/explorations/exploration-5.jpg` | `EXPLORATIONS[4].image` |
| Study 06 | `exploration-6.md` | `public/images/explorations/exploration-6.jpg` | `EXPLORATIONS[5].image` |

## Style guide for every prompt
All images share a **dark, cinematic, near-monochrome** look with a single cool steel-blue
accent (`#89AACC` → `#4E85BF`, the site's accent gradient). Keep backgrounds dark and
subjects centered — the UI layers a halftone pattern and a blur-on-hover over Works cards,
so very bright or busy images reduce legibility.

> Tip: if you prefer `.png` or `.webp`, just update the matching `image` value(s) in
> `src/data/content.ts` to the new extension.

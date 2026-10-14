# Farsoiya Lab website

Source for https://palas-farsoiya.github.io/, built with Vite, React, TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:8080. Requires Node 22.18 or newer.

## Edit content

Most content lives in plain data files, so adding a paper, student or news item does not require touching any components:

| What | File |
| --- | --- |
| Publications (set `highlight` to feature one on the home page) | `src/data/publications.ts` |
| People | `src/data/people.ts` |
| News (sorted by date automatically; the newest six appear on the home page) | `src/data/news.ts` |
| Email, phone, profile links, ORCID | `src/data/site.ts` |
| Page titles and search descriptions | `src/data/routes.ts` |
| Course chapters | `src/Courses/ComputerProgrammingNumericalAnalysis/courseData.ts` |

Images go in `public/`. Use WebP, resized to roughly twice the size they are displayed at, e.g.:

```bash
cwebp -q 78 -resize 1200 0 photo.jpg -o public/news/photo.webp
```

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the site and publishes it to GitHub Pages.

`npm run build` runs `scripts/prerender.mjs` afterwards, which writes an HTML file per route (with its own title and description), `404.html` and `sitemap.xml`. When you add a new page, add it to `src/data/routes.ts` as well as `src/App.tsx`.

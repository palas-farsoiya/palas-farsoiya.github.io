// Runs after `vite build` (npm "postbuild" hook).
//
// GitHub Pages has no server-side routing, so for every known route this writes
// dist/<route>/index.html with that page's title, description, canonical URL and
// Open Graph tags filled in. Crawlers and link previews get correct metadata
// without running JavaScript, and every real URL returns 200. Unknown URLs fall
// back to dist/404.html, which loads the app and shows the "not found" page.
//
// Also writes dist/sitemap.xml and injects Person structured data (JSON-LD).
//
// Imports .ts files directly, which needs Node 22.18+ (type stripping).

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { formatTitle, pages, siteName } from "../src/data/routes.ts";
import { contact, profileUrls, siteUrl } from "../src/data/site.ts";
import {
  courseBasePath,
  courseChapters,
  courseInfo,
} from "../src/Courses/ComputerProgrammingNumericalAnalysis/courseData.ts";

const distDir = path.resolve(import.meta.dirname, "../dist");
const template = await readFile(path.join(distDir, "index.html"), "utf8");

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Palas Kumar Farsoiya",
  jobTitle: "Assistant Professor",
  email: `mailto:${contact.email}`,
  url: `${siteUrl}/`,
  image: `${siteUrl}/palas-avatar.webp`,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Roorkee",
    department: "Department of Chemical Engineering",
    url: "https://iitr.ac.in/",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Bombay" },
    { "@type": "CollegeOrUniversity", name: "Princeton University" },
  ],
  knowsAbout: [
    "Multiphase flows",
    "Interfacial dynamics",
    "Direct numerical simulation",
    "Surfactants",
    "Fluid mechanics",
  ],
  sameAs: profileUrls,
};

const routes = [
  ...pages,
  ...courseChapters.map((chapter) => ({
    path: chapter.slug === "preface" ? courseBasePath : `${courseBasePath}/${chapter.slug}`,
    title:
      chapter.slug === "preface"
        ? courseInfo.title
        : `${chapter.title} - ${courseInfo.title}`,
    description: chapter.summary.trim(),
  })),
];

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`prerender: index.html is missing ${pattern}`);
  }
  return html.replace(pattern, replacement);
};

const renderPage = ({ path: routePath, title, description }, { noindex = false } = {}) => {
  const url = `${siteUrl}${routePath === "/" ? "/" : routePath}`;
  const fullTitle = escapeAttr(formatTitle(title));
  const desc = escapeAttr(description);

  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${fullTitle}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${desc}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${fullTitle}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${desc}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, noindex ? "" : `<link rel="canonical" href="${url}" />`);

  const headExtras = [
    noindex && `<meta name="robots" content="noindex" />`,
    `<script type="application/ld+json">${JSON.stringify(personJsonLd)}</script>`,
  ].filter(Boolean);
  return html.replace("  </head>", `    ${headExtras.join("\n    ")}\n  </head>`);
};

// Write both <route>.html (served by GitHub Pages at /<route> without a redirect)
// and <route>/index.html (in case a request ends with a slash).
for (const route of routes) {
  const html = renderPage(route);
  const outDir = path.join(distDir, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html);
  if (route.path !== "/") {
    await writeFile(`${outDir}.html`, html);
  }
}

await writeFile(
  path.join(distDir, "404.html"),
  renderPage(
    { path: "/404", title: "Page not found", description: `Page not found - ${siteName}` },
    { noindex: true },
  ),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);

console.log(`prerender: wrote ${routes.length} pages, 404.html and sitemap.xml`);

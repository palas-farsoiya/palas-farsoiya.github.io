// Page titles and descriptions. Used at runtime to set document.title and at
// build time (scripts/prerender.mjs) to write a static HTML file per route and
// the sitemap. Keep this file free of imports so Node can load it directly.

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const siteName = "Farsoiya Lab";

export const defaultDescription =
  "Assistant Professor at IIT Roorkee leading Farsoiya Lab, with research spanning multiphase flows, interfacial dynamics, DNS, and fluid-structure interaction.";

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "Palas Kumar Farsoiya - Farsoiya Lab",
    description: defaultDescription,
  },
  {
    path: "/research",
    title: "Research",
    description: "Research at Farsoiya Lab, IIT Roorkee: multiphase flows, surfactant-laden interfaces, Marangoni flows, and wave-particle dynamics.",
  },
  {
    path: "/publications",
    title: "Publications",
    description: "Publications from Palas Kumar Farsoiya and Farsoiya Lab with graphical abstracts and plain-language summaries.",
  },
  {
    path: "/people",
    title: "People",
    description: "Students, collaborators, and the principal investigator of Farsoiya Lab at IIT Roorkee.",
  },
  {
    path: "/join-us",
    title: "Join Us",
    description: "PhD, MTech, and postdoctoral opportunities in computational fluid mechanics and interfacial flows at Farsoiya Lab, IIT Roorkee.",
  },
  {
    path: "/news",
    title: "News",
    description: "Updates from Farsoiya Lab: new students, research visits, talks, and collaborations.",
  },
  {
    path: "/contact",
    title: "Contact",
    description: "Contact Palas Kumar Farsoiya, Department of Chemical Engineering, IIT Roorkee.",
  },
];

/** "Research" -> "Research | Farsoiya Lab"; the home title is used as is. */
export const formatTitle = (title: string) =>
  title.includes(siteName) ? title : `${title} | ${siteName}`;

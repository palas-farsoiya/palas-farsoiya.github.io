export type NewsItem = {
  /** ISO date: YYYY-MM or YYYY-MM-DD. */
  date: string;
  title: string;
  type: string;
  description: string;
  image?: string;
  /** Attribution for images that are not our own (e.g. Wikimedia Commons). */
  imageCredit?: { text: string; url: string };
  /** Optional link shown as "Read more" (e.g. a paper DOI). */
  link?: string;
};

const newsItems: NewsItem[] = [
  {
    date: "2026-10",
    title: "Congratulations to Deependra Singh Chauhan on a new paper in Physics of Fluids!",
    type: "Publication",
    description:
      "Deependra's work on how insoluble surfactants shape the boundary layer around rising bubbles is now published in Physics of Fluids. Congratulations, Deependra!",
    image: "/people/deependra.webp",
    link: "https://doi.org/10.1063/5.0349830",
  },
  {
    date: "2026-06",
    title: "Palas visits Luc Deike at Princeton University, NJ.",
    type: "Travel",
    description: "Palas visits Luc Deike at Princeton University in New Jersey for research discussions.",
    image: "/news/places/princeton.webp",
    imageCredit: {
      text: "Nassau Hall, Princeton. Photo: Smallbones, CC0",
      url: "https://commons.wikimedia.org/wiki/File:Nassau_Hall_Princeton.JPG",
    },
  },
  {
    date: "2026-06",
    title: "Palas visits John Bush at MIT, Cambridge, MA.",
    type: "Travel",
    description: "Palas visits John Bush at MIT in Cambridge, Massachusetts for research discussions.",
    image: "/news/places/mit.webp",
    imageCredit: {
      text: "Great Dome, MIT. Photo: Peacearth, CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Great_dome_of_MIT,_Feb_2021_(2)_(cropped).jpg",
    },
  },
  {
    date: "2026-06",
    title: "Palas visits Aditya Lele at Rowan University, NJ.",
    type: "Travel",
    description: "Palas visits Aditya Lele at Rowan University in New Jersey for research discussions.",
    image: "/news/places/rowan.webp",
    imageCredit: {
      text: "Bunce Hall, Rowan University. Photo: Purplybunny, CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Bunce_Hall_Rowan_University_sky.jpg",
    },
  },
  {
    date: "2026-06",
    title: "Palas visits Ricardo Amores at UIUC, IL.",
    type: "Travel",
    description: "Palas visits Ricardo Amores at the University of Illinois Urbana-Champaign in Illinois for research discussions.",
    image: "/news/places/uiuc.webp",
    imageCredit: {
      text: "Altgeld Hall, UIUC. Photo: Killivalavan Solai, CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Altgeld_Hall,_University_of_Illinois_-_Winter.jpg",
    },
  },
  {
    date: "2026-06",
    title: "Palas visits Suhas Jain at Georgia Tech, Atlanta, GA.",
    type: "Travel",
    description: "Palas visits Suhas Jain at Georgia Tech in Atlanta, Georgia for research discussions.",
    image: "/news/places/georgia-tech.webp",
    imageCredit: {
      text: "Tech Tower, Georgia Tech. Photo: James Emery, CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Lettie_Pate_Whitehead_Evans_Administration_Building_6284.jpg",
    },
  },
  {
    date: "2026-01-15",
    title: "Abhinandan Mohanty joins the Farsoiya Research Group as a PhD candidate.",
    type: "Group",
    description: "Abhinandan Mohanty joins Farsoiya Research Group as a PhD candidate. Welcome Abhinandan.",
    image: "/people/abhinandan.webp",
  },
  {
    date: "2026-01-15",
    title: "Abhay Khandale and Loveraj Singh join the group as MTech students.",
    type: "Students",
    description: "Abhay and Loveraj join the group as MTech students.",
    image: "/iitr-banner.webp",
  },
  {
    date: "2025-06-27",
    title: "Palas visits ETH Zurich to meet Daniel Ruth.",
    type: "Travel",
    description: "Research visit to ETH Zurich focused on discussions in fluid mechanics and related lab directions.",
    image: "/news/palas-eth.webp",
  },
  {
    date: "2025-06-25",
    title: "Palas visits EPFL, Lausanne, Switzerland.",
    type: "Travel",
    description: "Palas and Santanu visit EPFL Lausanne, Switzerland to meet Aliénor Riviéré.",
    image: "/news/palas-epfl.webp",
  },
  {
    date: "2025-06-07",
    title: "Palas attends the Basilisk User Group meeting at Oxford University, UK.",
    type: "Talk",
    description: "Palas visits Oxford University for a talk in the Basilisk User Group meeting 2025.",
    image: "/news/palas-oxford.webp",
  },
  {
    date: "2025-05-15",
    title: "Palas visits University of Lille, France.",
    type: "Travel",
    description: "Palas visits Michael Boudain's group through the International Speaker Program.",
    image: "/news/palas-lille.webp",
  },
  {
    date: "2024-11-15",
    title: "Ilies Haouche visits IIT Roorkee from the University of Lille.",
    type: "Visitor",
    description: "Ilies Haouche visits IIT Roorkee from University of Lille. Welcome Ilies.",
    image: "/news/ilies-visit.webp",
  },
  {
    date: "2024-02-26",
    title: "Palas joins the Department of Chemical Engineering at IIT Roorkee as a faculty member.",
    type: "Milestone",
    description: "Palas joins the Department of Chemical Engineering, Indian Institute of Technology Roorkee as a faculty member.",
    image: "/news/palas-iitr.webp",
  },
];

/** All news, newest first. ISO dates sort correctly as strings. */
export const news = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

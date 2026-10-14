export type NewsItem = {
  /** ISO date: YYYY-MM or YYYY-MM-DD. */
  date: string;
  title: string;
  type: string;
  description: string;
  image?: string;
};

const newsItems: NewsItem[] = [
  {
    date: "2026-06",
    title: "Palas visits Luc Deike at Princeton University, NJ.",
    type: "Travel",
    description: "Palas visits Luc Deike at Princeton University in New Jersey for research discussions.",
  },
  {
    date: "2026-06",
    title: "Palas visits John Bush at MIT, Cambridge, MA.",
    type: "Travel",
    description: "Palas visits John Bush at MIT in Cambridge, Massachusetts for research discussions.",
  },
  {
    date: "2026-06",
    title: "Palas visits Aditya Lele at Rowan University, NJ.",
    type: "Travel",
    description: "Palas visits Aditya Lele at Rowan University in New Jersey for research discussions.",
  },
  {
    date: "2026-06",
    title: "Palas visits Ricardo Amores at UIUC, IL.",
    type: "Travel",
    description: "Palas visits Ricardo Amores at the University of Illinois Urbana-Champaign in Illinois for research discussions.",
  },
  {
    date: "2026-06",
    title: "Palas visits Suhas Jain at Georgia Tech, Atlanta, GA.",
    type: "Travel",
    description: "Palas visits Suhas Jain at Georgia Tech in Atlanta, Georgia for research discussions.",
  },
  {
    date: "2026-05-04",
    title: "Minakshi Uniyal joins the Farsoiya Research Group as a PhD candidate.",
    type: "Group",
    description: "Minakshi Uniyal joins Farsoiya Research Group as a PhD candidate. Welcome Minakshi.",
    image: "/people/minakshi.webp",
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

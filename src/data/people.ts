export type Person = {
  name: string;
  role: string;
  affiliation: string;
  focus: string;
  image?: string;
};

export const principalInvestigator = {
  name: "Palas Kumar Farsoiya",
  role: "Assistant Professor",
  affiliation: "Department of Chemical Engineering, IIT Roorkee",
  bio: "Leads Farsoiya Lab with interests in multiphase flows, interfacial dynamics, DNS, surfactant-laden interfaces, pilot-wave dynamics, and bio-inspired flow control.",
  image: "/palas-avatar.webp",
};

export const labMembers: Person[] = [
  {
    name: "Abhinandan Mohanty",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    focus: "Faraday waves and emergent hydrodynamics.",
    image: "/people/abhinandan.webp",
  },
  {
    name: "Deependra Singh Chauhan",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    focus: "Marangoni flows and interfacial transport.",
    image: "/people/deependra.webp",
  },
  {
    name: "Minakshi Uniyal",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    focus: "Faraday waves and emergent hydrodynamics.",
    image: "/people/minakshi.webp",
  },
  {
    name: "Abhay Purushottam Khandale",
    role: "MTech Student",
    affiliation: "IIT Roorkee",
    focus: "Drag reduction using patterns on solid bodies.",
    image: "/people/abhay.webp",
  },
  {
    name: "Loveraj Singh",
    role: "MTech Student",
    affiliation: "IIT Roorkee",
    focus: "Numerical modeling of methane pyrolysis.",
  },
];

export const collaborators: Person[] = [
  {
    name: "Ilies Haouche",
    role: "Visiting Collaborator",
    affiliation: "University of Lille, France",
    focus: "Surfactant-laden interfacial flows and Marangoni dynamics.",
    image: "/people/ilies.webp",
  },
  {
    name: "Extended Collaborators",
    role: "Research Network",
    affiliation: "IIT Roorkee, Princeton, and partner labs",
    focus: "Ongoing collaborations in interfacial physics, DNS, and fluid mechanics.",
  },
];

/** People with photos are featured on the home page. */
export const featuredPeople = [...labMembers, ...collaborators].filter((person) => person.image);

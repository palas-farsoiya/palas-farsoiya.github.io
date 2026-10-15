export type Publication = {
  year: string;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  doi: string;
  link: string;
  image?: string;
  summary: string;
  /** Short tagline; publications with one are featured on the home page. */
  highlight?: string;
};

export const publications: Publication[] = [
  {
    year: "2026",
    title: "Investigation of effect on boundary layer due to insoluble surfactants on rising bubbles",
    authors: "Chauhan, D. S., & Farsoiya, P. K.",
    journal: "Physics of Fluids",
    volume: "38, 102108",
    doi: "10.1063/5.0349830",
    link: "https://doi.org/10.1063/5.0349830",
    image: "/publications/surfactant-boundary-layer-rising-bubbles.webp",
    highlight: "How surfactants stiffen a rising bubble's surface and slow it down",
    summary:
      "This paper uses detailed simulations to show how surfactants, soap-like molecules found in almost all real liquids, collect at the back of a rising bubble, stiffen part of its surface, and slow it down. It gives a simple formula for the thickness of the thin layer where this happens, helping predict how contaminated bubbles behave in chemical reactors, the ocean, and industrial flows."
  },
  {
    year: "2026",
    title: "A hybrid Volume of Fluid Phase-Field method for Direct Numerical Simulations of soluble surfactant-laden interfacial flows",
    highlight: "How surfactants adsorb, desorb, and diffuse at interfaces",
    authors: "Haouche, Ilies and Reichert, Benjamin and Baudoin, Michaël and Kumar Farsoiya, Palas",
    journal: "Preprint",
    volume: "",
    doi: "https://hal.science/hal-05602246",
    link: "https://hal.science/hal-05602246v1/file/haouche%20et%20al.pdf",
    image: "/publications/soluble-surfactant.webp",
    summary:
      "This paper provides a open-source novel numerical approach to simulate flows with soluble surfactants at interfaces."
  },
  {
    year: "2026",
    title: "Surfactant effects on gravity-capillary waves",
    highlight: "How surfactants reshape and damp small waves",
    authors: "Yang, R., Liu, Z., Farsoiya, P. K., Popinet, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "1031, A2",
    doi: "10.1017/jfm.2026.11260",
    link: "https://doi.org/10.1017/jfm.2026.11260",
    image: "/publications/surfactant-gravity-capillary-waves.webp",
    summary:
      "This paper studies how surfactants, the same kind of molecules found in soaps and natural ocean surface films, change the way small surface waves move and break. In simple terms, it shows that even a thin surface coating can reshape waves, change how rough the surface looks, and alter how energy is lost from the flow."
  },
  {
    year: "2024",
    title: "Direct numerical simulation of bubble rising in turbulence",
    highlight: "Why turbulence slows rising bubbles",
    authors: "Liu, Z., Farsoiya, P. K., Perrard, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "999, A11",
    doi: "10.1017/jfm.2024.763",
    link: "https://doi.org/10.1017/jfm.2024.763",
    image: "/publications/bubble-rising-turbulence.webp",
    summary:
      "This work explains why bubbles rise more slowly in turbulent liquids than they do in still water. The key public-facing takeaway is that turbulence does not just shake bubbles around, it changes the drag they feel and therefore changes how quickly gases, momentum, and energy move through bubbly flows."
  },
  {
    year: "2023",
    title: "Role of viscosity in turbulent drop break-up",
    authors: "Farsoiya, P. K., Liu, Z., Daiss, A., Fox, R. O., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "972, A21",
    doi: "10.1017/jfm.2023.684",
    link: "https://doi.org/10.1017/jfm.2023.684",
    image: "/publications/role-of-viscosity-drop-breakup.webp",
    summary:
      "This paper looks at how liquid drops fragment inside turbulence and how that changes when the drop itself is more or less viscous. For a general audience, the main message is that a drop’s internal thickness matters a lot: it changes whether drops split easily, how long breakup takes, and what sizes the child droplets have afterward."
  },
  {
    year: "2023",
    title: "Direct numerical simulations of bubble-mediated gas transfer and dissolution in quiescent and turbulent flows",
    highlight: "How bubbles dissolve and exchange gas",
    authors: "Farsoiya, P. K., Magdelaine, Q., Antkowiak, A., Popinet, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "954, A29",
    doi: "10.1017/jfm.2022.994",
    link: "https://doi.org/10.1017/jfm.2022.994",
    image: "/publications/bubble-dissolution-quiescent-turbulent.webp",
    summary:
      "This article studies how bubbles dissolve and exchange gas with the surrounding liquid, both in calm conditions and in turbulence. In everyday terms, it helps explain how quickly a bubble can deliver gas into a liquid, which matters in applications from chemical reactors to natural air–water exchange."
  },
  {
    year: "2021",
    title: "Bubble-mediated transfer of dilute gas in turbulence",
    authors: "Farsoiya, P. K., Popinet, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "920, A34",
    doi: "10.1017/jfm.2021.447",
    link: "https://doi.org/10.1017/jfm.2021.447",
    image: "/publications/bubble-mediated-transfer.webp",
    summary:
      "This paper focuses on how turbulence boosts gas exchange from a single bubble. The broad takeaway is that fast-moving turbulent flow thins the layer around the bubble where diffusion happens, which lets gas escape more quickly and gives a cleaner way to predict transfer rates."
  },
  {
    year: "2021",
    title: "Jetting in finite-amplitude, free, capillary-gravity waves",
    authors: "Basak, S., Farsoiya, P. K., & Dasgupta, R.",
    journal: "Journal of Fluid Mechanics",
    volume: "909, A3",
    doi: "10.1017/jfm.2020.851",
    link: "https://doi.org/10.1017/jfm.2020.851",
    image: "/publications/jetting-capillary-gravity-waves.webp",
    summary:
      "This study explains how large surface waves can create a narrow upward jet at the center of a liquid surface. For non-specialists, it shows how seemingly smooth waves can suddenly concentrate energy into a sharp spike, a process relevant to splashing, ejection, and interface breakup."
  },
  {
    year: "2019",
    title: "Azimuthal capillary waves on a hollow filament – the discrete and the continuous spectrum",
    authors: "Farsoiya, P. K., Roy, A., & Dasgupta, R.",
    journal: "Journal of Fluid Mechanics",
    volume: "883, A21",
    doi: "10.1017/jfm.2019.809",
    link: "https://doi.org/10.1017/jfm.2019.809",
    image: "/publications/azimuthal-capillary-waves.webp",
    summary:
      "This article studies tiny ripples that travel around a hollow fluid filament. In simple language, it shows that the motion is richer than a single clean vibration: the interface can respond through both distinct wave modes and a continuous range of motions, which helps explain complex oscillations in thin fluid structures."
  },
  {
    year: "2018",
    title: "Faraday waves on a cylindrical fluid filament – generalised equation and simulations",
    authors: "Patankar, S., Farsoiya, P. K., & Dasgupta, R.",
    journal: "Journal of Fluid Mechanics",
    volume: "857, 80-118",
    doi: "10.1017/jfm.2018.657",
    link: "https://doi.org/10.1017/jfm.2018.657",
    image: "/publications/patankar-faraday.webp",
    summary:
      "This work shows how periodic forcing can excite waves on a cylindrical fluid filament and even delay certain instabilities. For a general reader, the message is that shaking a fluid system in the right way can either organize its motion or destabilize it into sheets, fragments, and breakup."
  },
  {
    year: "2017",
    title: "Axisymmetric viscous interfacial oscillations – theory and simulations",
    authors: "Farsoiya, P. K., Mayya, Y. S., & Dasgupta, R.",
    journal: "Journal of Fluid Mechanics",
    volume: "826, 797-818",
    doi: "10.1017/jfm.2017.443",
    link: "https://doi.org/10.1017/jfm.2017.443",
    image: "/publications/axisymmetric.webp",
    summary:
      "This paper examines how the interface between two viscous fluids oscillates and sometimes produces a central jet or a daughter droplet. In public-facing terms, it helps explain how fluid surfaces bounce, sharpen, and sometimes pinch off when gravity and surface tension compete."
  }
];

export const featuredPublications = publications.filter((pub) => pub.highlight);

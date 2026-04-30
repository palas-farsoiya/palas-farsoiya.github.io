import ProfileSidebar from './ProfileSidebar';

const cambridgePublications = [
  {
    year: "2026",
    title: "A hybrid Volume of Fluid Phase-Field method for Direct Numerical Simulations of soluble surfactant-laden interfacial flows",
    authors: "Haouche, Ilies and Reichert, Benjamin and Baudoin, Michaël and Kumar Farsoiya, Palas",
    journal: "Preprint",
    volume: "",
    doi: "https://hal.science/hal-05602246",
    link: "https://hal.science/hal-05602246v1/file/haouche%20et%20al.pdf",
    image: "/publications/soluble-surfactant.png",
    summary:
      "This paper provides a open-source novel numerical approach to simulate flows with soluble surfactants at interfaces."
  },
  {
    year: "2026",
    title: "Surfactant effects on gravity-capillary waves",
    authors: "Yang, R., Liu, Z., Farsoiya, P. K., Popinet, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "1031, A2",
    doi: "10.1017/jfm.2026.11260",
    link: "https://doi.org/10.1017/jfm.2026.11260",
    image: "/publications/surfactant-gravity-capillary-waves.png",
    summary:
      "This paper studies how surfactants, the same kind of molecules found in soaps and natural ocean surface films, change the way small surface waves move and break. In simple terms, it shows that even a thin surface coating can reshape waves, change how rough the surface looks, and alter how energy is lost from the flow."
  },
  {
    year: "2024",
    title: "Direct numerical simulation of bubble rising in turbulence",
    authors: "Liu, Z., Farsoiya, P. K., Perrard, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "999, A11",
    doi: "10.1017/jfm.2024.763",
    link: "https://doi.org/10.1017/jfm.2024.763",
    image: "/publications/bubble-rising-turbulence.png",
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
    image: "/publications/role-of-viscosity-drop-breakup.png",
    summary:
      "This paper looks at how liquid drops fragment inside turbulence and how that changes when the drop itself is more or less viscous. For a general audience, the main message is that a drop’s internal thickness matters a lot: it changes whether drops split easily, how long breakup takes, and what sizes the child droplets have afterward."
  },
  {
    year: "2023",
    title: "Direct numerical simulations of bubble-mediated gas transfer and dissolution in quiescent and turbulent flows",
    authors: "Farsoiya, P. K., Magdelaine, Q., Antkowiak, A., Popinet, S., & Deike, L.",
    journal: "Journal of Fluid Mechanics",
    volume: "954, A29",
    doi: "10.1017/jfm.2022.994",
    link: "https://doi.org/10.1017/jfm.2022.994",
    image: "/publications/bubble-dissolution-quiescent-turbulent.png",
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
    image: "/publications/bubble-mediated-transfer.png",
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
    image: "/publications/jetting-capillary-gravity-waves.png",
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
    image: "/publications/azimuthal-capillary-waves.png",
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
     image: "/publications/patankar-faraday.png",
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
    image: "/publications/axisymmetric.png",
    summary:
      "This paper examines how the interface between two viscous fluids oscillates and sometimes produces a central jet or a daughter droplet. In public-facing terms, it helps explain how fluid surfaces bounce, sharpen, and sometimes pinch off when gravity and surface tension compete."
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>

          <div className="md:col-span-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Research
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Recent publications with graphical abstracts and summaries.
              </p>
            </div>

            <div className="space-y-8">
              {cambridgePublications.map((pub, index) => (
                <article key={index} className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                    <div className="lg:col-span-4 mb-6 lg:mb-0">
                      {pub.image ? (
                        <div className="rounded-xl border border-muted bg-background p-3">
                          <img
                            src={pub.image}
                            alt={pub.title}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="rounded-xl border border-dashed border-muted p-6 text-center text-sm text-muted-foreground">
                          No graphical abstract is listed for this article on Cambridge Core.
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-8">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          {pub.year}
                        </span>
                        <span className="text-sm text-muted-foreground">{pub.journal}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-primary leading-relaxed">
                        {pub.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {pub.authors}
                      </p>

                      <p className="mt-3 text-foreground">
                        {pub.journal}, {pub.volume}
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        DOI: {pub.doi}
                      </p>

                      <div className="mt-5 rounded-xl bg-muted/40 p-4">
                        <p className="text-foreground leading-relaxed">{pub.summary}</p>
                      </div>

                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-5 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        View Paper
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

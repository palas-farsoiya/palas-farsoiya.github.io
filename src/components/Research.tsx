import ProfileSidebar from './ProfileSidebar';

const Research = () => {
  const researchProjects = [
    {
      title: "Multiphase flows and interfacial transport",
      description: [
        "We study how droplets, bubbles, and free surfaces exchange mass, momentum, and energy. A recurring theme in the lab is how transport across deformable interfaces controls the large-scale behavior of multiphase systems.",
        "Our work spans quiescent and turbulent environments, with special attention to dissolution, wave-mediated coupling, and the role of surfactants in modifying interfacial mobility."
      ],
      image: "/welcome.jpg"
    },
    {
      title: "Surfactant-laden interfaces and Marangoni flows",
      description: [
        "The lab develops numerical frameworks for interfacial flows with soluble and insoluble surfactants. These systems exhibit rich coupling between bulk transport, interfacial chemistry, and hydrodynamics.",
        "By resolving adsorption-desorption kinetics and Marangoni stresses in moving-interface problems, we aim to understand and predict mobility reduction, path instability, and topology-sensitive transport."
      ],
      image: "/contact.jpg"
    },
    {
      title: "Fluid-structure interaction and emergent wave-particle dynamics",
      description: [
        "We are interested in strongly coupled systems where waves, interfaces, and compliant boundaries generate collective behavior that is larger than the sum of its parts.",
        "This includes pilot-wave analogues, nonlinear wave fields, and bio-inspired flow control problems where a mechanistic understanding of the hydrodynamics can guide new physical models and reduced-order descriptions."
      ],
      image: "/coders.jpg"
    }
  ];

  return (
    <section id="research" className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Research
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Physico-chemical phenomena at fluid interfaces explored with modern numerical tools.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="bg-card rounded-lg border border-border p-8 lg:p-12 mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-6">Research Overview</h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-foreground leading-relaxed">
                  Farsoiya Lab at IIT Roorkee studies how fluid interfaces between liquids, gases, and complex fluids govern transport, deformation, and energy exchange across scales.
                </p>
                <p className="mb-6 text-foreground leading-relaxed">
                  Our research focuses on emergent physics in soft-matter and multiphase systems, especially interfacial dynamics in droplets, bubbles, and waves where surface tension, surfactants, and turbulence interact to produce rich nonlinear behavior.
                </p>
                <p className="mb-6 text-foreground leading-relaxed">
                  Through theory, high-fidelity simulations, and experiments, we resolve these processes from first principles while asking how wave fields, interfacial chemistry, and multi-scale hydrodynamics give rise to collective behavior.
                </p>
                <p className="text-foreground leading-relaxed">
                  We are particularly motivated by problems that bridge classical fluid mechanics with fundamental physics, from bubble-mediated mass transfer to wave-particle analogues and fluid-structure interaction.
                </p>
              </div>
            </div>

            {/* Research Projects */}
            <div className="space-y-16">
              {researchProjects.map((project, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-8 lg:p-12">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Figure - Now on the left */}
                    <div className="lg:col-span-4 mb-8 lg:mb-0">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground text-center px-4">
                            Research Figure
                            <br />
                            <span className="text-sm">(To be added)</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8">
                      <h3 className="text-2xl font-semibold text-primary mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <div className="prose prose-lg max-w-none">
                        {project.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-6 text-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

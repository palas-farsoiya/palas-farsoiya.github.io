import { ExternalLink, FileText, Linkedin } from 'lucide-react';

const Hero = () => {
  const phdAdmissionsUrl = "https://iitr.ac.in/Academics/Admission%20To%20Doctoral%20Programmes.html";
  const appointmentUrl = "https://calendly.com/farsoiya";

  const quickLinks = [
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=GlKaKdIAAAAJ&hl=en', icon: ExternalLink },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/palas-kumar-farsoiya/', icon: Linkedin },
    { name: 'Appointment', href: appointmentUrl, icon: FileText },
    { name: 'Contact', href: 'mailto:palas.farsoiya@ch.iitr.ac.in', icon: FileText },
  ];

  return (
    <section className="py-1 sm:py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-5xl lg:text-3xl">
              Dr. Palas Kumar Farsoiya
            </h1>

            <div className="mt-4 prose prose-sm max-w-none space-y-2">
              <p>
                I am an Assistant Professor in the Department of Chemical Engineering at{' '}
                <a
                  href="https://iitr.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  IIT Roorkee
                </a>, where I lead Farsoiya Lab. Our work explores how fluid interfaces between liquids, gases, and complex fluids govern transport, deformation, and energy exchange across scales.
              </p>

              <p>
                My research combines direct numerical simulations, theoretical modeling, and experiments to study multiphase flows, surfactant-laden interfaces, and bio-inspired flow control. We use modern numerical tools to uncover emergent physics and build insight for environmental and industrial fluid systems.
              </p>

              <p>
                Before joining IIT Roorkee, I completed my PhD at{' '}
                <a
                  href="https://www.iitb.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  IIT Bombay
                </a>.
                I was then a postdoctoral researcher at Princeton University before returning to India to start the group.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-border rounded-md hover:bg-muted hover:text-accent transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="mt-8 lg:mt-0 lg:col-span-5 xl:col-span-4">
            <div className="aspect-square max-w-[260px] mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/palas-avatar.jpg"
                alt="Dr. Palas Kumar Farsoiya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Join Us Callout */}
        <div className="mt-2 bg-muted/60 border border-border rounded-xl p-4 max-w-1xl">
          <p className="text-base font-semibold text-primary leading-snug">
            Interested in joining the group? 
          </p>

          <p className="mt-1 text-base text-foreground">
            We welcome motivated students and collaborators interested in computational fluid mechanics, interfacial flows, and fluid-structure interaction. Please schedule an appointment to discuss research opportunities and research group fit.
          </p>

          <a
            href={phdAdmissionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 px-4 py-2 text-xs font-semibold text-white bg-primary rounded-md hover:opacity-90 transition"
          >
            IIT Roorkee PhD Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

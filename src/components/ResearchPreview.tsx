import { ArrowRight, Beaker } from 'lucide-react';

const featuredResearch = [
  {
    title: "Multiphase flows and interfacial transport",
    description: "Mechanistic studies of droplets, bubbles, and deformable interfaces across quiescent and turbulent environments.",
    image: "/welcome.jpg"
  },
  {
    title: "Fluid-structure interaction and emergent hydrodynamics",
    description: "Wave-particle analogues, compliant boundaries, and nonlinear coupled dynamics explored with high-fidelity tools.",
    image: "/contact.jpg"
  }
];

const ResearchPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Beaker className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Research</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research themes spanning interfacial physics, DNS, and soft-matter hydrodynamics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {featuredResearch.map((research, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-48 object-cover rounded-lg border border-muted mb-4"
              />
              <h3 className="font-semibold text-lg text-primary mb-3 leading-tight">
                {research.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {research.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All Research
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;

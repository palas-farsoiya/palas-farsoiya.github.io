import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredPublications = [
  {
    title: "Surfactant effects on gravity-capillary waves",
    journal: "Journal of Fluid Mechanics",
    year: "2026",
    highlight: "How surfactants reshape and damp small waves",
    image: "/publications/surfactant-gravity-capillary-waves.png",
    link: "https://doi.org/10.1017/jfm.2026.11260"
  },
  {
    title: "Direct numerical simulation of bubble rising in turbulence",
    journal: "Journal of Fluid Mechanics",
    year: "2024",
    highlight: "Why turbulence slows rising bubbles",
    image: "/publications/bubble-rising-turbulence.png",
    link: "https://doi.org/10.1017/jfm.2024.763"
  },
  {
    title: "Direct numerical simulations of bubble-mediated gas transfer and dissolution in quiescent and turbulent flows",
    journal: "Journal of Fluid Mechanics",
    year: "2023",
    highlight: "How bubbles dissolve and exchange gas",
    image: "/publications/bubble-dissolution-quiescent-turbulent.png",
    link: "https://doi.org/10.1017/jfm.2022.994"
  }
];

const PublicationsPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Research</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected publications with graphical abstracts
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {featuredPublications.map((pub, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-start">
                <div className="lg:col-span-3 mb-4 lg:mb-0">
                  <div className="rounded-lg border border-muted bg-background p-2">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="font-semibold text-lg text-primary mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span className="text-accent font-medium">{pub.highlight}</span>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted text-primary rounded text-sm font-medium hover:bg-muted/80 transition-colors"
                  >
                    View Paper <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="lg:col-span-1 flex justify-end lg:justify-center">
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All Research
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;

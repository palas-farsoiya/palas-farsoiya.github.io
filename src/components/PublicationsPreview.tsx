import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredPublications } from '@/data/publications';


const PublicationsPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Selected Publications</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected publications with graphical abstracts
          </p>
        </div>

        <div className="space-y-6 mb-10">
          {featuredPublications.map((pub) => (
            <div key={pub.doi} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-start">
                <div className="lg:col-span-3 mb-4 lg:mb-0">
                  <div className="rounded-lg border border-muted bg-background p-2">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      loading="lazy"
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
            View All Publications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;

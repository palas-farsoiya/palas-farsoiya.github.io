import ProfileSidebar from './ProfileSidebar';
import { publications } from '@/data/publications';


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
              <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Publications
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Recent publications with graphical abstracts and summaries.
              </p>
            </div>

            <div className="space-y-8">
              {publications.map((pub) => (
                <article key={pub.doi} className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                    <div className="lg:col-span-4 mb-6 lg:mb-0">
                      {pub.image ? (
                        <div className="rounded-xl border border-muted bg-background p-3">
                          <img
                            src={pub.image}
                            alt={pub.title}
                            loading="lazy"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="rounded-xl border border-dashed border-muted p-6 text-center text-sm text-muted-foreground">
                          No graphical abstract is available for this article.
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

import { ExternalLink, Plane } from 'lucide-react';
import ProfileSidebar from './ProfileSidebar';
import { news } from '@/data/news';

const News = () => {
  return (
    <section id="news" className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                News
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Updates from the lab, new students, travel, and collaborations.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {news.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                      <div className="lg:col-span-4 mb-6 lg:mb-0">
                        {item.image ? (
                          <div className="rounded-xl border border-muted bg-background p-2">
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-auto object-contain rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="rounded-xl border border-muted bg-muted/40 h-32 flex items-center justify-center">
                            <Plane className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                          </div>
                        )}
                        {item.imageCredit && (
                          <a
                            href={item.imageCredit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-[11px] leading-snug text-muted-foreground hover:text-accent"
                          >
                            {item.imageCredit.text}
                          </a>
                        )}
                      </div>
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                            {item.date}
                          </span>
                          <span className="text-sm text-muted-foreground">{item.type}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-foreground leading-relaxed">
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent hover:underline"
                          >
                            Read the paper <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

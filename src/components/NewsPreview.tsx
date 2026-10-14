import { ArrowRight, Calendar, Megaphone, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { news } from '@/data/news';

const latestNews = news.slice(0, 6);

const NewsPreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Megaphone className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Latest News</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent updates and announcements from our research activities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="rounded-lg border border-muted bg-background p-2 mb-3">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-32 object-contain rounded-md"
                  />
                ) : (
                  <div className="h-32 rounded-md bg-muted/40 flex items-center justify-center">
                    <Plane className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{item.date}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-primary leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;

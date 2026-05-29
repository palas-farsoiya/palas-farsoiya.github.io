import { ArrowRight, Calendar, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPreview = () => {
  const latestNews = [
    {
      date: "2026-05-04",
      title: "Minakshi Uniyal joins the Farsoiya Research Group as a PhD candidate.",
      type: "Group",
      image: "/people/minakshi.jpeg"
    },
    {
      date: "2026-01-15",
      title: "Abhinandan Mohanty joins the Farsoiya Research Group as a PhD candidate.",
      type: "Group",
      image: "/news/abhinandan.jpg"
    },
    {
      date: "2025-06-25",
      title: "Palas visits EPFL, Lausanne, Switzerland.",
      type: "Travel",
      image: "/news/palas-epfl.jpg"
    },
    {
      date: "2025-06-27",
      title: "Palas visits ETH Zurich to meet Daniel Ruth.",
      type: "Travel",
      image: "/news/palas-eth.jpg"
    }
  ];

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

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {latestNews.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-lg border border-muted bg-background p-2 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{item.date}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary leading-relaxed">
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

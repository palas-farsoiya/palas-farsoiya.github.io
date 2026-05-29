import ProfileSidebar from './ProfileSidebar';

const News = () => {
  const newsItems = [
    {
      date: "2026-05-04",
      title: "Minakshi Uniyal joins the Farsoiya Research Group as a PhD candidate.",
      type: "Group",
      description: "Minakshi Uniyal joins Farsoiya Research Group as a PhD candidate. Welcome Minakshi.",
      image: "/people/minakshi.jpeg"
    },
    {
      date: "2026-01-15",
      title: "Abhinandan Mohanty joins the Farsoiya Research Group as a PhD candidate.",
      type: "Group",
      description: "Abhinandan Mohanty joins Farsoiya Research Group as a PhD candidate. Welcome Abhinandan.",
      image: "/news/abhinandan.jpg"
    },
    {
      date: "2026-01-15",
      title: "Abhay Khandale and Loveraj Singh join the group as MTech students.",
      type: "Students",
      description: "Abhay and Loveraj join the group as MTech students.",
      image: "/iitr-banner.jpg"
    },
    {
      date: "2025-06-25",
      title: "Palas visits EPFL, Lausanne, Switzerland.",
      type: "Travel",
      description: "Palas and Santanu visit EPFL Lausanne, Switzerland to meet Aliénor Riviéré.",
      image: "/news/palas-epfl.jpg"
    },
    {
      date: "2025-06-27",
      title: "Palas visits ETH Zurich to meet Daniel Ruth.",
      type: "Travel",
      description: "Research visit to ETH Zurich focused on discussions in fluid mechanics and related lab directions.",
      image: "/news/palas-eth.jpg"
    },
    {
      date: "2025-06-07",
      title: "Palas attends the Basilisk User Group meeting at Oxford University, UK.",
      type: "Talk",
      description: "Palas visits Oxford University for a talk in the Basilisk User Group meeting 2025.",
      image: "/news/palas-oxford.jpg"
    },
    {
      date: "2025-05-15",
      title: "Palas visits University of Lille, France.",
      type: "Travel",
      description: "Palas visits Michael Boudain's group through the International Speaker Program.",
      image: "/news/palas-lille.png"
    },
    {
      date: "2024-11-15",
      title: "Ilies Haouche visits IIT Roorkee from the University of Lille.",
      type: "Visitor",
      description: "Ilies Haouche visits IIT Roorkee from University of Lille. Welcome Ilies.",
      image: "/news/ilies-visit.jpg"
    },
    {
      date: "2024-02-26",
      title: "Palas joins the Department of Chemical Engineering at IIT Roorkee as a faculty member.",
      type: "Milestone",
      description: "Palas joins the Department of Chemical Engineering, Indian Institute of Technology Roorkee as a faculty member.",
      image: "/news/palas-iitr.jpg"
    }
  ];

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
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                News
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Updates from the lab, new students, travel, and collaborations.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {newsItems.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                      <div className="lg:col-span-4 mb-6 lg:mb-0">
                        <div className="rounded-xl border border-muted bg-background p-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
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

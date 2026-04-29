import ProfileSidebar from './ProfileSidebar';

const Awards = () => {
  const awards = [
    {
      year: "2026",
      title: "Growing research group at IIT Roorkee",
      description: "This section can be expanded with fellowships, invited recognitions, and lab milestones as they are announced."
    }
  ];

  return (
    <section id="awards" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Banner Section */}
            <div className="relative mb-16 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/iitr-banner.jpg"
                  alt="Awards"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Awards</h1>
                    <p className="text-xl">Selected honors and lab milestones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards List */}
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent/10 text-accent flex-shrink-0">
                      {award.year}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-2 leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-sm text-foreground leading-relaxed mb-2">
                        {award.description}
                      </p>
                      {award.link && (
                        <a 
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline text-xs"
                        >
                          Learn more →
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
    </section>
  );
};

export default Awards;

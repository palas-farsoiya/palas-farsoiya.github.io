import ProfileSidebar from './ProfileSidebar';

const Talks = () => {
  const talks = [
    "Basilisk User Group meeting, Oxford University, UK (2025)",
    "Visit and discussions with Michael Boudain's group, University of Lille, France (2025)",
    "Visit and discussions at EPFL, Lausanne, Switzerland (2025)",
    "Visit and discussions at ETH Zurich, Switzerland (2025)"
  ];

  return (
    <section id="talks" className="py-16 sm:py-24">
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
                  alt="Talks"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Talks</h1>
                    <p className="text-xl">Selected talks, visits, and research discussions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Talks List */}
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <p className="text-foreground leading-relaxed">{talk}</p>
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

export default Talks;

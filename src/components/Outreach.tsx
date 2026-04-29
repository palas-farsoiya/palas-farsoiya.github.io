import ProfileSidebar from './ProfileSidebar';

const Outreach = () => {
  const outreachActivities = [
    {
      title: "Research visibility and lab communication",
      description: "This space can host future outreach activities, public talks, lab explainers, and broader-impact work connected to Farsoiya Lab."
    },
    {
      title: "Student mentorship",
      description: "The group welcomes motivated students and visitors, and this page can evolve into a record of workshops, tutorials, and mentoring activities."
    }
  ];

  return (
    <section id="outreach" className="py-16 sm:py-24">
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
                  alt="Outreach Activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Outreach</h1>
                    <p className="text-xl">Public engagement and student-facing activities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact and Commitment Section - Now after banner */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Impact and Commitment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The lab values clear scientific communication, mentoring, and building an inclusive research environment around fluid mechanics and interfacial physics.
              </p>
              <p className="text-foreground leading-relaxed">
                As the group grows, this section can highlight tutorials, lectures, workshops, and outreach efforts that connect advanced fluid mechanics with broader audiences.
              </p>
            </div>

            {/* Outreach Activities */}
            <div className="grid gap-6 md:grid-cols-2">
              {outreachActivities.map((activity, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  {activity.link && (
                    <a 
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:underline text-sm font-medium"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;

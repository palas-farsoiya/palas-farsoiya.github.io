import ProfileSidebar from './ProfileSidebar';

const CodesBlogs = () => {
  const posts = [
    {
      title: "CFD with Bayesian Optimisation",
      description: "Notes and code stories for numerical methods, interfacial flow simulations, and reproducible research workflows.",
      technologies: ["Python", "GPyTorch", "ANSYS Fluent", "scikit-optimize", "CFD"],
      image: "/images/blog1.jpg" // Placeholder path
    },
    {
      title: "Why Categorical Variables Changed Optimisation Game",
      description: "This section can host future writeups from the lab on simulation frameworks, flow physics, and computational tools.",
      technologies: ["Python", "BoTorch", "PyTorch", "OpenFOAM", "Optimization"],
      image: "/images/blog2.jpg" // Placeholder path
    },
    {
      title: "Building Graph Neural Networks that Understand Geometry",
      description: "As new project code and technical posts are published, they can be linked here alongside open-source releases and explainers.",
      technologies: ["PyTorch Geometric", "Python", "GNN", "Multiphase Flow", "Deep Learning"],
      image: "/images/blog3.jpg" // Placeholder path
    }
  ];

  return (
    <section id="codes-blogs" className="py-16 sm:py-24 bg-muted/30">
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
                Codes & Blogs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A place for future code releases, simulation notes, and technical writeups from the lab.
              </p>
            </div>

            {/* Posts */}
            <div className="space-y-12">
              {posts.map((post, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-8 lg:p-12">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
                    {/* Content */}
                    <div className="lg:col-span-8">
                      <h3 className="text-2xl font-semibold text-primary mb-6 leading-tight">
                        {post.title}
                      </h3>
                      <p className="mb-6 text-foreground leading-relaxed">
                        {post.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href="/#/contact"
                          className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
                        >
                          Get in Touch
                        </a>
                        <a 
                          href="https://scholar.google.com/citations?user=GlKaKdIAAAAJ&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                          View Publications
                        </a>
                      </div>
                    </div>

                    {/* Figure placeholder */}
                    <div className="mt-8 lg:mt-0 lg:col-span-4">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                            if (sibling) sibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground text-center px-4">
                            Code Figure
                            <br />
                            <span className="text-sm">(To be added)</span>
                          </p>
                        </div>
                      </div>
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

export default CodesBlogs;

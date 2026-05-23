import ProfileSidebar from './ProfileSidebar';

const People = () => {
  const phdAdmissionsUrl = "https://iitr.ac.in/Academics/Admission%20To%20Doctoral%20Programmes.html";

  const principalInvestigator = {
    name: "Palas Kumar Farsoiya",
    role: "Assistant Professor",
    affiliation: "Department of Chemical Engineering, IIT Roorkee",
    bio: "Leads Farsoiya Lab with interests in multiphase flows, interfacial dynamics, DNS, surfactant-laden interfaces, pilot-wave dynamics, and bio-inspired flow control.",
    image: "/palas-avatar.jpg"
  };
  
  // const labStaff = {
  //   name: "Kanchna Bhatrola ",
  //   role: "Technical Staff",
  //   affiliation: "Department of Chemical Engineering, IIT Roorkee",
  //   bio: "Support research activities in the lab.",
  //   image: "/people/kanchan.jpeg"
  // };

  const labMembers = [
    {
      name: "Abhinandan Mohanty",
      role: "PhD Student",
      affiliation: "IIT Roorkee",
      focus: "Faraday waves and emergent hydrodynamics.",
      image: "/people/abhinandan.jpg"
    },
    {
      name: "Deependra Singh Chauhan",
      role: "PhD Student",
      affiliation: "IIT Roorkee",
      focus: "Marangoni flows and interfacial transport.",
      image: "/people/deependra.jpg"
    },
    {
      name: "Minakshi Uniyal",
      role: "PhD Student",
      affiliation: "IIT Roorkee",
      focus: "Faraday waves and emergent hydrodynamics.",
      image: "/people/minakshi.jpeg"
    },
    {
      name: "Abhay Purushottam Khandale",
      role: "MTech Student",
      affiliation: "IIT Roorkee",
      focus: "Viscous droplet breakup.",
      image: "/people/abhay.jpeg"

    },
    // {
    //   name: "Aman Deogam",
    //   role: "MTech Student",
    //   affiliation: "IIT Roorkee",
    //   focus: "Numerical modeling of methane pyrolysis.",
    //   image: "/people/aman.jpg"
    // },
    {
      name: "Loveraj Singh",
      role: "MTech Student",
      affiliation: "IIT Roorkee",
      focus: "Numerical modeling of methane pyrolysis."
    }
    // {
    //   name: "Udit Maurya",
    //   role: "MTech Student",
    //   affiliation: "IIT Roorkee",
    //   focus: "Graduate research in interfacial and multiphase flows.",
    //   image: "/people/udit.jpg"
    // }
  ];

  const collaborators = [
    {
      name: "Ilies Haouche",
      role: "Visiting Collaborator",
      affiliation: "University of Lille, France",
      focus: "Surfactant-laden interfacial flows and Marangoni dynamics.",
      image: "/people/ilies.jpg"
    },
    {
      name: "Extended Collaborators",
      role: "Research Network",
      affiliation: "IIT Roorkee, Princeton, and partner labs",
      focus: "Ongoing collaborations in interfacial physics, DNS, and fluid mechanics."
    }
  ];

  const initialBadge = (name: string) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <section id="people" className="py-16 sm:py-24 bg-muted/30">
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
                People
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Students and collaborators contributing to Farsoiya Lab.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-8">Principal Investigator</h3>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src={principalInvestigator.image}
                    alt={principalInvestigator.name}
                    className="w-28 h-28 rounded-2xl object-cover border border-muted"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-primary">{principalInvestigator.name}</h4>
                    <p className="mt-1 text-accent font-medium">{principalInvestigator.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{principalInvestigator.affiliation}</p>
                    <p className="mt-4 text-foreground leading-relaxed">{principalInvestigator.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-primary mb-8">Lab Members</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {labMembers.map((member, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-5">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover border border-muted flex-shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-semibold flex-shrink-0">
                          {initialBadge(member.name)}
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary leading-tight">{member.name}</h4>
                        <p className="text-sm font-medium text-accent mt-1">{member.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{member.affiliation}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{member.focus}</p>
                  </div>
                ))}

                <a
                  href={phdAdmissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-dashed border-accent/50 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all"
                >
                  <img
                    src="/coders.jpg"
                    alt="Join the lab"
                    className="w-full h-40 object-cover rounded-xl border border-muted mb-5"
                  />
                  <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    This could be you
                  </h4>
                  <p className="text-sm font-medium text-accent mt-1">Prospective PhD Student</p>
                  <p className="text-sm text-foreground leading-relaxed mt-3">
                    Interested in joining Farsoiya Lab? View the IIT Roorkee PhD admissions page and apply.
                  </p>
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-8">Visitors and Collaborators</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-5">
                      {collaborator.image ? (
                        <img
                          src={collaborator.image}
                          alt={collaborator.name}
                          className="w-16 h-16 rounded-full object-cover border border-muted flex-shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-semibold flex-shrink-0">
                          {initialBadge(collaborator.name)}
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary leading-tight">{collaborator.name}</h4>
                        <p className="text-sm font-medium text-accent mt-1">{collaborator.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{collaborator.affiliation}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{collaborator.focus}</p>
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

export default People;

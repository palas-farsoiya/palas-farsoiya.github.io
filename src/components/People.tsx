import ProfileSidebar from './ProfileSidebar';
import { collaborators, labMembers, principalInvestigator, type Person } from '@/data/people';
import { links } from '@/data/site';

const initialBadge = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const PersonCard = ({ person }: { person: Person }) => (
  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-5">
      {person.image ? (
        <img
          src={person.image}
          alt={person.name}
          width={64}
          height={64}
          loading="lazy"
          className="w-16 h-16 rounded-full object-cover border border-muted flex-shrink-0"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-semibold flex-shrink-0">
          {initialBadge(person.name)}
        </div>
      )}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-primary leading-tight">{person.name}</h4>
        <p className="text-sm font-medium text-accent mt-1">{person.role}</p>
        <p className="text-sm text-muted-foreground mt-1">{person.affiliation}</p>
      </div>
    </div>
    <p className="text-sm text-foreground leading-relaxed">{person.focus}</p>
  </div>
);

const People = () => {
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
              <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                People
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Students and collaborators contributing to Farsoiya Lab.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8">Principal Investigator</h2>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src={principalInvestigator.image}
                    alt={principalInvestigator.name}
                    width={112}
                    height={112}
                    className="w-28 h-28 rounded-2xl object-cover border border-muted"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{principalInvestigator.name}</h3>
                    <p className="mt-1 text-accent font-medium">{principalInvestigator.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{principalInvestigator.affiliation}</p>
                    <p className="mt-4 text-foreground leading-relaxed">{principalInvestigator.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-primary mb-8">Lab Members</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {labMembers.map((member) => (
                  <PersonCard key={member.name} person={member} />
                ))}

                <a
                  href={links.phdAdmissions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-dashed border-accent/50 rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all"
                >
                  <img
                    src="/coders.webp"
                    alt="Join the lab"
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-xl border border-muted mb-5"
                  />
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    This could be you
                  </h3>
                  <p className="text-sm font-medium text-accent mt-1">Prospective PhD Student</p>
                  <p className="text-sm text-foreground leading-relaxed mt-3">
                    Interested in joining Farsoiya Lab? View the IIT Roorkee PhD admissions page and apply.
                  </p>
                </a>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-8">Visitors and Collaborators</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {collaborators.map((collaborator) => (
                  <PersonCard key={collaborator.name} person={collaborator} />
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

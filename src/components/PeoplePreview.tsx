import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredTeam = [
  {
    name: "Abhinandan Mohanty",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    collaboration: "Faraday waves",
    image: "/people/abhinandan.jpg"
  },
  {
    name: "Deependra Singh Chauhan",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    collaboration: "Marangoni flows",
    image: "/people/deependra.jpg"
  },
   {
    name: "Minakshi Uniyal",
    role: "PhD Student",
    affiliation: "IIT Roorkee",
    collaboration: "Faraday waves",
    image: "/people/minakshi.jpeg"
  },
  {
    name: "Abhay Purushottam Khandale",
    role: "MTech Student",
    affiliation: "IIT Roorkee",
    collaboration: "CFD and hydrogen energy",
    image: "/people/abhay.jpeg"
  },
  {
    name: "Ilies Haouche",
    role: "Visitor",
    affiliation: "University of Lille",
    collaboration: "Surfactant-laden interfacial flows",
    image: "/people/ilies.jpg"
  }
];

const PeoplePreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Meet the Team</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Students and collaborators building Farsoiya Lab
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featuredTeam.map((person, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow flex gap-4 items-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 object-cover rounded-full border border-muted flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-primary mb-2">{person.name}</h3>
                <p className="text-sm text-accent font-medium mb-1">{person.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{person.affiliation}</p>
                <p className="text-sm text-foreground">{person.collaboration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View All Team Members
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PeoplePreview;

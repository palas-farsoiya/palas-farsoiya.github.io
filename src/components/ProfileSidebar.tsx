import { Mail, MapPin, ExternalLink, FileText, Linkedin } from 'lucide-react';

const ProfileSidebar = () => {
  const links = [
    { name: 'Email', href: 'mailto:palas.farsoiya@ch.iitr.ac.in', icon: Mail },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/palas-kumar-farsoiya/', icon: Linkedin },
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=GlKaKdIAAAAJ&hl=en', icon: ExternalLink },
    { name: 'Appointment', href: 'https://calendly.com/farsoiya', icon: FileText },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      {/* Profile Image */}
      <div className="text-center mb-6">
        <img
          src="/palas-avatar.jpg"
          alt="Dr. Palas Kumar Farsoiya"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-muted object-cover"
        />
        <h3 className="text-xl font-semibold text-primary mb-2">Dr Palas Kumar Farsoiya</h3>
        <p className="text-sm text-muted-foreground mb-2">Assistant Professor, Chemical Engineering</p>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>IIT Roorkee, India</span>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
            >
              <Icon className="h-4 w-4 text-accent flex-shrink-0" />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSidebar;

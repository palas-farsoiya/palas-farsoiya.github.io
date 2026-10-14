import { CalendarDays, ExternalLink, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact, links } from '@/data/site';

const ProfileSidebar = () => {
  const sidebarLinks = [
    { name: 'Email', href: `mailto:${contact.email}`, icon: Mail },
    { name: 'LinkedIn', href: links.linkedin, icon: Linkedin },
    { name: 'Google Scholar', href: links.googleScholar, icon: ExternalLink },
    ...(links.orcid ? [{ name: 'ORCID', href: links.orcid, icon: ExternalLink }] : []),
    { name: 'Appointment', href: links.appointment, icon: CalendarDays },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      {/* Profile Image */}
      <div className="text-center mb-6">
        <img
          src="/palas-avatar.webp"
          alt="Dr. Palas Kumar Farsoiya"
          width={128}
          height={128}
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
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isExternal = link.href.startsWith('http');
          return (
            <a
              key={link.name}
              href={link.href}
              {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
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

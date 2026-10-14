import { Building, Mail, MapPin, Phone } from 'lucide-react';
import ProfileSidebar from './ProfileSidebar';
import { contact } from '@/data/site';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Contact
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch to discuss research collaborations or opportunities.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
              <div className="flex-shrink-0">
                <img
                  src="/palas-avatar.webp"
                  alt="Palas Kumar Farsoiya"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-full border border-muted shadow"
                />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Email</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-accent hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Phone</p>
                      <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-accent">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Building className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Institution</p>
                      <p className="text-foreground">
                        Department of Chemical Engineering<br />
                        IIT Roorkee
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary mb-1">Location</p>
                      <p className="text-foreground">{contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

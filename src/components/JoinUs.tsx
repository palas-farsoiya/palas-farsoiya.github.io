import ProfileSidebar from './ProfileSidebar';

const JoinUs = () => {
  const phdAdmissionsUrl = "https://iitr.ac.in/Academics/Admission%20To%20Doctoral%20Programmes.html";

  return (
    <section id="join-us" className="py-16 sm:py-24 bg-muted/30">
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
                Join Us
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We welcome motivated students and visitors interested in computational fluid mechanics, interfacial flows, multiphase transport, and fluid-structure interaction. Please schedule an appointment to discuss research opportunities and research group fit.
              </p>
            </div>

            {/* Current Open Positions */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Current Open Positions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The group is growing and prospective PhD students, MTech students, postdoctoral researchers, and visitors are encouraged to get in touch. If there is a formal opening, it will be listed here and circulated through the usual IIT Roorkee channels.
              </p>
              <a
                href={phdAdmissionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 items-center px-5 py-3 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Apply via IIT Roorkee PhD Admissions
              </a>
            </div>

            {/* PhD and Postdoc Opportunities */}
            <div className="mb-12 bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                PhD and Postdoctoral Scholarships / Fellowships
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you are interested in working with the lab, please send an email with your CV and a short statement of motivation. Please use the email subject
                <span className="font-medium">
                  {" "}“PhD/Postdoc Inquiry – Your Name”
                </span>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                You can also propose externally funded visits or fellowships aligned with the lab's themes.
              </p>
            </div>

            {/* PhD Scholarships */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                PhD Scholarships (2026 Entry)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href={phdAdmissionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    IIT Roorkee PhD Admissions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Admission information for doctoral study at IIT Roorkee.
                  </p>
                </a>

                <a
                  href="https://iitr.ac.in/admissions/pages/Masters_Programs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    IIT Roorkee MTech Admissions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Graduate admissions pathways for students interested in joining the lab.
                  </p>
                </a>

                <a
                  href="https://www.chinese-scholarship-council.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    CSC Joint Scholarship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Joint funding route for eligible PhD applicants.
                  </p>
                </a>

                <a
                  href="https://www.pmrf.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    PMRF
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prime Minister's Research Fellowship information for eligible applicants.
                  </p>
                </a>
              </div>
            </div>

            {/* Postdoctoral Fellowships */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Postdoctoral Fellowships
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="https://anrfonline.in/ANRF/npdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    ANRF-NPDF
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    ANRF sponsorded postdoctoral fellowship information for eligible applicants.
                  </p>
                </a>

             
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

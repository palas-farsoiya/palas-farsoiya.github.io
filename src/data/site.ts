export const siteUrl = "https://palas-farsoiya.github.io";

export const contact = {
  email: "palas.farsoiya@ch.iitr.ac.in",
  phone: "+91 1332 285382",
  address: "B-204 Block B, Chemical Engineering, IIT Roorkee, Roorkee, Uttarakhand 247667, India",
};

export const links = {
  googleScholar: "https://scholar.google.com/citations?user=GlKaKdIAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/palas-kumar-farsoiya/",
  appointment: "https://calendly.com/farsoiya",
  /** Full ORCID URL, e.g. "https://orcid.org/0000-0000-0000-0000". Shown only when set. */
  orcid: "https://orcid.org/0000-0003-4784-3470",
  phdAdmissions: "https://iitr.ac.in/Academics/Admission%20To%20Doctoral%20Programmes.html",
  mtechAdmissions: "https://iitr.ac.in/admissions/pages/Masters_Programs.html",
};

/** Public profiles, used for the structured data (JSON-LD) in each page. */
export const profileUrls = [links.googleScholar, links.linkedin, links.orcid].filter(Boolean);

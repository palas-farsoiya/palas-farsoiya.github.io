const IndustrialCollaborators = () => {
  const collaborators = [
    { 
      name: "Syngenta", 
      type: "Agricultural Solutions",
      logo: "/images/logos/syngenta-logo.png"
    },
    { 
      name: "AbbVie", 
      type: "Pharmaceutical",
      logo: "/images/logos/abbvie-logo.png"
    },
    { 
      name: "Unilever", 
      type: "Consumer Goods",
      logo: "/images/logos/unilever-logo.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/50 to-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Industrial Collaborators</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with leading industry players to translate research into real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="text-center">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border border-muted p-3">
                  <img
                    src={collaborator.logo}
                    alt={`${collaborator.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{collaborator.name}</h3>
                <p className="text-muted-foreground text-sm">{collaborator.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <span>UKRI Impact Acceleration Account: £80K+ funding secured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialCollaborators;
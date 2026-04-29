const ManchesterBanner = () => {
    return (
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/breakingwave.jpeg"
              alt="Breaking wave"
              className="w-full h-[100px] md:h-[230px] object-cover"
            />
  
            <div className="absolute inset-0 bg-black/30" />
  
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-10 text-white">
                <h2 className="text-2xl md:text-4xl font-semibold">
                  Farsoiya Lab, IIT Roorkee
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ManchesterBanner;

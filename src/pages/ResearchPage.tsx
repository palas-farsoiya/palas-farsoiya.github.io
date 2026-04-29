import Header from "@/components/Header";
import Research from "@/components/Research";
import Footer from "@/components/Footer";

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Research />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;
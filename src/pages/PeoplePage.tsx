import Header from "@/components/Header";
import People from "@/components/People";
import Footer from "@/components/Footer";

const PeoplePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <People />
      </main>
      <Footer />
    </div>
  );
};

export default PeoplePage;
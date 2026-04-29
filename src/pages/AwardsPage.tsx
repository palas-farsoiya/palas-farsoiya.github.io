import Header from "@/components/Header";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

const AwardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default AwardsPage;
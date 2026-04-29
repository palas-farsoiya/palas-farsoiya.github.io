import Header from "@/components/Header";
import Talks from "@/components/Talks";
import Footer from "@/components/Footer";

const TalksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Talks />
      </main>
      <Footer />
    </div>
  );
};

export default TalksPage;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ManchesterBanner from "@/components/ManchesterBanner";
import PublicationsPreview from "@/components/PublicationsPreview";
import PeoplePreview from "@/components/PeoplePreview";
import NewsPreview from "@/components/NewsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ManchesterBanner />
        <Hero />
        <PublicationsPreview />
        <PeoplePreview />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

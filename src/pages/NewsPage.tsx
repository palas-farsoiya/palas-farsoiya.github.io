import Header from "@/components/Header";
import News from "@/components/News";
import Footer from "@/components/Footer";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
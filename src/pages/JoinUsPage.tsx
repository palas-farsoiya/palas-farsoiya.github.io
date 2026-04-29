import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";

const JoinUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default JoinUsPage;
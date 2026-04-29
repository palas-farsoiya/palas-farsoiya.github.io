
import Header from "@/components/Header";
import CodesBlogs from "@/components/CodesBlogs";
import Footer from "@/components/Footer";

const CodesBlogsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CodesBlogs />
      </main>
      <Footer />
    </div>
  );
};

export default CodesBlogsPage;
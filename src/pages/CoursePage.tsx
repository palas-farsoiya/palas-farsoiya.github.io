import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseReader from "@/Courses/ComputerProgrammingNumericalAnalysis/CourseReader";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CourseReader />
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;

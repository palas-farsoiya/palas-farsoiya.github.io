import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Research from "./components/Research";
import Publications from "./components/Publications";
import People from "./components/People";
import News from "./components/News";
import Contact from "./components/Contact";
import JoinUs from "./components/JoinUs";
import CourseReader from "./Courses/ComputerProgrammingNumericalAnalysis/CourseReader";
import { courseBasePath } from "./Courses/ComputerProgrammingNumericalAnalysis/courseData";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path={courseBasePath} element={<CourseReader />} />
        <Route path={`${courseBasePath}/:chapterSlug`} element={<CourseReader />} />
        <Route path="/people" element={<People />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

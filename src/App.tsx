import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import PeoplePage from "./pages/PeoplePage";
import TalksPage from "./pages/TalksPage";
import AwardsPage from "./pages/AwardsPage";
import CodesBlogsPage from "./pages/CodesBlogsPage";
import NewsPage from "./pages/NewsPage";
import OutreachPage from "./pages/OutreachPage";
import ContactPage from "./pages/ContactPage";
import JoinUsPage from "./pages/JoinUsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/talks" element={<TalksPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/codes-blogs" element={<CodesBlogsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
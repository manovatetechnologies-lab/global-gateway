import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StudyAbroad from "./pages/StudyAbroad";
import MBBSAbroad from "./pages/MBBSAbroad";
import LanguageTraining from "./pages/LanguageTraining";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./pages/ScrollToTop";
import Courses from "./components/Courses";
import Bachelors from "./components/Bachelors";
import Masters from "./components/Masters";
import PhD from "./components/PhD";
import Diploma from "./components/Diploma";
import Certifications from "./components/Certifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
          <Route path="/language-training" element={<LanguageTraining />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/bachelors" element={<Bachelors />} />
          <Route path="/courses/masters" element={<Masters />} />
          <Route path="/courses/phd" element={<PhD />} />
          <Route path="/courses/diploma" element={<Diploma />} />
          <Route path="/courses/certifications" element={<Certifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

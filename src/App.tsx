
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentCSE from "./pages/DepartmentCSE";
import FacultyPage from "./pages/FacultyPage";
import ResearchPage from "./pages/ResearchPage";
import StudentsPage from "./pages/StudentsPage";
import PlacementsPage from "./pages/PlacementsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import CommitteesPage from "./pages/CommitteesPage";
import PreviousYearPapersPage from "./pages/PreviousYearPapersPage";
import EmploymentPage from "./pages/EmploymentPage";
import ImportantDownloadsPage from "./pages/ImportantDownloadsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/cse" element={<DepartmentCSE />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/previous-papers" element={<PreviousYearPapersPage />} />
          <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/downloads" element={<ImportantDownloadsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

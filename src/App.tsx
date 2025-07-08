
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDemographics from "./pages/PatientDemographics";
import ClaimsManagement from "./pages/ClaimsManagement";
import AssessmentBuilder from "./pages/AssessmentBuilder";
import CMSFiles from "./pages/CMSFiles";
import ProviderInformation from "./pages/ProviderInformation";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patient-demographics" element={<PatientDemographics />} />
            <Route path="/appointments" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Appointments</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/records" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Medical Records</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/diagnostics" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Diagnostics</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/consultations" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Consultations</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/lab-results" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Lab Results</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/referrals" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Referrals</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/assessments" element={<AssessmentBuilder />} />
            <Route path="/claims" element={<ClaimsManagement />} />
            <Route path="/providers" element={<ProviderInformation />} />
            <Route path="/cms-files" element={<CMSFiles />} />
            <Route path="/reports" element={<ReportsAnalytics />} />
            <Route path="/settings" element={<div className="text-center py-20"><h1 className="text-xl font-bold text-gray-900">Settings</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

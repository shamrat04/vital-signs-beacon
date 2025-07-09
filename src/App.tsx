
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PACELayout } from "./components/PACELayout";
import { MemberDashboard } from "./pages/MemberDashboard";
import { MemberSearch } from "./pages/MemberSearch";
import { MemberClinicalNotes } from "./pages/MemberClinicalNotes";
import { MemberAssessments } from "./pages/MemberAssessments";
import { MemberMedications } from "./pages/MemberMedications";
import { MemberAppointments } from "./pages/MemberAppointments";
import { MemberEncounters } from "./pages/MemberEncounters";
import { MemberAuthorizations } from "./pages/MemberAuthorizations";
import { MemberReferrals } from "./pages/MemberReferrals";
import { MemberLabs } from "./pages/MemberLabs";
import { MemberClaims } from "./pages/MemberClaims";
import { MemberDocuments } from "./pages/MemberDocuments";
import { MemberReports } from "./pages/MemberReports";
import { MemberFinance } from "./pages/MemberFinance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PACELayout>
          <Routes>
            <Route path="/" element={<MemberSearch />} />
            <Route path="/member/:memberId" element={<MemberDashboard />} />
            <Route path="/member/:memberId/clinical-notes" element={<MemberClinicalNotes />} />
            <Route path="/member/:memberId/assessments" element={<MemberAssessments />} />
            <Route path="/member/:memberId/medications" element={<MemberMedications />} />
            <Route path="/member/:memberId/appointments" element={<MemberAppointments />} />
            <Route path="/member/:memberId/encounters" element={<MemberEncounters />} />
            <Route path="/member/:memberId/authorizations" element={<MemberAuthorizations />} />
            <Route path="/member/:memberId/referrals" element={<MemberReferrals />} />
            <Route path="/member/:memberId/labs" element={<MemberLabs />} />
            <Route path="/member/:memberId/claims" element={<MemberClaims />} />
            <Route path="/member/:memberId/documents" element={<MemberDocuments />} />
            <Route path="/member/:memberId/reports" element={<MemberReports />} />
            <Route path="/member/:memberId/finance" element={<MemberFinance />} />
          </Routes>
        </PACELayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

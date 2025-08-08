import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EClient from "./pages/EClient";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmployeeManagement from "./pages/EmployeeManagement";
import ViewProfile from "./pages/ViewProfile";
import AccountSettings from "./pages/AccountSettings";
import Charts from "./pages/Charts";
import Upgrade from "./pages/Upgrade";
import Feedback from "./pages/Feedback";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ResizeObserver error suppression is now handled in index.html

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/e-client" element={<EClient />} />
          <Route
            path="/about"
            element={
              <Placeholder
                title="À propos"
                description="Découvrez l'histoire de ClientIn et notre mission."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact"
                description="Contactez notre équipe pour plus d'informations."
              />
            }
          />
          <Route
            path="/careers"
            element={
              <Placeholder
                title="Carrières"
                description="Rejoignez l'équipe ClientIn et participez à l'innovation."
              />
            }
          />
          <Route
            path="/support"
            element={
              <Placeholder
                title="Support"
                description="Centre d'aide et documentation ClientIn."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

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
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Suppress ResizeObserver loop error/warning - common with Radix UI components
const originalError = console.error;
const originalWarn = console.warn;

// Suppress console.error
console.error = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("ResizeObserver loop completed with undelivered notifications")
  ) {
    return;
  }
  originalError.call(console, ...args);
};

// Suppress console.warn
console.warn = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("ResizeObserver loop completed with undelivered notifications")
  ) {
    return;
  }
  originalWarn.call(console, ...args);
};

// Handle window error events
window.addEventListener("error", (e) => {
  if (e.message.includes("ResizeObserver loop completed with undelivered notifications")) {
    e.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejection events
window.addEventListener("unhandledrejection", (e) => {
  if (e.reason?.message?.includes("ResizeObserver loop completed with undelivered notifications")) {
    e.preventDefault();
    return false;
  }
});

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

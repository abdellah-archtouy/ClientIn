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
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Comprehensive ResizeObserver error suppression - common with Radix UI components
const resizeObserverErrorRegex = /ResizeObserver loop completed with undelivered notifications/i;

// Store original console methods
const originalError = console.error;
const originalWarn = console.warn;
const originalLog = console.log;

// Create a function to check if a message should be suppressed
const shouldSuppressMessage = (message: any): boolean => {
  if (typeof message === "string") {
    return resizeObserverErrorRegex.test(message);
  }
  if (message instanceof Error) {
    return resizeObserverErrorRegex.test(message.message);
  }
  return false;
};

// Override console methods
console.error = (...args: any[]) => {
  if (args.some(shouldSuppressMessage)) return;
  originalError.call(console, ...args);
};

console.warn = (...args: any[]) => {
  if (args.some(shouldSuppressMessage)) return;
  originalWarn.call(console, ...args);
};

console.log = (...args: any[]) => {
  if (args.some(shouldSuppressMessage)) return;
  originalLog.call(console, ...args);
};

// Handle window error events
window.addEventListener("error", (e) => {
  if (resizeObserverErrorRegex.test(e.message)) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});

// Handle unhandled promise rejection events
window.addEventListener("unhandledrejection", (e) => {
  if (e.reason?.message && resizeObserverErrorRegex.test(e.reason.message)) {
    e.preventDefault();
    return false;
  }
});

// Override the global ResizeObserver to catch errors at the source
if (typeof window !== "undefined" && window.ResizeObserver) {
  const OriginalResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class extends OriginalResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      const wrappedCallback: ResizeObserverCallback = (entries, observer) => {
        try {
          callback(entries, observer);
        } catch (error: any) {
          if (!resizeObserverErrorRegex.test(error?.message || "")) {
            throw error;
          }
          // Silently ignore ResizeObserver loop errors
        }
      };
      super(wrappedCallback);
    }
  };
}

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

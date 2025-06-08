import React, { useState, createContext, useContext } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import BookingModal from "@/components/BookingModal";

export const BookingModalContext = createContext({ open: () => {} });

const queryClient = new QueryClient();

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const open = () => setIsBookingOpen(true);
  const close = () => setIsBookingOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BookingModalContext.Provider value={{ open }}>
          <BookingModal isOpen={isBookingOpen} onClose={close} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </BookingModalContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

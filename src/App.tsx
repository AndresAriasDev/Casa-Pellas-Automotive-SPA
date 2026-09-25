import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCallback, useState } from "react";
import { AppLoader } from "./components/AppLoader";
import { ScrollToTop } from "./components/ScrollToTop";
import type { Currency } from "./types/currency";
import { CURRENCY_STORAGE_KEY } from "./config/currency";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { CatalogPage } from "./pages/CatalogPage";
import { ContactPage } from "./pages/ContactPage";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";

function App() {
  const [initialReady, setInitialReady] = useState(false);
  const handleInitialReady = useCallback(() => setInitialReady(true), []);
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      return localStorage.getItem(CURRENCY_STORAGE_KEY) === "USD" ? "USD" : "NIO";
    } catch {
      return "NIO";
    }
  });

  const handleCurrencyChange = (nextCurrency: Currency) => {
    setCurrency(nextCurrency);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, nextCurrency);
    } catch {
      // Keep the in-memory selection when storage is unavailable.
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLoader ready={initialReady} />
      <Header currency={currency} onCurrencyChange={handleCurrencyChange} />

      <Routes>
        <Route path="/vehicle/:id" element={<VehicleDetailPage currency={currency} onInitialReady={handleInitialReady} />} />
        <Route path="/contacto" element={<ContactPage onInitialReady={handleInitialReady} />} />
        <Route path="/" element={<CatalogPage currency={currency} onInitialReady={handleInitialReady} />} />
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
    </BrowserRouter>
  );
}

export default App;

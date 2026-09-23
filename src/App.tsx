import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import type { Currency } from "./types/currency";
import { CURRENCY_STORAGE_KEY } from "./config/currency";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
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
      <Header currency={currency} onCurrencyChange={handleCurrencyChange} />

      <Routes>
        <Route path="/vehicle/:id" element={<VehicleDetailPage currency={currency} />} />
        <Route path="/" element={<CatalogPage currency={currency} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

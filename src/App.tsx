import { BrowserRouter, matchPath, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useCallback, useLayoutEffect, useState } from "react";
import { AppLoader } from "./components/AppLoader";
import { ScrollToTop } from "./components/ScrollToTop";
import type { Currency } from "./types/currency";
import { CURRENCY_STORAGE_KEY } from "./config/currency";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CatalogPage } from "./pages/CatalogPage";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { vehicles } from "./data/vehicles";

const VehicleDetailPage = lazy(() => import("./pages/VehicleDetailPage").then(({ VehicleDetailPage }) => ({ default: VehicleDetailPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(({ ContactPage }) => ({ default: ContactPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(({ ServicesPage }) => ({ default: ServicesPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(({ NotFoundPage }) => ({ default: NotFoundPage })));

const defaultTitle = "Toyota | Casa Pellas";
const notFoundTitle = "Vehículo no encontrado | Casa Pellas";

function RouteTitle() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/") {
      document.title = defaultTitle;
      return;
    }
    if (pathname === "/contacto") {
      document.title = "Contacto | Casa Pellas";
      return;
    }
    if (pathname === "/servicios") {
      document.title = "Servicios | Casa Pellas";
      return;
    }
    if (pathname === "/terminos-y-condiciones") {
      document.title = "Términos y condiciones | Casa Pellas";
      return;
    }
    if (pathname === "/politica-de-privacidad") {
      document.title = "Política de privacidad | Casa Pellas";
      return;
    }

    const detailMatch = matchPath("/vehiculo/:id", pathname);
    const vehicle = detailMatch?.params.id
      ? vehicles.find((item) => item.id === detailMatch.params.id)
      : undefined;
    if (vehicle) {
      const vehicleName = vehicle.model.toLocaleLowerCase().startsWith(vehicle.brand.toLocaleLowerCase())
        ? vehicle.model
        : `${vehicle.brand} ${vehicle.model}`;
      document.title = `${vehicleName} | Casa Pellas`;
      return;
    }

    document.title = notFoundTitle;
  }, [pathname]);

  return null;
}

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
      <RouteTitle />
      <AppLoader ready={initialReady} />
      <Header currency={currency} onCurrencyChange={handleCurrencyChange} />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/vehiculo/:id" element={<VehicleDetailPage currency={currency} onInitialReady={handleInitialReady} />} />
          <Route path="/contacto" element={<ContactPage onInitialReady={handleInitialReady} />} />
          <Route path="/servicios" element={<ServicesPage onInitialReady={handleInitialReady} />} />
          <Route path="/terminos-y-condiciones" element={<ServicesPage onInitialReady={handleInitialReady} message="Estamos trabajando para ofrecerte esta información muy pronto." />} />
          <Route path="/politica-de-privacidad" element={<ServicesPage onInitialReady={handleInitialReady} message="Estamos trabajando para ofrecerte esta información muy pronto." />} />
          <Route path="/" element={<CatalogPage currency={currency} onInitialReady={handleInitialReady} />} />
          <Route path="*" element={<NotFoundPage onInitialReady={handleInitialReady} />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloatingButton />
    </BrowserRouter>
  );
}

export default App;

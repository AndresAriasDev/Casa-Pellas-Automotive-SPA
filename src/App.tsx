import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
        <Route path="/" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
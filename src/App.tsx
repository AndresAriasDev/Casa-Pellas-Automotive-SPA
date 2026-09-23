import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
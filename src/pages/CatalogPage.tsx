import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleHero } from "../components/VehicleHero";
import { VehicleFilters } from "../components/VehicleFilters";
import { getVehicles } from "../services/vehicleService";
import type {
  Vehicle,
  VehicleCategory,
} from "../types/vehicle";
import "./CatalogPage.css";
import type { Currency } from "../types/currency";

type SortOption = "price-asc" | "price-desc" | "year-desc";

export function CatalogPage({ currency, onInitialReady }: { currency: Currency; onInitialReady?: () => void }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<VehicleCategory | "Todos">("Todos");
  const [sort, setSort] = useState<SortOption>("price-asc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) onInitialReady?.();
  }, [isLoading, onInitialReady]);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getVehicles();

        setVehicles(data);
      } catch {
        setError("No pudimos cargar los vehículos.");
      } finally {
        setIsLoading(false);
      }
    };

    void loadVehicles();
  }, [reloadKey]);

  const filteredVehicles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = vehicles.filter((vehicle) => {
      const matchesSearch =
        normalizedSearch === "" ||
        `${vehicle.brand} ${vehicle.model}`
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        category === "Todos" || vehicle.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      if (sort === "price-asc") {
        return a.priceFrom - b.priceFrom;
      }

      if (sort === "price-desc") {
        return b.priceFrom - a.priceFrom;
      }

      return (b.year ?? 0) - (a.year ?? 0);
    });
  }, [vehicles, search, category, sort]);

  const handleViewDetails = (vehicleId: string) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  const handleRetry = () => {
    setReloadKey((current) => current + 1);
  };

  if (isLoading) {
    return (
      <main className="catalog-page">
        <div className="catalog-loading">
          <p>Cargando vehículos...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="catalog-page">
        <div className="catalog-error">
          <p>{error}</p>

          <button type="button" onClick={handleRetry}>
            Intentar nuevamente
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <VehicleHero vehicles={vehicles} currency={currency} />
      <div className="catalog-page">
      <VehicleFilters
        search={search}
        category={category}
        sort={sort}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <section aria-live="polite">
        <p className="catalog-results">
          {filteredVehicles.length}{" "}
          {filteredVehicles.length === 1
            ? "vehículo encontrado"
            : "vehículos encontrados"}
        </p>

        {filteredVehicles.length === 0 ? (
          <div className="catalog-empty">
            <h2>No encontramos vehículos</h2>

            <p>
              Intenta cambiar tu búsqueda o seleccionar otra
              categoría.
            </p>
          </div>
        ) : (
          <div className="catalog-grid">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                currency={currency}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </section>
      </div>
    </main>
  );
}

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleFilters } from "../components/VehicleFilters";
import { getVehicles } from "../services/vehicleService";
import type {
  Vehicle,
  VehicleCategory,
} from "../types/vehicle";

type SortOption = "price-asc" | "price-desc" | "year-desc";

export function CatalogPage() {
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
        return a.price - b.price;
      }

      if (sort === "price-desc") {
        return b.price - a.price;
      }

      return b.year - a.year;
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
      <main>
        <p>Cargando vehículos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>

        <button type="button" onClick={handleRetry}>
          Intentar nuevamente
        </button>
      </main>
    );
  }

  return (
    <main>
      <header>
        <p>Catálogo</p>

        <h1>Encuentra el vehículo ideal para ti</h1>

        <p>
          Explora nuestro catálogo y encuentra una opción que se
          adapte a tu estilo de vida.
        </p>
      </header>

      <VehicleFilters
        search={search}
        category={category}
        sort={sort}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <section aria-live="polite">
        <p>
          {filteredVehicles.length}{" "}
          {filteredVehicles.length === 1
            ? "vehículo encontrado"
            : "vehículos encontrados"}
        </p>

        {filteredVehicles.length === 0 ? (
          <div>
            <h2>No encontramos vehículos</h2>

            <p>
              Intenta cambiar tu búsqueda o seleccionar otra
              categoría.
            </p>
          </div>
        ) : (
          <div>
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
import type { VehicleCategory } from "../types/vehicle";

interface VehicleFiltersProps {
  search: string;
  category: VehicleCategory | "Todos";
  sort: "price-asc" | "price-desc" | "year-desc";
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: VehicleCategory | "Todos") => void;
  onSortChange: (
    value: "price-asc" | "price-desc" | "year-desc",
  ) => void;
}

const categories: Array<VehicleCategory | "Todos"> = [
  "Todos",
  "SUV",
  "Sedán",
  "Pickup",
  "Hatchback",
];

export function VehicleFilters({
  search,
  category,
  sort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: VehicleFiltersProps) {
  return (
    <section aria-label="Filtros de vehículos">
      <div>
        <label htmlFor="vehicle-search">Buscar</label>

        <input
          id="vehicle-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por marca o modelo"
        />
      </div>

      <div>
        <label htmlFor="vehicle-category">Categoría</label>

        <select
          id="vehicle-category"
          value={category}
          onChange={(event) =>
            onCategoryChange(
              event.target.value as VehicleCategory | "Todos",
            )
          }
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="vehicle-sort">Ordenar por</label>

        <select
          id="vehicle-sort"
          value={sort}
          onChange={(event) =>
            onSortChange(
              event.target.value as
                | "price-asc"
                | "price-desc"
                | "year-desc",
            )
          }
        >
          <option value="price-asc">Precio: menor a mayor</option>
          <option value="price-desc">Precio: mayor a menor</option>
          <option value="year-desc">Año: más reciente</option>
        </select>
      </div>
    </section>
  );
}
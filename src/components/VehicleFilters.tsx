import type { VehicleCategory } from "../types/vehicle";
import { useEffect, useRef } from "react";

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
  "Comercial",
];

export function VehicleFilters({
  search,
  category,
  sort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}: VehicleFiltersProps) {
  const helpRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const help = helpRef.current;
      if (help?.open && event.target instanceof Node && !help.contains(event.target)) {
        help.open = false;
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const help = helpRef.current;
      if (event.key === "Escape" && help?.open) {
        const hasFocus = help.contains(document.activeElement);
        help.open = false;
        if (hasFocus) help.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="catalog-filters" aria-label="Filtros de vehículos">
      <div className="catalog-filters__toolbar">
        <h1 className="catalog-filters__title">Encuentra tu vehículo</h1>
        <details className="catalog-filters__help" ref={helpRef}>
          <summary aria-label="Ayuda sobre los filtros">i</summary>
          <div className="catalog-filters__help-panel">
            <strong>Cómo buscar</strong>
            <p>Escribe una marca o modelo y elige una categoría. Los resultados se actualizan automáticamente.</p>
            <p>Quita una píldora con la × o usa «Borrar filtros» para restablecer la búsqueda y el orden.</p>
          </div>
        </details>
      </div>
      <div className="catalog-filters__field">
        <label htmlFor="vehicle-search">Buscar</label>

        <div className="catalog-filters__search">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
          id="vehicle-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por marca o modelo"
        />
        </div>
      </div>

      <div className="catalog-filters__field">
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

      <div className="catalog-filters__field">
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
      {(search !== "" || category !== "Todos" || sort !== "price-asc") && (
        <div className="catalog-filters__active" aria-label="Filtros activos">
          {search !== "" && (
            <button type="button" className="catalog-filters__chip" onClick={() => onSearchChange("")} aria-label={`Quitar búsqueda: ${search}`}>
              <span>Búsqueda: {search}</span><span aria-hidden="true">×</span>
            </button>
          )}
          {category !== "Todos" && (
            <button type="button" className="catalog-filters__chip" onClick={() => onCategoryChange("Todos")} aria-label={`Quitar categoría: ${category}`}>
              <span>{category}</span><span aria-hidden="true">×</span>
            </button>
          )}
          {sort !== "price-asc" && (
            <button type="button" className="catalog-filters__chip" onClick={() => onSortChange("price-asc")} aria-label="Restablecer orden por precio de menor a mayor">
              <span>{sort === "price-desc" ? "Precio: mayor a menor" : "Año: más reciente"}</span><span aria-hidden="true">×</span>
            </button>
          )}
          <button type="button" className="catalog-filters__clear" onClick={() => {
            onSearchChange("");
            onCategoryChange("Todos");
            onSortChange("price-asc");
          }}>Borrar filtros</button>
        </div>
      )}
    </section>
  );
}

import type { VehicleColor } from "../types/vehicle";

export function VehicleColorSelector({ colors, model, selectedId, onSelect }: {
  colors: VehicleColor[];
  model: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const selected = colors.find((color) => color.id === selectedId);
  if (!colors.length) return null;
  return (
    <section className="vehicle-color-selector" aria-labelledby="vehicle-colors-title">
      <div>
        <h2 id="vehicle-colors-title" className="vehicle-detail__sr-only">Colores disponibles de la {model}</h2>
        <p className="vehicle-detail__sr-only" role="status">{selected ? `Color seleccionado: ${selected.name}` : "Selecciona un color para ver el vehículo"}</p>
        <div className="vehicle-colors__options" role="group" aria-label="Colores disponibles">
          {colors.map((color) => <button type="button" key={color.id} aria-label={`Ver ${model} en ${color.name}`} title={color.name} aria-pressed={selectedId === color.id} onClick={() => onSelect(color.id)}>
            <span className="vehicle-colors__swatch" data-color={color.id} aria-hidden="true" />
          </button>)}
        </div>
      </div>
    </section>
  );
}

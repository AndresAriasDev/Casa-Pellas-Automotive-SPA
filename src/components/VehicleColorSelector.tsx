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
        <h2 id="vehicle-colors-title">Colores disponibles<span className="vehicle-detail__sr-only"> de la {model}</span></h2>
        {selected && <p className="vehicle-colors__selection" role="status">{selected.name}</p>}
        <div className="vehicle-colors__options" role="group" aria-label="Colores disponibles">
          {colors.map((color) => <button type="button" key={color.id} aria-pressed={selectedId === color.id} onClick={() => onSelect(color.id)}>
            {color.name}{selectedId === color.id && <span aria-hidden="true"> ✓</span>}
          </button>)}
        </div>
      </div>
    </section>
  );
}

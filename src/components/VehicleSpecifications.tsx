import type { Vehicle } from "../types/vehicle";
import type { VehicleDetailFeature } from "../data/vehicleDetails";

export function VehicleSpecifications({ vehicle, features = [] }: { vehicle: Vehicle; features?: VehicleDetailFeature[] }) {
  const specifications = [
    { label: "Categoría", value: vehicle.category },
    { label: "Año", value: vehicle.year },
    { label: "Motor", value: vehicle.engine },
    { label: "Combustible", value: vehicle.fuelType },
    { label: "Tipo de transmisión", value: vehicle.transmissions.join(" / ") },
    { label: "Plazas", value: vehicle.seats },
    ...features,
  ].filter(({ value }) => value !== undefined && value !== null && String(value).trim() !== "");
  if (!specifications.length) return null;
  return (
    <section className="vehicle-specifications" aria-labelledby="vehicle-specifications-title">
      <h2 id="vehicle-specifications-title">Características</h2>
      <dl>{specifications.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
  );
}

import { useId } from "react";
import type { Vehicle } from "../types/vehicle";
import type { VehicleDetailFeature } from "../data/vehicleDetails";
import engineIcon from "../assets/icons/vehicle/turbo.svg";
import transmissionIcon from "../assets/icons/vehicle/velocidades.svg";
import drivetrainIcon from "../assets/icons/vehicle/4x4.svg";
import powerIcon from "../assets/icons/vehicle/hp.svg";
import tankIcon from "../assets/icons/vehicle/litros.svg";
import seatsIcon from "../assets/icons/vehicle/asientos.svg";

const featureIcons = {
  engine: engineIcon,
  "gear-count": transmissionIcon,
  drivetrain: drivetrainIcon,
  power: powerIcon,
  "fuel-tank-capacity": tankIcon,
  seats: seatsIcon,
};

export function VehicleSpecifications({ vehicle, features = [], variant = "list" }: {
  vehicle: Vehicle;
  features?: VehicleDetailFeature[];
  variant?: "list" | "icons";
}) {
  const titleId = useId();
  if (variant === "icons") {
    const featureValue = (id: string) => features.find((feature) => feature.id === id)?.value.trim();
    const highlights: { id: keyof typeof featureIcons; label: string; value: string | undefined }[] = [
      { id: "engine", label: "Motor", value: vehicle.engine },
      { id: "gear-count", label: "Transmisión", value: featureValue("gear-count") || vehicle.transmissions.join(" / ") },
      { id: "drivetrain", label: "Tracción", value: featureValue("drivetrain") },
      { id: "power", label: "Potencia", value: featureValue("power") },
      { id: "fuel-tank-capacity", label: "Capacidad de tanque", value: featureValue("fuel-tank-capacity") },
      { id: "seats", label: "Pasajeros", value: vehicle.seats == null ? undefined : `${vehicle.seats} ${vehicle.seats === 1 ? "pasajero" : "pasajeros"}` },
    ];
    const available = highlights.filter(({ value }) => value?.trim());
    if (!available.length) return null;
    return (
      <section className="vehicle-specifications vehicle-specifications--icons" aria-labelledby={titleId}>
        <h2 id={titleId}>Características</h2>
        <dl>{available.map(({ id, label, value }) => (
          <div key={id}>
            <dt>
              <img src={featureIcons[id]} alt="" aria-hidden="true" width="64" height="64" loading="lazy" />
              <span className="vehicle-detail__sr-only">{label}</span>
            </dt>
            <dd>{value}</dd>
          </div>
        ))}</dl>
      </section>
    );
  }
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
    <section className="vehicle-specifications" aria-labelledby={titleId}>
      <h2 id={titleId}>Características</h2>
      <dl>{specifications.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </section>
  );
}

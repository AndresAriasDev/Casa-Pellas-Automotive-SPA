import type { Vehicle } from "../types/vehicle";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicleId: string) => void;
}

export function VehicleCard({
  vehicle,
  onViewDetails,
}: VehicleCardProps) {
  return (
    <article>
      <img
        src={vehicle.image}
        alt={`${vehicle.brand} ${vehicle.model}`}
      />

      <div>
        <span>{vehicle.category}</span>

        <h2>
          {vehicle.brand} {vehicle.model}
        </h2>

        <p>{vehicle.description}</p>

        <dl>
          <div>
            <dt>Año</dt>
            <dd>{vehicle.year}</dd>
          </div>

          <div>
            <dt>Motor</dt>
            <dd>{vehicle.engine}</dd>
          </div>

          <div>
            <dt>Combustible</dt>
            <dd>{vehicle.fuelType}</dd>
          </div>

          <div>
            <dt>Transmisión</dt>
            <dd>{vehicle.transmissions.join(" / ")}</dd>
          </div>
        </dl>

        <strong>
          {formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo)}
        </strong>

        <button
          type="button"
          onClick={() => onViewDetails(vehicle.id)}
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

import type { Vehicle } from "../types/vehicle";
import type { Currency } from "../types/currency";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";
import "./VehicleCard.css";

interface VehicleCardProps {
  currency: Currency;
  vehicle: Vehicle;
  onViewDetails: (vehicleId: string) => void;
}

export function VehicleCard({
  currency,
  vehicle,
  onViewDetails,
}: VehicleCardProps) {
  const logo = vehicle.media?.logo;
  const badges = vehicle.fuelType === "Híbrido" ? ["Híbrido"] : [];

  return (
    <article className="vehicle-card">
      <div className="vehicle-card__image">
        <img
        src={vehicle.image}
        alt={`${vehicle.brand} ${vehicle.model}`}
        loading="lazy"
        decoding="async"
      />
          <div className="vehicle-card__logo">
            {logo ? (
              <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
            ) : (
              <span>{vehicle.brand}</span>
            )}
          </div>
      </div>

      <div className="vehicle-card__content">
          {badges.length > 0 && (
            <ul className="vehicle-card__badges" aria-label="Características destacadas">
              {badges.map((badge) => (
                <li className="vehicle-card__badge" key={badge}>{badge}</li>
              ))}
            </ul>
          )}

        <h2 className="vehicle-card__title">
          {vehicle.brand} {vehicle.model}
        </h2>

        <div className="vehicle-card__price">
          <span className="vehicle-card__price-label">
            {vehicle.priceTo !== undefined && vehicle.priceTo !== vehicle.priceFrom ? "Rango de precios" : "Precio desde"}
          </span>
          <strong>
          {formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo, currency)}
          </strong>
        </div>

        <button
          className="vehicle-card__cta"
          type="button"
          aria-label={`Ver detalles de ${vehicle.brand} ${vehicle.model}`}
          onClick={() => onViewDetails(vehicle.id)}
        >
          <span>Ver detalles</span>
          <span className="vehicle-card__cta-icon" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

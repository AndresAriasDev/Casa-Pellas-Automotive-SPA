import { useState } from "react";
import { Link } from "react-router-dom";
import type { Vehicle } from "../types/vehicle";
import type { Currency } from "../types/currency";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";
import "./VehicleHero.css";

interface VehicleHeroProps {
  vehicles: Vehicle[];
  currency: Currency;
}

export function VehicleHero({ vehicles, currency }: VehicleHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = vehicles.filter((vehicle) => vehicle.featured);
  const index = activeIndex % Math.max(featured.length, 1);
  const vehicle = featured[index];

  if (!vehicle) return null;

  const heroImage = vehicle.media?.hero;
  const changeSlide = (direction: number) => {
    setActiveIndex((index + direction + featured.length) % featured.length);
  };

  return (
    <section className="vehicle-hero" aria-label="Vehículos destacados" aria-roledescription="carrusel">
      <div className="vehicle-hero__slide" key={vehicle.id}>
        <div className="vehicle-hero__intro">
          <p className="vehicle-hero__eyebrow">{vehicle.brand} · {vehicle.year}</p>
          <h2><Link className="vehicle-hero__title-link" to={`/vehicle/${vehicle.id}`}>{vehicle.model}</Link></h2>
          <p className="vehicle-hero__description">{vehicle.description}</p>
          <Link className="vehicle-hero__cta" to={`/vehicle/${vehicle.id}`}>
            Explorar vehículo <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <Link className="vehicle-hero__visual" to={`/vehicle/${vehicle.id}`} aria-label={`Ver detalles de ${vehicle.brand} ${vehicle.model}`}>
          <span className="vehicle-hero__backdrop" aria-hidden="true">{vehicle.brand}</span>
          <img
            src={heroImage?.src ?? vehicle.image}
            alt={heroImage?.alt ?? `${vehicle.brand} ${vehicle.model}`}
            fetchPriority="high"
          />
        </Link>

        <div className="vehicle-hero__details">
          <p className="vehicle-hero__price-label">
            {vehicle.priceTo !== undefined && vehicle.priceTo !== vehicle.priceFrom ? "Rango de precios" : "Precio desde"}
          </p>
          <p className="vehicle-hero__price">{formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo, currency)}</p>
          <p className="vehicle-hero__currency">{currency === "NIO" ? "Córdobas nicaragüenses" : "Dólares estadounidenses"}</p>
        </div>
      </div>

      <div className="vehicle-hero__bottom">
        {featured.length > 1 && (
          <div className="vehicle-hero__controls" aria-label="Controles de vehículos destacados">
            <button type="button" className="vehicle-hero__arrow" onClick={() => changeSlide(-1)} aria-label="Vehículo anterior">←</button>
            <div className="vehicle-hero__dots">
              {featured.map((item, itemIndex) => (
                <button
                  type="button"
                  key={item.id}
                  aria-label={`Mostrar ${item.brand} ${item.model}`}
                  aria-pressed={itemIndex === index}
                  onClick={() => setActiveIndex(itemIndex)}
                ><span /></button>
              ))}
            </div>
            <button type="button" className="vehicle-hero__arrow" onClick={() => changeSlide(1)} aria-label="Vehículo siguiente">→</button>
          </div>
        )}
      </div>
      <p className="vehicle-hero__announcement" role="status" aria-atomic="true">
        {vehicle.brand} {vehicle.model}, vehículo {index + 1} de {featured.length}. {formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo, currency)}.
      </p>
    </section>
  );
}

import { Link, useNavigate, useParams } from "react-router-dom";
import { getVehicleById, getVehicles } from "../services/vehicleService";
import { vehicleDetails } from "../data/vehicleDetails";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleRequestForm } from "../components/VehicleRequestForm";
import { useEffect, useState } from "react";
import type { Vehicle } from "../types/vehicle";
import type { Currency } from "../types/currency";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";
import { VehicleGallery } from "../components/VehicleGallery";
import { VehicleColorSelector } from "../components/VehicleColorSelector";
import { VehicleSpecifications } from "../components/VehicleSpecifications";
import { VehicleVideo } from "../components/VehicleVideo";
import "./VehicleDetailPage.css";

export function VehicleDetailPage({ currency }: { currency: Currency }) {
  const { id } = useParams();
  return <VehicleDetailContent key={id} id={id} currency={currency} />;
}

function VehicleDetailContent({ id, currency }: { id: string | undefined; currency: Currency }) {
  const navigate = useNavigate();
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [availableVehicles, setAvailableVehicles] = useState<Vehicle[]>([]);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void getVehicles().then((items) => {
      if (!cancelled) setAvailableVehicles(items);
    }).catch(() => {
      // Related vehicles are optional; keep the detail available on failure.
    });
    return () => { cancelled = true; };
  }, []);

useEffect(() => {
  let cancelled = false;
  const loadVehicle = async () => {
    try {
      const selectedVehicle = id ? await getVehicleById(id) : undefined;
      if (!cancelled) setVehicle(selectedVehicle ?? null);
    } catch {
      if (!cancelled) setError(true);
    } finally {
      if (!cancelled) setIsLoading(false);
    }
  };

  void loadVehicle();
  return () => { cancelled = true; };
}, [id]);

  if (isLoading) {
    return (
      <main className="vehicle-detail vehicle-detail__state" aria-busy="true">
        <p role="status">Cargando información del vehículo…</p>
      </main>
    );
  }

  if (error || !vehicle) {
    return (
      <main className="vehicle-detail vehicle-detail__state">
        <h1>{error ? "No pudimos cargar el vehículo" : "Vehículo no encontrado"}</h1>
        <p role={error ? "alert" : "status"}>{error ? "Vuelve al catálogo e inténtalo nuevamente." : "El vehículo solicitado no está disponible."}</p>
        <Link className="vehicle-detail__button" to="/">Volver al catálogo</Link>
      </main>
    );
  }

  const images = (vehicle.media?.gallery ?? [])
    .filter((image, index, all) => image.src && all.findIndex((item) => item.src === image.src) === index);
  const colors = (vehicle.media?.colors ?? []).filter((color) => color.id !== "disponible" && color.name.trim() && color.image.src);
  const selectedColor = colors.find((color) => color.id === selectedColorId);
  const mainImage = selectedColor?.image ?? vehicle.media?.hero ?? { src: vehicle.image, alt: `${vehicle.brand} ${vehicle.model}` };
  const detail = vehicleDetails.find((item) => item.vehicleId === vehicle.id);
  const safety = detail?.safety?.filter((item) => item.trim()) ?? [];
  const others = availableVehicles.filter((item) => item.id !== vehicle.id);
  const related = [
    ...others.filter((item) => item.category === vehicle.category),
    ...others.filter((item) => item.category !== vehicle.category),
  ].slice(0, 3);

  return (
    <main className="vehicle-detail">
      <section className="vehicle-detail__overview" aria-labelledby="vehicle-detail-title">
        <div className="vehicle-detail__container">
          <Link className="vehicle-detail__back" to="/">← Volver al catálogo</Link>
          <div className="vehicle-detail__hero-grid">
            <div className="vehicle-detail__main-image"><img src={mainImage.src} alt={mainImage.alt} /></div>
            <div className="vehicle-detail__summary">
              {vehicle.media?.logo && <img className="vehicle-detail__logo" src={vehicle.media.logo.src} alt={vehicle.media.logo.alt} />}
              <p className="vehicle-detail__eyebrow">{vehicle.brand}</p>
              <h1 id="vehicle-detail-title">{vehicle.model}</h1>
              <p className="vehicle-detail__meta">{vehicle.category}{vehicle.year !== undefined ? ` · ${vehicle.year}` : ""}</p>
              <div className="vehicle-detail__pricing">
                <span>{vehicle.priceTo !== undefined && vehicle.priceTo !== vehicle.priceFrom ? "Rango de precios" : "Precio desde"}</span>
                <strong>{formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo, currency)}</strong>
                <small>{currency === "NIO" ? "Córdobas nicaragüenses" : "Dólares estadounidenses"}</small>
              </div>
              <VehicleColorSelector colors={colors} model={vehicle.model} selectedId={selectedColorId} onSelect={setSelectedColorId} />
              <a className="vehicle-detail__button" href="#vehicle-request">Solicitar información <span aria-hidden="true">↗</span></a>
              <p className="vehicle-detail__cta-note">Cotización o prueba de manejo</p>
            </div>
          </div>
        </div>
      </section>
      <div className="vehicle-detail__container vehicle-detail__body">
        <VehicleSpecifications vehicle={vehicle} features={detail?.features ?? []} />
        {vehicle.media?.video?.src && <VehicleVideo video={vehicle.media.video} />}
        {safety.length > 0 && <section className="vehicle-detail__safety" aria-labelledby="vehicle-safety-title">
          <p className="vehicle-detail__eyebrow">Seguridad</p>
          <h2 id="vehicle-safety-title">Protección en cada recorrido</h2>
          <ul>{safety.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        </section>}
        <section className="vehicle-detail__request" id="vehicle-request" aria-labelledby="vehicle-request-title">
          <div><p className="vehicle-detail__eyebrow">Da el siguiente paso</p><h2 id="vehicle-request-title">Conoce más sobre tu {vehicle.model}</h2><p>Elige una cotización o una prueba de manejo y completa tus datos.</p></div>
          <div className="vehicle-detail__form"><VehicleRequestForm key={vehicle.id} vehicleId={vehicle.id} /></div>
        </section>
        {images.length > 0 && <section className="vehicle-detail__gallery-section" aria-labelledby="vehicle-gallery-title">
          <h2 id="vehicle-gallery-title">Galería de fotografías</h2>
          <VehicleGallery images={images} model={`${vehicle.brand} ${vehicle.model}`} />
        </section>}
        {related.length > 0 && <section className="vehicle-detail__related" aria-labelledby="vehicle-related-title">
          <h2 id="vehicle-related-title">Vehículos relacionados</h2>
          <div className="vehicle-detail__related-grid">
            {related.map((item) => <VehicleCard key={item.id} vehicle={item} currency={currency} onViewDetails={(vehicleId) => {
              navigate(`/vehicle/${vehicleId}`);
              window.scrollTo({ top: 0, behavior: "instant" });
            }} />)}
          </div>
        </section>}
      </div>
    </main>
  );
}

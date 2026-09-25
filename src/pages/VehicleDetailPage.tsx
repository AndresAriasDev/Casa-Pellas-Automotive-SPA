import { Link, useNavigate, useParams } from "react-router-dom";
import { getVehicleById, getVehicles } from "../services/vehicleService";
import { vehicleDetails } from "../data/vehicleDetails";
import { RelatedVehiclesCarousel } from "../components/RelatedVehiclesCarousel";
import { VehicleRequestForm } from "../components/VehicleRequestForm";
import { useEffect, useState } from "react";
import type { Vehicle } from "../types/vehicle";
import type { Currency } from "../types/currency";
import { formatVehiclePrice } from "../utils/formatVehiclePrice";
import { VehicleGallery } from "../components/VehicleGallery";
import { VehicleColorSelector } from "../components/VehicleColorSelector";
import { VehicleSpecifications } from "../components/VehicleSpecifications";
import { VehicleVideo } from "../components/VehicleVideo";
import { VehicleDetailSkeleton } from "../components/VehicleDetailSkeleton";
import { NotFoundPage } from "./NotFoundPage";
import "./VehicleDetailPage.css";
import "../components/PageBanner.css";
import toyotaRequestBackground from "../assets/brand/img-fondo-toyota.webp";
import toyotaRequestSlogan from "../assets/brand/no-es-un-carro-es-toyota.webp";

const safetyDescriptions: Record<string, string> = {
  ABS: "Ayuda a evitar que las ruedas se bloqueen al frenar, favoreciendo el control de la dirección.",
  VSC: "Ayuda a mantener la estabilidad cuando se detecta una pérdida de trayectoria.",
  EBD: "Distribuye electrónicamente la fuerza de frenado entre las ruedas según las condiciones de la frenada.",
  BA: "Asiste la fuerza de frenado cuando detecta una frenada de emergencia.",
  TRC: "Ayuda a limitar el patinamiento de las ruedas al acelerar sobre superficies con poca adherencia.",
  TRAC: "Ayuda a limitar el patinamiento de las ruedas al acelerar sobre superficies con poca adherencia.",
  "A-TRC": "Ayuda a controlar el patinamiento de las ruedas para favorecer la tracción en superficies de baja adherencia.",
  HAC: "Ayuda a limitar el retroceso del vehículo al iniciar la marcha en una pendiente.",
  "Auto LSD": "Ayuda a recuperar tracción al frenar una rueda motriz que patina. No equivale a un bloqueo mecánico del diferencial.",
  Airbags: "Complementan la protección del cinturón de seguridad y ayudan a amortiguar el impacto en determinadas colisiones.",
  "Chasis reforzado": "Su estructura reforzada contribuye a la resistencia del conjunto del vehículo.",
  "Carrocería reforzada": "Los refuerzos de la carrocería contribuyen a la protección de los ocupantes en caso de impacto.",
  "Cinturones de seguridad": "Ayudan a sujetar a los ocupantes y limitar su desplazamiento durante una frenada brusca o una colisión.",
  "Cinturones de seguridad de 3 puntos": "Sujetando el torso y la pelvis, ayudan a distribuir las fuerzas de retención durante una colisión.",
  "Advertencia de cinturón de seguridad": "Recuerda a los ocupantes la necesidad de abrocharse el cinturón de seguridad.",
  "Cámara de reversa": "Permite observar la zona detrás del vehículo al retroceder. Complementa la revisión directa del entorno.",
  "Sensores de proximidad": "Ayudan a advertir la presencia de obstáculos cercanos durante las maniobras.",
  "Frenos de disco delanteros": "Utilizan discos y pastillas en las ruedas delanteras para reducir la velocidad del vehículo al frenar.",
};
const safetyAliases: Record<string, string> = {
  "Airbags SRS": "Airbags",
  "Bolsas de aire SRS": "Airbags",
  "Airbags SRS dobles delanteros": "Airbags",
  "Bolsas de aire frontales y de rodilla": "Airbags",
  "Chasís reforzado": "Chasis reforzado",
};

function initialVehicleImage(vehicle: Vehicle) {
  const colors = (vehicle.media?.colors ?? []).filter((color) => color.image.src);
  return (colors.find((color) => color.id !== "disponible" && color.name.trim()) ?? colors[0])?.image
    ?? { src: vehicle.image, alt: `${vehicle.brand} ${vehicle.model}` };
}

function prepareHeroImage(src: string, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal.aborted) return resolve();
    const image = new Image();
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timeout);
      image.onload = null;
      image.onerror = null;
      signal.removeEventListener("abort", finish);
      resolve();
    };
    // Safety limit for a stalled image, not a minimum display duration.
    const timeout = window.setTimeout(finish, 12000);
    signal.addEventListener("abort", finish, { once: true });
    image.onload = () => { void image.decode().catch(() => {}).then(finish); };
    image.onerror = finish;
    image.src = src;
  });
}

export function VehicleDetailPage({ currency, onInitialReady }: { currency: Currency; onInitialReady?: () => void }) {
  const { id } = useParams();
  return <VehicleDetailContent key={id} id={id} currency={currency} onInitialReady={onInitialReady} />;
}

function VehicleDetailContent({ id, currency, onInitialReady }: { id: string | undefined; currency: Currency; onInitialReady?: () => void }) {
  const navigate = useNavigate();
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [availableVehicles, setAvailableVehicles] = useState<Vehicle[]>([]);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openSafetyIndex, setOpenSafetyIndex] = useState<number | null>(0);
  useEffect(() => {
    if (!isLoading) onInitialReady?.();
  }, [isLoading, onInitialReady]);

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
  const controller = new AbortController();
  const loadVehicle = async () => {
    try {
      const selectedVehicle = id ? await getVehicleById(id) : undefined;
      if (cancelled) return;
      if (selectedVehicle) await prepareHeroImage(initialVehicleImage(selectedVehicle).src, controller.signal);
      if (!cancelled) setVehicle(selectedVehicle ?? null);
    } catch {
      if (!cancelled) setError(true);
    } finally {
      if (!cancelled) setIsLoading(false);
    }
  };

  void loadVehicle();
  return () => { cancelled = true; controller.abort(); };
}, [id]);

  if (isLoading) {
    return <VehicleDetailSkeleton />;
  }

  if (error || !vehicle) return <NotFoundPage onInitialReady={onInitialReady} />;

  const images = (vehicle.media?.gallery ?? [])
    .filter((image, index, all) => image.src && all.findIndex((item) => item.src === image.src) === index);
  const colorImages = (vehicle.media?.colors ?? []).filter((color) => color.image.src);
  const colors = colorImages.filter((color) => color.id !== "disponible" && color.name.trim());
  const selectedColor = colors.find((color) => color.id === selectedColorId) ?? colors[0];
  const mainImage = selectedColor?.image ?? initialVehicleImage(vehicle);
  const detail = vehicleDetails.find((item) => item.vehicleId === vehicle.id);
  const safety = detail?.safety?.filter((item) => item.trim()) ?? [];
  const safetyImage = vehicle.media?.hero ?? { src: vehicle.image, alt: `${vehicle.brand} ${vehicle.model}` };
  const others = availableVehicles.filter((item) => item.id !== vehicle.id);
  const related = [
    ...others.filter((item) => item.category === vehicle.category),
    ...others.filter((item) => item.category !== vehicle.category),
  ];

  return (
    <main className="vehicle-detail">
      <section className="vehicle-detail__overview" aria-labelledby="vehicle-detail-title">
        <div className="page-banner vehicle-detail__banner">
          <div className="page-banner__container vehicle-detail__container">
            <p className="vehicle-detail__eyebrow">{vehicle.brand}</p>
            <h1 id="vehicle-detail-title">{vehicle.model}</h1>
          </div>
        </div>
        <div className="vehicle-detail__container">
          <Link className="vehicle-detail__back" to="/">← Volver al catálogo</Link>
          <div className="vehicle-detail__hero-grid">
            <div className="vehicle-detail__visual">
              <div className="vehicle-detail__main-image"><img src={mainImage.src} alt={mainImage.alt} fetchPriority="high" /></div>
              <VehicleColorSelector colors={colors} model={vehicle.model} selectedId={selectedColor?.id ?? null} onSelect={setSelectedColorId} />
            </div>
            <div className="vehicle-detail__summary">
              <div className="vehicle-detail__pricing">
                <span>{vehicle.priceTo !== undefined && vehicle.priceTo !== vehicle.priceFrom ? "Rango de precios" : "Precio desde"}</span>
                <strong>{formatVehiclePrice(vehicle.priceFrom, vehicle.priceTo, currency)}</strong>
                <small>{currency === "NIO" ? "Córdobas nicaragüenses" : "Dólares estadounidenses"}</small>
              </div>
              <VehicleSpecifications vehicle={vehicle} features={detail?.features ?? []} variant="icons" />
              <div className="vehicle-detail__actions" role="group" aria-label="Solicitudes del vehículo">
                <a className="vehicle-detail__button" href="#vehicle-request">Cotizar</a>
                <a className="vehicle-detail__button vehicle-detail__button--secondary" href="#vehicle-request">Prueba de manejo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="vehicle-detail__container vehicle-detail__body">
        {vehicle.media?.video?.src && <VehicleVideo video={vehicle.media.video} />}
        {safety.length > 0 && <section className="vehicle-detail__safety" aria-labelledby="vehicle-safety-title">
          <h2 id="vehicle-safety-title">Seguridad</h2>
          <div className="vehicle-detail__safety-image">
            <img src={safetyImage.src} alt={safetyImage.alt} loading="lazy" />
          </div>
          <div className="vehicle-detail__safety-accordion">
            {safety.map((item, index) => {
              const expanded = openSafetyIndex === index;
              const name = item.trim();
              const description = safetyDescriptions[safetyAliases[name] ?? name]
                ?? "Consulta con un asesor el funcionamiento y las condiciones de uso de este elemento de seguridad.";
              return <div className="vehicle-detail__safety-item" key={`${item}-${index}`}>
                <h3><button type="button" id={`safety-trigger-${index}`} aria-expanded={expanded}
                  aria-controls={`safety-panel-${index}`} onClick={() => setOpenSafetyIndex(expanded ? null : index)}>
                  {item}<span className="vehicle-detail__safety-chevron" aria-hidden="true" />
                </button></h3>
                <div id={`safety-panel-${index}`} className="vehicle-detail__safety-panel" data-open={expanded}
                  role="region" aria-labelledby={`safety-trigger-${index}`} aria-hidden={!expanded}>
                  <div><p>{description}</p></div>
                </div>
              </div>;
            })}
          </div>
          <div className="vehicle-detail__actions vehicle-detail__safety-actions" role="group" aria-label="Solicitudes del vehículo">
            <a className="vehicle-detail__button" href="#vehicle-request">Cotizar</a>
            <a className="vehicle-detail__button vehicle-detail__button--secondary" href="#vehicle-request">Prueba de manejo</a>
          </div>
        </section>}
        {images.length > 0 && <section className="vehicle-detail__gallery-section" aria-label="Galería de fotografías">
          <VehicleGallery images={images} model={`${vehicle.brand} ${vehicle.model}`} />
        </section>}
      </div>
        <section className="vehicle-detail__request" id="vehicle-request" aria-labelledby="vehicle-request-title">
          <div className="vehicle-detail__container vehicle-detail__request-card">
            <div className="vehicle-detail__request-visual" style={{ backgroundImage: `url(${toyotaRequestBackground})` }}>
              <div className="vehicle-detail__request-slogan">
                <img src={toyotaRequestSlogan} alt="No es un carro, es un Toyota" loading="lazy" />
              </div>
            </div>
            <div className="vehicle-detail__form">
              <VehicleRequestForm key={vehicle.id} vehicleId={vehicle.id} model={vehicle.model} />
            </div>
          </div>
        </section>
      <div className="vehicle-detail__container vehicle-detail__body">
        {related.length > 0 && <RelatedVehiclesCarousel vehicles={related} currency={currency} onViewDetails={(vehicleId) => {
              navigate(`/vehicle/${vehicleId}`);
            }} />}
      </div>
    </main>
  );
}

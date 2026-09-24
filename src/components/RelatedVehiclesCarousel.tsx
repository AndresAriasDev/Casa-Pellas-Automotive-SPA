import { useEffect, useId, useRef, useState } from "react";
import type { Vehicle } from "../types/vehicle";
import type { Currency } from "../types/currency";
import { VehicleCard } from "./VehicleCard";

interface RelatedVehiclesCarouselProps {
  vehicles: Vehicle[];
  currency: Currency;
  onViewDetails: (vehicleId: string) => void;
}

export function RelatedVehiclesCarousel({ vehicles, currency, onViewDetails }: RelatedVehiclesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackId = useId();
  const [edges, setEdges] = useState({ start: true, end: true });
  const listKey = vehicles.map((vehicle) => vehicle.id).join("|");

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: "instant" });
    const update = () => setEdges({
      start: track.scrollLeft <= 2,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    for (const item of track.children) observer.observe(item);
    track.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [listKey]);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    const positions = items.map((item) => item.offsetLeft - (items[0]?.offsetLeft ?? 0));
    const target = direction > 0
      ? positions.find((position) => position > track.scrollLeft + 2) ?? track.scrollWidth
      : positions.reverse().find((position) => position < track.scrollLeft - 2) ?? 0;
    track.scrollTo({ left: target, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return <section className="vehicle-detail__related" aria-labelledby={`${trackId}-title`}>
    <div className="vehicle-detail__related-heading">
      <h2 id={`${trackId}-title`}>Vehículos relacionados</h2>
      <div className="vehicle-detail__related-controls">
        <button type="button" aria-label="Ver vehículos anteriores" aria-controls={trackId} disabled={edges.start} onClick={() => move(-1)}>←</button>
        <button type="button" aria-label="Ver más vehículos relacionados" aria-controls={trackId} disabled={edges.end} onClick={() => move(1)}>→</button>
      </div>
    </div>
    <div ref={trackRef} id={trackId} className="vehicle-detail__related-track" tabIndex={0} role="region" aria-label="Carrusel de vehículos relacionados"
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
      {vehicles.map((vehicle) => <div className="vehicle-detail__related-slide" key={vehicle.id}>
        <VehicleCard vehicle={vehicle} currency={currency} onViewDetails={onViewDetails} />
      </div>)}
    </div>
  </section>;
}

import { useState } from "react";
import type { VehicleImage } from "../types/vehicle";

export function VehicleGallery({ images, model }: { images: VehicleImage[]; model: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const index = activeIndex < images.length ? activeIndex : 0;
  const active = images[index];
  if (!active) return null;
  return (
    <div className="vehicle-gallery" role="group" aria-label={`Galería de ${model}`}>
      <div className="vehicle-gallery__stage">
        <img src={active.src} alt={active.alt} decoding="async" />
        {images.length > 1 && <span className="vehicle-gallery__count" aria-hidden="true">{index + 1} / {images.length}</span>}
      </div>
      {images.length > 1 && <div className="vehicle-gallery__thumbnails" aria-label="Seleccionar imagen">
        {images.map((image, imageIndex) => <button type="button" key={image.src} aria-label={`Ver imagen ${imageIndex + 1}: ${image.alt}`} aria-pressed={imageIndex === index} onClick={() => setActiveIndex(imageIndex)}>
          <img src={image.src} alt="" loading="lazy" />
        </button>)}
      </div>}
      <span className="vehicle-detail__sr-only" role="status">Imagen {index + 1} de {images.length}: {active.alt}</span>
    </div>
  );
}

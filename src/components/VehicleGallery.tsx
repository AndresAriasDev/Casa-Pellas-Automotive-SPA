import { useEffect, useRef, useState } from "react";
import type { VehicleImage } from "../types/vehicle";

export function VehicleGallery({ images, model }: { images: VehicleImage[]; model: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const open = activeIndex !== null && images.length > 0;
  const index = activeIndex === null ? 0 : activeIndex % Math.max(1, images.length);
  const active = images[index];
  const remaining = Math.max(0, images.length - 8);
  const navigate = (direction: number) => setActiveIndex((current) =>
    ((current ?? 0) + direction + images.length) % images.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const body = document.body;
    const oldOverflow = body.style.overflow;
    const oldPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbar}px`;
    body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      body.style.overflow = oldOverflow;
      body.style.paddingRight = oldPadding;
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);
  if (!active) return null;
  return (
    <div className="vehicle-gallery" role="group" aria-label={`Galería de ${model}`}>
      <div className="vehicle-gallery__mosaic">
        {images.slice(0, 8).map((image, imageIndex) => (
          <button className="vehicle-gallery__tile" type="button" key={image.src}
            aria-label={`Ver foto ${imageIndex + 1}: ${image.alt}${imageIndex === 7 && remaining ? `. ${remaining} fotos adicionales disponibles` : ""}`}
            aria-haspopup="dialog" onClick={(event) => {
              openerRef.current = event.currentTarget;
              setActiveIndex(imageIndex);
            }}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            {imageIndex === 7 && remaining > 0 && <span className="vehicle-gallery__more" aria-hidden="true">
              <strong>+{remaining}</strong><span>{remaining === 1 ? "foto" : "fotos"}</span>
            </span>}
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} className="vehicle-gallery__lightbox" aria-label={`Fotografías de ${model}`} aria-modal="true"
        onCancel={(event) => { event.preventDefault(); setActiveIndex(null); }}
        onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        {open && <>
          <button autoFocus className="vehicle-gallery__close" type="button" aria-label="Cerrar galería" onClick={() => setActiveIndex(null)}>×</button>
          <div className="vehicle-gallery__photo" onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}><img key={active.src} src={active.src} alt={active.alt} /></div>
          <div className="vehicle-gallery__navigation">
            {images.length > 1 && <button type="button" aria-label="Fotografía anterior" onClick={() => navigate(-1)}>←</button>}
            <span role="status" aria-live="polite" aria-atomic="true">{index + 1} / {images.length}</span>
            {images.length > 1 && <button type="button" aria-label="Fotografía siguiente" onClick={() => navigate(1)}>→</button>}
          </div>
        </>}
      </dialog>
    </div>
  );
}

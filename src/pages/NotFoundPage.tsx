import { useEffect } from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/brand/img-404-casa-pellas.png";
import "./NotFoundPage.css";

export function NotFoundPage({ onInitialReady }: { onInitialReady?: () => void }) {
  useEffect(() => {
    onInitialReady?.();
  }, [onInitialReady]);

  return (
    <main className="not-found-page">
      <div className="not-found-page__content">
        <img src={notFoundImage} alt="" aria-hidden="true" />
        <h1>Vehículo no encontrado</h1>
        <p>Parece que la ruta que buscas no está disponible.</p>
        <Link className="not-found-page__action" to="/">Volver al inicio</Link>
      </div>
    </main>
  );
}

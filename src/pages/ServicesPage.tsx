import { useEffect } from "react";
import { Link } from "react-router-dom";
import hydraulicJack from "../assets/icons/gato-hidraulico.png";
import "./NotFoundPage.css";

export function ServicesPage({ onInitialReady }: { onInitialReady?: () => void }) {
  useEffect(() => {
    onInitialReady?.();
  }, [onInitialReady]);

  return (
    <main className="not-found-page services-page">
      <div className="not-found-page__content">
        <img src={hydraulicJack} alt="" aria-hidden="true" />
        <h1>Página en mantenimiento</h1>
        <p>Estamos trabajando para ofrecerte nuestros servicios muy pronto.</p>
        <Link className="not-found-page__action" to="/">Volver al inicio</Link>
      </div>
    </main>
  );
}

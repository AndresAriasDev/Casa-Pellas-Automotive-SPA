import { matchPath, useLocation } from "react-router-dom";
import whatsappIcon from "../assets/icons/icono-de-whatsapp-casa-pellas.png";
import { vehicles } from "../data/vehicles";
import "./WhatsAppFloatingButton.css";

const genericMessage = "Hola, estoy interesado en recibir información sobre un vehículo. Quiero hablar con un asesor.";

export function WhatsAppFloatingButton() {
  const { pathname } = useLocation();
  const detailMatch = matchPath("/vehicle/:id", pathname);
  const vehicle = detailMatch?.params.id
    ? vehicles.find((item) => item.id === detailMatch.params.id)
    : undefined;
  const message = vehicle
    ? `Hola, estoy interesado en el ${vehicle.brand} ${vehicle.model}. Quiero hablar con un asesor.`
    : genericMessage;
  const href = `https://wa.me/50522554444?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-floating-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor por WhatsApp"
    >
      <span>¿Deseas hablar con un asesor?</span>
      <img src={whatsappIcon} alt="" aria-hidden="true" decoding="async" />
    </a>
  );
}

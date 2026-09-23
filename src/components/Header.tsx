import { Link } from "react-router-dom";
import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-azul.webp";

export function Header() {
  return (
    <header>
      <div>
        <Link to="/" aria-label="Casa Pellas - Inicio">
          <img
            src={logoCasaPellas}
            alt="Casa Pellas"
          />
        </Link>

        <nav aria-label="Navegación principal">
          <ul>
            <li>
              <Link to="/">Vehículos</Link>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
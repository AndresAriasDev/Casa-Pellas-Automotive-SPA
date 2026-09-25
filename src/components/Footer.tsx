import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-blanco.webp";
import { Link } from "react-router-dom";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Casa Pellas - Inicio">
            <img
              src={logoCasaPellas}
              alt="Casa Pellas"
              width={2560}
              height={261}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <a className="site-footer__address" href="https://maps.app.goo.gl/7VuYJ9n7PgVdpfxN8" target="_blank" rel="noopener noreferrer">
            <address>Managua, Nicaragua<br />De la rotonda el Güegüense 350 mts. al sur</address>
          </a>
        </div>

        <div className="site-footer__categories">
          <h2>Vehículos</h2>
          <ul>
            {["SUV", "Sedán", "Pickup", "Comercial"].map((category) => (
              <li key={category}>
                <Link to={`/?category=${encodeURIComponent(category)}#catalog-filters`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contact">
          <h2>Contacto</h2>

          <p>
            <a href="tel:+50522554444"><img src={phoneIcon} alt="" aria-hidden="true" />2255-4444</a>
          </p>

          <p>
            <a href="mailto:servicioalcliente@casapellas.com"><img src={mailIcon} alt="" aria-hidden="true" />servicioalcliente@casapellas.com</a>
          </p>
        </div>
      </div>

      <div className="site-footer__secondary">
        <div className="site-footer__privacy">
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
        </div>
        <ul className="site-footer__social" aria-label="Redes sociales">
          {[
            { name: "Instagram", href: "https://www.instagram.com/toyotacasapellas/?hl=es", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" },
            { name: "Facebook", href: "https://www.facebook.com/ToyotaCasaPellas/?locale=es_LA", path: "M14 21v-8h3l.5-4H14V7c0-1 .3-2 2-2h2V1.5A25 25 0 0 0 15 1c-3 0-5 2-5 5v3H7v4h3v8z" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/casa-pellas-s-a-/home/", path: "M3 8h4v13H3zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 6h4v2c1-1.5 2-2.3 4-2.3 3 0 4 2 4 5V21h-4v-7c0-2-.5-3-2-3s-2 1-2 3v7h-4z" },
            { name: "YouTube", href: "https://www.youtube.com/@Autolote-CasaPellas", path: "M21.58 7.19a3 3 0 0 0-2.11-2.11C17.61 4.5 12 4.5 12 4.5s-5.61 0-7.47.58A3 3 0 0 0 2.42 7.2 31.02 31.02 0 0 0 2 12a31.02 31.02 0 0 0 .42 4.81 3 3 0 0 0 2.11 2.11C6.39 19.5 12 19.5 12 19.5s5.61 0 7.47-.58a3 3 0 0 0 2.11-2.11A31.02 31.02 0 0 0 22 12a31.02 31.02 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5Z" },
          ].map(({ name, href, path }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fillRule="evenodd" d={path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__legal">
        <p>
          © 2026 Casa Pellas.
          <span className="site-footer__separator" aria-hidden="true"> | </span>
          Desarrollado y diseñado por AndresAriasDev
        </p>
        </div>
      </div>
    </footer>
  );
}

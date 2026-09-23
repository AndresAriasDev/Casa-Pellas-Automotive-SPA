import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-blanco.webp";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img
            src={logoCasaPellas}
            alt="Casa Pellas"
          />
          <address>
            Managua, Nicaragua
            <br />
            De la rotonda el Güegüense 350 mts. al sur
          </address>
        </div>

        <div className="site-footer__categories">
          <h2>Vehículos</h2>
          <ul>
            {["SUV", "Sedán", "Pickup", "Hatchback"].map((category) => (
              <li key={category}>
                <span role="link" aria-disabled="true">{category}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contact">
          <h2>Contacto</h2>

          <p>
            <a href="tel:+50522554444">
              2255-4444
            </a>
          </p>

          <p>
            <a href="mailto:servicioalcliente@casapellas.com">
              servicioalcliente@casapellas.com
            </a>
          </p>
        </div>
      </div>

      <div className="site-footer__secondary">
        <span className="site-footer__privacy" role="link" aria-disabled="true">
          Políticas de privacidad
        </span>
        <ul className="site-footer__social" aria-label="Redes sociales">
          {[
            { name: "Facebook", path: "M14 21v-8h3l.5-4H14V7c0-1 .3-2 2-2h2V1.5A25 25 0 0 0 15 1c-3 0-5 2-5 5v3H7v4h3v8z" },
            { name: "YouTube", path: "M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5z" },
            { name: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" },
            { name: "LinkedIn", path: "M3 8h4v13H3zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 6h4v2c1-1.5 2-2.3 4-2.3 3 0 4 2 4 5V21h-4v-7c0-2-.5-3-2-3s-2 1-2 3v7h-4z" },
          ].map(({ name, path }) => (
            <li key={name}>
              <span role="link" aria-disabled="true" aria-label={name} title={name}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fillRule="evenodd" d={path} />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__legal">
        <p>
          © 2026 Casa Pellas. Todos los derechos reservados.
          <span className="site-footer__separator" aria-hidden="true"> | </span>
          Desarrollado y diseñado por AndresAriasDev
        </p>
        </div>
      </div>
    </footer>
  );
}

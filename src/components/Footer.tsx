import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-blanco.webp";

export function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img
            src={logoCasaPellas}
            alt="Casa Pellas"
          />
        </div>

        <div>
          <h2>Casa Pellas</h2>

          <address>
            Managua, Nicaragua
            <br />
            De la rotonda el Güegüense 350 mts. al sur
          </address>
        </div>

        <div>
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

      <div>
        <p>
          © 2026 Casa Pellas. Todos los derechos reservados.
        </p>

        <p>
          Desarrollado y diseñado por AndresAriasDev
        </p>
      </div>
    </footer>
  );
}
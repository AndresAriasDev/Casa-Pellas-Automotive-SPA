import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-azul.webp";
import "./Header.css";
import type { Currency } from "../types/currency";

interface HeaderProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export function Header({ currency, onCurrencyChange }: HeaderProps) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let accumulatedScroll = 0;
    let frame = 0;

    const updateVisibility = () => {
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;

      if (delta !== 0) {
        accumulatedScroll =
          Math.sign(delta) === Math.sign(accumulatedScroll)
            ? accumulatedScroll + delta
            : delta;
      }

      if (currentY <= 80) {
        setIsHidden(false);
        accumulatedScroll = 0;
      } else if (Math.abs(accumulatedScroll) >= 12) {
        setIsHidden(accumulatedScroll > 0);
        accumulatedScroll = 0;
      }

      previousY = currentY;
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`site-header${isHidden ? " site-header--hidden" : ""}`}
      onFocusCapture={() => setIsHidden(false)}
    >
      <div className="site-header__surface">
        <Link className="site-header__brand" to="/" aria-label="Casa Pellas - Inicio">
          <img
            src={logoCasaPellas}
            alt="Casa Pellas"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Navegación principal">
          <ul className="site-header__links">
            <li>
              <NavLink to="/" end>Vehículos</NavLink>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <label className="site-header__currency">
          <span>Moneda</span>
          <select
            value={currency}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "NIO" || value === "USD") onCurrencyChange(value);
            }}
          >
            <option value="NIO">C$ NIO</option>
            <option value="USD">$ USD</option>
          </select>
        </label>
      </div>
    </header>
  );
}

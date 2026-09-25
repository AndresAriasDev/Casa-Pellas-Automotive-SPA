import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoCasaPellas from "../assets/brand/logo-casa-pellas-version-azul.webp";
import "./Header.css";
import type { Currency } from "../types/currency";

interface HeaderProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export function Header({ currency, onCurrencyChange }: HeaderProps) {
  const { pathname } = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMenuOpen(false); setIsHidden(false); }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const onBreakpoint = () => {
      if (!media.matches) {
        if (document.activeElement === menuButtonRef.current) headerRef.current?.querySelector<HTMLAnchorElement>(".site-header__brand")?.focus();
        setMenuOpen(false);
      } else if (headerRef.current?.querySelector("nav")?.contains(document.activeElement)) {
        menuButtonRef.current?.focus();
      }
    };
    media.addEventListener("change", onBreakpoint);
    return () => media.removeEventListener("change", onBreakpoint);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [menuOpen]);

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
      ref={headerRef}
      className={`site-header${pathname === "/" ? " site-header--overlay" : ""}${isHidden && !menuOpen ? " site-header--hidden" : ""}${menuOpen ? " site-header--menu-open" : ""}`}
      onFocusCapture={() => setIsHidden(false)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <div className="site-header__surface">
        <Link className="site-header__brand" to="/" aria-label="Casa Pellas - Inicio" onClick={() => setMenuOpen(false)}>
          <img
            src={logoCasaPellas}
            alt="Casa Pellas"
          />
        </Link>

        <div className="site-header__controls">
          <button ref={menuButtonRef} className="site-header__menu-button" type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="site-header-navigation"
            onClick={() => { setMenuOpen((open) => !open); setIsHidden(false); }}>
            <span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
        <nav id="site-header-navigation" className="site-header__nav" aria-label="Navegación principal" onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            if (menuOpen) menuButtonRef.current?.focus();
            setMenuOpen(false);
          }
        }}>
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
          <label className="site-header__currency">
            <span className="site-header__sr-only">Moneda</span>
            <select value={currency} onChange={(event) => {
              const value = event.target.value;
              if (value === "NIO" || value === "USD") onCurrencyChange(value);
            }}>
              <option value="NIO">NIO</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </nav>
      </div>
    </header>
  );
}

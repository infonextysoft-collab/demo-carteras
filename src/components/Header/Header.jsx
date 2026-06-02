import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header class="header">
      <div class="header__container">
        <A href="/" class="header__logo" onClick={closeMenu}>
          <div class="header__logo-icon">L</div>

          <div>
            <span class="header__brand">Luna Bags</span>
            <small class="header__tagline">Carteras y accesorios</small>
          </div>
        </A>

        <button
          type="button"
          class="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen())}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class={`header__nav ${menuOpen() ? "header__nav--open" : ""}`}>
          <A
            href="/"
            end
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Inicio
          </A>

          <A
            href="/productos"
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Productos
          </A>

          <A
            href="/promociones"
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Promociones
          </A>

          <A
            href="/novedades"
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Novedades
          </A>

          <A
            href="/guia-compra"
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Guía de compra
          </A>

          <a
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            class="header__whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
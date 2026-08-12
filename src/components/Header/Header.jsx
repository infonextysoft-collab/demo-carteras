import { A } from "@solidjs/router";
import { createSignal, onCleanup, onMount } from "solid-js";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  const closeMenu = () => setMenuOpen(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <header class={`header ${scrolled() ? "header--scrolled" : ""}`}>
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
            Catálogo
          </A>

          <A
            href="/contacto"
            class="header__link"
            activeClass="header__link--active"
            onClick={closeMenu}
          >
            Contacto
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
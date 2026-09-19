import { A } from "@solidjs/router";
import { createSignal, onCleanup, onMount } from "solid-js";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  const closeMenu = () => setMenuOpen(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <header class={`header ${scrolled() ? "header--scrolled" : ""}`}>
      <div class="header__container">
        <A href="/" class="header__logo" onClick={closeMenu}>
          Luna Bags
        </A>

        <button
          type="button"
          class={`header__menu-btn ${menuOpen() ? "header__menu-btn--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen())}
          aria-label={menuOpen() ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen()}
          aria-controls="main-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-nav"
          class={`header__nav ${menuOpen() ? "header__nav--open" : ""}`}
        >
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
            class="btn btn-whatsapp btn-sm header__whatsapp"
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

import { A } from "@solidjs/router";

import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand-box">
          <div class="footer__logo">L</div>

          <div>
            <h3>Luna Bags</h3>
            <p>
              Carteras, bolsos, mochilas y accesorios seleccionados para combinar
              con tu estilo diario. Consulta modelos, colores y disponibilidad
              directamente por WhatsApp.
            </p>
          </div>
        </div>

        <div class="footer__links">
          <A href="/">Inicio</A>
          <A href="/productos">Catálogo</A>
          <A href="/contacto">Contacto</A>
        </div>

        <div class="footer__info">
          <p>Atención por WhatsApp</p>
          <strong>+51 999 999 999</strong>
          <span>Lunes a sábado · 9:00 a.m. - 8:00 p.m.</span>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Luna Bags. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
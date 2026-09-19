import { A } from "@solidjs/router";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";

import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__brand">
          <span class="footer__logo">Luna Bags</span>
          <p>
            Carteras, bolsos, mochilas y accesorios. Consulta modelos, colores y
            disponibilidad directamente por WhatsApp.
          </p>
        </div>

        <nav class="footer__col" aria-label="Enlaces del sitio">
          <h4>Enlaces</h4>
          <A href="/">Inicio</A>
          <A href="/productos">Productos</A>
          <A href="/contacto">Contacto</A>
        </nav>

        <div class="footer__col">
          <h4>Atención</h4>
          <a
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: +51 999 999 999
          </a>
          <span>Lunes a sábado</span>
          <span>9:00 a.m. – 8:00 p.m.</span>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Luna Bags. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

import { A } from "@solidjs/router";
import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import FAQItem from "../../components/FAQItem/FAQItem";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

import { faqs } from "../../data/faqs";
import { createGuideWhatsAppLink } from "../../utils/whatsapp";

import "./BuyingGuide.css";

function BuyingGuide() {
  return (
    <section class="buying-guide section-padding">
      <div class="page-container">
        <SectionTitle
          label="Guía de compra"
          title="Compra fácil por WhatsApp"
          description="Esta web funciona como catálogo. Elige tu modelo favorito y coordina disponibilidad, color, precio y entrega directamente por WhatsApp."
          center
        />

        <div class="buying-guide__steps">
          <FeatureCard
            number="01"
            title="Elige tu modelo"
            description="Revisa el catálogo y entra al detalle del producto que más te guste."
          />

          <FeatureCard
            number="02"
            title="Revisa detalles"
            description="Consulta material, colores, medidas, estilo y qué objetos puedes llevar."
          />

          <FeatureCard
            number="03"
            title="Pregunta por WhatsApp"
            description="Presiona el botón de WhatsApp para consultar disponibilidad y colores."
          />

          <FeatureCard
            number="04"
            title="Coordina entrega"
            description="Confirma precio, forma de pago, recojo o entrega con atención personalizada."
          />
        </div>

        <div class="buying-guide__info">
          <div class="buying-guide__image">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
              alt="Guía para comprar carteras y bolsos"
            />
          </div>

          <div class="buying-guide__content">
            <span>Compra sin carrito</span>
            <h2>Atención directa antes de confirmar</h2>
            <p>
              A diferencia de una tienda online tradicional, aquí puedes resolver
              dudas antes de comprar: disponibilidad, tamaño, color, material,
              promociones y opciones de entrega.
            </p>

            <ul>
              <li>Confirma stock antes de separar.</li>
              <li>Pregunta por medidas reales del producto.</li>
              <li>Consulta colores disponibles.</li>
              <li>Coordina entrega o recojo directamente.</li>
            </ul>

            <a
              href={createGuideWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp"
            >
              Pedir asesoría por WhatsApp
            </a>
          </div>
        </div>

        <div class="buying-guide__faq">
          <SectionTitle
            label="Preguntas frecuentes"
            title="Dudas comunes antes de consultar"
            description="Resuelve preguntas sobre precios, disponibilidad, colores y entrega."
          />

          <div class="buying-guide__faq-list">
            <For each={faqs}>
              {(faq) => <FAQItem faq={faq} />}
            </For>
          </div>
        </div>

        <div class="buying-guide__cta">
          <div>
            <h2>¿Tienes dudas sobre un modelo?</h2>
            <p>
              Escríbenos por WhatsApp y te ayudamos a elegir una cartera, bolso
              o accesorio según tu estilo y necesidad.
            </p>
          </div>

          <WhatsAppButton>Hablar por WhatsApp</WhatsAppButton>
        </div>

        <div class="buying-guide__actions">
          <A href="/productos" class="btn btn-secondary">
            Ver catálogo
          </A>

          <A href="/promociones" class="btn btn-primary">
            Ver promociones
          </A>
        </div>
      </div>
    </section>
  );
}

export default BuyingGuide;
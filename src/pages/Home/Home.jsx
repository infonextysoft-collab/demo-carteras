import { A } from "@solidjs/router";
import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { reveal } from "../../utils/reveal";

import { testimonials } from "../../data/testimonials";

import "./Home.css";

// Evita que el bundler elimine el import por "no usado" (lo requiere use:reveal)
reveal;

function Home() {
  const steps = [
    {
      number: "01",
      title: "Nos escribes por WhatsApp",
      description:
        "Cuéntanos qué buscas: cartera, bolso, mochila o accesorio, y para qué ocasión lo necesitas.",
    },
    {
      number: "02",
      title: "Te mostramos opciones",
      description:
        "Te enviamos fotos, colores, medidas y precio de los modelos disponibles según tu estilo.",
    },
    {
      number: "03",
      title: "Coordinamos tu entrega",
      description: "Separas tu modelo y coordinamos el pago y el envío o recojo.",
    },
  ];

  return (
    <div class="home">
      <section class="home-hero">
        <div class="home-hero__container">
          <div class="home-hero__content fade-up">
            <span class="home-hero__label">Nueva colección</span>

            <h1>Carteras y bolsos para cada estilo</h1>

            <p>
              Encuentra carteras elegantes, bolsos casuales, mochilas,
              crossbody bags y accesorios para combinar con tus outfits diarios.
              Consulta colores, medidas y disponibilidad por WhatsApp.
            </p>

            <div class="home-hero__actions">
              <A href="/productos" class="btn btn-secondary">
                Ver catálogo
              </A>

              <WhatsAppButton>Consultar por WhatsApp</WhatsAppButton>
            </div>
          </div>

          <div class="home-hero__image fade-up">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
              alt="Carteras y bolsos elegantes"
            />

            <div class="home-hero__card">
              <strong>Desde S/ 35.00</strong>
              <span>Modelos seleccionados</span>
            </div>
          </div>
        </div>
      </section>

      <section class="home-products section-padding" use:reveal>
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Destacados"
              title="Productos recomendados"
              description="Una selección de carteras, bolsos y accesorios populares por su estilo, funcionalidad y diseño."
            />

            <A href="/productos" class="home-section-link">
              Ver catálogo completo
            </A>
          </div>

          <ProductGrid onlyFeatured hideFilters />
        </div>
      </section>

      <section class="home-steps section-padding" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Cómo funciona"
            title="Comprar es simple y directo"
            description="Sin registros ni carritos complicados: todo se coordina por WhatsApp, de principio a fin."
            center
          />

          <div class="home-steps__grid">
            <For each={steps}>
              {(step) => (
                <div class="home-steps__item">
                  <span class="home-steps__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="home-features section-padding" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Beneficios"
            title="Compra con atención personalizada"
            description="Te ayudamos a elegir el modelo ideal según tu estilo, uso, color favorito y tamaño necesario."
            center
          />

          <div class="home-grid home-grid--three">
            <FeatureCard
              number="01"
              title="Consulta por WhatsApp"
              description="Pregunta por disponibilidad, colores, medidas y promociones antes de separar tu modelo."
            />

            <FeatureCard
              number="02"
              title="Modelos seleccionados"
              description="Carteras, bolsos y accesorios pensados para diferentes estilos y ocasiones."
            />

            <FeatureCard
              number="03"
              title="Detalles claros"
              description="Cada producto muestra material, medidas, colores y qué objetos puedes llevar."
            />
          </div>
        </div>
      </section>

      <section class="home-testimonials section-padding" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Opiniones"
            title="Clientes que confiaron en Luna Bags"
            description="La atención rápida y los detalles del producto ayudan a comprar con más confianza."
            center
          />

          <div class="home-grid home-grid--three">
            <For each={testimonials}>
              {(testimonial) => (
                <TestimonialCard testimonial={testimonial} />
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="home-cta" use:reveal>
        <div class="page-container">
          <div class="home-cta__box">
            <div>
              <span>Asesoría por WhatsApp</span>
              <h2>¿Buscas una cartera especial?</h2>
              <p>
                Escríbenos y te ayudamos a elegir el modelo ideal según tu
                ocasión, color favorito y espacio que necesitas.
              </p>
            </div>

            <WhatsAppButton>Hablar con una asesora</WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

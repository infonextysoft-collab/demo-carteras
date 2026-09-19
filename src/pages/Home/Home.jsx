import { A } from "@solidjs/router";
import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { reveal } from "../../utils/reveal";

import { testimonials } from "../../data/testimonials";

import "./Home.css";

// Evita que el bundler elimine el import por "no usado" (lo requiere use:reveal)
reveal;

function Home() {
  const highlights = [
    {
      title: "Atención por WhatsApp",
      description: "Resolvemos tus dudas sobre colores, medidas y disponibilidad.",
    },
    {
      title: "Envíos a todo el Perú",
      description: "Entregas en Lima Metropolitana y envíos por courier.",
    },
    {
      title: "Compra sin complicaciones",
      description: "Sin registros ni carritos: separas tu modelo con un mensaje.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Nos escribes por WhatsApp",
      description:
        "Cuéntanos qué buscas: cartera, bolso, mochila o accesorio, y para qué ocasión lo necesitas.",
    },
    {
      number: "2",
      title: "Te mostramos opciones",
      description:
        "Te enviamos fotos, colores, medidas y precio de los modelos disponibles.",
    },
    {
      number: "3",
      title: "Coordinamos tu entrega",
      description: "Separas tu modelo y coordinamos el pago y el envío o recojo.",
    },
  ];

  return (
    <div class="home">
      <section class="home-hero">
        <div class="page-container home-hero__container">
          <div class="home-hero__content fade-up">
            <span class="home-hero__eyebrow">Nueva colección</span>

            <h1>Carteras y bolsos para cada estilo</h1>

            <p>
              Carteras elegantes, bolsos casuales, mochilas y accesorios para
              combinar con tus outfits diarios. Consulta colores, medidas y
              disponibilidad por WhatsApp.
            </p>

            <div class="home-hero__actions">
              <A href="/productos" class="btn btn-primary">
                Ver productos
              </A>

              <WhatsAppButton>Consultar por WhatsApp</WhatsAppButton>
            </div>
          </div>

          <div class="home-hero__image fade-up">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80"
              alt="Carteras y bolsos de la colección"
            />
          </div>
        </div>
      </section>

      <section class="home-highlights">
        <div class="page-container home-highlights__grid">
          <For each={highlights}>
            {(item) => (
              <div class="home-highlights__item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )}
          </For>
        </div>
      </section>

      <section class="section-padding" use:reveal>
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Productos"
              title="Nuestros productos"
              description="Algunos de los modelos disponibles. Revisa la lista completa para ver todos."
            />

            <A href="/productos" class="home-section-link">
              Ver todos los productos →
            </A>
          </div>

          <ProductGrid limit={6} hideFilters />
        </div>
      </section>

      <section class="section-padding section--soft" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Cómo comprar"
            title="Comprar es simple y directo"
            description="Todo se coordina por WhatsApp, de principio a fin."
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

      <section class="section-padding" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Opiniones"
            title="Clientes que confiaron en Luna Bags"
            center
          />

          <div class="home-testimonials__grid">
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
              <h2>¿Tienes alguna consulta?</h2>
              <p>
                Escríbenos y te ayudamos a elegir el modelo ideal según tu
                ocasión, color favorito y espacio que necesitas.
              </p>
            </div>

            <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

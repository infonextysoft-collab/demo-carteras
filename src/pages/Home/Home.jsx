import { A } from "@solidjs/router";
import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import PromoCard from "../../components/PromoCard/PromoCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

import { categories } from "../../data/categories";
import { promotions } from "../../data/promotions";
import { testimonials } from "../../data/testimonials";
import { blogPosts } from "../../data/blog";

import "./Home.css";

function Home() {
  const featuredCategories = categories.filter(
    (category) => category.id !== "todos"
  );

  const categoryImages = {
    carteras:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    bolsos:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    mochilas:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    crossbody:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    billeteras:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    accesorios:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
  };

  const mainPromotions = promotions.filter((promo) => promo.destacado).slice(0, 2);
  const latestPosts = blogPosts.slice(0, 3);

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

      <section class="home-categories section-padding">
        <div class="page-container">
          <SectionTitle
            label="Categorías"
            title="Compra por tipo de accesorio"
            description="Explora carteras, bolsos, mochilas, crossbody, billeteras y accesorios para cada ocasión."
            center
          />

          <div class="home-categories__grid">
            <For each={featuredCategories}>
              {(category) => (
                <A
                  href={`/productos/categoria/${category.id}`}
                  class="home-categories__card"
                >
                  <img
                    src={categoryImages[category.id]}
                    alt={category.nombre}
                  />

                  <div class="home-categories__overlay">
                    <h3>{category.nombre}</h3>
                    <span>Ver modelos</span>
                  </div>
                </A>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="home-products section-padding">
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

      <section class="home-promotions section-padding">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Promociones"
              title="Ofertas y combos de temporada"
              description="Aprovecha precios especiales en modelos seleccionados y combos disponibles por tiempo limitado."
            />

            <A href="/promociones" class="home-section-link">
              Ver promociones
            </A>
          </div>

          <div class="home-grid home-grid--two">
            <For each={mainPromotions}>
              {(promotion) => <PromoCard promotion={promotion} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-features section-padding">
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

      <section class="home-testimonials section-padding">
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

      <section class="home-blog section-padding">
        <div class="page-container">
          <div class="home-section-header">
            <SectionTitle
              label="Novedades"
              title="Consejos de estilo"
              description="Ideas simples para elegir, combinar y cuidar tus carteras y bolsos."
            />

            <A href="/novedades" class="home-section-link">
              Ver novedades
            </A>
          </div>

          <div class="home-grid home-grid--three">
            <For each={latestPosts}>
              {(post) => <BlogCard post={post} />}
            </For>
          </div>
        </div>
      </section>

      <section class="home-cta">
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
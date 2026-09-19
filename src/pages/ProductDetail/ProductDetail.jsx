import { A, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

import { products } from "../../data/products";
import { createProductWhatsAppLink } from "../../utils/whatsapp";
import ProductCard from "../../components/ProductCard/ProductCard";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";

import "./ProductDetail.css";

function ProductDetail() {
  const params = useParams();

  const product = () =>
    products.find((item) => String(item.id) === String(params.id));

  // Los siguientes productos de la lista (sin agrupar por categoría)
  const otherProducts = () => {
    const index = products.findIndex((item) => item.id === product()?.id);

    if (index === -1) return [];

    return [1, 2, 3].map(
      (offset) => products[(index + offset) % products.length]
    );
  };

  return (
    <section class="product-detail-page section-padding">
      <div class="page-container">
        <Show
          when={product()}
          fallback={
            <div class="product-detail-page__not-found">
              <h1>Producto no encontrado</h1>
              <p>El modelo que buscas no está disponible.</p>

              <A href="/productos" class="btn btn-primary">
                Ver productos
              </A>
            </div>
          }
        >
          {(selectedProduct) => (
            <>
              <A href="/productos" class="product-detail__back">
                ← Volver a productos
              </A>

              <div class="product-detail">
                <div class="product-detail__image fade-up">
                  <img
                    src={selectedProduct().imagen}
                    alt={selectedProduct().nombre}
                  />

                  {selectedProduct().promocion && (
                    <span class="product-detail__badge">Oferta</span>
                  )}
                </div>

                <div class="product-detail__content fade-up">
                  <span
                    class={`status-badge ${
                      selectedProduct().estado === "Disponible"
                        ? "status-badge--available"
                        : "status-badge--order"
                    }`}
                  >
                    {selectedProduct().estado}
                  </span>

                  <h1>{selectedProduct().nombre}</h1>

                  <div class="product-detail__price">
                    <strong>S/ {selectedProduct().precio.toFixed(2)}</strong>

                    {selectedProduct().precioAnterior && (
                      <span>
                        S/ {selectedProduct().precioAnterior.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p class="product-detail__description">
                    {selectedProduct().descripcion}
                  </p>

                  <div class="product-detail__actions">
                    <WhatsAppButton
                      href={createProductWhatsAppLink(selectedProduct())}
                    >
                      Consultar por WhatsApp
                    </WhatsAppButton>
                  </div>

                  <dl class="product-detail__specs">
                    <div>
                      <dt>Marca</dt>
                      <dd>{selectedProduct().marca}</dd>
                    </div>

                    <div>
                      <dt>Material</dt>
                      <dd>{selectedProduct().material}</dd>
                    </div>

                    <div>
                      <dt>Medidas</dt>
                      <dd>{selectedProduct().medidas}</dd>
                    </div>

                    <div>
                      <dt>Estilo</dt>
                      <dd>{selectedProduct().estilo}</dd>
                    </div>

                    <div>
                      <dt>Uso</dt>
                      <dd>{selectedProduct().uso}</dd>
                    </div>
                  </dl>

                  <div class="product-detail__block">
                    <h2>Colores disponibles</h2>

                    <div class="product-detail__chips">
                      <For each={selectedProduct().colores}>
                        {(color) => <span>{color}</span>}
                      </For>
                    </div>
                  </div>

                  <div class="product-detail__block">
                    <h2>¿Qué puedes llevar?</h2>

                    <ul class="product-detail__list">
                      <For each={selectedProduct().capacidad}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="product-detail-related">
                <h2>Otros productos</h2>

                <div class="product-detail-related__grid">
                  <For each={otherProducts()}>
                    {(item) => <ProductCard product={item} />}
                  </For>
                </div>
              </div>
            </>
          )}
        </Show>
      </div>
    </section>
  );
}

export default ProductDetail;

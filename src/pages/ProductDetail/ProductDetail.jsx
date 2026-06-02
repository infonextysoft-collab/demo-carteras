import { A, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

import { products } from "../../data/products";
import { createProductWhatsAppLink } from "../../utils/whatsapp";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductDetail.css";

function ProductDetail() {
  const params = useParams();

  const product = () =>
    products.find((item) => String(item.id) === String(params.id));

  const relatedProducts = () => {
    if (!product()) return [];

    return products
      .filter(
        (item) =>
          item.categoria === product().categoria && item.id !== product().id
      )
      .slice(0, 3);
  };

  return (
    <section class="product-detail-page section-padding">
      <div class="page-container">
        <Show
          when={product()}
          fallback={
            <div class="product-detail-page__not-found">
              <h1>Producto no encontrado</h1>
              <p>El modelo que buscas no está disponible en el catálogo.</p>

              <A href="/productos" class="btn btn-primary">
                Volver al catálogo
              </A>
            </div>
          }
        >
          {(selectedProduct) => (
            <>
              <div class="product-detail">
                <div class="product-detail__image fade-up">
                  <img
                    src={selectedProduct().imagen}
                    alt={selectedProduct().nombre}
                  />

                  {selectedProduct().promocion && (
                    <span class="product-detail__badge">Promoción</span>
                  )}
                </div>

                <div class="product-detail__content fade-up">
                  <span class="product-detail__category">
                    {selectedProduct().categoriaNombre}
                  </span>

                  <h1>{selectedProduct().nombre}</h1>

                  <p class="product-detail__description">
                    {selectedProduct().descripcion}
                  </p>

                  <div class="product-detail__price">
                    <strong>
                      Desde S/ {selectedProduct().precio.toFixed(2)}
                    </strong>

                    {selectedProduct().precioAnterior && (
                      <span>
                        S/ {selectedProduct().precioAnterior.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div class="product-detail__info">
                    <div>
                      <span>Marca</span>
                      <strong>{selectedProduct().marca}</strong>
                    </div>

                    <div>
                      <span>Estado</span>
                      <strong>{selectedProduct().estado}</strong>
                    </div>

                    <div>
                      <span>Uso</span>
                      <strong>{selectedProduct().uso}</strong>
                    </div>
                  </div>

                  <div class="product-detail__details">
                    <div>
                      <h3>Colores disponibles</h3>

                      <div class="product-detail__chips">
                        <For each={selectedProduct().colores}>
                          {(color) => <span>{color}</span>}
                        </For>
                      </div>
                    </div>

                    <div>
                      <h3>Detalles del producto</h3>

                      <div class="product-detail__specs">
                        <div>
                          <span>Material</span>
                          <strong>{selectedProduct().material}</strong>
                        </div>

                        <div>
                          <span>Medidas</span>
                          <strong>{selectedProduct().medidas}</strong>
                        </div>

                        <div>
                          <span>Estilo</span>
                          <strong>{selectedProduct().estilo}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-detail__features">
                    <h3>¿Qué puedes llevar?</h3>

                    <ul>
                      <For each={selectedProduct().capacidad}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>

                  <div class="product-detail__actions">
                    <a
                      href={createProductWhatsAppLink(selectedProduct())}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-whatsapp"
                    >
                      Consultar por WhatsApp
                    </a>

                    <A href="/guia-compra" class="btn btn-secondary">
                      Ver guía de compra
                    </A>
                  </div>
                </div>
              </div>

              <Show when={relatedProducts().length > 0}>
                <div class="product-detail-related">
                  <h2>Productos relacionados</h2>

                  <div class="product-detail-related__grid">
                    <For each={relatedProducts()}>
                      {(item) => <ProductCard product={item} />}
                    </For>
                  </div>
                </div>
              </Show>
            </>
          )}
        </Show>
      </div>
    </section>
  );
}

export default ProductDetail;
import { A } from "@solidjs/router";
import { createProductWhatsAppLink } from "../../utils/whatsapp";
import "./ProductCard.css";

function ProductCard(props) {
  const product = props.product;

  return (
    <article class="product-card">
      <A href={`/productos/${product.id}`} class="product-card__image-box">
        <img
          src={product.imagen}
          alt={product.nombre}
          class="product-card__image"
          loading="lazy"
        />

        {product.promocion && <span class="product-card__badge">Promo</span>}
      </A>

      <div class="product-card__content">
        <div class="product-card__top">
          <span class="product-card__category">{product.categoriaNombre}</span>

          <span
            class={`product-card__status ${
              product.estado === "Disponible"
                ? "product-card__status--available"
                : "product-card__status--order"
            }`}
          >
            {product.estado}
          </span>
        </div>

        <A href={`/productos/${product.id}`} class="product-card__title">
          {product.nombre}
        </A>

        <p class="product-card__description">{product.descripcion}</p>

        <div class="product-card__meta">
          <span>{product.estilo}</span>
          <span>{product.material}</span>
        </div>

        <div class="product-card__colors">
          <strong>Colores:</strong>
          <span>{product.colores.slice(0, 3).join(", ")}</span>
        </div>

        <div class="product-card__price-box">
          <strong>Desde S/ {product.precio.toFixed(2)}</strong>

          {product.precioAnterior && (
            <span>S/ {product.precioAnterior.toFixed(2)}</span>
          )}
        </div>

        <div class="product-card__actions">
          <A href={`/productos/${product.id}`} class="product-card__detail">
            Ver detalle
          </A>

          <a
            href={createProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            class="product-card__whatsapp"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
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

        {product.promocion && <span class="product-card__badge">Oferta</span>}
      </A>

      <div class="product-card__content">
        <span
          class={`status-badge ${
            product.estado === "Disponible"
              ? "status-badge--available"
              : "status-badge--order"
          }`}
        >
          {product.estado}
        </span>

        <A href={`/productos/${product.id}`} class="product-card__title">
          {product.nombre}
        </A>

        <p class="product-card__description">{product.descripcion}</p>

        <div class="product-card__price">
          <strong>S/ {product.precio.toFixed(2)}</strong>

          {product.precioAnterior && (
            <span>S/ {product.precioAnterior.toFixed(2)}</span>
          )}
        </div>

        <div class="product-card__actions">
          <A href={`/productos/${product.id}`} class="btn btn-secondary btn-sm">
            Ver detalle
          </A>

          <a
            href={createProductWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp btn-sm"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

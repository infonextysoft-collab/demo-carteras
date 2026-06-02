import { createPromotionWhatsAppLink } from "../../utils/whatsapp";
import "./PromoCard.css";

function PromoCard(props) {
  const promotion = props.promotion;

  return (
    <article class={`promo-card ${promotion.destacado ? "promo-card--featured" : ""}`}>
      <div class="promo-card__image">
        <img src={promotion.imagen} alt={promotion.titulo} loading="lazy" />
      </div>

      <div class="promo-card__content">
        <span>{promotion.descuento}</span>
        <h3>{promotion.titulo}</h3>
        <p>{promotion.descripcion}</p>

        <a
          href={createPromotionWhatsAppLink(promotion)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar promoción
        </a>
      </div>
    </article>
  );
}

export default PromoCard;
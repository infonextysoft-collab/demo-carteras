import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PromoCard from "../../components/PromoCard/PromoCard";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import { promotions } from "../../data/promotions";

import "./Promotions.css";

function Promotions() {
  return (
    <section class="promotions-page section-padding">
      <div class="page-container">
        <div class="promotions-page__banner">
          <div>
            <span>Promociones</span>
            <h1>Ofertas y combos disponibles</h1>
            <p>
              Aprovecha descuentos por temporada, combos especiales y productos
              seleccionados con precio especial.
            </p>
          </div>
        </div>

        <SectionTitle
          label="Promociones activas"
          title="Combos y descuentos"
          description="Consulta por WhatsApp si la promoción sigue disponible y qué modelos aplican."
        />

        <div class="promotions-page__grid">
          <For each={promotions}>
            {(promotion) => <PromoCard promotion={promotion} />}
          </For>
        </div>

        <div class="promotions-page__products">
          <SectionTitle
            label="Productos en promo"
            title="Modelos con precio especial"
            description="Estos productos tienen descuento o precio promocional según disponibilidad."
          />

          <ProductGrid onlyPromotions hideFilters />
        </div>
      </div>
    </section>
  );
}

export default Promotions;
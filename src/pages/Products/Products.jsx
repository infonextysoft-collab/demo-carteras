import ProductGrid from "../../components/ProductGrid/ProductGrid";

import "./Products.css";

function Products() {
  return (
    <div class="products-page">
      <header class="page-header">
        <div class="page-container fade-up">
          <h1>Productos</h1>
          <p>
            Encuentra el modelo ideal y consulta colores, medidas y
            disponibilidad directamente por WhatsApp.
          </p>
        </div>
      </header>

      <section class="section-padding products-page__list">
        <div class="page-container">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}

export default Products;

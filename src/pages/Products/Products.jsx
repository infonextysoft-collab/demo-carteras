import { useParams } from "@solidjs/router";

import ProductGrid from "../../components/ProductGrid/ProductGrid";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { categories } from "../../data/categories";

import "./Products.css";

function Products() {
  const params = useParams();

  const categoryName = () => {
    const found = categories.find((category) => category.id === params.cat);

    if (!params.cat || !found) {
      return "Catálogo de carteras y bolsos";
    }

    return found.nombre;
  };

  return (
    <section class="products-page section-padding">
      <div class="page-container">
        <div class="products-page__hero">
          <SectionTitle
            label="Productos"
            title={categoryName()}
            description="Busca, filtra y encuentra el modelo ideal. Consulta colores, medidas, material y disponibilidad directamente por WhatsApp."
          />
        </div>

        <ProductGrid initialCategory={params.cat || "todos"} />
      </div>
    </section>
  );
}

export default Products;
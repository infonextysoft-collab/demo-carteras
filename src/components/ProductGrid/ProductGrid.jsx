import { createMemo, createSignal, For, Show } from "solid-js";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import ProductFilters from "../ProductFilters/ProductFilters";
import "./ProductGrid.css";

function ProductGrid(props) {
  const [search, setSearch] = createSignal("");
  const [order, setOrder] = createSignal("default");

  const filteredProducts = createMemo(() => {
    let result = [...products];
    const text = search().toLowerCase().trim();

    if (text !== "") {
      result = result.filter((product) =>
        [
          product.nombre,
          product.marca,
          product.material,
          product.estilo,
          ...product.colores,
        ]
          .join(" ")
          .toLowerCase()
          .includes(text)
      );
    }

    if (order() === "price-asc") {
      result.sort((a, b) => a.precio - b.precio);
    }

    if (order() === "price-desc") {
      result.sort((a, b) => b.precio - a.precio);
    }

    if (order() === "name-asc") {
      result.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    if (props.limit) {
      result = result.slice(0, props.limit);
    }

    return result;
  });

  return (
    <section class="product-grid-section">
      <Show when={!props.hideFilters}>
        <ProductFilters
          search={search}
          setSearch={setSearch}
          order={order}
          setOrder={setOrder}
        />

        <p class="product-grid-section__result">
          {filteredProducts().length}{" "}
          {filteredProducts().length === 1 ? "producto" : "productos"}
        </p>
      </Show>

      <Show
        when={filteredProducts().length > 0}
        fallback={
          <div class="product-grid-section__empty">
            <h3>No encontramos productos</h3>
            <p>Prueba con otro nombre, color o material.</p>

            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setSearch("")}
            >
              Limpiar búsqueda
            </button>
          </div>
        }
      >
        <div class="product-grid">
          <For each={filteredProducts()}>
            {(product) => <ProductCard product={product} />}
          </For>
        </div>
      </Show>
    </section>
  );
}

export default ProductGrid;

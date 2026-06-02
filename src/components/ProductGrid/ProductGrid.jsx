import { createMemo, createSignal, For, Show } from "solid-js";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import ProductFilters from "../ProductFilters/ProductFilters";
import "./ProductGrid.css";

function ProductGrid(props) {
  const [search, setSearch] = createSignal("");
  const [category, setCategory] = createSignal(props.initialCategory || "todos");
  const [order, setOrder] = createSignal("default");
  const [availability, setAvailability] = createSignal("todos");
  const [color, setColor] = createSignal("Todos");
  const [material, setMaterial] = createSignal("Todos");
  const [style, setStyle] = createSignal("Todos");

  const filteredProducts = createMemo(() => {
    let result = [...products];

    if (props.onlyFeatured) {
      result = result.filter((product) => product.destacado);
    }

    if (props.onlyPromotions) {
      result = result.filter((product) => product.promocion);
    }

    if (category() !== "todos") {
      result = result.filter((product) => product.categoria === category());
    }

    if (availability() !== "todos") {
      result = result.filter((product) => product.estado === availability());
    }

    if (color() !== "Todos") {
      result = result.filter((product) => product.colores.includes(color()));
    }

    if (material() !== "Todos") {
      result = result.filter((product) => product.material === material());
    }

    if (style() !== "Todos") {
      result = result.filter((product) => product.estilo === style());
    }

    if (search().trim() !== "") {
      const text = search().toLowerCase().trim();

      result = result.filter((product) => {
        return (
          product.nombre.toLowerCase().includes(text) ||
          product.marca.toLowerCase().includes(text) ||
          product.categoriaNombre.toLowerCase().includes(text) ||
          product.material.toLowerCase().includes(text) ||
          product.estilo.toLowerCase().includes(text) ||
          product.uso.toLowerCase().includes(text) ||
          product.colores.join(" ").toLowerCase().includes(text)
        );
      });
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

    return result;
  });

  return (
    <section class="product-grid-section">
      <Show when={!props.hideFilters}>
        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          order={order}
          setOrder={setOrder}
          availability={availability}
          setAvailability={setAvailability}
          color={color}
          setColor={setColor}
          material={material}
          setMaterial={setMaterial}
          style={style}
          setStyle={setStyle}
        />
      </Show>

      <div class="product-grid-section__result">
        <p>
          Mostrando <strong>{filteredProducts().length}</strong> productos
        </p>
      </div>

      <Show
        when={filteredProducts().length > 0}
        fallback={
          <div class="product-grid-section__empty">
            <h3>No se encontraron productos</h3>
            <p>
              Intenta cambiar la búsqueda, categoría, color, material o estilo
              seleccionado.
            </p>
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
import "./ProductFilters.css";

function ProductFilters(props) {
  return (
    <div class="product-filters">
      <div class="product-filters__search">
        <label for="product-search" class="sr-only">
          Buscar producto
        </label>

        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <input
          id="product-search"
          type="search"
          placeholder="Buscar por nombre, color o material"
          value={props.search()}
          onInput={(e) => props.setSearch(e.currentTarget.value)}
        />
      </div>

      <div class="product-filters__order">
        <label for="product-order">Ordenar por</label>

        <select
          id="product-order"
          value={props.order()}
          onChange={(e) => props.setOrder(e.currentTarget.value)}
        >
          <option value="default">Recomendados</option>
          <option value="price-asc">Precio: menor a mayor</option>
          <option value="price-desc">Precio: mayor a menor</option>
          <option value="name-asc">Nombre A-Z</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilters;

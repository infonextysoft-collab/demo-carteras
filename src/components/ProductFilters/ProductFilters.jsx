import { For } from "solid-js";
import { categories } from "../../data/categories";
import "./ProductFilters.css";

function ProductFilters(props) {
  const colors = [
    "Todos",
    "Negro",
    "Marrón",
    "Beige",
    "Blanco",
    "Rosado",
    "Rojo",
    "Azul",
    "Natural",
    "Crema",
    "Dorado",
    "Nude",
    "Gris",
    "Verde",
  ];

  const materials = [
    "Todos",
    "Cuero sintético",
    "Cuero sintético premium",
    "Lona",
    "Lona reforzada",
    "Sintético",
    "Tela reforzada",
    "Tejido sintético",
    "Satén",
  ];

  const styles = [
    "Todos",
    "Elegante",
    "Casual",
    "Urbano",
    "Oficina",
    "Diario",
    "Minimalista",
    "Femenino",
    "Travel",
    "Fiesta",
    "Moderno",
  ];

  return (
    <section class="product-filters">
      <div class="product-filters__search">
        <label for="search">Buscar producto</label>

        <input
          id="search"
          type="text"
          placeholder="Ejemplo: cartera negra, bolso beige, mochila..."
          value={props.search()}
          onInput={(e) => props.setSearch(e.currentTarget.value)}
        />
      </div>

      <div class="product-filters__row">
        <div class="product-filters__group">
          <label>Categoría</label>

          <div class="product-filters__categories">
            <For each={categories}>
              {(category) => (
                <button
                  type="button"
                  class={
                    props.category() === category.id
                      ? "product-filters__category product-filters__category--active"
                      : "product-filters__category"
                  }
                  onClick={() => props.setCategory(category.id)}
                >
                  {category.nombre}
                </button>
              )}
            </For>
          </div>
        </div>

        <div class="product-filters__selects">
          <div>
            <label for="color">Color</label>
            <select
              id="color"
              value={props.color()}
              onChange={(e) => props.setColor(e.currentTarget.value)}
            >
              <For each={colors}>{(color) => <option value={color}>{color}</option>}</For>
            </select>
          </div>

          <div>
            <label for="material">Material</label>
            <select
              id="material"
              value={props.material()}
              onChange={(e) => props.setMaterial(e.currentTarget.value)}
            >
              <For each={materials}>
                {(material) => <option value={material}>{material}</option>}
              </For>
            </select>
          </div>

          <div>
            <label for="style">Estilo</label>
            <select
              id="style"
              value={props.style()}
              onChange={(e) => props.setStyle(e.currentTarget.value)}
            >
              <For each={styles}>{(style) => <option value={style}>{style}</option>}</For>
            </select>
          </div>

          <div>
            <label for="availability">Disponibilidad</label>
            <select
              id="availability"
              value={props.availability()}
              onChange={(e) => props.setAvailability(e.currentTarget.value)}
            >
              <option value="todos">Todos</option>
              <option value="Disponible">Disponible</option>
              <option value="Bajo pedido">Bajo pedido</option>
            </select>
          </div>

          <div>
            <label for="order">Ordenar</label>
            <select
              id="order"
              value={props.order()}
              onChange={(e) => props.setOrder(e.currentTarget.value)}
            >
              <option value="default">Recomendados</option>
              <option value="price-asc">Precio menor a mayor</option>
              <option value="price-desc">Precio mayor a menor</option>
              <option value="name-asc">Nombre A-Z</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;
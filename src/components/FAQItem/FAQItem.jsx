import { createSignal } from "solid-js";
import "./FAQItem.css";

function FAQItem(props) {
  const [open, setOpen] = createSignal(false);
  const faq = props.faq;

  return (
    <article class={`faq-item ${open() ? "faq-item--open" : ""}`}>
      <button type="button" onClick={() => setOpen(!open())}>
        <span>{faq.pregunta}</span>
        <strong>{open() ? "−" : "+"}</strong>
      </button>

      {open() && (
        <div class="faq-item__answer">
          <p>{faq.respuesta}</p>
        </div>
      )}
    </article>
  );
}

export default FAQItem;
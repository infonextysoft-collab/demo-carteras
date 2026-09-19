import { Show } from "solid-js";

import "./SectionTitle.css";

function SectionTitle(props) {
  return (
    <div class={`section-title-box ${props.center ? "section-title-box--center" : ""}`}>
      <Show when={props.label}>
        <span class="section-title-box__label">{props.label}</span>
      </Show>

      <h2>{props.title}</h2>

      <Show when={props.description}>
        <p>{props.description}</p>
      </Show>
    </div>
  );
}

export default SectionTitle;

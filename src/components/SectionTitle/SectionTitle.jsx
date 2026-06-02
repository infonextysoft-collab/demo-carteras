import "./SectionTitle.css";

function SectionTitle(props) {
  return (
    <div class={`section-title-box ${props.center ? "section-title-box--center" : ""}`}>
      <span class="section-title-box__label">{props.label}</span>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default SectionTitle;
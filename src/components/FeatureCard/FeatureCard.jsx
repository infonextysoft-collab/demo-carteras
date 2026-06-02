import "./FeatureCard.css";

function FeatureCard(props) {
  return (
    <article class="feature-card">
      <span>{props.number}</span>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default FeatureCard;
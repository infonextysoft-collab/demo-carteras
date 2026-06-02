import "./TestimonialCard.css";

function TestimonialCard(props) {
  const testimonial = props.testimonial;

  return (
    <article class="testimonial-card">
      <div class="testimonial-card__stars">★★★★★</div>

      <p>“{testimonial.comentario}”</p>

      <div class="testimonial-card__author">
        <strong>{testimonial.nombre}</strong>
        <span>{testimonial.detalle}</span>
      </div>
    </article>
  );
}

export default TestimonialCard;
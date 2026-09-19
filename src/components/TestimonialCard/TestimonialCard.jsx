import "./TestimonialCard.css";

function TestimonialCard(props) {
  const testimonial = props.testimonial;

  return (
    <article class="testimonial-card">
      <div class="testimonial-card__stars" role="img" aria-label="5 de 5 estrellas">
        ★★★★★
      </div>

      <p>“{testimonial.comentario}”</p>

      <div class="testimonial-card__author">
        <strong>{testimonial.nombre}</strong>
        <span>{testimonial.detalle}</span>
      </div>
    </article>
  );
}

export default TestimonialCard;
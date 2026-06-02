import "./BlogCard.css";

function BlogCard(props) {
  const post = props.post;

  return (
    <article class="blog-card">
      <div class="blog-card__image">
        <img src={post.imagen} alt={post.titulo} loading="lazy" />
      </div>

      <div class="blog-card__content">
        <span>{post.fecha}</span>
        <h3>{post.titulo}</h3>
        <p>{post.resumen}</p>
      </div>
    </article>
  );
}

export default BlogCard;
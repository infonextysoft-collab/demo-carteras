// Directiva Solid `use:reveal` — anima los elementos al entrar en el viewport.
// Uso: <section use:reveal> ... </section>  o  <div use:reveal={{ delay: 120 }}>

export function reveal(el, value) {
  const options = typeof value === "function" ? value() : value || {};
  const delay = options.delay || 0;

  el.classList.add("reveal");

  if (delay) {
    el.style.transitionDelay = `${delay}ms`;
  }

  if (typeof IntersectionObserver === "undefined") {
    el.classList.add("reveal--visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal--visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );

  observer.observe(el);
}

const WHATSAPP_PHONE = "51999999999";

export function createGeneralWhatsAppLink() {
  const message = "Hola, quiero consultar sobre carteras y bolsos disponibles.";

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppLink(product) {
  const message = `Hola, estoy interesada en el producto: ${product.nombre}. ¿Está disponible?`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createPromotionWhatsAppLink(promotion) {
  const message =
    promotion.mensaje ||
    `Hola, quiero consultar sobre la promoción: ${promotion.titulo}.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createGuideWhatsAppLink() {
  const message =
    "Hola, necesito ayuda para elegir una cartera o bolso según mi estilo.";

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
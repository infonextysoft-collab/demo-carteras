const WHATSAPP_PHONE = "51999999999";

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function createGeneralWhatsAppLink() {
  return createWhatsAppLink(
    "Hola, quiero consultar sobre carteras y bolsos disponibles."
  );
}

export function createProductWhatsAppLink(product) {
  return createWhatsAppLink(
    `Hola, estoy interesada en el producto: ${product.nombre}. ¿Está disponible?`
  );
}

import "./WhatsAppButton.css";

function WhatsAppButton(props) {
  const phone = props.phone || "51999999999";
  const message =
    props.message || "Hola, quiero consultar sobre carteras y bolsos disponibles.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class={`whatsapp-button ${props.class || ""}`}
    >
      {props.children || "Consultar por WhatsApp"}
    </a>
  );
}

export default WhatsAppButton;
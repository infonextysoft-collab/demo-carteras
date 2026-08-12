import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import { reveal } from "../../utils/reveal";

import "./Contact.css";

reveal;

function Contact() {
  const info = [
    {
      label: "WhatsApp",
      value: "+51 999 999 999",
      hint: "Respuesta en minutos, en horario de atención",
    },
    {
      label: "Horario",
      value: "Lunes a sábado",
      hint: "9:00 a.m. – 8:00 p.m.",
    },
    {
      label: "Zona de entrega",
      value: "Lima Metropolitana",
      hint: "Envíos a todo el Perú por courier",
    },
  ];

  return (
    <div class="contact-page">
      <section class="contact-hero fade-up">
        <div class="page-container">
          <span class="contact-hero__label">Contacto</span>
          <h1>Hablemos por WhatsApp</h1>
          <p>
            Escríbenos y te ayudamos a elegir el modelo ideal. Respondemos tus
            dudas sobre disponibilidad, colores, medidas y precio.
          </p>
          <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
        </div>
      </section>

      <section class="contact-info section-padding" use:reveal>
        <div class="page-container">
          <div class="contact-info__grid">
            {info.map((item) => (
              <div class="contact-info__card">
                <span class="contact-info__label">{item.label}</span>
                <strong class="contact-info__value">{item.value}</strong>
                <span class="contact-info__hint">{item.hint}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="contact-steps section-padding" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Proceso"
            title="Así te atendemos"
            description="Un proceso simple, sin formularios largos ni esperas."
            center
          />

          <div class="contact-steps__grid">
            <div class="contact-steps__item">
              <span>1</span>
              <div>
                <h3>Nos escribes</h3>
                <p>Cuéntanos qué buscas por WhatsApp.</p>
              </div>
            </div>

            <div class="contact-steps__item">
              <span>2</span>
              <div>
                <h3>Te asesoramos</h3>
                <p>Te mostramos opciones según tu estilo y presupuesto.</p>
              </div>
            </div>

            <div class="contact-steps__item">
              <span>3</span>
              <div>
                <h3>Coordinamos entrega</h3>
                <p>Separas tu modelo y coordinamos pago y envío.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-cta" use:reveal>
        <div class="page-container">
          <div class="contact-cta__box">
            <div>
              <span>¿Tienes una duda puntual?</span>
              <h2>Escríbenos ahora mismo</h2>
              <p>Un mensaje directo es la forma más rápida de recibir ayuda.</p>
            </div>

            <WhatsAppButton>Hablar con una asesora</WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import { For } from "solid-js";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import { createGeneralWhatsAppLink } from "../../utils/whatsapp";
import { reveal } from "../../utils/reveal";

import "./Contact.css";

reveal;

function Contact() {
  const info = [
    {
      label: "WhatsApp",
      value: "+51 999 999 999",
      hint: "Respuesta en minutos, en horario de atención",
      href: createGeneralWhatsAppLink(),
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

  const steps = [
    { title: "Nos escribes", description: "Cuéntanos qué buscas por WhatsApp." },
    {
      title: "Te asesoramos",
      description: "Te mostramos opciones según tu estilo y presupuesto.",
    },
    {
      title: "Coordinamos la entrega",
      description: "Separas tu modelo y coordinamos pago y envío.",
    },
  ];

  return (
    <div class="contact-page">
      <header class="page-header">
        <div class="page-container fade-up">
          <h1>Contacto</h1>
          <p>
            Escríbenos y te ayudamos a elegir el modelo ideal. Respondemos tus
            dudas sobre disponibilidad, colores, medidas y precio.
          </p>

          <div class="page-header__actions">
            <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </header>

      <section class="section-padding" use:reveal>
        <div class="page-container">
          <div class="contact-info__grid">
            <For each={info}>
              {(item) => (
                <div class="contact-info__card">
                  <span class="contact-info__label">{item.label}</span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-info__value contact-info__value--link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <strong class="contact-info__value">{item.value}</strong>
                  )}

                  <span class="contact-info__hint">{item.hint}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section-padding contact-steps" use:reveal>
        <div class="page-container">
          <SectionTitle
            label="Proceso"
            title="Así te atendemos"
            description="Un proceso simple, sin formularios largos ni esperas."
            center
          />

          <div class="contact-steps__grid">
            <For each={steps}>
              {(step, index) => (
                <div class="contact-steps__item">
                  <span>{index() + 1}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

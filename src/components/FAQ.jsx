import { useState } from 'react';

const CONTENT = {
  es: {
    heading: 'Preguntas Frecuentes',
    faqs: [
      {
        q: "¿Por qué mi intento fue rechazado como 'No está en la lista'?",
        a: "Wordle en Español utiliza un diccionario verificado de palabras válidas de 5 letras en español. Si tu palabra no es aceptada, puede ser un nombre propio o una palabra no reconocida en el diccionario estándar."
      },
      {
        q: "¿Se admiten acentos y tildes en el juego?",
        a: "Para facilitar la jugabilidad y la introducción de letras, el juego procesa las palabras en mayúsculas sin distinguir tildes gráficas."
      },
      {
        q: "¿Qué ocurre con mis estadísticas si borro la memoria del navegador?",
        a: "Tus estadísticas (partidas jugadas, victorias y rachas) se guardan localmente en el almacenamiento de tu navegador. Si limpias los datos o juegas en modo incógnito, el historial se reiniciará."
      },
      {
        q: "¿Puedo transferir mis estadísticas a otro móvil o PC?",
        a: "Actualmente todos los datos se conservan únicamente en el dispositivo y navegador que utilizas. No se requiere registro de cuentas para jugar."
      },
      {
        q: "¿Cómo activo el Modo Difícil?",
        a: "Puedes activar el Modo Difícil haciendo clic en el icono de engranaje (Ajustes) en la esquina superior derecha antes de ingresar tu primer intento."
      },
      {
        q: "¿En qué consiste el Modo Difícil?",
        a: "En el Modo Difícil, cualquier pista revelada (letras verdes o amarillas) debe ser utilizada obligatoriamente en todos los intentos posteriores."
      },
      {
        q: "¿A qué hora se actualiza la Palabra del Día?",
        a: "El desafío diario se renueva cada día a medianoche según la hora local. Si no ves la nueva palabra, prueba refrescar la página."
      },
      {
        q: "¿Puedo jugar partidas anteriores de días pasados?",
        a: "El reto 'Palabra del Día' está fijado a la fecha actual. No obstante, puedes jugar todas las partidas que desees en el modo 'Ilimitado'."
      },
      {
        q: "¿Se necesita conexión a internet para jugar?",
        a: "Necesitas conexión para cargar la página inicialmente. Una vez cargada, puedes completar tu partida sin interrupciones."
      }
    ]
  },
};

export default function FAQ({ language = 'es' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const c = CONTENT.es;

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-heading">
        <h2 className="section-heading__title">{c.heading}</h2>
      </div>
      <div className="faq__list">
        {c.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
              <button 
                className="faq__trigger" 
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                {faq.q}
                <svg className="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq__content-wrap" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="faq__content">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

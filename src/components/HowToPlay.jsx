const CONTENT = {
  es: {
    heading: 'Cómo Jugar a Wordle',
    steps: [
      {
        num: 1,
        title: 'Haz un Intento',
        desc: 'Escribe cualquier palabra válida de 5 letras y presiona Enter para enviar tu intento.',
        img: '/img/howto-1.webp',
      },
      {
        num: 2,
        title: 'Interpreta los Colores',
        desc: 'El juego te dará pistas con tres colores:\n🟩 Verde: Letra correcta en la posición exacta.\n🟨 Amarillo: Letra correcta pero en la posición equivocada.\n⬜ Gris: La letra no forma parte de la palabra.',
        img: '/img/howto-2.webp',
      },
      {
        num: 3,
        title: 'Realiza Nuevos Intentos',
        desc: 'Cada nuevo intento debe ser una palabra válida de 5 letras. Tienes un máximo de 6 intentos para resolver el puzle.',
        img: '/img/howto-3.webp',
      },
      {
        num: 4,
        title: 'Victoria o Derrota',
        desc: 'Adivina la palabra en 6 intentos o menos para ganar, o el juego te revelará la solución al finalizar.',
        img: '/img/howto-4.webp',
      },
    ]
  },
};

export default function HowToPlay({ language = 'es' }) {
  const c = CONTENT.es;

  return (
    <section className="howto" id="how-to-play">
      <div className="section-heading">
        <h2 className="section-heading__title">{c.heading}</h2>
      </div>

      <ul className="howto__list">
        {c.steps.map((step, i) => (
          <li key={step.num} className={`howto__item ${i % 2 === 1 ? 'howto__item--alt' : ''}`}>
            <div className="howto__content-side">
              <h3 className="howto__title">{step.title}</h3>
            </div>

            <div className="howto__num-col">
              <span className="howto__num">{step.num}</span>
              {i < c.steps.length - 1 && <div className="howto__line" />}
            </div>

            <div className="howto__card-side">
              <div className="howto__card">
                <p className="howto__desc">
                  {step.desc.split('\n').map((line, j) => (
                    <span key={j}>{line}{j < step.desc.split('\n').length - 1 && <br />}</span>
                  ))}
                </p>
                <img
                  className="howto__img"
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

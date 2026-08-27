import React from 'react';

const SPANISH_STEPS = [
  {
    num: 1,
    title: 'Haz un Intento con una Palabra en Español',
    desc: 'Escribe cualquier palabra válida de 5 letras en español (como PLANO, GATOS o BARCO) y pulsa ENTER para enviar tu intento.',
    renderVisual: () => (
      <div className="howto-tiles-visual">
        <div className="howto-tile-row">
          {['P', 'L', 'A', 'N', 'O'].map((letter, idx) => (
            <div key={idx} className="howto-tile howto-tile--typed">{letter}</div>
          ))}
        </div>
        <span className="howto-tile-badge">Palabra válida de 5 letras</span>
      </div>
    ),
  },
  {
    num: 2,
    title: 'Interpreta los Colores de las Letras',
    desc: 'Tras cada intento, las casillas cambiarán de color para indicarte cómo de cerca estás de la palabra oculta:',
    renderVisual: () => (
      <div className="howto-tiles-visual howto-tiles-visual--examples">
        <div className="howto-example-item">
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--correct">G</div>
            <div className="howto-tile howto-tile--default">A</div>
            <div className="howto-tile howto-tile--default">T</div>
            <div className="howto-tile howto-tile--default">O</div>
            <div className="howto-tile howto-tile--default">S</div>
          </div>
          <p className="howto-example-desc">
            <strong className="color-correct-text">🟩 Verde:</strong> La letra <strong>G</strong> está en la palabra y en la posición correcta.
          </p>
        </div>

        <div className="howto-example-item">
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--default">V</div>
            <div className="howto-tile howto-tile--default">O</div>
            <div className="howto-tile howto-tile--present">C</div>
            <div className="howto-tile howto-tile--default">A</div>
            <div className="howto-tile howto-tile--default">L</div>
          </div>
          <p className="howto-example-desc">
            <strong className="color-present-text">🟨 Amarillo:</strong> La letra <strong>C</strong> está en la palabra pero en otra posición.
          </p>
        </div>

        <div className="howto-example-item">
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--default">P</div>
            <div className="howto-tile howto-tile--default">L</div>
            <div className="howto-tile howto-tile--default">A</div>
            <div className="howto-tile howto-tile--absent">Y</div>
            <div className="howto-tile howto-tile--default">A</div>
          </div>
          <p className="howto-example-desc">
            <strong className="color-absent-text">⬜ Gris:</strong> La letra <strong>Y</strong> no forma parte de la palabra del día.
          </p>
        </div>
      </div>
    ),
  },
  {
    num: 3,
    title: 'Deduce y Realiza Nuevos Intentos',
    desc: 'Usa las pistas de las letras verdes y amarillas para descartar letras grises. Tienes hasta 6 intentos para dar con la solución.',
    renderVisual: () => (
      <div className="howto-tiles-visual">
        <div className="howto-grid-preview">
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--absent">P</div>
            <div className="howto-tile howto-tile--absent">L</div>
            <div className="howto-tile howto-tile--correct">A</div>
            <div className="howto-tile howto-tile--absent">N</div>
            <div className="howto-tile howto-tile--correct">O</div>
          </div>
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--absent">B</div>
            <div className="howto-tile howto-tile--correct">A</div>
            <div className="howto-tile howto-tile--correct">R</div>
            <div className="howto-tile howto-tile--correct">C</div>
            <div className="howto-tile howto-tile--correct">O</div>
          </div>
          <div className="howto-tile-row">
            <div className="howto-tile howto-tile--correct">M</div>
            <div className="howto-tile howto-tile--correct">A</div>
            <div className="howto-tile howto-tile--correct">R</div>
            <div className="howto-tile howto-tile--correct">C</div>
            <div className="howto-tile howto-tile--correct">O</div>
          </div>
        </div>
        <span className="howto-tile-badge">Estrategia y deducción paso a paso</span>
      </div>
    ),
  },
  {
    num: 4,
    title: '¡Victoria! Juega Diario o Ilimitado',
    desc: '¡Adivina la palabra en 6 intentos o menos! Puedes compartir tus resultados con amigos o seguir jugando partidas ilimitadas.',
    renderVisual: () => (
      <div className="howto-tiles-visual howto-tiles-visual--victory">
        <div className="howto-tile-row">
          <div className="howto-tile howto-tile--correct howto-tile--win">M</div>
          <div className="howto-tile howto-tile--correct howto-tile--win">A</div>
          <div className="howto-tile howto-tile--correct howto-tile--win">R</div>
          <div className="howto-tile howto-tile--correct howto-tile--win">C</div>
          <div className="howto-tile howto-tile--correct howto-tile--win">O</div>
        </div>
        <div className="howto-victory-badge">
          🎉 ¡Palabra Adivinada en 3/6 Intentos!
        </div>
      </div>
    ),
  },
];

export default function HowToPlay() {
  return (
    <section className="howto" id="how-to-play">
      <div className="section-heading">
        <h2 className="section-heading__title">Cómo Jugar a Wordle en Español</h2>
      </div>

      <ul className="howto__list">
        {SPANISH_STEPS.map((step, i) => (
          <li key={step.num} className={`howto__item ${i % 2 === 1 ? 'howto__item--alt' : ''}`}>
            <div className="howto__content-side">
              <h3 className="howto__title">{step.title}</h3>
            </div>

            <div className="howto__num-col">
              <span className="howto__num">{step.num}</span>
              {i < SPANISH_STEPS.length - 1 && <div className="howto__line" />}
            </div>

            <div className="howto__card-side">
              <div className="howto__card">
                <p className="howto__desc">{step.desc}</p>
                {step.renderVisual()}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

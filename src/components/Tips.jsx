const CONTENT = {
  es: {
    heading: 'Consejos y Estrategias para Wordle',
    tips: [
      {
        title: '1. Elige una Palabra Inicial Óptima',
        desc: 'Aumenta tus probabilidades abriendo con palabras ricas en vocales y consonantes comunes en español como "A", "E", "O", "R", "S" y "T" (por ejemplo: "AUDIO", "CANTO" o "SERIO").'
      },
      {
        title: '2. Analiza la Posición de las Pistas',
        desc: 'Si una letra sale en amarillo, colócala en una posición diferente y habitual en palabras en español para tu siguiente intento.'
      },
      {
        title: '3. No Reutilices Letras Descartadas',
        desc: 'Presta atención a las casillas grises. Si una letra se muestra gris, no pertenece a la palabra; descártala de tus siguientes intentos para reducir posibilidades rápidamente.'
      },
      {
        title: '4. Aprovecha Patrones y Terminaciones Comunes',
        desc: 'El vocabulario en español sigue estructuras predecibles. Fíjate en prefijos habituales (como "RE-", "DES-") y terminaciones frecuentes (como "-AR", "-ER", "-IR", "-ON", "-AS", "-OS").'
      },
      {
        title: '5. Juega en Modo Ilimitado para Entrenar',
        desc: 'A diferencia de la restricción de una sola partida diaria, el modo ilimitado te permite practicar cuantas veces quieras para mejorar tu agilidad mental y vocabulario.'
      },
      {
        title: '6. Usa una Palabra de Descarte si te Bloqueas',
        desc: 'Si tienes muchas opciones posibles y te quedan pocos intentos, prueba una palabra compuesta totalmente por letras nuevas para despejar dudas rápidamente.'
      },
      {
        title: '7. Tómate tu Tiempo',
        desc: 'En Wordle no hay límite de tiempo ni reloj en contra. Reflexiona con calma sobre cada combinación de letras antes de confirmar tu jugada.'
      },
      {
        title: '8. Atención a las Letras Repetidas',
        desc: 'Recuerda que una palabra puede contener letras repetidas (ej. "CASAS", "PERRO", "LLAVE"). Si no encuentras letras que encajen, considera repetir una letra ya descubierta.'
      }
    ]
  },
};

export default function Tips({ language = 'es' }) {
  const c = CONTENT.es;

  return (
    <section className="tips" id="wordle-tips">
      <div className="section-heading">
        <h2 className="section-heading__title">{c.heading}</h2>
      </div>
      <div className="tips__content">
        {c.tips.map((tip, idx) => (
          <div className="tips__item" key={idx}>
            <h3 className="tips__title">{tip.title}</h3>
            <p className="tips__desc">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

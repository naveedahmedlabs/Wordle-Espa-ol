const CONTENT = {
  es: {
    heading: 'Ventajas Principales',
    advantages: [
      {
        icon: "📖",
        title: "Amplía tu Vocabulario",
        desc: "Jugar con regularidad te expone a diversas palabras de 5 letras en español, enriqueciendo tu léxico y ortografía de forma amena."
      },
      {
        icon: "🎮",
        title: "100% Gratis y Sin Descargas",
        desc: "Juega al instante desde cualquier navegador web moderno sin pagos ocultos, suscripciones ni instalaciones molestas."
      },
      {
        icon: "🧠",
        title: "Estimula tu Mente",
        desc: "Deducir la palabra correcta mediante pistas de color ejercita la lógica, la concentración y el reconocimiento de patrones."
      },
      {
        icon: "🏋️‍♂️",
        title: "Gimnasia Cerebral Diaria",
        desc: "Tanto en el reto de la palabra del día como en el modo ilimitado, es el ejercicio mental perfecto para tus pausas cotidianas."
      },
      {
        icon: "⏳",
        title: "Partidas Sin Estrés",
        desc: "Sin cronómetros ni prisas: tómate todo el tiempo que necesites para pensar detenidamente cada uno de tus intentos."
      },
      {
        icon: "🌐",
        title: "Comparte con tus Amigos",
        desc: "Copia la cuadrícula de colores con un solo clic y comparte tus resultados en redes sociales sin revelar la palabra secreta."
      }
    ]
  },
};

export default function Advantages({ language = 'es' }) {
  const c = CONTENT.es;

  return (
    <section className="advantages" id="advantages">
      <div className="section-heading">
        <h2 className="section-heading__title">{c.heading}</h2>
      </div>
      <div className="advantages__grid">
        {c.advantages.map((adv, idx) => (
          <div key={idx} className="advantages__card">
            <div className="advantages__icon">{adv.icon}</div>
            <h3 className="advantages__title">{adv.title}</h3>
            <p className="advantages__desc">{adv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

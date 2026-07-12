const CONTENT = {

  uk: {
    heading: 'Key Advantages',
    advantages: [
      {
        icon: "📖",
        title: "Expand Your Vocabulary",
        desc: "Regular play exposes you to uncommon 5-letter words, actively building your vocabulary and spelling recall in a fun, natural way."
      },
      {
        icon: "🎮",
        title: "100% Free & No Downloads",
        desc: "Play instantly in any modern web browser. There are no hidden fees, paywalls, or annoying app installations required."
      },
      {
        icon: "🧠",
        title: "Enhance Cognitive Function",
        desc: "Deducing the correct word from colour-coded clues requires logical deduction and pattern recognition, keeping your mind sharp."
      },
      {
        icon: "🏋️‍♂️",
        title: "Daily Mental Stimulation",
        desc: "Whether you play the daily challenge or unlimited mode, this quick mental workout is the perfect way to stimulate your brain during a break."
      },
      {
        icon: "⏳",
        title: "Stress-Free Gameplay",
        desc: "Take a deep breath. There are no ticking clocks or stressful timers here—just you, the grid, and all the time you need to make the perfect guess."
      },
      {
        icon: "🌐",
        title: "Connect with Friends",
        desc: "Copy your coloured emoji grid with a single click and share your puzzle-solving triumphs on social media without giving away the answer."
      }
    ]
  },

};

export default function Advantages({ language = 'en' }) {
  const c = CONTENT.uk;

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

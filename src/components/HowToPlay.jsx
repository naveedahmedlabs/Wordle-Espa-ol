const CONTENT = {

  uk: {
    heading: 'How to Play',
    steps: [
      {
        num: 1,
        title: 'Make a Guess',
        desc: 'Type any valid 5-letter word and press Enter to submit your guess.',
        img: '/img/howto-1.webp',
      },
      {
        num: 2,
        title: 'Understand the Colours',
        desc: 'The game provides feedback with three colours:\n🟩 Green: Correct letter in the right position.\n🟨 Yellow: Correct letter in the wrong position.\n⬜ Grey: Letter is not in the word.',
        img: '/img/howto-2.webp',
      },
      {
        num: 3,
        title: 'Make Subsequent Guesses',
        desc: 'Each new guess must be a valid 5-letter word. You have a maximum of 6 attempts to solve the puzzle.',
        img: '/img/howto-3.webp',
      },
      {
        num: 4,
        title: 'Win or Lose',
        desc: 'Guess the word correctly within 6 tries to win, or the game will reveal the correct answer.',
        img: '/img/howto-4.webp',
      },
    ]
  },

};

export default function HowToPlay({ language = 'en' }) {
  const c = CONTENT.uk;

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

const CONTENT = {

  uk: {
    heading: 'How to play Wordle?',
    steps: [
      {
        num: 1,
        title: 'Make your first guess',
        desc: 'Type any valid 5-letter word and press Enter to submit your guess.',
        img: '/img/howto-1.webp',
      },
      {
        num: 2,
        title: 'Check the Letter Colours',
        desc: 'The game provides feedback with three colours:\n🟩 Green: Correct letter in the right position.\n🟨 Yellow: Correct letter in the wrong position.\n⬜ Grey: Letter is not in the word.',
        img: '/img/howto-2.webp',
      },
      {
        num: 3,
        title: 'Use the Feedback to Adjust Your Guess',
        desc: 'Modify your next word based on the hints. Avoid grey letters, reposition yellow ones, and keep green ones.',
        img: '/img/howto-3.webp',
      },
      {
        num: 4,
        title: 'Keep Guessing Within 6 Tries',
        desc: 'You have six attempts to figure out the secret word.',
        img: '/img/howto-4.webp',
      },
      {
        num: 5,
        title: 'Win or Learn the Answer',
        desc: 'If you guess the word correctly, you win! If not, the game reveals the correct word.',
        img: '/img/howto-5.webp',
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

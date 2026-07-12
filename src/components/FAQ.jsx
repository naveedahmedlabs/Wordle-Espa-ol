import { useState } from 'react';

const CONTENT = {

  uk: {
    heading: 'Frequently Asked Questions',
    faqs: [
      {
        q: "What is Wordle Unlimited?",
        a: "Wordle Unlimited is an unrestricted version of the wildly popular daily word puzzle. Your goal is to deduce a hidden five-letter mystery word within six guesses, using colour-coded hints to guide your logic."
      },
      {
        q: "How exactly do you play the game?",
        a: "Begin by typing any valid 5-letter word and hitting Enter. The tiles will flip to reveal colours: Green means the letter is perfectly placed, Yellow means it's in the word but in the wrong spot, and Grey means it's completely absent."
      },
      {
        q: "Is it possible to play more than one game a day?",
        a: "Absolutely! While the original game restricts you to a single daily puzzle, our platform allows you to play infinite, back-to-back matches to practice and refine your skills without ever hitting a paywall or limit."
      },
      {
        q: "What happens if I run out of guesses?",
        a: "If you use up all six attempts without finding the answer, the game will reveal the hidden word to you. You can immediately hit 'New Game' to try again with a fresh puzzle."
      },
      {
        q: "Do I need to download an app to play?",
        a: "No downloads are necessary. You can play directly in your web browser on any device—including iPhones, Android smartphones, iPads, and desktop computers—with full mobile responsiveness."
      },
      {
        q: "Can I share my winning streak with friends?",
        a: "Yes! Once you solve a puzzle, you can use the built-in share feature to copy your result. It generates a grid of coloured emoji squares (🟩 🟨 ⬜) that shows your guessing journey without spoiling the actual word."
      },
      {
        q: "Who invented the original game?",
        a: "The core concept was developed by software engineer Josh Wardle in 2021 as a gift for his partner, before eventually becoming a global phenomenon and being acquired by The New York Times."
      }
    ]
  },

};

export default function FAQ({ language = 'en' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const c = CONTENT.uk;

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

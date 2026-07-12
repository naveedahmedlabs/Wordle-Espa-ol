import { useState } from 'react';

const CONTENT = {

  uk: {
    heading: 'Frequently Asked Questions',
    faqs: [
      {
        q: "Why was my guess rejected as 'Not in word list'?",
        a: "Wordle UK uses a strict British English dictionary. If your guess is rejected, it may be a proper noun, an invalid word, or spelled using US conventions instead of UK conventions (e.g., try 'COLOUR' instead of 'COLOR')."
      },
      {
        q: "Are British spellings supported in this version?",
        a: "Yes! Unlike generic versions of the game, Wordle UK natively accepts and occasionally features words with British English spellings as the daily solution."
      },
      {
        q: "What happens to my stats if I clear my browser cache?",
        a: "Your game statistics, including win rate and daily streaks, are saved locally in your browser's storage. If you clear your cache or use a private browsing window, your stats will be reset."
      },
      {
        q: "Can I transfer my stats to a new phone or computer?",
        a: "Currently, all game data is stored locally on the device you are using. Because there is no central account system, transferring stats across different devices is not supported."
      },
      {
        q: "How do I turn on Hard Mode?",
        a: "You can enable Hard Mode by clicking the gear icon (Settings) in the top right corner and toggling the Hard Mode switch. It must be turned on before making your first guess."
      },
      {
        q: "What makes Hard Mode different from the standard game?",
        a: "In Hard Mode, any clues you uncover must be used in all subsequent guesses. For example, if you find a green 'A', every following guess must contain an 'A' in that exact position."
      },
      {
        q: "Why am I seeing the same daily word as yesterday?",
        a: "The daily puzzle updates at midnight local time. If you are seeing yesterday's word, try refreshing the page or checking that your device's timezone and date are set correctly."
      },
      {
        q: "The game froze or isn't loading properly, how do I fix it?",
        a: "This is usually caused by a network glitch or a strict ad-blocker. Try refreshing the page, disabling aggressive content blockers, or updating your browser to the latest version."
      },
      {
        q: "Can I play previous daily puzzles that I missed?",
        a: "The 'UK Wordle Today' puzzle is locked to the current calendar date. However, you can play as many random puzzles as you like in the 'Unlimited' mode to make up for missed days."
      },
      {
        q: "Does Wordle UK require an active internet connection?",
        a: "An internet connection is required to load the page initially and to fetch the daily puzzle. Once loaded, you can finish your current game offline, but you'll need a connection to start a new one."
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

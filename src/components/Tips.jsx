const CONTENT = {

  uk: {
    heading: 'Tips and Strategy',
    tips: [
      {
        title: '1. Choose an Optimal Starting Word',
        desc: 'Maximize your chances in Wordle Unlimited by opening with vowel-heavy words. Words containing "A", "E", "O", and common consonants like "R", "S", and "T" (such as "STARE", "ROAST", or "ARISE") give you an immediate advantage.'
      },
      {
        title: '2. Analyze Hint Positioning',
        desc: 'Instead of just finding correct letters, visualize where those letters frequently appear in English words. If a letter is yellow, strategically place it in a different common slot for your next guess.'
      },
      {
        title: '3. Never Re-use Dead Letters',
        desc: 'Pay close attention to grey tiles. If a letter turns grey, it is entirely absent from the target word. Exclude these dead letters from all subsequent guesses to quickly narrow down the dictionary of possibilities.'
      },
      {
        title: '4. Leverage Syllable Patterns',
        desc: 'English vocabulary follows predictable structures. Once you uncover a few green or yellow hints, try visualizing common prefixes (like "RE-" or "UN-") and standard suffixes (like "-ING", "-ED", or "-ER").'
      },
      {
        title: '5. Play Wordle Unlimited to Build Skills',
        desc: 'Unlike the daily limit on traditional Wordle games, our unlimited mode lets you play back-to-back puzzles. This constant, unrestricted practice is the absolute fastest way to improve your vocabulary recall and pattern recognition.'
      },
      {
        title: '6. Employ a Burner Word When Stuck',
        desc: 'If you have too many possibilities and only one or two guesses remaining, consider sacrificing a turn by playing a completely different word made entirely of unused letters. This rapid elimination strategy can reveal the exact consonants you need.'
      },
      {
        title: '7. Take Your Time',
        desc: 'There is no ticking clock in this puzzle game. Pause to think critically about letter combinations rather than rushing your keyboard entries. A thoughtful guess is always better than a rushed mistake.'
      },
      {
        title: '8. Hunt for Double Letters',
        desc: 'Don\'t forget that words can frequently contain duplicate letters (e.g., "APPLE", "BLOOD", "EERIE"). If you are missing a slot and no remaining letters seem to fit, consider reusing a green or yellow letter you\'ve already discovered.'
      }
    ]
  },

};

export default function Tips({ language = 'en' }) {
  const c = CONTENT.uk;

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

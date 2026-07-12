import React from 'react';
import Link from 'next/link';

export default function WordleIntro({ language = 'en', mode = 'unlimited' }) {
  const content = {

    uk: {
      daily: {
        title: "Wordle UK Today - Play Today's UK Wordle",
        description: 'Play Wordle UK Today and solve the daily British English word puzzle. A new UK Wordle challenge is available every day.',
      },
      unlimited: {
        title: 'Wordle Unlimited UK - Play UK Wordle Online',
        description: 'Play Wordle Unlimited UK online for free. Enjoy unlimited British English word puzzles and guess new words anytime.',
      },
      anchorLinks: [
        { label: 'How to play', href: '#how-to-play' },
        { label: 'Tips', href: '#tips' },
        { label: 'FAQ', href: '#faq' }
      ],
      pageLinks: [
        { label: 'UK Wordle Today', to: '/wordle-today/' },
        { label: 'UK Daily Hints', to: '/wordle-hints-today/' }
      ]
    },

  };

  const langSet = content.uk;
  const c = mode === 'daily' ? langSet.daily : langSet.unlimited;
  const anchorLinks = langSet.anchorLinks;
  const pageLinks = langSet.pageLinks;

  return (
    <section className="wordle-intro" id="about">
      <div className="container">
        <div className="wordle-intro__card">
          <div className="wordle-intro__icon">
            <div className="wordle-intro__logo">
              <span>W</span>
            </div>
          </div>
          <div className="wordle-intro__content">
            <h2 className="wordle-intro__title">{c.title}</h2>
            <p className="wordle-intro__desc">{c.description}</p>
            <nav className="wordle-intro__links">
              {anchorLinks.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && <span className="wordle-intro__divider">|</span>}
                  <a href={link.href} className="wordle-intro__link">{link.label}</a>
                </React.Fragment>
              ))}
            </nav>
            <nav className="wordle-intro__links" style={{ marginTop: '8px' }}>
              {pageLinks.map((link, i) => (
                <React.Fragment key={link.to}>
                  {i > 0 && <span className="wordle-intro__divider">|</span>}
                  <Link href={link.to} className="wordle-intro__link">{link.label}</Link>
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

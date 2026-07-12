import { Fragment } from 'react';

const CONTENT = {

  uk: {
    links: [
      { label: 'Wordle UK', href: '/' },
      { label: 'UK Wordle Today', href: '/wordle-today/' },
      { label: 'UK Daily Hints', href: '/wordle-hints-today/' },
      { label: 'Blog', href: '/blogs/' },
      { label: 'How to Play', href: '#how-to-play' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Privacy Policy', href: '/privacy/' }
    ]
  },

};

export default function Footer({ language = 'en' }) {
  const c = CONTENT.uk;

  return (
    <footer className="footer" id="footer">
      <div className="footer__logo">
        <span className="footer__logo-icon">W</span>
        <span className="footer__logo-text">Wordle Unlimited</span>
      </div>
      <nav className="footer__links">
        {c.links.map((link, idx) => (
          <Fragment key={idx}>
            {link.href.startsWith('/') ? (
              <Link href={link.href} className="footer__link">{link.label}</Link>
            ) : (
              <a href={link.href} className="footer__link">{link.label}</a>
            )}
            {idx < c.links.length - 1 && <span className="footer__dot">&middot;</span>}
          </Fragment>
        ))}
      </nav>
      <div className="footer__info">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Wordle Unlimited</p>
        <span className="footer__version">Version 1.2.4</span>
      </div>
    </footer>
  );
}

import Link from 'next/link';

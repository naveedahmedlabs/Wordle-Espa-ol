import { Fragment } from 'react';
import Link from 'next/link';

const CONTENT = {
  es: {
    links: [
      { label: 'Wordle Español', href: '/' },
      { label: 'Palabra del Día', href: '/palabra-del-dia/' },
      { label: 'Wordle Respuesta Hoy', href: '/wordle-respuesta-hoy/' },
      { label: 'Archivo de Puzles', href: '/archive/' },
      { label: 'Cómo Jugar', href: '#how-to-play' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
      { label: 'Política de Privacidad', href: '/privacy/' }
    ]
  },
};

export default function Footer({ language = 'es' }) {
  const c = CONTENT.es;

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

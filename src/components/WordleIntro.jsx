import React from 'react';
import Link from 'next/link';

export default function WordleIntro({ language = 'es', mode = 'unlimited' }) {
  const content = {
    es: {
      daily: {
        title: 'Palabra del Día - Juega al Wordle de Hoy en Español',
        description: 'Juega a la Palabra del Día en español y resuelve el desafío diario de palabras. Un nuevo reto de Wordle en español disponible cada 24 horas.',
      },
      unlimited: {
        title: 'Wordle Español Ilimitado - Juega Online Gratis',
        description: 'Juega a Wordle en español online gratis e ilimitado. Disfruta de puzles infinitos de palabras en español y pon a prueba tu vocabulario.',
      },
      anchorLinks: [
        { label: 'Cómo jugar', href: '#how-to-play' },
        { label: 'Consejos', href: '#wordle-tips' },
        { label: 'Preguntas Frecuentes', href: '#faq' }
      ],
      pageLinks: [
        { label: 'Palabra del Día', to: '/palabra-del-dia/' },
        { label: 'Wordle Respuesta Hoy', to: '/wordle-respuesta-hoy/' }
      ]
    },
  };

  const langSet = content.es;
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

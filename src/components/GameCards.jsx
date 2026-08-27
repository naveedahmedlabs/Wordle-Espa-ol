import React from 'react';

const CONTENT = {
  es: {
    heading: 'Juega a Otros Juegos Recomendados',
    games: [
      {
        name: 'Strands NYT',
        desc: 'Encuentra las palabras ocultas para descubrir la temática del día',
        icon: '/images/games/strands-icon.svg',
        url: 'https://strandsgames.org/',
        cta: 'Jugar Strands Aquí',
        accentColor: '#4A90D9',
        bgColor: '#EBF4FF',
      },
      {
        name: 'Wordle en Inglés (UK)',
        desc: 'Juega a la versión original de Wordle en inglés online',
        icon: '/images/games/wordle-icon.svg',
        url: 'https://wordlegame.co.uk/',
        cta: 'Jugar Wordle UK Aquí',
        accentColor: '#538d4e',
        bgColor: '#EAF5E8',
      },
    ]
  },
};

export default function GameCards({ language = 'es' }) {
  const c = CONTENT.es;

  return (
    <section className="game-cards" id="play-other-games">
      <div className="game-cards__heading">
        <h2 className="game-cards__heading-text">{c.heading}</h2>
      </div>

      <div className="game-cards__grid game-cards__grid--4col">
        {c.games.map((game) => (
          <a
            key={game.name}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card game-card--enhanced"
            id={`card-${game.name.toLowerCase().replace(/\s/g, '-')}`}
            style={{ '--card-accent': game.accentColor }}
          >
            <div className="game-card__icon-wrap" style={{ background: game.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', flexShrink: 0 }}>
              <img
                src={game.icon}
                alt={`${game.name} game icon`}
                width={48}
                height={48}
                style={{ borderRadius: '10px', display: 'block' }}
                className="game-card__img"
              />
            </div>
            <div className="game-card__info">
              <h3 className="game-card__name">{game.name}</h3>
              <p className="game-card__desc">{game.desc}</p>
              <div className="game-card__cta" style={{ marginTop: '8px', color: game.accentColor, fontWeight: '700', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>{game.cta}</span>
                <span className="game-card__arrow">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

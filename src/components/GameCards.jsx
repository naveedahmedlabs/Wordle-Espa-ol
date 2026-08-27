import React from 'react';

const CONTENT = {
  es: {
    heading: 'Juega a Otros Juegos Recomendados',
    games: [
      {
        name: 'Strands NYT',
        desc: 'Encuentra las palabras ocultas para descubrir el tema del día',
        icon: '/images/games/strands-icon.png',
        url: 'https://strandsgames.org/',
        cta: 'Jugar Strands Aquí',
        accentColor: '#4A90D9',
        bgColor: '#EBF4FF',
      },
      {
        name: 'Connections',
        desc: 'Agrupa 16 palabras en 4 categorías con una temática en común',
        icon: '/images/games/connections-icon.webp',
        url: 'https://unlimitedconnections.net/',
        cta: 'Jugar Connections Aquí',
        accentColor: '#9B8FD9',
        bgColor: '#F0EEFF',
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
            <div className="game-card__icon-wrap" style={{ background: game.bgColor }}>
              <img
                src={game.icon}
                alt={`${game.name} game icon`}
                width={56}
                height={56}
                style={{ borderRadius: '12px', objectFit: 'cover' }}
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

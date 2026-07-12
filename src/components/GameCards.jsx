const CONTENT = {

  uk: {
    heading: 'Play Other Games',
    games: [
      {
        name: 'Strands',
        desc: 'Uncover words to find the theme',
        icon: '/images/games/strands-icon.png',
        url: 'https://gamestrands.com/',
        accentColor: '#4A90D9',
        bgColor: '#EBF4FF',
      },
      {
        name: 'Connections',
        desc: 'Group words that share a common thread',
        icon: '/images/games/connections-icon.webp',
        url: 'https://unlimitedconnections.net/',
        accentColor: '#9B8FD9',
        bgColor: '#F0EEFF',
      },
      ]
  },

};

export default function GameCards({ language = 'en' }) {
  const c = CONTENT.uk;

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
                width={48}
                height={48}
                className="game-card__img"
              />
            </div>
            <div className="game-card__info">
              <h3 className="game-card__name">{game.name}</h3>
              <p className="game-card__desc">{game.desc}</p>
            </div>
            <span className="game-card__arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

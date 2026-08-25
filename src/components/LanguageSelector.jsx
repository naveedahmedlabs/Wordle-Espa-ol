import React from 'react';

export default function LanguageSelector({ currentLanguage = 'es' }) {
  const languages = [
    { 
      code: 'es', 
      name: 'Español', 
      path: '/', 
      flag: 'https://flagcdn.com/w40/es.png' 
    }
  ];

  return (
    <section className="select-lang section-indent" id="select-lang">
      <div className="container">
        <div className="select-lang__wrapper" style={{ justifyContent: 'center', marginTop: '20px' }}>
          {languages.map((lang) => (
            <a 
              key={lang.code} 
              href={lang.path} 
              className="select-lang__item"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = lang.path;
              }}
            >
              <button className={`select-lang__btn ${currentLanguage === lang.code ? 'is--active' : ''}`} style={{ border: 'none', background: 'transparent', padding: 0 }}>
                <img src={lang.flag} alt={lang.name} width="30" height="22" style={{ display: 'block' }} />
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

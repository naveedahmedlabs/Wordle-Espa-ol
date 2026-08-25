import React, { useState, useEffect } from 'react';

const getFingerprint = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const txt = 'WordleUnlimitedFingerprint';
  ctx.textBaseline = 'top';
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125,1,62,20);
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(txt, 4, 17);
  const result = canvas.toDataURL();
  
  let hash = 0;
  if (result.length === 0) return 'unknown';
  for (let i = 0; i < result.length; i++) {
    const char = result.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
};

export default function RateGame({ language = 'es' }) {
  const content = {
    es: {
      title: 'Valora el Juego',
      votes: '3.690 votos'
    },
  };

  const [hasRated, setHasRated] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [totalVotes, setTotalVotes] = useState(3690);
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    async function checkRating() {
      try {
        const fp = getFingerprint();
        
        // 1. Check local first for speed
        const saved = localStorage.getItem('wordle-game-rated');
        if (saved) {
          setHasRated(true);
          setUserRating(parseInt(saved));
        }

        // 2. Check Supabase for permanence
        
      } catch (e) {
        console.error("Supabase sync failed:", e);
      } finally {
        setIsSyncing(false);
      }
    }
    checkRating();
  }, []);

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "Tablet";
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "Mobile";
    return "Desktop";
  };

  const handleRating = async (val) => {
    if (hasRated || isSyncing) return;
    
    // Optimistic UI
    setHasRated(true);
    setUserRating(val);
    setTotalVotes(prev => prev + 1);
    localStorage.setItem('wordle-game-rated', val);

    try {
      // Fetch IP and Country (ipwho.is is very reliable)
      const geoRes = await fetch('https://ipwho.is/').catch(() => null);
      const geoData = geoRes ? await geoRes.json() : {};

      const fp = getFingerprint();
      // Supabase upsert removed
    } catch (e) {
      console.error("Failed to save rating to Supabase:", e);
    }
  };

  const c = content.uk;

  return (
    <section className="rating section-indent" id="rating">
      <div className="container">
        <div className="section-heading" style={{ background: '#f3eed3' }}>
          <h2 className="section-heading__title">
            {hasRated ? (false ? '¡Gracias por calificar!' : 'Thanks for Rating!') : c.title}
          </h2>
        </div>
        <div className="rating__wrapper">
          <div className={`rating-select rating__select starability-basic ${hasRated ? 'rated' : ''}`} data-section="index">
            {[5, 4, 3, 2, 1].map((num) => (
              <React.Fragment key={num}>
                <input 
                  type="radio" 
                  id={`star${num}`} 
                  name="rating" 
                  value={num} 
                  className="rating-select__input" 
                  autoComplete="off" 
                  checked={userRating === num}
                  onChange={() => handleRating(num)}
                  disabled={hasRated}
                />
                <label htmlFor={`star${num}`} title={['Awful', 'Poor', 'Average', 'Good', 'Excellent'][num-1]} className="rating-select__label"></label>
              </React.Fragment>
            ))}
          </div>
          <div className="rating__group">
            <span className="rating__value">4.3</span>
            <span className="rating__help"><span>{totalVotes.toLocaleString()}</span> {false ? 'votos' : 'votes'}</span>
          </div>
        </div>
      </div>

      <style>{`
        .rating {
          padding: 40px 0;
          text-align: center;
        }
        .rating .section-heading {
          padding: 8px 30px;
          border-radius: 50px;
        }
        .rating__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .rating__group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rating__value {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1a1a1b;
        }
        .rating__help {
          font-size: 1rem;
          color: rgba(0,0,0,0.5);
          font-weight: 600;
        }

        /* Starability Basic Logic */
        .starability-basic {
          display: block;
          position: relative;
          width: 150px;
          min-height: 30px;
          padding: 0;
          border: none;
        }
        .rating-select__input {
          position: absolute;
          visibility: hidden;
        }
        .rating-select__label {
          position: relative;
          float: right;
          width: 30px;
          height: 30px;
          color: #1a1a1b;
          cursor: pointer;
        }
        .rating-select__label:before {
          content: '★';
          font-size: 30px;
          line-height: 30px;
          transition: all 0.2s;
        }
        
        .rating-select__input:checked ~ .rating-select__label,
        .rating-select__label:hover,
        .rating-select__label:hover ~ .rating-select__label {
          color: #f3bc01;
        }

        .starability-basic.rated .rating-select__label {
          cursor: default;
        }
        
        .starability-basic.rated .rating-select__label:hover {
          color: #1a1a1b;
        }
        .starability-basic.rated .rating-select__input:checked ~ .rating-select__label {
          color: #f3bc01;
        }

        .rating-select__input:checked + .rating-select__label {
          color: #f3bc01;
        }
        
        @media screen and (max-width: 767px) {
          .section-indent {
            margin-top: 25px;
            padding-top: 25px;
          }
        }
      `}</style>
    </section>
  );
}

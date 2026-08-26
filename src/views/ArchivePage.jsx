'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import { getDailyWordEs } from '../wordDbEs';
import { getNYTDate, getWordleNumber } from '../dateUtils';

const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function formatDateISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatDateSeed(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}${m}${day}`;
}

function formatSpanishDate(d) {
  return d.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function getDifficultyBadgeColor(diff) {
  switch (diff) {
    case 'Easy': return '#63AF4E';
    case 'Medium': return '#D4A843';
    case 'Hard': return '#E05D52';
    case 'Ultra-Hard': return '#9B51E0';
    default: return '#7A8199';
  }
}

function translateDifficulty(diff) {
  switch (diff) {
    case 'Easy': return 'Fácil';
    case 'Medium': return 'Media';
    case 'Hard': return 'Difícil';
    case 'Ultra-Hard': return 'Extrema';
    default: return diff || 'Normal';
  }
}

const FAQS_ARCHIVE = [
  {
    q: '¿Qué es el Archivo de Wordle en Español?',
    a: 'El Archivo de Wordle es una biblioteca completa que recopila todos los retos diarios pasados de Wordle en español desde el inicio oficial (1 de enero de 2024). Te permite jugar y revivir cualquier partida que te hayas perdido o simplemente entrenar con desafíos anteriores.'
  },
  {
    q: '¿Cómo puedo jugar un puzle de una fecha específica?',
    a: 'Puedes hacer clic en cualquier tarjeta del calendario de esta página o navegar directamente a la URL con el formato: domin.com/?date=AAAA-MM-DD (por ejemplo: /?date=2026-08-20). El tablero cargará automáticamente la palabra secreta de ese día.'
  },
  {
    q: '¿Jugar puzles del archivo afecta a mi racha actual?',
    a: 'No. Las partidas jugadas a través del archivo de fechas pasadas se guardan de forma aislada y no interrumpen ni penalizan tu racha activa del Wordle de Hoy.'
  },
  {
    q: '¿Con qué frecuencia se añaden nuevos puzles al archivo?',
    a: 'El archivo se actualiza automáticamente cada día a las 00:00 (medianoche) hora local con la nueva Palabra del Día.'
  },
  {
    q: '¿Puedo ver las pistas de un puzle del archivo si me quedo atascado?',
    a: '¡Sí! Cada reto archivado incluye un enlace directo a su solución y pistas sin spoilers (/wordle-respuesta-hoy/?seed=AAAAMMDD) para ayudarte a deducir la palabra paso a paso.'
  }
];

export default function ArchivePage({ language = 'es', onBack }) {
  const today = useMemo(() => getNYTDate(), []);
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [difficultyFilter, setDifficultyFilter] = useState('ALL');
  const [searchNumber, setSearchNumber] = useState('');
  const [customDate, setCustomDate] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Generate available years from 2024 to current year
  const availableYears = useMemo(() => {
    const years = [];
    for (let y = currentYear; y >= 2024; y--) {
      years.push(y);
    }
    return years;
  }, [currentYear]);

  // Generate list of days for selected year and month
  const monthPuzzles = useMemo(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const list = [];

    for (let day = daysInMonth; day >= 1; day--) {
      const d = new Date(selectedYear, selectedMonth, day);
      // Don't show future dates
      if (d > today) continue;

      const dailyInfo = getDailyWordEs(d);
      const puzzleNum = getWordleNumber(d);
      const isoDate = formatDateISO(d);
      const seed = formatDateSeed(d);

      list.push({
        date: d,
        isoDate,
        seed,
        puzzleNum,
        difficulty: dailyInfo.difficulty,
        word: dailyInfo.word
      });
    }

    return list;
  }, [selectedYear, selectedMonth, today]);

  // Filter puzzles based on difficulty and search
  const filteredPuzzles = useMemo(() => {
    return monthPuzzles.filter((item) => {
      if (difficultyFilter !== 'ALL' && item.difficulty !== difficultyFilter) {
        return false;
      }
      if (searchNumber.trim()) {
        const query = searchNumber.trim().replace('#', '');
        const numMatch = String(item.puzzleNum).includes(query);
        const dateMatch = item.isoDate.includes(query);
        if (!numMatch && !dateMatch) return false;
      }
      return true;
    });
  }, [monthPuzzles, difficultyFilter, searchNumber]);

  const handleCustomDateSubmit = (e) => {
    e.preventDefault();
    if (!customDate) return;
    window.location.href = `/?date=${customDate}`;
  };

  const totalPuzzlesCount = useMemo(() => {
    const epoch = new Date(2024, 0, 1);
    const diff = today - epoch;
    return Math.max(1, Math.floor(diff / (1000 * 60 * 60 * 24)) + 1);
  }, [today]);

  return (
    <div className="archive-container">
      {/* Breadcrumbs */}
      <div className="archive-breadcrumbs-wrap">
        <Breadcrumbs
          language="es"
          items={[
            { name: 'Wordle Español', path: '/' },
            { name: 'Archivo de Puzles' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="archive-hero">
        <div className="archive-hero__badge-row">
          <span className="archive-hero__badge">
            📚 Archivo Histórico
          </span>
          <span className="archive-hero__badge archive-hero__badge--highlight">
            {totalPuzzlesCount} Puzles Disponibles
          </span>
          <span className="archive-hero__badge">
            Desde 1 Ene 2024
          </span>
        </div>

        <h1 className="archive-hero__title">
          Archivo de Wordle en Español — Juega Puzles Anteriores
        </h1>

        <p className="archive-hero__desc">
          Explora la colección completa de retos diarios de Wordle en español. Selecciona cualquier día del calendario o introduce una fecha específica para jugar el desafío oficial de ese día.
        </p>

        {/* Quick Date Jump Form */}
        <form onSubmit={handleCustomDateSubmit} className="archive-quick-jump">
          <label htmlFor="custom-date-input" className="archive-quick-jump__label">
            🗓️ Ir directo a una fecha:
          </label>
          <div className="archive-quick-jump__controls">
            <input
              id="custom-date-input"
              type="date"
              min="2024-01-01"
              max={formatDateISO(today)}
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
              className="archive-date-input"
            />
            <button type="submit" className="archive-btn archive-btn--primary" disabled={!customDate}>
              Jugar Esta Fecha →
            </button>
          </div>
        </form>
      </section>

      {/* Filter & Navigation Bar */}
      <section className="archive-controls-card">
        <div className="archive-filter-row">
          {/* Year selector */}
          <div className="archive-control-group">
            <label className="archive-control-label">Año:</label>
            <div className="archive-pill-group">
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`archive-pill ${selectedYear === yr ? 'archive-pill--active' : ''}`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty filter */}
          <div className="archive-control-group">
            <label className="archive-control-label">Dificultad:</label>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="archive-select"
            >
              <option value="ALL">Todas las dificultades</option>
              <option value="Easy">Fácil</option>
              <option value="Medium">Media</option>
              <option value="Hard">Difícil</option>
              <option value="Ultra-Hard">Extrema</option>
            </select>
          </div>

          {/* Search by # or date */}
          <div className="archive-control-group">
            <label className="archive-control-label">Buscar # o fecha:</label>
            <input
              type="text"
              placeholder="Ej. 1894 o 2026-08"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
              className="archive-text-input"
            />
          </div>
        </div>

        {/* Month selector tabs */}
        <div className="archive-months-scroll">
          {MONTHS_ES.map((mName, mIdx) => {
            const isFutureMonth = selectedYear === currentYear && mIdx > currentMonth;
            if (isFutureMonth) return null;

            const isSelected = selectedMonth === mIdx;
            return (
              <button
                key={mIdx}
                type="button"
                onClick={() => setSelectedMonth(mIdx)}
                className={`archive-month-tab ${isSelected ? 'archive-month-tab--active' : ''}`}
              >
                {mName}
              </button>
            );
          })}
        </div>
      </section>

      {/* Puzzles Grid */}
      <section className="archive-grid-section">
        <div className="archive-grid-header">
          <h2 className="archive-grid-title">
            Retos de {MONTHS_ES[selectedMonth]} {selectedYear} ({filteredPuzzles.length} puzles)
          </h2>
          <span className="archive-grid-subtitle">
            Haz clic en "Jugar" para abrir la partida con URL directa: <code>/?date=AAAA-MM-DD</code>
          </span>
        </div>

        {filteredPuzzles.length === 0 ? (
          <div className="archive-empty">
            <p>No se encontraron puzles que coincidan con los filtros seleccionados.</p>
            <button
              type="button"
              onClick={() => { setDifficultyFilter('ALL'); setSearchNumber(''); }}
              className="archive-btn archive-btn--secondary"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="archive-cards-grid">
            {filteredPuzzles.map((item) => {
              const diffColor = getDifficultyBadgeColor(item.difficulty);
              const isCurrentDay = item.isoDate === formatDateISO(today);

              return (
                <div key={item.isoDate} className={`puzzle-card ${isCurrentDay ? 'puzzle-card--today' : ''}`}>
                  <div className="puzzle-card__top">
                    <span className="puzzle-card__num">
                      Wordle #{item.puzzleNum}
                    </span>
                    <span
                      className="puzzle-card__diff"
                      style={{ background: diffColor }}
                    >
                      <span className="puzzle-card__dot"></span>
                      {translateDifficulty(item.difficulty)}
                    </span>
                  </div>

                  <div className="puzzle-card__date">
                    {formatSpanishDate(item.date)}
                  </div>

                  <div className="puzzle-card__url-preview">
                    <code>/?date={item.isoDate}</code>
                  </div>

                  <div className="puzzle-card__actions">
                    <Link
                      href={`/?date=${item.isoDate}`}
                      className="puzzle-card__play-btn"
                    >
                      🎮 Jugar Puzle
                    </Link>

                    <Link
                      href={`/wordle-respuesta-hoy/?seed=${item.seed}`}
                      className="puzzle-card__hint-btn"
                      title="Ver pistas y solución sin spoilers"
                    >
                      💡 Pistas
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* SEO Content & Complete Guide Section */}
      <section className="archive-content-section">
        <article className="archive-article">
          <h2>¿Qué es y cómo funciona el Archivo de Wordle en Español?</h2>
          <p>
            El <strong>Archivo de Wordle en Español</strong> es una herramienta pensada para entusiastas de los juegos de palabras que desean practicar, recuperar días perdidos o simplemente entrenar su vocabulario sin esperar 24 horas entre cada desafío oficial.
          </p>
          <p>
            A diferencia del modo Ilimitado —que genera palabras aleatorias—, el archivo contiene el <strong>historial cronológico exacto</strong> de todas las palabras oficiales asignadas a cada día del calendario desde el inicio de la plataforma. Cada jugador que abra la fecha <code>/?date=2026-08-20</code> se enfrentará a la misma palabra exacta con idéntica dificultad.
          </p>

          <h2>Cómo jugar cualquier puzle anterior usando la URL con fecha</h2>
          <p>
            Hemos diseñado un sistema de enlaces directos para que puedas compartir cualquier reto del pasado con tus amigos o guardarlo en tus marcadores. Para jugar cualquier día del historial, simplemente utiliza el parámetro <code>?date=AAAA-MM-DD</code> al final del dominio:
          </p>
          <ul className="archive-guide-list">
            <li><strong>Formato estándar:</strong> <code>https://lapalabradeldia.co/?date=2026-08-15</code></li>
            <li><strong>Acceso a solución y pistas:</strong> <code>https://lapalabradeldia.co/wordle-respuesta-hoy/?seed=20260815</code></li>
          </ul>

          <h2>Beneficios de entrenar con el Archivo Histórico</h2>
          <div className="archive-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__icon">📈</div>
              <h3>Entrenamiento Progresivo</h3>
              <p>Filtra por dificultad (Fácil, Media, Difícil, Extrema) para acostumbrar tu mente a combinaciones de letras complejas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">🔁</div>
              <h3>Patrones de Letras Repetidas</h3>
              <p>Revisa puzles pasados de alta dificultad para aprender a detectar consonantes dobles y vocales duplicadas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">🏆</div>
              <h3>Retos con Amigos</h3>
              <p>Copia el enlace de un puzle antiguo y compártelo para ver quién lo resuelve en menos intentos.</p>
            </div>
          </div>

          <h2>Consejos para Resolver Puzles Antiguos</h2>
          <ol className="archive-tips-list">
            <li><strong>Comienza con una palabra inicial rica en vocales:</strong> Palabras como <code>AIRES</code>, <code>OREAS</code> o <code>TENIA</code> te revelan rápidamente la estructura fonética.</li>
            <li><strong>Reubica las pistas amarillas sin demora:</strong> En español, ciertas letras suelen concentrarse al final (-S, -N, -R, -L) o en la segunda posición.</li>
            <li><strong>Usa las pistas progresivas si te bloqueas:</strong> Si llegas al 5º intento sin claridad, consulta la página de pistas de esa fecha para obtener indicios sin arruinar la solución.</li>
          </ol>
        </article>

        {/* FAQs Accordion */}
        <div className="archive-faq-wrap">
          <h2 className="archive-faq-title">Preguntas Frecuentes sobre el Archivo</h2>
          <div className="archive-faq-list">
            {FAQS_ARCHIVE.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`archive-faq-item ${isOpen ? 'archive-faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="archive-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="archive-faq-chevron">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="archive-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scoped CSS — Clean, Flat, Matching Brand Green #63AF4E & Rubik, Zero Box Shadows */}
      <style>{`
        .archive-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 10px 16px 80px;
          font-family: inherit;
          color: var(--color-text-dark, #252A34);
          line-height: 1.6;
          position: relative;
        }

        .archive-breadcrumbs-wrap {
          margin-bottom: 16px;
        }

        /* Hero */
        .archive-hero {
          position: relative;
          background: rgba(99, 175, 78, 0.08);
          border: 1px solid rgba(99, 175, 78, 0.3);
          border-radius: 14px;
          padding: 24px 20px;
          margin-bottom: 20px;
          box-shadow: none;
        }

        .archive-hero__badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 14px;
        }

        .archive-hero__badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text-dark, #252A34);
          box-shadow: none;
        }

        .archive-hero__badge--highlight {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border-color: var(--color-correct, #63AF4E);
        }

        .archive-hero__title {
          font-size: clamp(1.5rem, 3.5vw, 1.9rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-hero__desc {
          font-size: 1rem;
          color: var(--color-text-secondary, #7A8199);
          margin: 0 0 18px 0;
          max-width: 760px;
        }

        .archive-quick-jump {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          padding: 14px 16px;
          border-radius: 10px;
        }

        .archive-quick-jump__label {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
        }

        .archive-quick-jump__controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        .archive-date-input {
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--color-border, #DCE1ED);
          font-family: inherit;
          font-size: 14px;
          color: var(--color-text-dark, #252A34);
          background: var(--color-bg, #F5F5F4);
          outline: none;
        }

        .archive-date-input:focus {
          border-color: var(--color-correct, #63AF4E);
        }

        /* Controls Card */
        .archive-controls-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 24px;
          box-shadow: none;
        }

        .archive-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: flex-end;
          margin-bottom: 16px;
        }

        .archive-control-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .archive-control-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-secondary, #7A8199);
        }

        .archive-pill-group {
          display: flex;
          gap: 6px;
        }

        .archive-pill {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-tab-bg, #EBEDF3);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text, #414A5E);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .archive-pill--active {
          background: var(--color-correct, #63AF4E);
          border-color: var(--color-correct, #63AF4E);
          color: #ffffff;
        }

        .archive-select,
        .archive-text-input {
          padding: 7px 12px;
          border-radius: 6px;
          border: 1px solid var(--color-border, #DCE1ED);
          font-family: inherit;
          font-size: 13px;
          color: var(--color-text-dark, #252A34);
          background: var(--color-bg, #F5F5F4);
          outline: none;
        }

        .archive-select:focus,
        .archive-text-input:focus {
          border-color: var(--color-correct, #63AF4E);
        }

        /* Month Tabs */
        .archive-months-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-top: 10px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          scrollbar-width: none;
        }

        .archive-months-scroll::-webkit-scrollbar {
          display: none;
        }

        .archive-month-tab {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          background: var(--color-bg, #F5F5F4);
          border: 1px solid var(--color-border, #DCE1ED);
          color: var(--color-text, #414A5E);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .archive-month-tab--active {
          background: var(--color-text-dark, #252A34);
          border-color: var(--color-text-dark, #252A34);
          color: #ffffff;
        }

        /* Grid Section */
        .archive-grid-section {
          margin-bottom: 36px;
        }

        .archive-grid-header {
          margin-bottom: 16px;
        }

        .archive-grid-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 0 4px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-grid-subtitle {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
        }

        .archive-grid-subtitle code {
          background: var(--color-tab-bg, #EBEDF3);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--color-correct, #63AF4E);
          font-weight: 700;
        }

        .archive-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }

        /* Puzzle Card */
        .puzzle-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.15s ease;
          box-shadow: none;
        }

        .puzzle-card:hover {
          border-color: var(--color-correct, #63AF4E);
        }

        .puzzle-card--today {
          border-color: var(--color-correct, #63AF4E);
          background: rgba(99, 175, 78, 0.04);
        }

        .puzzle-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .puzzle-card__num {
          font-size: 13px;
          font-weight: 800;
          color: var(--color-text-dark, #252A34);
        }

        .puzzle-card__diff {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
        }

        .puzzle-card__dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ffffff;
        }

        .puzzle-card__date {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text, #414A5E);
          text-transform: capitalize;
        }

        .puzzle-card__url-preview {
          font-size: 11px;
          color: var(--color-text-secondary, #7A8199);
        }

        .puzzle-card__url-preview code {
          background: var(--color-bg, #F5F5F4);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .puzzle-card__actions {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .puzzle-card__play-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--color-correct, #63AF4E);
          color: #ffffff !important;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-correct, #63AF4E);
          transition: background 0.15s ease;
        }

        .puzzle-card__play-btn:hover {
          background: #549a41;
        }

        .puzzle-card__hint-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34) !important;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none !important;
          border: 1px solid var(--color-border, #DCE1ED);
          transition: background 0.15s ease;
        }

        .puzzle-card__hint-btn:hover {
          background: #dfe2ea;
        }

        /* Buttons */
        .archive-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: background 0.15s ease;
        }

        .archive-btn--primary {
          background: var(--color-correct, #63AF4E);
          color: #ffffff;
          border: 1px solid var(--color-correct, #63AF4E);
        }

        .archive-btn--primary:hover:not(:disabled) {
          background: #549a41;
        }

        .archive-btn--primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .archive-btn--secondary {
          background: var(--color-tab-bg, #EBEDF3);
          color: var(--color-text-dark, #252A34);
          border: 1px solid var(--color-border, #DCE1ED);
        }

        .archive-empty {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
        }

        /* SEO Article */
        .archive-content-section {
          margin-top: 40px;
          border-top: 1px solid var(--color-border, #DCE1ED);
          padding-top: 30px;
        }

        .archive-article h2 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 24px 0 10px 0;
          color: var(--color-text-dark, #252A34);
        }

        .archive-article p {
          font-size: 14px;
          color: var(--color-text, #414A5E);
          margin-bottom: 14px;
        }

        .archive-guide-list,
        .archive-tips-list {
          padding-left: 20px;
          margin-bottom: 20px;
          font-size: 14px;
          color: var(--color-text, #414A5E);
        }

        .archive-guide-list li,
        .archive-tips-list li {
          margin-bottom: 8px;
        }

        .archive-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
          margin: 20px 0 24px 0;
        }

        .benefit-card {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 10px;
          padding: 16px;
        }

        .benefit-card__icon {
          font-size: 1.8rem;
          margin-bottom: 6px;
        }

        .benefit-card h3 {
          font-size: 14px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: var(--color-text-dark, #252A34);
        }

        .benefit-card p {
          font-size: 13px;
          color: var(--color-text-secondary, #7A8199);
          margin: 0;
        }

        /* FAQ */
        .archive-faq-wrap {
          margin-top: 30px;
        }

        .archive-faq-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .archive-faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .archive-faq-item {
          background: var(--color-surface, #ffffff);
          border: 1px solid var(--color-border, #DCE1ED);
          border-radius: 8px;
          overflow: hidden;
        }

        .archive-faq-item--open {
          border-color: var(--color-correct, #63AF4E);
        }

        .archive-faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-dark, #252A34);
          cursor: pointer;
        }

        .archive-faq-chevron {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-correct, #63AF4E);
          margin-left: 10px;
        }

        .archive-faq-answer {
          padding: 0 16px 14px;
          font-size: 13px;
          color: var(--color-text, #414A5E);
          line-height: 1.5;
        }

        .archive-faq-answer p {
          margin: 0;
        }

        @media (max-width: 600px) {
          .archive-hero {
            padding: 18px 14px;
          }
          .archive-controls-card {
            padding: 14px;
          }
          .archive-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

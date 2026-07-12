import { useState, useEffect, useRef } from 'react';
import Tile from './Tile';

export default function Grid({ guesses, currentGuess, currentRow, shakeRow, flipRow, bounceRow, wordLength = 5 }) {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    const tiles = [];

    if (i < guesses.length) {
      // Evaluated row
      for (let j = 0; j < wordLength; j++) {
        tiles.push(
          <Tile
            key={j}
            letter={guesses[i].letters[j]}
            state={guesses[i].states[j]}
            delay={j * 300}
            shouldFlip={flipRow === i}
            shouldBounce={bounceRow === i}
          />
        );
      }
    } else if (i === currentRow) {
      // Current row being typed
      for (let j = 0; j < wordLength; j++) {
        tiles.push(
          <Tile
            key={j}
            letter={currentGuess[j] || ''}
            state="tbd"
            delay={0}
            shouldFlip={false}
            shouldBounce={false}
          />
        );
      }
    } else {
      // Empty future rows
      for (let j = 0; j < wordLength; j++) {
        tiles.push(
          <Tile
            key={j}
            letter=""
            state="empty"
            delay={0}
            shouldFlip={false}
            shouldBounce={false}
          />
        );
      }
    }

    const rowClass = `grid__row${shakeRow === i ? ' grid__row--shake' : ''}`;

    rows.push(
      <div 
        key={i} 
        className={rowClass}
        style={{ gridTemplateColumns: `repeat(${wordLength}, 1fr)` }}
      >
        {tiles}
      </div>
    );
  }

  return (
    <div 
      className="grid" 
      id="game-grid" 
      style={{ 
        maxWidth: `${Math.min(wordLength * 55, 550)}px`, 
        width: '95%', 
        margin: '0 auto',
        gap: wordLength > 8 ? '4px' : '5px' 
      }}
    >
      {rows}
    </div>
  );
}

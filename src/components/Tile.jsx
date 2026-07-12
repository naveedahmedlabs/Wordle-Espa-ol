import { useEffect, useRef } from 'react';

export default function Tile({ letter, state, delay, shouldFlip, shouldBounce }) {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFlip && ref.current) {
      const tile = ref.current;
      tile.style.animationDelay = `${delay}ms`;
      tile.classList.add('tile--flip');

      // Apply color at midpoint of flip
      const colorTimeout = setTimeout(() => {
        tile.classList.remove('tile--filled');
        if (state === 'correct') tile.classList.add('tile--correct');
        else if (state === 'present') tile.classList.add('tile--present');
        else if (state === 'absent') tile.classList.add('tile--absent');
      }, delay + 250);

      const cleanup = setTimeout(() => {
        tile.classList.remove('tile--flip');
        tile.style.animationDelay = '';
      }, delay + 600);

      return () => {
        clearTimeout(colorTimeout);
        clearTimeout(cleanup);
      };
    }
  }, [shouldFlip, state, delay]);

  useEffect(() => {
    if (shouldBounce && ref.current) {
      const tile = ref.current;
      tile.style.animationDelay = `${delay}ms`;
      tile.classList.add('tile--bounce');

      const cleanup = setTimeout(() => {
        tile.classList.remove('tile--bounce');
        tile.style.animationDelay = '';
      }, delay + 1100);

      return () => clearTimeout(cleanup);
    }
  }, [shouldBounce, delay]);

  let className = 'tile';
  if (letter && !shouldFlip && state === 'tbd') className += ' tile--filled';
  if (!shouldFlip && state === 'correct') className += ' tile--correct';
  if (!shouldFlip && state === 'present') className += ' tile--present';
  if (!shouldFlip && state === 'absent') className += ' tile--absent';

  return (
    <div ref={ref} className={className}>
      {letter}
    </div>
  );
}

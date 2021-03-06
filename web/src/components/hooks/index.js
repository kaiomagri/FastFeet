import { useEffect } from 'react';

export function useOnClickOut(ref, handler) {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
}

import { useEffect } from 'react';

/** Locks body scroll while `locked` is true (used by the mobile menu). */
export const useLockBody = (locked) => {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
};

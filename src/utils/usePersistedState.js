import React, { useState, useEffect } from 'react';

export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue) {
      return JSON.parse(storageValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

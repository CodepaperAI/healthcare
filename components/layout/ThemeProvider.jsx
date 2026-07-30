'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'phc-theme';
const ThemeContext = createContext(null);

/**
 * Theme state.
 *
 * On a first visit the system preference wins. Once the visitor chooses a
 * theme it is stored and respected on every later visit. The `dark` class is
 * applied to <html> before paint by the inline script in app/layout.js, so
 * there is no flash of the wrong theme on load.
 */
export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState('system');

  // Read the stored preference after mount — localStorage is unavailable on
  // the server, so this cannot run during render.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setPreference(stored);
      }
    } catch {
      // Storage blocked (private mode, strict settings) — fall back to system.
    }
  }, []);

  // Apply the resolved theme and keep following the OS while on "system".
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = () => {
      const isDark = preference === 'dark' || (preference === 'system' && query.matches);
      document.documentElement.classList.toggle('dark', isDark);
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    };

    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, [preference]);

  const choose = useCallback((next) => {
    setPreference(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures — the theme still applies for this session.
    }
  }, []);

  const toggle = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark');
    choose(isDark ? 'light' : 'dark');
  }, [choose]);

  return (
    <ThemeContext.Provider value={{ preference, choose, toggle }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside <ThemeProvider>');
  }
  return context;
}

/**
 * Runs before first paint to set the theme class. Kept as a string so it can
 * be injected with dangerouslySetInnerHTML in the root layout.
 */
export const themeInitScript = `
(function(){
  try{
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var isDark = stored === 'dark' || ((!stored || stored === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) { document.documentElement.classList.add('dark'); }
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }catch(e){}
})();
`;

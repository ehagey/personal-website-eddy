import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  retro: boolean;
  toggleRetro: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
  retro: false,
  toggleRetro: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return (stored === 'dark' || stored === 'light') ? stored : 'light';
  });

  const [retro, setRetro] = useState<boolean>(() => {
    return localStorage.getItem('retro') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('retro', retro);
    localStorage.setItem('retro', String(retro));
  }, [retro]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleRetro = () => setRetro(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, retro, toggleRetro }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

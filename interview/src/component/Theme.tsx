import React,{useState,useEffect} from "react";

const ThemeToggle: React.FC = () => {
  // --- STATE ---
  // `theme` state holds either 'light' or 'dark'.
  // We initialize it by checking localStorage first, then the user's system preference.
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // --- EFFECTS ---
  // This `useEffect` applies the theme change to the document and localStorage.
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); // This effect runs whenever the `theme` state changes.

  // --- HANDLER FUNCTION ---
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // --- JSX ---
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle
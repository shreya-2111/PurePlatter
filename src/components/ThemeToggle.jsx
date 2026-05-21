import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-neutral-900/90 dark:text-white"
    >
      {theme === 'light' ? (
        <HiMiniMoon className="text-lg" />
      ) : (
        <HiMiniSun className="text-lg text-amber-400" />
      )}
    </button>
  );
};

export default ThemeToggle;

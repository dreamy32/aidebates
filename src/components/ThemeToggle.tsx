'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // return (
  //   <button
  //     onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  //     className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
  //     aria-label="Toggle theme"
  //   >
  //     <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //     <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //   </button>
  // );
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-primary/10 hover:text-primary text-text transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 hidden dark:block" />
      <Moon className="w-5 h-5 dark:hidden" />
    </button>
  );
}

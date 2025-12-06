import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';

import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const ModeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) return saved;

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first
    root.classList.remove('light');
    root.classList.remove('dark');

    // Add current theme class
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const isDark = theme === 'dark';

  return (
    <div className="items-center relative flex gap-x-2">
      <Switch
        checked={theme === 'dark'}
        className="data-[state=checked]:bg-blue-400 bg-gray-300 [&>span]:bg-white [&>span]:dark:bg-slate-900  border-gray-100 cursor-pointer"
        onCheckedChange={toggleTheme}
      />

      {isDark ? (
        <Moon className="w-4 h-4 text-sky-800 animate-in fade-in spin-in-180 duration-300" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-600 animate-in fade-in spin-in-180 duration-300" />
      )}
    </div>
  );
};

export default ModeToggle;

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { FC } from "react";

const ThemeToggleButton: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log('ThemeToggleButton mounted', { theme, resolvedTheme, systemTheme });
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('Theme changed:', { theme, resolvedTheme, systemTheme });
    }
  }, [theme, resolvedTheme, systemTheme, mounted]);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md bg-transparent" aria-hidden="true" />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    console.log(`Toggling theme from ${theme} (resolved: ${resolvedTheme}) to ${newTheme}`);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        fixed bottom-6 right-6 z-50
        inline-flex items-center justify-center
        w-12 h-12 rounded-full
        text-slate-700 dark:text-slate-200
        bg-slate-200 dark:bg-slate-700
        hover:bg-slate-300 dark:hover:bg-slate-600
        focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2
        dark:focus:ring-offset-slate-900
        shadow-lg hover:shadow-xl
        transition-all duration-200
      "
      type="button"
    >
      {isDark ? (
        <Sun className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Moon className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggleButton;

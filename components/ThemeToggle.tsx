"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";


export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
        </button>
    );
}
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    
    return (
        <button
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
        </button>
    );
}
"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm">
                <div className="w-4 h-4" />
                <span className="hidden sm:inline">Theme</span>
            </button>
        );
    }

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
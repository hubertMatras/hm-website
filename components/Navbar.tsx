"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          HM
        </Link>
        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  className="hover:underline underline-offset-4"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

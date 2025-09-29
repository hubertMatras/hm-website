"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/60">
      <nav className="max-w-none w-full px-4 flex h-18 items-center justify-between">
        <Link href="/" className="font-semibold">
          <Image
            src="/myLogo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
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
          
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white backdrop-blur">
          <ul className="px-4 py-2 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  className="block px-3 py-2 text-sm text-slate-900 hover:bg-slate-200 rounded-md transition-colors"
                  href={l.href}
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

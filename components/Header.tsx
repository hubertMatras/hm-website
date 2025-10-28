"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.querySelector("#about");
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-green/80">
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
          <ul className="hidden items-center gap-4 text-sm text-light-green md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  className="hover:underline underline-offset-4 cursor-pointer"
                  onClick={() => scrollToSection(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-light-green hover:bg-green/60 transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-green/60 bg-white backdrop-blur md:hidden">
          <ul className="px-4 py-2 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  className="block px-3 py-2 text-sm text-green hover:bg-green/60 hover:text-white rounded-md transition-colors w-full text-left"
                  onClick={() => scrollToSection(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

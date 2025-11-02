"use client";
import { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
  date?: string;
  defaultOpen?: boolean;
  title: string;
}

export default function Accordion({
  children,
  date = "",
  defaultOpen = false,
  title,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggleAccordion = () => setIsOpen((v) => !v);

  return (
    <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/40 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
      <button
        onClick={toggleAccordion}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between px-5 md:px-6 py-4 md:py-5 bg-gradient-to-r from-green/90 to-green/80 backdrop-blur-md text-white hover:from-green hover:to-green/90 transition-all duration-300">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-base">
            {date && <span className="opacity-95 hidden lg:inline">{date}</span>}
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/60 backdrop-blur-md text-background-dark px-5 md:px-6 py-5 md:py-6 border-t border-white/30 dark:text-green">
          {children}
        </div>
      </div>
    </div>
  );
}

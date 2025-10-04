"use client";
import Link from "next/link";
import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="w-full h-full flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          From a professional Footballer to a Software Engineer
          <br />
          <br />I am <span className="text-blue-600">Hubert</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-prose">
          I build accessible, performant web apps with React, Next.js, and
          TypeScript.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border-2 border-blue-600 px-5 py-3 hover:bg-slate-200"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border-2 border-blue-600 px-5 py-3 hover:bg-slate-200"
          >
            Contact me
          </Link>
        </div>
      </div>
      
      {/* Footer at Bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
}

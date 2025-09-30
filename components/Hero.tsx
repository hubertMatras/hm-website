"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-screen grid gap-4 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-8 md:px-16 bg-white">
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
      <div className="flex items-center justify-center bg-slate-50">
        <div className="relative aspect-[3/4] w-3/5 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/avatar.png"
            alt="Hubert Matras"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

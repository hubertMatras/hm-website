"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-none w-full px-4 py-20 md:py-28">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="h1">Hubert Matras</h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Junior Software Engineer
          </p>
          <p className="mt-4 max-w-prose muted">
            I build accessible, performant web apps with React, Next.js, and
            TypeScript.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:bg-brand-600"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border">
            <Image
              src="/avatar.png"
              alt="Hubert Matras"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

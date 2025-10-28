"use client";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion";
import Section from "./Section";
import { education, work, certifications } from "../data";

export default function Experience() {
  return (
    <Section id="experience">
      {/* Section title */}
      <div className="mb-12 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-green">
          EXPERIENCE
        </h1>
      </div>

      <div className="mx-auto w-full space-y-8 md:space-y-10">
        {/* WORK */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl font-semibold text-green">Work Experience</h2>

          {work.map((w) => (
            <Accordion
              key={`${w.title}-${w.org}`}
              date={`${w.start} – ${w.end}`}
              title={`${w.title} @ ${w.org}`}
            >
              {/* === Card Body === */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <aside
                  className="
                    md:col-span-4 rounded-xl border border-green/20 bg-light-green/40
                    p-4 md:sticky md:top-4 md:self-start
                  "
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src={w.image}
                      alt={`${w.org} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-lg object-contain"
                      priority
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-green truncate">{w.org}</p>
                      <p className="text-xs text-green/70">{w.start} – {w.end}</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-green/20 my-3" />

                  {w.location && (
                    <div className="mb-2 flex items-start gap-2 text-sm">
                      <svg
                        className="h-4 w-4 shrink-0 text-green"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{w.location}</span>
                    </div>
                  )}

                  {w.href && (
                    <div className="mb-2 flex items-start gap-2 text-sm">
                      <svg
                        className="h-4 w-4 shrink-0 text-green"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9c2.2 0 4.2.8 5.8 2.1" />
                        <path d="M21 12a9 9 0 0 1-9 9c-2.2 0-4.2-.8-5.8-2.1" />
                        <path d="M2 16h20" />
                        <path d="M2 8h20" />
                      </svg>
                      <Link
                        href={w.href}
                        target="_blank"
                        className="underline underline-offset-4 hover:opacity-80 break-words"
                      >
                        {new URL(w.href).hostname}
                      </Link>
                    </div>
                  )}
                </aside>

                {/* Main content */}
                <div className="md:col-span-8 space-y-5">              
                  <div className="space-y-3 text-base leading-relaxed">
                    {w.bullets.map((l, i) => (
                      <div key={`${w.title}-bullet-${i}`} className="flex gap-3">
                        <svg
                          className="mt-1 h-4 w-4 shrink-0 text-green"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <p>{l}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  {w.techStack?.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-green/80">
                        Tech Stack
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {w.techStack.map((ts) => (
                          <li
                            key={`${w.title}-tech-${ts}`}
                            className="
                              rounded-full border border-green/25 bg-blue-100
                              px-3 py-1 text-xs font-medium text-green
                            "
                          >
                            {ts}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Accordion>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green">Education</h2>
          {education.map((e) => (
            <Accordion
              key={`${e.title}-${e.org}`}
              title={`${e.title} - ${e.org}`}
              date={`${e.start} – ${e.end}`}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-4 rounded-xl border border-green/20 bg-light-green/40 p-4">
                  <p className="text-sm font-semibold text-green">{e.org}</p>
                  <p className="text-xs text-green/70">{e.start} – {e.end}</p>
                </div>
                <div className="md:col-span-8 space-y-4">
                  {e.image && (
                    <Image
                      src={e.image}
                      alt={e.title}
                      width={960}
                      height={480}
                      className="w-full rounded-lg shadow-sm object-cover"
                    />
                  )}
                </div>
              </div>
            </Accordion>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green">Certifications</h2>
          <Accordion title="Professional Certifications" date="">
            <div className="space-y-4">
              {certifications.map((c) => (
                <div
                  key={`${c.title}-${c.year}`}
                  className="rounded-lg border border-green/20 bg-light-green/30 px-4 py-3"
                >
                  <h3 className="font-medium text-green">{c.title}</h3>
                  <p className="text-sm text-green/60">{c.org} • {c.year}</p>
                </div>
              ))}

              <div className="mt-6">
                <a
                  href="/Hubert_Matras_CV.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-green px-4 py-2 text-white transition-colors hover:bg-green/60"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

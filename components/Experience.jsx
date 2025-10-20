"use client";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion";
import Section from "./Section";
import { education, work, certifications } from "../data";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold text-center text-green md:text-4xl tracking-tight">
          EXPERIENCE
        </h1>
      </div>

      <div className="mx-auto w-full space-y-8 md:space-y-10">
        {/* WORK */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl font-semibold text-green">
            Work Experience
          </h2>

          {work.map((w) => (
            <Accordion
              key={`${w.title}-${w.org}`}
              date={`${w.start} – ${w.end}`}
              title={`${w.title} @ ${w.org}`}
            >
              {/* Card Body */}
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left column: meta + bullets + chips */}
                <div className="flex-1 space-y-4">
                  {/* Location + Link row (style mirrors screenshot) */}
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    {w.location && (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {w.location}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9c2.2 0 4.2.8 5.8 2.1" />
                        <path d="M21 12a9 9 0 0 1-9 9c-2.2 0-4.2-.8-5.8-2.1" />
                        <path d="M2 16h20" />
                        <path d="M2 8h20" />
                      </svg>
                      <Link
                        href={w.href}
                        target="_blank"
                        className="underline underline-offset-4 hover:opacity-80"
                      >
                        {new URL(w.href).hostname}
                      </Link>
                    </span>
                  </div>

                  {/* Bullets as readable paragraphs */}
                  <div className="space-y-3 text-base">
                    {w.bullets.map((l, i) => (
                      <p key={`${w.title}-bullet-${i}`}>{l}</p>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {w.techStack.map((ts) => (
                      <li
                        key={`${w.title}-tech-${ts}`}
                        className="text-xs px-3 py-1 rounded-full border border-green text-green"
                      >
                        {ts}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: logo */}
                <div className="shrink-0 self-center md:self-start">
                  <Image
                    src={w.image}
                    alt={`${w.org} logo`}
                    width={140}
                    height={140}
                    className="object-contain"
                    priority
                  />
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
              <div className="space-y-4">
                <p className="text-green font-medium">{e.org}</p>
                {e.image && (
                  <Image
                    src={e.image}
                    alt={e.title}
                    width={480}
                    height={240}
                    className="rounded-lg shadow-sm"
                  />
                )}
              </div>
            </Accordion>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green">
            Certifications
          </h2>
          <Accordion title="Professional Certifications" date="">
            <div className="space-y-4">
              {certifications.map((c) => (
                <div
                  key={`${c.title}-${c.year}`}
                  className="pb-3"
                >
                  <h3 className="font-medium text-green">{c.title}</h3>
                  <p className="text-green/50 text-sm">
                    {c.org} • {c.year}
                  </p>
                </div>
              ))}
              <div className="mt-6">
                <a
                  href="/Hubert_Matras_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green text-white rounded-lg hover:bg-green/60 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

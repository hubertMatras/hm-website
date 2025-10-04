"use client";
import Image from "next/image";
import Accordion from "./Accordion";
import { education, work, certifications } from "../data";

export default function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col w-full px-4 py-12 md:py-16 max-w-none"
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Experience
        </h1>
      </div>
      
      <div className="max-w-4xl mx-auto w-full space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Work Experience</h2>
          {work.map((w) => (
            <Accordion
              key={w.title}
              title={`${w.title} at ${w.org}`}
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium">{w.title}</h3>
                  <span className="text-gray-600 text-sm">
                    {w.start} – {w.end}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{w.org}</p>
                {w.bullets && (
                  <div>
                    <h4 className="font-medium mb-2 text-gray-800">Key Responsibilities & Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {w.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Accordion>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
          {education.map((e) => (
            <Accordion
              key={e.title}
              title={`${e.title} - ${e.org}`}
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium">{e.title}</h3>
                  <span className="text-gray-600 text-sm">
                    {e.start} – {e.end}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{e.org}</p>
                {e.image && (
                  <div className="mt-4">
                    <Image
                      src={e.image}
                      alt={e.title}
                      width={400}
                      height={200}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                )}
              </div>
            </Accordion>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h2>
          <Accordion title="Professional Certifications">
            <div className="space-y-4">
              {certifications.map((c) => (
                <div key={c.title} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <h3 className="font-medium text-gray-900">{c.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {c.org} • {c.year}
                  </p>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="/Hubert_Matras_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

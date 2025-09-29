import Section from "../../components/Section";
import { education, work, certifications } from "../../data/experience";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <Section
      title="Experience & Education"
      description="A concise timeline of my background."
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Work</h3>
          <ul className="space-y-3">
            {work.map((w) => (
              <li key={w.title} className="card">
                <p className="font-medium">{w.title}</p>
                <p className="muted">
                  {w.org} • {w.start} – {w.end}
                </p>
                {w.bullets && (
                  <ul className="list-disc list-inside text-sm mt-2">
                    {w.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Education</h3>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.title} className="card">
                <p className="font-medium">{e.title}</p>
                <p className="muted">
                  {e.org} • {e.start} – {e.end}
                </p>
                <Image src={e.image} alt={e.title} width={400} height={200} className="mt-2 rounded-lg" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="card">
                <p className="font-medium">{c.title}</p>
                <p className="muted">
                  {c.org} • {c.year}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/Hubert_Matras_Resume.pdf"
            className="inline-flex mt-4 items-center rounded-xl bg-brand px-4 py-2 hover:bg-brand-600"
          >
            Download resume (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}

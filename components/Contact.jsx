"use client";
import Section from './Section';

export default function Contact() {
  return (
    <Section
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        GET IN TOUCH
      </h2>
      <p className="text-lg muted text-center mb-8">
        I'm always interested in new opportunities and interesting projects.
        Feel free to reach out if you'd like to work together!
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:your-email@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Email
        </a>
        <a
          href="/Hubert_Matras_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View CV
        </a>
      </div>
    </Section>
  );
}

"use client";
import Section from './Section';

export default function Contact() {
  return (
    <Section
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center text-green mb-8 md:text-4xl">
        GET IN TOUCH
      </h2>
      <p className="text-lg muted text-center mb-8">
        I'm always interested in new opportunities and interesting projects.
        Feel free to reach out if you'd like to work together!
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:contact.hmatras@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green text-white rounded-lg hover:bg-green/60 transition-colors"
        >
          Send Email
        </a>
        <a
          href="/Hubert_Matras_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green text-green rounded-lg hover:bg-green/60 hover:text-white transition-colors"
        >
          View CV
        </a>
      </div>
    </Section>
  );
}

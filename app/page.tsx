import { AboutMe, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex h-full">
      <div className="w-1/2 flex items-center bg-gray-50" id="home">
        <Hero />
      </div>
      <div className="w-1/2 overflow-y-auto scroll-smooth">
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
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
          </div>
        </section>
      </div>
    </div>
  );
}

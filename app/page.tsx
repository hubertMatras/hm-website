import { AboutMe, Contact, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row md:h-full">
      <div className="w-full md:w-1/2 flex items-center bg-cream min-h-[100vh] md:min-h-0 md:h-full" id="home">
        <Hero />
      </div>
      <div className="w-full md:w-1/2 md:overflow-y-auto scroll-smooth">
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
          <Contact />
        </section>
      </div>
    </div>
  );
}

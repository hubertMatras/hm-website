import { AboutMe, Contact, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row md:h-full">
      <div
        className="w-full md:w-1/2 flex items-center bg-cream min-h-[100vh] md:h-full"
        id="home"
      >
        <Hero />
      </div>
      <div className="w-full md:w-1/2 md:overflow-y-auto scroll-smooth">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

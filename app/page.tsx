import { AboutMe, Contact, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-full">
      <div
        className="w-full lg:w-[40%] flex items-center bg-cream min-h-[100vh] lg:min-h-0 lg:h-full"
        id="home"
      >
        <Hero />
      </div>
      <div className="w-full lg:w-[60%] lg:overflow-y-auto scroll-smooth">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

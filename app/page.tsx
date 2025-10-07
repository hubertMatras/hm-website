import { AboutMe, Contact, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-full">
      <div
        className="w-full flex items-center bg-cream min-h-[100vh] lg:w-[40%] lg:min-h-0 lg:h-full"
        id="home"
      >
        <Hero />
      </div>
      <div className="w-full flex flex-col items-center scroll-smooth lg:w-[60%] lg:overflow-y-auto">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

import { AboutMe, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <Hero />
      </div>
      <div className="w-1/2 overflow-y-auto">
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

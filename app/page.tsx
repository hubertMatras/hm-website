"use client"
import { useEffect, useState } from "react";
import { AboutMe, Contact, Experience, Hero, Projects } from "../components";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({
    positionX: 0,
    positionY: 0,
  });

  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      setMousePosition({ positionX: e.clientX, positionY: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-full">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.positionX}px ${mousePosition.positionY}px, rgba(148, 163, 184, 0.5), transparent 90%)`,
        }}
      />

      <div
        className="w-full flex items-center bg-light-green/60 min-h-[100vh] lg:w-[40%] lg:min-h-0 lg:h-full"
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

import Section from "../components/Section";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        title="About Me"
        description="A quick intro: skills, interests, and goals."
      >
        <div className="grid md:grid-cols-[160px,1fr] gap-6 items-start">
          <div className="relative h-40 w-40 rounded-2xl overflow-hidden border">
            <Image
              src="/avatar.png"
              alt="Hubert Matras"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3">
            <p>
              I'm a Junior Software Engineer focused on modern frontend: React,
              Next.js, TypeScript, and Tailwind.
            </p>
            <p>
              I care about accessibility, clean design systems, and delightful
              UX.
            </p>
            <div>
              <h3 className="font-semibold">Technologies</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Node.js",
                ].map((t) => (
                  <li key={t} className="text-xs px-2 py-1 rounded-full border">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="featured"
        title="Featured Projects"
        description="A few things I've been working on recently."
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </>
  );
}

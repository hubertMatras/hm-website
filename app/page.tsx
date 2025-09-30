import Section from "../components/Section";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
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
import Section from "../../components/Section";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      description="Selected projects with tech stacks and links."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}

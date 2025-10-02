import { projects } from "../../data";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
  );
}

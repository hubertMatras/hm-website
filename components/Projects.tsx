"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col w-full px-4 py-12 md:py-16 max-w-none"
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

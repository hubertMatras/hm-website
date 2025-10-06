"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { projects } from "../data";

interface Project {
  title: string;
  description: string;
  tagline: string;
  tech: string[];
  repo: string;
  demo?: string;
  image: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      id="projects"
      className="flex flex-col w-full px-20 py-12 md:py-16 max-w-none"
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tagline={project.tagline}
            image={project.image}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

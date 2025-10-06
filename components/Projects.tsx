"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Section from './Section';
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
    <Section
      id="projects"
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold text-center text-blue-900 md:text-4xl">
          PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
    </Section>
  );
}

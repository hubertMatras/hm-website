"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "../icons";

interface Project {
  title: string;
  description: string;
  tagline: string;
  tech: string[];
  repo: string;
  demo?: string;
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 dark:bg-black/80"
        onClick={onClose}
      />
      <div className="relative bg-light-green/90 dark:bg-slate-800/95 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        )}

        {/* Project Details */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl text-green dark:text-light-green font-bold mb-2">{project.title}</h2>
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-slate-700 text-green dark:text-light-green rounded-full">
              {project.tagline}
            </span>
          </div>

          <p className="text-gray-700 dark:text-slate-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg text-green dark:text-light-green font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-slate-700 text-green dark:text-light-green rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-slate-950 text-white hover:bg-gray-800 dark:hover:bg-slate-900 transition-colors rounded-lg"
            >
              <GitHubIcon className="w-5 h-5" />
              View Code
            </Link>
            
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green dark:bg-light-green text-white dark:text-slate-900 rounded-lg hover:bg-green/60 dark:hover:bg-light-green/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
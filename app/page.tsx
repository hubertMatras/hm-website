import Section from "../components/Section";
import { projects, techStack } from '../data';
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        title="About Me"
      >
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4 leading-relaxed text-slate-700">
            <p>
              I’m a dedicated and creative Software Engineer with a degree in
              Computer Science from Swansea University. My studies gave me a
              strong foundation in programming, software design, and data-driven
              solutions.
            </p>
            <p>
              Outside of work, I’m a passionate footballer and was fortunate to
              play at an academy level and professionally in Poland’s top division before transitioning
              into tech.
            </p>
            <p>
              At Sky, I’ve gained hands-on experience across diverse teams. As
              part of the AI development group, I explored real-world
              applications of machine learning and automation at scale. More
              recently, I’ve contributed to a frontend-focused UX/UI team, where
              I’ve honed my ability to design and build intuitive, user-centred
              solutions for a fast-paced national company.
            </p>
            <p>
              These combined experiences have not only deepened my technical
              expertise but also broadened my perspective across multiple areas
              of technology. I’m eager to keep learning, stay at the forefront
              of innovation, and contribute to impactful projects alongside
              talented professionals.
            </p>
          </div>
          <aside className="md:top-24">
            <div className="card rounded-2xl border p-5">
              <h3 className="font-semibold text-2xl text-center">Technologies</h3>

              <div className="mt-5">
                <p className="text-lg font-bold">Proficient</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {techStack.proficient.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-blue-500"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-lg font-bold">Worked With</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {techStack.workedWith.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-blue-600"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
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

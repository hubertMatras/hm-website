"use client";
import { techStack } from "../data";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col w-full px-4 py-12 md:py-16 max-w-none"
    >
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
          About Me
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-1 w-full items-start">
        <div className="space-y-4 leading-relaxed text-slate-700">
          <p>
            I’m a dedicated and creative Software Engineer with a degree in
            Computer Science from Swansea University. My studies gave me a
            strong foundation in programming, software design, and data-driven
            solutions.
          </p>
          <p>
            Outside of work, I’m a passionate footballer and was fortunate to
            play at an academy level and professionally in Poland’s top division
            before transitioning into tech.
          </p>
          <p>
            At Sky, I’ve gained hands-on experience across diverse teams. As
            part of the AI development group, I explored real-world applications
            of machine learning and automation at scale. More recently, I’ve
            contributed to a frontend-focused UX/UI team, where I’ve honed my
            ability to design and build intuitive, user-centred solutions for a
            fast-paced national company.
          </p>
          <p>
            These combined experiences have not only deepened my technical
            expertise but also broadened my perspective across multiple areas of
            technology. I’m eager to keep learning, stay at the forefront of
            innovation, and contribute to impactful projects alongside talented
            professionals.
          </p>
        </div>
        <aside className="md:top-24">
          <div className="card rounded-2xl border p-5 shadow-sm">
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
    </div>
  );
}
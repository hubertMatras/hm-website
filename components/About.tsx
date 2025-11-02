// About.tsx
"use client";
import { techStack } from "../data";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <Section id="about">
      <div className="mb-12 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-green">
          ABOUT ME
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-8">
        <div className="rounded-2xl border border-green/20 bg-light-green/40 p-5 shadow-sm">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl ring-1 ring-green/20">
            <Image
              src="/avatar.png"
              alt="Portrait"
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-green">
              Software Engineer
            </p>
            <p className="text-xs text-green/70">UI/UX • Fullstack</p>
          </div>

          <div className="my-5 h-px w-full bg-green/20" />

          <ul className="grid grid-cols-2 gap-2 text-xs">
            <li className="rounded-lg border border-green/20 bg-white/60 px-3 py-2">
              <span className="block font-semibold text-green">
                Design Systems
              </span>
              <span className="text-green/70">Reusable UI at scale</span>
            </li>
            <li className="rounded-lg border border-green/20 bg-white/60 px-3 py-2">
              <span className="block font-semibold text-green">Backend</span>
              <span className="text-green/70">Java • Python</span>
            </li>
            <li className="rounded-lg border border-green/20 bg-white/60 px-3 py-2">
              <span className="block font-semibold text-green">CI/CD</span>
              <span className="text-green/70">Concourse • Octopus</span>
            </li>
            <li className="rounded-lg border border-green/20 bg-white/60 px-3 py-2">
              <span className="block font-semibold text-green">AI tooling</span>
              <span className="text-green/70">OpenAI APIs</span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Hubert_Matras_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-3 py-2 text-xs font-medium text-white hover:bg-green/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3M6 20h12a2 2 0 0 0 2-2V7.4a1 1 0 0 0-.3-.7L14.3 2.3a1 1 0 0 0-.7-.3H6A2 2 0 0 0 4 4v14a2 2 0 0 0 2 2Z" />
              </svg>
              Resume
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-green/30 bg-white/70 px-3 py-2 text-xs font-medium text-green hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="space-y-4 leading-relaxed">
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
            contributed to a frontend-focused UX/UI team, honing my ability to
            design and build intuitive, user-centred solutions for a fast-paced
            national company.
          </p>
          <p>
            These experiences have deepened my technical expertise and broadened
            my perspective across multiple areas of technology. I’m eager to
            keep learning, stay at the forefront of innovation, and contribute
            to impactful projects alongside talented professionals.
          </p>

          <div className="rounded-xl border border-green/20 bg-light-green/40 p-4 text-sm text-green dark:text-green-400">
            <p className="font-medium">
              AI and Software Engineer passionate about creating intelligent,
              user-centred digital experiences. I blend machine learning
              innovation with thoughtful frontend design to deliver scalable,
              impactful solutions.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="rounded-2xl border border-green/20 bg-white/70 p-5">
          <h3 className="text-center text-2xl font-bold text-green">
            TECH STACK
          </h3>

          <div className="mt-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-green/80">
              Proficient
            </h4>
            <ChipList items={techStack.proficient} />
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-green/80">
              Worked With
            </h4>
            <ChipList items={techStack.workedWith} />
          </div>

          {techStack.languages?.length ? (
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-green/80">
                Languages
              </h4>
              <ChipList items={techStack.languages} small />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

function ChipList({
  items,
  small = false,
}: {
  items: string[];
  small?: boolean;
}) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={[
            "rounded-full border border-green/25 bg-blue-100 text-green",
            small ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs font-medium",
          ].join(" ")}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

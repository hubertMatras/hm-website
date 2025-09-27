import Image from "next/image";
import Section from "../../components/Section";

export default function AboutPage() {
  return (
    <Section
      title="About Me"
      description="A quick intro: skills, interests, and goals."
    >
      <div className="grid md:grid-cols-[160px,1fr] gap-6 items-start">
        <div className="relative h-40 w-40 rounded-2xl overflow-hidden border">
          <Image
            src="/avatar.jpg"
            alt="Hubert Matras"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-3">
          <p>
            I'm a Junior Software Engineer focused on modern frontend: React,
            Next.js, TypeScript, and Tailwind.
          </p>
          <p>
            I care about accessibility, clean design systems, and delightful UX.
          </p>
          <div>
            <h3 className="font-semibold">Technologies</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"].map(
                (t) => (
                  <li key={t} className="text-xs px-2 py-1 rounded-full border">
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

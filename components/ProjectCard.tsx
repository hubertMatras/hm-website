import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tech,
  repo,
  demo,
  image,
}: {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
}) {
  return (
    <div className="card flex flex-col">
      {image && (
        <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-xl bg-slate-100">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      )}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm muted">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <li key={t} className="text-xs px-2 py-1 rounded-full border border-blue-600">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        {repo && (
          <Link className="text-sm hover:underline" href={repo} target="_blank">
            GitHub
          </Link>
        )}
        {demo && (
          <Link className="text-sm hover:underline" href={demo} target="_blank">
            Live demo
          </Link>
        )}
      </div>
    </div>
  );
}

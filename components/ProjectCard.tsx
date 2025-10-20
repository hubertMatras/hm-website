import Image from "next/image";

export default function ProjectCard({
  title,
  tagline,
  image,
  onClick,
}: {
  title: string;
  tagline: string;
  image?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="block cursor-pointer"
    >
      <div className="card flex flex-col items-center rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
        {image && (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg text-white">{title}</h3>
          <p className="text-sm text-green/60">{tagline}</p>
        </div>
      </div>
    </div>
  );
}

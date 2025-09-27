import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const icons = { github: Github, linkedin: Linkedin, email: Mail } as const;

export default function SocialIcon({
  type,
  href,
}: {
  type: keyof typeof icons;
  href: string;
}) {
  const Icon = icons[type];
  return (
    <Link
      href={href}
      target={type === "email" ? undefined : "_blank"}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
    >
      <Icon size={16} />
      <span className="hidden sm:inline capitalize">{type}</span>
    </Link>
  );
}

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="px-4 py-6 flex flex-col items-center justify-between gap-4 lg:border-t-1 lg:border-slate-300 lg:flex-row">
      <p className="text-sm muted">
        © {new Date().getFullYear()} Hubert Matras
      </p>
      <div className="flex items-center gap-4 text-sm">
        <Link
          href="https://github.com/hubertMatras"
          className="inline-flex items-center"
          target="_blank"
        >
          <GitHubIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hubert-matras"
          className="hover:underline"
          target="_blank"
        >
          <LinkedInIcon className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}

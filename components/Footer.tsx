import Link from "next/link";
import { GitHubIcon } from "../icons/github";
import { LinkedInIcon } from "../icons/linkedIn";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 mt-16">
      <div className="max-w-none w-full px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm muted">
          © {new Date().getFullYear()} Hubert Matras. All rights reserved.
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
      </div>
    </footer>
  );
}

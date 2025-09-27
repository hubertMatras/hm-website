import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 mt-16">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm muted">
          © {new Date().getFullYear()} Hubert Matras. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="https://github.com/hubertMatras"
            className="hover:underline"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/hubert-matras"
            className="hover:underline"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

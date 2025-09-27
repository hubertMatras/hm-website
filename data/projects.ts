export const projects = [
  {
    title: "Portfolio Website",
    description:
      "This site – built with Next.js, TypeScript, Tailwind, and deployed to Vercel.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/hubert-matras/portfolio",
    demo: "https://your-vercel-url.vercel.app",
    image: "/og-image.png",
  },
  {
    title: "Accessibility Checklist",
    description:
      "MDX-driven checklist with custom React components and styled-components.",
    tech: ["React", "MDX", "styled-components"],
    repo: "https://github.com/hubert-matras/a11y-checklist",
  },
] as const;

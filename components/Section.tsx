import { ReactNode } from "react";

export default function Section({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="max-w-none w-full px-4 py-12 md:py-16">
      <div className="mb-6">
        <h2 className="h2">{title}</h2>
        {description && <p className="mt-2 muted max-w-2xl">{description}</p>}
      </div>
      {children}
    </section>
  );
}

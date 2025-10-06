"use client";

interface Section {
  children: React.ReactNode;
  id: string;
}

export default function Section({ children, id }: Section) {
  return (
    <section id={id} className="flex flex-col w-full px-8 py-8 md:py-12 max-w-none">
      {children}
    </section>
  );
}

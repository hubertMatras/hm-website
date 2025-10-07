"use client";

interface Section {
  children: React.ReactNode;
  id: string;
}

export default function Section({ children, id }: Section) {
  return (
    <section id={id} className="flex flex-col w-full px-12 py-12 max-w-4xl mx-auto">
      {children}
    </section>
  );
}

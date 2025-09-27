"use client";
import Section from "../../components/Section";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      title="Contact"
      description="Send me a message or reach out via social links."
    >
      <form onSubmit={onSubmit} className="card max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            required
            className="w-full rounded-xl border px-3 py-2 bg-transparent"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            required
            type="email"
            className="w-full rounded-xl border px-3 py-2 bg-transparent"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            required
            rows={5}
            className="w-full rounded-xl border px-3 py-2 bg-transparent"
            id="message"
            name="message"
          />
        </div>
        <button
          disabled={status === "loading"}
          className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:bg-brand-600 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-600">
            Thanks! I'll get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Try again.
          </p>
        )}
      </form>
    </Section>
  );
}

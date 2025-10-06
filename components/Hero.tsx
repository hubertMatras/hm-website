"use client";
import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="w-full h-full grid grid-rows-[1fr_auto]">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-center lg:text-5xl">
          FROM A PROFESSIONAL FOOTBALLER TO A SOFTWARE ENGINEER
          <br />
        </h1>
        <h1 className="text-3xl font-bold text-center lg:text-5xl">
          <br />I am <span className="text-blue-600">HUBERT</span>
        </h1>
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => {
              const element = document.querySelector("#projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center rounded-xl border-2 border-blue-600 px-5 py-3 hover:bg-slate-200"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center rounded-xl border-2 border-blue-600 px-5 py-3 hover:bg-slate-200"
          >
            Contact Me
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

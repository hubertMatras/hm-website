"use client";
import Footer from "./Footer";

export default function Hero() {
  return (
    <section className="w-full h-full grid grid-rows-[1fr_auto]">
      <div className="flex flex-col items-center justify-center lg:items-start px-4">
        <h1 className="text-3xl font-bold text-white text-center lg:text-left lg:text-5xl">
          <span className="text-green">Hubert Matras</span>
        </h1>
        <p className="font-bold text-white mt-4 text-center lg:text-left">
          FROM A PROFESSIONAL FOOTBALLER TO A SOFTWARE ENGINEER
          <br />
        </p>
        <div className="mt-8 flex gap-4 justify-center lg:justify-start">
          <button
            onClick={() => {
              const element = document.querySelector("#projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center rounded-xl border-2 text-green border-green px-5 py-3 hover:bg-green/60 hover:text-white"
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
            className="inline-flex items-center rounded-xl border-2 text-green border-green px-5 py-3 hover:bg-green/60 hover:text-white"
          >
            Contact Me
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

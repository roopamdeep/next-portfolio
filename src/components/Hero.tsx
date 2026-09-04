"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [
          taglineRef.current,
          nameRef.current,
          descRef.current,
          buttonRef.current,
        ],
        { opacity: 0, y: 30, duration: 1, stagger: 0.15, ease: "power3.out" },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden"
    >
      <span className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs tracking-widest text-neutral-500">
        SCROLL TO EXPLORE
      </span>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-purple-600/10 blur-3xl" />

      <p
        ref={taglineRef}
        className="text-purple-300 text-sm tracking-widest mb-4"
      >
        FULL STACK DEVELOPER
      </p>
      <h1
        ref={nameRef}
        className="text-5xl md:text-8xl font-bold leading-none mb-6 text-neutral-100"
      >
        Roopamdeep Kaur
      </h1>
      <p ref={descRef} className="text-neutral-400 max-w-md mb-8">
        I build fast, thoughtful and interactive digital experiences.
      </p>
      <button
        ref={buttonRef}
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-fit bg-white text-black px-6 py-3 rounded-md text-sm font-medium"
      >
        Explore my work ↗
      </button>
    </section>
  );
}

"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      })),
    [],
  );

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
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle 3s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <span className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs tracking-widest text-neutral-500">
        SCROLL TO EXPLORE
      </span>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-purple-600/10 blur-3xl" />

      <p
        ref={taglineRef}
        className="text-purple-300 text-sm tracking-widest mb-4 relative"
      >
        FULL STACK DEVELOPER
      </p>
      <h1
        ref={nameRef}
        className="font-[family-name:var(--font-oswald)] text-6xl md:text-9xl font-bold uppercase leading-[0.85] tracking-tight mb-6 text-neutral-100 relative"
      >
        Roopamdeep
        <br />
        Kaur
      </h1>
      <p ref={descRef} className="text-neutral-400 max-w-md mb-8 relative">
        I build fast, thoughtful and interactive digital experiences.
      </p>
      <button
        ref={buttonRef}
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-fit bg-white text-black px-6 py-3 rounded-md text-sm font-medium relative"
      >
        Explore my work ↗
      </button>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 60 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      })),
    );
  }, []);

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

      gsap.to(shape1Ref.current, {
        y: -20,
        x: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(shape2Ref.current, {
        y: 25,
        x: -10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(shape3Ref.current, {
        y: -15,
        x: -20,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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

      <div className="hidden md:block absolute right-[10%] top-[20%] w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="hidden md:block absolute right-[25%] top-[55%] w-56 h-56 rounded-full bg-purple-400/15 blur-3xl" />

      <div
        ref={shape1Ref}
        className="hidden md:block absolute right-[15%] top-[25%] w-20 h-20 rounded-2xl border border-purple-400/30 bg-purple-500/5 backdrop-blur-sm"
        style={{ transform: "rotate(20deg)" }}
      />
      <div
        ref={shape2Ref}
        className="hidden md:block absolute right-[35%] top-[45%] w-14 h-14 rounded-full border border-purple-300/30 bg-purple-400/5 backdrop-blur-sm"
      />
      <div
        ref={shape3Ref}
        className="hidden md:block absolute right-[12%] top-[60%] w-10 h-10 rounded-lg border border-purple-300/30 bg-purple-500/5 backdrop-blur-sm"
        style={{ transform: "rotate(-15deg)" }}
      />

      <span className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs tracking-widest text-neutral-500">
        SCROLL TO EXPLORE
      </span>

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

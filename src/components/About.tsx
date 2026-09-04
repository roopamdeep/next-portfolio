"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Gem, Box, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    num: "01",
    title: "Curious",
    icon: Rocket,
    description:
      "I love exploring new technologies and understanding how things work.",
    highlight: true,
  },
  {
    num: "02",
    title: "Creative",
    icon: Gem,
    description:
      "I enjoy turning ideas into clean, modern and intuitive experiences.",
  },
  {
    num: "03",
    title: "Problem solver",
    icon: Box,
    description:
      "I like breaking down complex problems and building simple solutions.",
  },
  {
    num: "04",
    title: "Full stack developer",
    icon: Terminal,
    description: "I build end to end applications with passion and dedication.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 md:px-20 py-24 relative"
    >
      <span className="absolute left-4 top-16 text-7xl font-bold text-neutral-900 select-none hidden md:block">
        01
      </span>
      <p className="text-purple-300 text-sm tracking-widest mb-4">ABOUT ME</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-2xl">
        The developer behind the screen
      </h2>
      <p className="text-neutral-400 max-w-2xl leading-relaxed mb-6">
        I'm a Full-Stack Developer based in Toronto, Canada. I hold a Master's
        in Software Engineering and have over 3 years of experience building
        scalable, user-focused web applications using React, TypeScript,
        Node.js, and Azure. I love combining clean design with efficient code —
        transforming ideas into seamless, functional, and beautiful digital
        experiences. My current focus is on building intuitive interfaces,
        AI-powered features, and automation tools that make everyday workflows
        smarter and more meaningful.
      </p>

      <button
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-sm text-neutral-300 border border-neutral-700 rounded-md px-4 py-2 mb-12 hover:text-white hover:border-neutral-500 transition-colors"
      >
        Know more about me ↗
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {traits.map((trait) => {
          const Icon = trait.icon;
          return (
            <div
              key={trait.title}
              className={`rounded-xl p-4 bg-neutral-900 border ${
                trait.highlight ? "border-purple-400" : "border-neutral-800"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <Icon size={18} className="text-purple-300" />
                <span className="text-xs text-neutral-600">{trait.num}</span>
              </div>
              <p className="text-white font-medium mb-2">{trait.title}</p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                {trait.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

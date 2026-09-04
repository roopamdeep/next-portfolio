"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiSharp,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C#", icon: SiSharp, color: "#239120" },
  { name: ".NET", icon: AiOutlineDotNet, color: "#512BD4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 40 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      })),
    );
  }, []);

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
      id="skills"
      className="px-6 md:px-20 py-24 relative overflow-hidden"
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

      <span className="absolute left-4 top-8 text-7xl font-bold text-neutral-900 select-none hidden md:block">
        03
      </span>

      <div className="relative mb-16">
        <p className="text-purple-300 text-sm tracking-widest mb-4">
          MY TECH STACK
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Technologies I work with
        </h2>
        <p className="text-neutral-400 max-w-sm">
          I use modern tools and technologies to build scalable and efficient
          applications.
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="relative flex flex-wrap justify-center gap-x-10 gap-y-10">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const wave = i % 2 === 0 ? "-translate-y-4" : "translate-y-4";
            return (
              <div
                key={skill.name}
                className={`flex flex-col items-center gap-2 ${wave}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-lg">
                  <Icon size={24} style={{ color: skill.color }} />
                </div>
                <span className="text-xs text-neutral-400 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

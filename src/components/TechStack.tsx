"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

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

      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-6 md:px-20 pt-32 pb-24 relative overflow-hidden"
    >
      <span className="absolute left-4 top-32 text-7xl font-bold text-neutral-900 select-none hidden md:block">
        03
      </span>
      <p className="text-purple-300 text-sm tracking-widest mb-4">
        MY TECH STACK
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-16">
        Technologies I work with
      </h2>

      <div className="relative w-full max-w-2xl mx-auto h-72 flex items-center justify-center overflow-hidden">
        <div
          ref={orbitRef}
          className="absolute w-full h-44 border border-dashed border-purple-900/40 rounded-full"
        >
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 2 * Math.PI;
            const x = 50 + 46 * Math.cos(angle);
            const y = 50 + 46 * Math.sin(angle);
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="absolute w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                title={skill.name}
              >
                <Icon size={20} className="text-neutral-300" />
              </div>
            );
          })}
        </div>
        <div className="w-6 h-6 rounded-full bg-purple-500/30" />
      </div>
    </section>
  );
}

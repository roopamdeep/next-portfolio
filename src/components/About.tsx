"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, Gem, Box, Terminal, Cpu, FolderGit2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

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

const stats = [
  { label: "Years of Experience", value: "3+", icon: Cpu },
  { label: "Technologies", value: "10+", icon: Terminal },
  { label: "GitHub Repos", value: "25", icon: FolderGit2 },
];

export default function About() {
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
      id="about"
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

      <span className="absolute left-4 top-16 text-7xl font-bold text-neutral-900 select-none hidden lg:block">
        01
      </span>

      <div className="relative">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-purple-300 text-sm tracking-widest mb-4">
              ABOUT ME
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase mb-8">
              The developer behind the screen
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              I'm Roopamdeep, a full-stack developer based in Toronto, building
              software that turns messy, everyday problems into something people
              actually enjoy using. With a Master's in Software Engineering and
              3+ years of hands-on experience across React, TypeScript, Node.js,
              and Azure, I care less about following trends and more about
              shipping things that genuinely work well. Lately I've been
              obsessed with what happens when you pair solid engineering with AI
              that actually earns its place in a product, not bolted on for the
              sake of it, but woven into the workflow so it quietly makes
              people's lives easier. <br></br>I'm the kind of person who reads
              documentation for fun and then forgets to eat lunch because I
              found something interesting three links deep. If a problem is hard
              enough to be annoying, I'm probably already invested.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-neutral-300 border border-neutral-700 rounded-md px-4 py-2 hover:text-white hover:border-neutral-500 transition-colors"
            >
              Know more about me ↗
            </button>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-5"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}

            <div className="mt-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-5">
              <p className="font-(family-name:--font-fredoka) text-2xl bg-linear-to-r from-white to-blue-300 bg-clip-text text-transparent">
                "Curious by nature, developer by trade."
              </p>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
}

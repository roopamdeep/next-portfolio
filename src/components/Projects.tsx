"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

const projects = [
  {
    title: "Vault",
    description:
      "A full-stack personal finance platform with Plaid bank connectivity, automated transaction categorization via a Python microservice, anomaly detection, and budget forecasting.",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
    github: "https://github.com/roopamdeep/vault",
    demo: "https://vault-drab-eight.vercel.app/login",
    image: "/projects/vault.png",
  },
  {
    title: "StackMatch",
    description:
      "An AI hiring platform matching developers to jobs based on tech stack alignment, JWT auth, AI-powered resume scoring, and AWS S3 file storage.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/roopamdeep/stackmatch",
    demo: "https://stackmatch-rose.vercel.app/",
    image: "/projects/stackmatch.png",
  },
  {
    title: "TenantTrack",
    description:
      "A multi-role property management app where landlords manage properties and tenants submit maintenance requests with email notifications.",
    tags: ["React", "TypeScript", "Redux", "Node.js"],
    github: "https://github.com/roopamdeep/tenant-track",
    demo: "https://tenant-track-nine.vercel.app/login",
    image: "/projects/tenanttrack.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
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

  const scrollByCard = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: "smooth" });
    setActive((prev) => Math.min(Math.max(prev + dir, 0), projects.length - 1));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
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
        02
      </span>

      <div className="relative">
        <p className="text-purple-300 text-sm tracking-widest mb-4">
          SELECTED WORK
        </p>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Things I've built</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-70 bg-neutral-900 rounded-xl p-6 shrink-0"
            >
              <div className="relative w-full h-32 bg-neutral-800 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-xs">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-300 hover:text-white"
                  >
                    <ExternalLink size={12} /> Live demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-neutral-400 hover:text-white"
                >
                  <LinkIcon size={12} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i === active ? "bg-purple-400" : "bg-neutral-700"
              }`}
            />
          ))}
        </div>

        <button className="mt-8 text-sm text-neutral-300 border border-neutral-700 rounded-md px-4 py-2 hover:text-white hover:border-neutral-500 transition-colors">
          View all projects ↗
        </button>
      </div>
    </section>
  );
}

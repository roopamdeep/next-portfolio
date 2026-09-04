"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
}

export default function Contact() {
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
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 relative overflow-hidden"
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
        04
      </span>

      <div className="grid md:grid-cols-[1fr_1fr_auto] gap-10 items-center relative">
        <div>
          <p className="text-purple-300 text-sm tracking-widest mb-4">
            CONTACT ME
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase mb-2">
            Have an idea?
          </h2>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase text-purple-300 mb-4">
            Let's build it.
          </h2>
          <p className="text-neutral-400 text-sm">
            I'm always open to discussing new projects or creative ideas.
          </p>
        </div>

        <div className="space-y-4 text-neutral-400 text-sm">
          <p className="flex items-center gap-2">
            <Mail size={14} /> roopamdeep.concordia@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} /> Toronto, Canada
          </p>
          <a
            href="https://www.linkedin.com/in/roopamdeep/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <LinkIcon size={14} /> linkedin.com/in/roopamdeep
          </a>
          <a
            href="https://github.com/roopamdeep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <LinkIcon size={14} /> github.com/roopamdeep
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

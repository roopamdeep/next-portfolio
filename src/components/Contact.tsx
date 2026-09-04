"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 relative"
    >
      <span className="absolute left-4 top-16 text-7xl font-bold text-neutral-900 select-none hidden md:block">
        04
      </span>
      <p className="text-purple-300 text-sm tracking-widest mb-4">CONTACT ME</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Have an idea?</h2>
      <h2 className="text-3xl md:text-5xl font-bold text-purple-300 mb-8">
        Let's build it.
      </h2>

      <div className="space-y-3 text-neutral-400 text-sm mb-10">
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

      <a
        href="mailto:roopamdeep.concordia@gmail.com"
        className="inline-block bg-purple-500 text-white px-6 py-3 rounded-md text-sm font-medium"
      >
        Say hello →
      </a>
    </section>
  );
}

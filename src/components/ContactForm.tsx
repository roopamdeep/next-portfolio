"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mwlkqrrq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-400"
      />
      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={4}
        className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-400 resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit bg-gradient-to-r from-purple-600 to-purple-400 text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wide shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-purple-300 transition-all disabled:opacity-50"
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
            ? "Sent! ✓"
            : "Say hello ↗"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs">
          Something went wrong. Try emailing directly instead.
        </p>
      )}
    </form>
  );
}

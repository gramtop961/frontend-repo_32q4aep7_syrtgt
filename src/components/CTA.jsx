import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">
        <h2 className="bg-gradient-to-br from-white to-teal-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
          Let’s build your next unfair advantage
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Bring us your most ambitious roadmap. We’ll turn it into a fast, reliable, and scalable reality.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@nexedge.dev"
            className="group inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
          >
            <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5" />
            hello@nexedge.dev
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            See how we work
            <ArrowRight size={18} className="opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

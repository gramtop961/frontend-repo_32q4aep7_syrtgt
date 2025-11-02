import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & alignment',
    desc: 'Deep dive into your objectives, constraints, and success metrics. We turn ambiguity into a precise brief.'
  },
  {
    title: 'Architecture & strategy',
    desc: 'We shape the system design, interfaces, and rollout plan—prioritizing scale, reliability, and velocity.'
  },
  {
    title: 'Delivery in iterations',
    desc: 'Tight feedback loops. Demos every cycle. Production-grade quality from the first merge.'
  },
  {
    title: 'Operate & optimize',
    desc: 'Observability, SLOs, and continuous improvements to keep you far ahead of demand.'
  }
];

const Process = () => {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-x-0 -top-24 mx-auto h-48 max-w-5xl rounded-full bg-teal-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">How we deliver reliably</h2>
          <p className="mt-3 text-white/70">A pragmatic, outcome-oriented process that turns complexity into clarity.</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-sm font-medium text-white/60">Step {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;

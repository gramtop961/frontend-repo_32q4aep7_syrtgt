import React from 'react';
import { Cpu, Shield, Zap, Layers } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Architecture-first',
    desc: 'We design systems for scale from day one—clean boundaries, smart caching, and cloud-native patterns.'
  },
  {
    icon: Shield,
    title: 'Reliability by default',
    desc: 'Type-safe contracts, rigorous testing, and observability built-in so failures are rare and recover fast.'
  },
  {
    icon: Zap,
    title: 'Performance obsessed',
    desc: 'Latency shaved at every layer. We profile, tune, and squeeze every ounce of throughput.'
  },
  {
    icon: Layers,
    title: 'Seamless integration',
    desc: 'API-first delivery that plugs into your stack—frontends, services, and data pipelines.'
  }
];

const Features = () => {
  return (
    <section id="capabilities" className="relative bg-gradient-to-b from-black via-slate-950 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for the edge of scale</h2>
          <p className="mt-3 text-white/70">We combine disciplined engineering with creative problem solving to ship outcomes, not just code.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-teal-400/40 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-teal-500/20 p-2 text-teal-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles size={16} className="text-teal-300" />
          <span className="text-xs tracking-wide text-white/80">Efficient. Performant. Uncompromising quality.</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-teal-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          NexEdge
          <span className="block text-2xl font-semibold text-white/80 sm:text-3xl md:text-4xl">
            The next edge of scalable engineering.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          An elite agency of engineers crafting robust, future-proof systems. We ship code that scales gracefully and performs impeccably, tailored to your exact needs.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
          >
            <Rocket className="transition-transform group-hover:-translate-y-0.5" size={18} />
            Start a project
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Explore capabilities
            <ArrowRight size={18} className="opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

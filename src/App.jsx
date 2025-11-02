import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Process from './components/Process.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Process />
      <CTA />
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} NexEdge. All rights reserved.
      </footer>
    </main>
  );
}

export default App;

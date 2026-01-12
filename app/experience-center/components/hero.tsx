"use client";

import { motion } from "framer-motion";
import gsap from "@/lib/gsap";

export default function ExperienceCenterHero() {
  const handleScroll = () => {
    const target = document.getElementById("strategic-purpose");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      
      {/* Background Video Asset */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/assets/experience-center/hero-center.mp4" type="video/mp4" />
      </video>

      {/* Corporate Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400"
          >
            Physical Sales Innovation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold leading-tight text-white"
          >
            Unveiling the ShowMySpace <br />
            <span className="text-blue-500 text-3xl md:text-6xl">Experience Centre Blueprint</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-3xl text-lg md:text-xl text-neutral-300 leading-relaxed"
          >
            Revolutionize property sales through the power of immersive technology[cite: 245]. 
            Empower prospective clients to vividly experience spaces before construction, 
            thereby reducing hesitation and significantly accelerating conversion rates[cite: 245].
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button 
              onClick={handleScroll}
              className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 shadow-xl shadow-blue-900/20"
            >
              Explore the Blueprint
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
              Download Technical PDF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
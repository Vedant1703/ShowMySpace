"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Zap, TrendingUp } from "lucide-react";

const PURPOSES = [
  {
    title: "Experience Before Building",
    description: "Walk through properties and interiors before construction completes, eliminating uncertainty for your buyers.",
    icon: Eye,
    delay: 0.1,
  },
  {
    title: "Reduce Hesitation",
    description: "Immersive experiences build immense confidence and trust, making the purchase decision feel natural and secure.",
    icon: ShieldCheck,
    delay: 0.2,
  },
  {
    title: "Shorten Sales Cycle",
    description: "Interactive demos accelerate decision-making, moving prospects from exploration to closing at record speeds.",
    icon: Zap,
    delay: 0.3,
  },
  {
    title: "Increase Conversions",
    description: "Achieve significantly higher closing rates through engaging, memorable, and high-tech customer experiences.",
    icon: TrendingUp,
    delay: 0.4,
  }
];

export default function StrategicPurpose() {
  return (
    <section id="strategic-purpose" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm mb-4">Strategic Purpose</h3>
          <h2 className="text-4xl font-bold text-white max-w-2xl">
            Why Physical Experience <br />
            <span className="text-neutral-500">Centres Actually Work</span>
          </h2>
        </div>

        {/* Purpose Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PURPOSES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Descriptive Footer Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 to-transparent border-l-4 border-blue-600"
        >
          <p className="text-white/80 italic text-lg">
            "Experience Centre = Sales Machine. Immersive tech accelerates decisions, interactive configurators boost average order value, and data helps you close smarter." 
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Move, Paintbrush, Columns, PenTool } from "lucide-react";

const USE_CASES = [
  {
    title: "Real Estate Walk-Through",
    description: "Explore properties room by room with deep, immersive VR experiences that make digital spaces feel real.",
    icon: Move,
    delay: 0.1,
  },
  {
    title: "Interior Design Walkthrough",
    description: "Visualise complete interior schemes, textures, and lighting before a single piece of furniture is moved.",
    icon: Paintbrush,
    delay: 0.2,
  },
  {
    title: "Property Comparison",
    description: "Empower buyers to compare multiple units or layouts side-by-side in a synchronized virtual environment.",
    icon: Columns,
    delay: 0.3,
  },
  {
    title: "Space Customisation",
    description: "Let customers personalise finishes, furniture, and lighting in real-time to see their vision come to life.",
    icon: PenTool,
    delay: 0.4,
  }
];

export default function PrimaryUseCases() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Applications</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Primary Use Cases
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            From high-fidelity exploration to interactive decision-making tools.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-start gap-6 p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors group"
            >
              <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
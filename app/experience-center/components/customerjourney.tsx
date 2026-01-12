"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Warm Welcome",
    description: "The journey begins at the reception, where teaser videos and product brochures create a powerful first impression.",
    cite: "305, 306"
  },
  {
    number: "02",
    title: "Pre-Screen",
    description: "Quickly select the specific project, floor, and unit the client is interested in via the touchscreen interface.",
    cite: "307, 308"
  },
  {
    number: "03",
    title: "Experience",
    description: "Deep immersion begins. Clients walk, teleport, and examine high-fidelity finishes within the VR environment.",
    cite: "309, 310"
  },
  {
    number: "04",
    title: "Customise",
    description: "Real-time personalization—choosing colors, flooring, furniture, and lighting to see their vision come to life.",
    cite: "311, 312"
  },
  {
    number: "05",
    title: "Sales Close",
    description: "Finalize with price impact analysis and next steps while the client is at peak engagement.",
    cite: "313, 314"
  }
];

export default function CustomerJourney() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-20">
          <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm mb-4">The Flow</h3>
          <h2 className="text-4xl font-bold text-white">5-Step Customer Journey</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl leading-relaxed">
            A strategic sales journey engineered to move prospects from 
            initial welcome to a finalized close with zero friction.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid gap-8 md:grid-cols-5">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Step Circle */}
              <div className="mb-8 relative z-10 h-24 w-24 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center text-3xl font-bold text-blue-500 group-hover:border-blue-500 transition-colors shadow-2xl">
                {step.number}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Synergy Callout */}
        <div className="mt-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-400 border border-blue-500/20">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                UX + Sales Synergy = Repeatable Conversion Loop 
            </span>
        </div>
      </div>
    </section>
  );
}
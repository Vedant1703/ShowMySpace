"use client";

import { motion } from "framer-motion";
import { Coffee, MonitorPlay, Tablet, Handshake } from "lucide-react";

const ZONES = [
  {
    title: "Reception / Waiting Area",
    description: "Branded signage, teaser videos, and product brochures create the critical first impression.",
    icon: Coffee,
    cite: "274, 275"
  },
  {
    title: "Interactive Zone (Central)",
    description: "The heart of the center. A VR/Mixed Reality demo area with comfortable seating and open sight lines.",
    icon: MonitorPlay,
    cite: "276, 277"
  },
  {
    title: "Konfig Station",
    description: "A dedicated touchscreen tablet for space customisation, fully synced with AR/VR systems.",
    icon: Tablet,
    cite: "278, 279"
  },
  {
    title: "Sales Desk",
    description: "A professional area for representatives equipped with the closing tools needed to finalize deals.",
    icon: Handshake,
    cite: "280, 281"
  }
];

export default function SpaceLayout() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Zones */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Spatial Design</h3>
              <h2 className="text-4xl font-bold text-white">Physical Space Layout</h2>
              <p className="text-neutral-400">
                Optimized for a standard footprint of <span className="text-white font-semibold">12-15 ft x 15-20 ft</span>, 
                designed for maximum flow and conversion.
              </p>
            </div>

            <div className="space-y-8">
              {ZONES.map((zone, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 bg-blue-500/5">
                    <zone.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white">{zone.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {zone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Blueprint */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center"
          >
             <img 
                src="/assets/experience-center/center-layout-blueprint.jpg" 
                alt="Experience Center Blueprint" 
                className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-6 left-6">
                <span className="text-xs font-mono text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    Standard Layout: 250-300 SQ FT
                </span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
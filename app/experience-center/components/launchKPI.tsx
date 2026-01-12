"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BarChart, Rocket, Settings2, PlusCircle } from "lucide-react";

const STEPS = [
  { id: "01", title: "Pre-Deployment", desc: "Confirmation of space, electrical, internet, furniture, and branding.", cite: "354, 355" },
  { id: "02", title: "Tech Setup", desc: "Display calibration, VR app installation, tablet/kiosk syncing, and network optimisation.", cite: "357, 358" },
  { id: "03", title: "Go-Live", desc: "Staff training, pilot runs, and soft launch invites to internal stakeholders.", cite: "360, 361" },
  { id: "04", title: "Post-Launch", desc: "Weekly analytics reviews, content updates, and continuous feedback loops.", cite: "369, 370" }
];

const KPIS = [
  { label: "Visitor to VR conversion", icon: BarChart, cite: "363" },
  { label: "VR engagement time", icon: BarChart, cite: "364" },
  { label: "Configuration interactions", icon: BarChart, cite: "365" },
  { label: "Sales closing rate uplift", icon: BarChart, cite: "366" },
  { label: "Average deal size growth", icon: BarChart, cite: "367" }
];

export default function LaunchKPIs() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* LEFT: Deployment Checklist */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Turnkey Deployment</h3>
              <h2 className="text-4xl font-bold text-white">The Launch Checklist</h2>
            </div>

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-blue-500 font-mono font-bold">{step.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-sm text-neutral-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: KPIs & Add-ons */}
          <div className="space-y-12">
            <div className="p-10 rounded-3xl bg-blue-600 space-y-8 shadow-2xl shadow-blue-900/40">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                <Rocket size={24} />
                Success Metrics (KPIs)
              </h3>
              <div className="grid gap-4">
                {KPIS.map((kpi, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="text-sm font-medium text-white">{kpi.label}</span>
                    <span className="text-[10px] text-white/50 font-mono">ID: {kpi.cite}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-Ons */}
            <div className="space-y-6">
              <h4 className="text-white font-bold flex items-center gap-3 italic">
                <PlusCircle size={20} className="text-blue-500" />
                Optional Add-Ons
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Mixed Reality Sandbox", "Holographic Projections", "Touchless Interaction", "Social Sharing"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-neutral-900 border border-white/10 text-xs text-neutral-400">
                    {tag} 
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Final Conclusion */}
        <div className="mt-24 text-center py-12 border-t border-white/10">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience Centre = Sales Machine</h2>
           <p className="text-neutral-500 max-w-3xl mx-auto italic">
            Immersive tech accelerates decisions, interactive configurators boost average order value, and real-time data helps you close smarter.
           </p>
        </div>
      </div>
    </section>
  );
}
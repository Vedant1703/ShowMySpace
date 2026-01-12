"use client";

import { motion } from "framer-motion";
import { CreditCard, RefreshCcw, BarChart3, PieChart } from "lucide-react";

const COST_BREAKDOWN = [
  {
    title: "Initial Setup",
    total: "₹4L - 7L",
    items: [
      { label: "Hardware", value: "₹3-5L", cite: "330, 331" },
      { label: "Install & Training", value: "₹1-2L", cite: "332, 333" }
    ],
    icon: CreditCard,
    color: "blue"
  },
  {
    title: "Total Investment",
    total: "₹6L - 11L",
    items: [
      { label: "Software Setup", value: "Included", cite: "336, 337" },
      { label: "Support SLA", value: "₹15k-50k/mo", cite: "347" }
    ],
    icon: BarChart3,
    color: "blue"
  }
];

const REVENUE_MODELS = [
  { name: "CAPEX Sale", desc: "One-time purchase for full center ownership.", cite: "340, 341" },
  { name: "SAAS Model", desc: "Flexible monthly license subscription.", cite: "342, 343" },
  { name: "Revenue Share", desc: "Performance-based model aligned with sales uplift.", cite: "344, 345" },
  { name: "Lead Subscription", desc: "Scalable model paid per lead generated.", cite: "348, 349" }
];

export default function InvestmentROI() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Financial Breakdown */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Investment</h3>
              <h2 className="text-4xl font-bold text-white">Costs & Pricing Models</h2>
              <p className="text-neutral-400">
                Transparent investment tiers tailored to project complexity and scope.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {COST_BREAKDOWN.map((card, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                  <card.icon size={24} className="text-blue-500" />
                  <div>
                    <h4 className="text-neutral-400 text-sm font-medium">{card.title}</h4>
                    <p className="text-3xl font-bold text-white">{card.total}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    {card.items.map((item, j) => (
                      <div key={j} className="flex justify-between text-xs">
                        <span className="text-neutral-500">{item.label}</span>
                        <span className="text-white font-mono">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20 text-sm text-blue-400">
                Note: Content creation varies between ₹30k-1L/month depending on unit volume.
            </div>
          </div>

          {/* Right: Revenue Models */}
          <div className="lg:w-1/2 space-y-8 bg-neutral-900/40 p-10 rounded-3xl border border-white/5">
            <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <PieChart size={20} className="text-blue-500" />
                Flexible Revenue Models
            </h4>
            
            <div className="space-y-4">
              {REVENUE_MODELS.map((model, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all flex justify-between items-center group"
                >
                  <div className="space-y-1">
                    <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">{model.name}</p>
                    <p className="text-xs text-neutral-500">{model.desc}</p>
                  </div>
                  <span className="text-[10px] text-neutral-700 font-mono">ID: {model.cite}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}